import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Leaf, Heart, ShoppingCart } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Zero Waste Mart",
      description: "Eco-friendly e-commerce platform designed to reduce food waste with intelligent expiry tracking and carbon footprint awareness features.",
      icon: Leaf,
      tags: ["React", "Node.js", "MongoDB", "Express", "Sustainability"],
      features: [
        "Smart expiry date tracking system",
        "Carbon footprint calculator",
        "Real-time inventory management",
        "User sustainability dashboard"
      ],
      color: "text-primary"
    },
    {
      title: "Pet Radar",
      description: "AI-powered platform to reunite lost pets using advanced image recognition and location tracking technology.",
      icon: Heart,
      tags: ["AI/ML", "React", "Python", "TensorFlow", "Geolocation"],
      features: [
        "AI image recognition for pet matching",
        "Real-time location tracking",
        "Community notification system",
        "Pet profile management"
      ],
      color: "text-primary"
    },
    {
      title: "Amazon Clone",
      description: "Full-featured e-commerce platform with comprehensive admin dashboard, shopping cart, wishlist, and integrated payment system.",
      icon: ShoppingCart,
      tags: ["MERN Stack", "Payment Gateway", "Admin Panel", "Redux"],
      features: [
        "Complete admin dashboard",
        "Shopping cart & wishlist functionality",
        "Secure payment integration",
        "Order tracking system"
      ],
      color: "text-primary"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto px-4">
            A showcase of innovative solutions combining cutting-edge technology with real-world applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="card-gradient p-4 sm:p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:transform hover:scale-105 group"
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Header */}
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${project.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Features */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-foreground/70 text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-xs border border-secondary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1 group/btn"
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;