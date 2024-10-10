<<<<<<< HEAD
import React, { useRef, useEffect } from 'react'; // Include useEffect from React
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import EventGallery from './components/EventGallery';
import GithubShowcase from './components/GithubShowcase';
import { initGA, logPageView } from "./analytics";
import ProgressEggHunt from "./components/ProgressEggHunt";

const App = () => {
  const wrapperRef = useRef(null);

  // useEffect to initialize Google Analytics and log the initial page view
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <main className="wrapper" ref={wrapperRef}>
          <section id="hero" className="z-40">
            <Hero scrollContainer={wrapperRef} />
          </section>
          <section id="experience" className="relative z-30 mb-8 bg-primary">
            <Experience />
          </section>
          <section id="github" className="relative z-30 mb-8 bg-primary">
            <Portfolio />
          </section>
          <section id="events" className="relative z-30 mb-8 bg-primary">
            <EventGallery />
          </section>
          <section id="contact" className="relative z-30 bg-primary">
            <Contact />
          </section>
          <section id="eggHunt" className="relative z-30 bg-primary">
            <ProgressEggHunt />
          </section>
        </main>
      </div>
    </BrowserRouter>
=======
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import EventGallery from './components/EventGallery';
import { EggProvider } from "./context/EggContext";
import SaaSProducts from "./components/SaaSProducts";
import GithubShowcase from "./components/GithubShowcase";
import ProgressEggHunt from "./components/ProgressEggHunt";

const App = () => {
  return (
    <EggProvider> {/* Wrap the entire app inside EggProvider */}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />
          <main className="wrapper">
            <section id="hero" className="z-40">
              <Hero />
            </section>
            <section id="experience" className="relative z-30 h-auto mb-8 bg-primary">
              <Experience />
            </section>
            <section id="saas" className="relative z-30 mb-8 bg-primary">
              <SaaSProducts />
            </section>
            <section id="github" className="relative z-30 mb-8 bg-primary">
              <GithubShowcase />
            </section>
            <section id="events" className="relative z-30 mb-8 bg-primary">
              <EventGallery />
            </section>
            <section id="contact" className="relative z-30 bg-primary">
              <Contact />
            </section>
            <section id="eggHunt" className="relative z-30 bg-primary">
              <ProgressEggHunt />
            </section>
          </main>
        </div>
      </BrowserRouter>
    </EggProvider>
>>>>>>> bb6a0dd74c11c106e698c01b4e8d425e1c99472d
  );
};

export default App;
