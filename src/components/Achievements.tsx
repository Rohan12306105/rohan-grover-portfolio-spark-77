import { Card } from "@/components/ui/card";
import { Trophy, Users, Zap, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Hackmania'25 Finalist",
      subtitle: "Top 10 out of 1500+ teams",
      description: "Secured a position in the top 10 teams among over 1500 participants in one of India's premier hackathons.",
      icon: Trophy,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/20"
    },
    {
      title: "TCS CodeVita Season 12",
      subtitle: "Rank: 5243 / 500,000+",
      description: "Achieved significant ranking among half a million participants in TCS's flagship global coding competition.",
      icon: Zap,
      color: "text-blue-400",
      bgColor: "bg-blue-400/20"
    }
  ];

  const extracurriculars = [
    {
      title: "Head of SIG – Data Structures in C++",
      organization: "CSI @ IPEC",
      description: "Leading a specialized interest group focused on advanced data structures and algorithms implementation in C++.",
      icon: Star,
      responsibilities: [
        "Organizing weekly coding sessions and workshops",
        "Mentoring junior students in competitive programming",
        "Developing curriculum for advanced DSA concepts"
      ]
    },
    {
      title: "Member of SIG – Web Development & Java",
      organization: "CSI @ IPEC",
      description: "Active contributor to web development and Java programming initiatives within the Computer Society of India chapter.",
      icon: Users,
      responsibilities: [
        "Collaborating on web development projects",
        "Conducting Java programming workshops",
        "Contributing to technical documentation"
      ]
    },
    {
      title: "Organizer, Faculty Department",
      organization: "Udbhav College Fest",
      description: "Key organizer for the college's annual technical and cultural festival, coordinating multiple events and teams.",
      icon: Trophy,
      responsibilities: [
        "Event planning and coordination",
        "Team leadership and delegation",
        "Logistics management and execution"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6 bg-card/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Achievements & Leadership
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        
        {/* Competitive Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Competitive Programming</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${achievement.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-foreground mb-1">{achievement.title}</h4>
                      <p className="text-primary font-semibold mb-3">{achievement.subtitle}</p>
                      <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Leadership & Extracurriculars</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {extracurriculars.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card 
                  key={index} 
                  className="card-gradient p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary hover:scale-105 hover:z-10 relative"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">{activity.title}</h4>
                        <p className="text-primary font-semibold text-sm">{activity.organization}</p>
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 text-sm leading-relaxed">
                      {activity.description}
                    </p>
                    
                    <div>
                      <h5 className="text-foreground font-semibold mb-2 text-sm">Key Responsibilities:</h5>
                      <ul className="space-y-1">
                        {activity.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2">
                            <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-foreground/70 text-xs">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;