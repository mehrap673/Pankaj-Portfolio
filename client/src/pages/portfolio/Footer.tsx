import React from "react";
import { Badge } from "@/components/ui/badge";
import { HeartIcon, LinkedinIcon, GithubIcon, TwitterIcon, MailIcon } from "lucide-react";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedinIcon className="w-5 h-5" />,
      href: "https://linkedin.com/in/johnportfolio",
      label: "LinkedIn"
    },
    {
      icon: <GithubIcon className="w-5 h-5" />,
      href: "https://github.com/johnportfolio",
      label: "GitHub"
    },
    {
      icon: <TwitterIcon className="w-5 h-5" />,
      href: "https://twitter.com/johnportfolio",
      label: "Twitter"
    },
    {
      icon: <MailIcon className="w-5 h-5" />,
      href: "mailto:john@johnportfolio.dev",
      label: "Email"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-6 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm border-t border-gray-200/50 dark:border-gray-700/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand/Logo Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">JP</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">John Portfolio</div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Full Stack Developer passionate about creating beautiful, functional, and user-friendly applications. 
              Always excited to take on new challenges and collaborate on innovative projects.
            </p>
            <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
              🟢 Available for projects
            </Badge>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Let's connect and discuss opportunities
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm">
              <span>&copy; {currentYear} John Portfolio. Made with</span>
              <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & TailwindCSS</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <button
                onClick={scrollToTop}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Back to Top ↑
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Built with section */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Built with React, TypeScript, TailwindCSS, and deployed on Replit
            </p>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-purple-500/5 rounded-full blur-2xl" />
    </footer>
  );
};