// src/PlayersList.js
// import React from "react";
// import Player from "./Player";
// import { players } from "./players";

// const PlayersList = () => {
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//       {players.map((player, index) => (
//         <Player key={index} {...player} />
//       ))}
//     </div>
//   );
// };

// export default PlayersList;
import React from 'react';
import Player from './Player'; // Assuming you have a Player component

const PlayersList = ({ players }) => {
  return (
    <div>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;
