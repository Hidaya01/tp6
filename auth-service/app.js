require('./dbauth');  
const express = require('express');
const app = express();
app.listen(3001, () => console.log("Auth service running on port 3001"));
