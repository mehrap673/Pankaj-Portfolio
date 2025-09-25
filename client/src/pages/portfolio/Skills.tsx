import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CodeIcon, PaletteIcon, DatabaseIcon, CloudIcon, SmartphoneIcon, WrenchIcon } from "lucide-react";

export const Skills = (): JSX.Element => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <CodeIcon className="w-6 h-6" />,
      skills: [
        { name: "React/Next.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Vue.js", level: 85, color: "bg-green-500" },
        { name: "TailwindCSS", level: 92, color: "bg-cyan-500" }
      ]
    },
    {
      title: "Backend Development",
      icon: <DatabaseIcon className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 88, color: "bg-green-600" },
        { name: "Python/Django", level: 85, color: "bg-yellow-600" },
        { name: "PostgreSQL", level: 87, color: "bg-blue-700" },
        { name: "MongoDB", level: 80, color: "bg-green-700" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <CloudIcon className="w-6 h-6" />,
      skills: [
        { name: "AWS", level: 82, color: "bg-orange-500" },
        { name: "Docker", level: 85, color: "bg-blue-800" },
        { name: "Kubernetes", level: 75, color: "bg-purple-600" },
        { name: "CI/CD", level: 80, color: "bg-gray-600" }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: <PaletteIcon className="w-6 h-6" />,
      skills: [
        { name: "Figma", level: 90, color: "bg-purple-500" },
        { name: "Adobe Creative Suite", level: 85, color: "bg-red-600" },
        { name: "Prototyping", level: 88, color: "bg-pink-500" },
        { name: "User Research", level: 80, color: "bg-indigo-500" }
      ]
    }
  ];

  const additionalSkills = [
    "JavaScript", "Python", "Java", "Go", "GraphQL", "REST APIs", 
    "Redis", "Elasticsearch", "Microservices", "Agile/Scrum", 
    "Git", "Testing/TDD", "WebSockets", "Progressive Web Apps"
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-2" />
                        <div 
                          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <Card className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-3 mb-4">
                <WrenchIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Additional Technologies
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Other technologies and tools I work with regularly
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {additionalSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors cursor-pointer"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};