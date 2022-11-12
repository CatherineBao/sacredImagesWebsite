import React from "react";
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, AnimatePresence } from "framer-motion"
import {Link} from 'react-router-dom'

function Footer() {
    const h1 = 'text-text text-xl mb-2 mt-8 text-center'
    const li = 'text-text text-sm uppercase p-2 leading-7'
    const link = 'text-mainText text-sm hover:text-accent duration-200'
  return (
    <div className='bg-bars full p-5 font-main flex md:flex-row flex-col md:justify-around justify-center items-center'>
       <Link className='text-accent border-2 rounded-md w-1/2 md:w-1/12 md:w-40 h-10 uppercase m-5 hover:bg-accent hover:text-bars hover:border-accent duration-500 flex items-center justify-center' to={"/updates"}>Updates</Link>
        <div className='flex-col flex items-center justify-center'>
          <h1 className={h1}> SOCIAL MEDIA:</h1>
          <ul className={li}>
            <li>Timpanogos Highschool - <a className={link} href='https://ths.alpineschools.org/' target="_blank" >website</a></li>
            <li>Radio - <a className={link} href='https://www.iradeo.com/station/154846' target="_blank" >KTWF 88.9 FM</a></li>
            <li>INSTAGRAM  - <a className={link} href='https://www.instagram.com/titantimpanogos/' target="_blank" >TITANTIMPANOGOS</a></li>
            <li>YOUTUBE  - <a className={link} href='https://www.youtube.com/channel/UCe3KJK1yMiiGQPK52l6Gj_w' target="_blank" >T-WOLF TELEVISION</a></li>
            <li>Facebook  - <a className={link} href='https://www.facebook.com/We-Are-Timpanogos-Timberwolves-OFFICIAL-160061390727102/' target="_blank" >We are timpanogos timberwolves</a></li>
            <li>Twitter  - <a className={link} href='https://www.youtube.com/channel/UCe3KJK1yMiiGQPK52l6Gj_w' target="_blank" >WEARETIMPANOGOS</a></li>
          </ul>
        </div>
        <div className='flex-col flex items-center justify-center'>
          <h1 className={h1}> IN PARTNERSHIP WITH:</h1>
          <div className='flex'>
            <div className='w-1/2 p-5'>
              <ul className={li}>
            <li>LESLIE KELEN - <a className={link} href='https://cdeautah.org/' target="_blank" >THE CENTER FOR DOCUMENTARY ART & EXPRESSION</a></li>
            <li>JIMMY SANTIAGO BACA - <a className={link} href='https://www.jimmysantiagobaca.com/' target="_blank" >WRITER IN RESIDENCE</a></li>
            <li>DIMI MACHERAS - <a className={link} href='https://eightypercentstudios.com/' target="_blank" >VISUAL ARTIST IN RESIDENCE</a></li>
            <li>STUDENT EDUCATIONAL EQUITY DEPARTMENT  - <a className={link} href='https://www.youtube.com/channel/UCe3KJK1yMiiGQPK52l6Gj_w' target="_blank" >ALPINE SCHOOL DISTRICT </a></li>
          </ul>
            </div>
             <div className='flex flex-col md:flex-row items-center md:items-start p-5'>
              <ul className={li}>
                <li>ANNA DAVIS:</li>
                <li className='text-mainText text-sm uppercase leading-7 -mt-2'>AP STUDIO ART</li>
                <li>MARCUS DRAPER:</li>
                <li className='text-mainText text-sm uppercase leading-7 -mt-2'>LATINOS IN ACTION</li>
                <li>CLAIRE WHITE:</li>
                <li className='text-mainText text-sm uppercase leading-7 -mt-2'>THS Design Team</li>
              </ul>
               <ul className='text-text text-sm uppercase leading-7 md:p-5'>
                <li className='mt-4'>Website Devolopment: </li>
                 <li> <a className={link} href='https://www.linkedin.com/in/amanda-della-cioppa-69571a223' target="_blank" >Amanda V. Della Cioppa </a> </li> 
                <li> <a className={link} href='https://www.instagram.com/cayxiarts/' target="_blank" > Catherine Bao</a> </li>
               </ul>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Footer;