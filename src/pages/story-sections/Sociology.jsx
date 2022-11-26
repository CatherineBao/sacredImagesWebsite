import React from "react";
import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion"

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
  const [modalOpenashley, setModalOpenashley] = useState(true)
  const [modalOpenbritton, setModalOpenbritton] = useState(true)
  const [modalOpenbrooklyn, setModalOpenbrooklyn] = useState(true)
  const [modalOpenchristian, setModalOpenchristian] = useState(true)
  const [modalOpengrace, setModalOpengrace] = useState(true)
  const [modalOpenizabell, setModalOpenizabell] = useState(true)
  const [modalOpenkayla, setModalOpenkayla] = useState(true)
  const [modalOpenluis, setModalOpenluis] = useState(true)
  const [modalOpenluke, setModalOpenluke] = useState(true)
  const [modalOpenmanny, setModalOpenmanny] = useState(true)
  const [modalOpenmathias, setModalOpenmathias] = useState(true)
  const [modalOpenrirey, setModalOpenrirey] = useState(true)
  const [modalOpentaylor, setModalOpentaylor] = useState(true)
  const [modalOpentyson, setModalOpentyson] = useState(true)
  const [modalOpenunknown1, setModalOpenunknown1] = useState(true)
  const [modalOpenunknown2, setModalOpenunknown2] = useState(true)
  const [modalOpenyair, setModalOpenyair] = useState(true)
  
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  const modal = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  const modalBlock = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      <AnimatePresence>
            {!modalOpenashley ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenashley(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Ashley Martinez</h1>
                      <p className='text-mainText text-center'>
          I want to be known <br/>
as a beautiful woman <br/>
with the love of my life <br/>
I want the story of my <br/>
soulmate my own true person out there.<br/>
 I want to be looked up to<br/>
 to be a story <br/>
a moment to be loved wanted
                      </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenbritton ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenbritton(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Britton Muffitt</h1>
                      <p className='text-mainText'>
          “You traded the mystery for the money.” I would, money is money take that money and create a new mystery/ Why would i pass up the opportunity. <br/><br/>
Something about me is that I'm the bossman. I’m bossman Britton. I do what I want when I want. Why? Because I’m bossman Britton.<br/><br/>
	Who am I? I’m bossman Britton. How does the name relate to me? I do what I want when I want whether it benefits me or doesn’t.
                      </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenbrooklyn ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenbrooklyn(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Brooklyn Gardner</h1>
                      <p className='text-mainText'>
          I have this friend named Ashton but I call him thomas. He and I have never been just friends but he is awful for me and my happiness. That’s besides the point. I have a specific memory of us driving down the canyon really late at night, windows down with Dominike Fike playing and I realize I can’t have moments like that ever again. I obsess over nostalgia and sometimes I live in the past because it’s what I know. Careless teenage nights-music I didn’t create- Running away from adulthood. Sunsets and the kissing at Timpanogos, out by the football field. Little moments but that’s what makes them so special.                    
                      </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenchristian ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenchristian(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Christian Zercher</h1>
                      <p className='text-mainText'>
          I like talking about music. There isn’t a story in my life where you couldn’t find music in there. I like music a lot. Music connects people a lot of time I feel different and like I don’t relate to people. I don’t understand people nor do I want to sometimes, people want to feel understood and related to but sometimes I don’t. I like the isolation. I like the idea of feeling different and not being understood nor being loved, simply existing outside the world, not in the world I like observing just learning, sitting quietly just watching people act. I don’t like having an influence always on things I don’t know where I’m going with this probably doesn’t make sense nor do I hope it does. It’s simply words on paper, the words of someone who doesn’t know what to write and doesn’t know what to feel. But I guess music is pretty great.                      </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpengrace ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpengrace(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Grace Penrod</h1>
                      <p className='text-mainText'>
          Those moments when anxiety is up there and it almost feels like there is no control in my life. It never stops spiraling until it fills my entire being. All the things I’ve tried to do in the past don’t work anymore to calm it down. It comes on so strong, I don’t know what else to do but succumb and not try to care anymore. It keeps spiraling upward, while everything around me falls down, too quick for me to even realize it. I’m scared to experience change. I want to be out there, and it’s close, but I can't fully embrace the change, it’s terrifying. Going and doing something on my own is one of the scariest things, I can’t leave my family and being on my own is terrifying.                       </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenizabell ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenizabell(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Izabella Simister</h1>
                      <p className='text-mainText'>
          I don’t remember a lot of childhood due to trauma. And some of the things I do remember aren’t necessarily good but they’re not really bad either. And remembering those things and seeing all the bad things that other children makes me want to help them. I also read a lot so I see other peoples stories even if they are fictional and it makes me see that things could be worse and even if things are bad, good things will eventually happen. And reading makes me happier and lets me escape reality for a couple minutes. I have read a lot of romance and fantasy books.                        </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenkayla ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenkayla(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Kayla Wright</h1>
                      <p className='text-mainText'>
          I’d want to feel that flower. It’s beautiful to me to see, and feel something beautiful. I want to capture beauty and not hurt it. When I was little, I would blow a kiss to everyone I loved before I went to bed. I didn’t tell them to their face that I loved them. But I felt that my quiet love would keep them safe and happy. <br/><br/>
	I thought that it was my way of being kind without taking attention or time. I dream about living my life to its full potential. I want to do worthwhile things, see crazy beautiful places, feel that wonderful feeling of accomplishing something crazy and epic. Heavenly Father will help me know what path is mine, and as I go I intend to do it happily, be fully invested, but (?). I do not want to run head-first into something that will have negative consequences for others. That would make me sad, but interesting. My story is long, silly, goofy, and complicated :). Music is very important to me, I love it because it helps me focus, relax, and feel my emotions better.

                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenluis ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenluis(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Luis Piriv</h1>
                      <p className='text-mainText'>
           Came here from Guatemala not knowing anything, or teh language, but currently I made a lot of friends and I know a lot of things now.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenluke ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenluke(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Luke Templeman</h1>
                      <p className='text-mainText'>
           I want to be known as a friend, I want people to see how I care about them and the world. I want them to see me and that I am not perfect, but I put in the effort to be a social person. I don’t just want to be alive, I want to live. I have always lived in Utah with my family. We love to travel and go to new places and new experiences. I always had a problem with wid (?) and that really shaped how I am now. I was not a religious fella but (?) I got to a point where I (?) I watned to kill myself I turned to my heavenly father and I (?) up to my parents it took a while but I have overcome it and I am still battling temptations and I try to fill my life with good and stay away from what can harm me.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenmanny ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenmanny(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Manny Maciaj</h1>
                      <p className='text-mainText'>
           Me and my friends would stand on top of monkey bars and see who can make it across the farthest and one time I fell and got a concussion, which was pretty fun. <br/><br/>
	I also got peer pressured into boxing and working out but then was glad about it since I was pretty weak and couldn't do much.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenmathias ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenmathias(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Mathias Bro</h1>
                      <p className='text-mainText'>
           	I’ve lived in Utah my whole life, born and raised in this (?) around the orem-lindon area.<br/><br/>
Something I would like to be known for (and try to do now) is being a good friend as well as being there for people and trying to always help people out.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenrirey ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenrirey(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Rirey B.</h1>
                      <p className='text-mainText'>
           	This reminds me of an assignment in creative writing. There needs to be a timber wolf on it of course, but also there needs to be grief from the pandemic, to mental health issues, the students at timpanogos face many issues. I'm a bit of an artist myself, so the opportunity to make a mural is really cool. We have lots of acceptance here at THS, so maybe reflect on that for the mural.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpentaylor ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpentaylor(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Taylor Sorenson</h1>
                      <p className='text-mainText'>
           For me it is hard to think about what I dream to do or what to have in life. Because I honestly don’t know what I want. Maybe I just want to live an easy life with an average pay. Because I’m not a super hard worker although I try to be. I just want to be something or someone that I can look back on and be proud of. I mainly just want to be happy and free but I just don’t know what that is for me exactly. I also have a dream that maybe one day everyone can understand each other.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpentyson ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpentyson(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Tyson Lapas </h1>
                      <p className='text-mainText'>
           My experience at this school has been very unique. My first year here was great, I had a fan friend group, good classes, and a stress free life. Then as we started to creep into March the pandemic hit as everything changed massively. My friend group could no longer see each other, my classes became online where I had to teach myself the material then do assignments about it, and all the sudden the future was unknown about when it would be over and normal again. The following year was very slow and repetitive. Over my last summer I got a truck and freedom to go wherever I want and I was always somewhere. I went to Africa for 2 weeks on vacation and went fishing about 30 times. Then I got to be part of the best football team Timp has ever had. And now as I go around the final bend of school I am optimistic about my future as I have no idea what I’m going to do after that last day. 
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenunknown1 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => modalOpenunknown1(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>anonymous</h1>
                      <p className='text-mainText'>
           My story. I have a dream to do great in school and to be a pediatrician. This is my big goal in life that I have that I have wanted since I was very little. I have pushed myself in school to have good grades. I got my inspiration from my mom and grandma
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenunknown2 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => modalOpenunknown2(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>anonymous</h1>
                      <p className='text-mainText'>
           This school contains lots of people. Lots of people have lots of stories. I would say that I probably have a pretty average story, I grew up here and never really had to suffer through more than the average person.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
            {!modalOpenyair ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpenyair(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Yair Castaneda</h1>
                      <p className='text-mainText'>
           I want to be known as a chill, easy going person. Although sometimes I do get really mad. When I was younger I would be really mischievous. I’m not good at focusing. In class I always get distracted and then I get lost. I really like soccer because my father put me into it. For a few years I was even on a team. I’m not a social person. I really don’t like being social or even being around people, sometimes I go out of my way to avoid people . I’m not sure why I get anxious around people and I’m super quiet. My family is from Guatemala and I’ve only been there once when I was super young so I don't remember much but we plan on going back soon. I really like helping out my friends. I try to be the nicest I can be.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
	    <div className='bg-background text-text'>
  	    <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
  	      <div>
              <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Sociology Stories</h1>
              <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
            </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
  	        "I understand more deeply now that every single person has a story and they have faced afflictions and also great joys. I learned that you cannot judge others based on what’s on the surface, there is always so much more to somebody."
  	        <br/>
  	      	<span className='font-bold'>- Alexa Ledezma</span>
  	      </p>
  	    </div>
  			<div>
  			<div className='lg:p-20 p-10'>
              <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() => setModalOpenashley(s => !s)} className={img} src={ashleyMartinez} alt="avaFolkman"/>
                <img onClick={() => setModalOpenbritton(s => !s)} className={img} src={brittonMuffit} alt="avaFolkman"/>
              </div>
      			  <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() =>  setModalOpenbrooklyn(s => !s)} className={img} src={brooklynGardner} alt="avaFolkman"/>
                <img onClick={() => setModalOpenchristian(s => !s)} className={img} src={christianZercher} alt="avaFolkman"/>
                <img onClick={() => setModalOpengrace(s => !s)} className={img} src={gracePenrod} alt="avaFolkman"/>
              </div>
              <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() => setModalOpenizabell(s => !s)} className={img} src={izabellaSimister} alt="avaFolkman"/>
                <img onClick={() => setModalOpenkayla(s => !s)} className={img} src={kaylaWright} alt="avaFolkman"/>
              </div>
              <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() => setModalOpenunknown1(s => !s)} className={img} src={unknown1} alt="avaFolkman"/>
                <img onClick={() => setModalOpenunknown2(s => !s)} className={img} src={unknown2} alt="avaFolkman"/>
                <img onClick={() => setModalOpenyair(s => !s)} className={img} src={yairCasteneda} alt="avaFolkman"/>
              </div>
              <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() => setModalOpenluis(s => !s)} className={img} src={luisPiriv} alt="avaFolkman"/>
                <img onClick={() => setModalOpenluke(s => !s)} className={img} src={lukeTempleman} alt="avaFolkman"/>
              </div>
      			  <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() => setModalOpenmanny(s => !s)} className={img} src={mannyMaciaj} alt="avaFolkman"/>
                <img onClick={() => setModalOpenmathias(s => !s)} className={img} src={mathiasBro} alt="avaFolkman"/>
                <img onClick={() => setModalOpenrirey(s => !s)} className={img} src={rireyB} alt="avaFolkman"/>
              </div>
              <div className='lg:flex gap-10 items-center justify-center'>
                <img onClick={() => setModalOpentaylor(s => !s)} className={img} src={taylorSorenson} alt="avaFolkman"/>
                <img onClick={() => setModalOpentyson(s => !s)} className={img} src={tysonLapas} alt="avaFolkman"/>
              </div>
      		  </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default Sociology;