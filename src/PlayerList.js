import React from "react";
import Card from 'react-bootstrap/Card';

const PlayerList = ({player}) => {
    console.log(player)
    return (
    <Card>
      <Card.Img variant="top" src={player.imgSrc} width="200px"/>
      <Card.Body>
        <Card.Title><h2>{player.name}</h2></Card.Title>
        <Card.Text><strong>Foreign Team:</strong> {player.foreignTeam}</Card.Text>
        <Card.Text><strong>Nationality:</strong> {player.nationality}</Card.Text>
        <Card.Text><strong>Jersey Number:</strong> {player.jerseyNumber}</Card.Text>
        <Card.Text><strong>Age:</strong> {player.age}</Card.Text>
      </Card.Body>
    </Card>
    )
}


export default PlayerList