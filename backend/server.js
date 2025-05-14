require ('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

//Middleware to handle Cors
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*', //* for all origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

//Middleware
app.use(express.json());

//Routes

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
