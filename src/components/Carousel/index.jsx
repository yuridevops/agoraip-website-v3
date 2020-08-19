import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import imgSlider1 from '../../assets/voip-carousel-1.jpg'
import styles from './styles'

const Carousel = () => {
  return (
    <AwesomeSlider cssModules={styles} style={{ height: 500, zIndex: 0, backgroundSize: 'cover'}}>
      <div className="carousel-img" data-src={imgSlider1} />
    </AwesomeSlider>
  )
}

export default Carousel