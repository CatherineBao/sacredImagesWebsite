import React from "react"
import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion"

import unknown1 from '../../img/story-img/humanities/1-rect.png'
import unknown2 from '../../img/story-img/humanities/2-rect.png'
import unknown3 from '../../img/story-img/humanities/3-rect.png'
import unknown4 from '../../img/story-img/humanities/4-rect.png'
import unknown5 from '../../img/story-img/humanities/5-rect.png'
import unknown6 from '../../img/story-img/humanities/6-rect.png'
import unknown7 from '../../img/story-img/humanities/7-rect.png'
import unknown8 from '../../img/story-img/humanities/8-rect.png'
import unknown9 from '../../img/story-img/humanities/9-rect.png'
import unknown10 from '../../img/story-img/humanities/10-rect.png'
import unknown11 from '../../img/story-img/humanities/11-rect.png'
import unknown12 from '../../img/story-img/humanities/12-rect.png'
import unknown13 from '../../img/story-img/humanities/13-rect.png'
import unknown14 from '../../img/story-img/humanities/14-rect.png'
import unknown15 from '../../img/story-img/humanities/15-rect.png'
import unknown16 from '../../img/story-img/humanities/16-rect.png'
import unknown17 from '../../img/story-img/humanities/17-rect.png'
import unknown18 from '../../img/story-img/humanities/18-rect.png'
import unknown19 from '../../img/story-img/humanities/19.jpg'
import unknown20 from '../../img/story-img/humanities/20.jpg'
import unknown21 from '../../img/story-img/humanities/21.jpg'
import unknown22 from '../../img/story-img/humanities/22.jpg'
import unknown23 from '../../img/story-img/humanities/23.jpg'
import unknown24 from '../../img/story-img/humanities/24.jpg'
import unknown25 from '../../img/story-img/humanities/25.jpg'
import unknown27 from '../../img/story-img/humanities/27.jpg'
import unknown28 from '../../img/story-img/humanities/28.jpg'
import unknown29 from '../../img/story-img/humanities/29.jpg'
import caltonThurston from '../../img/story-img/humanities/calton-thurston-rect.png'
import scottHubert from '../../img/story-img/humanities/scott-hubert-rect.png'

