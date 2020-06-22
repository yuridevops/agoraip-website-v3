import React from 'react'
import styled from 'styled-components'
import { MdHeadsetMic, MdStayCurrentPortrait, MdPhoneForwarded, MdVoicemail, MdGroup, MdScreenShare, MdDialerSip, MdCloudQueue } from 'react-icons/md'
import { MdVideoLabel } from 'react-icons/md'


const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  justify-content: center;
  padding: 40px;
  align-items: center;


  .card{
    padding: 50px;
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    height: 300px;
    background-color: #fff;
    font-size: 14px;
    text-align: center;
  }

  .card:hover{
    box-shadow: 0 0 0.3em #888888;
  }

  .card-header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  .card-body{
    display: flex;
    justify-content: center;

  }

  h4{
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    
  }

`;

const GridFeatures = () => {
  return (
    <ContainerGrid>
      <div className="card">
        <div className="card-header">
          <MdHeadsetMic size={60} color='#2b4c80'  />
          <h4>Atendentes virtuais</h4>
        </div>
        <div className="card-body">
          Ofereça respostas automatizadas e encaminhamento de chamadas sem o auxílio humano.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdVideoLabel size={60} color='#2b4c80' />
          <h4>Videoconferência</h4>
        </div>
        <div className="card-body">
          Faça reuniões com clientes ou colegas de trabalho e poupe custos de viagem.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdStayCurrentPortrait size={60} color='#2b4c80' />
          <h4>Aplicativos móveis</h4>
        </div>
        <div className="card-body">
          Esteja disponível para comunicações empresariais em qualquer lugar com seu dispositivo iOS ou Android.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdPhoneForwarded size={60} color='#2b4c80' />
          <h4>Desvio de chamadas</h4>
        </div>
        <div className="card-body">
          Encaminhe seu ramal para qualquer celular, telefone fixo ou para um colega de trabalho.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdVoicemail size={60} color='#2b4c80' />
          <h4>Correio de voz virtual</h4>
        </div>
        <div className="card-body">
        Ouça mensagens de voz onde estiver — na Internet, no celular ou em uma linha externa.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdGroup size={60} color='#2b4c80' />
          <h4>Grupos de chamadas</h4>
        </div>
        <div className="card-body">
        Faça o telefone de um determinado grupo tocar quando um determinado ramal for discado.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdScreenShare size={60} color='#2b4c80' />
          <h4>Compartilhamento combinado de vídeo e tela</h4>
        </div>
        <div className="card-body">
        Veja a galeria da webcam, além de uma apresentação ou aplicativo compartilhado na mesma tela.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdDialerSip size={60} color='#2b4c80' />
          <h4>Chamadas VoIP</h4>
        </div>
        <div className="card-body">
        Todos os colaboradores podem atender a uma chamada, colocá-la em espera e transferi-la para outra pessoa.
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <MdCloudQueue size={60} color='#2b4c80' />
          <h4>PBX em nuvem</h4>
        </div>
        <div className="card-body">
        Todos os serviços ficam hospedados na nuvem, o que reduz os custos e aumenta a redundância.
        </div>
      </div>
    </ContainerGrid>
  )
}

export default GridFeatures