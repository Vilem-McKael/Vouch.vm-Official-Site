// Libraries and Methods
import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Style
import './App.css';

// Components
import NavBar from '../../components/NavBar/NavBar'
import LandingPage from '../Landing/LandingPage';
import SupportPage from '../Support/SupportPage';
import GalleryPage from '../Gallery/GalleryPage';
import AboutPage from '../About/AboutPage';

function App() {

  return (
    <main className='App'>
      <NavBar/>
      <div className='pt-[120px]'>
        <Routes>
          <Route path='/*' element={<LandingPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/gallery' element={<GalleryPage />} />
          <Route path='/support' element={<SupportPage />} />
        </Routes>
      </div>
    </main>
    
  )
}

export default App
