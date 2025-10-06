import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon, PlayIcon, XIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  category: string;
}

// Hook to detect if element is in view
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
          observer.disconnect(); // Observe only once
        }
      },
      options
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref, isInView };
};

export const ModernProjects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Veleno E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features",
      longDescription:
        "A complete e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing with Stripe, inventory management, real-time notifications, and a comprehensive admin dashboard. The platform handles thousands of transactions daily with 99.9% uptime.",
      image: "/assets/Projects/Veleno.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "TailwindCSS"],
      githubUrl: "https://github.com/johnportfolio/ecommerce-platform",
      liveUrl: "https://veleno-gamma.vercel.app/",
      featured: true,
      category: "Full Stack",
    },
    {
      id: 2,
      title: "AI-Powered Dashboard For TeachMate App",
      description: "Analytics dashboard with machine learning insights",
      longDescription:
        "An intelligent analytics dashboard that uses machine learning to provide actionable insights for Educational data. Built with React and Tailwind, featuring real-time data visualization, predictive analytics, and automated resulting. Helps businesses educators efficiency by 40%.",
      image: "/assets/Projects/Teachmate.png",
      technologies: ["React", "Python", "TensorFlow", "FastAPI"],
      githubUrl: "https://github.com/johnportfolio/ai-dashboard",
      liveUrl: "https://teach-mate-khaki.vercel.app/dashboard",
      featured: true,
      category: "AI/ML",
    },
    {
      id: 3,
      title: "Dues Tracker ChatBoat",
      description: "A Ai powered dues tracker chatbot for managing dues of customer",
      longDescription:
        "Dues Tracker ChatBoat is an AI-powered chatbot designed to simplify the process of managing and tracking customer dues. It allows businesses or individuals to easily record, monitor, and remind customers about pending payments through an intelligent conversational interface. The chatbot can automatically handle due date reminders, generate payment summaries, and provide real-time insights into outstanding balances. With its smart and interactive design, users can communicate naturally with the system to get updates, add new dues, or check payment history. The goal is to enhance financial transparency, save time, and make due management seamless using AI automation."
      ,
      image: "/assets/Projects/DuesTracker.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "Tailwind"],
      githubUrl: "https://github.com/johnportfolio/social-app",
      liveUrl: "https://dues-tracker.vercel.app/",
      featured: true,
      category: "Mobile",
    },
    {
      id: 4,
      title: "Design System",
      description: "Comprehensive UI component library",
      longDescription:
        "A complete design system and component library used across multiple products. Features 200+ components, design tokens, documentation site, and automated testing. Reduced development time by 60% and ensured consistent user experience across all platforms.",
      image: "/figmaAssets/group-38609.png",
      technologies: ["React", "Storybook", "TypeScript", "Figma", "Jest", "Chromatic"],
      githubUrl: "https://github.com/johnportfolio/design-system",
      liveUrl: "https://design-system-demo.example.com",
      featured: false,
      category: "Design",
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="space-section space-container">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="secondary" className="glass-card mb-4 px-4 py-2">
            My Work
          </Badge>
          <h2 className="text-heading-2 mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, AI/ML integration,
            and modern web technologies.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => {
            const { ref, isInView } = useInView({ threshold: 0.2 });

            return (
              <Card
                key={project.id}
                ref={ref}
                className={`group card-3d glass-card hover:glass-dark transition-all duration-500 cursor-pointer overflow-hidden
                  ${isInView ? "opacity-100 animate-fade-up" : "opacity-0 translate-y-5"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <PlayIcon className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                    {project.category}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-heading-6 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs">+{project.technologies.length - 4} more</Badge>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 animate-magnetic">
                      <ExternalLinkIcon className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card">
                      <GithubIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-heading-4">{selectedProject.title}</h3>
                <Badge className="bg-primary text-primary-foreground">{selectedProject.category}</Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">{selectedProject.longDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Project Links</h4>
                  <div className="flex gap-3">
                    <Button asChild className="animate-magnetic">
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
