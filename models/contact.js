const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    phone: String
});

module.exports = mongoose.model('Contact',ContactSchema);