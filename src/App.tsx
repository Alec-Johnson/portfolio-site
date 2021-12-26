import React, { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';

function App() {
  useEffect(() => {
    // AOS library initialization, more info: https://github.com/michalsnik/aos
    Aos.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);
  return (
  <HelmetProvider>
    <BrowserRouter>
      <div className="site-wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
{/* 
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<ProjectsPage />} />
            <Route path="/project-:id" element={<SingleProjectPage />} />
            <Route path="*" element={<ErrorPage />} /> */}

          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </HelmetProvider>
  );
}

export default App;
