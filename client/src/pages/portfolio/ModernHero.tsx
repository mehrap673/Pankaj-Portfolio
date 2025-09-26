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
          to { width: 12ch; } /* exact number of characters including spaces */
        }

        .typewriter {
          display: inline-block;       /* Required for width animation */
          overflow: hidden;            /* Hide remaining text */
          white-space: nowrap;         /* Prevent wrapping */
          width: 0ch;                  /* Start hidden */
          animation: typewriter 2s steps(12, end) forwards; /* steps = characters */
        }
        
        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
        }
        
        .float {
          animation: float 3s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
          background: linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
          border-radius: 50%;
          filter: blur(40px);
        }
        
        .animate-blob {
          animation: float 6s ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          .hero-blob {
            filter: blur(20px);
          }
        }
      `}</style>

      <section className="relative min-h-screen pt-15 flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-slate-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-slate-900">
        {/* Animated Background Blobs - Responsive */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="hero-blob animate-blob w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 top-10 left-5 md:top-20 md:left-20" />
          <div className="hero-blob animate-blob w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 bottom-10 right-5 md:bottom-20 md:right-20" style={{ animationDelay: '5s' }} />
          <div className="hero-blob animate-blob w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '10s' }} />

          {/* Interactive Mouse Blob - Hidden on mobile */}
          <div
            ref={blobRef}
            className="hidden md:block w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl transition-transform duration-300 ease-out"
            style={{ position: 'absolute', top: '50%', left: '50%' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content - Enhanced Design */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <Badge variant="secondary" className="glass-card px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium inline-flex items-center fade-up">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Available for exciting projects
                </Badge>

                <div className="space-y-3 lg:space-y-4">
                  {/* Enhanced Name Design */}
                  <div className="fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium mb-1">
                      Hello, I'm
                    </div>
                    <div className="relative inline-block">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 typewriter">
                        Pankaj Mehra
                      </h2>

                      <div
                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 rounded-full transform scale-x-0"
                        style={{ animation: 'scaleX 0.8s ease-out 2s forwards' }}
                      ></div>
                    </div>
                  </div>


                  <div className="fade-up" style={{ animationDelay: '0.4s' }}>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                      <span className="block text-gray-900 dark:text-white">Creative</span>
                      <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                        Developer
                      </span>
                      <span className="block text-gray-900 dark:text-white">& Designer</span>
                    </h1>
                  </div>

                  <div className="fade-up" style={{ animationDelay: '0.6s' }}>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                      I craft exceptional digital experiences that blend cutting-edge technology
                      with stunning design. Let's build something extraordinary together.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-up" style={{ animationDelay: '0.8s' }}>
                <button
                  onClick={scrollToProjects}
                  className="btn-magnetic w-full sm:w-auto"
                >
                  View My Work
                </button>

                <Button
                  variant="outline"
                  className="glass-card hover:bg-white/20 dark:hover:bg-white/10 px-6 py-3 w-full sm:w-auto transition-all duration-300 hover:scale-105"
                  onClick={scrollToContact}
                >
                  Let's Talk
                </Button>
              </div>


            </div>

            {/* Right Content - Responsive Portrait */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                {/* Main Portrait Container - Responsive Sizes with Square Shape */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 relative float">
                  {/* Animated Ring - Square with gradient border */}
                  <div className="absolute inset-0 p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 gradient-spin">
                    <div className="w-full h-full relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900"></div>
                  </div>

                  {/* Portrait Content - Square */}
                  <div className="absolute inset-3 sm:inset-4 overflow-hidden rounded-xl">
                    <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-500 relative rounded-xl">
                      <img
                        src="/Pankaj.jpg"
                        alt="Alex Johnson - Developer Portrait"
                        className="w-full h-full object-cover rounded-xl"
                      />

                      {/* Skills Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-3 sm:pb-4 lg:pb-6 rounded-xl">
                        <div className="text-center space-y-1 sm:space-y-2">
                          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
                            <Code className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Full Stack</span>
                          </div>
                          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90">
                            <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>UI/UX Design</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Pills - Responsive Positioning */}
                <div className="hidden sm:block">
                  <div className="absolute -left-4 lg:-left-8 top-1/4 glass-card px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up" style={{ animationDelay: '0.6s' }}>
                    React
                  </div>
                  <div className="absolute -right-4 lg:-right-8 top-1/3 glass-card px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up" style={{ animationDelay: '0.9s' }}>
                    TypeScript
                  </div>
                  <div className="absolute -left-6 lg:-left-12 bottom-1/3 glass-card px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up" style={{ animationDelay: '1.2s' }}>
                    Node.js
                  </div>
                  <div className="absolute -right-6 lg:-right-12 bottom-1/4 glass-card px-2 py-1 lg:px-3 lg:py-2 rounded-full text-xs lg:text-sm font-medium fade-up" style={{ animationDelay: '1.5s' }}>
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