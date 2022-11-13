import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classroomsOne from '../img/gallery/in-classrooms/CDEA-THS_3970.jpg'
import classroomsTwo from '../img/gallery/in-classrooms/CDEA-THS_4004.jpg'
import classroomsThree from '../img/gallery/in-classrooms/CDEA-THS_4035.jpg'
import classroomsFour from '../img/gallery/in-classrooms/CDEA-THS_4054.jpg'
import classroomsFive from '../img/gallery/in-classrooms/CDEA-THS_4129.jpg'
import classroomsSix from '../img/gallery/in-classrooms/CDEA-THS_4160.jpg'
import classroomsSeven from '../img/gallery/in-classrooms/CDEA-THS_R4388.jpg'
import classroomsEight from '../img/gallery/in-classrooms/CDEA-THS_R4416.jpg'
import classroomsNine from '../img/gallery/in-classrooms/CDEA-THS_R4432.jpg'
import classroomsTen from '../img/gallery/in-classrooms/CDEA-THS_RP-4126.jpg'


function slideShow() {
  const img = 'rounded-lg'
  return (
    <div>
      <div className='block md:hidden'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay showThumbs={false}>
          <div>  <img className={img} src={classroomsOne} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsTwo} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsThree} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsFour} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsFive} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsSix} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsSeven} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsEight} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsNine} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsTen} alt="designs" /> </div>
        </Carousel>
      </div>
      <div className='hidden md:block'>
        <Carousel swipeable infiniteLoop useKeyboardArrows autoPlay>
          <div>  <img className={img} src={classroomsOne} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsTwo} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsThree} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsFour} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsFive} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsSix} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsSeven} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsEight} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsNine} alt="designs" /> </div>
          <div>  <img className={img} src={classroomsTen} alt="designs" /> </div>
        </Carousel>
      </div>
    </div>
  );
}

export default slideShow;