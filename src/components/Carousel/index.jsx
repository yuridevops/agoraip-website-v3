import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import imgSlider1 from '../../assets/voip-carousel-1.jpg'
import imgSlider2 from '../../assets/voip-carousel-2.jpg'
import imgSlider3 from '../../assets/voip-carousel-3.jpg'
import styles from './styles'

const Carousel = () => {
  return (
    <AwesomeSlider cssModules={styles} style={{ height: 500, zIndex: 0, backgroundSize: 'cover'}}>
      <div className="carousel-img" data-src={imgSlider1} />
      <div className="carousel-img" data-src={imgSlider2} />
      <div className="carousel-img" data-src={imgSlider3} />
    </AwesomeSlider>
  )
}

export default Carousel