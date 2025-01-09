const mongoose = require('mongoose');

// Define the schema for a Person
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number },
  favoriteFoods: { type: [String], required: true }  // Array of strings (e.g. ['pizza', 'sushi'])
});

// Create a model for the Person schema
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
