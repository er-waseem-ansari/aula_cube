import React from 'react';
import { PrimaryNav, MenuLink, Menu, Hamburger, Logo, LineBelowNav } from './NavElement';
const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Logo to="/">
            AulaCube
        </Logo>
        <Hamburger />
        <Menu>
          <MenuLink to="/" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
        </Menu>
        
      </PrimaryNav>
      <LineBelowNav/>
    </>
  )
}
export default Navbar