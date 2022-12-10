import React from 'react'
import AppNav from '../components/AppNav'

function CatchPokemon({user}) {
  return (
    <>
    <AppNav user = {user}/>
    <div>Catching Pokemon</div>
    </>
  )
}

export default CatchPokemon