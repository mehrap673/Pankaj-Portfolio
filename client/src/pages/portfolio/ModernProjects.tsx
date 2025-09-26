import React, { useState } from "react";
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

export const ModernProjects = (): JSX.Element => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features",
      longDescription: "A complete e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing with Stripe, inventory management, real-time notifications, and a comprehensive admin dashboard. The platform handles thousands of transactions daily with 99.9% uptime.",
      image: "/figmaAssets/group-336.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS", "Redis"],
      githubUrl: "https://github.com/johnportfolio/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
      featured: true,
      category: "Full Stack"
    },
    {
      id: 2,
      title: "AI-Powered Dashboard",
      description: "Analytics dashboard with machine learning insights",
      longDescription: "An intelligent analytics dashboard that uses machine learning to provide actionable insights from business data. Built with React and Python, featuring real-time data visualization, predictive analytics, and automated reporting. Helps businesses increase efficiency by 40%.",
      image: "/figmaAssets/ipad-mockup-1.png",
      technologies: ["React", "Python", "TensorFlow", "D3.js", "FastAPI", "PostgreSQL"],
      githubUrl: "https://github.com/johnportfolio/ai-dashboard",
      liveUrl: "https://ai-dashboard-demo.example.com",
      featured: true,
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Modern social platform with real-time features",
      longDescription: "A modern social media application with real-time messaging, story features, and advanced privacy controls. Built using React Native and Node.js with WebSocket technology for instant updates. Supports multimedia sharing, group chats, and algorithmic feed curation.",
      image: "/figmaAssets/frame-38621.png",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3", "Firebase"],
      githubUrl: "https://github.com/johnportfolio/social-app",
      liveUrl: "https://social-demo.example.com",
      featured: true,
      category: "Mobile"
    },
    {
      id: 4,
      title: "Design System",
      description: "Comprehensive UI component library",
      longDescription: "A complete design system and component library used across multiple products. Features 200+ components, design tokens, documentation site, and automated testing. Reduced development time by 60% and ensured consistent user experience across all platforms.",
      image: "/figmaAssets/group-38609.png",
      technologies: ["React", "Storybook", "TypeScript", "Figma", "Jest", "Chromatic"],
      githubUrl: "https://github.com/johnportfolio/design-system",
      liveUrl: "https://design-system-demo.example.com",
      featured: false,
      category: "Design"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
            Featured <span className="bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            AI/ML integration, and modern web technologies.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group card-3d glass-card hover:glass-dark transition-all duration-500 cursor-pointer overflow-hidden animate-fade-up"
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
                <h3 className="text-heading-6 mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4} more
                    </Badge>
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
          ))}
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
                <Badge className="bg-primary text-primary-foreground">
                  {selectedProject.category}
                </Badge>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>
              
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