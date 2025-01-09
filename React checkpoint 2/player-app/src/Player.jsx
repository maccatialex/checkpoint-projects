// // src/Player.js
// import React from "react";
// import { Card } from "react-bootstrap";

// // Player component to display player details
// const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
//   return (
//     <Card style={{ width: "18rem", margin: "10px" }}>
//       <Card.Img variant="top" src={imageUrl} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Text>
//           <strong>Team:</strong> {team} <br />
//           <strong>Nationality:</strong> {nationality} <br />
//           <strong>Jersey Number:</strong> {jerseyNumber} <br />
//           <strong>Age:</strong> {age} <br />
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// // Default props in case some data is missing
// Player.defaultProps = {
//   name: "Unknown Player",
//   team: "Unknown Team",
//   nationality: "Unknown",
//   jerseyNumber: 0,
//   age: 0,
//   imageUrl: "https://via.placeholder.com/150"
// };

// export default Player;


import React from 'react';
import { Card } from 'react-bootstrap'; // Assuming you're using react-bootstrap

const Player = ({ name, imageUrl, team }) => {
  return (
    <Card>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Team:</strong> {team} <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;
