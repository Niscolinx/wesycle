import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Features from './components/Features'
import Realtors from './components/Realtors'
import StoryContent from './components/StoryContent'
import StoryPictures from './components/StoryPictures'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
    return <div className='app'>
      <div className="sidebar">
        <Sidebar/>
      </div>
      <div className="header">
        <Header/>
      </div>
      <div className="realtors">
        <Realtors/>
      </div>
      <div className="features">
        <Features/>
      </div>
      <div className="storyPictures">
        <StoryPictures/>
      </div>
      <div className="storyContent">
        <StoryContent/>
      </div>
      <div className="gallery">
        <Gallery/>
      </div>
      <div className="footer">
        <Footer/>
      </div>

    </div>
}

export default App
