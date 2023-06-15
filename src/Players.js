import React from "react";
import PlayerList from "./PlayerList";


const Players = ({Playerprop}) => {
    console.log(Playerprop)
    return (
        <div className='container'>
      
        <ul>
          {Playerprop.map((Playerprop, key) => (
            <PlayerList player={Playerprop} key={key} />
          ))}
        </ul>
        </div>
    )
}


export default Players