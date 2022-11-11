import React from "react";
import Mural from './components/mural.jsx'
import { motion, AnimatePresence } from "framer-motion"

function App() {

  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
  	  <div className='bg-background text-text'>
  	    <div className='pt-12 lg:pt-24 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
          <div>
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Interactive Mural</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on mural for details</p>
          </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl'>
  	        "The mural is beautiful, but the student connections have been priceless."
  	        <br/>
  	      	<span className='font-bold'>- Anna Davis</span>
  	      </p>
  	    </div>
  	    <Mural/>
  	    <div className='bg-bars text-text flex justify-end items-center lg:px-20 p-3 uppercase h-10 sm:h-auto'>
  	      <p className='hidden sm:block text-xs text-right text-mainText italic uppercase max-w-3xl'>
  	      	"The teamwork and talent displayed by the students this month makes me so proud to be apart of this mural project."
  	        <br/>
  	      	<span className='font-bold'>- Dimi Macheras, 80% Studios</span>
  	      </p>
  	    </div>
  	    <h1 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 pt-10'>Documentary Video</h1>
  	    <div className='flex justify-center flex-col p-10 xl:px-52'>
  	      <div className='relative pb-[56.25%] pt-25 h-0'>
  	      <iframe
  	        className='absolute top-0 left-0 w-full h-full z-0'
  	        src='https://www.youtube.com/embed/vWzIhTEu1Q8'
  	        frameBorder="0"
  	        allowfullscreen="allowfullscreen"
  	        mozallowfullscreen="mozallowfullscreen" 
  	        msallowfullscreen="msallowfullscreen" 
  	        oallowfullscreen="oallowfullscreen" 
  	        webkitallowfullscreen="webkitallowfullscreen"
  	      />
  	      </div>
  	    </div>
  	  </div>
    </motion.div>
  );
}

export default App;