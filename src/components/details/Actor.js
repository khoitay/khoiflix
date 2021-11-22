import React from 'react'
import { img_300, unavailable } from '../config/config'
import './actor.css'

function Actor({name, image}) {
  return (
    <div className="actor">
      <div className="actor-img">
        <img src={image ? `${img_300}/${image}` : unavailable} alt="something" />
        <div style={{fontWeight: 'bold', textAlign:'center'}}>{name}</div>
      </div>
    </div>
  )
}

export default Actor
