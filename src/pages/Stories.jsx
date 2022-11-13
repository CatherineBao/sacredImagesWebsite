import React from "react";
import {Link} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"
import { HashLink } from 'react-router-hash-link';

import APSpanishImg from '../img/story-img/interview-image-1.jpg'
import APArt from '../img/story-img/image-2.jpg'
import humanities from '../img/story-img/humanities-img.jpg'
import english from '../img/story-img/english-img.jpg'
import sociology from '../img/story-img/sociology-img.jpg'
import mmyes from '../img/story-img/mmyes.jpg'

function Stories() {
  const button = 'text-text border-2 rounded-md uppercase min-w-[40%] md:min-w-[33%] lg:min-w-[25%] w-1/6 h-10 p-5 hover:bg-text hover:text-background hover:border-text duration-500 flex items-center justify-center text-xs md:text-sm m-2 lg:m-5'
  const buttonGold = 'text-accent border-2 rounded-md uppercase min-w-[40%] md:min-w-[33%] lg:min-w-[25%] w-1/3 h-10 p-5 hover:bg-accent hover:text-background hover:border-accent duration-500 flex items-center justify-center text-xs md:text-sm m-5'
  const img = 'rounded-2xl'
  const h2 = 'text-text text-2xl text-center uppercase p-5'
  return (
		<motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
			<div className='bg-background text-text mb-24'>
				<div className='pt-12 lg:pt-24 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
					<h1 className='text-xl lg:text-3xl font-arvo font-thin'>Student Stories</h1>
					<p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl'>
						"The mural represents Timpanogos' core values with artistic flourish." 
						<br/>
						<span className='font-bold'>- Anna T. Liu</span>
					</p>
				</div>
				<div className='justify-around p-16 items-center min-w-full'>
          <div className='flex w-full justify-center lgjustify-center lg:gap-5'>
            <HashLink id='ap-spanish' className={button} smooth to="#ap-spanish">AP Spanish</HashLink>
					<HashLink className={button} smooth to="#ap-art">AP Art</HashLink>
					<HashLink className={button} smooth to="#english">English</HashLink>
          </div>
          <div className='flex w-full justify-center lg:gap-5'>
            <HashLink className={button} smooth to="#humanities"> Humanities</HashLink>
            <HashLink className={button} smooth to="#sociology">Sociology</HashLink>
					  <HashLink className={button} smooth to="#lgbtq">LGBTQ+</HashLink>
          </div>
				</div>
				<div className='lg:flex justify-center gap-8 lg:mt-10'>
					<div className='lg:w-1/3 p-10'> <img className={img} src={APSpanishImg} alt="AP Spanish students image"/> </div>
					<div className='lg:w-1/3 lg:p-10 px-10 flex flex-col items-center'>
						<h2 className={h2}>AP Spanish</h2>
						<p className='font-light text-center'> Mr. Draper's AP Spanish helped add their stories to the mural project. Professional poet, Jimmy Santiago Baca, came and presented to the class, sharing his own stories, and asking them to write theirs. </p>
						<Link id='ap-art' className={buttonGold} to={"ap-spanish"}>Stories</Link>
					</div>
				</div>
				<div className='lg:flex flex-row-reverse justify-center gap-8 lg:mt-10 mt-10'>
					<div className='lg:w-1/3  p-10'> <img className={img} src={APArt} alt="AP Art Filler Image"/></div>
					<div className='lg:w-1/3 lg:p-10 px-10 flex flex-col items-center'>
						<h2 className={h2}>AP Art</h2>
						<p  className='font-light text-center'> Ms. Davis's AP Studio Art class has been the most involved in the mural process. These are some of the stories that they wanted to share about their own experiences.  They also helped come up with the imagery for the mural, finalize the design, and paint the mural. </p>
						<Link id="english" className={buttonGold} to={"ap-art"}>Stories</Link>
					</div>
				</div>
        <div className='lg:flex justify-center gap-8 lg:mt-10 mt-5'>
					<div className='lg:w-1/3 p-10'> <img className={img} src={english} alt="AP Spanish students image"/> </div>
					<div className='lg:w-1/3 lg:p-10 px-10 flex flex-col items-center'>
						<h2 className={h2}>English</h2>
						<p className='font-light text-center'> Mrs. Hansen's English classes helped us contribute many stories and drawings. Many of the students drew images representing their experiences at Timpanogos High School. </p>
						<Link id='humanities' className={buttonGold} to={"english"}>Stories</Link>
					</div>
				</div>
				<div className='lg:flex flex-row-reverse justify-center gap-8 lg:mt-10 mt-10'>
					<div className='lg:w-1/3  p-10'> <img className={img} src={humanities} alt="AP Art Filler Image"/></div>
					<div className='lg:w-1/3 lg:p-10 px-10 flex flex-col items-center'>
						<h2 className={h2}>Humanities</h2>
						<p  className='font-light text-center'> Mrs. Blazian's Humanities class listened to Jimmy Santiago Baca's stories. Over the next few days they thought about what stories they would want to contribute and spent time writing their stories down. We asked students to be really authentic and honest in their stories, and many chose to stay anonymous because these stories are so personal. </p>
						<Link id='sociology' className={buttonGold} to={"humanities"}>Stories</Link>
					</div>
				</div>
        <div className='lg:flex flex-row justify-center gap-8 lg:mt-10 mt-10'>
					<div className='lg:w-1/3  p-10'> <img className={img} src={sociology} alt="AP Art Filler Image"/></div>
					<div className='lg:w-1/3 lg:p-10 px-10 flex flex-col items-center'>
						<h2 className={h2}>Sociology</h2>
						<p  className='font-light text-center'> Jimmy Santiago Baca and professional comic book artist, Dimi Macheras, presented to the Sociology class and shared their stories. Mrs. Davies' Sociology class contributed their own stories and imagery to help come up with the ideas for the mural. </p>
						<Link id='lgbtq' className={buttonGold} to={"sociology"}>Stories</Link>
					</div>
				</div>
				<div className='lg:flex flex-row-reverse justify-center gap-8 lg:mt-10 mt-10'>
					<div className='lg:w-1/3  p-10'> <img className={img} src={mmyes} alt="AP Art Filler Image"/></div>
					<div className='lg:w-1/3 lg:p-10 px-10 flex flex-col items-center'>
						<h2 className={h2}>LGBTQ+</h2>
						<p  className='font-light text-center'>As we visited class after class, a population that really wanted to be represented and make their voices heard was the LGBTQ+ community. Although their stories are recorded in the other class sections as well, we wanted to specifically compile their stories in one place. This community is an important group that adds to the diversity of our school. </p>
						<Link className={buttonGold} to={"lgbtq"}>Stories</Link>
					</div>
				</div>
			</div>
  	</motion.div>
  );
}

export default Stories;