import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

const Education = () => {
  const modules = [
    "Python", "C", "Java", "Data Structures", "Operating Systems", 
    "Discrete Maths", "OOP", "Web Design", "Cybersecurity"
  ];

  return (
    <section id="education" className="py-20 px-6 bg-card/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <Card className="card-gradient p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Education Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    B.Tech in Computer Science (Data Science)
                  </h3>
                  <p className="text-xl text-primary font-semibold">
                    IPEC Ghaziabad, AKTU University
                  </p>
                  <p className="text-foreground/70 text-lg">2023 – Present</p>
                </div>
              </div>
              
              {/* Academic Performance */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  <span className="text-foreground font-semibold">CGPA: 7.0</span>
                </div>
                <div className="text-foreground/70">
                  (First 3 semesters, No backlogs)
                </div>
              </div>
              
              {/* Dissertation */}
              <div className="pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-lg font-semibold text-foreground">Dissertation Project</span>
                </div>
                <p className="text-foreground/80 ml-7">Amazon Clone (Frontend)</p>
              </div>
            </div>
            
            {/* Modules */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Key Modules</h4>
              <div className="flex flex-wrap gap-2">
                {modules.map((module, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm border border-secondary/30 hover:bg-secondary/30 transition-colors"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;