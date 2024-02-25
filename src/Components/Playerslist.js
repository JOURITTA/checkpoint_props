import React from 'react'
import Players from './Players'
import Player from './Player'

function Playerslist() {
  return (Players.map((e)=>
    <div >
  <Player joueur={e}/>
    </div>
  ))
}

export default Playerslist