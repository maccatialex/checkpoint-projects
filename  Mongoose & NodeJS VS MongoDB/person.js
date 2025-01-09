// models/Person.js
const mongoose = require('mongoose');

// Define the schema for a Person
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Name is required
  },
  age: {
    type: Number,
    required: false // Age is optional
  },
  favoriteFoods: {
    type: [String], // Array of strings
    required: false // Favorite foods are optional
  }
});

// Create the Mongoose model for Person
const Person = mongoose.model('Person', personSchema);

// Export the Person model to use it elsewhere in your app
module.exports = Person;
