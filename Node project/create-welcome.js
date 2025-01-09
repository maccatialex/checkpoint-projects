// create-welcome.js
const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('welcome.txt file has been created!');
});
