// src/App.js
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "John"; // Replace with your name or leave it empty to display the default message

  return (
    <Container className="mt-5">
      <Card style={{ width: '18rem', margin: '0 auto' }}>
        <Card.Body>
          <Image />
          <Card.Title><Name /></Card.Title>
          <Card.Text>
            <Price />
            <Description />
          </Card.Text>
          {firstName ? (
            <>
              <p>Hello, {firstName}!</p>
              <img src={`https://robohash.org/${firstName}.png`} alt="Robot Avatar" />
            </>
          ) : (
            <p>Hello, there!</p>
          )}
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
