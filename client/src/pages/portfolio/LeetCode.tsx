import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Trophy, Target, TrendingUp, CheckCircle2, Zap, Flame } from "lucide-react";

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
          observer.disconnect();
        }
      },
      options
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, isInView };
};

export const LeetCode = (): JSX.Element => {
  const { ref: leftRef, isInView: leftInView } = useInView({ threshold: 0.2 });
  const { ref: rightRef, isInView: rightInView } = useInView({ threshold: 0.2 });

  return (
    <section id="leetcode" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Gradient Border Wrapper */}
        <div className="relative p-[2px] bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-2xl shadow-2xl animate-gradient-border">
          <Card className="bg-gradient-to-br from-purple-500/5 via-cyan-700/5 to-purple-800/5 border-0 rounded-2xl shadow-inner">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
                {/* Left Section */}
                <div ref={leftRef} className="space-y-6 sm:space-y-8">
                  <div className={`transition-all duration-800 ${leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Badge
                      variant="secondary"
                      className="mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-purple-300"
                    >
                      Problem Solving
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                      My LeetCode
                      <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Journey
                      </span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed">
                      160+ problems solved across multiple difficulty levels,
                      demonstrating strong problem-solving skills in C++ and SQL.
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                    {/* Problems */}
                    <div 
                      className={`relative p-[1px] bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl group transition-all duration-600 ${
                        leftInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: '200ms' }}
                    >
                      <div className="bg-gray-800 dark:bg-gray-950 p-4 sm:p-5 rounded-xl h-full transition-all duration-300 group-hover:bg-gray-800/80 group-hover:scale-105 overflow-hidden">
                        <Code2 className={`w-6 h-6 sm:w-8 sm:h-8 text-purple-400 mb-2 sm:mb-3 transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '300ms' }} />
                        <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '400ms' }}>
                          160+
                        </div>
                        <div className={`text-xs sm:text-sm text-gray-400 mt-1 transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '500ms' }}>Problems Solved</div>
                      </div>
                    </div>

                    {/* Active Days */}
                    <div 
                      className={`relative p-[1px] bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl group transition-all duration-600 ${
                        leftInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: '400ms' }}
                    >
                      <div className="bg-gray-800 dark:bg-gray-950 p-4 sm:p-5 rounded-xl h-full transition-all duration-300 group-hover:bg-gray-800/80 group-hover:scale-105 overflow-hidden">
                        <Target className={`w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mb-2 sm:mb-3 transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '500ms' }} />
                        <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '600ms' }}>
                          40
                        </div>
                        <div className={`text-xs sm:text-sm text-gray-400 mt-1 transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '700ms' }}>Active Days</div>
                      </div>
                    </div>

                    {/* Rank */}
                    <div 
                      className={`relative p-[1px] bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group transition-all duration-600 ${
                        leftInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: '600ms' }}
                    >
                      <div className="bg-gray-800 dark:bg-gray-950 p-4 sm:p-5 rounded-xl h-full transition-all duration-300 group-hover:bg-gray-800/80 group-hover:scale-105 overflow-hidden">
                        <TrendingUp className={`w-6 h-6 sm:w-8 sm:h-8 text-pink-400 mb-2 sm:mb-3 transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '700ms' }} />
                        <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '800ms' }}>
                          868,978
                        </div>
                        <div className={`text-xs sm:text-sm text-gray-400 mt-1 transition-all duration-700 ${
                          leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '900ms' }}>Global Rank</div>
                      </div>
                    </div>
                  </div>

                  {/* Badge with GIF */}
                  <div 
                    className={`relative p-[1px] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl transition-all duration-600 ${
                      leftInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                    style={{ transitionDelay: '800ms' }}
                  >
                    <div className="bg-gray-800 dark:bg-gray-950 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-gray-800/80 hover:scale-105 overflow-hidden">
                      <div className="flex items-center gap-3">
                        <img 
                          src="/Top_SQL_50.gif" 
                          alt="Top SQL 50 Badge" 
                          className={`w-10 h-10 sm:w-12 sm:h-12 object-contain transition-all duration-700 ${
                            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                          }`}
                          style={{ transitionDelay: '900ms' }}
                        />
                        <div>
                          <div className={`font-semibold text-yellow-400 text-sm sm:text-base transition-all duration-700 ${
                            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                          }`} style={{ transitionDelay: '1000ms' }}>Top SQL 50</div>
                          <div className={`text-xs sm:text-sm text-gray-400 transition-all duration-700 ${
                            leftInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                          }`} style={{ transitionDelay: '1100ms' }}>Achievement Badge</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section */}
                <div className="lg:pl-8 my-auto">
                  <div ref={rightRef} className="space-y-3 sm:space-y-4">
                    {/* Header */}
                    <div 
                      className={`text-center mb-4 sm:mb-6 transition-all duration-800 ${
                        rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                        Difficulty Breakdown
                      </h3>
                      <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm">
                        <Badge variant="outline" className="bg-purple-500/10 border-purple-500/50 text-purple-300 px-2 sm:px-3 py-1">
                          C++: 110
                        </Badge>
                        <Badge variant="outline" className="bg-cyan-500/10 border-cyan-500/50 text-cyan-300 px-2 sm:px-3 py-1">
                          SQL: 50
                        </Badge>
                      </div>
                    </div>

                    {/* Easy Card */}
                    <div 
                      className={`relative p-[1px] bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl group transition-all duration-800 ${
                        rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: '200ms' }}
                    >
                      <div className="bg-gray-800 dark:bg-gray-950 p-4 sm:p-6 rounded-xl h-full transition-all duration-300 group-hover:bg-gray-800/80 group-hover:scale-105 overflow-hidden">
                        <div className={`flex items-center justify-between mb-3 sm:mb-4 transition-all duration-700 ${
                          rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '300ms' }}>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <CheckCircle2 className="w-5 h-5 sm:w-7 sm:h-7 text-green-400" />
                            <span className="text-lg sm:text-xl font-bold text-green-400">Easy</span>
                          </div>
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            68
                          </div>
                        </div>
                        <div className={`flex items-center justify-between mb-2 sm:mb-3 transition-all duration-700 ${
                          rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '400ms' }}>
                          <span className="text-xs sm:text-sm text-gray-400">Completion</span>
                          <span className="text-xs sm:text-sm font-semibold text-green-400">42.5%</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 sm:h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                i < 4 && rightInView
                                  ? "bg-gradient-to-r from-green-500 to-emerald-500"
                                  : "bg-gray-700"
                              }`}
                              style={{ transitionDelay: `${500 + i * 80}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Medium Card */}
                    <div 
                      className={`relative p-[1px] bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl group transition-all duration-800 ${
                        rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: '400ms' }}
                    >
                      <div className="bg-gray-800 dark:bg-gray-950 p-4 sm:p-6 rounded-xl h-full transition-all duration-300 group-hover:bg-gray-800/80 group-hover:scale-105 overflow-hidden">
                        <div className={`flex items-center justify-between mb-3 sm:mb-4 transition-all duration-700 ${
                          rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '500ms' }}>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />
                            <span className="text-lg sm:text-xl font-bold text-yellow-400">Medium</span>
                          </div>
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            81
                          </div>
                        </div>
                        <div className={`flex items-center justify-between mb-2 sm:mb-3 transition-all duration-700 ${
                          rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '600ms' }}>
                          <span className="text-xs sm:text-sm text-gray-400">Completion</span>
                          <span className="text-xs sm:text-sm font-semibold text-yellow-400">50.6%</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 sm:h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                i < 5 && rightInView
                                  ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                                  : "bg-gray-700"
                              }`}
                              style={{ transitionDelay: `${700 + i * 80}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hard Card */}
                    <div 
                      className={`relative p-[1px] bg-gradient-to-br from-red-500 to-pink-500 rounded-xl group transition-all duration-800 ${
                        rightInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                      }`}
                      style={{ transitionDelay: '600ms' }}
                    >
                      <div className="bg-gray-800 dark:bg-gray-950 p-4 sm:p-6 rounded-xl h-full transition-all duration-300 group-hover:bg-gray-800/80 group-hover:scale-105 overflow-hidden">
                        <div className={`flex items-center justify-between mb-3 sm:mb-4 transition-all duration-700 ${
                          rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '700ms' }}>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Flame className="w-5 h-5 sm:w-7 sm:h-7 text-red-400" />
                            <span className="text-lg sm:text-xl font-bold text-red-400">Hard</span>
                          </div>
                          <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                            10
                          </div>
                        </div>
                        <div className={`flex items-center justify-between mb-2 sm:mb-3 transition-all duration-700 ${
                          rightInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`} style={{ transitionDelay: '800ms' }}>
                          <span className="text-xs sm:text-sm text-gray-400">Completion</span>
                          <span className="text-xs sm:text-sm font-semibold text-red-400">6.25%</span>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(10)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 sm:h-1.5 flex-1 rounded-full transition-all duration-500 ${
                                i < 1 && rightInView
                                  ? "bg-gradient-to-r from-red-500 to-pink-500"
                                  : "bg-gray-700"
                              }`}
                              style={{ transitionDelay: `${900 + i * 80}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <style>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};
