import React from "react"
import {useState} from 'react';
import { motion, AnimatePresence } from "framer-motion"

import abbieBrockbank from '../../img/story-img/ap-art/abbie-brockbank-rect.png'
import alexaLedezma from '../../img/story-img/ap-art/alexa-ledezma-rect.png'
import avaFolkman from '../../img/story-img/ap-art/ava-folkman-rect.png'
import brennaBronson from '../../img/story-img/ap-art/brenna-bronson-rect.png'
import brinleyGardner from '../../img/story-img/ap-art/brinley-gardner-rect.png'
import kaylaBjorn from '../../img/story-img/ap-art/kayla-bjorn-rect.png'
import morganSmith from '../../img/story-img/ap-art/morgan-smith-rect.png'
import natalieOtis from '../../img/story-img/ap-art/natalie-otis-rect.png'
import pageBlumer from '../../img/story-img/ap-art/page-blumer-rect.png'
import unknown1 from '../../img/story-img/ap-art/unknown-1-ap-art-rect.png'
import unknown2 from '../../img/story-img/ap-art/unknown-2-ap-art-rect.png'
import unknown3 from '../../img/story-img/ap-art/unknown-3-ap-art-rect.png'
import unknown4 from '../../img/story-img/ap-art/unknown-4-ap-art-rect.png'

