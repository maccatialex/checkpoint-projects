// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter object using your email provider
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this based on your email provider
  auth: {
    user: 'your-email@gmail.com',  // Your email address
    pass: 'your-email-password'    // Your email password (consider using environment variables for security)
  }
});

// Define email options
const mailOptions = {
  from: 'alex@gmail.com',
  to: 'your-email@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'Hello, this is a test email sent from Node.js using Nodemailer!'
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email sent: ' + info.response);
});
