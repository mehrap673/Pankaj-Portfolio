import React from "react";
import { ModernHeader } from "./portfolio/ModernHeader";
import { ModernHero } from "./portfolio/ModernHero";
import { ModernProjects } from "./portfolio/ModernProjects";
import { ModernContact } from "./portfolio/ModernContact";
import { Skills } from "./portfolio/Skills";
import { Footer } from "./portfolio/Footer";
import { Education } from "./portfolio/Education";
import { Certificates } from "./portfolio/Certificates";
import { Achievements } from "./portfolio/Achievements";
import { About } from "./portfolio/About";
import FatLines from "./portfolio/FatLines";
import { LeetCode } from "./portfolio/LeetCode";

export const PortfolioPage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-background transition-colors duration-300">
      <ModernHeader />
      <ModernHero />
      <About />
      <ModernProjects />
      <Education />
      <Skills />
      <LeetCode />
      <Certificates />
      <ModernContact />
      <Footer />
    </div>
  );
};