import React from 'react'
import Card from 'react-bootstrap/Card';
import { Image } from "react-bootstrap";

function MyPokeCard({myPokemon}) {
  let backImg = myPokemon.sprites["back_default"]
  return (
    <div >
        <img width ='50%' height='50%' src = {backImg}/>
        {/* <Card id = 'bottomleft' style = {{height:300, width:300}} className="border-0">
            <Card.Img variant="top"  width ='100%' height='100%' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" />            
            
        </Card> */}

    </div>
  )
}

export default MyPokeCard