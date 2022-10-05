import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar container'>
        <a href="#!"><img className="logo" src={process.env.PUBLIC_URL+"logo.png"}></img></a>
        <div className='nav-links'>
            <a href="#!">Produktai</a>
            <a href="#!">Apie Mus</a>
            <a href="#!">Kontaktai</a>
        </div>
    </div>
  )
}

export default Navbar