import React from 'react'
import AppNav from '../components/AppNav'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../App.css'

import MyPokeCard from '../components/MyPokeCard';
import MyPokeNamePlate from '../components/MyPokeNamePlate';
import EnemyPokeNamePlate from '../components/EnemyPokeNamePlate';
import EnemyPokeCard from '../components/EnemyPokeCard';

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
        
          <Col >
            <EnemyPokeNamePlate />
          </Col>

          <Col>
            <EnemyPokeCard />
          </Col>

          <Col>
            <MyPokeCard />
          </Col>

          <Col>
            <MyPokeNamePlate />
          </Col>
        
      </Row>

      <Button variant="dark" size="lg" >
          Fight
      </Button>
      <Button variant="success" size="lg">
          Heal 
      </Button>
      <Button variant="primary" size="lg">
          Catch
      </Button>
      <Button variant="danger" size="lg">
          Run
      </Button>
  
    </>
  )
}

export default CatchPokemon