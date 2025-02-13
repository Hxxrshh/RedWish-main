// app.js or server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

// Your Xano API endpoint - store this in .env file in practice
const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:Xc-sQTWq';

// Middleware
app.use(cors());
app.use(express.json());

// Example route to get data from Xano
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get(`${XANO_BASE_URL}/your-endpoint`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Xano' });
    }
});

// Example route to post data to Xano
app.post('/api/data', async (req, res) => {
    try {
        const response = await axios.post(`${XANO_BASE_URL}/your-endpoint`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error posting data to Xano' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});