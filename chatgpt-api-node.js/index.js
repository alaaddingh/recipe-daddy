const express = require('express');
const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const { OpenAI } = require('openai');
const multer = require('multer');
const cors = require('cors');
const axios = require('axios');

// Load environment variables
dotenv.config();

// Define the API's and URL's
const SPOONACULAR_API_URL = 'https://api.spoonacular.com/recipes/complexSearch';
const SPOONACULAR_API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

// Initiate API's 
const client = new vision.ImageAnnotatorClient({
    keyFilename: path.resolve(__dirname, "caramel-feat-438413-s5-e2c4662abc5e.json")
});
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });


// Set up multer for file upload handling
const upload = multer({ dest: path.join(__dirname, '/api/upload') });

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



// Upload endpoint
app.post('/api/upload', upload.single('file'), async (req, res) => {
    console.log('==> Received file upload request');

    const filePath = req.file.path;
    console.log('==> Uploaded file path:', filePath);

    try {
        console.log('==> Analyzing image...');

        if (!fs.existsSync(filePath)) {
            console.error('==> Image file does not exist:', filePath);
            res.status(404).send('==> Image file does not exist');
            return;
        }

        // Using Google Vision for labeling image
        console.log('==> Image file exists. Proceeding with label detection.');
        const [result] = await client.labelDetection(filePath);
        // console.log('==> Label detection result:', JSON.stringify(result, null, 2));

        // Filtering
        const filteredLabels = result.labelAnnotations
            .filter(label => label.score >= 0.7)
            .map(label => label.description)
            .filter(description => !/food/i.test(description));

        if (filteredLabels.length === 0) {
            console.log('==> No valid labels found.');
            return res.json({ ingredients: '==> No valid labels found.' });
        }

        const found_obj = filteredLabels;
        console.log("==> Found objects:", found_obj);

        // Using ChatGPT for isolating one food menu item
        const chatGPTPrompt = `Here is a list of objects detected in an image: ${found_obj.join(', ')}. Go through the list and please respond only with a WHOLE MEAL you have found in this list. If there are multiple food items, please only respond with the very first MEAL you encounter in the comma-separated list. If all you find is an ingredient or no food item at all, please respond with "error".`;
        const chatGPTResponse = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: chatGPTPrompt
            }],
            max_tokens: 150,
        });
        console.log('==> Response from OpenAI:', chatGPTResponse.choices[0].message.content);

        // Search Spoonacular for recipes on that item
        const recipeSearchTerm = chatGPTResponse.choices[0].message.content;
        let recipeResults = [];

        if (recipeSearchTerm && recipeSearchTerm !== 'error') {
            const recipeUrl = `${SPOONACULAR_API_URL}?query=${encodeURIComponent(recipeSearchTerm)}&apiKey=${SPOONACULAR_API_KEY}`;
            const recipeResponse = await axios.get(recipeUrl);
            recipeResults = recipeResponse.data.results;
        }

        // Remove the uploaded file
        fs.unlinkSync(filePath)

        // Resolve result 
        res.json({
            ingredients: found_obj,
            chatgpt_response: chatGPTResponse.choices[0].message.content,
            recipes: recipeResults
        });

    } catch (error) {
        console.error('==> Error processing image:', error);
        res.status(500).send('==> Error processing image');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});