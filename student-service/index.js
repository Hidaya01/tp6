
require('./dbstudent');  // Connexion à MongoDB
const express = require('express');
const app = express();
app.listen(3003, () => console.log("Course service running on port 3001"));
