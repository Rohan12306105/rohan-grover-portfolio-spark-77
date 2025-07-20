import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <Card className="card-gradient p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Computer Science Engineering Student
              </h3>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                Enthusiastic B.Tech Computer Science student with hands-on experience in C++, Python, MERN stack, and AWS. 
                Skilled in backend development, web applications, and cybersecurity through real-world projects and internships.
              </p>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                Passionate about solving problems and building efficient digital solutions. Demonstrates strong leadership 
                and organizational skills through coordinating tech events and guiding teams in collaborative environments.
              </p>
              
              <p className="text-foreground/90 leading-relaxed text-lg">
                Always eager to learn and contribute to impactful, innovative technology-driven initiatives.
              </p>
            </div>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:scale-105 hover:z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Location</h4>
                  <p className="text-foreground/70">New Delhi, India</p>
                </div>
              </div>
            </Card>
            
            <Card className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:scale-105 hover:z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email</h4>
                  <a 
                    href="mailto:rohangrover0610@gmail.com"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    rohangrover0610@gmail.com
                  </a>
                </div>
              </div>
            </Card>
            
            <Card className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:scale-105 hover:z-10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                  <a 
                    href="tel:+919773675674"
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    +91 9773675674
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;