function APArt() {
  const img = 'rounded-2xl lg:w-1/4 w-full mb-10 hover:drop-shadow-lg hover:cursor-pointer border-2 border-background hover:border-text duration-300'
  const modal = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  const modalBlock = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"
  
  const [modalOpenAbbie, setModalOpenAbbie] = useState(true)
  const [modalOpenAlexa, setModalOpenAlexa] = useState(true)
  const [modalOpenAva, setModalOpenAva] = useState(true)
  const [modalOpenBrenna, setModalOpenBrenna] = useState(true)
  const [modalOpenBrinley, setModalOpenBrinley] = useState(true)
  const [modalOpenKayla, setModalOpenKayla] = useState(true)
  const [modalOpenMorgan, setModalOpenMorgan] = useState(true)
  const [modalOpenNatalie, setModalOpenNatalie] = useState(true)
  const [modalOpenPaige, setModalOpenPaige] = useState(true)
  const [modalOpenUnknown1, setModalOpenUnknown1] = useState(true)
  const [modalOpenUnknown2, setModalOpenUnknown2] = useState(true)
  const [modalOpenUnknown3, setModalOpenUnknown3] = useState(true)
  const [modalOpenUnknown4, setModalOpenUnknown4] = useState(true)
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
       {!modalOpenUnknown4 ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown4(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>anonymous</h1>
              <p className='text-mainText'>
                I am an item in a shoebox stuffed deep in the closet. The kind of relic once adored, until the day its purpose is no longer served. Like a stuffed animal from childhood, a birthday card from a grandparent, or even a favorite childhood storybook. These items hold fond memories. An unbreakable bond. Too valuable to throw away. I am irreplaceable. So I’m tucked away. Forgotten. My value never diminishes, but my purpose does. I’m unneeded, yet I stick around; to comfort when sad, to reminisce on the good times, and to keep in case I'm suddenly needed again. I exist, but at what cost? Never repurposed, never passed on to someone else to enjoy. I can’t leave on my own; this shoebox is my home.

              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenUnknown3 ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown3(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>anonymous</h1>
              <p className='text-mainText'>
                Reflecting back on when I was younger, I realize that I was different from the rest of my peers from the very beginning. Despite not really thinking too deeply about identity, gender, and sexuality as a kid, I always sort of knew deep down that I wasn’t what most people considered the norm. <br/><br/>
I remember back when I would play video games on my computer or my brother’s console, I would always portray myself as a cisgendered boy. It was what made me feel the happiest and most comfortable for myself, it gave me absolute euphoria. However, when people eventually found out that I was “a girl”, or when my brothers exposed me to my online friends, I couldn’t help but feel a sinking feeling in my heart. It felt like my happiness was taken away from me, and that I couldn’t be my true, authentic self, even at such a young age. This was a common thing for me, and I would have multiple instances similar to this. Upon realizing now that I’ve been a trans man my entire life, everything just clicked. It feels like I’ve finally been able to discover myself, and who I really am deep down inside. After all, no cis person would ever do the things I did, as well as the things I do today. No cis person would feel the things I do about certain topics/situations everyday, or think so much about their own gender.<br/><br/>
I was also invested in queer relationships and problems, even when I was a child. I often made a lot of my own original characters (whether it was based on video games, or just the random stories I made up in my head), and a lot of them tended to be in same-sex relationships. I would draw two boys holding hands, kissing, being in love. Even though I didn’t know the words for it yet, my own thoughts, feelings, and experiences were on complete display. It didn’t matter that it was a same-sex couple as opposed to a heterosexual one. Love is love, after all, why would anybody want to take away such a raw, genuine emotion from somebody else?<br/><br/>
LGBTQ+ related things would only become more and more important to me as time went on, as I began to truly think for myself and who I was. These things would eventually sink deeply into my other passions: art, character creation, and storytelling. These passions have become very important to me, so important that I strive to do something with them one day, like making a comic with my best friend/lover. I hope that by making comics, I could share these hardships I’ve gone through, show what it’s like to those who don’t know, and reach out to those who have gone through the same, possibly inspiring them.<br/><br/>
Even though I have been subjected to bigotry from some of the peers around me, and even some of my teachers, I have had a lot of good experiences here at Timpanogos. I have met a lot of other students and teachers who can relate to what I’ve been through, and allow me to be whoever I want to be without judgment. This is a real experience, not just for me, but for multiple other queer people around the world. No matter what, we’ll always be here, and our feelings will never be erased. After all, the world isn’t entirely in black and white, but in multiple shades of color.
Ignorance is something that is taught, not something you’re born with, and that ignorance kills. That’s why if we’re able to join together as a community, and learn to accept each other’s differences without prejudice, maybe the world could become a little less bleak, and more of a safe space for all.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenUnknown2 ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown2(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>anonymous</h1>
              <p className='text-mainText'>
                I feel confined by people’s assumptions and expectations of me <br/> 
I feel the need to people please <br/> 
I feel that I’m not good enough for anyone to see <br/> 
These feelings never cease <br/> 
I feel the pressure of my parents, my teachers, and me <br/> 
I feel anxious, even in bed <br/> 
I feel judged by so many around me<br/> 
Is it real or is it just in my head? <br/> 
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenUnknown1 ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenUnknown1(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>anonymous</h1>
              <p className='text-mainText'>
                My story begins with a deep passion for creation. When I was a child, it was the only way I could let myself be happy. There were many issues among my home and I was only a kid. If I couldn’t care for what was happening in the real world, I’d make my own fake one to escape. This began with toys, nothing made sense but it wasn’t supposed to. This is where my real life began, where my passion began, my passion for creation of stories and of art.<br/><br/>
You begin to learn more about yourself as you write characters. I am a sworn believer that whatever character you write has a fragment of yourself in them. I’ve learnt a lot about myself through one of the protagonists, Eden.<br/><br/>
He hides his emotions from view from those he cares for, emotions are the enemy to him, it’s one of his biggest struggles. I feel that way at times. If life begins to become too much, it’s as if I can’t feel anything, I simply exist with no purpose. But I’m happy to say it happens less than before. Eden too will develop as a character as time goes on.<br/><br/>
I never expected to be so proud of something that nobody knows the name of. I do it for myself, that’s what matters the most.<br/><br/>
I was born to create. Create I will.<br/><br/>
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenPaige ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenPaige(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Paige Blumer</h1>
              <p className='text-mainText'>
             My name is Paige Blumer, and this is my story. I am the oldest of six, with two loving parents, a loyal dog, a partial snake, and eight oblivious fish. I am a member of The Church of Jesus Christ of Latter-day Saints, and I’m a junior at THS. I am an aspiring artist, astronomer, mountain biker, and biologist. I love to read, sing, learn and discover. <br/><br/>
I’ve lived in Provo up until fifth grade, when I moved to Mesa, Arizona. It was difficult because I was leaving behind close cousins and friends, but it allowed me to meet new people and build a good life. It was also a culture shock. Growing up, all I knew were kids who never said any bad words, never talked about crude things, and always went to church with me. When I moved to Mesa, I learned that not everyone grows up the same way. It exposed me to many different lifestyles and choices, which gave me a greater capacity for understanding and empathy with others. Over time, I grew to love Mesa. I found good friends and did well in all my classes. My little sister was born there, and she became one of my best friends, though we’re 12 years apart. I was happy for a long time.<br/><br/>
However, like with all things, happiness came with tragedy. An older girl in my ward, who I didn’t know well, committed suicide. It was a huge heartbreak for the entire community. She was so loving and energetic and full of life. I didn’t know her well, but it was at that moment that I realized that there’s a form of sadness that can drive someone to do that to themself. It scared me. <br/><br/>
Years later, another girl died, but this time I knew her well. She was a friend of mine through sixth grade. Super funny and sarcastic, and brilliant. It broke me for a while, wondering if I had stayed closer to her through seventh grade, would she had died? Would I have been there for her? I know now that there wasn’t much I could’ve done. <br/><br/>
Slowly, I let go of my old friends, as we were drifting apart anyway, and gained new ones. These friends helped me get through my first two years of high school. We would laugh together, cry together, and simply spend time together. They became my sisters, if not in blood. So much of who I am came from them - my sense of humor, my interests, my communication. We were bound so tightly, nothing could break us.<br/><br/>
And then came, what I consider to be, the worst day of my life.<br/><br/>
Leading up to it, my family got a call that my cousin, who was in California at Marine boot camp, went missing while out motorcycling. We earnestly prayed for him to be found and well. But God needed him. My cousin had crashed, and he didn’t survive the impact.<br/><br/>
This was a devastating blow to my family. He was in the prime of his life, with so much promise ahead of him. His younger siblings were left without their older brother to look up to. My little sister had to learn at a young age what grief meant. We still miss him.<br/><br/>
On January 22nd, 2021, while I was at school, my parents sent me a text to be ready for the funeral services, and that we had a lot to talk about. They picked me up from school early. It was on the drive to the cemetery when they told me more bad news - one of my closest family members, who I consider a best friend, attempted suicide the night before. He was in the hospital, alive and well, but he wouldn’t be coming home for a long time. I barely had time to process this when we arrived at the cemetery.<br/><br/>
Meanwhile, before all this, my dad was out of a job. He had been for six months, and my parents were getting desperate. COVID-19 had caused the job market to go haywire. We’d lost all hope. It was on the car ride home from the cemetery that my dad got a call from BYU, notifying him that they wished to hire him.<br/><br/>
My life changed forever in 24 hours.<br/><br/>
Within five months, my family packed up, sold our home, said our goodbyes, and left for Orem, Utah. I took the time in June to paint a mural, get a job, and generally settle in. I’m still working on making friends and having good grades, but I know that I will be okay.<br/><br/>
I know that I will see my friend and my cousin again. I know that I am blessed to have a wonderful family and so many opportunities to grow and improve. I know that my family member will be better, even if it’s a long and painstaking process. I know that what I went through was awful and difficult, but it’s made me stronger. Yeah, it sounds cliche, but it’s true. And the community I’ve come to is wonderful, and I can’t wait to see what more it has to offer. <br/><br/>
Thank you for making this place home.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenNatalie ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenNatalie(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Natalie Otis</h1>
              <p className='text-mainText'>
             To tell the truth, I could go on and on and on about everything that has happened in my life, but instead, I'm going to pick key components that shaped who I am. Before I do that, however, let's start with the basics.
Hi! I'm Natalie Otis, right now I am 16 and a junior at Timpanogos. I've lived in Orem all my life, and  I'm a member of the church of Jesus Christ of Latter-day Saints(Mormons). <br/><br/>
A big key moment of my life, besides the day I was born, was having to make a choice be the better friend or stand idle and do nothing. In junior high, a friend of mine was struggling with their mental health, so much so to the point, that they were harming themselves, and attempting to end their life. As I noticed the signs of this, as they wore baggy clothes distancing themselves from others, shutting people out, I chose to step in and help. A few days after seeing the first few marks on them, I told my parents scared out of my mind that I was going to lose this friend because I looked out for them. As I told this friend what I told my parents who told their parents, there was a little backlash, but as time went on I was received with gratitude. The gratitude didn't matter but, knowing that I helped someone in general, is enough.<br/><br/>
A big moment more recently, Is finally accepting who I am. More so the fact that I am Bisexual. I've tackled with this a lot, questioning if I was just attracted to the opposite gender or both. This is the first time I've come out publicly for anyone to see, so please don't pester me, I'm scared enough. Unfortunately, as much as I want everyone to greet this with open arms, some turn away and shame. I'm not naming names, but there are those around me that do the latter. This Is important for me, but I also want to put it out there that there are allies and safe spaces for those that are a part of the LGBTQ+ community, to be themselves.<br/><br/>
Some people may wonder why are you a member then? Let me tell you this, it's the relationship that I have with God that I go to church for, not the people or doctrine.  Having that relationship with him, has played a significant role in my life, he has been my comfort when no one's there, he has been the peace that I need in my life. If you have questions about this feel free to start up a conversation with a member, most will converse with you. 
All in all, being a part of this religion is a way for me to serve and bring about good in the world, besides having that relationship with God. One of my biggest joys is being able to serve others, seeing what my efforts are due is a reward in itself. <br/><br/>
Of course, there is more to my life, but for now, this is what I wanted to share about my life. 
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenMorgan ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenMorgan(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Morgan Smith</h1>
              <p className='text-mainText'>
              My story starts later in my life. I was in 7th grade where I began to experiment with my sexual and gender identity. No one in my family at that time had been open about it so I had to do it secretly without anyone guiding me. And since my family was LDS, I would search on google "is being gay a sin?" "Does LDS accept gay people?" <br/><br/>
Then in 8th grade I came out to my mom as a trans man and that I didn't want to go to church anymore. That was some of the worst months of my life. I still had to go to church and wasn't able to express my identity.<br/><br/>
 It took me until October of the next year to get a gender affirming haircut. Then in the middle of 10th grade I forced myself back to being female presenting because I felt no one would love me if I was trans. But by then my parents were a little bit more accepting and understanding of the LGBTQ+ community. <br/><br/>
But this hassle in my identity led my brother to be able to come out and unlike when I was his age, he's able to express and be who he truly is. This makes my heart so full because I felt like I paved the way so he could live his life from where I couldn't. And just last year I came back out to my parents as a lesbian and in September out to my mom as nonbinary (she/they). And I love my parents more than ever now and I can finally express and talk about who I love whenever without awkward silence.

              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenKayla ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenKayla(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Kayla Bjorn</h1>
              <p className='text-mainText'>
             I have always loved stories. I love reading them, and I’ve been making up stories for as long as I can remember. When I was two I got a dollhouse for Christmas. I spent hours creating lives for the dolls, complete with joys, sorrows, worries, and excitements. When I was five my mom helped me write a story and I illustrated it. Now I love to write, and challenge myself to tell stories through my artwork. I am changing and growing up, but I’ll never lose my creativity or my love for stories.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenBrinley ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenBrinley(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Brinley Gardner</h1>
              <p className='text-mainText'>
             Growing up I couldn’t care less what I looked like. Pink shorts and a blue button up shirt was good enough for me. As I got older that became less and less true. I remember in 7th grade I used to always wear my hair in a pair of braids. I wore my hair like that everyday because that’s what I was comfortable with. But one day after my PE class I was talking with a girl who I had PE and CTE with. All I remember from that conversation was that she asked me why I always wore my hair in braids and that I looked ugly while I ran because of it. I was crushed. Although her words truly cut deep, what hurt more is that my friend standing beside me said nothing. I know it’s an awkward situation to be in but that comment made me stop wearing my hair in braids and was the start of my low self esteem. Later in my junior high experience I made what I thought was another friend. Although we weren’t close it was nice to have someone to eat lunch with. What started out as a nice break from classes turned into the opposite. Every time we sat down to eat she would constantly tell me how thin my hair was. Although it probably was an innocent comment for her, it made me even more self conscious about my hair for the next couple of years. This made my experience in junior high super rocky. 
<br/><br/>
In my last year at my junior high I felt a friendship with a girl was coming to an end. Although at times she could be a great friend, there were times that she made me feel the worst about myself. I always wore a mask around her. Although it was a figurative mask it hid more than any tangible mask ever could. Whenever I sliver of my true self peaked through she would always tell me that I was so weird, and it seemed like she didn’t want to be my friend anymore. It wasn’t all bad, there were times that were great and there were some friends that were amazing, but I never felt like I could be myself.
<br/><br/>
I entered high school hopeless and extremely self conscious. Then I met some of the best people in my life. I met friends that made me feel I could truly be myself. They laughed when I made jokes. They shared the same interests as me. They acted how I always feared to act. Like themselves. I continue to struggle with my self esteem, but I know I will always have those close to me and that they will always be there.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenBrenna ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenBrenna(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Brenna Bronson</h1>
              <p className='text-mainText'>
             I ultimately want to be known as a person who was kind, strong, faithful, and a loyal friend. I want to bring kindness and unconditional love into this world. Times are hard and we need to bring hope and peace to everyone we come in contact with. My life has been filled with a ton of ups and downs just like everyone else. I have been extremely blessed with a loving and supportive family. I started playing soccer when I was 4 years old and because of that sport I experienced some of my highest ups like going to national tournaments, traveling all over the country, offers and scholarships and winning. But I also experienced many downs like multiple injuries including my knee, foot, head etc. I am grateful for the downs because they make me appreciate the highs even more. I’ve grown up in a very religious household and still remain very faithful in my religion. My purpose in life is love and serve the way God and Jesus do. More recently I have experienced more downs. When I first found out about my tumor my mindset got the best of me. Trying to manage school, work, and friends all while dealing with depression and anxiety, felt almost unbearable. As I continued to push forward, I have discovered more purpose in my life. I can see now how all of these experiences shaped my life and my perspective. I realized the importance of self-growth and love, as well as trusting in God’s plan and timing for my life. <br/><br/>
Simple Steps by Brenna Bronson<br/><br/>
I started with no steps,<br/>
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
Hopefully you made the most of your few given steps.<br/>
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenAva ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAva(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Ava Folkman </h1>
                <div className='flex justify-center flex-col p-10 xl:px-52'>
  	      <div className='relative pb-[56.25%] pt-25 h-0'>
  	      <iframe
  	        className='absolute top-0 left-0 w-full h-full z-0'
  	        src="https://www.youtube.com/embed/2RyUqg-45wU"
  	        frameBorder="0"
  	        allowfullscreen="allowfullscreen"
  	        mozallowfullscreen="mozallowfullscreen" 
  	        msallowfullscreen="msallowfullscreen" 
  	        oallowfullscreen="oallowfullscreen" 
  	        webkitallowfullscreen="webkitallowfullscreen"
  	      />
  	      </div>
  	    </div>
              <p className='text-mainText'>
             I choreographed this piece last year about something that is very important in my life. The contemporary dance is entitled, “Imperfect Perfection” and is simply what I have tried to strive for in my life. Living with OCD and/or that unattainable desire to be perfect in everything you do really comes back to haunt you as life moves on and responsibilities get more difficult. I have spent my entire childhood preparing for my graduation; I never thought of school as a time to play or explore myself, it was simply a time to get things done. Now, as that is true in some cases, I truly missed out on youth exploration and the joy of laughing off my little mess ups. This mindset ties into my life as a Ballerina and the strict, technical view of the world- “this way is right and just the manner in which it must be accomplished.” Yet, life gets harder as you grow old and you learn that you cannot be perfect. Not even close! This recent year I have been trying to turn myself around and gain more out of life. A 4.0 GPA and flawless worksheets does not define my worth or even my future. I can grow into the person I want to become without sacrificing who I am today. I chose the messy style of contemporary art to move in a way that escapes the Classical Ballet box. The detail of fingers, touch, and isolation shown in my choreography gives the audience a glimpse of living with my sensitive, detailed brain. As a dancer breaks off, it shows how the outside world views me; striving for those straight lines and pointed toes. The rest of the dancers show the pain and stress that goes on in order to come across as put together. I am getting more familiar with the idea that no one has it all figured out and that your outside self can feel what is going on inside without fear of being flawed, because “perfection can be imperfect.”

              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenAlexa ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAlexa(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>Alexa Ledezma</h1>
              <p className='text-mainText'>
            “Alexa’s Treasure” <br/><br/>
For as long as I can remember, I have always felt fascinated with the captivation I felt through an enthralling story. Luckily, stories live in all sorts of distinct places. You can catch a glimpse of a story through song, illustration, literature, photograph, or spoken word from an inspiring person, the possibilities are endless. When I was a child I absolutely adored the enchantment I felt while hearing fictitious fables that had a nice and happy ending. I will always look back fondly at the times I shared with my Papi, who would tell me bedtime stories before I drifted to sleep. The tales he told ranged from silly to heart-touching. Eventually, when he ran out of stories to read, he started pulling them from his imagination. And surprisingly, what he came up with was actually very enjoyable. To me, that deemed him a spectacular storyteller. <br/><br/>
Perhaps it was the way he expressed the emotions of the characters in the story, or maybe it was simply the imagination of a child running free that made the narrative exciting. Now I realize what makes an excellent story is the characters I could relate to and the conflicts and tension they were faced with. The adventure, the highs, and lows, surprises and mysteries, all of these elements fabricated a great story. I’ve come to the conclusion that real human life experiences are some of the most intriguing tales. The soul of an individual undergoes many diverse events. A person holds on to deep memories varying from wonderful, filled with warmth and bliss to painful and agonizing moments. Now that I have grown up, I have learned to appreciate and revel in the raw and authentic experiences of human life. I find a sense of affinity in uncovering a story to make sense of the human experience as I attempt to fathom the meanings of life. <br/><br/>
I remember every time my grandpa, Abue Papa, would tell me bits and pieces of his own story, about his life growing up in Mexico. I would hear of the difficult circumstances he was faced with living and growing up in poverty. He told me about how he never talked to his father since he left him when he was born. My Abue told me I should never complain that I didn’t have enough clothes because he only had but one pair of pants that were too big for him, as a child. He grew up selling treats and knick-knacks at a street post in Mexico City. The street post was also the home in which he lived. All of these sentiments among others, stuck with me, especially because the first time I heard this I couldn’t believe my ears. How was it possible? My grandpa married, raised a nice family, and is a joyful and lovely person. His life turned out to be very admirable, giving his children the opportunity to live a childhood he didn’t get to have. His children, including my dad, then immigrated to the United States for an even better life. And now I am one of many who have the opportunity to continue this story. <br/><br/>
Not only did my grandpa inspire me in an astonishing way, so have the rest of my large family. Every single member of my family has reached me or left me with something valuable at some point in my life. A thought that often lingers and hurts me is that my Mami’s parents still live in Mexico along with the rest of her family, and I rarely get to see them. However, when I have had the chance to spend precious moments with them they have influenced me in beautiful ways and I cherish those memories and keep them close to my heart. I will never forget learning wise lessons from my stern grandpa Tito and the warmth I felt whenever I baked Mexican desserts with my grandma Coca. Thankfully, we still keep in touch and I love them with my whole heart. All of my cousins were and still are a significant part of me. We shared so much together and there is so much delight in sharing this culture and devotion with them. <br/><br/>
My soul has been shaped into the person I am today because of my experiences and the differing personalities I have come across throughout my life, including encouraging teachers and my friends and their unique spirits. My little family made up of my parents and my younger brother is priceless to me. They define my world and I know they have got my back no matter what. Of course, we sometimes have contention and we each fight our own battles constantly, nonetheless, we grow as we venture through life together. I know my parents support and want what’s best for me, and I am very blessed to have that. I sincerely hope both of them trust me to make my own decisions and go my own way eventually. <br/><br/>
I recognize those who have influenced me in positive ways, yet I have also learned that I need to discover my identity personally. At this stage in my life, I feel the strong urge  to figure out what I truly believe, hope for, who I am, and what I want from this earthly experience. That can often feel like an immense amount of pressure as you could probably guess. So many dynamic parts of one whole lie within me. I have this resilient side to me that has been kicking, punching, and training for eight years through the practice of taekwondo. I also have a completely opposing aspect of my life that has a hungry passion for creating, specifically illustrating. The most fulfilling feeling I know of is exploring the vastness of my consciousness through creating. Among other hobbies and adorations, I just want to keep discovering.<br/><br/>
As I navigate through life, I have found it interesting that I know of moments in my life that I wish to forget, yet others I long to remember forever. I have thought about why I want to degrade some memories so desperately and I realized that the reason lies within my perspective. I have come to terms with the fact that my experiences, whether positive or negative, are a reality. All I can do is either accept circumstances or deny and dwell on them. If I accept the reality, I could turn my affliction into an opportunity. I am slowly accepting that there are some things that are out of my control, and that’s okay. What helps me is focusing on the present, living in the time it takes to blink. That is one of the best lessons I’ve learned that I attempt to incorporate into my life. All of this to say, life is a treasure, and I am thrilled to have it and to discover a valuable way to spend it.
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
      {!modalOpenAbbie ?
          <div className='w-screen h-full'>
              <div className={modal} onClick={() => setModalOpenAbbie(s => !s)}>
                <div className='flex items-center justify-center mt-20'>
              <div className={modalBlock}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Abbie Brockbank </h1>
              <p className='text-mainText'>
             Charcoal Tulips <br/> <br/>
               “It starts with a circle, here i'll show you” my grandma gracefully sketched out a circle, and I watched in amazement as it transformed into a tulip, sketched out in charcoal. I tried following suit, grasping the pencil firmly while pushing hard into the paper. I thought I was doing well, though the picture before me looked quite different from the elegant flora on my grandmother's sheet. <br/><br/>
“I can't do it,” I sighed as my 8 year old mind lost patience with my project.<br/><br/>
“Try sketching like this” she grabbed my hand and helped me lightly sketch the tulip form onto the sheet before me. I gasped in admiration, and reached up to hug my grandma with a huge smile on my face. <br/><br/>
“Thank you for showing me!” I yelled, running off to show my parents.<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – –<br/><br/>
“Happy 10th Birthday Abbie!” my family yelled as I blew out the candles on my cake and went to open my presents. I went for the biggest one first, my grandma looked at me with a smile in her eyes, and her deep dimples came out as I jumped for joy to open her gift. Unwrapping the crinkling paper before me, I was left with an elegant and beautiful cart, filled with art supplies and the inscription Abbies Art Cart. I was stoked, as I went through the other presents, I kept looking back to my new art cart, excited to create new drawings. <br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
I stared at my screen, instagram posts flashed before my eyes, telling me I couldn't draw, “She can do it, why can't I?” tears streamed down my face, as I flipped through my art, “how could I ever get to their level?” I tore one of my drawings up and threw it in the trash as a light knock sounded and my door slowly opened. My grandma slowly came and sat by my side, I laid my head on her lap as she tickled my face lightly, and she sang to me “you are my sunshine” as I fell asleep to the soft lull of her voice. <br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
“Kiddos settle down!” my grandma laughed, as she grabbed her paint brush to show the next part of the lesson. The 12 children sitting before us quieted as she resumed her teaching. I walked around the room, helping each child.<br/><br/>
“Wow, your tulips are looking beautiful!” I smiled, revisiting when I was their age, now here I stood helping teach the very same lessons I had to learn many years ago. <br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
“Good luck tomorrow, you're going to do amazing” I said to my grandma, hugging her tightly before I started to run upstairs. I turned back “I’ll come and visit you, what's your favorite snack and i’ll bring it to you!” she laughed as she whispered,<br/><br/>
“Lemon drops are my favorite” I ran upstairs with a smile, as she left to pack for her surgery in the morning. <br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – 
Thoughts of slurpees filled my brain as I was excited to go to 7/11 later that day for free treats, though I had hours until it was time to leave. <br/><br/>
“We have to run to an emergency work meeting” my parents called to me as they left out the door. “You have Charlie, we’ll be back soon.” We sat to watch a movie as I pulled out my sketchbook to draw. <br/><br/>
“I wonder what that was about?”<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
My phone buzzes in my pocket, a text, I was too busy to read.<br/><br/>
“I'll check it later”<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
I returned from getting slurpees, and  realized something was off, I ran to the sink to grab a cup of water, and my mother led me upstairs. I sat down at the foot of their bed,<br/><br/>
“Grandma didn’t make it” The world stilled as I sat in shock until heaving sobs overtook me. My family sat around crying, as I burrowed deeper into sorrow.<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
I woke up the next day, on my 14th birthday, “These are for you” my dad said as he sat down boxes of various sizes in my room. I numbly turned to him and pulled the tape off of one, as I opened the lid, I saw it was filled with art supplies that once belonged to her. <br/><br/>
“I can't do it,” I whispered as tears welled up, “I’ll never live up to her legacy, in her artistic talents or in life.” my dad sat down by me and began to lightly tickle my face. The sobs seemed to never end.<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
“Look at what I made!” I smiled as I brought forth a colored pencil tiger, I couldn't believe I had free-handedly sketched this. I ran around showing everyone, ending up in the basement, ready to show grandma, and it came back to me in a tidal wave as I broke down again.<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
“I think I should take AP Art,” I said to my mom as we drove home, “I feel like I'm ready to start deeper learning into my art.” <br/><br/>
“I love that idea, I think it'll be good for you as well.”<br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
Enveloping my canvas with paint, I smile at My art teacher. <br/><br/>
“Do these shadows look okay?” I say eagerly, waiting for the response. Working on studying light had been hard to do alone, so I was grateful for any input I could get.<br/><br/>
“These are almost perfect, however there is this spot.” She showed me how I could better my shadows, and I moved to adjust my technique, seeking to learn and grow. <br/><br/>
– – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – – <br/><br/>
“It starts with a circle, here i'll show you” I say to my brother, as I show him a charcoal tulip, thinking back on when grandma used to teach me lessons about life, and art. 
              </p>
              </div>
            </div>
              </div>
            </div>
          : null}
     <div className='bg-background text-text'>
      <div className='pt-14 md:pt-20 bg-bars text-text flex justify-between items-center lg:px-20 px-10 p-3 uppercase'>
        <div>
           <h1 className='text-xl lg:text-3xl font-arvo font-thin'>AP Art Stories</h1>
          <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on images for stories</p>
        </div>
        <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl md:pt-5'>
          "This project was something very enjoyable because of people coming together and giving it their all and being able to show off their talents."
          <br/>
        	<span className='font-bold'>- Morgan V. Smith</span>
        </p>
      </div>
       <div className=''>
         <div className='lg:p-20 p-10'>
  			  <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenAbbie(s => !s)} className={img} src={abbieBrockbank} alt="avaFolkman"/>
            <img onClick={() => setModalOpenAlexa(s => !s)} className={img} src={alexaLedezma} alt="avaFolkman"/>
            <img onClick={() => setModalOpenAva(s => !s)} className={img} src={avaFolkman} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenBrenna(s => !s)} className={img} src={brennaBronson} alt="avaFolkman"/>
            <img onClick={() => setModalOpenBrinley(s => !s)} className={img} src={brinleyGardner} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenKayla(s => !s)} className={img} src={kaylaBjorn} alt="avaFolkman"/>
            <img onClick={() => setModalOpenMorgan(s => !s)} className={img} src={morganSmith} alt="avaFolkman"/>
            <img onClick={() => setModalOpenNatalie(s => !s)} className={img} src={natalieOtis} alt="avaFolkman"/>
          </div>
          <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenPaige(s => !s)} className={img} src={pageBlumer} alt="avaFolkman"/>
            <img onClick={() => setModalOpenUnknown1(s => !s)} className={img} src={unknown1} alt="avaFolkman"/>
          </div>
           <div className='lg:flex gap-10 items-center justify-center'>
            <img onClick={() => setModalOpenUnknown2(s => !s)} className={img} src={unknown2} alt="avaFolkman"/>
            <img onClick={() => setModalOpenUnknown3(s => !s)} className={img} src={unknown3} alt="avaFolkman"/>
            <img onClick={() => setModalOpenUnknown4(s => !s)} className={img} src={unknown4} alt="avaFolkman"/>
          </div>
  		  </div>
       </div>
      </div>
    </motion.div>
  );
}

export default APArt;