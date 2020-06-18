import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import Logo from '../../assets/agoraip-logo.png'

const Nav = styled.nav`
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background: rgb(148,148,148);
  background: linear-gradient(133deg, rgba(148,148,148,1) 0%, rgba(66,64,74,1) 48%, rgba(0,38,46,1) 100%);
  opacity: 1;
  box-shadow: 0 0 0.3em #888888;
  z-index: 1;
  
  
  
  .logo {
    display: flex;
    padding: 15px 0;
    justify-content: start;
    align-items: center;
  }

  .logo img{
    max-height: 100%;
  }

  @media (max-width: 768px) {
    .logo img{
    max-width: 30%;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        <img src={Logo} alt='Logo AgoraIP' />
      </div>
      <Burger />
    </Nav>
  )
}


export default Navbar
