import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, CalendarIcon } from "lucide-react";

export const About = (): JSX.Element => {
  return (
    <section id="about" className="pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - PNG Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block">
              <img 
                src="/Coding-boy.png" 
                alt="John Portfolio"
                className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-6">
            {/* Header Section */}
            {/*<div className="text-center lg:text-left">
               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                John Portfolio
              </h1>
              
              <p className="text-xl text-blue-600 dark:text-blue-400 mb-6">
                Full Stack Developer & UI/UX Designer
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Badge variant="secondary" className="flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  San Francisco, CA
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  5+ Years Experience
                </Badge>
              </div>
            </div> */}

            {/* About Content Card */}
            <Card className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    I'm a passionate Full Stack Developer with over 5 years of experience creating 
                    beautiful and functional web applications. I specialize in React, Node.js, and 
                    modern web technologies.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to 
                    open source projects, or enjoying the great outdoors. I believe in writing clean, 
                    maintainable code and creating user experiences that delight.
                  </p>
                  <p>
                    I'm always excited to take on new challenges and collaborate with amazing teams 
                    to build something great together.
                  </p>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                  </div>
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">25+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Happy Clients</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};