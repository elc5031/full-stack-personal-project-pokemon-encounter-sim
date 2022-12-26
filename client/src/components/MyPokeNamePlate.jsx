import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function MyPokeNamePlate({myPokemonHP, myPokemon}) {
  let pokeName = myPokemon.name.toUpperCase()
  return (
    <div align = "center">
        <h3>{pokeName}</h3>
        <ProgressBar now = {myPokemonHP} style = {{background: 'black', width: '50%', align: 'center'}} />
        <h3>HP:  {myPokemonHP} / 100</h3>
        

    </div>
  )
}

export default MyPokeNamePlate