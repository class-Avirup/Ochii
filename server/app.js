const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const router = require('./Router/auth-user.js');

// Initialize dotenv
dotenv.config();

// Create Express app
const app = express();

// Port configuration
const port = 4001;

// CORS options
const corsOptions = {
  origin: ['https://ochii-42bg.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/auth', router);

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
