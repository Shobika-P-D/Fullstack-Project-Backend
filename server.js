const express = require('express');
const app = express();

// API route that returns a response (no HTML rendered)
app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from the backend! This is an API response.',
    });
});

// Another example of an API route
app.get('/about', (req, res) => {
    res.json({
        about: 'This is a simple backend API without front-end files served.',
    });
});

// You can add more API routes as needed for your backend

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
