import React from "react";
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

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
  			<h2>(Coming Soon...)</h2>
  		</div>
    </div>
    </motion.div>
  );
}

export default Gallery;