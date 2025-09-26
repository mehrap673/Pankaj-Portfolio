import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDownIcon, SparklesIcon, CodeIcon, PaletteIcon } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hero-blob animate-blob w-96 h-96 top-20 left-20" />
        <div className="hero-blob animate-blob w-80 h-80 bottom-20 right-20" style={{ animationDelay: '5s' }} />
        <div className="hero-blob animate-blob w-64 h-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '10s' }} />
        
        {/* Interactive Mouse Blob */}
        <div 
          ref={blobRef}
          className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl transition-transform duration-300 ease-out"
          style={{ position: 'absolute', top: '50%', left: '50%' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <Badge variant="secondary" className="glass-card px-4 py-2 text-sm font-medium">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Available for exciting projects
              </Badge>
              
              <div className="space-y-4">
                <h1 className="text-heading-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Creative Developer & 
                  <span className="block">Digital Artist</span>
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  I craft exceptional digital experiences that blend cutting-edge technology 
                  with stunning design. Let's build something extraordinary together.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToProjects}
                className="btn-magnetic animate-magnetic"
              >
                View My Work
              </button>
              
              <Button 
                variant="outline" 
                className="glass-card hover:glass-dark animate-magnetic px-6 py-3"
                onClick={scrollToContact}
              >
                Let's Talk
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-sm text-muted-foreground">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                  25+
                </div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Portrait */}
          <div className="relative flex items-center justify-center animate-blur-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Portrait Container */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="w-full h-full rounded-full bg-background"></div>
                </div>
                
                {/* Portrait Content */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white">
                  <div className="text-center space-y-4">
                    <div className="text-8xl font-bold">JP</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                        <CodeIcon className="w-4 h-4" />
                        <span>Full Stack</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm opacity-90">
                        <PaletteIcon className="w-4 h-4" />
                        <span>UI/UX Design</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce text-2xl">
                  👋
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center animate-pulse text-xl">
                  ✨
                </div>
              </div>
              
              {/* Skill Pills */}
              <div className="absolute -left-8 top-1/4 glass-card px-3 py-2 rounded-full text-sm font-medium animate-fade-up" style={{ animationDelay: '0.6s' }}>
                React
              </div>
              <div className="absolute -right-8 top-1/3 glass-card px-3 py-2 rounded-full text-sm font-medium animate-fade-up" style={{ animationDelay: '0.9s' }}>
                TypeScript
              </div>
              <div className="absolute -left-12 bottom-1/3 glass-card px-3 py-2 rounded-full text-sm font-medium animate-fade-up" style={{ animationDelay: '1.2s' }}>
                Node.js
              </div>
              <div className="absolute -right-12 bottom-1/4 glass-card px-3 py-2 rounded-full text-sm font-medium animate-fade-up" style={{ animationDelay: '1.5s' }}>
                Design
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDownIcon className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};