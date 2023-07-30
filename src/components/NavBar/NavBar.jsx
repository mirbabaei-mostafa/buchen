import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Buchen</span>
            <div className='navItem' >
                <button className='navButton'>Registrieren</button>
                <button className='navButton'>Anmelden</button>
            </div>
        </div>
    </div>
  )
}

export default NavBar;