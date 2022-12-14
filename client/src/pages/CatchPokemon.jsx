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
  const [myPokemonHP, setMyPokemonHP] = useState(25)
  const [enemyPokemonHP, setEnemyPokemonHP] = useState(5)
  const [potionCount, setPotionCount] = useState(3)
  const [enemyExists, setEnemyExists] = useState(false)
  const [catchCountdown, setCatchCountdown] = useState(null)

  const getEnemy = () => {
    
  }

  // when run button is clicked, 50/50 chance of escaping or not
  const run = () => {
    let roll = Math.round(Math.random())
    if (roll === 0) {
      alert ('You have failed to escape!')
    }
    else {
      alert ('You have escaped successfully!')
      window.location.href="#/MyPokemon"
    }    
  }

  // random int with intervals
  function randIntIntervals (min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  // enemy poke attack

  const enemyAttack = (playerHP) => {
    // let playerHP = myPokemonHP
    let enemyDam = randIntIntervals(5, 20)    
    playerHP -= enemyDam
    setMyPokemonHP(playerHP)
    alert('Enemy attacked for ' + enemyDam + ' damage')

  }

  // timeout 
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  }

  // my poke attack

  const myAttack = async () => {
    let playerHP = myPokemonHP
    let enemyHP = enemyPokemonHP
    let myDam = randIntIntervals(5, 20)
    enemyHP -= myDam
    setEnemyPokemonHP(enemyHP)
    alert('PIKACHU attacked for ' + myDam + ' damage')
    await timeout(1000)
    if (enemyHP > 0){
      enemyAttack(playerHP)
    }
    

  }
  

  // my heals

  const myHeal = async () => {
    let playerHP = myPokemonHP
    if (potionCount > 0 && playerHP <= 80) {
      playerHP += 20
      setMyPokemonHP(playerHP)
      setPotionCount(potionCount - 1)
      alert('PIKACHU healed for 20 HP')
      await timeout(1000)
      enemyAttack(playerHP)
    }
    else if (potionCount === 0){
      alert('PIKACHU tried to heal, but you have no more potions!')
      enemyAttack()
    }
    else {
      playerHP = 100
      setMyPokemonHP(playerHP)
      setPotionCount(potionCount - 1)
      alert('PIKACHU healed for 20 HP')
      await timeout(1000)
      enemyAttack(playerHP)
    }

  }

  // attempt to catch

  const catchPoke = async () => {
    let enemyHP = enemyPokemonHP
    let playerHP = myPokemonHP
    if (enemyHP <= 15) {
      setCatchCountdown(5)
      await timeout(1000)
      setCatchCountdown(4)
      await timeout(1000)
      setCatchCountdown(3)
      await timeout(1000)
      setCatchCountdown(2)
      await timeout(1000)
      setCatchCountdown(1)
      await timeout(1000)
      setCatchCountdown(0)
      await timeout(1000)
      alert('ENEMY was captured successfully!')
      window.location.href="#/MyPokemon"
    }
    else {
      setCatchCountdown(5)
      await timeout(1000)
      setCatchCountdown(4)
      await timeout(1000)
      setCatchCountdown(3)
      await timeout(1000)
      setCatchCountdown(2)
      await timeout(1000)
      setCatchCountdown(1)
      await timeout(1000)
      setCatchCountdown(0)
      await timeout(1000)
      alert('ENEMY broke free!')
      enemyAttack(playerHP)
    }
  }

  // handle knocking out enemy poke

  const checkIfPokesDead = async () => {
    let playerHP = myPokemonHP
    let enemyHP = enemyPokemonHP
    if (playerHP <= 0) {
      setMyPokemonHP(0)
      await timeout(1000)
      alert('Your PIKACHU has fainted! You run away!')
      window.location.href="#/MyPokemon"
    }
    else if (enemyHP <= 0) {
      setEnemyPokemonHP(0)
      await timeout(1000)
      alert('ENEMY has fainted! You have defeated ENEMY!')
      window.location.href="#/MyPokemon"
    }
  }

  useEffect (() => {
    checkIfPokesDead()
  }, [myPokemonHP, enemyPokemonHP])
  
  return (
    <>
    <AppNav user = {user}/>
    <br/>
    {!enemyExists && <button variant="primary" size = "lg" onClick = {getEnemy()}>Click here to find a Pokemon to catch!</button>}
    <br/>
    <br/>
    {catchCountdown && <h2>Attempting to catch ENEMY: {catchCountdown}</h2>}
    <br/>
   
    


      <Row xs={1} md={2} className="g-4">
        
          <Col >
            <EnemyPokeNamePlate enemyPokemonHP = {enemyPokemonHP}/>
          </Col>

          <Col>
            <EnemyPokeCard />
          </Col>

          <Col>
            <MyPokeCard />
          </Col>

          <Col>
            <MyPokeNamePlate myPokemonHP = {myPokemonHP} />
          </Col>
        
      </Row>

      <Button variant="dark" size="lg" onClick={myAttack}>
          Fight
      </Button>
      <Button variant="success" size="lg" onClick={myHeal}>
          Potion ({potionCount}) 
      </Button>
      <Button variant="primary" size="lg" onClick={catchPoke}>
          Catch
      </Button>
      <Button variant="danger" size="lg" onClick={run}>
          Run
      </Button>
  
    </>
  )
}

export default CatchPokemon