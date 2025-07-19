import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, Shield } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <div className="flex items-start space-x-6">
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Cisco Virtual Internship & Training
                    </h3>
                    <p className="text-primary font-semibold text-lg">Cisco Systems</p>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-foreground/70">
                    <Calendar className="h-5 w-5" />
                    <span>May 2024 – July 2024</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/90 text-lg">
                      Gained comprehensive knowledge in <span className="text-primary font-semibold">cybersecurity fundamentals</span>, 
                      including network security protocols, threat analysis, and security best practices.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/90 text-lg">
                      Completed hands-on training modules covering <span className="text-primary font-semibold">network infrastructure security</span>, 
                      incident response procedures, and risk assessment methodologies.
                    </p>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/90 text-lg">
                      Developed understanding of enterprise-level security solutions and their practical applications 
                      in real-world scenarios.
                    </p>
                  </div>
                </div>
                
                {/* Skills Gained */}
                <div className="mt-6 pt-6 border-t border-primary/20">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Network Security", "Threat Analysis", "Incident Response", "Risk Assessment", "Security Protocols"].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;