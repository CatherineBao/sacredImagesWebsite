import React from "react";
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

import muralGif from '../img/mural-progress-final.gif'
import wolvesOne from '../img/design-process/wolves-one.jpeg'
import wolvesTwo from '../img/design-process/wolves-two.jpeg'
import colorSheet from '../img/design-process/color-sheet.png'
import muralIdea from '../img/design-process/anna-penrod-mural-idea.png'
import segoLily from '../img/design-process/johanna-behm-sego-lily.png'
import catalina from '../img/design-process/kayla-bjorn-catalina-portrait.jpeg'
import wolves from '../img/design-process/lily-begay-wolves.jpg'
import nephi from '../img/design-process/nephi-drawing.jpg'
import talan from '../img/design-process/anna-davis-talan-dardner.jpeg'
import designs from '../img/design-process/ava-folkman-designs.jpg'
import drew from '../img/design-process/brinley-gardner-drew-portrait.jpeg'
import bgwolf from '../img/design-process/brinley-gardner-wolf.jpg'
import nephiww from '../img/design-process/anna-davis-nephi-matagi.jpeg'
import sun from '../img/design-process/alexa-ledezma-sun.jpg'
import butterflies from '../img/design-process/alia-anderson-designs.jpg'
import fynn from '../img/design-process/abbie-brockbank-fynn-portrait.jpg'

function DesignProcess() {
  const img = 'rounded-2xl'
  const p = 'text-mainText mt-2 font-thin uppercase'
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
     <div className='bg-background text-text'>
      <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
        <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Design Process</h1>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase mt-2 max-w-3xl'>
          "I’ve loved seeing these students come together, sharing in their vulnerability and their strengths to create this united piece a work but even more so, creating deep and unifying relationships." 
          <br/>
        	<span className='font-bold'>- Claire White</span>
        </p>
      </div>
        <div className='w-full'> <img className='w-full' src={muralGif} alt="AP Spanish students image"/> </div>
       <div className='bg-bars text-text flex justify-end items-center lg:px-20 p-3 uppercase h-10 sm:h-auto'>
  	      <p className='hidden sm:block text-xs text-right text-mainText italic uppercase max-w-3xl'>
  	      	"This project has been such a creative way to combine both technology and art into one. This experience has allowed us as students of all backgrounds to use each and every one of our skills to create something memorable and worthwhile."
  	        <br/>
  	      	<span className='font-bold'>- Amanda V. Della Cioppa</span>
  	      </p>
  	    </div>
       <h1 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 pt-10'>Brainstorm Session</h1>
  	    <div className='flex justify-center flex-col p-10 xl:px-52'>
  	      <div className='relative pb-[56.25%] pt-25 h-0'>
  	      <iframe
  	        className='absolute top-0 left-0 w-full h-full z-0'
  	        src="https://www.youtube.com/embed/OmlvBx_hshg"
  	        frameBorder="0"
  	        allowfullscreen="allowFullScreen"
  	        mozallowfullscreen="mozallowfullscreen" 
  	        msallowfullscreen="msallowfullscreen" 
  	        oallowfullscreen="oallowfullscreen" 
  	        webkitallowfullscreen="webkitallowfullscreen"
  	      />
  	      </div>
  	    </div>
        <h1 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 px-10 py-5 lg:pt-10'>Concept Art</h1>
      <div className='md:flex lg:p-24 lg:pt-10 gap-10 lg:p-32 p-8'>
        <div className='md:w-1/2'>
          <h1 className='text-xl lg:text-3xl font-thin uppercase p-3 lg:pt-10'>Mural Concept Composition</h1>
          <div className='w-full mb-10'> <img className='w-full rounded-2xl' src={colorSheet} alt="Black and White lineart of sketches"/> </div>
          </div>
          <div className='md:w-1/2'>
            <div className='w-full'> <img className={img} src={muralIdea} alt="Anna Penrod's Mural Idea"/> </div>
            <p className={p}>Anna Penrod <br/> Mural Concept Design</p>
            <h1 className='text-xl lg:text-3xl font-thin uppercase p-3 pt-10'>Mountains Concept Art</h1>
            <div>
              <div className='w-full'> <img className='w-full rounded-t-2xl' src={wolvesOne} alt="Mountains Concept Art"/> </div>
             <div className='w-full'> <img className='w-full rounded-b-2xl' src={wolvesTwo} alt="Mountains Concept Art"/> </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-bars text-text flex justify-between items-center lg:px-20 px-10 px-10 p-3 uppercase'>
        <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Initial Sketches</h1>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase mt-2'>
          "quote" 
          <br/>
        	<span className='font-bold'>- PERSON HERE</span>
        </p>
      </div>
      <div>
        <div className='flex flex-col md:flex-row md:px-20 p-10 md:pt-20 gap-10 items-end'>
          <div className='flex md:w-1/2 gap-10 items-end'>
            <div>
              <div> <img className={img} src={segoLily} alt="segoLily"/> </div>
              <p className={p}>johanna behm <br/> sego lily</p>
            </div>
            <div>
              <div> <img className={img} src={catalina} alt="catalina"/> </div>
              <p className={p}>kayla bjorn <br/> catalina portrait</p>
            </div>
          </div>
          <div className='flex md:w-1/2 gap-10 items-end'>
            <div>
              <div> <img className={img} src={wolves} alt="wolves"/> </div>
              <p className={p}>Lily Begay <br/> Wolves </p>
            </div>
            <div>
              <div> <img className={img} src={nephi} alt="nephi"/> </div>
              <p className={p}>nephi <br/> Claw Design</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-col md:flex-row md:px-20 p-10 gap-10 items-end'>
          <div className='flex md:w-1/2 gap-10 items-end'>
            <div className='w-1/2'>
              <div> <img className={img} src={talan} alt="talan gardne"/> </div>
              <p className={p}>anna davis <br/>talan gardner</p>
            </div>
            <div className='w-1/2'>
              <div> <img className={img} src={designs} alt="designs"/> </div>
              <p className={p}>ava folkman<br/>designs</p>
            </div>
          </div>
          <div className='flex md:w-1/2 gap-10 items-end'>
            <div className='w-1/2'>
              <div> <img className={img} src={bgwolf} alt="wolves"/> </div>
              <p className={p}>Brinley Gardner <br/> Wolf </p>
            </div>
            <div className='w-1/2'>
              <div> <img className={img} src={drew} alt="Drew Clark"/> </div>
              <p className={p}>Brinley Gardner <br/> Drew Clark</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10'>
        <div className='flex flex-col md:flex-row md:px-20 p-10 gap-10 items-end'>
          <div className='flex md:w-1/2 gap-10 items-end'>
            <div className='w-1/2'>
              <div> <img className={img} src={nephiww} alt="nephi-matagi"/> </div>
              <p className={p}>anna davis <br/>nephi matagi</p>
            </div>
            <div className='w-1/2'>
              <div> <img className={img} src={sun} alt="designs"/> </div>
              <p className={p}>alexa ledezma<br/>sun designs</p>
            </div>
          </div>
          <div className='flex md:w-1/2 gap-10 items-end'>
            <div className='w-1/2'>
              <div> <img className={img} src={butterflies} alt="butterflies"/> </div>
              <p className={p}>alia anderson <br/> butterfly designs </p>
            </div>
            <div className='w-1/2'>
              <div> <img className={img} src={fynn} alt="fynn-portrait"/> </div>
              <p className={p}>Abby Brockbank <br/> fynn portrait</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DesignProcess;