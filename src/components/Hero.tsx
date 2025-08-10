import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title with Neon Effect */}
          <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-primary mb-8 animate-glow-pulse leading-none tracking-wider">
            <span className="block" style={{
              WebkitTextStroke: '2px hsl(var(--primary))',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.5))'
            }}>
              CHANUKA
            </span>
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-4 mb-12 animate-fade-in-up">
            <p className="text-xl md:text-2xl font-mono text-secondary-foreground">
              App Developer & Creative Technologist
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting innovative mobile and web applications with cutting-edge technology. 
              Transforming ideas into digital experiences that matter.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-neon font-mono font-bold px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono px-8 py-3 text-lg"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-float">
            <ArrowDown className="h-6 w-6 text-primary mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;