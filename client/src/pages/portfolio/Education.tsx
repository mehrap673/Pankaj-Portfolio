import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCapIcon, CalendarIcon, AwardIcon } from "lucide-react";

export const Education = (): JSX.Element => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      duration: "2018 - 2020",
      gpa: "3.8/4.0",
      highlights: [
        "Specialized in Machine Learning and AI",
        "Teaching Assistant for Data Structures course",
        "President of Computer Science Society"
      ]
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      duration: "2014 - 2018",
      gpa: "3.7/4.0",
      highlights: [
        "Magna Cum Laude graduate",
        "Captain of Programming Competition Team",
        "Dean's List for 6 consecutive semesters"
      ]
    }
  ];

  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My educational journey that shaped my technical foundation and passion for technology.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card key={index} className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <GraduationCapIcon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 mb-2">
                          {edu.institution}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {edu.location}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                        <AwardIcon className="w-5 h-5" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-1 space-y-4">
                    <Badge variant="secondary" className="flex items-center gap-2 w-full justify-center">
                      <CalendarIcon className="w-4 h-4" />
                      {edu.duration}
                    </Badge>
                    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.gpa}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">GPA</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};