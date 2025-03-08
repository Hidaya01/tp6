const mongoose = require('mongoose');

const Student = new mongoose.Schema({
     id: { type: String, required: true }, 
     nom: { type: String, required: true }, 
     email: { type: String, required: true }, 
     cours: { type: [String], required: true }
});

module.exports = mongoose.model('Student',Student);