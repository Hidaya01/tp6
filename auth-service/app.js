require('./dbauth');  // Ensure that the database is connected properly

const express = require('express');
const app = express();

// Middleware to parse JSON data from the request body
app.use(express.json());

// Import routes
const authRoutes = require('./Routes/auth');  // Adjust the path to your actual auth routes
const testRoutes = require('./Routes/test');  // This should be the file containing your /test route

// Use routes
app.use('/auth', authRoutes);  // auth service will be under /auth path
app.use('/test', testRoutes);  // The test route will be accessible under /test path

// Start the server on port 3001
app.listen(3001, () => console.log("Auth service running on port 3001"));
