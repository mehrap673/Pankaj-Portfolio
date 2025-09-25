import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLinkIcon, GithubIcon, EyeIcon } from "lucide-react";

export const Projects = (): JSX.Element => {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
      image: "/figmaAssets/group-336.png",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      githubUrl: "https://github.com/johnportfolio/ecommerce-platform",
      liveUrl: "https://ecommerce-demo.example.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Socket.io.",
      image: "/figmaAssets/ipad-mockup-1.png",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Material-UI"],
      githubUrl: "https://github.com/johnportfolio/task-manager",
      liveUrl: "https://taskmanager-demo.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current conditions, forecasts, and historical data with beautiful visualizations and geolocation support.",
      image: "/figmaAssets/frame-38621.png",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Vuetify"],
      githubUrl: "https://github.com/johnportfolio/weather-dashboard",
      liveUrl: "https://weather-demo.example.com",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "An analytics platform for social media managers to track engagement, growth metrics, and audience insights across multiple platforms.",
      image: "/figmaAssets/group-38609.png",
      technologies: ["Angular", "D3.js", "Firebase", "Python", "Flask"],
      githubUrl: "https://github.com/johnportfolio/social-analytics",
      liveUrl: "https://analytics-demo.example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={project.id} className={`group bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${project.featured ? 'ring-2 ring-blue-500/20' : ''}`}>
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {project.featured && (
                  <Badge className="absolute top-4 right-4 bg-blue-500 text-white">
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Quick Preview Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                    <EyeIcon className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLinkIcon className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <GithubIcon className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="px-8 py-3">
            View All Projects
            <ExternalLinkIcon className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};