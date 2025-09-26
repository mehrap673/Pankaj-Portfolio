import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export const Education = (): JSX.Element => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Indian Institute of Technology",
      location: "Mumbai, India",
      duration: "2018 - 2022",
      gpa: "8.5/10.0",
      highlights: [
        "Specialized in Software Engineering and AI",
        "Final Year Project on Machine Learning",
        "Member of Coding Club"
      ]
    },
    {
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "St. Xavier's College",
      location: "Mumbai, India",
      duration: "2016 - 2018",
      gpa: "85%",
      highlights: [
        "Science Stream - PCM with Computer Science",
        "School Topper in Computer Science",
        "Participated in National Science Olympiad"
      ]
    },
    {
      degree: "Secondary School Certificate (10th Grade)",
      institution: "DAV Public School",
      location: "Mumbai, India",
      duration: "2014 - 2016",
      gpa: "92%",
      highlights: [
        "First Division with Distinction",
        "Class Monitor for 2 consecutive years",
        "Winner of Inter-school Mathematics Competition"
      ]
    }
  ];

  return (
    // Updated background for a softer light mode
    <section 
      id="education" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-100 via-slate-100 to-blue-100 dark:from-gray-900/10 dark:via-blue-900/20 dark:to-purple-900/10"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-gradient-to-r from-cyan-300/30 to-purple-300/30 rounded-full blur-3xl bottom-20 right-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-gradient-to-r from-blue-300/30 to-cyan-300/30 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational journey that shaped my technical foundation and passion for technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 via-blue-400 to-cyan-400 rounded-full"></div>

            {educationData.map((edu, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-6/12 ${index % 2 === 0 ? 'pr-6' : 'pl-6'}`}>
                  <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-white/90 dark:hover:bg-gray-900/90">
                    <CardContent className="p-5">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                            {edu.degree}
                          </h3>
                          <p className="text-base text-purple-600 dark:text-purple-400 mb-1 font-semibold">
                            {edu.institution}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                            {edu.location}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 mb-3">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-2 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="flex items-center gap-1.5 bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-900/50 dark:to-cyan-900/50 text-purple-700 dark:text-purple-300">
                          <Calendar className="w-3 h-3" />
                          <span className="text-xs">{edu.duration}</span>
                        </Badge>
                        <div className="text-center p-2 bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-purple-900/30 dark:to-cyan-900/30 rounded-lg border border-purple-200/50 dark:border-purple-700/50">
                          <div className="text-base font-bold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
                            {edu.gpa}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-300">Score</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 z-10 shadow-lg">
                  <div className="w-full h-full bg-white dark:bg-gray-900 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  </div>
                </div>

                {/* Year Display */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-6' : 'pr-6'}`}>
                  <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-200/30 dark:border-purple-700/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-bold shadow-md">
                      {edu.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
