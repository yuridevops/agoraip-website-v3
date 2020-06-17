import React from 'react'
import styled from 'styled-components'
import { FiCheckCircle, FiAward } from 'react-icons/fi'

const Container = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr 1fr;
  grid-template-areas: "p1 p2 p3";
  justify-content: space-around;
  align-items: center;


  .card{
    display: flex;
    justify-content: center;
    background-color: #fff;
    flex-direction: column;
    width: 350px;
    height: 450px;
    margin: 20px 0px;
    box-shadow: 0 0 0.5em #888888;
  }

  .card-header{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #444;
    height: 20vh;
    width:100%;
    color: #fff;
  }

  .card-content {
    background-color: #f3f3f3;
    height: 80vh;
    width:100%;
    padding-top: 20px;
  }

  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li{
    display: block;
    margin: 5px 5px 5px 20px;
  }

  li:hover{
    font-weight: bold;
  }

  .p1{
    grid-area:p1;
  }

  .p2{
    grid-area:p2;
  }

  .p3{
    grid-area:p3;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
`;

const Plans = () => {
  return (
    <div>
      <center>
        <h1>Temos planos para todos os clientes</h1>
      </center>
      <Container>
        <div className="p1 card">
          <div className="card-header">
            <h2><FiAward color="#cd7f32" /> Basic</h2>
          </div>
          <div className="card-content">
            <ul>
              <li><FiCheckCircle color="blue" /> 5 Ramais IP</li>
              <li><FiCheckCircle color="blue" /> Gravações Online</li>
              <li><FiCheckCircle color="blue" /> Controle de PBX Online</li>
              <li><FiCheckCircle color="blue" /> Siga-me</li>
              <li><FiCheckCircle color="blue" /> Relatórios de chamadas</li>
              <li><FiCheckCircle color="blue" /> Fila de chamadas com anúncio</li>
              <li><FiCheckCircle color="blue" /> Sala de conferência</li>
              <li><FiCheckCircle color="blue" /> Autoatendimento</li>
              <li><FiCheckCircle color="blue" /> Softphone Incluso</li>
            </ul>
          </div>
        </div>
        <div className="p2 card">
          <div className="card-header">
            <h2><FiAward color="#aaa9ad" /> Standard</h2>
            <span>(Recomendado)</span>
          </div>
          <div className="card-content">
            <ul className="ul-list">
              <li><FiCheckCircle color="blue" /> 10 Ramais IP</li>
              <li><FiCheckCircle color="blue" /> Gravações Online</li>
              <li><FiCheckCircle color="blue" /> Controle de PBX Online</li>
              <li><FiCheckCircle color="blue" /> Siga-me</li>
              <li><FiCheckCircle color="blue" /> Relatórios de chamadas</li>
              <li><FiCheckCircle color="blue" /> Fila de chamadas com anúncio</li>
              <li><FiCheckCircle color="blue" /> Sala de conferência</li>
              <li><FiCheckCircle color="blue" /> Autoatendimento</li>
              <li><FiCheckCircle color="blue" /> Softphone Incluso</li>
              <li><FiCheckCircle color="blue" /> API Click to Call</li>
            </ul>
          </div>
        </div>
        <div className="p3 card">
          <div className="card-header">
            <h2><FiAward color="#ffd700" /> Premium</h2>
          </div>
          <div className="card-content">
            <ul className="ul-list">
              <li><FiCheckCircle color="blue" /> 20 Ramais IP</li>
              <li><FiCheckCircle color="blue" /> Gravações Online</li>
              <li><FiCheckCircle color="blue" /> Controle de PBX Online</li>
              <li><FiCheckCircle color="blue" /> Siga-me</li>
              <li><FiCheckCircle color="blue" /> Relatórios de chamadas</li>
              <li><FiCheckCircle color="blue" /> Fila de chamadas com anúncio</li>
              <li><FiCheckCircle color="blue" /> Sala de conferência</li>
              <li><FiCheckCircle color="blue" /> Autoatendimento</li>
              <li><FiCheckCircle color="blue" /> Softphone Incluso</li>
              <li><FiCheckCircle color="blue" /> API Click to Call</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Plans
