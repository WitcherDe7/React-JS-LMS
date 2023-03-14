import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <nav>
            <Link to="/message" >Message</Link>
            <Link to="/message1" >Message1</Link>
            <Link to="/message2" >Message2</Link>
        </nav>
    </header>
  )
}

export default Header
