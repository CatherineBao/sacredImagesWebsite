import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import brainstormOne from '../img/gallery/brainstorm/Abbie_Ava.jpg'
import brainstormTwo from '../img/gallery/brainstorm/CDEA-THS_4151.jpg'
import brainstormThree from '../img/gallery/brainstorm/CDEA-THS_4174.jpg'
import brainstormFour from '../img/gallery/brainstorm/CDEA-THS_4220.jpg'
import brainstormFive from '../img/gallery/brainstorm/CDEA-THS_R4424.png'
import brainstormSix from '../img/gallery/brainstorm/CDEA-THS_RP-4186.jpg'
import brainstormSeven from '../img/gallery/brainstorm/CDEA-THS_RP-4200.jpg'
import brainstormEight from '../img/gallery/brainstorm/CDEA-THS_RP-4227.jpg'
import brainstormNine from '../img/gallery/brainstorm/CDEA-THS_RP-4273.jpg'
import brainstormTen from '../img/gallery/brainstorm/CDEA-THS_R4425.png'

function slideShowTwo() {
  const img = 'rounded-lg'
  return (
    <div>
      <div className='block md:hidden'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          <div> <img className={img} src={brainstormOne} alt="designs" /> </div>
          <div> <img className={img} src={brainstormTwo} alt="designs" /> </div>
          <div> <img className={img} src={brainstormThree} alt="designs" /> </div>
          <div> <img className={img} src={brainstormFour} alt="designs" /> </div>
          <div> <img className={img} src={brainstormFive} alt="designs" /> </div>
          <div> <img className={img} src={brainstormSix} alt="designs" /> </div>
          <div> <img className={img} src={brainstormSeven} alt="designs" /> </div>
          <div> <img className={img} src={brainstormEight} alt="designs" /> </div>
          <div> <img className={img} src={brainstormNine} alt="designs" /> </div>
          <div> <img className={img} src={brainstormTen} alt="designs" /> </div>
        </Carousel>
      </div>
      <div className='hidden md:block'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay>
          <div> <img className={img} src={brainstormOne} alt="designs" /> </div>
          <div> <img className={img} src={brainstormTwo} alt="designs" /> </div>
          <div> <img className={img} src={brainstormThree} alt="designs" /> </div>
          <div> <img className={img} src={brainstormFour} alt="designs" /> </div>
          <div> <img className={img} src={brainstormFive} alt="designs" /> </div>
          <div> <img className={img} src={brainstormSix} alt="designs" /> </div>
          <div> <img className={img} src={brainstormSeven} alt="designs" /> </div>
          <div> <img className={img} src={brainstormEight} alt="designs" /> </div>
          <div> <img className={img} src={brainstormNine} alt="designs" /> </div>
          <div> <img className={img} src={brainstormTen} alt="designs" /> </div>
        </Carousel>
      </div>
    </div>
  );
}

export default slideShowTwo;