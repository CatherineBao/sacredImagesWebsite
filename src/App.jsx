import React from "react";
import Mural from './components/mural.jsx'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"

import Epilepsy from './img/mural/3-Epilepsy.jpg';
import Hourglass from './img/mural/1-Hourglass.jpg';
import Kindness from './img/mural/2-Kindness.jpg';
import GreatHeart from './img/mural/4-GreatHeart.jpg';
import Clef from './img/mural/5-TrebleandBassClef.jpg';
import Footprint from './img/mural/6-FootprintwithSmileyFace.jpg';
import Chinese from './img/mural/7-ChineseClaw.jpg';
import NativeAmerican from './img/mural/8-NativeAmericanClawMark.jpg';
import Polynesian from './img/mural/9-PolynesianClawMark.jpg';
import Explorer from './img/mural/10-ExplorerFigure.jpg';
import Neurodiversity from './img/mural/11-Neurodiversity.jpg';
import Semicolon from './img/mural/12-Semicolon.jpg';
import ADHD from './img/mural/13-ADHD.jpg';
import LillyBegayWolf from './img/mural/14-LillyBegayWolf.jpg';
import DownSyndrome from './img/mural/15-DownSyndrome.jpg';
import PrideProgress from './img/mural/16-PrideProgress.jpg';
import SpecialEducation from './img/mural/17- SpecialEducation.jpg';
import TitanTimberwolf from './img/mural/18-TitanTimberwolf.jpg';
import SegoLily from './img/mural/19-SegoLily.jpg';
import MtTimpanogos from './img/mural/20-MtTimpanogos.jpg';
import FynnPedersen from './img/mural/21-FynnPedersen.jpg';
import NephiMatagi from './img/mural/22-NephiMatagi.jpg';
import DrewClark from './img/mural/23-DrewClark.jpg';
import CatalinaCasallas from './img/mural/24-CatalinaCasallas.jpg';
import TalanGardner from './img/mural/25-TalanGardner.jpg';
import WolfPackSchoolSpirit from './img/mural/26-WolfPackSchoolSpirit.jpg';
import Sun from './img/mural/27-Sun.jpg';
import Butterflies from './img/mural/28-Butterflies.jpg';
import Kintsugi from './img/mural/29-Kintsugi.jpg';


