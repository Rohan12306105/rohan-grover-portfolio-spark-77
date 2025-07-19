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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Skills Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Technical Skills</h3>
            
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground">{category.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/20 text-secondary-foreground border border-secondary/30 hover:bg-secondary/30 transition-colors"
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
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
            
            <Card className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Professional Certifications</h4>
              </div>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg border border-accent/20 hover:bg-accent/20 transition-colors"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Additional Info */}
            <Card className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
              <h4 className="text-xl font-semibold text-foreground mb-4">Core Competencies</h4>
              <div className="space-y-3 text-foreground/80">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Backend Development & API Design</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Full-Stack Web Application Development</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Database Design & Management</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cloud Infrastructure & Deployment</span>
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