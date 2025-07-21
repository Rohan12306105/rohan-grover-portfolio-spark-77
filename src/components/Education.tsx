import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

const Education = () => {
  const modules = [
    "Python", "C", "Java", "Data Structures", "Operating Systems", 
    "Discrete Maths", "OOP", "Web Design", "Cybersecurity"
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <Card className="card-gradient p-6 sm:p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:scale-105 hover:z-10 relative">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Education Info */}
            <div className="md:col-span-2 space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 leading-tight">
                    B.Tech in Computer Science (Data Science)
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-primary font-semibold">
                    IPEC Ghaziabad, AKTU University
                  </p>
                  <p className="text-foreground/70 text-sm sm:text-base lg:text-lg">2023 – Present</p>
                </div>
              </div>
              
              {/* Academic Performance */}
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
                  <span className="text-sm sm:text-base text-foreground font-semibold">CGPA: 7.1</span>
                </div>
                <div className="text-xs sm:text-sm text-foreground/70">
                  (First 3 semesters, No backlogs)
                </div>
              </div>
              
              {/* Dissertation */}
              <div className="pt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-base sm:text-lg font-semibold text-foreground">Dissertation Project</span>
                </div>
                <p className="text-sm sm:text-base text-foreground/80 ml-6 sm:ml-7">Amazon Clone (Frontend)</p>
              </div>
            </div>
            
            {/* Modules */}
            <div className="mt-6 md:mt-0">
              <h4 className="text-lg sm:text-xl font-semibold text-foreground mb-4">Key Modules</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {modules.map((module, index) => (
                  <span 
                    key={index}
                    className="px-2 sm:px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs sm:text-sm border border-secondary/30 hover:bg-secondary/30 transition-colors"
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