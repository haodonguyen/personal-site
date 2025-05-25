// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');
const contactRoutes = require('./routes/contact');
const cors = require('cors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));