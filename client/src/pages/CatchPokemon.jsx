import React from 'react'
import AppNav from '../components/AppNav'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CatchPokemon({user}) {
  const [myPokemonHP, setMyPokemonHP] = useState(100)
  const [enemyPokemonHP, setEnemyPokemonHP] = useState(100)
  const [potionCount, setPotionCount] = useState(3)
  const [enemyExists, setEnemyExists] = useState(false)

  const getEnemy = () => {
    
  }

  return (
    <>
    <AppNav user = {user}/>
    <br/>
    {!enemyExists && <button variant="primary" size = "lg" onClick = {getEnemy()}>Click here to find a Pokemon to catch!</button>}
    
    <div>Catching Pokemon</div>
    


      <Row xs={1} md={2} className="g-4">
        
          <Col>
          <Card id = 'topleft'>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id = 'topright'>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id = 'bottomleft'>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card id = 'bottomright'>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        
      </Row>
  
    </>
  )
}

export default CatchPokemon