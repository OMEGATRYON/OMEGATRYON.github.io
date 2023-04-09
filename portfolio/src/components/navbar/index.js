import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
  return (
    <div className='Navtest'>
        <Nav>
            <NavLink to="/">
              <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/about" activeStyle>
                    About
                </NavLink>
                <NavLink to="/services" activeStyle>
                    Services
                </NavLink>
                <NavLink to="/contact-us" activeStyle>
                    Contact us
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    sign up
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">Show off</NavBtnLink>
            </NavBtn>
        </Nav>
    </div>
  )
}

export default Navbar