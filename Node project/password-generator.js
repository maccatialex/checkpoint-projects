// password-generator.js
const generatePassword = require('generate-password');

const password = generatePassword.generate({
  length: 12,  // You can adjust the length here
  numbers: true,
  symbols: true,
  uppercase: true,
  lowercase: true
});

console.log('Generated password:', password);
