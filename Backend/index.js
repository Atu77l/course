const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const connectDB = require('./Config/connectDB');
const Course = require('./Model/courseModel');
require('dotenv').config(); // Correct syntax for loading environment variables
const Jwt = require('jsonwebtoken');
const jwtKey = 'e-com'; // Note: In production, you should use a more secure method for storing secrets.
const cors = require('cors');
const { fetch_course, save_course } = require('./Controller/Course_Controller');

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to MongoDB
mongoose.set("strictQuery", true);
connectDB();

// Define routes
app.get('/get', fetch_course);
app.post('/save_course', save_course);

// Start the server
const PORT = process.env.PORT || 4000; // Use the environment variable for port, if available
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
