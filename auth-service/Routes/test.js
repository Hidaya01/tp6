const express = require('express');
const router = express.Router();

// Simple test route
router.get('/test', (req, res) => {
  res.status(200).send('Test worked!');
});

module.exports = router;
