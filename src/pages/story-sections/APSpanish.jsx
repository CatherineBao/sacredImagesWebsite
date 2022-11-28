import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import {useState} from 'react';

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
  const modal = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  const modalBlock = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"

  const [modalOpenAdriana, setModalOpenAdriana] = useState(true)
  const [modalOpenAgustin, setModalOpenAgustin] = useState(true)
  const [modalOpenAlexis, setModalOpenAlexis] = useState(true)
  const [modalOpenAllan, setModalOpenAllan] = useState(true)
  const [modalOpenBentley, setModalOpenBentley] = useState(true)
  const [modalOpenChiari, setModalOpenChiari] = useState(true)
  const [modalOpenCooper, setModalOpenCooper] = useState(true)
  const [modalOpenDennis, setModalOpenDennis] = useState(true)
  const [modalOpenDiana, setModalOpenDiana] = useState(true)
  const [modalOpenDrew, setModalOpenDrew] = useState(true)
  const [modalOpenDustin, setModalOpenDustin] = useState(true)
  const [modalOpenEmmely, setModalOpenEmmely] = useState(true)
  const [modalOpenEmmi, setModalOpenEmmi] = useState(true)
  const [modalOpenEvelyn, setModalOpenEvelyn] = useState(true)
  const [modalOpenGabriel, setModalOpenGabriel] = useState(true)
  const [modalOpenGizelle, setModalOpenGizelle] = useState(true)
  const [modalOpenGraham, setModalOpenGraham] = useState(true)
  const [modalOpenIngrid, setModalOpenIngrid] = useState(true)
  const [modalOpenJacob, setModalOpenJacob] = useState(true)
  const [modalOpenJared, setModalOpenJared] = useState(true)
  const [modalOpenJessica, setModalOpenJessica] = useState(true)
  const [modalOpenJose, setModalOpenJose] = useState(true)
  const [modalOpenKarla, setModalOpenKarla] = useState(true)
  const [modalOpenKarmindi, setModalOpenKarmindi] = useState(true)
  const [modalOpenKate, setModalOpenKate] = useState(true)
  const [modalOpenLeah, setModalOpenLeah] = useState(true)
  const [modalOpenLiz, setModalOpenLiz] = useState(true)
  const [modalOpenLuka, setModalOpenLuka] = useState(true)
  const [modalOpenMadon, setModalOpenMadon] = useState(true)
  const [modalOpenMajorie, setModalOpenMajorie] = useState(true)
  const [modalOpenMaria, setModalOpenMaria] = useState(true)
  const [modalOpenMaria1, setModalOpenMaria1] = useState(true)
  const [modalOpenMaritza, setModalOpenMaritza] = useState(true)
  const [modalOpenMark, setModalOpenMark] = useState(true)
  const [modalOpenMercy, setModalOpenMercy] = useState(true)
  const [modalOpenOliver, setModalOpenOliver] = useState(true)
  const [modalOpenRosita, setModalOpenRosita] = useState(true)
  const [modalOpenSamari, setModalOpenSamari] = useState(true)
  const [modalOpenSeth, setModalOpenSeth] = useState(true)
  const [modalOpenTania, setModalOpenTania] = useState(true)
  const [modalOpenUnkown, setModalOpenUnknown] = useState(true)
  const [modalOpenVladimir, setModalOpenVladimir] = useState(true)
  const [modalOpenWendy, setModalOpenWendy] = useState(true)
  const [modalOpenUnknown2, setModalOpenUnknown2] = useState(true)
                                                     
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      <AnimatePresence>
      {!modalOpenUnknown2 ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown2(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
              <p className='text-mainText'>
I call out for my release. I want them to love. 
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenWendy ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenWendy(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Wendy H.</h1>
              <p className='text-mainText'>
Wanna be known as someone who helped out their family.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenVladimir ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenVladimir(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Vladimir Gonzalez</h1>
              <p className='text-mainText'>
 One thing that means alot to me is my name, Vladimir. I know a lot of people say it’s a Russian name, but to me it’s very unique. To me it means strength, power, and success. I haven’t seen or heard of anyone with my name. I used to not like my name and I dreamed of a life without this name. But then it hit me, since my name is unique and not heard so often, I should make the most of the name Vladimir Gonzalez, they know exactly who I am and what I do.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenUnkown ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
              <p className='text-mainText'>
I game my dad a bracelet for fathers day or his birthday, something like that and the bracelet has a pattern like a checkerboard and fire and this thing took me forever but it was just a bracelet to show i cared, it looks like the flags they use in one of his favorite things to watch, every other sunday as a family we would watch formula 1, cars racing, it’s super fun. But anyway in october he passed away, dead, deceased, whatever you want to say, he’s gone you know, he worked with cars, he’s a mechanic, had his own “shop” and we had to clean it up and my mom and sister with friends did it all, I didn’t help but they got home and the first thing my sister did was show me the bracelet, he had kept it all that time, he had just had this on his desk next to his computer. I wear that every day just to feel close to him, so that he’s with me I guess
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenTania ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenTania(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Tania M.</h1>
              <p className='text-mainText'>
Endless nights of fear. Not wanting to sleep. Seeing spirits each night wishing this cycle to end. Until my mom took me to tlalpujahua, a place where there was a family with spiritual gifts. My only hope for my mom and I. They read my whole life, they gave me peace. Having nights where I could sleep, not fearing of sleeping. They gave me a tetragrama. Lot’s of people view that amulet as bad as whitchcraft. But there’s a deeper meaning into it. It’s a symbol that protects me from spirits, so they can leave me alone, adn feel peace. Live a normal life. Not fearing for my soul, sleeping and resting. This symbol impacted my life at a young age I was in second grade when this symbol came in my life. Many people might not believe on my experiences and how this symbol has made me have peace. It’s something that I’m not really open about it becuase many can paint me as crazy or as a witch. Bak in my middle school there was an experience at school and the started to question me why I wasn’t feeling okay. I tell them the story and what did they tell me is to go to the doctors for a check up. That’s why I’m not open about it.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenSeth ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenSeth(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Seth Castro</h1>
              <p className='text-mainText'>
I want to leave a mark on the world. A mark I want to leave on the world is a mark of the pinnacle of humanity. I want to shape myself like an art form for other people to follow. I want to make a new wave of people and what they think is possible. I can do this by doing it myself first.
<br/><br/>
You will be an ideiot until you become successful, then you will become a genius.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenSamari ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenSamari(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Samari Velez</h1>
              <p className='text-mainText'>
My story started after my parents told me that I would have to work twice as hard as others because I’m Mexican and a woman. This ignited a fuel to always do good, to go twice as far. But I did lose sight to what I wanted to do and only started doing good for my parents' approval, disregarding my own wants. But I think I’m doing better at trying to do good for my own good. This saying resonates with me and has for a very long time. It’s something I see as motivational because we have our own stereotypes and being able to disprove them wrong is powerful and fueling. My parents also told me I’m a MexiCAN and not a MexiCAN’T. So these sayings fuel me to even just try my best and give something my all.
<br/><br/>
I think another thing I can add to my story is that I never want to go to bed angry. If I had conflict with my siblings I would resolve it before bed. I read a story where someone was mad at their siblings and went to be angry, and their sibling passed away that night.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenRosita ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenRosita(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Rosita Salazar</h1>
              <p className='text-mainText'>
	I think that I have a lot of things that remind me of my roots or where I feel I came from. I feel something that I’ve put a lot of meaning into is barbed wire, I hope I write that correctly. Eso significa mucho para mi por que es algo quien turo a ser pasado para q yo estuviera aqui, por eso estoy aqui. Se me hace algo feo y bonito a la misma ves la preservación a tuvieron para poder prover para uno mismo al igual prover por la familia y el futuro de ella. Al igual yo quiero cumplir los deseos de mi madre y padre. Al grandar la prepa, ir a la universidad, tener una casita, y poder tener buena salud, el espanol, q aun q yo siento lo contrario, el orgullo de ser de aquí y al mismo tiempo poder recordar q la sangre de mis padres es mexicano. No se si estro bien o mal pero yo asi soy y quiero seguer siendo asi.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenOliver ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenOliver(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Oliver Sconbes</h1>
              <p className='text-mainText'>
I want to be known for the people I help throughout my life. I want people to be able to share stories about me and things I have done. I want to be known for donating money and for helping people just like Jimmy did. I want to help people and leave a mark wherever I go. I want to teach people and share life lessons about my past. I want to leave my mark.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMercy ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMercy(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Mercy Thomas</h1>
              <p className='text-mainText'>
	You know, I don’t know what started it. One day, I just decided to do it. You will rarely ever see me without smiley faces sharpied on my ankles. It's unexpected. I know. Maybe it was after my oldest two sisters were diagnosed with depression. Maybe it was after I realized that not all smiling people are happy. I noticed that it’s the small things that count. I love making people smile, and every time someone sees me barefoot at marching band, or dancing in my socks, running down the hallway singing, or burning my feet on summer asphalt, they know it. “Did you know you have a smiley face on your ankle?” “I love the face you drew on your foot.” “You’ll never see her without the smiley faces drawn on her feet’. Yes, I knew. I put them there for you. Because you deserve 2.8 seconds of happiness today, and I’m happy if they came from me. Because “I’m glad you exist.”
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMark ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMark(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Mark Forsyth</h1>
              <p className='text-mainText'>
Although I haven’t encountered many powerful symbols in my life, or connected deeply with my ancestors, the symbol of my ancestral Scottish clan (a gryffin) has meaning to me because it reminds me of my relationship with my family. Although I don’t understand much of the meaning behind this symbol, it’s meaning to me comes from it’s power to remind me of my family and my history. I love my family, and my relationships with each member of my family means a lot to me, and I always want to find ways to connect with them better. This symbol also motivates me to learn about my history, and see the problems with it, so I can work to make systemic and personal changes. Learning to appreciate my history helps me to confront it, and to build on the good things while changing the bad things.
<br/><br/>
Speculating about the originally intended meaning of the gryffin symbol, I posit that it represents wisdom and resilience. It may not mean that, but to me it does, which is the purpose. The lion part could represent bravery; however, bravery seems cliche and more like a show of strength. To me, resilience is more important.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMaritza ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMaritza(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Maritza Lopez Martinez</h1>
              <p className='text-mainText'>
“Quiero que seas mejor que yo.” Mi apa siempre me dece esto todo los dias. I never really thought I had a story to tell, but my parents did. They always tell me at night because it amazed me how they were willing to leave everything behind to start a new and better life for them. I’m the youngest, I get everything handed to me. But at times I feel like I'm the oldest, my older brother has autism, so there are times I take care of him and educate him in school or about the real world. There is always this pressure where I have to be better than what my parents are, though what they have overcome is something I can never compete with. My story is about continuing what my parents couldn’t complete, they were never able to finish high school or college, get a job they enjoyed or even have time to spend with my brother and I.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMaria1 ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMaria1(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Maria Gonzalez</h1>
              <p className='text-mainText'>
Una vez cuando algo simbolizo mucho para mi fue cuanto mi papa que esta en venezuela me hizo esta pulsera do un crital llamado cornelina.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMaria ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMaria(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Maria Guzman</h1>
              <p className='text-mainText'>
Idk if this counts, but in 2nd grade, I found the power of writing. In 3rd grade, my teacher rewarded me “Awesome Author” prize in the class. All of my teachers somehow recognized something that I sometimes thought wasn’t important. To this day, I’m trying to write a story. To this day, I think I want to do something with writing in my life. Writing has been my safe space all my life. I don’t express my feelings to people. I feel safer when I write about it instead. I learn more about myself when I write. I feel conflicted sometimes though. Should I continue this passion or should I focus on something that would make me money so I can survive?
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMajorie ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMajorie(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Majorie Pirir</h1>
              <p className='text-mainText'>
“I want to be known as the “troll” I am”
<br/> <br/>
How do you want to be known? 
<br/><br/>
I want to be known as the “troll” I am.  When I say troll, I mean crazy, trickster, funny.  Those are only a third of who I am. But I want to be known for being a troll.  Somet think I’m heartless and have no feelings. But I am very sensitive, and I care about the important people in my life. My family knows me as the crybaby, pieces, troll, old lady.  I don’t want to be known as the cry baby pieces. I already know I have a mind of an old person and I’m a troll.  I just want most, who talk to me or want to know me, to know that I am troll.  
<br/><br/>
Something I would like to pass down is a story my mother told me about her sister. One day in the middle of night, my mom’s sister had to go to the toilet. My mom’s mom told her to go with my mom. So they went to the toilet, which was far from where their house was. They get to the toilet and my mom’s sister goes in while my mom waited for her. 1 minute waiting and my mom hears laughter. My mom asks her sister who she was laughing with. My mom’s sister said a boy, “un niño.” when her sister was done, the sister explained that the boy appeared at the corner of the stall and had a huge sombrero and was moving his foot and hand- she said that he was dancing so she danced with him. She said he disappeared when my mom called out to her. This story, mym told me when I was 10, and it’s still in my memories. So it’s just something I want to pass down.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenMadon ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMadon(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Madon A.</h1>
              <p className='text-mainText'>
	Being dualfed in huge environments, for me being lake powell, a full sense of scale is crested. It’s not a diminishing or necessarily humbling experience, but one that makes you fully realize the beauty of life in the environments or ideas of experience. <br/>
	Lake Powell has given me my most cherished memory. Time spent on the water, time spent with family, responsibility and pay off, effort and reward. The Godlike figures of rock reaching up into the sky, high above the abyssal depths of green water cannot help but inspire feelings of beyond.<br/>
	The most fond memories of my life come from the week-long increments in the most incredible place in the world.<br/>
	It’s not a feeling of unknown, the midwest and it’s emptiness has brought millions into a landscape bigger and grander than one would ever imagine. Some of the best of us come from the frontier, the true difficulty of the scale, of the brutality of the landscape.<br/>
	Honestly at this point I’m rambling but i think my point was communicated.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenLuka ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenLuka(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Luka Johnson</h1>
              <p className='text-mainText'>
One of the things that has stuck out to me is an anime called Dragon Ball Z because even though the main character was scared of not being strong enough he would always keep fighting to save everyone on the planet and he would try to give everyone a second chance if they were bad, so that they could have another chance to change and become good.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenLiz ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenLiz(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Liz Gamarra</h1>
              <p className='text-mainText'>
I always hearing the saying, “Go big or go home” to parents that are all so sheltered. I don’t want to be that. I love my parents, but that’s not who I want to be. I want to be so unique, I want to be known as an amazing designer. I want to make pieces that’ll confuse and inspire people. I want to be hated and loved by lots, but I’ll be doing it all for me. I’ve always wanted to be selfish and gain from it. I want to be known for designing pieces of clothing that’ll be in museums for generations to come and when they see it, they know it was my creation. I want to be known as not only someone who made inspirational art, but I want to look like an inspiration. I’ll be different from anyone else so unique that people see me and know who I am. I want to be a walking piece of art with colorful hair, beautiful/fun style, gorgeous tattoo pieces that make people emotional. I never want to be ordinary. I want to be known as someone who didn’t conform to society. I created my own society. I want to be known for a lot of things not just one specific thing. I don’t like the idea that people were destined for a certain path in life. I want to be known for performing, dancing or singing. I also want to be known for standing up for all human rights. I want to be a voice big enough to touch the whole world. I want to be known for making a difference in every way I could artistically, physically, orally… all of it. I want it all to be known.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenLeah ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenLeah(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Leah Thomas</h1>
              <p className='text-mainText'>
Words have always meant something to me. The way they scrawl across the page painting a picture for those who dare to read them. My sisters write. They write beautiful stories and poems, but what can I do? I sing. I add my voices to the harmonies and lend my talents to a bigger picture. I express myself best when I sing. It shows exactly how I feel and who I want to become. I guess my biggest fear is that I won’t make a difference. I want to make a difference. I want to be something great in the bigger picture.
<br/><br/>
I also run. I run to stay sane. I love the adrenaline in my veins and the way it frees me from everything else. When I run, I know I’m my own person.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenKate ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenKate(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Kate Dickinson</h1>
              <p className='text-mainText'>
	In the world today, we act like we know everything, we pretend to have all our secrets figured out and we hide our insecurities because they make us feel weak. But we are living in denial. I want to break that cycle, if not for others, then for myself I want to explore the unknown, to learn about the secrets like space and the ocean and discover new theories about those things. I want to write about my own theories and lay all my feelings out for other people to read. I want to create a story that is raw and true and shows emotion. The world is so bleak and void of imagination, and I feel like it becomes harder to find a flow of creativity. Technology, like my parents say, is bad for me. But I believe there are thoughts and emotions and pure art that can be found there. I want to create something that I'm undeniably proud of, and I hope it can motivate others to find their own purpose. To find something they can be proud of.
<br/><br/>
	I have these boxes I call “memory Boxes” that contain cool artifacts to tissues I have cried into. One of my boxes has bottle caps, amusement park bracelets from my early childhood. My dad gave me his old puch from Argentina, and I will use it when I want to make my own story with it.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenKarmindi ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenKarmindi(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Karmindi Henderson</h1>
              <p className='text-mainText'>
How do I want to be known? That’s a big question, there are lots of things easily put into two categories. The first would be my strength, not just physically but emotionally I am really strong I’ve been through a lot, I’ve been depressed, happy, terrified, numb, I’ve felt it all. I’m also physically strong I’ve been knocked down by people or cheer, I’ve fallen through the air on to people (6-10 feet in the air) I’ve gotten fallen on, I’ve hurt myself I’ve put myself through pain, but I’m strong. I can lift a girl above my head throw her 12-14 feet in the air I can put others up I lift them up while I hold strong. Another thing I would say is my talent, I have so many talents some of them are even small like being good at reading. I’m so good at cher, singing, cooking, math, ceramics, violin, music in general I have done all that I can to be seen to be noticed but what I need is to see myself. So to answer the question, how do I want to be known? I want to be known as strong & talented. It all came from my culture, we’re short but we will work to do what we believe we can and won’t be put down cause we know we can do it. For what we don’t have in height we make up for in attitude.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenKarla ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenKarla(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Karla San Juan</h1>
              <p className='text-mainText'>
ring from my grandma, it was really special to her. When she passed away, my family in Mexico sent the ring to my mom. But something special happened the night my grandma passed away. Before my mom knew, or even before I knew she had passed away, I was abt 7/8 years old when I had a dream with my grandma. In the dream she was basically telling me she was leaving and hugged me. She was so happy in the dream though. When I told my family the next day they were so surprised. Since then I’ve dreamt with my grandma a lot. I got to learn more about her to know that she’s so much like me. SHe was such an amazing person. I never really met her in person, but I only talked to her through the phone. I always have dreams about ther. My most recent one, she was happy. She told me she found her partner and I saw him, and when I told my mom she started crying. Why? Because she got divorced with my grandpa because he was being unfair to her. After they got divorced she would always say she wanted to get remarried, have a partner in her life. She passed away with no partner. My mom was so happy to hear the dream. Ever since I found that ring back in 7th-8th grade, I wore it everyday and never took it off, just how my mom would always wear it. Also, there was one day in 9th grade when I almost lost my ring and I felt like I had a connection with her. I’ve stopped wearing the ring so often because I felt like I was going to lose it.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenJose ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenJose(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Jose A. Zamora</h1>
              <p className='text-mainText'>
The humming that my grandma would sing that she later on sang to me in her native language. I dpn’t know why but those songs are the ones that give me comfort or confidence. In a sense if I feel alone or try to connect with my family, when I hear the songs through my head I always think of a butterfly or a moth. Everytime I feel that connection is when I feel down and every time it’s in those tough moments is when moths or butterflies appear to me and I know I can keep going forward. In a sense the butterflies are specifically the monarchs. The monarchs are going extinct along with the hyenous (thyenous, hyenovs? Hard to read) tribe that my grandma and grandpa are a part of which is the Mazahua tribe. The mazahua people are having the last of their generations. Although it shows that the similarity of the people and the butterfly going in a sense “extinct” I like to think of it as evolving. There are now butterflies that have evolved and it’s the same with the people. I am one of the butterflies that’s evolving. I can’t sing as beautiful as my grandma, but I try to symbolize with my violin and keep the beauty of music to myself. Just like my grandma.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenJessica ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenJessica(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Jessica Gonzalez</h1>
              <p className='text-mainText'>
“I want to be know for helping family and others get through whatever they are going through”
<br/><br/>
Something I want to be known by is helping family and others get through whatever they are going through- their worst times- and change it into their best, change them to be a better person. I want to be known as a forgiving and inspiring person. I want to be able to be the person people go to to become a better person.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenJared ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenJared(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Jared Lopezt</h1>
              <p className='text-mainText'>
One thing that has inspired me is to pay Baseball in the MLB sense I was a kid I have played Baseball my old House. Lived by my Best friend who plays baseball with me and his family pushed us to become better, he pushed himself to go pro and he is pro now and we work hard to become the same. My first coach playing baseball is from a different High School but because of him I play baseball and thats why baseball is important to me. Not just a sport but to me baseball is a lifestyle. <br/>
	Baseball wasn’t a thing in my older families culture but it is one of the things I live things I live one things I enjoy but ret as much as baseball.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenJacob ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenJacob(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Jacob Hiatt</h1>
              <p className='text-mainText'>
	I want to be known by my jokes and my personality. When future generations talk about me they talk about how funny I was and tell funny stories that they have of me. Just like my grandma, my dad would tell funny stories that made her so loveable. When I’m told stories of her, it’s like I know her and who she was and how she lived. In the end I want to know that I valued family and making memories more than the money of work that I did. I also would like to be known for my competitiveness and my love for sports that I sought after. Even if I don’t become a professional athlete, I want people to know my competitive spirit and my love for sports. This will probably change as i get older though. I want to be known for putting family experiences above all else. Although I love sports and being competitive it is only a part of my personality, I want people to know that some things were more valuable than this.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenIngrid ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenIngrid(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Ingrid Jamie</h1>
              <p className='text-mainText'>
3 months ago my great grandmother passed away. I had the opportunity to live with her, in her house when I was little girl all the way up till I was 12; everyday after school she made me “gorditas de azucar” and after they were done we went to her living room to watch telenovelas, at times she would also tell me stories about her mom and how mean she was back then but it was probably something they did back the she would say, my grandma was a strong wise woman when I felt sick she would always make a tea for me called “té de palo santo” that she would pull out from her backyard. She had all kinds of stuff back there, and that little tea would make my pain go away. She taught me so much about love and forgiveness to yourself and others, she was so full of love that she let me and my mom inside of her house for years.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
    <AnimatePresence>
      {!modalOpenGraham ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenGraham(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Graham Gunderson</h1>
              <p className='text-mainText'>
What do I want to be known by? I want to be known as someone who cares. I want to be known by my friends, my family and my kids/future generations.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenGizelle ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenGizelle(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Gizelle Tafolla</h1>
              <p className='text-mainText'>
I have a flower that my dad gave me like 6 years. And IDK why I have a attachment to it, But it’s probably because I don’t get to see him as much. I hadn’t seen him since 2019, but I got to see him this month which was fun/ he lives in Mexico.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenGabriel ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenGabriel(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Gabriel Cueva</h1>
              <p className='text-mainText'>
Something I keep all the time are memories with my grandma when I was a child, I remember her hugging us, me, my brother and my cousins too, we all playing in the backyard and at the park, she looking and taking care of us.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenEmmi ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenEmmi(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Emmi Gundersen</h1>
              <p className='text-mainText'>
I want to be known by my fashion and boldness. I have power and capacity to share my light with the world. I can inspire others to be themselves like I am. I want to design beautiful pieces of clothing and share them with the world. I can wear and say whatever I am feeling. I want everyone to know that to be themselves and to be authentic is the best thing a person can be because it’s being who they are. I don’t want anyone to be ashamed of who they are, what they like or who they like. People should be comfortable in the world we live in. Because no one is the same, everyone wants to be happy and have a friend and be comfortable and love who they are. Clothing is a very accessible and simple way to express who you are and how you feel. I want to open my own clothing store and have everyone working and shopping there be comfortable in their own skin. I want my business to have diversity and acceptance. Everyone has a style. Every has likes and dislikes, so wear that and press that in the best way possible. If you wanna not care then do it in a way that looks amazing. If you want to be edgy, be edby with style. The way you look affects you whether you want it to or not. How you choose to present yourself shows the emotions your feeling or the emotions you’re trying to hide. Hiding emotion and creating a facade is sometimes the only way to get through the day. I’m not saying that it’s the best way to get through your day or life but sometimes you need to pretend to be okay in the long run. To have a diverse wardrobe is vital because you’re gonna be in a different mood every day.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenEvelyn ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenEvelyn(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Evelyn Arleagao</h1>
              <p className='text-mainText'>
                I want people to know me for my kindness and selflessness. MY whole life I have been there for everyone. I never asked for anything in return. I love seeing people laughing and enjoying life. I want people to be their best selves. I know what it feels like to be sad and not have anyone there for them. I don’t want that for anyone else. My parents were always fighting and stupid things. I know what it’s like to have your childhood stripped from you. And thank God it wasn't worse. I almost called the cops on my dad when I was in 6th grade. This small, open minded, kind hearted girl called the cops on the best man she knew at the time. That day I found out that my dad wasn’t this saint I thought him to be. I found out how angry he was. I found out how similar we are. I am so angry, such an angry person, but I cover it up with kindness. My dad punched 7 holes in the wall and bit my mom’s ear. I had to go to school with my brother in 11 minutes. MY dad didn’t say to  stay home to calm down, he told me to stop crying. He told me if I didn’t stop crying I wouldn’t be allowed to go to school. I was taught to hide my emotions taht day. To put on a smile and not let anyone know. That’s why I’m kind. I never know what scars someone could be hiding whether it be an actual scar or emotional/ Everyone deserves to be treated with kindness. There are so many unknown stories out there that will never be heard because they don’t feel like it’s worth it. They were told that it was normal and It’s not significant. It is. My parents told me that day, that fight was just like any other fight. When I brought it up, they both asked how I remembered so much detail.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
    <AnimatePresence>
      {!modalOpenEmmely ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenEmmely(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Emmely Ascencio</h1>
              <p className='text-mainText'>
                I’m not entirely sure what I want to be known for. The first thing I can think of is helpful. When I think of being helpful a lot of the time I think a lot when I’m at work and I’m asked to translate for Spanish speaking parents who can only put together bits and pieces of English. I do my best to make sure they understand because a lot of the time I see my mom or dad in them. I see that they only want what’s best for their kids, but struggle to accomplish that because of a language barrier. Sometimes it’s hard to overcome that language barrier because unfortunately I’ve lost some of my Spanish which really disappoints me. The other thing I think of when being helpful is helping my mom. She's done absolutely everything in her power to give me countless opportunities to pursue education. My mom always told me and my sister that the world will without a doubt try to take things away from you, but it can never take away your education/ I think it would be selfish of me not to pursue an education after all she’s done for me. She moved to the U.S. a completely different country, she had to acclimate to a different culture, and learn an entirely new language, and all she’s ever asked of me is to pursue higher education after all she’s done for me how could I not. I feel like almost every child of an immigrant has had that dream of being the first person in your family to go to college and establish a life of your own all while helping your parents and taking care of them like they did with you.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
    <AnimatePresence>
      {!modalOpenDustin ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenDustin(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Dustin S.</h1>
              <p className='text-mainText'>
                	I remember getting medals when I played soccer when I was really young. At that age, everyone on the team got one, but for me it represented/reminded me that I loved to play and it would get me excited to go play. <br/>
	I got a sign from my grandma when I was born and it reminds me of the potential that I can be. It is a German translation of my name. It reminds me of the cool stories of my family that relate to the German aspect of the sign, and is encouraging for me for the future.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
      </AnimatePresence>
    <AnimatePresence>
      {!modalOpenDrew ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenDrew(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Drew Clark</h1>
              <p className='text-mainText'>
When I was younger and my mom was pregnant we went to McDonalds. At the time I had no idea, but my soon to be baby sister was deformed and not growing regularly. My mom was terrified about how our family would take having somebody
( cuts off here and there are some drawings)
<p className='text-center'>
  <br/><br/>
  Scars
<br/><br/>
The few skin deep<br/>
Some natural, some not<br/>
A remembrance<br/>
A tribute<br/>
The pride they took away;<br/>
From my precious name derived from my <br/>
Culture<br/>
Taking Pride from my heritage<br/>
My hair;<br/>
Continually crazy<br/>
Different, a stand out,<br/>
A representation of the paths my family<br/>
Has traveled<br/>
My eyes;<br/>
What I’ve seen<br/>
Now I perceive<br/>
The different blue tones combining<br/>
White, Hispanic<br/>
The scars;<br/>
So unnatural taking away the pride<br/>
From my features<br/>
Yet defining growth<br/>
Letting me appreciate who I am <br/>
Now far i’ve come<br/>
They now, are apart of my features<br/>
My story<br/>
My scars.
</p>
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
    <AnimatePresence>
      {!modalOpenDiana ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenDiana(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Diana Gallardo</h1>
              <p className='text-mainText'>
      Butterflies, I believe that the butterflies represent my grandma. When I’m scared of something or when I'm out with my family a butterfly always comes. My grandma passed away 3 yrs ago and she passed away 2 weeks after I left Mexico. She took care of me she had told my mom that she was gonna take caste of me and show me her love because my grandma couldn’t show all of her love to my mom and when I went to go visit my grandma she showed love, caring, taking me to places, and before my grandma passed away she was talking with my mom and my grandma said “take care of Diana, she’s different from all of her cousins, she has a big heart and always tell her to follow her dreams because she’s gonna go through a lot” and she passed away, I would always dream of my grandma Reyna, and she would always tell me “follow your dreams don't give up” and the day of my birthday I had a dream of her and she was telling me that she loves me and to take care of my mom. My mom and grandma didn't really get along. My mom when she was 12 was living in the streets and she had nowhere to go. But that’s a different story. My mom sometimes reminds me of my grandma the way she expresses her feelings towards me. My grandma taught me many things and I’m grateful that I got to meet my grandma and she impacted my life
<br/><br/>
	Also, I told my mom about you Jimmy and she said she would love to meet you also sorry my grammar is kinda bad.

              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenDennis ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenDennis(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Dennis Hernandez</h1>
              <p className='text-mainText'>
      I don’t know what I want to be known for yet. I have thought about this question a lot though because I do want to be known for something. One of my greatest fears is to live my life with regrets and to live knowing I had the potential to do more. It truly does scare me thinking about living my life working a 9-5 for the rest of my life and die with nothing under my belt. Someone I really look up to is a fitness influencer, he’s not like a lot of other influencers where they’re always rude and negative/ He’s a very uplifting person and I aspire to be like him.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenCooper ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenCooper(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Cooper Todd</h1>
              <p className='text-mainText'>
      Back in 9th grade I experienced my first year in a seminary class. Halfway through the year my seminary teacher ended up getting transferred to a different school. At first she was off to a rocky start, but as the year went on she taught me very great lessons. The best thing she ever did for me was handing me a letter from my parents telling me how proud they were of me. That letter meant more to me than anything ever. To remember that class and experience I’ve held onto a bracelet she gave each one of her students.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenChiari ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenChiari(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Chiari M.</h1>
              <p className='text-mainText'>
      I want to be known as a person that saved lives. Just mentally and physically being able to save and pull people out of their horrible spot. Help them find themselves because I wish I had someone like that. I want people to remember me because of my humor, my personality, just me in general. Right now I know I’m known for my cars but I just hope that people also see that I’m more than ut a big piece of metal. Metnally that’s how I want to be known.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenBentley ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenBentley(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Bentley P.</h1>
              <p className='text-mainText'>
      I want to be known by my kids, my wife, and the stories that we share together, I want to be known by our memories and the time that we have made together. I want to make stories that are worth telling, create places that are worth visiting, and meet people that are worth remembering. I want to turn my house and the places I live into homes. I want to fill my life with people that I love, and that I share something with. I want to be good at being human. I want to be good at being a dad.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenAllan ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAllan(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Allan C.</h1>
              <p className='text-mainText'>
             One thing I would want to be known by is someone who made it. Pretty much my whole life up to now everyone I have met has told me that I could be doing better or I could try harder. Sometimes it gets to me thinking what I am doing wrong that makes this many people tell me I should be doing better. There was this leader. I had my scout leader who was one person who has seen me try my hardest. When I was about 12 he told my mom about this camping trip they were going to go on and when she told me about being a stubborn 12 year old just wanting to enjoy my summer I kept telling  her no. Until I had a talk with him and he told me that he wanted me there so I said I’ll think about it. I thought about it knowing that most of the time I would be alone because I was the youngest and the lowest rank so I agreed to go just to see if I would learn anything. I talked to him about and he said “you won’t be alone you’ll have me” and that made me feel a lot better. On the 3rd to last day I had to swim in a lake not knowing or never have been in a deep lake I was nervous and didn’t think I could do it. Thinking about how i “disappoint” so many people I didn’t want to do the same to him so I went along with it. I saw all these kids go in and have a good time and it was my turn and I was so nervous. I kept repeating to myself that I couldn’t do it. Until I looked ever to him and he nods his head towards me I know I could do it and I have made it. He has been my leader all the way to my eagle.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenAlexis ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAlexis(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Alexis Narciso</h1>
              <p className='text-mainText'>
             One thing my mom and dad say is never be afraid of anyone except for your mom and dad. That one sentence has helped me through a lot and has given me confidence. No matter what I do, that sentence stays in the back of my head, even when I'm supposed to be intimidated.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenAgustin ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAgustin(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Agustin Cauteruccio</h1>
              <p className='text-mainText'>
             I have never thought about what I want to be known for. But I would have to say that I want to be known for being a nice guy. I actively try to get along with everyone I meet. I also want to be known for my genuinity. I try to be genuine in all of my situations. These are the things I want to be known for and I will keep doing my best to accomplish that.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
      <AnimatePresence>
      {!modalOpenAdriana ?
        <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAdriana(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Adriana Lopez</h1>
              <p className='text-mainText'>
             Something that means a lot to me is 6th grade. Mainly because it’s a very memorable year throughout all of school.
              </p>
              </div>
            </div>
              </div>
            </div>
          </motion.div>
        : null}
        </AnimatePresence>
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
            <img onClick={() => setModalOpenAdriana(s => !s)} className={img} src={adrianaLopez} alt="avaFolkman"/>
            <img onClick={() => setModalOpenAgustin(s => !s)} className={img} src={agustinCauteruccio} alt="avaFolkman"/>
            <img onClick={() => setModalOpenAlexis(s => !s)} className={img} src={alexisNarcisco} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenAllan(s => !s)} className={img} src={allanC} alt="allanC"/>
            <img onClick={() => setModalOpenBentley(s => !s)} className={img} src={bentlyP} alt="bentlyP"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenChiari(s => !s)} className={img} src={chiariM} alt="chiariM"/>
            <img onClick={() => setModalOpenCooper(s => !s)}className={img} src={cooperTodd} alt="cooperTodd"/>
            <img onClick={() => setModalOpenDennis(s => !s)} className={img} src={dennisHernandez} alt="dennisHernandez"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenDiana(s => !s)} className={img} src={dianaGallardo} alt="dianaGallardo"/>
            <img onClick={() => setModalOpenDrew(s => !s)} className={img} src={drewClark} alt="drewClark"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenDustin(s => !s)} className={img} src={dustinS} alt="dustinS"/>
            <img onClick={() => setModalOpenEmmely(s => !s)} className={img} src={emmelyAscencio} alt="emmelyAscencio"/>
            <img onClick={() => setModalOpenEmmi(s => !s)} className={img} src={emmiGunderson} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenEvelyn(s => !s)} className={img} src={evelynArleaga} alt="evelynArleaga"/>
            <img onClick={() => setModalOpenGabriel(s => !s)} className={img} src={gabrielCueva} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenGizelle(s => !s)} className={img} src={gizelleTafolla} alt="dustinS"/>
            <img onClick={() => setModalOpenGraham(s => !s)} className={img} src={grahamGunderson} alt="emmelyAscencio"/>
            <img onClick={() => setModalOpenIngrid(s => !s)} className={img} src={ingridJamie} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenJacob(s => !s)} className={img} src={jacobHiatt} alt="evelynArleaga"/>
            <img onClick={() => setModalOpenJared(s => !s)} className={img} src={jaredLopez} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenJessica(s => !s)} className={img} src={jessicaGonzalez} alt="dustinS"/>
            <img onClick={() => setModalOpenJose(s => !s)} className={img} src={joseAZamora} alt="emmelyAscencio"/>
            <img onClick={() => setModalOpenKarmindi(s => !s)} className={img} src={karmindiHenderson} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenKate(s => !s)} className={img} src={kateDickinson} alt="evelynArleaga"/>
            <img onClick={() => setModalOpenLeah(s => !s)} className={img} src={leahThomas} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenLiz(s => !s)} className={img} src={lizGamarra} alt="dustinS"/>
            <img onClick={() => setModalOpenMadon(s => !s)} className={img} src={madonA} alt="emmelyAscencio"/>
            <img onClick={() => setModalOpenMaria1(s => !s)} className={img} src={mariaGonzalez} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenMaria(s => !s)} className={img} src={mariaGuzman} alt="evelynArleaga"/>
            <img onClick={() => setModalOpenMaritza(s => !s)} className={img} src={maritzaLopez} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenMajorie(s => !s)} className={img} src={marjoriePirir} alt="dustinS"/>
            <img onClick={() => setModalOpenMark(s => !s)} className={img} src={markForsyth} alt="emmelyAscencio"/>
            <img onClick={() => setModalOpenMercy(s => !s)} className={img} src={mercyThomas} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenRosita(s => !s)} className={img} src={rositaSalazar} alt="evelynArleaga"/>
            <img onClick={() => setModalOpenSamari(s => !s)} className={img} src={samariVelez} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenSeth(s => !s)} className={img} src={sethCastro} alt="dustinS"/>
            <img onClick={() => setModalOpenTania(s => !s)} className={img} src={taniaM} alt="emmelyAscencio"/>
            <img onClick={() => setModalOpenUnknown(s => !s)} className={img} src={unknown1} alt="emmiGunderson"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenVladimir(s => !s)} className={img} src={vladimirGonzalez} alt="evelynArleaga"/>
            <img onClick={() => setModalOpenOliver(s => !s)} className={img} src={oliverSconbes} alt="gabrielCueva"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenUnknown2(s => !s)} className={img} src={unknown2} alt="gabrielCueva"/>
            <img onClick={() => setModalOpenWendy(s => !s)} className={img} src={wendyH} alt="dustinS"/>
            <img onClick={() => setModalOpenLuka(s => !s)} className={img} src={lukaJohnson} alt="emmelyAscencio"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenKarla(s => !s)} className={img} src={karlaSanJuan} alt="emmiGunderson"/>
          </div>
  		  </div>
  		</div>
    </div>
  </motion.div>
  );
}

export default APSpanish;