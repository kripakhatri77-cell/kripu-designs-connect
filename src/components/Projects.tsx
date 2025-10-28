import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "HealthCare App Redesign",
      category: "Mobile App",
      description: "Redesigned patient experience for a healthcare platform, focusing on accessibility and ease of use.",
      process: "Research → Wireframes → Prototyping → User Testing",
      impact: "40% increase in user satisfaction",
      color: "from-primary/20 to-accent/20",
    },
    {
      title: "E-Commerce Dashboard",
      category: "Web Design",
      description: "Created an intuitive dashboard for sellers to manage inventory and track sales performance.",
      process: "User Interviews → Information Architecture → Visual Design",
      impact: "Reduced task completion time by 35%",
      color: "from-secondary/20 to-primary/20",
    },
    {
      title: "Social Learning Platform",
      category: "UX/UI Design",
      description: "Designed a collaborative learning platform that connects students with mentors.",
      process: "Persona Development → Journey Mapping → Interactive Prototypes",
      impact: "4.8/5 user rating on launch",
      color: "from-accent/20 to-secondary/20",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing the design process from research to final implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-none shadow-soft hover:shadow-hover transition-smooth"
            >
              {/* Project Image Placeholder with gradient */}
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-smooth flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-foreground opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Design Process</p>
                    <p className="text-sm">{project.process}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground mb-1">Impact</p>
                    <p className="text-sm font-medium text-primary">{project.impact}</p>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full group/btn justify-between"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-smooth" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
