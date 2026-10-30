const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');

//imports 
const connectDatabase = require('./src/configs/dbConfig');

// Load environment variables
dotenv.config();
connectDatabase;

// Initialize Express application
const app = express();

// Middleware configuration
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to Uber Backend API"
    });
});

// Connect to database
connectDatabase();

// Start Express server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
