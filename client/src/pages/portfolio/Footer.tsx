import React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpIcon,
  CodeIcon
} from "lucide-react";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "LeetCode", href: "#leetcode" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-8 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-950 dark:to-slate-950 border-t border-gray-800/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/30">
              <CodeIcon className="w-5 h-5 text-white" />
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Pankaj Mehra
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Back to Top Button */}
          <Button 
            onClick={scrollToTop}
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105"
          >
            <ArrowUpIcon className="w-4 h-4" />
          </Button>
        </div>

        {/* Divider */}
        <div className="relative h-px mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-gray-500">
            &copy; {currentYear} <span className="text-gray-400">Pankaj Mehra</span> • All rights reserved
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Crafted with</span>
            {["React", "TypeScript", "Tailwind"].map((tech, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 bg-gray-800/60 rounded border border-gray-700/50 text-gray-400 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Gradient Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-purple-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyan-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
};
