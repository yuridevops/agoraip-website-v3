import React,{useContext, useEffect} from 'react'
import RowFeature from '../../components/RowFeature'
import styled from 'styled-components';
import {PageContext} from '../../contexts/PageContext'

const Container = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(152, 221, 250);
  min-height: 25vh;
  color: #fff;
  padding: 20px 20px;

  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Info = () => {

  const { setSelected } = useContext(PageContext)

  useEffect(() => {
      setSelected(1)
  },[])


  const rows = [
    {
      title: "Quem somos",
      description: "A Agora IP tem início de suas atividades no ano de 2000, atuando no mercado de telecomunicações com credibilidade e tecnologias inovadoras.Sempre acompanhando a transformação tecnológica. Atua em todo território nacional, diretamente ou através de parceiros. Conta com uma equipe de profissionais especialistas desenvolvendo soluções de acordo com a necessidade de cada empresa",
      image: "nossa-empresa.png"
    },
    {
      title: "Nosso propósito",
      description: "Temos como dever manter respeito, transparência, profissionalismo e ética junto aos seus colaboradores, clientes e parceiros de negócios. E que seja reconhecida como a empresa de desenvolvimento em soluções de comunicação unificada que entende a necessidade de seus clientes, com modernidade, agilidade e equipe altamente capacitada",
      image: "proposito.png",
      invert: true
    },


  ]
  return (
    <>
      <Container>
        <h1>A Agora IP é uma empresa que pensa sempre à frente.</h1>
      </Container>
      <div className="container-info">
        {
          rows.map(row => <RowFeature key={row.title}  {...row} />)
        }
      </div>
    </>
  )
}



export default Info

