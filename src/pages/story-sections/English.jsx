import React from "react"
import {useState} from 'react';
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
import sarahSaturnLawrenceImg from '../../img/story-img/english/sarah-saturn-lawrence.png'
import unknown1 from '../../img/story-img/english/unknown-1-english-rect.png'
import unknown2 from '../../img/story-img/english/unknown-2-english-rect.png'
import unknown3 from '../../img/story-img/english/unknown-3-english-rect.png'
import zaidRodriguez from '../../img/story-img/english/zaid-rodriguez-rect.png'
import unknown3Img from '../../img/story-img/english/unknown-3.jpg'

function English() {
  const nodes = 'hover:hue-rotate-90 duration-200 hover:cursor-pointer fill-accent'
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  const imgNoHover = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg'
  const modal = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  const modalBlock = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"

  const [modalOpenZaid, setModalOpenZaid] = useState(true)
  const [modalOpenChloe, setModalOpenChloe] = useState(true)
  const [modalOpenSaturn, setModalOpenSaturn] = useState(true)
  const [modalOpenUnknown3, setModalOpenUnknown3] = useState(true)
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      {!modalOpenUnknown3 ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown3(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
              <img className='rounded-2xl w-full mb-10' src={unknown3Img} alt="avaFolkman"/>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenSaturn ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenSaturn(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Sarah/Saturn Lawrence</h1>
              <img className='rounded-2xl w-full mb-10' src={sarahSaturnLawrenceImg} alt="avaFolkman"/>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenChloe ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenChloe(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Chloe Clayton </h1>
              <p className='text-mainText'>
             I have seen the importance and result of hard work. I have seen how important it is to have fun and not worry but also balance work and school.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenZaid ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenZaid(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Zaid Rodriguez </h1>
              <p className='text-mainText'>
             In my mirror I would want my future family to see how my life was hard but I got through it and made a better person. Like when my parents got divorced and I had to help and to get to work at a young age and get through school and work hard enough to have my own successful company.  It would be nice to have something about those kids who struggled but got through it and became a better them.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
	    <div className='bg-background text-text'>
  	    <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
  	      <div>
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>English Stories</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
          </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-3'>
  	        "I felt extremely comfortable because [Jimmy] is an indigenous Hispanic and his story meant a lot to me because he didn't sugar coat anything. He spoke his truth and expressed his love for being Hispanic, and it made me feel heard and extremely wanted. I loved every second of it."
  	        <br/>
  	      	<span className='font-bold'>- Samari Velez</span>
  	      </p>
  	    </div>
  			<div>
  			  <div className='lg:p-20 p-10'>
    			  <div className='lg:flex gap-10 items-center justify-center'>
              <img className={imgNoHover} src={carlosOrtega} alt="avaFolkman"/>
              <img onClick={() => setModalOpenChloe(s => !s)} className={img} src={chloeClayton} alt="avaFolkman"/>
              <img className={imgNoHover} src={chrisLawley} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={imgNoHover} src={hattieYoung} alt="avaFolkman"/>
              <img className={imgNoHover} src={ivyAnderton} alt="avaFolkman"/>
            </div>
             <div className='lg:flex gap-10 items-center justify-center'>
              <img className={imgNoHover} src={jugsonDrowns} alt="avaFolkman"/>
              <img className={imgNoHover} src={kaylaSanders} alt="avaFolkman"/>
              <img className={imgNoHover} src={marielaSalas} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img onClick={() => setModalOpenSaturn(s => !s)} className={img} src={sarahSaturnLawrence} alt="avaFolkman"/>
              <img className={imgNoHover} src={unknown1} alt="avaFolkman"/>
            </div>
             <div className='lg:flex gap-10 items-center justify-center'>
              <img className={imgNoHover} src={unknown2} alt="avaFolkman"/>
              <img onClick={() => setModalOpenUnknown3(s => !s)} className={img} src={unknown3} alt="avaFolkman"/>
              <img className={img} src={zaidRodriguez} onClick={() => setModalOpenZaid(s => !s)} alt="avaFolkman"/>
            </div>
    		  </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default English;