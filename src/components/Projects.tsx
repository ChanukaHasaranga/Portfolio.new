import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoTrack Mobile",
      description: "Cross-platform sustainability app built with Flutter and Spring Boot backend, featuring AI-powered carbon footprint analysis and real-time environmental data.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Spring Boot", "Firebase", "Python AI", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "TaskFlow Enterprise",
      description: "Enterprise project management platform with .NET Core backend, React frontend, and automated CI/CD deployment using Docker containers.",
      image: "/api/placeholder/400/250",
      technologies: [".NET Core", "React", "SQL Server", "Docker", "Azure DevOps"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "HealthSync Mobile",
      description: "Native iOS/Android health tracking app with C# backend API, MongoDB database, and machine learning insights for wellness optimization.",
      image: "/api/placeholder/400/250",
      technologies: ["Swift", "Kotlin", "C#", "MongoDB", "Python ML"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "DevOps Dashboard",
      description: "Comprehensive CI/CD monitoring platform built with Java Spring Boot, featuring automated deployment pipelines and real-time system metrics.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Spring Boot", "Jenkins", "Docker", "MySQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "FinanceTracker Pro",
      description: "React Native financial management app with microservices architecture, featuring secure Firebase authentication and real-time market data integration.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Microservices", "Firebase", "C++", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "CloudSync Enterprise",
      description: "Multi-platform data synchronization system built with .NET and Python, featuring automated CI/CD pipelines and cross-platform mobile clients.",
      image: "/api/placeholder/400/250",
      technologies: ["C#", "Python", "PostgreSQL", "Azure", "Flutter"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 animate-glow-pulse">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of applications I've built, from mobile apps to web platforms, 
              each crafted with attention to detail and user experience.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">
              Spotlight Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="group overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-neon-strong"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-display font-bold text-primary/30">
                        {project.title.slice(0, 2)}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-display font-bold text-card-foreground mb-2">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-8">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={project.title} 
                  className="group p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                  style={{ animationDelay: `${(index + 2) * 100}ms` }}
                >
                  <h4 className="text-lg font-display font-bold text-card-foreground mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50 text-secondary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-secondary/50 text-secondary-foreground">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
