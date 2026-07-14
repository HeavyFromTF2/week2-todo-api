// Import the Express library
const express = require('express');

// Initialize the Express application
const app = express();

// Define the port where the server will listen for requests
const PORT = 3000;

// Define a simple root route (HTTP GET method)
// When a client visits the home page ("/") of our server, we send back a greeting
app.get('/', (req, res) => {
  res.send('Hello, server!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});