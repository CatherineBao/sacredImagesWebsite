import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

import unveilingOne from '../img/gallery/unveiling/136A8744.jpg'
import unveilingTwo from '../img/gallery/unveiling/136A8745.jpg'
import unveilingThree from '../img/gallery/unveiling/136A8752.jpeg'
import unveilingFour from '../img/gallery/unveiling/CDEA-THS-Mural_R_5008.jpg'
import unveilingFive from '../img/gallery/unveiling/CDEA-THS-Mural_R_5068.jpeg'
import unveilingSix from '../img/gallery/unveiling/CDEA-THS-Mural_R_5077.jpeg'
import unveilingSeven from '../img/gallery/unveiling/CDEA-THS-Mural_R_5103.jpg'
import unveilingEight from '../img/gallery/unveiling/CDEA-THS-Mural_RP_5360.jpg'
import unveilingNine from '../img/gallery/unveiling/CDEA-THS-Mural_RP_5380.jpg'
import unveilingTen from '../img/gallery/unveiling/CDEA-THS-Mural_RP_5447.jpg'

function slideShowFour() {
  const img = 'rounded-lg'
  return (
    <div>
      <div className='block md:hidden'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          <div> <img className={img} src={unveilingOne} alt="designs" /> </div>
          <div> <img className={img} src={unveilingTwo} alt="designs" /> </div>
          <div> <img className={img} src={unveilingThree} alt="designs" /> </div>
          <div> <img className={img} src={unveilingFour} alt="designs" /> </div>
          <div> <img className={img} src={unveilingFive} alt="designs" /> </div>
          <div> <img className={img} src={unveilingSix} alt="designs" /> </div>
          <div> <img className={img} src={unveilingSeven} alt="designs" /> </div>
          <div> <img className={img} src={unveilingEight} alt="designs" /> </div>
          <div> <img className={img} src={unveilingNine} alt="designs" /> </div>
          <div> <img className={img} src={unveilingTen} alt="designs" /> </div>
        </Carousel>
      </div>
      <div className='hidden md:block'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay>
          <div> <img className={img} src={unveilingOne} alt="designs" /> </div>
          <div> <img className={img} src={unveilingTwo} alt="designs" /> </div>
          <div> <img className={img} src={unveilingThree} alt="designs" /> </div>
          <div> <img className={img} src={unveilingFour} alt="designs" /> </div>
          <div> <img className={img} src={unveilingFive} alt="designs" /> </div>
          <div> <img className={img} src={unveilingSix} alt="designs" /> </div>
          <div> <img className={img} src={unveilingSeven} alt="designs" /> </div>
          <div> <img className={img} src={unveilingEight} alt="designs" /> </div>
          <div> <img className={img} src={unveilingNine} alt="designs" /> </div>
          <div> <img className={img} src={unveilingTen} alt="designs" /> </div>
        </Carousel>
      </div>
    </div>
  );
}

export default slideShowFour;