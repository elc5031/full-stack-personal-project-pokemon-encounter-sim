import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PokemonArt({name, img_link}) {
    let pokeNameUpper = name.toUpperCase()

  return (
    <div>             

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img_link}  />
      <Card.Body>
        <Card.Title>{pokeNameUpper}</Card.Title>        
        <Button variant="primary">Release</Button>
      </Card.Body>
    </Card> 
        
    </div>
  )
}

export default PokemonArt