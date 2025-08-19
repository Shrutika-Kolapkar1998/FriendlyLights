import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import PortfolioSection from "./components/PortfolioSection";




function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <ProjectsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;