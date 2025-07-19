import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    // Create a dummy PDF download - in a real scenario, this would point to an actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be the actual path to the resume file
    link.download = './Rohan Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card-gradient rounded-2xl p-8 border border-border/50 glow-primary">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Download My Resume
          </h2>
          
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a comprehensive overview of my education, experience, skills, and achievements 
            in a professionally formatted PDF document.
          </p>
          
          <Button 
            onClick={handleDownload}
            size="lg"
            className="group transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume (PDF)
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            Last updated: December 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;