function App() {
const [modalOpenHourglass, setModalOpenHourglass] = useState(true)
  const [modalOpenEpilepsy, setModalOpenEpilepsy] = useState(true)
  const [modalOpenKindness, setModalOpenKindness] = useState(true)
  const [modalOpenHeart, setModalOpenHeart] = useState(true)
  const [modalOpenClef, setModalOpenClef] = useState(true)
  const [modalOpenChinese, setModalOpenChinese] = useState(true)
  const [modalOpenFootprint, setModalOpenFootprint] = useState(true)
  const [modalOpenNativeAmerican, setModalOpenNativeAmerican] = useState(true)
  const [modalOpenPolynesian, setModalOpenPolynesian] = useState(true)
  const [modalOpenExplorer, setModalOpenExplorer] = useState(true)
  const [modalOpenNeurodiversity, setModalOpenNeurodiversity] = useState(true)
  const [modalOpenSemicolon, setModalOpenSemicolon] = useState(true)
  const [modalOpenADHD, setModalOpenADHD] = useState(true)
  const [modalOpenLillyBegayWolf, setModalOpenLillyBegayWolf] = useState(true)
  const [modalOpenDownSyndrome, setModalOpenDownSyndrome] = useState(true)
  const [modalOpenPrideProgress, setModalOpenPrideProgress] = useState(true)
  const [modalOpenSpecialEducation, setModalOpenSpecialEducation] = useState(true)
  const [modalOpenTitanTimberwolf, setModalOpenTitanTimberwolf] = useState(true)
  const [modalOpenSegoLily, setModalOpenSegoLily] = useState(true)
  const [modalOpenMtTimpanogos, setModalOpenMtTimpanogos] = useState(true)
  const [modalOpenFynnPedersen, setModalOpenFynnPedersen] = useState(true)
  const [modalOpenNephiMatagi, setModalOpenNephiMatagi] = useState(true)
  const [modalOpenDrewClark, setModalOpenDrewClark] = useState(true)
  const [modalOpenCatalinaCasallas, setModalOpenCatalinaCasallas] = useState(true)
  const [modalOpenTalanGardner, setModalOpenTalanGardner] = useState(true)
  const [modalOpenWolfPackSchoolSpirit, setModalOpenWolfPackSchoolSpirit] = useState(true)
  const [modalOpenSun, setModalOpenSun] = useState(true)
  const [modalOpenButterflies, setModalOpenButterflies] = useState(true)
  const [modalOpenKintsugi, setModalOpenKintsugi] = useState(true)
  
  const nodes = 'hover:hue-rotate-90 duration-200 hover:cursor-pointer fill-accent'
  const modal = "fixed z-30 bg-background w-2/3 h-[80vh] overflow-y-auto mt-[60vh] p-10 rounded-2xl"
  const backgroundClick = "fixed z-20 bg-background/50 p-20 w-screen h-full"
  
  return (
    <motion.div
      initial={{ opacity:0 }}
      animate={{ opacity:1 }}
      exit={{ opacity:0 }}
    >
      {!modalOpenKintsugi ?
        <div >
          <div className={backgroundClick} onClick={() => setModalOpenKintsugi(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Kintsugi:</h1>
                <p className='text-mainText'> Kintsugi is a Japanese pottery technique. When a pot breaks, rather than throw it away, it is repaired with gold which makes it stronger as well as more beautiful. This symbol resonated with students as a sign of healing and that, even though we may sometimes be broken, we should not be discarded. The scars that heal our wounds make us stronger and more beautiful. 
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Kintsugi} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
        {!modalOpenButterflies ?
        <div >
          <div className={backgroundClick} onClick={() => setModalOpenButterflies(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Butterflies:</h1>
                <p className='text-mainText'> A recurring symbol in student designs is that of a butterfly. Like many of our students who represent cultures across the world, butterflies migrate from place to place. Butterflies are also a symbol of hope, growth, and change. We included the gold Monarch butterfly and the blue Morpho butterfly from the Amazon. Drawings included are Alexa Ledezma (left) and Alia Anderson (right).
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Butterflies} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenSun ?
        <div className=''>
          <div className={backgroundClick} onClick={() => setModalOpenSun(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Sun:</h1>
                <p className='text-mainText'> Many student designs had a sun rising up over Mt. Timpanogos. The sun symbolizes a new day, hope, joy, and energy. Each morning the sun rises over Mt. Timpanogos. Oftentimes in the evening, Mt. Timpanogos looks like it is on fire with gorgeous oranges, pinks, and purples as the sun sets. These beautiful moments give hope and joy each day. Alexa Ledezma drew the sun in this initial design.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Sun} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenWolfPackSchoolSpirit ?
        <div className=''>
          <div className={backgroundClick} onClick={() => setModalOpenWolfPackSchoolSpirit(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Wolf Pack School Spirit:</h1>
                <p className='text-mainText'> Although the five different portraits represent the diversity at Timpanogos High School, there is incredible unity and school spirit here. We have the most amazing Spirit Bowl anywhere. We have an incredible cheering section at sporting events, oftentimes dressing in different colors or themes to show school spirit. The silhouettes of cheering students symbolizes that we support each other, whether in athletics, arts, or academics. 
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={WolfPackSchoolSpirit} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenTalanGardner ?
        <div className=''>
          <div className={backgroundClick} onClick={() => setModalOpenTalanGardner(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Talan Gardner:</h1>
                <p className='text-mainText'> Talan is one of the kindest, most caring students at Timpanogos High School. He always makes people feel valued and welcome. Talan is also one of the few Caucasian students in Latinos in Action because he did a Portuguese immersion program throughout elementary school. Talan also wanted to share a story about having ADHD and how that represents a significant number of students here at Timpanogos. Hear Talan’s story in <a className='text-text' href='https://www.youtube.com/watch?v=rFm2rmmOUqc&feature=youtu.be' target="_blank" > this video clip</a>
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={TalanGardner} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenCatalinaCasallas ?
        <div className=''>
          <div className={backgroundClick} onClick={() => setModalOpenCatalinaCasallas(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Catalina Casallas:</h1>
                <p className='text-mainText'> Catalina is a recent immigrant to the United States, arriving just a little over a month ago from Colombia. When we visited her English class, she got very excited to share her story about her beloved home country and her new life here in the United States. She came four different days when there was no school to help share more about her story and paint the mural. She also represents the many students who have come to Timpanogos High School from different places around the country and world. Hear Cata’s story in <a className='text-text' href='https://www.youtube.com/watch?v=pzpjW7KHlNc&feature=youtu.be' target="_blank" > this video clip</a>
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={CatalinaCasallas} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenDrewClark ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenDrewClark(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Drew Clark:</h1>
                <p className='text-mainText'> Drew is a member of the presidency of Latinos in Action and has been very involved with the mural process from the start. She contributed a poem and story to our project and has spent many hours helping us paint the mural. Drew’s father is from the U.S. and her mother is from Guatemala, and she is a representative of the many students at Timpanogos with mixed heritage. Hear Drew’s story in <a className='text-text' href='https://www.youtube.com/watch?v=x0E6vM9hDZ4&feature=youtu.be' target="_blank" > this video clip</a>
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={DrewClark} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenNephiMatagi ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenNephiMatagi(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Nephi Matagi:</h1>
                <p className='text-mainText'> Nephi is an amazing athlete who plays football, lacrosse, and runs track and field. He also contributed designs to the mural representing the Polynesian community (he is of Samoan descent) here at Timpanogos High School. Hear Nephi’s story in <a className='text-text' href='https://www.youtube.com/watch?v=vef1jJuZYs4&feature=youtu.be' target="_blank" > this video clip</a>
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={NephiMatagi} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenMtTimpanogos ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenMtTimpanogos(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Mt. Timpanogos:</h1>
                <p className='text-mainText'> In nearly every design from students, the image of Mt. Timpanogos played a prominent role. The beautiful mountain is the symbol of home for so many of these students. Enjoying the outdoors and hiking in the mountains is also a favorite activity of many, many students- it’s part of the culture here. In a design session, one AP Art Student said it would be cool if the mountains could be shaped by wolves, forming a pack. Our visual artist, Dimi Macheras, ran with that idea and came up with the amazing design used in the mural, “The Strength of the Wolf is the Pack.”
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={MtTimpanogos} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenSpecialEducation ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenSpecialEducation(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Special Education:</h1>
                <p className='text-mainText'> This is another nod to our Special Education communities here at Timpanogos, whether that be Life Skills students or students who have Individualized Education Plans (IEPs) to help them be more successful in school. We also wanted to shout out to our Special Education educators, paraeducators, and aides that throughout the school.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={SpecialEducation} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenFynnPedersen ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenFynnPedersen(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Fynn Pedersen:</h1>
                <p className='text-mainText'> Fynn is an outstanding student involved in orchestra, basketball, and theater tech crew. Fynn is also a member of the LGBTQ+ community.  Hear Fynn’s story in <a className='text-text' href='https://www.youtube.com/watch?v=NSLE-c2PPjA&feature=youtu.be' target="_blank" > this video clip</a>
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={FynnPedersen} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenSegoLily ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenSegoLily(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Sego Lily:</h1>
                <p className='text-mainText'> We put in a Sego Lily as a tribute to the pioneer heritage of Utah. The pioneers of 1848–49 ate the sego lily bulb to help ward off starvation. Some bulbs were as large as walnuts, but most were the size of marbles. Many students and teachers at this school are descended from those original Utah pioneers. The design for the sego lily was drawn by Johanna Behm.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={SegoLily} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenTitanTimberwolf ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenTitanTimberwolf(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Titan T-Wolf: </h1>
                <p className='text-mainText'> Since our school was founded, our mascot has been the Timberwolves. Our mascot is named Titan. The title of this mural is, “The Strength of the Wolf is the Pack.” Some goals of this mural are to highlight individuals that make up the diversity of our school, but to also show unity; just as a pack is made up of individual wolves, but the strength lies in the unity of the pack. As we were developing ideas for the mural, we really liked Brinley Gardner’s rendering of a timberwolf as our starting point.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={TitanTimberwolf} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenPrideProgress ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenPrideProgress(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Pride Progress Flag: </h1>
                <p className='text-mainText'> In 2018 Daniel Quasar added five arrow-shaped chevrons to the six-colored Rainbow Flag, which is widely recognized as the symbol of lesbian, gay, bisexual and transgender (LGBTQ+) community. The newer Pride Progress flag includes black and brown stripes to represent marginalized LGBTQ+ communities of color, along with the colors pink, light blue and white, which are used on the Transgender Pride Flag.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={PrideProgress} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenDownSyndrome ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenDownSyndrome(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Down Syndrome:</h1>
                <p className='text-mainText'> Designer Mica May came up with the symbol of three arrows on top of each other to represent Down Syndrome. Some have tattooed this to represent “the Lucky Few.” Three is symbolic of Down Syndrome, also called trisomy 21, in which children are born with three copies of the 21st chromosome. We wanted to somehow represent not only Down Syndrome students, but all of our Life Skills students
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={DownSyndrome} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenLillyBegayWolf ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenLillyBegayWolf(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Lilly Begay Wolf:</h1>
                <p className='text-mainText'> One of our most talented senior artists this year is Lilly Begay. She has a very unique, awesome drawing style and wanted to contribute her own version of a wolf to our mural. This design appears almost camouflaged on the stalactite making it a bit of an Easter egg for the committed viewer. Here is her design.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={LillyBegayWolf} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenADHD ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenADHD(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> ADHD:</h1>
                <p className='text-mainText'> Many students at Timpanogos struggle with ADHD. In many ways, these students can be exceptionally creative and hyper-focused. However, ADHD can also cause difficulty in the traditional school setting. The butterfly echoes the infinity symbol of neurodiversity. Butterflies also became a recurring theme in our mural to symbolize hope and moving from one place to another.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={ADHD} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenSemicolon ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenSemicolon(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Semicolon for Suicide Prevention:</h1>
                <p className='text-mainText'> A semicolon is used when an author could've chosen to end their sentence, but chose not to... Just as the mark is a sign for readers to pause before continuing a sentence, participants have embraced the symbol as a reminder that their story isn't over yet—and that they should tell it. Mental health has been a huge concern for teens across the world, but especially here in Utah. We wanted to include a symbol in the beam of light indicating that we each person’s story is valuable and should never be cut short.
                </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Semicolon} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenNeurodiversity ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenNeurodiversity(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Neurodiversity:</h1>
                <p className='text-mainText'> The infinity sign is the symbol of neurodiversity. Neurodiversity describes the idea that people experience and interact with the world around them in many different ways; there is no one "right" way of thinking, learning, and behaving, and differences are not viewed as deficits. Neurodiversity can encompass many groups of people, including those with autism or Asperger’s.  When asking students if there were any students “missing” in the mural, it was identified that we should try to find a way to represent neurodiversity.  </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Neurodiversity} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenExplorer ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenExplorer(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Explorer Figure:   </h1>
                <p className='text-mainText'> This figure was originally designed by Anna Penrod. The idea is of a student venturing into the unknown, the cave cave representing the more internal, psychological and emotional domain of students. Our professional artist, Dimi Macheras, made the figure look a little more active, bravely going forward into the dark. This figure represents someone making a deliberate choice to face those things in the dark that might be scary and unknown. </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Explorer} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenPolynesian ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenPolynesian(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'> Polynesian Cultures Claw Mark:  </h1>
                <p className='text-mainText'> As we were visiting different classrooms, one student, Nephi Matagi, drew a really cool design with the three claw design at Timpanogos but with Polynesian designs. He later refined this drawing so we could add it into the mural. Nephi is of Samoan descent and included many symbolic patterns. The repeating spear pattern symbolizes the warrior, prosperity, courage, strength and providing for the family. </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Polynesian} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenNativeAmerican ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenNativeAmerican(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Native American Claw Mark: </h1>
                <p className='text-mainText'> We consulted with Alan Groves, a Hopi-Ute Artist, about a Native American design that would be more universal to represent multiple tribes. He sent multiple images, including the design we landed on, from the Shoshone-Bannock Tribe. </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={NativeAmerican} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenFootprint ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenFootprint(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Footprint with Smiley Face: </h1>
                <p className='text-mainText'> One of the AP Art Students, Mercy Thomas, created an awesome video about what she has chosen to do to spread happiness to all those around her, especially for anyone who may be considering self-harm or suicidal ideation. She draws a smiley face on her ankle every day so people can see it and smile. <a className='text-text' href='https://www.youtube.com/watch?v=t3awHi0MuUg&feature=youtu.be' target="_blank" > Check out her video!</a> </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Footprint} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenChinese ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenChinese(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Chinese Claw Mark </h1>
                <p className='text-mainText'>  We wanted to represent as many different cultures in this mural as possible. Two students who were actively involved in this mural have been Anna Liu and Catherine Bao, students of Chinese descent, who helped us identify some a Chinese pattern. These designs represent wealth, luck, and prosperity and are common motifs in clothing and decoration. Although we wish we could represent all of Asia, we chose a Chinese pattern, specifically, to recognize the efforts of Anna and Catherine.</p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Chinese} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenClef ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenClef(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Treble and Bass Clef: </h1>
                <p className='text-mainText'> Something that helps students manage their emotions and feel joy is music. Whether creating music in our school  band, orchestra, or choir, etc. or just listening to their favorite songs, music can connect people and communicate powerful emotions. It is close to the heart. The treble clef is a little easier to spot. Find the bass clef hidden in a deep blue.</p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Clef} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenEpilepsy ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenEpilepsy(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Epilepsy: </h1>
                <p className='text-mainText'> The purple ribbon represents epilepsy, which affects some of our students such as Nicolas Neumeyer.  Here is <a className='text-text' href='https://www.youtube.com/watch?v=3hkYQSwIgmA&feature=youtu.be' target="_blank" >Nico's story</a> that he wanted to share about epilepsy.</p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Epilepsy} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenKindness ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenKindness(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Kindness Symbol: </h1>
                <p className='text-mainText'> The circle of arrows around a heart is a symbol for kindness. Timpanogos has been recognized many times as “Kindest School.” </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Kindness} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenHourglass ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenHourglass(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Hourglass: </h1>
                <p className='text-mainText'> The cave represents the more internal, psychological and emotional domain of students. One of the biggest causes of anxiety and concern is TIME, and the lack thereof. In the original drawing by Anna Penrod, time was represented by clocks. Because of the cave theme, we turned it into an hourglass column cave formation. </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={Hourglass} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
      {!modalOpenHeart ?
        <div className='w-screen h-full'>
          <div className={backgroundClick} onClick={() => setModalOpenHeart(s => !s)}>
            <div className='flex items-center justify-center mt-20'>
              <div className={modal}>
                <h1 className='text-text uppercase mb-3 text-2xl'>  Great Heart of Timpanogos: </h1>
                <p className='text-mainText'> This huge stalactite is a prominent feature of Timpanogos Cave National Monument right up American Fork Canyon. This formation is made of multiple stalactites that have grown together over time. The three prominent stalactites we represented in our depiction symbolize the three different feeder schools that feed into Timpanogos: Oak Canyon Jr. High, Canyon View Jr. High, and Orem Jr. High. Also, Ms. Davis, the teacher that coordinated this project worked as a Park Ranger at Timpanogos Cave for seven years. During summers, students can volunteer in the <a className='text-text' href='https://www.nps.gov/tica/getinvolved/volunteer.htm' target="_blank" >BATS (Behind A Tour Specialist)</a> program at the Cave </p>
                <div className='p-3 mt-3 md:p-10'>
                  <img className='rounded-xl' src={GreatHeart} alt="avaFolkman" />
                </div>
              </div>
            </div>
          </div>
        </div>
        : null}
  	  <div className='bg-background text-text'>
  	    <div className='pt-12 lg:pt-24 bg-bars text-text flex justify-between items-center lg:px-20 p-3 uppercase'>
          <div>
            <h1 className='text-xl lg:text-3xl font-arvo font-thin'>Interactive Mural</h1>
            <p className='text-xs text-mainText lg:block text-right italic uppercase max-w-3xl'>Click on mural for details</p>
          </div>
  	      <p className='text-xs text-mainText hidden lg:block text-right italic uppercase max-w-3xl'>
  	        "The mural is beautiful, but the student connections have been priceless."
  	        <br/>
  	      	<span className='font-bold'>- Anna Davis</span>
  	      </p>
  	    </div>
  	    <div>
        <div className='bg-mural bg-no-repeat bg-cover bg-center bg-contain'>
        <svg xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          viewBox="0 0 10625 3440"
        >
          <g>

            <g stroke="White" stroke-width="10" fill-opacity=".5">
              <svg onClick={() => setModalOpenHourglass(s => !s)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 10625 3440">
                <circle cx="348.861" cy="1625.71" r="75.36" className={nodes}></circle>
              </svg>

              <svg onClick={() => setModalOpenKindness(s => !s)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 10625 3440">
                <circle cx="799.86" cy="1963.834" r="75.36" className={nodes}><button type="button"></button></circle>
              </svg>
              <svg onClick={() => setModalOpenEpilepsy(s => !s)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 10625 3440">
                <circle cx="107.444" cy="1772.823" r="75.36" className={nodes}></circle>
              </svg>
              <svg onClick={() => setModalOpenHeart(s => !s)} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 10625 3440">
                <circle cx="1116.222" cy="1169.944" r="75.36" className={nodes}></circle>
              </svg>

              <circle onClick={() => setModalOpenClef(s => !s)} cx="925.211" cy="596.91" r="75.36" className={nodes}></circle>

              <circle onClick={() => setModalOpenFootprint(s => !s)} cx="543.188" cy="2835.323" r="75.36" className={nodes}></circle>

              <circle onClick={() => setModalOpenChinese(s => !s)} cx="1366.924" cy="3217.345" r="75.36" className={nodes}></circle>

              <circle onClick={() => setModalOpenNativeAmerican(s => !s)} cx="1993.68" cy="3247.191" r="75.36" className={nodes}></circle>

              <circle
                onClick={() => setModalOpenPolynesian(s => !s)}
                cx="2668.188"
                cy="3229.284"
                r="75.36"
                className={nodes}
              ></circle>
              <circle
                onClick={() => setModalOpenExplorer(s => !s)}
                cx="3157.655"
                cy="1772.823"
                r="75.36"
                className={nodes}
              ></circle>
              <circle onClick={() => setModalOpenNeurodiversity(s => !s)} cx="2393.61" cy="1999.649" r="75.36" className={nodes}></circle>
              <circle onClick={() => setModalOpenSemicolon(s => !s)} cx="1951.896" cy="1325.14" r="75.36" className={nodes}></circle>
              <circle
                onClick={() => setModalOpenADHD(s => !s)}
                cx="2077.247"
                cy="1014.747"
                r="75.36"
                className={nodes}
              ></circle>
              <circle onClick={() => setModalOpenLillyBegayWolf(s => !s)} cx="1975.773" cy="322.331" r="75.36" className={nodes}></circle>
              <circle
                onClick={() => setModalOpenDownSyndrome(s => !s)}
                cx="3372.542"
                cy="1480.337"
                r="75.36"
                className={nodes}
              ></circle>
              <circle onClick={() => setModalOpenPrideProgress(s => !s)} cx="3587.43" cy="1784.761" r="75.36" className={nodes}></circle>
              <circle
                onClick={() => setModalOpenSpecialEducation(s => !s)}
                cx="3665.028"
                cy="2047.402"
                r="75.36"
                className={nodes}
              ></circle>
              <circle onClick={() => setModalOpenTitanTimberwolf(s => !s)} cx="4232.093" cy="358.146" r="75.36" className={nodes}></circle>
              <circle onClick={() => setModalOpenSegoLily(s => !s)} cx="4900.632" cy="310.393" r="75.36" className={nodes}></circle>
              <circle onClick={() => setModalOpenMtTimpanogos(s => !s)} cx="6052.668" cy="692.416" r="75.36" className={nodes}></circle>
              <circle
                onClick={() => setModalOpenFynnPedersen(s => !s)}
                cx="5157.303"
                cy="2280.197"
                r="75.36"
                className={nodes}
              ></circle>
              <circle
                onClick={() => setModalOpenNephiMatagi(s => !s)}
                cx="6183.989"
                cy="1772.823"
                r="75.36"
                className={nodes}
              ></circle>
              <circle onClick={() => setModalOpenDrewClark(s => !s)} cx="7192.23" cy="1511.043" r="75.36" className={nodes}></circle>
              <circle
                onClick={() => setModalOpenCatalinaCasallas(s => !s)}
                cx="8365.609"
                cy="1840.265"
                r="75.36"
                className={nodes}
              ></circle>
              <circle
                onClick={() => setModalOpenTalanGardner(s => !s)}
                cx="9370.157"
                cy="2169.487"
                r="75.36"
                className={nodes}
              ></circle>
              <circle
                onClick={() => setModalOpenWolfPackSchoolSpirit(s => !s)}
                cx="7926.647"
                cy="3224.685"
                r="75.36"
                className={nodes}
              ></circle>
              <circle  onClick={() => setModalOpenSun(s => !s)} cx="9927.302" cy="211.04" r="75.36" className={nodes}></circle>
              <circle onClick={() => setModalOpenButterflies(s => !s)} cx="4701.962" cy="928.574" r="75.36" className={nodes}></circle>
              <circle
                onClick={() => setModalOpenKintsugi(s => !s)}
                cx="4457.156"
                cy="1781.174"
                r="75.36"
                className={nodes}
              ></circle>
            </g>
          </g>
        </svg>
      </div>
        </div>
  	    <div className='bg-bars text-text flex justify-end items-center lg:px-20 p-3 uppercase h-10 sm:h-auto'>
  	      <p className='hidden sm:block text-xs text-right text-mainText italic uppercase max-w-3xl'>
  	      	"The teamwork and talent displayed by the students this month makes me so proud to be apart of this mural project."
  	        <br/>
  	      	<span className='font-bold'>- Dimi Macheras, 80% Studios</span>
  	      </p>
  	    </div>
  	    <h1 className='text-xl lg:text-3xl font-arvo font-thin p-3 uppercase lg:px-20 pt-10'>Documentary Video</h1>
  	    <div className='flex justify-center flex-col p-10 xl:px-52'>
  	      <div className='relative pb-[56.25%] pt-25 h-0'>
  	      <iframe
  	        className='absolute top-0 left-0 w-full h-full z-0'
  	        src='https://www.youtube.com/embed/vWzIhTEu1Q8'
  	        frameBorder="0"
  	        allowfullscreen="allowfullscreen"
  	        mozallowfullscreen="mozallowfullscreen" 
  	        msallowfullscreen="msallowfullscreen" 
  	        oallowfullscreen="oallowfullscreen" 
  	        webkitallowfullscreen="webkitallowfullscreen"
  	      />
  	      </div>
  	    </div>
  	  </div>
    </motion.div>
  );
}

export default App;