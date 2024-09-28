const mongoose = require('mongoose');

// Define the Writer schema
const writerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    level: {
        type: Number,
        required: true,
        enum: [100, 200, 300, 400, 500], // Allowed levels
    },
    school: {
        type: String,
        required: true,
        trim: true
    },
    idCardPhoto: {
        type: String,  // This will store the file path or URL to the ID card photo
        required: true
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
});

// Create and export the Writer model
const Writer = mongoose.model('Writer', writerSchema);
module.exports = Writer;