function Humanities() {
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  const [modalOpen1, setModalOpen1] = useState(true)
  const [modalOpen2, setModalOpen2] = useState(true)
  const [modalOpen3, setModalOpen3] = useState(true)
  const [modalOpen4, setModalOpen4] = useState(true)
  const [modalOpen5, setModalOpen5] = useState(true)
  const [modalOpen6, setModalOpen6] = useState(true)
  const [modalOpen7, setModalOpen7] = useState(true)
  const [modalOpen8, setModalOpen8] = useState(true)
  const [modalOpen9, setModalOpen9] = useState(true)
  const [modalOpen10, setModalOpen10] = useState(true)
  const [modalOpen11, setModalOpen11] = useState(true)
  const [modalOpen12, setModalOpen12] = useState(true)
  const [modalOpen13, setModalOpen13] = useState(true)
  const [modalOpen14, setModalOpen14] = useState(true)
  const [modalOpen15, setModalOpen15] = useState(true)
  const [modalOpen16, setModalOpen16] = useState(true)
  const [modalOpen17, setModalOpen17] = useState(true)
  const [modalOpen18, setModalOpen18] = useState(true)
  const [modalOpen19, setModalOpen19] = useState(true)
  const [modalOpen20, setModalOpen20] = useState(true)
  const [modalOpen21, setModalOpen21] = useState(true)
  const [modalOpen22, setModalOpen22] = useState(true)
  const [modalOpen23, setModalOpen23] = useState(true)
  const [modalOpen24, setModalOpen24] = useState(true)
  const [modalOpen25, setModalOpen25] = useState(true)
  const [modalOpen27, setModalOpen27] = useState(true)
  const [modalOpen28, setModalOpen28] = useState(true)
  const [modalOpen29, setModalOpen29] = useState(true)
  const [modalOpenScott, setModalOpenScott] = useState(true)
  const [modalOpenCalton, setModalOpenCalton] = useState(true)

  const modal = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  const modalBlock = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      <AnimatePresence>
        {!modalOpen29 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen29(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
                     I grew up on the Navajo Reservation in the beautiful four Corners area. My family chose to move there, giving me a chance to build ties with relatives, connect with my roots and experience Navajo culture. My mom is from the Kinyaa'áanii clan. <br/> <br/>
     We lived within an hours drive from every close family member. The landscape is ruggedly imposing and peaceful in its refusal to compromise nature’s values to modern life. I enjoyed helping my Great Grandma who only spoke Navajo with her sheep. <br/> <br/>
      Listening to stories from my grandpas about their time abroad while serving in the Marines created in my young mind images of present day Navajo Warriors.  They proudly wore their hair long in traditional Navajo style.  As soon as I could, I adapted the style in my own life.  <br/> <br/>
    My dad had recently finished a medical residency and we lived in a trailer home. I built castles from dirt and bricks left on the grassless lot. It sparked my imagination and kept me occupied.  It was a comfortable immersion of “rez life.” <br/> <br/>
     Midway through third grade my family moved to Utah. The moving process was rough. The change between the Rez and Utah was immense. The people, the weather and most importantly the culture. <br/> <br/>
     The change of scenery however was in sync with my growing mind and reminded me of my Warrior uncles and their service in foreign lands. For example my school classes went from having 3 bilagaana(white people) to completely bilagaana. I was the only Native kid until middle school.  Until that point skin color was nothing more than how much time was spent in the sun.     <br/> <br/>
       I chose to make friends with anyone who had the same interests as me. Most of my friends were on the football team but I had never played football. I studied, watched and prepared physically to try out. It proved a good decision. I became part of a diverse friend group in both ethnicity and thought. I felt comfortable growing my hair long.  Football initially tied us together but our support and loyalty to each other bound us as family.<br/> <br/>
I had never been invested in sports growing up. I played them, but never with the intention of being the best that I could. I only ever gave enough to beat the enemy. When I faced a more experienced opponent I would usually give up. That changed when I joined football. Having others around me, others that depended on me and put trust in me to win was what made me realize that I was the one who decided If I did good in something.<br/> <br/>
Sophomore year 3 of my closest friends were injured. Some of my other friends decided to take off their helmets for the last time. I had two choices. Give up and never realize my full potential or work and put in time to reach my full potential. I chose the latter. I still wasn't good enough to play varsity my sophomore year but that was all the more motivation to get even better. Junior year I made Varsity. However there was still conflict in the program. This conflict caused ¾ of my closest friends to leave for Timpanogos. During the season I realized that I had not fallen in love with the sport of football but rather the brotherhood that It offered. That next year I transferred to Timpanogos to ride with my brothers for one last time. <br/> <br/>
At Timpanogos I realized my importance in the program. I was a leader, even If I didn't want to be. I didn't directly lead but I chose to lead by example. I did the extra sprints, The extra film, and the extra effort even though I was guaranteed a starting spot. 
The reason I bring up these two experiences in my life is because I believe that culture is extremely important in allowing growth and improvement. It goes both ways however. I was lucky enough to be put on a good path for growth. All of my circumstances allowed me to follow this path. 

                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen28 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen28(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
                     I think a person is made up of everything and everyone around them. No 2 people are the same because everyone has their own take on life. You have role models come and go or some that come and stay. Each leaves behind a lesson or sometimes even just a small spark that eventually could grow into a wildfire. I’ve had many people come into my life and some that have left my life, but each influenced who I am today because of the lessons I learned both good and bad. Some may not seem prevalent in everyday life, but many are recalled when I am stuck in a place that seems like there’s no simple solution. I’ve had a pretty simple life, others may not be as fortunate as I am, but that doesn’t mean that they aren't just as capable as I am. Some people learn a certain way and if those conditions aren’t met, they might not excel as much as others. This doesn’t make them dumb, but in fact just means they’re human. Some of the most influential people in my life didn’t have half the things that I have, yet they excelled and pushed through adversity to get to where they are today. The experiences of others don’t define who we are, but we can take from those experiences and build our own experiences off of others' stories and experiences.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen27 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen27(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
                    Pain, suffering, loneliness, all are a daily occurrence in everyone and we usually face these problems alone. Why can't we work together as a society to help each other and make the world a better place? Each day someone cries while others suffer from anxiety in silence. Happiness is best when shared so why don't we share our joy and life with friends and family? <br/><br/>
What I wrote last time was "We all experience pain daily just love other and be there to hep so others aren't alone with their heartache." I will be the "therapist" that people can talk to and pour out their problems to. I will be the trustworthy friend because I will always be there to help someone hurt, struggling, and in pain. "Anxiety, hopelessness, loneliness, why can't we escape the pain of never finding our true purpose." I also said that why should we fear finding our purpose, that is the meaning of life to make yourself useful and gain as many skills as you can. I don't really know why I said that but no one should fear the future, they should face it with bravery and joy because each day is another opportunity to be better than we were yesterday. "Together we can change the world and feel safety and comfort, with each other we are whole." Like John Dickinson said "United we stand, divided we fall" we are better when we work together and when we don't we truly fail. Families are made so then they can help teach the youth and have the youth give them joy and new challenges to grow, each day is a battle of growth so why don't we grow together and learn to become smarter? The best future anyone can have is with people they can become better around.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen25 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen25(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
                    I want to be known as an asset to my social life, work, and family. I am a second generation immigrant working through America learning what my parents couldn't. As a child, I lived with my 3 brothers and mother. My Dad wasn't present much of my childhood and that spawned a lot of hatred and resentment... Who wouldn't? A child being confused and sad that his dad was gone for months on end. I never understood why he left and why he couldn't just work here but I managed to learn and accept why he left periodically. I love him and I know he loves me even if he doesn't say it. I still understand myself fully but I think it'll come with age. I don't know the right from wrong and I don't know the truths from myths. But for that I believe I am wiser for I know that I know nothing about being wise. My story isn't that interesting but where I come from is. My parents were both from Morelia Michoacán Mexico. They came here illegally because the needed a better life away from the crippling economy and gangs. They came to give all 4 of us a chance to have and gain what they could never have, and my greatest fear is failing and not living up to this grand opportunity they gave me. I want to better this world the best I can not for me but for my children, I want to be able to pass down the advice and stories of their grandfathers and fathers before them and to know mine as well. I want to continue my blood line so my story doesn't end, but to be added on through the generations.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen24 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen24(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
                    I wake up <br/>
Everyday I show up <br/>
The same routine <br/>
Why is life just about being lean<br/>
I don’t understand why can’t they be nice<br/>
Slice<br/>
But is it worth it<br/>
I need some advice<br/>
<span className='text-right'> Just think about it twice </span><br/>
The kids don’t know how much damage their doing<br/>
I’m on my knees<br/>
Please<br/>
I sit here praying<br/>
So you guys will understand what I’m intending<br/>
My poor life is slowly bending<br/>
Until finally it will snap<br/>
<span className='text-right'> Don’t walk into this abyss of black </span><br/>
I don’t want to do this<br/>
My life is just a black, empty gap<br/>
It’s the only option left<br/>
I put my hand upon my chest<br/>
Thump<br/>
Thump<br/>
Thump<br/>
I hear my heavy heart<br/>
Trying to support the life that will not start<br/>
I want this to end<br/>
<span className='text-right'> But life is about being bent </span><br/>
This is it<br/>
Please understand<br/>
Someone should’ve took a stand<br/>
The kids will finally know what they’ve done<br/>
If only they would’ve known<br/>
It’s their fault<br/>
Please unlock your heart which is a vault<br/>
If only my true self had really shown<br/>
I might finally have my peace<br/>
The world is better off without me<br/>
<span className='text-right'> But… </span><br/>
No<br/>
This is it<br/>
I no longer have a choice<br/>
I should've used my voice<br/>
I should’ve made the choice<br/>
<span className='text-right'> Come on let’s forget this and rejoice </span><br/>
Maybe…<br/>
<span className='text-right'> NO It’s too late I no longer have a choice<br/>
You always have the decision<br/>
No matter what, just know your end vision<br/>
No matter your choice<br/>
Never hide your voice<br/>
Know, whatever you choose I will love you </span><br/>
Maybe…<br/>
I should Think Twice
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen23 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen23(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I was born into a household filled with people of different races, we all had to grow through our own differences and try to find our true selves, our “identity”. We’ve all been through most of the same things, but some went through racism or sexism, others been through more traumatic things then I have. I feel like I don't know my story yet...I'm still trying to create it. <br/><br/>

At a very young age I had to grow up and take care of myself along with my younger siblings. My siblings and I didn’t exactly grow up with money so we struggled. We were in and out of motels, staying at our parents friends houses then to our grandparents house, we never had a safe permanent place to stay. We would stay in nasty, dirty motels full of creeps and addicts so we could never leave our rooms to play like children, we were always wondering when our next meal is gonna or if our addict parents are gonna be back to pay for the room before the kick us out and cuz of that my younger siblings and I would always be sick, missing school cuz we didn’t have a ride, worrying about our parents and hoping that they didn’t get arrested or hurt when it’s their jobs to take care of us and worry about us. It took me some time to see how bad our situation was mainly because I grew up in that environment so I thought it was normal. I never noticed that i had a lot of responsibility because I thought it was normal, everyone in my family kept saying that i'm like a mother already cuz they can see things that i can’t and to me personally don’t think of myself as a mother figure but as someone just helping out my parents and trying to be a good daughter. For some reason out of all of the bad things that I have been through I still made it out stronger and better then what I was before, I forgave, moved on and spreaded kindness and love to the people around me. <br/><br/>

Before I moved to Utah I was living in a motel with my parents and siblings. I still went to school but I kept falling behind and getting bad grades and I also had horrible attendance because of constantly being sick or having to stay home and take care of my sick siblings. I've been living in a motel for 3 years of my life. One day  I got a call from my older sister which now that I realize it changed my life. She asked me, my sister and my little brother if we wanted to move with her to Utah and of course we said yes! I was a little hesitant as time passed and the days got closer for us to leave the only place that I ever knew as home, and why wouldn’t I be hesitant, it was a fresh new start in a different state with no friends or family, I was scared cuz I didn’t know what god had instored for me and what if it didn’t happened, what if it was a cruel joke and we were never getting out of that bad environment. <br/><br/>

As we moved into our new home in a whole different state that I never been to, where people thought in a different way, dressed differently, no one fighting each other and just a whole different culture that I didn’t know existed. I felt out of place and didn’t know where I belonged, I started getting homesick but I still kept it going for my little brother so that he knew that he’s safe now and he doesn’t have to worry about anything that we used to worry about before we moved. When I enrolled into a whole new school I was nervous cuz I didn’t have no friends and COVID also made it very hard to make new friends too but also on top of that I’m shy and don’t like socializing so I sorta distanced myself from others but as a year goes by I noticed that my life is getting better! I go to a school that actually cares about their students well being and they help their students! I love all the teachers and classes because they were very  welcoming. I finally made a friend after being at Timpanogos High for a year and a half- she’s completely awesome. I have good grades and I love going to school (yes I know… who would love school?). I used to always love school because it was my escape from the world and home but now that I moved here to Utah and started going to Timpanogos I started to love school for the teachers and the classes, it felt like home now that I have a friend. <br/><br/>

My life changed for the good and yes I was scared cuz you never know what the outcomes are gonna be but you’ll never know if you don’t try or take that leap of faith, I still struggle but every now and then I take a look at my new life and I feel so lucky to have gotten a chance to live.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen22 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen22(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I want to be known primarily as someone who was kind and loved all the people around me. Another thing that defines me in a way is my work ethic and my passion for some of the things that are important to me and how that drives me to work even harder. I have grown up in a middle class family and have been blessed in so many ways and have so many privileges, yet I have bigger aspirations, goals, and dreams. I want to be the guy that can buy his parents a Porsche or a nice boat or finish paying off some of their debts and not take a huge financial hit myself. My parents are incredibly hard working people, and I love and respect them for that. However, I plan on taking a different path, often one of higher risk. My whole life so far I’ve been trading time for money in one way or another. And that is exactly what my parents have done as well. There is nothing wrong with this lifestyle, it’s comfortable and reliable for the most part. However, the idea of getting up and doing the same exact job day in and day out working underneath other people does not appeal to me in the slightest. That is why for the last several months I have been trying to learn everything I can about finances and how the world works and how cash flows. I talk to everybody I can about their life experiences and the things that have/have not worked out for them. Additionally, I’ve listened to hundreds of hours of informational nonfiction to learn about different markets and financial strategies. I’ve listened to podcasts, audiobooks, youtube lectures, recorded training videos, ted talks, and anything I can find. On top of that, I’ve been finding time every day to read at least 10 pages out of a book that I find to be productful in any way. Whether the focus of the book is money, psychology, leadership, religion, mental toughness, or anything in the ballpark of these examples. <br/><br/>
     I read somewhere that you’ll never be more loved than the day of your funeral. This was an interesting thought to me, but it made me wonder what people will think/say about me once I’m gone. Especially with the way I live my life with the crazy adventures I go on, and the motorcycle riding my time could easily come to an end a lot sooner than anyone might like. This scares me deeply, yet the thought of not living my life doing the things I love and enjoy scares me much worse. People might not understand this concept, but those would be the same people that most likely have not experienced a thrill anywhere close to riding a roaring motorcycle and feeling the fine tuned mass of power respond to your every move. Very few experiences in my life have been able to make me feel the same way, and I want to live my life in a way where I won’t have any regrets. I won’t ever have to say that I didn’t have enough fun or that I didn’t enjoy life enough because I love my life and I love the way I live it. I strive to make everyday an adventure, a day to remember.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen21 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen21(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I am an item in a shoebox stuffed deep in the closet. The kind of relic once adored, until the day its purpose is no longer served. Like a stuffed animal from childhood, a birthday card from a grandparent, or even a favorite childhood book. These items hold fond memories. An unbreakable bond. Too valuable to throw away. I am irreplaceable. So I’m tucked away. Forgotten. My value never diminishes, but my purpose does. I’m unneeded, yet I stick around; to comfort when sad, to reminisce on the good times, and to keep in case I am suddenly needed. I exist, but at what cost? Never repurposed, never passed on for someone else to enjoy. I can’t leave on my own; this shoebox is my home.  
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen20 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen20(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            Well the biggest thing that has happened in my life is that i lost my little brother at a young age and he died right in front of me.  I was in 2nd grade and he was barely gonna turn 4, he died on his birthday month which was in february it's gonna be ten years since he passed.  So then i didn't go to school for 2 weeks and i was little and i didn't really know what was going on and i would just see my mom cry everyday but it wasn't just a small little cry it was yelling and wouldn't stop.  My dad got lost in the alcohol and he would just go to work then come back and just drink and drink he sometimes wouldn't even go to work.  I thought that was normal until I grew older and I started realizing that he was super depressed.  Then eventually both of my parents were just in their own world and they started to have a lot of problems and then they
wanted to separate.  My dad got a trailer and left the house and i remember asking “dad why are
you sleeping here and my mom is sleeping in the house” and he said “oh it's because i have to
work on this trailer” and i said “oh ok” and never asked again.  But they ended up getting back
together and working things out so that was good.  Then 4th grade came around and I started to
get bullied and the kids would tell me that I should have died instead of my brother and that I
was fat and ugly they would make fun of my family and so on.  So then 8th grade came by and it
was the summer so i started working out thanks to my brother in law and i came in my 9th grade
year everyone was shocked and they couldn't believe it was me and i just kept it up then in my jr
year i started playing soccer and i got even more fit and this year i did wrestling and i'm doing
soccer now and now those people that would bully me and make fun of me and hurt me are all
the ones that look up to me and tell me wow i wish i was you. I don't talk about this nobody
knows none of this so i would like to keep it that way and i honestly i don't know why i talked
about it but i did and i know that it doest really matter but there you go haha     
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen19 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen19(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            When I am older I want to be known as someone my younger siblings look up to, I want them to know that I am someone they can come too and someone they want to be like one day. I want to go to school and I want to have a good job and I eventually want to have a family. I think deciding what you want to be now is good because you want to know where you see yourself when you are a certain age. I have done things in my life that I wish I hadn't done or wished had not happened but the only way to get over it is to move past it and learn from it. I just want to be known as someone who can do hard things and can make good decisions. Like I said, I want to be a great role model to my younger siblings and to my cousins. I want them to be able to say “I want to be like that someday.”
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpenCalton ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpenCalton(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Calton Thurston</h1>
                  <p className='text-mainText'>
            The question that I want to focus on was what has happened in your life because to me I feel like I have been given a raw deal in life especially since 9th grade because I feel like that's where the hard times started but it's also the year I wish I could live in forever because it was the calm before the storm. We all know that 9th grade it when high school starts and grades are real now and I thought that was going to be my biggest problem until I graduate but boy was I wrong, the reason that I wish I could stay in that 9th grade year is because I was happy for once in my life I had a girlfriend that loved me for me, I had not experienced loss, I was doing really well in wrestling, and I was really thinking about the future and in the middle of that year the hardship started. My grandpa died on my dads side and I had not had anyone die in my life before and I didn't know how to deal with it so I just broke down I didn't know what to do so I just buried my sorrow deep inside myself and I so wish that someone told me that that wasn't the answer and that's when the pain started. After my grandpa had died I lost my girlfriend because it was the end of the year and we didn't know if we could do the long distance and so we split up and I didn't realize have much I cared about her until now and I wish I could have her back but she is with someone else and i'm happy for her and I give her my best. I also started my first job that same summer and I wish working with my uncle who owns his own painting company and it was some hard work and I really needed something to get my mind off of everything that just happened and it actually kind of helped until I found out the place we were painting, we were painting my ex's high school gym so I just couldn't wait for the summer to be over. Then 10th grade started and honestly that was the most depressing year in my life because high school was a lot harder than I thought it was going to be and every person I had asked out rejected me and had to have asked out like 10-12 different girls and that hurt but again I just pushed that sorrow down deep in myself and just got busy with wrestling and so my whole 10th grade year was just the worst year of my life because I felt that no one wanted me and no one wanted to be with me but the only person that was there for me was my mom, she was my rock through all of that and I told her everything but all of that changed my 11th grade year. In my 11th grade year things were getting a little better I found a girl that wanted to be with me and really loved me and things were finally looking bright until October 8 it was my mom's birthday and the night before my mom wasn't feeling well and she had a really bad headache but she has those all the time so I didn't think anything of it but the next day one my moms birthday my dad got me up for early morning practice and as I was getting ready for practice I heard a thud upstairs and so I went to see what it was and I went to my parents room and I saw my dad giving CPR to mom and I was shocked but I went to the door to open for the ambulance and the police and a few minutes later they brought her to the hospital by our house. I didn't go to school that day because I was too worried about my best friend but me and my siblings had bought her a gift for her birthday, it was a lego set of the F.R.I.E.N.D.S coffee house and I was going to build it for her and give it to her at the hospital but when I was in the middle of building it I hear my aunt cry out and in my head I knew what happened but I didn't want to believe but my mom, my best friend, died in the hospital. I haven't been the same since that day but this year I got into a support group and I didn't realize how much I was keeping bottled up inside and that's what was making me so unhappy  but that is why I think that I was given a raw deal in life but a lot of people are helping me so even though it was one hell of a storm I got through it and i'm finally healing and getting some help and that brings me to what I am going to give the word. I am going to give the world my experience and the wisdom I was given through those hard times and I want to help the people that have gone through loss like the people that helped me, I want to give them peace of mind and hope and I will do that by becoming a teacher so I can care for kids like I was cared for. That is what's happened throughout my life and I hope people can learn from it. 
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
       <AnimatePresence>
        {!modalOpenScott ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpenScott(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Scott Hubert</h1>
                  <p className='text-mainText text-center'>
            A Haiku by Scott Hubert A4 <br/><br/>
I want to be known <br/>
For making my mark on earth <br/>
And for being kind 
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen1 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen1(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I want to be known for being the guy who is always giving people hugs in the halls and being
nice and respectful. I want to be known for being that guy that anybody could talk to for
whatever reason they needed to and if they ever needed help with any of their school
assignments you know you could count on me.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen2 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen2(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I want to be known by my friends as the nicest person they knew. Even though friends that we make right now may not always be around for the rest of our lives, I hope I make an impact on them and that they remember me. High School is just a stepping stone in our lives and doesn't impact the rest of our lives, because we control our destiny and "We are Bad Asses' ' stated Jimmy Baca. I liked Jimmy Baca because he had really been through hell but he learned a lot from  it and wasn't afraid to share his opinions. I like how he turned his life around and became a poet and defied what everyone else told him he could be. I hope to be like him when I graduate and take hold of my future and follow my dreams. <br/> <br/>
I come from your normal typical family, who goes to a normal typical school, with normal typical friends, who gets normal typical grades, with normal typical attendance. But I hope to defy the normal and typical.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen3 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen3(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I want to inspire people to do good and to know how to do good. Smiling at someone, saying a few words or taking in people and becoming friends. It’s the small actions that make the biggest difference and changes in someone’s life. As a foreign exchange student, I have experienced many of these during the months I’ve been here. <br/><br/>
At the beginning I didn’t know anyone, really like no one, everyone and everything was new to me. New school, new family, new city and even new country. I had an interest in getting to know people and making friends since they would become my support out here. I decided to join the tennis team since I already knew how to play and I also saw it as a great opportunity to make friends and I can tell you it was the best decision I’ve ever made. I met my best friend and tons of other really close ones. But I can also tell you it wasn’t instantly, it took effort from both sides. She started wanting to play tennis with me, inviting me over for lunch and hanging out with her friends. We both put effort into making our friendship stronger: I would ask her all sorts of questions and she would answer them with any type of problem and even encourage me to ask her anything I wanted, we would say hi to each other in the hallways… Those little actions that just made my day and even my week. Looking back now I’m so grateful for how our friendship has grown and how I have also grown. It is so worth it to keep on putting effort and not giving up because there were times when I of course thought if I really had to do this and if it was really worth it but the satisfaction I get now from knowing I didn’t give up has no price. I have made friends forever. I can’t imagine what it would’ve been if I hadn’t met these people. Every person I’ve met here has influenced me and I’ve learned something from them and I would say I have also influenced them and they have learned from me too.  <br/><br/>
I want to encourage people to take little steps and even if they think it may be insignificant, it might make someone else’s day and they will also feel good about themselves when they do it. <br/><br/>
I want the world to know that it’s the small efforts that add up and make the difference. It’s not that hard and it could mean so much to someone. <br/><br/>
I want people to try it and know how they feel after because the happiness I get from it is indescribable. <br/><br/>
I want to be known for those actions, for doing good, for influencing people, for changing someone’s life, for making someone’s day.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
        </AnimatePresence>
        <AnimatePresence>
        {!modalOpen4 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen4(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I started with no steps, <br/>
then added a few.<br/>
Months go by and more come on by.<br/>
The more steps I take,<br/>
The more decisions I make.<br/>
Each leading to more and more steps.<br/>
Years pass by and I feel like I’ve touched the sky.<br/>
But life is full of misleading steps.<br/>
Life is a trek with unsturdy paths.<br/>
Sometimes I get lost  and I need a map.<br/>
But when times got hard and my steps were heavy,<br/>
You helped carry me to more steady paths.<br/>
You never left my side like we were each other's other halves.<br/>
You can’t turn back,<br/>
And change what you lacked.<br/>
Even when you feel trapped,<br/>
You need to act.<br/>
So take control of your next few steps.<br/>
They may seem hard and your future seems far.<br/>
But when your steps are all gone,<br/>
And you long for more.<br/>
Hopefully you made the most of your few given steps.<br/><br/>
I ultimately want to be known as a person who was kind, strong, faithful, and a loyal friend. I want to bring kindness and unconditional love into this world. Times are hard and we need to bring hope and peace to everyone we come in contact with. My life has been filled with a ton of ups and downs just like everyone else. I have been extremely blessed with a loving and supportive family. I started playing soccer when I was 4 years old and because of that sport I experienced some of my highest ups like going to national tournaments, traveling all over the country, offers and scholarships and winning. But I also experienced many downs like multiple injuries including my knee, foot, head etc. I am grateful for the downs because they make me appreciate the highs even more. I’ve grown up in a very religious household and still remain very faithful in my religion. My purpose in life is love and serve the way God and Jesus do. More recently I have experienced more downs. When I first found out about my tumor my mindset got the best of me. Trying to manage school, work, and friends all while dealing with depression and anxiety, felt almost unbearable. As I continued to push forward, I have discovered more purpose in my life. I can see now how all of these experiences shaped my life and my perspective. I realized the importance of self-growth and love, as well as trusting in God’s plan and timing for my life.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen5 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen5(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
             I was born in Trenton, New Jersey right next to the ocean and a famous ice cream place called Custer's Last stand. My mom and dad had been married for maybe a year and my dad was still in college. Things got bad and my parents ended up splitting up and my dad and I moved to Las Vegas at about the age of 6 years old. From there I wasn't enrolled in school and didn't go to school until about 3rd grade. I eventually got caught up but it took a while and I took a lot of extra classes to catch up. Eventually we got kicked out of another apartment and my dad and I lived in a storage unit for a good month or so. My mom flew out and tried to fix things with my dad but drugs became an issue for them both and from there my dad decided to move me in with my uncle in Utah. My mom ended up in prison and my dad wanted to change so he sobered up on most things and got cdl and got a job at swift trucking. The plan was that my dad was going to get enough money to get on his feet and then take me back into custody. but my aunt and uncle weren't the best people and they tried to get my dad to sign a power of attorney and that became a big conflict. my dad would still stop by once a month and we would hang and visit while i was going to school here. My dad and uncle's relationship got bad and my dad wasn't able to take me back with him so months turned into years. At this time I was going to school and fell in love with football and it became a personality trait at this point. i gained a lot of friends and lost a lot of friends from these years. I love them all and I won't forget them. 7 years passed and my dad had changed a lot. He had lost over 170 pounds and we finally at the age of 16 got an apartment together. We had a choice to move to anywhere in the country but we decided to stay here where my friends were. This story is kind of just the nutshell of what happened in the beginning of my life but I want to be known for making the best out of it. Tough times sometimes make you a better person. And I am grateful for the hard times I had and the many more hard times to come. One of the questions that was asked was how do we distinguish the myths from the truths and I think you need to hear it from that person. Of course there will always be gossip and rumors but only you know the truth and if anyone is concerned about it enough they would come ask you in person. I want this part of my story to be a reminder that even though your life sucks, or you may have serious issues that you're working through that you things are going to work out. You just want them to work out in your favor. What I want to give to the world is history. I feel that history is one of the most important subjects in school. It's been around since the beginning of time and it's important that we know history so that we don't repeat it. Along with that I want my history to be known to my kids and grandkids and maybe more, so that they can be grateful for what they have and can learn from my experiences.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen6 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen6(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I want to be known as a good person. I want to be remembered as a person who is there for my friends and family and is someone they can talk to. I want to have fun and travel and have a good time and be able to look back on my life with all these crazy experiences and memories and stories to remember. I want to get married to the person I love and be a good husband. If I have children I want to be a good father and be understanding and help them grow up to be whoever they want to be and have them look up to me. I want to be able to focus on the things and moments in life that I value and be happy. I want to be someone who makes it through all the hard parts of life and still is able to get back up on my feet and help whoever else needs help to get back up. I want to be successful and work hard to get there to provide for my wife and my family if I have kids. I want to enjoy all the things the world has to give and go to beautiful places. I want to stay healthy and be able to clear my mind from all the distractions and chaos in the world and live for the things that really matter and make me happy. 
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen7 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen7(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            I have honestly never thought of how I want to be known, I know I want to be remembered but I have never thought of how I wanted to be remembered. I don’t have any special talents that make me stand out. I'm not creative at all when it comes to art or poetry and I don’t feel like I'm above anybody either, I just feel average. After hearing Jimmy Baca’s story and learning what he went through had me thinking how can someone like me would want to be remembered if I don’t have anything special to offer the world. I know it sounds kind of childish of me but as a kid I always wanted to do something big for myself and other people, but I never thought of how I wanted to do that. I didn’t have a hard life or a tough time getting around as a kid in fact, I was the opposite of that I was spoiled and as I got older I started learning that if I wanted something I would have to work and earn for it. I had a lot of good mentors like my uncle and my grandparents of how to live in this world and I will always be grateful for them and I would do anything to give them a life of luxury because they deserve it. I honestly don’t know where i'm going with any of this i’m just typing to have class go faster but yeah I at least know that I do want to leave a mark in the world I just never thought of how I would do that, I guess I would just have to start thinking outside the box and see what I can offer the world and what they can offer me in return. 

                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen8 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen8(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText'>
            The way I want to be known is someone who has put his all into everything that he does and tries his best to succeed. I want to be known for this because I don't want people to think of me as a lazy person. My life is pretty much made up of sports. I love sports and I love being outside. Baseball is my favorite sport and I want to go to college and play it. Some things that have happened in my life: when I was little I hit my head on a doorknob and had to get 27 stitches in my head. I have injured myself a lot while I have been growing up. I've broken my arms 4 times and I also have torn my patella tendon. So I have been through a lot. I also love baseball so most of my life has been all baseball and I love it. One story I would like to share is Winning state for baseball my sophomore year. That was my most favorite memory because it brought me so much joy and it is what I have been dreaming about ever since I started playing baseball. Something i would like to give to the world is whoever i meet and whoever i am around i will try my best to be nice and treat them kindly and be a friend to them. I don't want people to think that I am mean so I want everyone to see me as a nice person that they can be friends with and be someone they can talk to if they need it. So that is my story and how my life has been and how I want my life to turn out to be.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
      <AnimatePresence>
        {!modalOpen9 ?
          <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        exit={{ opacity:0 }}
      >
            <div className='w-screen h-full'>
                <div className={modal} onClick={() => setModalOpen9(s => !s)}>
                  <div className='flex items-center justify-center mt-20'>
                <div className={modalBlock}>
                  <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                  <p className='text-mainText text-center'>
           MY TOMORROW <br/><br/>

They say that the today we’re living is the tomorrow that yesterday’s dead had so wished for
<br/>
But I hate this saying<br/>
It might be advising that I should cherish time and live my life to the fullest <br/>
But I don’t want to live at the expense of someone's painful death <br/>
Even when we’re at our lowest moments or lying down <br/>
exhausted <br/>
I believe all of us are doing our best to survive <br/>
The today that we’re living is just another day that everyone should live through, even if there’s no tomorrow <br/>
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen10 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen10(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I don’t really have much of a story to share. I’m the person in the back of the class that people don’t usually notice. I tend to focus on my friends more than myself and make myself less of a priority. I’ve had many people who I was close to leave my life. I think it’s good to remember that sometimes just a smile or a complement can go a long way. You never know what someone is going through and it’s just good to be kind to everyone no matter their situation or circumstance.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen11 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen11(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I just want to be known as i good person that helps people in life. i don't want people thinking that i'm a failure in life.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen12 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen12(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I am, or was, on the football team here at Timpanogos, and I would like to be remembered as a team, for how well we did this year. Every single one of us worked extremely hard, some of us for the majority of our lives, for what we accomplished this year. We were the first team in school history to ever win a home state playoff game, and along with our record, we had several athletes who broke school records in various stats and I want to be remembered for it. We set a high standard and big shoes to fill for the upcoming generations.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen13 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen13(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I want to be known. I want to be well known throughout the world. I don’t want to be famous really but 
I want to be known, talked about in magazines, talked about amongst famous designers, learned about 
one day and I want to be wanted but curiously unavailable. Lots has happened in my life just like 
everyone else. I have been bored at times in my life. I have been so busy and chaotic at times. 
I have been in love at times in my life. So much learning has happened in my life and so many 
experiences I'm grateful for everything that has happened in my life. 
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen14 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen14(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I don’t think I NEED to tell anyone my stories. I think if someone is curious to know they will ask me. 
But I will share my stories with complete honesty and leave it up to whomever asks me for them to 
interpret it however they would like it’s not for me to say how you feel or engage in my stories of my life. 
I do hope one day if people care enough if my impact is well enough people will tell a good honest 
story of my life. Okay so in class when we had the amazing guest speakers Jimmy Baca and Dimi.
Jimmy had an assignment for us where we will fill in the blanks of “brothers and sisters I will
give you... and you will give me...”. I was at first very interested in this little assignment they had
given to us. I was so confident and excited about the things I will give to brothers and sisters of the
world but then when it came to the part of “and you will give me..” I had no idea what to say. I’ve
always had the mindset of giving just to give not to expect something in return that’s selfish.
But Jimmy helped me and I realized expecting from others is something I do and is not a bad
thing. Here's one that I wrote where Jimmy ( the poet ) and his assistant were very impressed
by. It made me very happy and excited that they liked my words “brothers and sisters I give you
the best coffee I can make and you give me a smile, a conversation, and a promise to do your
best on that day” they were thrilled that they called it a poem. For me to experience a literal
poet calling something I wrote with the intention to just be silly to call that a poem was thrilling to
me. I was very flattered and thankful my teacher made that opportunity possible.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen15 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen15(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I don't know what I want to share. I'm just lost, scared, and confused. It used to all be good until I moved here. I've gotten so much hate. it's all caught up to me and it hurts so bad. you know it sucks when everyone you meet thinks you have a perfect life from the way you dress, the fact that you have married parents still, so you have a perfect life right? What more could you want? 
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen16 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen16(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           What I learned from Jimmy is that you should always be yourself. It is important to not try to hide who you want to be. I feel like for a lot of my life I often tried to make others happy even if it made me less happy. It is important to focus on yourself and keep your own head up. Of course you need to keep others happy as well. I learned that even when you are in a low place in life, being yourself and doing what you want to do can help to lift you up. Focusing on what you want is important to bring yourself to a happy place
When I was a kid I used to have a lot more friends. I think the reason I don't hang out with many people is because it just stresses me out trying to talk to them all. I still have a lot of best friends and I think it is important to hold on to some friendships but at the same time some need to end. <br/><br/>
I think it is important to remember where you have been in life to help you focus on what you can do better and to appreciate all you have or have been given. I want to keep track of how well I am doing in life to see if I can do better.<br/><br/>
I want to be known for being kind. I want my kids to know me if I have any.
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
          <AnimatePresence>
            {!modalOpen17 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen17(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           I don't care how people see me at this school the people at this school don't know who i am or what i've been through so their opinion doesn't matter to me i just care about the opinions of people close to me and i want them to remember me as a good person who always tried to get a smile out of them when they can't think about smiling
                  </p>
                </div>
              </div>
                </div>
              </div>
            </motion.div>
          : null}
          </AnimatePresence>
           <AnimatePresence>
            {!modalOpen18 ?
              <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
          >
                <div className='w-screen h-full'>
                    <div className={modal} onClick={() => setModalOpen18(s => !s)}>
                      <div className='flex items-center justify-center mt-20'>
                    <div className={modalBlock}>
                      <h1 className='text-text uppercase mb-3 text-2xl'>Anonymous</h1>
                      <p className='text-mainText'>
           Well, the truth is that during the course of these two and a half years, I would like you to remember me or at least teach me, my advice to let people who come from other countries and study at this school know, is to let them know that everything is possible, go through good and bad times, always fight for what you want and as my mom says, always keep the good memories, the truth was very difficult for me since a new country, a different language, new people, things to know, at first it was difficult, and even to the point of saying that I no longer wanted to go to school, because I didn't know anyone and because everything was in English, but I made up my mind and now I'm about to graduate, I know that There were many obstacles, I know that many did not believe in me, but it is enough for me to believe in myself, I know that I will not leave with a very high grade but at least I know that I will achieve it.
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
           <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Humanities Stories</h1>
          <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
        </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
  	        "The coolest part about making the mural was getting to see the hundreds of ideas being shared. Every story is unique, special, and important, and you can see that being highlighted across the several iterations made before the final product came to fruition." 
  	        <br/>
  	      	<span className='font-bold'>- Talon Gardner</span>
  	      </p>
  	    </div>
  			<div>
  			<div className='lg:p-20 p-10'>
  			  <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen1(s => !s)} className={img} src={unknown1} alt="avaFolkman"/>
            <img onClick={() => setModalOpen2(s => !s)} className={img} src={unknown2} alt="avaFolkman"/>
            <img onClick={() => setModalOpen3(s => !s)} className={img} src={unknown3} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen4(s => !s)} className={img} src={unknown4} alt="avaFolkman"/>
            <img onClick={() => setModalOpen5(s => !s)} className={img} src={unknown5} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen6(s => !s)} className={img} src={unknown6} alt="avaFolkman"/>
            <img onClick={() => setModalOpen7(s => !s)} className={img} src={unknown7} alt="avaFolkman"/>
            <img onClick={() => setModalOpen8(s => !s)} className={img} src={unknown8} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen9(s => !s)} className={img} src={unknown9} alt="avaFolkman"/>
            <img onClick={() => setModalOpen10(s => !s)} className={img} src={unknown10} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen11(s => !s)} className={img} src={unknown11} alt="avaFolkman"/>
            <img onClick={() => setModalOpen12(s => !s)} className={img} src={unknown12} alt="avaFolkman"/>
            <img onClick={() => setModalOpen13(s => !s)} className={img} src={unknown13} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen14(s => !s)} className={img} src={unknown14} alt="avaFolkman"/>
            <img onClick={() => setModalOpen15(s => !s)} className={img} src={unknown15} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen16(s => !s)} className={img} src={unknown16} alt="avaFolkman"/>
            <img onClick={() => setModalOpen17(s => !s)} className={img} src={unknown17} alt="avaFolkman"/>
            <img onClick={() => setModalOpen18(s => !s)} className={img} src={unknown18} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen19(s => !s)} className={img} src={unknown19} alt="avaFolkman"/>
            <img onClick={() => setModalOpen20(s => !s)} className={img} src={unknown20} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen21(s => !s)} className={img} src={unknown21} alt="avaFolkman"/>
            <img onClick={() => setModalOpen22(s => !s)} className={img} src={unknown22} alt="avaFolkman"/>
            <img onClick={() => setModalOpen23(s => !s)} className={img} src={unknown23} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen24(s => !s)} className={img} src={unknown24} alt="avaFolkman"/>
            <img onClick={() => setModalOpen25(s => !s)} className={img} src={unknown25} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpen27(s => !s)} className={img} src={unknown27} alt="avaFolkman"/>
            <img onClick={() => setModalOpen28(s => !s)} className={img} src={unknown28} alt="avaFolkman"/>
            <img onClick={() => setModalOpen29(s => !s)} className={img} src={unknown29} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenCalton(s => !s)} className={img} src={caltonThurston} alt="avaFolkman"/>
            <img onClick={() => setModalOpenScott(s => !s)} className={img} src={scottHubert} alt="avaFolkman"/>
          </div>
  		  </div>
  			</div>
  	  </div>
    </motion.div>
  );
}

export default Humanities;