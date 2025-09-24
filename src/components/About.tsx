import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Palette, Zap, Cpu } from "lucide-react";

const About = () => {
  const skills = [
    // Mobile Development
    "Flutter",
    // Backend Technologies
    "Java", "C#", "C++", "C", "Python", "ASP .NET", "Spring Boot", "Node.js", "Machine Learning",
    // Databases
    "Firebase", "MongoDB", "MySQL", "SQL", "PostgreSQL",
    // DevOps & Tools
    "Docker", "CI/CD Pipelines", "AWS", "Azure", "Git",
    // Other
    "GraphQL", "REST APIs", "Microservices", "Agile"
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps using Flutter and Java with seamless user experiences."
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Developing robust backend systems and APIs with Spring Boot, ASP.NET, and Python, using databases like MySQL, MongoDB, SQL Server, and Firebase"
    },
    {
      icon: Palette,
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines with Docker, containerization, and cloud infrastructure on AWS and Azure."
    },
    {
      icon: Cpu,
      title: "Python Machine Learning & Deep Learning",
      description: "Building intelligent systems and models using Python, with expertise in machine learning, deep learning, and libraries like TensorFlow, PyTorch, and scikit-learn."
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
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img
                  src="/Portfolio.new/favicon.ico"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover animate-shake-float"
                />
              </div>
            </div>
            {/* Bio */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer specializing in mobile app development, creating native and cross-platform apps with Flutter and Java that deliver seamless user experiences.
                </p>
                <p>
                  On the backend, I build robust systems and APIs using Spring Boot, ASP.NET, and Python, managing databases like MySQL, MongoDB, SQL Server, and Firebase for reliable data-driven applications.
                </p>
                <p>
                  I also implement DevOps practices, including Docker, CI/CD pipelines, and cloud infrastructure on AWS and Azure, ensuring smooth, scalable deployments.
                </p>
                <p>
                  Additionally, I develop intelligent Python-based systems with machine learning and deep learning models, leveraging libraries like TensorFlow, PyTorch, and scikit-learn to create data-driven solutions.
                </p>

              </div>
            </div>


          </div>

          {/* Skills */}
          <div className="mb-16">
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
