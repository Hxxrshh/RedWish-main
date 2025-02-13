const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Xano API configuration
const XANO_BASE_URL = process.env.XANO_BASE_URL;
const xanoConfig = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.XANO_API_KEY}`
    }
};
// app.get('/', (req, res) => {
//     res.sendFile(path.join('index.html'));
//   });
// Donation routes
app.post('/api/donations', async (req, res) => {
    try {
        const response = await axios.post(
            `${XANO_BASE_URL}/donations`, 
            req.body,
            xanoConfig
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error submitting donation' });
    }
});

app.get('/api/donations', async (req, res) => {
    try {
        const response = await axios.get(
            `${XANO_BASE_URL}/donations`,
            xanoConfig
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching donations' });
    }
});

// Hospital routes
app.get('/api/hospitals', async (req, res) => {
    try {
        const response = await axios.get(
            `${XANO_BASE_URL}/hospitals`,
            xanoConfig
        );
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching hospitals' });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});