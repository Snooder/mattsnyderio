import React, { useRef, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Contact, Experience, Hero, Navbar, Portfolio} from "./components";
import EventGallery from "./components/EventGallery";
import GithubShowcase from "./components/GithubShowcase";
import ProgressEggHunt from "./components/ProgressEggHunt";
import { initGA, logPageView } from "./analytics";
import { EggProvider } from "./context/EggContext"; // Import EggProvider
import SaaSProducts from "./components/SaaSProducts";

const App = () => {
  const wrapperRef = useRef(null);
  const [active, setActive] = useState("hero"); // State to track the active navigation item

  // useEffect to initialize Google Analytics and log the initial page view
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);

  return (
    <EggProvider>
      {/* Wrap the whole app in EggProvider to provide context to child components */}
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar active={active} setActive={setActive}/>
          <main className="wrapper" ref={wrapperRef}>
            <section id="hero" className="z-40">
              <Hero active={active} setActive={setActive} scrollContainer={wrapperRef} />
            </section>
            <section id="experience" className="relative z-30 mb-8 bg-primary">
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
  );
};

export default App;
