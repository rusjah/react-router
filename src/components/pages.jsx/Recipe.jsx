import React from 'react'
import { Link } from 'react-router-dom'

function Recipe({selectedResipe}) {
  return (
    <div className='recipe'>
        <div className='main-inf'>
            <h1>{selectedResipe.Name}</h1>
            <h3>{selectedResipe.Author}</h3>
        </div>
       <div className='details'>
            <div className='description'>
                <h2>Description</h2>
                <p>{selectedResipe.Description}</p>
            </div>
            <div className='ingredients'>
                {selectedResipe.Ingredients.map(ing => <li>{ing}</li>)}
            </div>
            <div className='method'>
                <h2>Method:</h2>
                <p>{selectedResipe.Method}</p>
            </div>
       </div>
       <div className='video'>
            <a href={selectedResipe.url} target='__blank'>Watch now</a>
        </div>
        
    </div>
  )
}

export default Recipe