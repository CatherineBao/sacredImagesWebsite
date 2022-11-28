import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from "framer-motion"
import { Link } from 'react-router-dom'

import Logo from "../img/timp-logo.png";

function Nav() {
  const navButton = 'uppercase text-text m-3 xl:m-1 xl:ml-20 ml-14 hover:text-accent duration-300 ease-in-out text-center xl:text-sm truncate'
  const [Dropdown, setDropdown] = useState(true)
  const [Hamburger, setHamburger] = useState(true)
  return (
    <div>
      <div className='fixed z-50 flex-column w-full'>
        <div className='w-full h-10 bg-background lg:h-20 flex flex-row justify-between lg:px-20 px-5'>
          <div className='flex items-center justify-start'>
            <img className='w-auto h-3/4 hover:cursor-pointer' onClick={() => setDropdown(true)} onClick={() => setHamburger(true)} src={Logo} />
          </div>
          <div className='hidden lg:flex justify-center font-light items-center text-xs'>
            <Link className={navButton} onClick={() => setDropdown(true)} to='/'>
              Home
            </Link>
            <Link className={navButton} onClick={() => setDropdown(true)} to='/stories'>
              Student Stories
            </Link>
            <Link className={navButton} onClick={() => setDropdown(true)} to='/design-process'>
              Design Process
            </Link>
            <Link className={navButton} onClick={() => setDropdown(true)} to='/gallery'>
              Gallery
            </Link>
            <Link className={navButton} onClick={() => setDropdown(true)} to='submit-stories'>
              Submit a Story
            </Link>
          </div>
          <div className='flex items-center justify-end lg:hidden mr-2'>
            <FontAwesomeIcon className='text-text hover:cursor-pointer' icon="fa-solid fa-bars" onClick={() => setHamburger(s => !s)} />
          </div>
        </div>
      </div>
      <AnimatePresence>
        {!Hamburger ?
          <motion.div
            key="nav"
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-50%", transition: { duration: "0.35" } }}
            transition={{ stiffness: "100", duration: "0.55" }}
            className='fixed bg-background h-screen z-40 w-10/12 mt-10 lg:mt-16 font-light'>
            <div className='mt-1 w-full flex justify-between items-center border-accent border-t-2'>
              <h1 className='text-accent uppercase ml-5 text-lg font-arvo font-thin'>Sacred Images</h1>
              <FontAwesomeIcon icon="fa-solid fa-x" className='text-text p-4 font-black hover:cursor-pointer' onClick={() => setHamburger(true)} />
            </div>
            <div className='flex flex-col items-start border-accent border-t-2 pt-8'>
              <Link className={navButton} onClick={() => setHamburger(true)} to='/'>
                Home
              </Link>
              <Link className={navButton} onClick={() => setHamburger(true)} to='/stories'>
                Student Stories
              </Link>
              <Link className={navButton} onClick={() => setHamburger(true)} to='/design-process'>
                Design Process
              </Link>
              <Link className={navButton} onClick={() => setHamburger(true)} to='/gallery'>
                Gallery
              </Link>
              <Link className={navButton} onClick={() => setHamburger(true)} to='submit-stories'>
                Submit a Story
              </Link>
            </div>
          </motion.div>
          : null}
      </AnimatePresence>
      <AnimatePresence>
        {!Hamburger ?
          <motion.div
            key="nav"
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "-50%", transition: { duration: "0.35" } }}
            transition={{ stiffness: "100", duration: "0.55" }}
            className='fixed z-30 w-full'>
            <div className='bg-background h-screen opacity-60' onClick={() => setHamburger(true)}>
            </div>
          </motion.div>
          : null}
      </AnimatePresence>
      {!Dropdown ?
        <div className='fixed w-full h-screen z-30' onClick={() => setDropdown(true)}>
        </div>
        : null}
    </div>
  );
}

export default Nav;