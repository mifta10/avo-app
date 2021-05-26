import React from 'react'
import logoLight from "../images/logo-light.png"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__left"><img src={logoLight} alt="logo" /></div>
          <ul className="navbar__right">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Showcases</a>
            </li>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
