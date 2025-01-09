// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const Person = require('./models/Person'); // Import the Person model

// MongoDB URI from .env
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

const app = express();
const port = process.env.PORT || 5000;

// Middlewares (optional)
app.use(express.json());  // To parse JSON request bodies

// Routes

// Route to create a new person
app.post('/person', async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);  // Return the created person
  } catch (err) {
    res.status(400).json({ error: err.message });  // Handle errors
  }
});

// Route to get all persons
app.get('/persons', async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).json(persons);  // Return the list of persons
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Example: Route to update a person's age by ID
app.put('/person/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
