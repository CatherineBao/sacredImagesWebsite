import React from "react";
import { motion, AnimatePresence } from "framer-motion"

function SubmitStories() {
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
     <div className='bg-background text-text'>
      <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
        <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Submit Your Story</h1>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
          "I really liked this because I got to witness how powerful a group bringing together ideas can really be! I’ve never liked group projects, but this is an example to me of how it can be done right and how incredible the results can be." 
          <br/>
        	<span className='font-bold'>- Kayla Bjorn</span>
        </p>
      </div>
   <p className='text-xs text-mainText text-center lg:text-left italic uppercase max-w-3xl p-5'>
	   This form may not load on an Apple Device. 
	   </p>
  		<div className='md:-mb-96 pt-25'>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScIFL9NOY6bZ1INa_ya4MNCkIMQ_pca6n13zZvEKdNSY4ZcHA/viewform?embedded=true" 
          frameborder="0" 
          marginheight="0"
          marginwidth="0"
          className='w-full h-[75em] mt-10'
					
          >Loading…
        </iframe>
  		</div>
       <h1 className='text-xl lg:text-3xl font-arvo font-thin ml-20 uppercase'>View Responses: </h1>
       <div className='flex items-center justify-center mb-32'>
        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQLjTQ4xRPXXLP-dd8yZ345BgfisoUz6ywjmiDel3x6M8E9zwI34CECqRtaAlyARpYQaZEsZalXOBdS/pubhtml?gid=118426868&amp;single=true&amp;widget=true&amp;headers=false"
          frameborder="0" 
          marginheight="0"
          marginwidth="0"
          className='md:w-2/3 w-full h-[25em] mt-10 p-10'
          ></iframe>
       </div>
    </div>
    </motion.div>
  );
}

export default SubmitStories;
