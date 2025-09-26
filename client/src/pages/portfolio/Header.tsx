import React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export const Header = (): JSX.Element => {
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">PM</span>
            </div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">John Portfolio</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">About</button>
            <button onClick={() => scrollToSection('education')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Education</button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Skills</button>
            <button onClick={() => scrollToSection('achievements')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Achievements</button>
            <button onClick={() => scrollToSection('certificates')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Certificates</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-full"
            >
              {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </Button>
            
            <Button variant="ghost" size="sm" className="md:hidden w-10 h-10 rounded-full">
              <MenuIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};