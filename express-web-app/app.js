const express = require('express');
const path = require('path');
const app = express();

//  working hours (Monday to Friday, 9:00 AM to 5:00 PM)
const checkWorkingHours = (req, res, next) => {
  const currentDay = new Date().getDay(); // 0-6 (0 = Sunday, 6 = Saturday)
  const currentTime = new Date().getHours(); // 0-23
  console.log('Current Day:', currentDay); // Log current day
  console.log('Current Time:', currentTime); // Log current time

  // Checking if it's Monday to Friday (1-5) and between 9 AM to 5 PM
  if (currentDay >= 1 && currentDay <= 5 && currentTime >= 9 && currentTime <= 17) {
    return next(); // Proceed to the next middleware or route handler
  } else {
    res.send('The site is only available during working hours (Monday to Friday, 9 AM to 5 PM).');
  }
};

// Use the custom middleware to check working hours for all routes
app.use(checkWorkingHours);

// Serve static files (CSS, images, HTML files)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Home page
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'services.html')); // Our Services page
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html')); // Contact Us page
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
