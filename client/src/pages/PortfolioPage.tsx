import React from "react";
import { Header } from "./portfolio/Header";
import { About } from "./portfolio/About";
import { Education } from "./portfolio/Education";
import { Projects } from "./portfolio/Projects";
import { Skills } from "./portfolio/Skills";
import { Achievements } from "./portfolio/Achievements";
import { Certificates } from "./portfolio/Certificates";
import { Contact } from "./portfolio/Contact";
import { Footer } from "./portfolio/Footer";
import { BackgroundPattern } from "./portfolio/BackgroundPattern";

export const PortfolioPage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-white dark:bg-[#000002] overflow-hidden transition-colors duration-300">
      <BackgroundPattern />
      
      <div className="relative z-10">
        <Header />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};