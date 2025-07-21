import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Shield, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C++", "Python", "Java", "C", "JavaScript", "TypeScript"],
      color: "text-blue-400"
    },
    {
      title: "Technologies & Frameworks",
      icon: Cloud,
      skills: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "AWS"],
      color: "text-green-400"
    },
    {
      title: "Specializations",
      icon: Shield,
      skills: ["Cybersecurity", "Data Structures", "Algorithms", "Web Development", "Networking"],
      color: "text-red-400"
    }
  ];

  const certifications = [
    "AWS Cloud Foundations",
    "Coding Blocks DSA",
    "Cisco Cybersecurity Essentials",
    "Angela Yu MERN Bootcamp"
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Skills Grid */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Technical Skills</h3>
            
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary"
                >
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#d90429' }}>
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 text-white`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">{category.title}</h4>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-colors text-xs sm:text-sm px-2 py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Certifications */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">Certifications</h3>
            
            <Card className="card-gradient p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-foreground leading-tight">Professional Certifications</h4>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-2.5 sm:p-3 bg-accent/10 rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm sm:text-base text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Additional Info */}
            <Card className="card-gradient p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Core Competencies</h4>
              <div className="space-y-2.5 sm:space-y-3 text-foreground/80">
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Backend Development & API Design</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Full-Stack Web Application Development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Database Design & Management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Cloud Infrastructure & Deployment</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;