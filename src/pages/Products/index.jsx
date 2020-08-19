import React from 'react'
import styled from 'styled-components'
import { MdHeadsetMic, MdStayCurrentPortrait, MdPhoneForwarded, MdVoicemail, MdGroup, MdScreenShare, MdDialerSip, MdCloudQueue } from 'react-icons/md'
import { MdVideoLabel } from 'react-icons/md'
import ucm6202 from '../../assets/ucm6202.jpg'
import ucm6204 from '../../assets/ucm6204.png'
import ucm6208 from '../../assets/ucm6208.jpg'
import ucm6510 from '../../assets/ucm6510.jpg'
import gxp1610 from '../../assets/gxp1610.jpg'
import gxp1620 from '../../assets/gxp1620.png'
import gxp1630 from '../../assets/gxp1630.jpg'
import dp722 from '../../assets/dp722.jpg'
import dp752 from '../../assets/dp752.jpg'
import gvc3210 from '../../assets/gvc3210.jpg'

const Container = styled.div`
  display:flex;
  flex-direction: column;
  background-color: #fafafa;
  .title {
    font-size: 32px;
    font-weight:600;
    margin: 20px 40px;
    color:rgb(43,76,128);
  }
`
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
    height: 400;
    background-color: #fff;
    font-size: 14px;
    text-align: center;
    overflow: hidden;
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

  .card-header img{
    height:150px;
  }

  .card-body{
    display: flex;
    justify-content: center;

  }

  .card-button{
    background: #1877f2;
    width: 100%;
    margin-top: 5px;
    padding: 5px 0px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .card-button :hover {
    background: #1259b5;
  }

  ul{
    margin-top:10px;
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .unique{
    list-style: none;
  }

  li{
    font-size:10px;
    font-weight: 600;
    text-align: left;
  }

  h4{
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-content: center;
    
  }



`;

const Products = () => {
  return (
    <Container>
      <div className='title'>Centrais Telefônicas</div>
      <ContainerGrid>
        <div className="card">
          <div className="card-header">
            <img src={ucm6202} alt='ucm6202' />
            <h4>UCM 6202</h4>
          </div>
          <div className="card-body">
            <ul>
              <li>2 portas FXO, 2 portas FXS, 2 portas Gigabit</li>
              <li>3 pontes de conferência, cada uma com suporte a 25 participantes</li>
              <li>Até 500 dispositivos SIP registrados</li>
              <li>30 chamadas VoIP simultâneas</li>
              <li>Suporta os modos comutado, de rede dupla e de roteador</li>
              <li>Inclui um servidor DHCP integrado</li>
            </ul>
          </div>
          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={ucm6204} alt='ucm6204' />
            <h4>UCM 6204</h4>
          </div>
          <div >
            <ul>
              <li>4 portas FXO, 2 portas FXS, 2 portas Gigabit</li>
              <li>3 pontes de conferência, cada uma com suporte a 25 participantes</li>
              <li>Até 500 dispositivos SIP registrados</li>
              <li>45 chamadas VoIP simultâneas</li>
              <li>Suporta os modos comutado, de rede dupla e de roteador</li>
              <li>Inclui um servidor DHCP integrado</li>
            </ul>
          </div>
          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={ucm6208} alt='ucm6208' />
            <h4>UCM 6208</h4>
          </div>
          <ul>
            <li>2 portas FXO, 2 portas FXS, 2 portas Gigabit</li>
            <li>3 pontes de conferência, cada uma com suporte a 25 participantes</li>
            <li>Até 500 dispositivos SIP registrados</li>
            <li>30 chamadas VoIP simultâneas</li>
            <li>Suporta os modos comutado, de rede dupla e de roteador</li>
            <li>Inclui um servidor DHCP integrado</li>
          </ul>
          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={ucm6510} alt='ucm6510' />
            <h4>UCM 6510</h4>
          </div>
          <ul>
            <li>2 portas FXO, 2 portas FXS, 2 portas Gigabit</li>
            <li>8 pontes de conferência, cada uma com suporte a 64 participantes</li>
            <li>Até 2000 dispositivos SIP registrados</li>
            <li>200 chamadas VoIP simultâneas</li>
            <li>Suporta os modos comutado, de rede dupla e de roteador</li>
            <li>Inclui um servidor DHCP integrado</li>
          </ul>
          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
      </ContainerGrid>

      <div className='title'>Telefones</div>

      <ContainerGrid>
        <div className="card">
          <div className="card-header">
            <img src={gxp1610} style={{ height: 200 }} alt='gxp1610' />
            <h4>GXP1610</h4>
          </div>
          <div >
            <ul>
              <li>1 conta SIP</li>
              <li>Exibição de até 2 chamadas</li>
              <li>3 teclas com programação XML</li>
              <li>Tela LCD de 132x48 </li>
              <li>PoE </li>
              <li>Diversas funcionalidades </li>
            </ul>
          </div>
          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={gxp1620} style={{ height: 200 }} alt='gxp1620' />
            <h4>GXP1620</h4>
          </div>

          <ul>
            <li>2 conta SIP</li>
            <li>Exibição de até 2 chamadas</li>
            <li>3 teclas com programação XML</li>
            <li>Tela LCD de 132x48 </li>
            <li>PoE </li>
            <li>Diversas funcionalidades </li>
          </ul>

          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={gxp1630} style={{ height: 200 }} alt='gxp1630' />
            <h4>GXP1630</h4>
          </div>

          <ul>
            <li>3 contas SIP</li>
            <li>Exibição de até 2 chamadas</li>
            <li>3 teclas com programação XML</li>
            <li>Teclas programáveis para 8 ramais com BLF em duas cores</li>
            <li>Tela LCD de 132x64 </li>
            <li>PoE </li>
            <li>Diversas funcionalidades </li>
          </ul>

          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>

      </ContainerGrid>

      <div className='title'>Telefonia sem fio</div>

      <ContainerGrid>
        <div className="card">
          <div className="card-header">
            <img src={dp722} style={{ height: 200 }} alt='dp722' />
            <h4>DP722</h4>
          </div>

          <ul>
            <li>10 Contas SIP</li>
            <li>Alcance em ambientes externos: até 350 metros</li>
            <li>Alcance em ambientes internos: até 50 metros</li>
            <li>23 teclas, incluindo 2 teclas programáveis</li>
            <li>LCD TFT colorido de 1.8 pol (128x160)</li>
            <li>Conexão micro-USB</li>
            <li>Baterias AAA recarregáveis de Ni-MH de 800 mAh e baixo nível de descarga (250 horas em espera e 20 horas de conversa)</li>
            <li>Diversas funcionalidades </li>

          </ul>

          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
        </a>
        </div>
        <div className="card">
          <div className="card-header">
            <img src={dp752} style={{ height: 240 }} alt='dp752' />
            <h4>DP752</h4>
          </div>

          <ul>
            <li>Emparelhamento até 5 aparelhos</li>
            <li>Alcance em ambientes externos: até 400 metros (com aparelho - DP730) ou até 350 metros (DP722/DP720)</li>
            <li>Alcance em ambientes internos: até 50 metros</li>
            <li>Uma porta Ethernet de 10/100 Mbps com detecção automática e PoE integrado</li>
            <li>Diversas funcionalidades </li>
          </ul>

          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
           </a>
        </div>

      </ContainerGrid>

      <div className='title'>Video Conferência</div>

      <ContainerGrid>
        <div className="card">
          <div className="card-header">
            <img src={gvc3210} style={{ height: 200 }} alt='gvc3210' />
            <h4>GVC3210</h4>
          </div>

          <ul>
            <li>Camera: 1/3 "2 Megapixel CMOS, 1920Hx1080V @ 30fps </li>
            <li>Lente: Zoom óptico de 12x, +/- inclinação de 23 °, +/- 90 ° panorama, 90 ° (W) * - ângulo de visão de 6,3 ° (T)</li>
            <li>Wi-fi: Built-in de banda dupla 802.11 a / b / g / n (2.4GHz e 5GHz)</li>
            <li>Saída de video: 2x HDMI com resolução até 1080p com CEC</li>
            <li>Entrada de video: 1x HDMI com resolução até 1080p</li>
            <li>Microfone externo, Microfone embutido, MIC</li>

          </ul>

          <a className="card-button" href="http://api.whatsapp.com/send?1=pt_BR&phone=5541992724349" target="_blank">
            Quero saber mais
          </a>
        </div>
      </ContainerGrid>
    </Container>

  )
}

export default Products