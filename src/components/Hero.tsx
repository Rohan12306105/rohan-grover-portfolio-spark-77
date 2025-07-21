import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Briefcase, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient-flow">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-lg animate-bounce delay-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Rohan Grover
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-light px-2">
            Building the future with{" "}
            <span className="text-primary font-semibold relative">
              intelligent code
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></div>
            </span>
            {" "}and innovative solutions
          </p>
          
          {/* Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 px-2">
            {["C++", "Python", "MERN Stack", "AWS", "AI/ML"].map((skill, index) => (
              <div key={skill} className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-card border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-foreground/80">{skill}</span>
              </div>
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-20 px-4">
            <a
              href="https://github.com/Rohan12306105"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-card/80 border border-primary/20 rounded-xl hover:border-primary/40 hover:bg-card transition-all duration-300 hover:scale-105"
            >
              <Github className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground/80">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/rohangrover0610/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-3 bg-card/80 border border-primary/20 rounded-xl hover:border-primary/40 hover:bg-card transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground/80">LinkedIn</span>
            </a>
          </div>
          
        </div>
      </div>
      
      {/* Floating Stats */}
      <div className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2 px-4">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl px-4 sm:px-6 py-3">
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-primary">15+</div>
            <div className="text-xs text-foreground/60">Projects</div>
          </div>
          <div className="w-px h-6 sm:h-8 bg-primary/20"></div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-primary">5+</div>
            <div className="text-xs text-foreground/60">Technologies</div>
          </div>
          <div className="w-px h-6 sm:h-8 bg-primary/20"></div>
          <div className="text-center">
            <div className="text-base sm:text-lg font-bold text-primary">2+</div>
            <div className="text-xs text-foreground/60">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;