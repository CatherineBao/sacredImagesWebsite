import React from "react";
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

function Updates() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
  	  <div className='bg-background text-text'>
  	    <div className='pt-12 lg:pt-24 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase gap-44'>
  	      <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Updates</h1>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl'>
  	        "I learned that many others struggle with the same things as me even if they’re not from the same ethnic background."
  	        <br/>
  	      	<span className='font-bold'>- Luana Toro Ruiz</span>
  	      </p>
  	    </div>
  			<div className='flex justify-center flex-col items-center justify-center p-10 xl:px-52 w-full gap-10'>
  				<h1 className='text-xl lg:text-3xl font-bold p-3 lg:px-20 pt-10'>Update Information</h1>
          <div className='md:w-1/4 w-full text-center md:text-left'>
            <h2 className='font-bold'>11/12/2022</h2>
    				<ul className='md:list-disc'>
    					<li>Translated website framework into ReactJS</li>
              <li>Added Image Gallery and Design Process content</li>
              <li>Interactive mural</li>
    				</ul>
          </div>
          <div className='md:w-1/4 w-full text-center md:text-left'>
            <h2 className='font-bold'>8/12/2022</h2>
    				<ul className='md:list-disc'>
    					<li>Hamburger navigation for mobile</li>
              <li>Added sociology stories</li>
              <li>Added a student's story in AP Spanish</li>
    				</ul>
          </div>
					<div className='md:w-1/4 w-full text-center md:text-left'>
            <h2 className='font-bold'>5/20/2022</h2>
    				<ul className='md:list-disc'>
    					<li>Uploaded Documentary</li>
    				</ul>
          </div>
          <div className='md:w-1/4 w-full text-center md:text-left mb-10'>
            <h2 className='font-bold'>3/6/2022</h2>
    				<ul className='md:list-disc'>
    					<li>Added updates section</li>
    					<li>Added updates section to footer</li>
    					<li>Fixed a student's story in AP Spanish</li>
    				</ul>
          </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default Updates;