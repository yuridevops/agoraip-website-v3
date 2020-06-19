import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import imgSlider1 from '../../assets/slider-1.jpg'
import imgSlider2 from '../../assets/slider-2.jpg'
import imgSlider3 from '../../assets/slider-3.jpg'
import styles from './styles'

const Carousel = () => {
  return (
    <AwesomeSlider cssModules={styles} style={{ height: 500, zIndex: 0 }}>
      <div data-src={imgSlider1} />
      <div data-src={imgSlider2} />
      <div data-src={imgSlider3} />
    </AwesomeSlider>
  )
}

export default Carousel