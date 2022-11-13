import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import paintingOne from '../img/gallery/painting/CDEA-THS_Mural-RP4674.jpg'
import paintingTwo from '../img/gallery/painting/CDEA-THS-R_4866.jpg'
import paintingThree from '../img/gallery/painting/CDEA-THS-R_4799.jpg'
import paintingFour from '../img/gallery/painting/CDEA-THS-R_4800.jpg'
import paintingFive from '../img/gallery/painting/CDEA-THS-RP_5000.jpg'
import paintingSix from '../img/gallery/painting/CDEA-THS-RP_5073.jpg'
import paintingSeven from '../img/gallery/painting/CDEA-THS-RP_5218.jpg'
import paintingEight from '../img/gallery/painting/IMG_5000.png'
import paintingNine from '../img/gallery/painting/IMG_1186.png'
import paintingTen from '../img/gallery/painting/IMG_1188.png'

function slideShowThree() {
  const img = 'rounded-lg'
  return (
    <div>
      <div className='block md:hidden'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          <div> <img className={img} src={paintingOne} alt="designs" /> </div>
          <div> <img className={img} src={paintingTwo} alt="designs" /> </div>
          <div> <img className={img} src={paintingThree} alt="designs" /> </div>
          <div> <img className={img} src={paintingFour} alt="designs" /> </div>
          <div> <img className={img} src={paintingFive} alt="designs" /> </div>
          <div> <img className={img} src={paintingSix} alt="designs" /> </div>
          <div> <img className={img} src={paintingSeven} alt="designs" /> </div>
          <div> <img className={img} src={paintingEight} alt="designs" /> </div>
          <div> <img className={img} src={paintingNine} alt="designs" /> </div>
          <div> <img className={img} src={paintingTen} alt="designs" /> </div>
        </Carousel>
      </div>
      <div className='hidden md:block'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay>
          <div> <img className={img} src={paintingOne} alt="designs" /> </div>
          <div> <img className={img} src={paintingTwo} alt="designs" /> </div>
          <div> <img className={img} src={paintingThree} alt="designs" /> </div>
          <div> <img className={img} src={paintingFour} alt="designs" /> </div>
          <div> <img className={img} src={paintingFive} alt="designs" /> </div>
          <div> <img className={img} src={paintingSix} alt="designs" /> </div>
          <div> <img className={img} src={paintingSeven} alt="designs" /> </div>
          <div> <img className={img} src={paintingEight} alt="designs" /> </div>
          <div> <img className={img} src={paintingNine} alt="designs" /> </div>
          <div> <img className={img} src={paintingTen} alt="designs" /> </div>
        </Carousel>
      </div>
    </div>
  );
}

export default slideShowThree;