import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CodeIcon,
  PaletteIcon,
  DatabaseIcon,
  WrenchIcon
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <CodeIcon className="w-7 h-7" />,
    skills: [
      { name: "React", level: 85, color: "bg-blue-500" },
      { name: "Next.js", level: 60, color: "bg-blue-600" },
      { name: "TypeScript", level: 70, color: "bg-blue-600" },
      { name: "TailwindCSS", level: 92, color: "bg-cyan-500" }
    ]
  },
  {
    title: "Backend Development",
    icon: <DatabaseIcon className="w-7 h-7" />,
    skills: [
      { name: "Node.js", level: 75, color: "bg-green-600" },
      { name: "Python/Django", level: 50, color: "bg-yellow-600" },
      { name: "PostgreSQL", level: 60, color: "bg-blue-700" },
      { name: "MongoDB", level: 80, color: "bg-green-700" }
    ]
  },
  {
    title: "Design & UI/UX",
    icon: <PaletteIcon className="w-7 h-7" />,
    skills: [
      { name: "Figma", level: 80, color: "bg-purple-500" },
      { name: "Adobe Creative Suite", level: 80, color: "bg-red-600" },
      { name: "Prototyping", level: 88, color: "bg-pink-500" },
      { name: "User Research", level: 80, color: "bg-indigo-500" }
    ]
  }
];

const additionalSkills = [
  "JavaScript",
  "Python",
  "REST APIs",
  "Git",
  "GitHub",
  "CSS",
  "HTML5"
];

// Intersection observer hook
const useInView = (options?: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      options ?? { threshold: 0.2 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return { ref, isInView };
};

export const Skills = (): JSX.Element => {
  return (
    <section
      id="skills"
      className="py-16 px-6"
    >
      <div className="max-w-7xl mx-auto text-white">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-extrabold tracking-tight drop-shadow-md">
            Skills & Expertise
          </h2>
          <p className="mt-2 text-lg text-gray-400 max-w-xl mx-auto">
            A snapshot of my technical proficiency levels and tools.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0">
          {skillCategories.map((category, i) => {
            const { ref, isInView } = useInView({ threshold: 0.3 });
            return (
              <Card
                key={i}
                ref={ref}
                className={`bg-white/10 dark:bg-gray-900/30 backdrop-blur-md border border-gray-700 shadow-lg flex-1 transition-all duration-1000 ease-in-out transform ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 300}ms` }}
              >
                <CardContent className="p-7 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-2xl flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, idx) => {
                      const { ref: skillRef, isInView: barInView } = useInView({ threshold: 0.5 });
                      return (
                        <div key={idx} ref={skillRef} className="space-y-1">
                          <div className="flex justify-between font-semibold">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className="relative h-2 rounded-full bg-gray-700 overflow-hidden">
                            <div
                              className={`${skill.color} absolute top-0 left-0 h-2 rounded-full ${
                                barInView ? "animate-fill-bar-loop" : "w-0"
                              }`}
                              style={{ "--fill-level": `${skill.level}%` } as React.CSSProperties}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="bg-white/10 dark:bg-gray-900/30 backdrop-blur-md border border-gray-700 shadow-lg mt-14 max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <div className="inline-flex items-center gap-4 mb-4 justify-center text-white">
              <WrenchIcon className="w-7 h-7 text-cyan-400" />
              <h3 className="text-3xl font-semibold">Additional Technologies</h3>
            </div>
            <p className="text-gray-400 mb-8">
              Other tools and technologies I use regularly
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              {additionalSkills.map((skill, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="cursor-pointer px-5 py-2 text-lg font-semibold bg-gray-800 hover:bg-cyan-600 dark:hover:bg-cyan-500/70 transition-colors rounded-full"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes fillBarLoop {
          0% {
            width: 0%;
          }
          50% {
            width: var(--fill-level);
          }
          100% {
            width: 0%;
          }
        }

        .animate-fill-bar-loop {
          animation-name: fillBarLoop;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
          animation-fill-mode: forwards;
        }

        @keyframes sparkleMove {
        0%   { transform: translateX(0); opacity: 0; }
        10%  { opacity: 1; }
        90%  { opacity: 1; }
        100% { transform: translateX(var(--sparkle-distance)); opacity: 0; }
      }

      .animate-sparkle {
        animation-name: sparkleMove;
        animation-duration: 3s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }

      `}</style>
    </section>
  );
};
