import React from 'react'

import reciepes from '../../data/recipes.json'

function Home({setResipe}) {
  function handlerClick() {

  }

  return (
    <div className='home'>
        {reciepes.map((rec, ind) => 
        <div key={ind} className='recipeReview'>
        <h2>{rec.Name}</h2>
        <button onClick={handlerClick}>More..</button>
        </div>)}
    </div>
  )
}

export default Home