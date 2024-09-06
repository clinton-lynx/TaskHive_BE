const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    message: { type: String }
});


module.exports = mongoose.model('contacts', ContactSchema);