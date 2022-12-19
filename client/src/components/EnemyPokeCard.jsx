import React from 'react'

function EnemyPokeCard({enemyInfo}) {
  return (
    <div>
        <img width ='50%' height='50%' src = {enemyInfo.sprites["front_default"]}/>
        {/* <Card id = 'bottomleft' style = {{height:300, width:300}} className="border-0">
            <Card.Img variant="top"  width ='100%' height='100%' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png" />            
            
        </Card> */}

    </div>
  )
}

export default EnemyPokeCard