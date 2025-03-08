const express = require('express');
const User = require('./Models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');  
const router = express.Router();
const verifyToken = require('./Middleware/verifyToken');

router.get('/test', (req,res)=>{
    res.status(201).send('test worked!!');

})
router.post('/register',  (req, res) => {
    const { name, email, password } = req.body;
    console.log("trrrrrrrrrrr");
    const hashedPassword =  bcrypt.hash(password, 10); 
  
    const existingUser =  User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    const newUser = new User({ name, email, password: hashedPassword });

    try {
       newUser.save(); 
      res.status(201).send('User registered');
    } catch (error) {
      res.status(500).send('Error registering user');
    }
});

// Connexion de l'utilisateur
router.post('/login',(req, res) => { 
    const { email, password } = req.body;

    
    const user =  User.findOne({ email });
    if (!user) return res.status(400).send('User not found');
  
    const validPassword =  bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');
  
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
  
    res.json({ token });
});

// Profil de l'utilisateur connecté
router.get('/profile', verifyToken, (req, res) => { 
    const user =  User.findById(req.user.id);
    if (!user) return res.status(400).send('User not found');
  
    res.json({
      id: user._id,
      name: user.name,
      email: user.email
    });
});

module.exports = router;
