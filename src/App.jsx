import { useRef } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio } from "./components";
import EventGallery from './components/EventGallery';
import GithubShowcase from './components/GithubShowcase';

const App = () => {
  const wrapperRef = useRef(null);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <main className="wrapper" ref={wrapperRef}>
          <section id="hero" className="z-40">
            <Hero scrollContainer={wrapperRef} />
          </section>
          <section id="experience" className="relative z-30 bg-primary">
            <Experience />
          </section>
          <section id="portfolio" className="relative z-30 bg-primary">
            <Portfolio />
          </section>
          <section id="events" className="relative z-30 bg-primary">
            <EventGallery />
          </section>
          <section id="contact" className="relative z-30 bg-primary">
            <Contact />
          </section>
        </main>
      </div>
    </BrowserRouter>

  );
};

export default App;