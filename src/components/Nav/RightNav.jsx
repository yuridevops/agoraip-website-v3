import React, { useContext } from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { PageContext } from '../../contexts/PageContext'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  z-index: 1;
  
  li {
    color: #fff;
    padding: 18px 5px;
    margin: 10px;
    font-size: 12px;
    font-weight: 600;
    transition: color 0.3s ease-in-out
  }

  a{
    text-decoration:none;
  }

  li:hover {
    color: #5e90bf;
  }

  .button{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1877f2;
    padding:  5px 8px;
    border-radius: 3px;
    color: #fff;
  }


  .button-sup{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    color: #fff;
    transition: color 0.3s ease-in-out;
  }

  .button-sup:hover{
    color: #5e90bf;
  }

  .button-sup:hover .icon{
    color: green;
  }

  .selected {
    border-bottom: solid 3px #5e90bf;
    transition: border-bottom 0.1s ease-in-out;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 50vw;
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

  const { selected } = useContext(PageContext)
  console.log(open)
  return (
    <Ul open={open}>
      <Link to='/' onClick={() => { open && handleClick(!open) }}>
        <li className={selected === 0 ? "selected" : ""} >
          <span>Inicio</span>
        </li>
      </Link>
      <Link to='/dids' onClick={() => { open &&  handleClick(!open) }}>
        <li className={selected === 1 ? "selected" : ""} >
          <span>Numeros DID</span>
        </li>
      </Link>
      <Link to='/plans' onClick={() => { open &&  handleClick(!open) }}>
        <li className={selected === 2 ? "selected" : ""} >
          <span>PBX na Nuvem</span>
        </li>
      </Link>
      <Link to='/products' onClick={() => { open &&  handleClick(!open) }}>
        <li className={selected === 3 ? "selected" : ""} >
          <span>Produtos</span>
        </li>
      </Link>
      <Link to='/info' onClick={() => {open &&  handleClick(!open) }} >
        <li className={selected === 4 ? "selected" : ""} >
          <span>Sobre nós</span>
        </li>
      </Link>
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511952772090" target="_blank">
        <li>
          <div className="button-sup">
            <span>Suporte</span>
            <span>(11) 95277-2090 <FaWhatsapp color="#5afc03" fontSize={16} /></span>
          </div>
        </li>
      </a >
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
        <li>
          <div className="button">
            <center>
              <span>Entrar em contato</span>
            </center>
            <span>(41) 99272-4349 <FaWhatsapp className="icon" color="#fff" fontSize={16} /></span>
          </div>
        </li>
      </a>
    </Ul>
  ) 
}

export default RightNav
