import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import unknown1 from '../../img/story-img/humanities/1-rect.png'
import unknown2 from '../../img/story-img/humanities/2-rect.png'
import unknown3 from '../../img/story-img/humanities/3-rect.png'
import unknown4 from '../../img/story-img/humanities/4-rect.png'
import unknown5 from '../../img/story-img/humanities/5-rect.png'
import unknown6 from '../../img/story-img/humanities/6-rect.png'
import unknown7 from '../../img/story-img/humanities/7-rect.png'
import unknown8 from '../../img/story-img/humanities/8-rect.png'
import unknown9 from '../../img/story-img/humanities/9-rect.png'
import unknown10 from '../../img/story-img/humanities/10-rect.png'
import unknown11 from '../../img/story-img/humanities/11-rect.png'
import unknown12 from '../../img/story-img/humanities/12-rect.png'
import unknown13 from '../../img/story-img/humanities/13-rect.png'
import unknown14 from '../../img/story-img/humanities/14-rect.png'
import unknown15 from '../../img/story-img/humanities/15-rect.png'
import unknown16 from '../../img/story-img/humanities/16-rect.png'
import unknown17 from '../../img/story-img/humanities/17-rect.png'
import unknown18 from '../../img/story-img/humanities/18-rect.png'
import caltonThurston from '../../img/story-img/humanities/calton-thurston-rect.png'
import scottHubert from '../../img/story-img/humanities/scott-hubert-rect.png'

function Humanities() {
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
           <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Humanities Stories</h1>
          <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
        </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
  	        "The coolest part about making the mural was getting to see the hundreds of ideas being shared. Every story is unique, special, and important, and you can see that being highlighted across the several iterations made before the final product came to fruition." 
  	        <br/>
  	      	<span className='font-bold'>- Talon Gardner</span>
  	      </p>
  	    </div>
  			<div>
  			<div className='lg:p-20 p-10'>
  			  <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown1} alt="avaFolkman"/>
            <img className={img} src={unknown2} alt="avaFolkman"/>
            <img className={img} src={unknown3} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown4} alt="avaFolkman"/>
            <img className={img} src={unknown5} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown6} alt="avaFolkman"/>
            <img className={img} src={unknown7} alt="avaFolkman"/>
            <img className={img} src={unknown8} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown9} alt="avaFolkman"/>
            <img className={img} src={unknown10} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown11} alt="avaFolkman"/>
            <img className={img} src={unknown12} alt="avaFolkman"/>
            <img className={img} src={unknown13} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown14} alt="avaFolkman"/>
            <img className={img} src={unknown15} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown16} alt="avaFolkman"/>
            <img className={img} src={unknown17} alt="avaFolkman"/>
            <img className={img} src={unknown18} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={caltonThurston} alt="avaFolkman"/>
            <img className={img} src={scottHubert} alt="avaFolkman"/>
          </div>
  		  </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default Humanities;