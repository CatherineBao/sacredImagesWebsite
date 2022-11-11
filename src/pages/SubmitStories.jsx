import React from "react";
import { motion, AnimatePresence } from "framer-motion"

function SubmitStories() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
     <div className='bg-background text-text'>
      <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
        <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Submit Your Story</h1>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
          "The hardest part of making this mural is slowly learning to love myself." 
          <br/>
        	<span className='font-bold'>- Anonymous</span>
        </p>
      </div>
  		<div className='relative pb-[56.25%] pt-25 md:h-[70em] h-[75em]'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSci8yA_vEJn2kqHHL_tkM4heikNtfJinF1SqAROYAhPFZIkZw/viewform?embedded=true" 
          frameborder="0" 
          marginheight="0"
          marginwidth="0"
          className='w-full h-[75em] mt-10'
					
          >Loading…
        </iframe>
  		</div>
    </div>
    </motion.div>
  );
}

export default SubmitStories;