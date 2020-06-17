import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  .row {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    padding: 30px 0px;
    
  }

  .item {
    min-width: 300px;
    max-width: 700px;  
    padding:30px;
  }

  .item-image img{
    max-width: 600px;
    max-height: 600px;
  }

  .row-white{
    background-color: #fff;
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    .item-image img{
      max-width: 300px;
      max-height: 600px;
    }
  }
`;

const RowFeature = ({ title, description, image, invert }) => {
  return (
    <Container>
      <div className={!invert ? "row" : "row row-white"}>
        <div className="item-image">
          <img src={require(`../../assets/${image}`)} alt={image} />
        </div>
        <div className="item ">
          <h2>{title}</h2>
          <br />
          <br />
          <h4>{description}</h4>
        </div>
      </div>
    </Container>

  )
}

export default RowFeature