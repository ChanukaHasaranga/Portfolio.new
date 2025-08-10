import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    // Mobile Development
    "React Native", "Flutter", "Swift", "Kotlin", "Java",
    // Web Development  
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3",
    // Backend Technologies
    "Spring Boot", "Node.js", ".NET", "Python", "C#", "C++", "C",
    // Databases
    "Firebase", "MongoDB", "MySQL", "SQL", "PostgreSQL", "Redis",
    // DevOps & Tools
    "Docker", "CI/CD Pipelines", "AWS", "Azure", "Git", "Jenkins",
    // Other
    "GraphQL", "REST APIs", "Microservices", "Agile"
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps using React Native, Flutter, Swift, and Kotlin with seamless user experiences."
    },
    {
      icon: Code,
      title: "Full-Stack Development", 
      description: "End-to-end web applications with React, Spring Boot, .NET, and modern databases like MongoDB and MySQL."
    },
    {
      icon: Palette,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines with Docker, containerization, and cloud infrastructure on AWS and Azure."
    },
    {
      icon: Zap,
      title: "System Architecture",
      description: "Scalable microservices architecture with optimized performance using C#, Java, Python, and modern frameworks."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4 animate-glow-pulse">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with 5+ years of experience building innovative applications 
              that solve real-world problems and create meaningful user experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer specializing in mobile app development with expertise 
                  across multiple platforms and technologies. From Flutter and React Native to 
                  native iOS and Android development, I create robust applications that scale.
                </p>
                <p>
                  My backend expertise spans Spring Boot, .NET, Python, and Node.js, while I 
                  leverage modern DevOps practices with Docker, CI/CD pipelines, and cloud 
                  infrastructure to ensure reliable, scalable deployments.
                </p>
                <p>
                  Whether it's building microservices with Java and C#, managing databases with 
                  MongoDB and MySQL, or creating seamless user experiences, I bring a comprehensive 
                  approach to every project.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Tech Stack & Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-card text-card-foreground border-primary/20 hover:border-primary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-2xl font-display font-bold text-foreground text-center mb-12">
              What I Do
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={service.title} 
                  className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <h4 className="text-lg font-display font-bold text-card-foreground mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;