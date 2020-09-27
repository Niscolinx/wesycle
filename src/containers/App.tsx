import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Features from '../components/Features'
import Realtors from '../components/Realtors'
import StoryContent from '../components/StoryContent'
import StoryPictures from '../components/StoryPictures'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'
import Homes from '../components/Homes'

function App() {
    return <div className='app'>
      <div className="section-sidebar">
        <Sidebar/>
      </div>
      <div className="section-header">
        <Header/>
      </div>
    
      <div className="section-realtors">
        <Realtors/>
      </div>
      <div className="section-features">
        <Features/>
      </div>
      <div className="section-story__pictures">
        <StoryPictures/>
      </div>
      <div className="section-story__content">
        <StoryContent/>
      </div>
      <div className="section-homes">
        <Homes />
      </div>
      <div className="section-gallery">
        <Gallery/>
      </div>
      <div className="section-footer">
        <Footer/>
      </div>

    </div>
}

export default App
