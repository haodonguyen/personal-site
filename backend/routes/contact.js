// routes/contact.js
const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactController');
const { validateContact } = require('../middlewares/validate');
const {contactLimiter} = require('../middlewares/rateLimit');

router.post('/', contactLimiter, validateContact, submitContact);

module.exports = router;