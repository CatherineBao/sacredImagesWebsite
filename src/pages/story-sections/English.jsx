import React from "react"
import { motion, AnimatePresence } from "framer-motion"

import carlosOrtega from '../../img/story-img/english/carlos-ortega-rect.png'
import chloeClayton from '../../img/story-img/english/chloe-clayton-rect.png'
import chrisLawley from '../../img/story-img/english/chris-lawley-rect.png'
import hattieYoung from '../../img/story-img/english/hattie-young-rect.png'
import ivyAnderton from '../../img/story-img/english/ivy-anderton-rect.png'
import jugsonDrowns from '../../img/story-img/english/jugson-drowns-rect.png'
import kaylaSanders from '../../img/story-img/english/kayla-sanders-rect.png'
import marielaSalas from '../../img/story-img/english/mariela-salas-rect.png'
import sarahSaturnLawrence from '../../img/story-img/english/sarah-saturn-lawrence-rect.png'
import unknown1 from '../../img/story-img/english/unknown-1-english-rect.png'
import unknown2 from '../../img/story-img/english/unknown-2-english-rect.png'
import unknown3 from '../../img/story-img/english/unknown-3-english-rect.png'
import zaidRodriguez from '../../img/story-img/english/zaid-rodriguez-rect.png'


function English() {
  const nodes = 'hover:hue-rotate-90 duration-200 hover:cursor-pointer fill-accent'
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
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>English Stories</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
          </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-3'>
  	        "To me, this mural represents both our potential and our calling to embrace diversity and allow everyone to bring their unique strengths to the table."
  	        <br/>
  	      	<span className='font-bold'>- Mark T. Forsyth</span>
  	      </p>
  	    </div>
  			<div>
  			  <div className='lg:p-20 p-10'>
    			  <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={carlosOrtega} alt="avaFolkman"/>
              <img className={img} src={chloeClayton} alt="avaFolkman"/>
              <img className={img} src={chrisLawley} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={hattieYoung} alt="avaFolkman"/>
              <img className={img} src={ivyAnderton} alt="avaFolkman"/>
            </div>
             <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={jugsonDrowns} alt="avaFolkman"/>
              <img className={img} src={kaylaSanders} alt="avaFolkman"/>
              <img className={img} src={marielaSalas} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={sarahSaturnLawrence} alt="avaFolkman"/>
              <img className={img} src={unknown1} alt="avaFolkman"/>
            </div>
             <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={unknown2} alt="avaFolkman"/>
              <img className={img} src={unknown3} alt="avaFolkman"/>
              <img className={img} src={zaidRodriguez} alt="avaFolkman"/>
            </div>
    		  </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default English;