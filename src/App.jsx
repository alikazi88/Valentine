import React, { Suspense } from 'react';
import ParallaxHero from './components/Hero/ParallaxHero';
import Photobooth from './components/Photobooth/Photobooth';
import LoveLetter from './components/LoveLetter/LoveLetter';
import Naughty from './components/Naughty/Naughty';
import Countdown from './components/Countdown/Countdown';
import MusicPlayer from './components/shared/MusicPlayer';
import FloatingHearts from './components/shared/FloatingHearts';
import './App.css';

function App() {
  return (
    <div className="app-main">
      <FloatingHearts count={80} />
      {/* 1. Hero Section - Keeps your perfect parallax entry */}
      <ParallaxHero />

      {/* 2. Photobooth Section - Memories strip */}
      <Photobooth />

      {/* 3. Love Letter Section - Handwritten message */}
      <LoveLetter />

      {/* 4. Countdown Challenge - Valentine's week riddles */}
      <Countdown />

      {/* 5. Naughty Section - Our secret corner */}
      <Naughty />

      {/* Global Music & Interactions */}
      <MusicPlayer />

      <footer style={{ padding: '3rem 2rem', textAlign: 'center', opacity: 0.7, backgroundColor: 'transparent' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>Always Yours, Valentine 2026</p>
      </footer>
    </div>
  );
}

export default App;
