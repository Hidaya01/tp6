const mongoose = require('mongoose');

const Student = new mongoose.Schema({
     id: String, 
     nom: String, 
     email: String, 
     cours: [String]
});

module.exports = mongoose.model('Student',Student);