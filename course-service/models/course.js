const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    id: String, 
    titre: String, 
    professeur_id: String,
    description: String,
    prix: Number
});

module.exports = mongoose.model('course',Course);

