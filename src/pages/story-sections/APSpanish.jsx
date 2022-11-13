import React from "react";
import { motion, AnimatePresence } from "framer-motion"

import adrianaLopez from '../../img/story-img/ap-spanish/adriana-lopez-rect.png'
import agustinCauteruccio from '../../img/story-img/ap-spanish/agustin-cauteruccio-rect.png'
import allanC from '../../img/story-img/ap-spanish/allan-c-rect.png'
import alexisNarcisco from '../../img/story-img/ap-spanish/alexis-narcisco-rect.png'
import bentlyP from '../../img/story-img/ap-spanish/bentley-p-rect.png'
import chiariM from '../../img/story-img/ap-spanish/chiari-m-rect.png'
import cooperTodd from '../../img/story-img/ap-spanish/cooper-todd-rect.png'
import dennisHernandez from '../../img/story-img/ap-spanish/dennis-hernandez-rect.png'
import dianaGallardo from '../../img/story-img/ap-spanish/diana-gallardo-rect.png'
import drewClark from '../../img/story-img/ap-spanish/drew-clark-rect.png'
import dustinS from '../../img/story-img/ap-spanish/dustin-s-rect.png'
import emmelyAscencio from '../../img/story-img/ap-spanish/emmely-ascencio-rect.png'
import emmiGunderson from '../../img/story-img/ap-spanish/emmi-gundersen-rect.png'
import evelynArleaga from '../../img/story-img/ap-spanish/evelyn-arleaga-rect.png'
import gabrielCueva from '../../img/story-img/ap-spanish/gabriel-cueva-rect.png'
import gizelleTafolla from '../../img/story-img/ap-spanish/gizelle-tafolla-rect.png'
import grahamGunderson from '../../img/story-img/ap-spanish/graham-gunderson-rect.png'
import ingridJamie from '../../img/story-img/ap-spanish/ingrid-jamie-rect.png'
import jacobHiatt from '../../img/story-img/ap-spanish/jacob-hiatt-rect.png'
import jaredLopez from '../../img/story-img/ap-spanish/jared-lopez-rect.png'
import jessicaGonzalez from '../../img/story-img/ap-spanish/jessica-gonzalez-rect.png'
import joseAZamora from '../../img/story-img/ap-spanish/jose-a-zamora-rect.png'
import karlaSanJuan from '../../img/story-img/ap-spanish/karla-san-juan-rect.png'
import karmindiHenderson from '../../img/story-img/ap-spanish/karmindi-henderson-rect.png'
import kateDickinson from '../../img/story-img/ap-spanish/kate-dickinson-rect.png'
import leahThomas from '../../img/story-img/ap-spanish/leah-thomas-rect.png'
import lizGamarra from '../../img/story-img/ap-spanish/liz-gamarra-rect.png'
import lukaJohnson from '../../img/story-img/ap-spanish/luka-johnson-rect.png'
import madonA from '../../img/story-img/ap-spanish/madon-a-rect.png'
import mariaGonzalez from '../../img/story-img/ap-spanish/maria-gonzalez-rect.png'
import mariaGuzman from '../../img/story-img/ap-spanish/maria-guzman-rect.png'
import maritzaLopez from '../../img/story-img/ap-spanish/maritza-lopez-martinez-rect.png'
import marjoriePirir from '../../img/story-img/ap-spanish/marjorie-pirir-rect.png'
import markForsyth from '../../img/story-img/ap-spanish/mark-forsyth-rect.png'
import mercyThomas from '../../img/story-img/ap-spanish/mercy-thomas-rect.png'
import rositaSalazar from '../../img/story-img/ap-spanish/rosita-salazar-rect.png'
import samariVelez from '../../img/story-img/ap-spanish/samari-velez-rect.png'
import sethCastro from '../../img/story-img/ap-spanish/seth-castro-rect.png'
import taniaM from '../../img/story-img/ap-spanish/tania-m-rect.png'
import unknown1 from '../../img/story-img/ap-spanish/unknown-1-spanish-rect.png'
import unknown2 from '../../img/story-img/ap-spanish/unknown2-spanish.png'
import vladimirGonzalez from '../../img/story-img/ap-spanish/vladimir-gonzalez-rect.png'
import oliverSconbes from '../../img/story-img/ap-spanish/oliver-sconbes-rect.png'
import wendyH from '../../img/story-img/ap-spanish/wendy-h-rect.png'


