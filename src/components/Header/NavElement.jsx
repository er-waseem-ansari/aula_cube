import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
export const PrimaryNav = styled.nav`
  z-index: 1;
  height: 9vmin;
  display: flex;
  flex-direction: row;
  background: transparent;
  justify-content: space-between;
  margin:  0 2vw;
  @media screen and (max-width: 768px) {
    height: 7vmax;
  }
`
export const MenuLink = styled(Link)`
  color: #fff;
  
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  &.active {
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
`
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: -4px;
    align-items: center;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 50%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-self: center;
  margin-right: 0.5vw;
  height: 50px;
  @media screen and (max-width: 768px) {
    display: none;
  }

`
export const Logo = styled(Link)`
  text-decoration: none;
  color: white;
  align-self: center;
  font-size: 40px;
  margin-left: 0.5vw;
  font-weight: 400;
`

export const LineBelowNav = styled.hr`

  background-color: White;
  margin: 0 2vw;
`

