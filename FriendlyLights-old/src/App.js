import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ProdDetail from "./components/ProdDetail";
import FAQ from "./components/FAQ";
import TestimonialCarousel from "./components/TestimonialCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
        <div className="container-fluid p-0">
          <Header/>
        </div>
        <div className="container-xxl">
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
          <PortfolioSection />
          <ProdDetail />
          <TestimonialCarousel />
          <FAQ />
          <ContactSection />
          <Footer />
        </div>
    </>
  );
}

export default App;