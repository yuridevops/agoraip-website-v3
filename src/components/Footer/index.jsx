import React from 'react'
import logo from '../../assets/agoraip-logo.png'
import styled from 'styled-components';
const Footer = () => {

  const FooterContainer = styled.footer`
    
    background-color: #e2e2e2;
    border-top: solid 1px rgb(219, 219, 219);
    height: 100px;

  .footer-container{
    background-color: rgb(236, 236, 236);
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .footer-container img{
    width: 150px;  
    padding-left: 20px; 
  }
  `;


  return (
    <FooterContainer>
      <div className='footer-container'>
        <div className='footer-itens'>
          <img src={logo} />
        </div>
        <div className='footer-itens'>
          Redes Sociais
                </div>
        <div className='footer-itens'>
          Links Externos
                </div>
      </div>
    </FooterContainer>
  )
}

export default Footer