function APSpanish() {
  const nodes = 'hover:hue-rotate-90 duration-200 hover:cursor-pointer fill-accent'
   const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
    <div className='bg-background text-text'>
      <div className='pt-12 lg:pt-24 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
        <div>
           <h1 className='text-xl lg:text-3xl font-arvo font-thin'>AP Spanish Stories</h1>
          <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
        </div>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl'>
          "I loved watching my students tell their stories and find their voices. I also loved watching all that were involved become a perfect demonstration of deep learning. This project provides a product that was created by the use of all 6c’s. It was a privilege to participate with everyone." 
          <br/>
        	<span className='font-bold'>- Marcus Draper</span>
        </p>
      </div>
      <div>
  			<div className='lg:p-20 p-10'>
  			  <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={adrianaLopez} alt="avaFolkman"/>
            <img className={img} src={agustinCauteruccio} alt="avaFolkman"/>
            <img className={img} src={alexisNarcisco} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={allanC} alt="allanC"/>
            <img className={img} src={bentlyP} alt="bentlyP"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={chiariM} alt="chiariM"/>
            <img className={img} src={cooperTodd} alt="cooperTodd"/>
            <img className={img} src={dennisHernandez} alt="dennisHernandez"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={dianaGallardo} alt="dianaGallardo"/>
            <img className={img} src={drewClark} alt="drewClark"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={dustinS} alt="dustinS"/>
            <img className={img} src={emmelyAscencio} alt="emmelyAscencio"/>
            <img className={img} src={emmiGunderson} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={evelynArleaga} alt="evelynArleaga"/>
            <img className={img} src={gabrielCueva} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={gizelleTafolla} alt="dustinS"/>
            <img className={img} src={grahamGunderson} alt="emmelyAscencio"/>
            <img className={img} src={ingridJamie} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={jacobHiatt} alt="evelynArleaga"/>
            <img className={img} src={jaredLopez} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={jessicaGonzalez} alt="dustinS"/>
            <img className={img} src={joseAZamora} alt="emmelyAscencio"/>
            <img className={img} src={karmindiHenderson} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={kateDickinson} alt="evelynArleaga"/>
            <img className={img} src={leahThomas} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={lizGamarra} alt="dustinS"/>
            <img className={img} src={madonA} alt="emmelyAscencio"/>
            <img className={img} src={mariaGonzalez} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={mariaGuzman} alt="evelynArleaga"/>
            <img className={img} src={maritzaLopez} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={marjoriePirir} alt="dustinS"/>
            <img className={img} src={markForsyth} alt="emmelyAscencio"/>
            <img className={img} src={mercyThomas} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={rositaSalazar} alt="evelynArleaga"/>
            <img className={img} src={samariVelez} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={sethCastro} alt="dustinS"/>
            <img className={img} src={taniaM} alt="emmelyAscencio"/>
            <img className={img} src={unknown1} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={vladimirGonzalez} alt="evelynArleaga"/>
            <img className={img} src={oliverSconbes} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={unknown2} alt="gabrielCueva"/>
            <img className={img} src={wendyH} alt="dustinS"/>
            <img className={img} src={lukaJohnson} alt="emmelyAscencio"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img className={img} src={karlaSanJuan} alt="emmiGunderson"/>
          </div>
  		  </div>
  		</div>
    </div>
  </motion.div>
  );
}

export default APSpanish;