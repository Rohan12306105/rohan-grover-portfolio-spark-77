import { Button } from "@/components/ui/button";
import { ArrowUp, Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rohangrover0610/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Rohan12306105",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:rohangrover0610@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="relative py-12 px-6 bg-card/10 border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Rohan Grover</h3>
            <p className="text-foreground/70 leading-relaxed">
              Computer Science Engineering student passionate about building innovative 
              digital solutions and contributing to impactful technology initiatives.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:shadow-glow-primary hover:scale-110 group"
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/20">
          <div className="flex items-center space-x-2 text-foreground/70 mb-4 md:mb-0">
            <span>© 2024 Rohan Grover. Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>and lots of code.</span>
          </div>
          
          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;