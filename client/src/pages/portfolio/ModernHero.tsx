import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, Code, Palette } from "lucide-react";


export const ModernHero = (): JSX.Element => {
  const blobRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return;


      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;


      const x = (clientX / innerWidth) * 100;
      const y = (clientY / innerHeight) * 100;


      blobRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };


    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };


  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <style>{`
        @keyframes shapeSync {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 40% 70% 60% 30% / 50% 40% 60% 70%;
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          75% {
            border-radius: 70% 30% 40% 60% / 40% 70% 50% 30%;
          }
        }
        
        @keyframes gradientRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      
        
        @keyframes typewriterRole {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
        
        @keyframes typewriterDescription {
          0% {
            width: 0;
          }
          100% {
            width: 100%;
          }
        }
     
        
        @keyframes cursorBlink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        
        
        
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .shape-sync {
          animation: shapeSync 8s ease-in-out infinite;
        }
        
        .gradient-spin {
          animation: gradientRotate 10s linear infinite;
        }
        
        @keyframes typewriter {
          from { width: 0ch; }
          to { width: 12ch; }
        }


        .typewriter {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          width: 0ch;
          animation: typewriter 2s steps(12, end) forwards;
        }
        
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }
        
        .btn-magnetic {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%);
          color: white;
          border: none;
          padding: 12px 32px;
          border-radius: 50px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 32px rgba(99, 102, 241, 0.3);
        }
        
        .btn-magnetic:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.4);
        }
        
        .profile-morph {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          animation: shapeSync 8s ease-in-out infinite;
        }
        
        .hero-blob {
          position: absolute;
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 50%;
          filter: blur(80px);
        }
        
        .animate-blob {
          animation: float 6s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          .hero-blob {
            filter: blur(60px);
          }
          
          .btn-magnetic {
            padding: 10px 24px;
            font-size: 14px;
          }
          
          .typewriter {
            animation: typewriter 2s steps(12, end) forwards;
          }
        }
        
        @media (max-width: 640px) {
          .glass-card {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>


      <section className="relative min-h-screen pt-24 md:pt-16 lg:pt-4 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:bg-gradient-to-br dark:from-black dark:via-gray-950 dark:to-slate-950">
        {/* Animated Background Blobs - Darker and More Prominent */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="hero-blob animate-blob w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] -top-10 -left-10 sm:-top-20 sm:-left-20" />
          <div className="hero-blob animate-blob w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 -bottom-10 -right-10 sm:-bottom-20 sm:-right-20" style={{ animationDelay: '5s' }} />
          <div className="hero-blob animate-blob w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '10s' }} />


          {/* Interactive Mouse Blob - Hidden on mobile */}
          <div
            ref={blobRef}
            className="hidden lg:block w-32 h-32 xl:w-40 xl:h-40 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-3xl transition-transform duration-300 ease-out"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          />
        </div>


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content - Enhanced Design */}
            <div className="space-y-6 sm:space-y-7 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-5 sm:space-y-6">
                <Badge variant="secondary" className="glass-card px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center fade-up">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Available for exciting projects
                </Badge>


                <div className="space-y-4 sm:space-y-5">
                  {/* Enhanced Name Design - No Underline */}
                  <div className="fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="text-xs sm:text-sm md:text-base text-gray-400 dark:text-gray-500 font-medium mb-2">
                      Hello, I'm
                    </div>
                    <div className="relative inline-block">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 typewriter">
                        Pankaj Mehra
                      </h2>
                    </div>
                  </div>



                  <div className="fade-up" style={{ animationDelay: '0.4s' }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                      <span className="block text-white dark:text-gray-100">Full-Stack</span>
                      <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Developer
                      </span>
                      <span className="block text-white dark:text-gray-100">& Designer</span>
                    </h1>
                  </div>



                  <div className="fade-up" style={{ animationDelay: '0.6s' }}>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0">
                     I create modern web applications with the MERN stack, crafting seamless functionality and visually stunning interfaces. Using AI tools to enhance productivity and design, I turn ideas into fully functional, creative projects.
                    </p>
                  </div>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start fade-up px-4 sm:px-0" style={{ animationDelay: '0.8s' }}>
                <button
                  onClick={scrollToProjects}
                  className="btn-magnetic w-full sm:w-auto"
                >
                  View My Work
                </button>


                <Button
                  variant="outline"
                  className="glass-card text-white hover:bg-white/20 dark:hover:bg-white/10 border-white/30 px-6 py-3 w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  onClick={scrollToContact}
                >
                  Let's Talk
                </Button>
              </div>



            </div>


            {/* Right Content - Responsive Portrait with Reduced Sizes */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 fade-up px-4 sm:px-0" style={{ animationDelay: '0.3s' }}>
              <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-sm">
                {/* Main Portrait Container - Responsive Sizes with Square Shape */}
                <div className="w-full aspect-square relative float mx-auto">
                  {/* Animated Ring - Square with gradient border */}
                  <div className="absolute inset-0 p-1 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 gradient-spin">
                    <div className="w-full h-full relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-950 dark:bg-black"></div>
                  </div>


                  {/* Portrait Content - Square */}
                  <div className="absolute inset-1 sm:inset-3 md:inset-4 overflow-hidden rounded-xl sm:rounded-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-500 relative rounded-xl sm:rounded-2xl">
                      <img
                        src="/Pankaj.jpg"
                        alt="Pankaj Mehra - Developer Portrait"
                        className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                      />


                      {/* Skills Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-3 sm:pb-4 md:pb-6 rounded-xl sm:rounded-2xl">
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/95">
                            <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Full Stack</span>
                          </div>
                          <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-white/95">
                            <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>UI/UX Design</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Skill Pills - Responsive Positioning */}
                <div className="hidden md:block">
                  <div className="absolute -left-4 lg:-left-8 top-1/4 glass-card text-white px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up shadow-lg" style={{ animationDelay: '0.6s' }}>
                    React
                  </div>
                  <div className="absolute -right-4 lg:-right-8 top-1/3 glass-card text-white px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up shadow-lg" style={{ animationDelay: '0.9s' }}>
                    JavaScript
                  </div>
                  <div className="absolute -left-6 lg:-left-12 bottom-1/3 glass-card text-white px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up shadow-lg" style={{ animationDelay: '1.2s' }}>
                    Node.js
                  </div>
                  <div className="absolute -right-6 lg:-right-12 bottom-1/4 glass-card text-white px-2.5 py-1.5 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up shadow-lg" style={{ animationDelay: '1.5s' }}>
                    Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
