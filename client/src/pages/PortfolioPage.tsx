import React from "react";
import { ModernHeader } from "./portfolio/ModernHeader";
import { ModernHero } from "./portfolio/ModernHero";
import { ModernProjects } from "./portfolio/ModernProjects";
import { ModernContact } from "./portfolio/ModernContact";
import { About } from "./portfolio/About";
import { Skills } from "./portfolio/Skills";
import { Footer } from "./portfolio/Footer";

export const PortfolioPage = (): JSX.Element => {
  return (
    <div className="relative w-full min-h-screen bg-background transition-colors duration-300">
      <ModernHeader />
      <ModernHero />
      <ModernProjects />
      <About />
      <Skills />
      <ModernContact />
      <Footer />
    </div>
  );
};