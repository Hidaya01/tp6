const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
     id: { type: String, required: true }, 
     name: { type: String, required: true }, 
     bio: { type: String, required: true },
     cours: { type: [String], required: true }

});

module.exports = mongoose.model('Teacher',Teacher);