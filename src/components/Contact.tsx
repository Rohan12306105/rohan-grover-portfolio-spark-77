import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rohangrover0610@gmail.com",
      href: "mailto:rohangrover0610@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9773675674",
      href: "tel:+919773675674",
      color: "text-primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "text-primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rohangrover0610/",
      color: "text-primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Rohan12306105",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card 
                      key={index} 
                      className="card-gradient p-4 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary"
                    >
                      <a 
                        href={info.href}
                        className="flex items-center space-x-4 group"
                      >
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                          <Icon className={`h-6 w-6 ${info.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-foreground/70 font-medium">{info.label}</p>
                          <p className="text-foreground group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-all duration-300 hover:shadow-glow-primary hover:scale-110 group"
                    >
                      <Icon className={`h-6 w-6 ${social.color} group-hover:scale-110 transition-transform`} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="card-gradient p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-input/50 border-primary/30 focus:border-primary"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 bg-input/50 border-primary/30 focus:border-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 bg-input/50 border-primary/30 focus:border-primary resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero"
                size="lg"
                className="w-full group"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;