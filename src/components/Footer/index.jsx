import React from 'react'
import logo from '../../assets/agoraip-logo.png'
import styled from 'styled-components';
import { FaFacebookF, FaWhatsapp, GrInstagram } from 'react-icons/all'
const Footer = () => {

  const FooterContainer = styled.footer`
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-top: solid 1px rgb(219, 219, 219);
    height: 100px;
    overflow:hidden;

  .footer-itens{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-center;
  }

  .footer-itens img{
    height:30px;
    margin-left:20px;
  }

  .footer-partners{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-center;
    font-size: 12px;
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

  const styleInsta = {
    color: 'white',
    background: 'rgb(254, 255, 13)',
    background: 'linear-gradient(45deg, rgba(254, 255, 13, 1) 0%, rgba(255, 196, 0, 1) 20%, rgba(224, 31, 31, 1) 40%, rgba(255, 0, 159, 1) 60%, rgba(145, 32, 148, 1) 80%, rgba(4, 0, 255, 1) 100%)',
    padding: '3px',
    borderRadius: '8px',
  }

  const styleFace = {
    color: 'white',
    background: 'linear-gradient(0deg, rgba(0,76,140,1) 0%, rgba(0,181,255,1) 100%)',
    padding: '6px 2px 0px 6px',
    borderRadius: 4
  }

  const styleWhats = {
    color: 'white',
    padding: 2,
    borderRadius: 4,
    background: 'linear-gradient(0deg, rgba(0,187,0,1) 0%, rgba(135,255,181,1) 100%)'
  }

  const whiteLogo = {
    filter: 'saturate(3)'
  }

  return (
    <FooterContainer>
      <div className='footer-itens'>
        <img src={logo} style={whiteLogo} />
      </div>
      <div className='footer-itens'>
        <div className="footer-announce">
          <span>Siga nossas redes sociais: </span>
        </div>
        <div className="footer-iten">
          <FaFacebookF size={30} style={styleFace} />
        </div>
        <div className="footer-iten">
          <GrInstagram size={30} style={styleInsta} />
        </div>
        <div className="footer-iten">
          <FaWhatsapp size={30} style={styleWhats} color='#5afc03' />
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
    </FooterContainer>
  )
}

export default Footer