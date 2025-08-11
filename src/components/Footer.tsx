import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/ChanukaHasaranga", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chanuka-hasaranga/", label: "LinkedIn" },
    { icon: Mail, href: "#contact", label: "Email" },
  ];

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="font-display font-bold text-2xl text-primary mb-2">
                CHANUKA
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                App Developer & Creative Technologist
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center space-x-1">
              <span>© Copyright {currentYear} CHANUKA</span>
              <span>All Rights Reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;