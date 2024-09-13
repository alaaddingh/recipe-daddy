const express = require('express');
const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');
const axios = require('axios');

// Load environment variables from .env file
dotenv.config();

// Create a Vision API client with your JSON key file
const client = new vision.ImageAnnotatorClient({
    keyFilename: path.resolve(__dirname, 'decent-courage-433422-b6-b704c284c933.json')
});

// Express setup
const app = express();

// Endpoint to process a local image file
app.get('/process-image', async (req, res) => {
    console.log('Received request for /process-image');
    try {
        console.log('Analyzing image...');

        // Specify the path to your local image file
        const imagePath = path.resolve(__dirname, '..', 'src', 'images', 'tostada_practice_img1.jpg');
        console.log('Resolved image path:', imagePath);

        // Check if file exists
        if (!fs.existsSync(imagePath)) {
            console.error('Image file does not exist:', imagePath);
            res.status(500).send('Image file does not exist');
            return;
        }
        

        console.log('Image file exists. Proceeding with label detection.');

        // Analyze the image using Google Cloud Vision API
        const [result] = await client.labelDetection(imagePath);
        console.log('Label detection result:', JSON.stringify(result, null, 2));

        const labels = result.labelAnnotations.map(label => label.description);
        const scores = result.labelAnnotations.map(label => label.score);

        const filteredLabels = result.labelAnnotations
        .filter(label => label.score >= 0.8)
        .map(label => label.description);

    if (filteredLabels.length === 0) {
        console.log('No labels found with 80% or higher confidence.');
        return res.json({ ingredients: 'No labels with sufficient confidence.' });
    }

    // Log the filtered labels with their confidence scores

    found_obj = [];
    filteredLabels.forEach((label, index) => {
        const score = result.labelAnnotations.find(l => l.description === label).score;
        found_obj.push(label);
        console.log(`Label ${index + 1}: ${label}, Confidence Score: ${score}`);
    });

      
    console.log("found objects:" + found_obj);

        const ingredients = labels.join(', ');
        console.log('Ingredients:', label);

        // Send the results back to the client
        res.json({ ingredients });
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).send('Error processing image');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);

    // Automatically call the /process-image endpoint once the server starts
    try {
        const response = await axios.get(`http://localhost:${PORT}/process-image`);
        console.log('Ingredients from /process-image:', response.data.ingredients);
    } catch (error) {
        console.error('Error calling /process-image:', error.message);
    }
});