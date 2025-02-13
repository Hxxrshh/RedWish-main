import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Xano API configuration
const xanoApi = axios.create({
  baseURL: process.env.XANO_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.XANO_API_KEY}`
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Xano API endpoints
app.get('/api/data', async (req, res) => {
  try {
    const response = await xanoApi.get('/your-endpoint');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from Xano:', error);
    res.status(500).json({ error: 'Failed to fetch data from Xano' });
  }
});

app.post('/api/data', async (req, res) => {
  try {
    const response = await xanoApi.post('/your-endpoint', req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error posting data to Xano:', error);
    res.status(500).json({ error: 'Failed to post data to Xano' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});