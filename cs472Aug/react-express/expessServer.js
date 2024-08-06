// server/server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// // Define CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with the allowed origin
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
};

// // Use CORS middleware with options
app.use(cors(corsOptions));

// Serve static files from the React app
 app.use(express.static(path.join(__dirname, '../client/build')));
//  app.use(express.static(path.join(__dirname, '/public')));

// API endpoint example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/hello', (req, res) => {
    console.log(" HERERE  dsfdfds")
    res.sendFile(path.join(__dirname, '../client/build', 'myJS.html'));
  });

// Catch-all handler to serve the React app
app.get('/react', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

