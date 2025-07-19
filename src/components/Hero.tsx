import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2, Briefcase } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-primary/20 rounded-full blur-lg animate-bounce delay-300"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Computer Science Engineering Student</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
            Rohan Grover
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Building the future with{" "}
            <span className="text-primary font-semibold relative">
              intelligent code
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50"></div>
            </span>
            {" "}and innovative solutions
          </p>
          
          {/* Skills Highlight */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["C++", "Python", "MERN Stack", "AWS", "AI/ML"].map((skill, index) => (
              <div key={skill} className="flex items-center gap-2 px-4 py-2 bg-card border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground/80">{skill}</span>
              </div>
            ))}
          </div>
          
        </div>
      </div>
      
      {/* Floating Stats */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-8 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-xl px-6 py-3">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">15+</div>
            <div className="text-xs text-foreground/60">Projects</div>
          </div>
          <div className="w-px h-8 bg-primary/20"></div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">5+</div>
            <div className="text-xs text-foreground/60">Technologies</div>
          </div>
          <div className="w-px h-8 bg-primary/20"></div>
          <div className="text-center">
            <div className="text-lg font-bold text-primary">2+</div>
            <div className="text-xs text-foreground/60">Years</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;