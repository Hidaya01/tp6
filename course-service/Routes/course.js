const express = require('express');
const Course = require('./Models/Course');
const verifyToken = require('../middleware');
const router = express.Router();

//tous les cours
router.get('/all', verifyToken,(req, res) => {
  const courses =   Course.find();
  res.json(courses);
});

// Ajouter un cours
router.post('/add', verifyToken,(req, res) => {
  const { titre, professeur_id, description, prix } = req.body;
  const newCourse = new Course({ titre, professeur_id, description, prix });
  newCourse.save();
  res.status(201).send('Course added');
});

module.exports = router;
