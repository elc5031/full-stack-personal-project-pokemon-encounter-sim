import React from 'react'
import axios from 'axios'
import {useEffect, useState} from 'react'

function EnemyPokeCard({enemyInfo, isCatching}) {
  const [pokeballImg, setPokeballImg] = useState(null)

  // grab pokeball link from backend api call to 3rd party api call
  const getPokeballImg = async () => {
    let myResponse = await axios.get('getPokeball/')
    let pokeball = myResponse.data.data['image_url']
    setPokeballImg(pokeball)
  }

  useEffect(() => {
    getPokeballImg()
  }, [])

  return (
    <div>
      {!isCatching && <img width ='50%' height='50%' src = {enemyInfo.sprites["front_default"]}/>}
      {isCatching && <img width ='50%' height='50%' src = {pokeballImg}/>}
        
    </div>
  )
}

export default EnemyPokeCard