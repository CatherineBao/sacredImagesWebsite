import React from "react";
import { motion } from "framer-motion"

import SlideShow from '../components/SlideShow.jsx'
import SlideShowTwo from '../components/SlideShowTwo.jsx'
import SlideShowThree from '../components/SlideShowThree.jsx'
import SlideShowFour from '../components/SlideShowFour.jsx'

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
          "I’ve learned to not assume that my life is harder than others because we were all able to open up and learn more about others." 
          <br/>
        	<span className='font-bold'>- Kimberly Contreras</span>
        </p>
      </div>
  		<div>
  			<h2 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 pt-10 mt-10 md:mb-5'>Jimmy and Dimmy in Classrooms</h2>
  		</div>
       <div className='flex items-center justify-center p-10 '>
         <div className='md:w-2/3 rounded-2xl'>
            <SlideShow/>
         </div>
       </div>
       <h2 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 pt-10 mt-10 md:mb-5'>Symbols Brainstorm Session (LIA, APARt, Design Team)</h2>
       <div className='flex items-center justify-center p-10 '>
         <div className='md:w-2/3 rounded-2xl'>
           <SlideShowTwo/>
          </div>
        </div>
       <h2 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 pt-10 mt-10 md:mb-5'>Painting the Mural</h2>
       <div className='flex items-center justify-center p-10 '>
         <div className='md:w-2/3 rounded-2xl'>
           <SlideShowThree/>
          </div>
        </div>
        <h2 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 pt-10 mt-10 md:mb-5'>The Finial Unveiling</h2>
       <div className='flex items-center justify-center p-10 mb-10'>
         <div className='md:w-2/3 rounded-2xl'>
           <SlideShowFour/>
          </div>
        </div>
    </div>
    </motion.div>
  );
}

export default Gallery;