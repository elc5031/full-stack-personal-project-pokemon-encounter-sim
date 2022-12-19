import React from 'react'
import axios from 'axios'
import AppNav from '../components/AppNav';
import {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PokemonArt from '../components/PokemonArt';



function MyPokemon({user, myPokemon}) {
  const [allPokemon, setAllPokemon] = useState([])

  // get all poke from db
  const showMyPokemon = async() => {
    let myResponse = await axios.get('getPokes/')
    console.log(myResponse.data.data)
    setAllPokemon(myResponse.data.data)    
  }
  
  useEffect(() => {
    showMyPokemon()
  }, [])

  return (
    <div>
    <AppNav user = {user}/>
    <h1>My Pokemon</h1>
    <h5>Go catch some pokemon to get more!</h5>
    <p><span style = {{color:'red'}}>WARNING:</span> releasing your Pokemon will set them free to the wild and you will no long have them.</p>    
    
      <Row lg={3}>
        
          
          {allPokemon.map((pokemon) => {
              return (
                <Col className='d-flex'>
                <PokemonArt key={pokemon.id} {...pokemon}/>
                </Col>
              )
                            
          })
          }
           
       
      </Row>   
    
    </div>
  )
}

export default MyPokemon