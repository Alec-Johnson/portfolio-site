import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

import { Footer, Header } from './components';
import { HomePage, ErrorPage, WorkPage, ProjectDetailsPage } from './pages';
import ScrollToTop from './utilities/ScrollToTop';

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
        <ScrollToTop />
        <div className="site-wrapper">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/project-:id" element={<ProjectDetailsPage />} />
              {/*<Route path="/about" element={<AboutPage />} /> */}
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
