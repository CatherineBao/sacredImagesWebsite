import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import {useState} from 'react';
import Modal from "react-modal";

import finneanSmith from '../../img/story-img/lgbtq/finnean-smith-rect.png'
import ivyAnderton from '../../img/story-img/lgbtq/ivy-anderton-rect.png'
import morganSmith from '../../img/story-img/lgbtq/morgan-smith-rect.png'
import natalieOtis from '../../img/story-img/lgbtq/natalie-otis-rect.png'
import unknown1 from '../../img/story-img/lgbtq/unknown-3-ap-art-rect.png'
import unknown2 from '../../img/story-img/lgbtq/unknown-3-english-rect.png'
import unknown3 from '../../img/story-img/lgbtq/unknown-lgbt-rect.png'

function LGBTQ() {
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  const imgNoHover = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg'
	const [modalOpen, setModalOpen] = useState(true)
  const [modalOpenTwo, setModalOpenTwo] = useState(true)
  const [modalOpenThree, setModalOpenThree] = useState(true)
  const [modalOpenFour, setModalOpenFour] = useState(true)
  const [modalOpenFive, setModalOpenFive] = useState(true)
  const [modalOpenSix, setModalOpenSix] = useState(true)

  const modal = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  const modalBlock = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
	    <div className='bg-background text-text'>
        {!modalOpen ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpen(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Natalie Otis </h1>
              <p className='text-mainText'>
              To tell the truth, I could go on and on and on about everything that has happened in my life, but instead, I'm going to pick key components that shaped who I am. Before I do that, however, let's start with the basics. <br/> <br/>
Hi! I'm Natalie Otis, right now I am 16 and a junior at Timpanogos. I've lived in Orem all my life, and  I'm a member of the church of Jesus Christ of Latter-day Saints(Mormons). <br/> <br/>
A big key moment of my life, besides the day I was born, was having to make a choice be the better friend or stand idle and do nothing. In junior high, a friend of mine was struggling with their mental health, so much so to the point, that they were harming themselves, and attempting to end their life. As I noticed the signs of this, as they wore baggy clothes distancing themselves from others, shutting people out, I chose to step in and help. A few days after seeing the first few marks on them, I told my parents scared out of my mind that I was going to lose this friend because I looked out for them. As I told this friend what I told my parents who told their parents, there was a little backlash, but as time went on I was received with gratitude. The gratitude didn't matter but, knowing that I helped someone in general, is enough.
A big moment more recently, Is finally accepting who I am. More so the fact that I am Bisexual. I've tackled with this a lot, questioning if I was just attracted to the opposite gender or both. This is the first time I've come out publicly for anyone to see, so please don't pester me, I'm scared enough. Unfortunately, as much as I want everyone to greet this with open arms, some turn away and shame. I'm not naming names, but there are those around me that do the latter. This Is important for me, but I also want to put it out there that there are allies and safe spaces for those that are a part of the LGBTQ+ community, to be themselves. <br/> <br/>
Some people may wonder why are you a member then? Let me tell you this, it's the relationship that I have with God that I go to church for, not the people or doctrine.  Having that relationship with him, has played a significant role in my life, he has been my comfort when no one's there, he has been the peace that I need in my life. If you have questions about this feel free to start up a conversation with a member, most will converse with you.  <br/> <br/>
All in all, being a part of this religion is a way for me to serve and bring about good in the world, besides having that relationship with God. One of my biggest joys is being able to serve others, seeing what my efforts are due is a reward in itself.  <br/> <br/>
Of course, there is more to my life, but for now, this is what I wanted to share about my life.  <br/> <br/>

#10 “Upon realizing now that I’ve been a trans man my entire life, everything just clicked. It feels like I’ve finally been able to discover myself, and who I really am deep down inside.” <br/> <br/>
Reflecting back on when I was younger, I realize that I was different from the rest of my peers from the very beginning. Despite not really thinking too deeply about identity, gender, and sexuality as a kid, I always sort of knew deep down that I wasn’t what most people considered the norm.  <br/> <br/>
I remember back when I would play video games on my computer or my brother’s console, I would always portray myself as a cisgendered boy. It was what made me feel the happiest and most comfortable for myself, it gave me absolute euphoria. However, when people eventually found out that I was “a girl”, or when my brothers exposed me to my online friends, I couldn’t help but feel a sinking feeling in my heart. It felt like my happiness was taken away from me, and that I couldn’t be my true, authentic self, even at such a young age. This was a common thing for me, and I would have multiple instances similar to this. Upon realizing now that I’ve been a trans man my entire life, everything just clicked. It feels like I’ve finally been able to discover myself, and who I really am deep down inside. After all, no cis person would ever do the things I did, as well as the things I do today. No cis person would feel the things I do about certain topics/situations everyday, or think so much about their own gender. <br/> <br/>
I was also invested in queer relationships and problems, even when I was a child. I often made a lot of my own original characters (whether it was based on video games, or just the random stories I made up in my head), and a lot of them tended to be in same-sex relationships. I would draw two boys holding hands, kissing, being in love. Even though I didn’t know the words for it yet, my own thoughts, feelings, and experiences were on complete display. It didn’t matter that it was a same-sex couple as opposed to a heterosexual one. Love is love, after all, why would anybody want to take away such a raw, genuine emotion from somebody else? <br/> <br/>
LGBTQ+ related things would only become more and more important to me as time went on, as I began to truly think for myself and who I was. These things would eventually sink deeply into my other passions: art, character creation, and storytelling. These passions have become very important to me, so important that I strive to do something with them one day, like making a comic with my best friend/lover. I hope that by making comics, I could share these hardships I’ve gone through, show what it’s like to those who don’t know, and reach out to those who have gone through the same, possibly inspiring them.
Even though I have been subjected to bigotry from some of the peers around me, and even some of my teachers, I have had a lot of good experiences here at Timpanogos. I have met a lot of other students and teachers who can relate to what I’ve been through, and allow me to be whoever I want to be without judgment. This is a real experience, not just for me, but for multiple other queer people around the world. No matter what, we’ll always be here, and our feelings will never be erased. After all, the world isn’t entirely in black and white, but in multiple shades of color. <br/> <br/>
Ignorance is something that is taught, not something you’re born with, and that ignorance kills. That’s why if we’re able to join together as a community, and learn to accept each other’s differences without prejudice, maybe the world could become a little less bleak, and more of a safe space for all.
              </p>
              </div>
            </div>
              </div>
          </div>
        : null}
        {!modalOpenTwo ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenTwo(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Morgan Smith </h1>
              <p className='text-mainText'>
              My story starts later in my life. I was in 7th grade where I began to experiment with my sexual and gender identity. No one in my family at that time had been open about it so I had to do it secretly without anyone guiding me. And since my family was LDS, I would search on google "is being gay a sin?" "Does LDS accept gay people?" <br/> <br/>
Then in 8th grade I came out to my mom as a trans man and that I didn't want to go to church anymore. That was some of the worst months of my life. I still had to go to church and wasn't able to express my identity. <br/> <br/>
 It took me until October of the next year to get a gender affirming haircut. Then in the middle of 10th grade I forced myself back to being female presenting because I felt no one would love me if I was trans. But by then my parents were a little bit more accepting and understanding of the LGBTQ+ community. <br/> <br/>
But this hassle in my identity led my brother to be able to come out and unlike when I was his age, he's able to express and be who he truly is. This makes my heart so full because I felt like I paved the way so he could live his life from where I couldn't. And just last year I came back out to my parents as a lesbian and in September out to my mom as nonbinary (she/they). And I love my parents more than ever now and I can finally express and talk about who I love whenever without awkward silence.

              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
        {!modalOpenThree ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenThree(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Finnean Smith </h1>
              <p className='text-mainText'>
              My story starts when I first started questioning my gender. I was in sixth grade when I felt that my body didn’t fit me, that something was off in the way I looked and sounded. I would spend days crying because something wasn’t quite right, and I thought that I was one of the only people in the world who felt like this. I wanted so desperately to believe that I was a girl, but deep down I knew I wasn’t. As time went on this deep rooted hatred of my voice body grew. I felt so bad about myself and thought I could never outgrow this. As time went on I pushed the feeling of my body being wrong into the back of my head, and the deep hatred of myself grew. Near the end of seventh grade I learned about being transgender from others on the internet, hearing others stories that sounded like mine was awe inspiring. I began to put pieces together in my mind and realized that I am a boy. I am a boy who’s just found himself. Now, a couple years later I am happier than I have ever been, and I am me. 
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
        {!modalOpenFour ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenFour(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Anonymous </h1>
              <p className='text-mainText'>
             Reflecting back on when I was younger, I realize that I was different from the rest of my peers from the very beginning. Despite not really thinking too deeply about identity, gender, and sexuality as a kid, I always sort of knew deep down that I wasn’t what most people considered the norm. <br/><br/>
I remember back when I would play video games on my computer or my brother’s console, I would always portray myself as a cisgendered boy. It was what made me feel the happiest and most comfortable for myself, it gave me absolute euphoria. However, when people eventually found out that I was “a girl”, or when my brothers exposed me to my online friends, I couldn’t help but feel a sinking feeling in my heart. It felt like my happiness was taken away from me, and that I couldn’t be my true, authentic self, even at such a young age. This was a common thing for me, and I would have multiple instances similar to this. Upon realizing now that I’ve been a trans man my entire life, everything just clicked. It feels like I’ve finally been able to discover myself, and who I really am deep down inside. After all, no cis person would ever do the things I did, as well as the things I do today. No cis person would feel the things I do about certain topics/situations everyday, or think so much about their own gender. <br/><br/>
I was also invested in queer relationships and problems, even when I was a child. I often made a lot of my own original characters (whether it was based on video games, or just the random stories I made up in my head), and a lot of them tended to be in same-sex relationships. I would draw two boys holding hands, kissing, being in love. Even though I didn’t know the words for it yet, my own thoughts, feelings, and experiences were on complete display. It didn’t matter that it was a same-sex couple as opposed to a heterosexual one. Love is love, after all, why would anybody want to take away such a raw, genuine emotion from somebody else? <br/><br/>
LGBTQ+ related things would only become more and more important to me as time went on, as I began to truly think for myself and who I was. These things would eventually sink deeply into my other passions: art, character creation, and storytelling. These passions have become very important to me, so important that I strive to do something with them one day, like making a comic with my best friend/lover. I hope that by making comics, I could share these hardships I’ve gone through, show what it’s like to those who don’t know, and reach out to those who have gone through the same, possibly inspiring them. <br/><br/>
Even though I have been subjected to bigotry from some of the peers around me, and even some of my teachers, I have had a lot of good experiences here at Timpanogos. I have met a lot of other students and teachers who can relate to what I’ve been through, and allow me to be whoever I want to be without judgment. This is a real experience, not just for me, but for multiple other queer people around the world. No matter what, we’ll always be here, and our feelings will never be erased. After all, the world isn’t entirely in black and white, but in multiple shades of color.
Ignorance is something that is taught, not something you’re born with, and that ignorance kills. That’s why if we’re able to join together as a community, and learn to accept each other’s differences without prejudice, maybe the world could become a little less bleak, and more of a safe space for all.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
        {!modalOpenFive ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenFive(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Anonymous </h1>
              <p className='text-mainText'>
              She smiles in front of everyone, like the perfect student she is. Oh how I envy her.
<br/><br/>
She is loved by everyone, her kindness, her witty remarks, the jokes that everyone finds funny. Oh how I wish I could be her.
<br/><br/>
I live behind her like a shadow. Sure, I can be funny, smart, and kind. But unfortunately, I'm not her.
<br/><br/>
I am still finding myself, I'm awkward, I interrupt, I don't make everyone happy.
<br/><br/>
When I look in the mirror, all I see is her. That perfect child who keeps the peace, but I'm not her.
<br/><br/>
"Why do I feel like I’m not who I should be? Why can't I just be her? The girl everyone wants me to be? Why couldn't I have been normal and happy like her?" I ask myself.
<br/><br/>
Sometimes I step out of her shadow. I want to be my own person. Soon after this happens the world begins to crumble.
<br/><br/>
She notices what I have done. So she turns around and asks, "What are you doing? Why are you ruining this for me?"
<br/><br/>
"..."
<br/><br/>
"Don't do this! You can live an almost perfect life if you just stop messing things up!"
<br/><br/>
"I want to be me."
<br/><br/>
"Huh? Look what you're doing! You're ruining everything I built you up to be! This isn't about what you want it is about what is best for you!"
<br/><br/>
"I'm not happy. I don't want to live as you," I say to her as my eyes wander around the crumbling earth.
<br/><br/>
"You'll never make it in life without me. How can anyone love you if you show them the real you?" she asks, grasping for anything to keep me in line.
<br/><br/>
"I don't know."
<br/><br/>
"Then who are you? You can’t just change your body. I am you, so why can’t you be the same as me?"
<br/><br/>
"I can change if I want to. Who is to tell me what I can and cannot do? You can’t decide that for me and neither can anyone else. Why do people like us have to be treated so horribly in this world when there are many others receiving plastic surgeries without discrimination to do just that: change their bodies to make themselves look how they want."
<br/><br/>
"But why in the world would you sacrifice the perfect life for your selfish wants? This will cost you more."
<br/><br/>
"I want to feel happy in my life, it might mean more to me than my distorted view of a 'perfect life' that I thought was perfect. I have never been happy ever since I hid behind you," I say simply, “This isn’t my perfect life, it never was. This time I will shape my own life, and it doesn't have to be perfect.”
<br/><br/>
"You can't be serious. You know how much work I put into this? And now you're throwing it all away just because you want to express yourself?"
<br/><br/>
"Don't forget, I made you. I created you to conceal myself so I wouldn’t have to face the truth. And now I'm finally tired of hiding behind you after all these years. I am me and you can't take that away from me. You are only a husk of what I thought the perfect image of me should be." The world splits more, the sky begins to fall all around.
<br/><br/>
"But who are you?!"
<br/><br/>
"That's for me to discover for myself, but I am not you and I am not her."
<br/><br/>
"You only care about yourself, you are selfish, you could've been perfect."
<br/><br/>
After she tells me those words, she begins to fade away; the "perfect image" of me gone. A weight lifts from me as I finally see the sun around the broken earth and feel its warmth bask in my face. I have friends who wouldn't leave me no matter who I decide to be, and they are family to me. It's not perfect, and that's alright for me.
<br/><br/>
I don't exactly know who I am. I could be him, I could be them, but I do know one thing for certain: I am myself and no one can take that away from me. And that's ok.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
        {!modalOpenSix ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenSix(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Anonymous </h1>
              <p className='text-mainText'>
              How everyone has anxieties and fears but we all have friends to help.
<br/><br/>
Being able to express yourself and being able to show your true self and how you can find people that have the same interests.
<br/><br/>
Being able to be yourself and being accepted.

              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
  	    <div className='pt-12 lg:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
  	      <div>
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>LGBTQ+ Stories</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
          </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl p-5'>
  	        "A unifying experience that helped me explore community and my own identity. Plus I got pizza. :)"
  	        <br/> <br/>
  	      	<span className='font-bold'>- Fynn Pedersen</span>
  	      </p>
  	    </div>
  	    <div>
          <div className='lg:p-20 p-10'>
            <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenTwo(s => !s)} className={img} src={morganSmith} alt="avaFolkman"/>
            <img onClick={() => setModalOpenFive(s => !s)} className={img} src={unknown3} alt="avaFolkman"/>
          </div>
							<div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenThree(s => !s)} className={img} src={finneanSmith} alt="avaFolkman"/>
            <img className={imgNoHover} src={ivyAnderton} alt="avaFolkman"/>
            <img onClick={() => setModalOpen(s => !s)} className={img} src={natalieOtis} alt="natalieOtis"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenFour(s => !s)} className={img} src={unknown1} alt="avaFolkman"/>
            <img onClick={() => setModalOpenSix(s => !s)} className={img} src={unknown2} alt="avaFolkman"/>
          </div>
            </div>
    		  </div>
  	  </div>
    </motion.div>
  );
}

export default LGBTQ;