import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const handleLiveDemo = (url) => {
    if (!url) return;

    // Check if it's a PDF
    if (url.toLowerCase().endsWith(".pdf")) {
      // Open PDF in a new tab
      window.open(url, "_blank");
    } else {
      // Open normal link
      window.open(url, "_blank");
    }
  };

  const projects = [
    {
      title: "AppexLove - DatingApp",
      description: "A Flutter-based dating app with Firebase and Spring Boot (MySQL) backend. Users can create profiles, match based on interests, chat, and call. Premium features via Stripe include viewing more profiles and exclusive access. Includes an Ambassador section to facilitate connections, manage matches, and chat with users. Features Google Maps integration, filters, and a messaging system showing chat history, profile pictures, and timestamps. Riverpod is used for state management.",
      image: "/sample 01_compressed_page-0003 - Copy.jpg",
      technologies: ["Flutter", "Spring Boot", "Firebase", "MySQL", "Stripe", "Team"],
      liveUrl: "/sample 01_compressed.pdf",
      featured: true
    },
    {
      title: "Linkedin - CloneApp",
      description: "A sleek LinkedIn-inspired mobile app built using MVVM architecture for clean separation of logic and UI. Implemented with Provider for efficient state management and included form validation for a secure and user-friendly signup experience. The app currently uses dummy data to simulate core features such as user profiles, feeds, and connections",
      image: "/IMG_0901.JPG",
      technologies: ["Flutter", "Individual"],
      githubUrl: "https://github.com/ChanukaHasaranga/linkedin",
      featured: true
    },
    {
      title: "Parkinsons - Disease tracking App",
      description: "Developed as a group project using MVC architecture, I worked on the frontend and API integration with Firebase for user authentication and signup. Implemented live voice recording with audio playback, integrated with a Python ML model to detect Parkinson’s indicators. Added Flutter localization to support both Sinhala and English. Users can view results, listen to recordings via an audio player, and export reports as PDFs. For doctors, a separate home page provides access to all users’ Parkinson’s reports with download capability.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Firebase", "Python ML", "Team"],
      githubUrl: "https://github.com/ChanukaHasaranga/parkinsons_app",
      featured: false
    },
    {
      title: "E-Commerce",
      description: "I developed a responsive e-commerce app for both web and mobile. While the UI is a demo, all features are fully functional. The app uses Hive for local cart storage (persisting until app removal) and Firebase for item data. It includes features like adding items, cart price calculation, and checkout. I implemented widget, cart controller, and product detail tests, integrated CI/CD with GitHub, and followed Clean Architecture principles with Riverpod for state management.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Firebase", "CI/CD", "Hive", "Local - Storage"],
      githubUrl: "https://github.com/ChanukaHasaranga/E-Commerce",
      featured: false
    },
    {
      title: "Nobel - Gaming App",
      description: "Gaming app – Badge & Profile Page: Collaboratively developed the dynamic badge/profile page with automatic profile theme updates, real-time user rankings based on rewards, and a static time count consistent across users and reinstalls. Handled frontend development using flutter backend development using MySQL and Spring Boot.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Spring Boot", "MySql", "Team",],
      liveUrl: "https://www.linkedin.com/posts/chanuka-hasaranga_mobileappdevelopment-flutter-springboot-activity-7219531066171125760-mved?utm_source=share&utm_medium=member_desktop",
      githubUrl: "https://github.com/ChanukaHasaranga/nobel_project",
      featured: false
    },
    {
      title: "User Account page Backend - ASP .NET",
      description: "This is an ASP.NET Core-based backend application that provides user authentication and profile management features. It supports essential account operations such as sign-up, login, and updating user details. The application uses JWT (JSON Web Token) for secure authentication, ensuring that only authorized users can access protected resources. The backend is designed for easy deployment in standard server environments and is suitable for scalable and secure application architectures",
      image: "/api/placeholder/400/250",
      technologies: ["C#", "ASP .NET", "SQL Server", "JWT Token ", "Flutter"],
      githubUrl: "https://github.com/ChanukaHasaranga/author",
      featured: false
    },
    {
      title: "User Account page backend - SpringBoot",
      description: "This is a Spring Boot-based backend application that provides user authentication and profile management features. It supports essential account operations such as sign up, login, and updating user details. The application uses JWT (JSON Web Token) for secure authentication, ensuring that only authorized users can access protected resources. Additionally, the backend is Dockerized, making it easy to deploy and run in any containerized environment. This setup is ideal for scalable and secure microservices architectures.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Spring Boot", "Docker", "JWT Token ", "MySQL"],
      githubUrl: "https://github.com/ChanukaHasaranga/Account-Page-Backend",
      featured: false
    },
     {
   title: "AgriLens Model",
   description: "Detects plant nutrient deficiencies and diseases from leaf images.Classifies 18 classes including healthy, nutrient deficiencies, and diseases.Uses MobileNetV2, lightweight and accurate (97.8% test accuracy).Outputs predicted class and confidence, can be converted to .tflite for mobile apps.",
   image: "/api/placeholder/400/250",
   technologies: ["Python", "Machine Learning - MobileNetV2", "TensorFlow Lite", "TensorFlow / Keras",],
   githubUrl: "https://github.com/ChanukaHasaranga/AgriLens_Modelr",
   featured: false
 },
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
                      <div className="aspect-video relative overflow-hidden rounded-md">

                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
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
                      {project.liveUrl ? (
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary/90"
                          onClick={() => handleLiveDemo(project.liveUrl)}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      ) : null}

                      {project.githubUrl ? (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                          onClick={() => window.open(project.githubUrl, "_blank")}

                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      ) : null}
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
                    {project.liveUrl ? (

                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary"
                        onClick={() => handleLiveDemo(project.liveUrl)}

                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    ) : null}
                    {project.githubUrl ? (

                      <Button size="sm" variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary"
                        onClick={() => window.open(project.githubUrl, "_blank")}

                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    ) : null}

                  </div>

                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 flex items-center justify-center mx-auto"
                onClick={() => window.open("https://github.com/ChanukaHasaranga?tab=repositories", "_blank")}
              >
                <Github className="h-5 w-5 mr-3 animate-bounce" />
                View more on GitHub
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                Explore all my projects and code repositories on GitHub
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );

};

export default Projects;
