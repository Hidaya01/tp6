const express = require('express');
const router = express.Router();
const Teacher = require('./models/Teacher');
const Course = require('../models/Course');
const verifyToken = require('../middleware/verifyToken');

router.get('/all', verifyToken,  (req, res) => {
    try {
        const teachers =  Teacher.find();
        res.json(teachers);
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ajouter un nouveau professeur
router.post('/add', verifyToken,  (req, res) => {
    const { id, name, bio, cours } = req.body;
    const teacher = new Teacher({ id, name, bio, cours });

    try {
         teacher.save();
        res.status(201).json(teacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Attribuer un cours à un professeur
router.post('/assign/:professeur_id/:cours_id', verifyToken,  (req, res) => {
    try {
        const teacher =  Teacher.findById(req.params.professeur_id);
        const course =  Course.findById(req.params.cours_id);

        if (!teacher || !course) {
            return res.status(404).json({ message: "Professeur ou cours non trouvé" });
        }

        if (!teacher.cours.includes(req.params.cours_id)) {
            teacher.cours.push(req.params.cours_id);
             teacher.save();
        }

        res.json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// retourne la liste des étudiants qui sont inscrit dans un cours donné

router.get('/enrolledStudents/:cours_id', verifyToken,  (req, res) => {
    try {
        const course =  Course.findById(req.params.cours_id);
        if (!course) {
            return res.status(404).json({ message: "Cours non trouvé" });
        }

        const students =  Student.find({ cours: req.params.cours_id });

        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
