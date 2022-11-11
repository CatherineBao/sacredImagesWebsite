import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import finneanSmith from '../../img/story-img/lgbtq/finnean-smith-rect.png'
import ivyAnderton from '../../img/story-img/lgbtq/ivy-anderton-rect.png'
import morganSmith from '../../img/story-img/lgbtq/morgan-smith-rect.png'
import natalieOtis from '../../img/story-img/lgbtq/natalie-otis-rect.png'
import unknown1 from '../../img/story-img/lgbtq/unknown-3-ap-art-rect.png'
import unknown2 from '../../img/story-img/lgbtq/unknown-3-english-rect.png'
import unknown3 from '../../img/story-img/lgbtq/unknown-lgbt-rect.png'


function LGBTQ() {
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
	    <div className='bg-background text-text'>
  	    <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
  	      <div>
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>LGBTQ+ Stories</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
          </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
  	        "A unifying experience that helped me explore community and my own identity. Plus I got pizza. :)"
  	        <br/>
  	      	<span className='font-bold'>- Fynn Pedersen</span>
  	      </p>
  	    </div>
  	    <div>
          <div className='lg:p-20 p-10'>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={natalieOtis} alt="avaFolkman"/>
              <img className={img} src={unknown3} alt="avaFolkman"/>
            </div>
    			  <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={finneanSmith} alt="avaFolkman"/>
              <img className={img} src={ivyAnderton} alt="avaFolkman"/>
              <img className={img} src={morganSmith} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={unknown1} alt="avaFolkman"/>
              <img className={img} src={unknown2} alt="avaFolkman"/>
            </div>
    		  </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default LGBTQ;