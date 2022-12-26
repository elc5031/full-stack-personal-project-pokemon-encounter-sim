import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import {useEffect, useState} from 'react';

function PokemonArt({name, img_link, poke_id, setPokeDeleted, setMyPokemon, myPokemon}) {
    let pokeNameUpper = name.toUpperCase()
    const [isPikachu, setIsPikachu] = useState(false)

    const pikaFinder = () => {
      if (pokeNameUpper === 'PIKACHU') {
      setIsPikachu(true)
    }}

    useEffect(() => {
      pikaFinder()
    }, [])

    // release poke button function

    const releasePoke =  async () => {
      axios.delete(`releasePoke/${poke_id}/`)
      .then(response => {
        console.log(response.data)
        // window.location.reload(true)
        setPokeDeleted(true)
        
      })
      
      setPokeDeleted(false)
      
    }

    // set poke button function

    const setNewPoke = async () => {
      let id = poke_id
      let pokeInfo  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      pokeInfo = pokeInfo.data      
      setMyPokemon(pokeInfo)      
      
    }

  return (
    <div>             

    <Card className='flex-fill' style={{ width: '18rem', height: '100%' }}>
      <Card.Img variant="top" src={img_link}  />
      <Card.Body>
        <Card.Title>{pokeNameUpper}</Card.Title>
        <Button variant="primary" onClick={setNewPoke}>Set Active</Button>
        <br/>    
        <br/> 
        {!isPikachu && <Button variant="primary" onClick={releasePoke}>Release</Button>}
      </Card.Body>
    </Card> 
        
    </div>
  )
}

export default PokemonArt