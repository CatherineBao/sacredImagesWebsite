import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import abbieBrockbank from '../../img/story-img/ap-art/abbie-brockbank-rect.png'
import alexaLedezma from '../../img/story-img/ap-art/alexa-ledezma-rect.png'
import avaFolkman from '../../img/story-img/ap-art/ava-folkman-rect.png'
import brennaBronson from '../../img/story-img/ap-art/brenna-bronson-rect.png'
import brinleyGardner from '../../img/story-img/ap-art/brinley-gardner-rect.png'
import kaylaBjorn from '../../img/story-img/ap-art/kayla-bjorn-rect.png'
import morganSmith from '../../img/story-img/ap-art/morgan-smith-rect.png'
import natalieOtis from '../../img/story-img/ap-art/natalie-otis-rect.png'
import pageBlumer from '../../img/story-img/ap-art/page-blumer-rect.png'
import unknown1 from '../../img/story-img/ap-art/unknown-1-ap-art-rect.png'
import unknown2 from '../../img/story-img/ap-art/unknown-2-ap-art-rect.png'
import unknown3 from '../../img/story-img/ap-art/unknown-3-ap-art-rect.png'
import unknown4 from '../../img/story-img/ap-art/unknown-4-ap-art-rect.png'

function APArt() {
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
     <div className='bg-background text-text'>
      <div className='pt-14 md:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
        <div>
           <h1 className='text-xl lg:text-3xl font-arvo font-thin'>AP Art Stories</h1>
          <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
        </div>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl md:pt-5'>
          "This project was something very enjoyable because of people coming together and giving it their all and being able to show off their talents."
          <br/>
        	<span className='font-bold'>- Morgan V. Smith</span>
        </p>
      </div>
       <div className=''>
         <div className='lg:p-20 p-10'>
  			  <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={abbieBrockbank} alt="avaFolkman"/>
            <img className={img} src={alexaLedezma} alt="avaFolkman"/>
            <img className={img} src={avaFolkman} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={brennaBronson} alt="avaFolkman"/>
            <img className={img} src={brinleyGardner} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={kaylaBjorn} alt="avaFolkman"/>
            <img className={img} src={morganSmith} alt="avaFolkman"/>
            <img className={img} src={natalieOtis} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={pageBlumer} alt="avaFolkman"/>
            <img className={img} src={unknown1} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown2} alt="avaFolkman"/>
            <img className={img} src={unknown3} alt="avaFolkman"/>
            <img className={img} src={unknown4} alt="avaFolkman"/>
          </div>
  		  </div>
       </div>
      </div>
    </motion.div>
  );
}

export default APArt;