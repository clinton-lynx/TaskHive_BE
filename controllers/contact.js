const contactSchema = require('../models/contact.js');

exports.submitForm = async (req, res, next) => {
    try {
        const { name, email,subject, message } = req.body;

        // Basic validations
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: 'Name, email, subject, and message are required fields' });
        }

        // Create a new contact instance
        const newContact = new contactSchema ({
            name: name,
            email: email,
            subject: subject,
            message: message,
        });

        // Save the contact to the database
        await newContact.save();
        console.log('hddye')
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};