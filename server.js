const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env variables
dotenv.config();

const app = express();

// Use environment port for Render (IMPORTANT!)
const port = process.env.PORT || 3000;

// Connect to MongoDB
require('./db');

// CORS Configuration
app.use(cors({
  origin: [
     'https://spiritualblog.vercel.app',
    'https://adminyourdomain.vercel.app'
  ],
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const router = require('./Routes/router');
app.use('/', router);

// Test route
app.get('/', (req, res) => res.send('Backend Working 🔥'));

// Start server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
