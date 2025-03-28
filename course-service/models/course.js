const mongoose = require('mongoose');

const Course = new mongoose.Schema({
    id: { type: String, required: true }, 
    titre: { type: String, required: true }, 
    professeur_id: { type: String, required: true },
    description: { type: String, required: true },
    prix: { type: Number, required: true }
});

module.exports = mongoose.model('course',Course);

