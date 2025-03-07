const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
     id: String, 
     name: String, 
     bio: String,
     cours: [String]

});

module.exports = mongoose.model('Teacher',Teacher);