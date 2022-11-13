import React from "react";
import { motion } from "framer-motion"

import SlideShow from '../components/SlideShow.jsx'

import classroomsOne from '../img/gallery/in-classrooms/CDEA-THS_3970.jpg'
import classroomsTwo from '../img/gallery/in-classrooms/CDEA-THS_4004.jpg'
import classroomsThree from '../img/gallery/in-classrooms/CDEA-THS_4035.jpg'

function Gallery() {
  return (
     <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
     <div className='bg-background text-text'>
      <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
        <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Photo Gallery</h1>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
          "There is so much power in diversity—this mural proves that."
          <br/>
        	<span className='font-bold'>- Drew E. Clark</span>
        </p>
      </div>
  		<div>
  			<h2 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 pt-10 mt-10 md:mb-5'>Jimmy and Dimmy in Classrooms</h2>
  		</div>
       <div className='flex items-center justify-center'>
         <div className='md:w-2/3 p-10'>
            <SlideShow/>
         </div>
       </div>
    </div>
    </motion.div>
  );
}

export default Gallery;