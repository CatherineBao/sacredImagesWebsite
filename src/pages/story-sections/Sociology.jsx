import React from "react";

import ashleyMartinez from '../../img/story-img/sociology/ashleyMartinez.png'
import brittonMuffit from '../../img/story-img/sociology/brittonMuffit.png'
import brooklynGardner from '../../img/story-img/sociology/brooklynGardner.png'
import christianZercher from '../../img/story-img/sociology/christianZercher.png'
import gracePenrod from '../../img/story-img/sociology/gracePenrod.png'
import izabellaSimister from '../../img/story-img/sociology/izabellaSimister.png'
import kaylaWright from '../../img/story-img/sociology/kaylaWright.png'
import luisPiriv from '../../img/story-img/sociology/luisPiriv.png'
import lukeTempleman from '../../img/story-img/sociology/lukeTempleman.png'
import mannyMaciaj from '../../img/story-img/sociology/mannyMaciaj.png'
import mathiasBro from '../../img/story-img/sociology/mathiasBro.png'
import rireyB from '../../img/story-img/sociology/rireyB.png'
import taylorSorenson from '../../img/story-img/sociology/taylorSorenson.png'
import tysonLapas from '../../img/story-img/sociology/tysonLapas.png'
import unknown1 from '../../img/story-img/sociology/unknown1.png'
import unknown2 from '../../img/story-img/sociology/unknown2.png'
import yairCasteneda from '../../img/story-img/sociology/yairCasteneda.png'

function Sociology() {
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  return (
	  <div className='bg-background text-text'>
	    <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
	      <div>
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Sociology Stories</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
          </div>
	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
	        "I understand more deeply now that every single person has a story and they have faced afflictions and also great joys. I learned that you cannot judge others based on what’s on the surface, there is always so much more to somebody."
	        <br/>
	      	<span className='font-bold'>-Alexa Ledezma</span>
	      </p>
	    </div>
			<div>
			<div className='lg:p-20 p-10'>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={ashleyMartinez} alt="avaFolkman"/>
              <img className={img} src={brittonMuffit} alt="avaFolkman"/>
            </div>
    			  <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={brooklynGardner} alt="avaFolkman"/>
              <img className={img} src={christianZercher} alt="avaFolkman"/>
              <img className={img} src={gracePenrod} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={izabellaSimister} alt="avaFolkman"/>
              <img className={img} src={kaylaWright} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={unknown1} alt="avaFolkman"/>
              <img className={img} src={unknown2} alt="avaFolkman"/>
              <img className={img} src={yairCasteneda} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={luisPiriv} alt="avaFolkman"/>
              <img className={img} src={lukeTempleman} alt="avaFolkman"/>
            </div>
    			  <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={mannyMaciaj} alt="avaFolkman"/>
              <img className={img} src={mathiasBro} alt="avaFolkman"/>
              <img className={img} src={rireyB} alt="avaFolkman"/>
            </div>
            <div className='lg:flex gap-10 items-center justify-center'>
              <img className={img} src={taylorSorenson} alt="avaFolkman"/>
              <img className={img} src={tysonLapas} alt="avaFolkman"/>
            </div>
    		  </div>
			</div>
	  </div>
  );
}

export default Sociology;