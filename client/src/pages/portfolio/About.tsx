import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

// Import your PDF from assets folder
import ResumePDF from "/Pankaj_Mehra.pdf"; // Update this path to match your actual file location

export const About = (): JSX.Element => {
  const handleEmailClick = () => {
    window.location.href = "mailto:mehrap673@gmail.com";
  };

  return (
    <section
      id="about"
      className="min-h-screen py-16 px-6 sm:px-10 lg:px-20 flex flex-col items-center justify-center "
      aria-label="About section"
    >
      <h2 className="text-heading-2 mb-6">
        About{" "}
        <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <Card className="max-w-5xl w-full bg-gradient-to-br from-purple-900/10 via-cyan-700/15 to-purple-800/20 backdrop-blur-md border border-gray-700 rounded-3xl shadow-xl p-12 relative overflow-hidden">
        {/* Animated Blobs */}
        <motion.div
          className="absolute -top-20 -left-20 w-56 h-56 bg-purple-700/20 rounded-full blur-3xl animate-pulse"
          aria-hidden="true"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-700/20 rounded-full blur-3xl animate-pulse delay-2000"
          aria-hidden="true"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        />

        <CardContent className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
          {/* Left: Profile Photo */}
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-cyan-500 ring-opacity-60 cursor-default hover:scale-105 transition-transform duration-300">
            <img
              src="AboutImg.jpg"
              alt="Pankaj Mehra"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          {/* Right: Bio and CTAs */}
          <div className="lg:w-2/3 text-left space-y-7">
            <h3 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-400 bg-clip-text">
              Hi, I'm <span className="text-white">Pankaj Mehra</span>
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              A passionate <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> from Indore, India. Currently pursuing{" "}
              <span className="text-purple-400 font-medium">B.Tech in Computer Science Engineering</span> at Sage University. I love crafting innovative web applications that balance{" "}
              <span className="text-cyan-400">user experience</span> and <span className="text-purple-400">maintainable code</span>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I specialize in the <span className="text-cyan-400 font-semibold">MERN stack</span>, building seamless frontend interfaces and robust backend systems that scale across devices.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Beyond coding, I explore new technologies, contribute to <span className="text-purple-400 font-semibold">open-source</span>, and integrate <span className="text-cyan-400">AI tools</span> into my workflow.
            </p>

            <div className="flex flex-wrap sm:flex-nowrap gap-6 mt-6">
              <Button 
                onClick={handleEmailClick}
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-3 rounded-xl shadow-lg shadow-purple-500/50 transition-transform hover:scale-105"
              >
                <Mail className="w-5 h-5" /> Get In Touch
              </Button>
              
              <a 
                href={ResumePDF} 
                download="Pankaj_Mehra_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="flex items-center gap-3 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-xl transition-transform hover:scale-105"
                >
                  <Download className="w-5 h-5" /> Download CV
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
