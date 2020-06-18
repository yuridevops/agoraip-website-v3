import React from 'react'
import logo from '../../assets/agoraip-logo.png'
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {

  const FooterContainer = styled.footer`
    
    border-top: solid 1px rgb(219, 219, 219);
    height: 100px;

  .footer-container{
    background-color: rgb(66,64,74);
    color: #fff;
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

  .footer-itens{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-center;
  }

  .footer-partners{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-center;
    font-size: 12px;
    margin: 0 12px;
  }

  .footer-iten{
    padding: 20px;
  }
  
  .footer-announce{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px; 
  }

  `;


  return (
    <FooterContainer>
      <div className='footer-container'>
        <div className='footer-itens'>
          <img src={logo} />
        </div>
        <div className='footer-itens'>
          <div className="footer-announce">
            <span>Siga nossas redes sociais: </span>
          </div>
          <div className="footer-iten">
            <FaFacebook size={30} color='#1877f2' />
          </div>
          <div className="footer-iten">
            <FaInstagram size={30} color='pink' />
          </div>
          <div className="footer-iten">
            <FaWhatsapp size={30} color='#5afc03' />
          </div>


        </div>
        <div className='footer-partners'>
          <center><h3>Parceiros </h3></center>

          <div className="footer-partners">
            <span>www.nuevatelecom.com.py</span>
            <span>www.facebook.com</span>
            <span>www.google.com</span>
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer