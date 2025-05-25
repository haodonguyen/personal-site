// middleware/rateLimit.js
const rateLimit = require('express-rate-limit');

exports.contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many contact requests from this IP, please try again after an hour'
});