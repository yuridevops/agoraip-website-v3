import React, { useContext, useEffect } from 'react'
import styled from 'styled-components';
import { PageContext } from '../../contexts/PageContext'
import imageDid from '../../assets/did.jpg'
import { Link } from 'react-router-dom';


const Container = styled.div`
  margin: 0;
  display: flex;
  min-height: 90vh;
  padding: 20px 20px;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  a img{
    display:flex;
  }

`;

const Title = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: 600;
  color: rgb(43, 76, 128);
  margin: 20px 0px;
`

const Announce = styled.div`
  display: flex;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0px;
`

const ImageAnnounce = styled.img`
  flex: 1;
  max-width: 800px;
  margin: 20px 0px;
`

const Span = styled.span`
  margin: 10px 0px;
`


const Button = styled.button`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 50px;
  background-color: #1877f2;
  color: white;
  font-size: 24px;
  font-weight: 600;
  outline: none;
  border: 1px solid #1877f2;
  border-radius: 5px;
`


const Did = () => {

  const { setSelected } = useContext(PageContext)

  useEffect(() => {
    setSelected(1)
  }, [])


  return (
    <Container>
      <Title>
        Como funciona
      </Title>
      <Announce>
        <Span>
          Você pode falar com tarifas super reduzidas no seu telefone IP, FIXO ou MÓVEL
          discando e falando diretamente no seu telefone IP, PBX IP, Softphone IP, etc.
          ou clicando no nº de telefone dos seus contatos no computador e falando diretamente na linha FIXA, MÓVEL ou IP de qualquer operadora.
        </Span>
        <Span>
          Também pode receber as ligações de qualquer lugar, sem custos adicionais.
        </Span>
      </Announce>
      <Announce>
        <a style={{textDecoration: 'none'}} href='http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349'>
          <Button>Entre em contato</Button>
        </a>
        <a href='http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349'>
          <ImageAnnounce src={imageDid} />
        </a>
      </Announce>
    </Container>
  )
}

export default Did