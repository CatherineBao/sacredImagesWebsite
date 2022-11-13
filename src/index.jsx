import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import './index.css'
import React from 'react'

import App from './App'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ReturnToTop from './components/ReturnToTop'

import Updates from './pages/Updates'
import Stories from './pages/Stories'
import SubmitStories from './pages/SubmitStories'
import Gallery from './pages/Gallery'
import DesignProcess from './pages/DesignProcess'

import APSpanish from './pages/story-sections/APSpanish'
import APArt from './pages/story-sections/APArt'
import English from './pages/story-sections/English'
import Humanities from './pages/story-sections/Humanities'
import LGBTQ from './pages/story-sections/LGBTQ+'
import Sociology from './pages/story-sections/Sociology'

const container = document.getElementById("root");


const root = createRoot(container);
library.add(fas)

root.render(
	<BrowserRouter>
    <ScrollToTop />
  	<div className='bg-background'>
      <Nav />
        <div>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/updates' element={<Updates />} />
						<Route path='/stories' element={<Stories />} />
						<Route path='/submit-stories' element={<SubmitStories />} />
						<Route path='/gallery' element={<Gallery />} />
						<Route path='/design-process' element={<DesignProcess />} />
						
						<Route path='/stories/ap-spanish' element={<APSpanish />} />
						<Route path='/stories/ap-art' element={<APArt />} />
						<Route path='/stories/english' element={<English />} />
						<Route path='/stories/humanities' element={<Humanities />} />
            <Route path='/stories/sociology' element={<Sociology />} />
						<Route path='/stories/lgbtq' element={<LGBTQ />} />
          </Routes>
        </div>
			<ReturnToTop />
  		<Footer />
    </div>
  </BrowserRouter>
);
	