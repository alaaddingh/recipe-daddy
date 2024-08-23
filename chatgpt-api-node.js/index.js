const express = require('express');
const vision = require('@google-cloud/vision');
const path = require('path');
const fs = require('fs');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create a Vision API client with your JSON key file
const client = new vision.ImageAnnotatorClient({
    keyFilename: path.resolve(__dirname, 'decent-courage-433422-b6-7b9e2bcfc455.json')
});

// Express setup
const app = express();

// Endpoint to process a local image file
app.get('/process-image', async (req, res) => {
    console.log('Received request for /process-image');
    try {
        console.log('Analyzing image...');

        // Specify the path to your local image file
        const imagePath = path.resolve(__dirname, '..', 'src', 'images', 'IMG_3052(1).jpg');
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

        // Log detailed information about detected labels
        labels.forEach((label, index) => {
            console.log(`Label ${index + 1}: ${label}, Confidence Score: ${scores[index]}`);
        });

        if (labels.length === 0) {
            console.log('No labels found.');
        }

        const ingredients = labels.join(', ');
        console.log('Ingredients:', ingredients);

        // Send the results back to the client
        res.json({ ingredients });
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).send('Error processing image');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});