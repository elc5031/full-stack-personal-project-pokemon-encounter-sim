import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function MyPokeNamePlate() {
  return (
    <div align = "center">
        <h3>PIKACHU</h3>
        <ProgressBar now = {60} style = {{background: 'black', width: '50%', align: 'center'}} />
        <h3>HP:  100 / 100</h3>
        {/* <Card id = 'bottomright'>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card> */}

    </div>
  )
}

export default MyPokeNamePlate