import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to={'/'}>
      <p className="logo">Recipes</p>
      </Link>
    </div>
  )
}

export default Header