import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-soft opacity-80" />
      </div>
      
      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-accent/20 blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            UI/UX Designer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Designing experiences that{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              connect people and purpose
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting meaningful digital experiences through thoughtful design, user research, and intuitive interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="rounded-full px-8 shadow-soft hover:shadow-hover transition-smooth"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
