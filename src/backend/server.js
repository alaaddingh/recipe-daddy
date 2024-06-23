const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

const SPOONACULAR_API_KEY = '376053c399e94573b8ff03c5a97b16dd';

app.get('/search-ingredients', async (req, res) => {
    const query = req.query.query;
    console.log(`Received query: ${query}`);

    try {
        const response = await axios.get(`https://api.spoonacular.com/food/ingredients/search`, {
            params: {
                apiKey: SPOONACULAR_API_KEY,
                query: query
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Spoonacular API' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});