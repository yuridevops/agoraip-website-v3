import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  z-index: 1;
  
  li {
    color: #111;
    padding: 18px 5px;
    margin: 10px;
  }

  a{
    text-decoration:none;
  }

  li:hover {
    color: blue;
  }

  .button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: blue;
    padding: 10px;
    border: solid 1px blue;
    border-radius: 2px;
    color: #fff;
  }

  .button-sup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: #111;
  }

  .button-sup:hover{
    color: blue;
  }

  .button-sup:hover .icon{
    color: green;
  }

  .selected {
    border-bottom: solid 3px blue;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .button-sup{
      color: #fff;
    }

    li{
      color: #fff;
    }
  }
  
`;

const RightNav = ({ open, handleClick }) => {
  return (
    <Ul open={open}>
      <Link to='/'>
        <li className="selected" onClick={() => { handleClick(!open) }}>
          <h4>Inicio</h4>
        </li>
      </Link>
      <Link to='/info' onClick={() => { handleClick(!open) }} >
        <li>
          <h4>Sobre nós</h4>
        </li>
      </Link>
      <Link to='/plans' onClick={() => { handleClick(!open) }}>
        <li>
          <h4>Planos</h4>
        </li>
      </Link>
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511952772090" target="_blank">
        <li>
          <div className="button-sup">
            <h4>Suporte</h4>
            <h5>(11) 95277-2090 <FaWhatsapp color="#111" fontSize={16} /></h5>
          </div>
        </li>
      </a >
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
        <li>
          <div className="button">
            <h4>Entrar em contato</h4>
            <h5>(41) 99272-4349 <FaWhatsapp className="icon" color="#fff" fontSize={16} /></h5>
          </div>
        </li>
      </a>
    </Ul>
  )
}

export default RightNav