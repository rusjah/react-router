import React from 'react'

import reciepes from '../../data/recipes.json'
import { useNavigate } from 'react-router-dom'


function Home({setResipe}) {
  const navigate = useNavigate();

  function handlerClick(itm) {
    setResipe(itm)
    navigate('/recipe')
  }

  return (
    <div className='home'>
        {reciepes.map((rec, ind) => 
        <div key={ind} className='recipeReview'>
        <h2>{rec.Name}</h2>
        <button onClick={() => {handlerClick(rec)}}>More..</button>
        </div>)}
    </div>
  )
}

export default Home