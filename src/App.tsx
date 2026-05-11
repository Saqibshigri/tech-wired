import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { CaseStudies } from "./components/CaseStudies";
import { FeaturedTools } from "./components/FeaturedTools";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <div className='min-h-screen bg-slate-950 text-white overflow-hidden'>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <FeaturedTools />
        <CaseStudies />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
