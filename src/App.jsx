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
  );
};

export default App;
