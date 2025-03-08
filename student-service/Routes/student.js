const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const Course = require('../models/Course');
const verifyToken = require('../middleware/verifyToken');

router.get('/all', verifyToken,  (req, res) => {
    try {
        const students = Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ajouter un nouvel étudiant
router.post('/add', verifyToken,  (req, res) => {
    const { id, nom, email, cours } = req.body;
    const student = new Student({ id, nom, email, cours });

    try {
         student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.post('/enroll/:etudiant_id/:cours_id', verifyToken,  (req, res) => {
    try {
        const student =  Student.findById(req.params.etudiant_id);
        const course =  Course.findById(req.params.cours_id);

        if (!student || !course) {
            return res.status(404).json({ message: "Étudiant ou cours non trouvé" });
        }

        if (!student.cours.includes(req.params.cours_id)) {
            student.cours.push(req.params.cours_id);
             student.save();
        }

        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/enrolledCourses/:etudiant_id', verifyToken,  (req, res) => {
    try {
        const student =  Student.findById(req.params.etudiant_id).populate('cours');

        if (!student) {
            return res.status(404).json({ message: "Étudiant non trouvé" });
        }

        res.json(student.cours);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
