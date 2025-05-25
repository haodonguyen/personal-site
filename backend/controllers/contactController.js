// controllers/contactController.js
const Contact = require('../models/Contact');
const transporter = require('../config/email');

exports.submitContact = async (req, res, next) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const contact = new Contact({ name, email, message });
    await contact.save();

    // Send email notification to admin
    await transporter.sendMail({
      from: `"Portfolio Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      html: `
        <h3>New Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Received:</strong> ${new Date().toLocaleString()}</p>
      `,
    });


    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    next(error); // Pass to error handler
  }
};