const mongoose = require('mongoose');

const user = new mongoose.Schema({
     id: String,
     name: String,
     email: String,
     password:String
});

module.exports = mongoose.model('user',user);