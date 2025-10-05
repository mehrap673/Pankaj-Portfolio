import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa: string;
  highlights: string[];
}

// Hook: Detect if element is in viewport
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Unobserve after first trigger
        }
      },
      options
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, isInView };
};

export const Education = (): JSX.Element => {
  const educationData: EducationEntry[] = [
    {
      degree: "Bachelor of Technology ",
      institution: "Sage University Indore",
      location: "Indore, India",
      duration: "2022 - 2026",
      gpa: "8.37/10.0",
      highlights: [
        "Specialized in Computer Science Engineering",
        "Final Year Project on All About Indore city guide app",
      ],
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "RRMB Gujrati High School",
      location: "Indore, India",
      duration: "2020 - 2022",
      gpa: "71%",
      highlights: ["Science Stream - PCM with Computer Science"],
    },
    {
      degree: "Secondary School Education (10th Grade)",
      institution: "New Life High Secondary School",
      location: "Indore, India",
      duration: "2007 - 2020",
      gpa: "79%",
      highlights: [
        "First Division with Distinction",
        "Class Monitor for 2 consecutive years",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-black dark:via-gray-950 dark:to-slate-950 py-12 md:py-16 lg:py-20"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl top-10 left-10 sm:top-20 sm:left-20 animate-pulse"></div>
        <div
          className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl bottom-10 right-10 sm:bottom-20 sm:right-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            Education
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 dark:text-gray-400 max-w-2xl mx-auto px-4">
            My educational journey that shaped my technical foundation and passion
            for technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="w-full max-w-6xl mx-auto">
          {/* Mobile & Tablet Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-4 sm:left-6 top-0 w-0.5 sm:w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
              {educationData.map((edu, index) => {
                const { ref, isInView } = useInView({ threshold: 0.1 });
                return (
                  <div
                    key={index}
                    ref={ref}
                    className={`relative flex items-start mb-6 sm:mb-8 pl-12 sm:pl-16 transition-all duration-700 ease-out ${
                      isInView
                        ? "opacity-100 translate-y-0 animate-fade-up"
                        : "opacity-0 translate-y-5"
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="absolute left-2.5 sm:left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full border-2 sm:border-4 border-gray-900 dark:border-black shadow-lg shadow-purple-500/50 flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <Card className="bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-700/50 dark:border-gray-600/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02]">
                        <CardContent className="p-3 sm:p-4 md:p-5">
                          <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white dark:text-gray-100 mb-1 sm:mb-2 leading-tight">
                                {edu.degree}
                              </h3>
                              <p className="text-xs sm:text-sm md:text-base text-purple-400 dark:text-purple-300 mb-1 font-semibold">
                                {edu.institution}
                              </p>
                              <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 mb-1 sm:mb-2">
                                {edu.location}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-3">
                            <h4 className="text-xs sm:text-sm md:text-base font-semibold text-white dark:text-gray-100 flex items-center gap-1.5 sm:gap-2">
                              <Award className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                              Key Highlights
                            </h4>
                            <ul className="space-y-1">
                              {edu.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-300 dark:text-gray-400"
                                >
                                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1 sm:gap-1.5 bg-purple-500/20 dark:bg-purple-500/20 text-purple-300 dark:text-purple-200 border border-purple-500/30 text-xs"
                            >
                              <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                              <span>{edu.duration}</span>
                            </Badge>
                            <div className="text-center p-1.5 sm:p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 dark:from-purple-500/20 dark:to-cyan-500/20 rounded-lg border border-purple-500/30 dark:border-purple-400/30">
                              <div className="text-sm sm:text-base font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {edu.gpa}
                              </div>
                              <div className="text-xs text-gray-300 dark:text-gray-400">Score</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Desktop Horizontal Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full"></div>
              {educationData.map((edu, index) => {
                const { ref, isInView } = useInView({ threshold: 0.1 });
                return (
                  <div
                    key={index}
                    className={`relative flex items-center mb-6 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div
                      ref={ref}
                      style={{ animationDelay: `${index * 150}ms` }}
                      className={`w-[42%] ${index % 2 === 0 ? "pr-6" : "pl-6"} transition-all duration-700 ease-out ${
                        isInView
                          ? index % 2 === 0
                            ? "animate-slide-in-left opacity-100"
                            : "animate-slide-in-right opacity-100"
                          : "opacity-0 translate-x-[-30px]"
                      }`}
                    >
                      <Card className="bg-gray-800/90 dark:bg-gray-900/90 backdrop-blur-sm border-gray-700/50 dark:border-gray-600/50 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/95 dark:hover:bg-gray-900/95">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-2.5 mb-2.5">
                            <div className="w-9 h-9 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                              <GraduationCap className="w-4.5 h-4.5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="text-base font-bold text-white dark:text-gray-100 mb-1.5 leading-tight">
                                {edu.degree}
                              </h3>
                              <p className="text-sm text-purple-400 dark:text-purple-300 mb-1 font-semibold">
                                {edu.institution}
                              </p>
                              <p className="text-xs text-gray-300 dark:text-gray-400 mb-1.5">
                                {edu.location}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-1.5 mb-2.5">
                            <h4 className="text-sm font-semibold text-white dark:text-gray-100 flex items-center gap-1.5">
                              <Award className="w-3.5 h-3.5 text-cyan-400" />
                              Key Highlights
                            </h4>
                            <ul className="space-y-0.5">
                              {edu.highlights.map((highlight, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-1.5 text-xs text-gray-300 dark:text-gray-400"
                                >
                                  <span className="w-1 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mt-1.5 flex-shrink-0" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex items-center justify-between">
                            <Badge
                              variant="secondary"
                              className="flex items-center gap-1 bg-purple-500/20 dark:bg-purple-500/20 text-purple-300 dark:text-purple-200 border border-purple-500/30 text-xs"
                            >
                              <Calendar className="w-2.5 h-2.5" />
                              <span>{edu.duration}</span>
                            </Badge>
                            <div className="text-center p-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 dark:from-purple-500/20 dark:to-cyan-500/20 rounded-lg border border-purple-500/30 dark:border-purple-400/30">
                              <div className="text-sm font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                {edu.gpa}
                              </div>
                              <div className="text-[10px] text-gray-300 dark:text-gray-400">Score</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full border-3 border-gray-900 dark:border-black z-10 shadow-lg shadow-purple-500/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className={`w-[42%] ${index % 2 === 0 ? "pl-6" : "pr-6"}`}>
                      <div className="text-center">
                        <span className="inline-block px-3 py-1.5 bg-purple-500/10 backdrop-blur-sm border border-purple-500/30 dark:border-purple-400/30 text-purple-300 dark:text-purple-200 rounded-full text-sm font-bold shadow-md">
                          {edu.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
