import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SmoothieDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Smoothie Animation Dashboard</h1>
            <p className="text-xl text-muted-foreground mb-6">
              An interactive dashboard with smooth animations for a health tracking application, focusing on data visualization and user delight.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Dashboard UI</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Animation</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Data Viz</span>
            </div>
          </div>

          {/* Project Image Placeholder */}
          <Card className="mb-12 overflow-hidden border-none shadow-soft">
            <div className="h-96 bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
              <ExternalLink className="w-16 h-16 text-foreground/20" />
            </div>
          </Card>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The goal was to transform a standard health tracking dashboard into an engaging experience through 
                thoughtful animations and transitions. The challenge was to enhance user delight without sacrificing 
                performance or data clarity.
              </p>
            </section>

            {/* Design Process */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Design Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary-foreground font-bold">1</div>
                  <h3 className="font-semibold mb-2">User Flow Analysis</h3>
                  <p className="text-sm text-muted-foreground">Mapped out user journeys to identify key interaction points</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary-foreground font-bold">2</div>
                  <h3 className="font-semibold mb-2">Animation Strategy</h3>
                  <p className="text-sm text-muted-foreground">Developed animation principles that enhance without distracting</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary-foreground font-bold">3</div>
                  <h3 className="font-semibold mb-2">Interactive Prototyping</h3>
                  <p className="text-sm text-muted-foreground">Created high-fidelity prototypes with working animations</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4 text-secondary-foreground font-bold">4</div>
                  <h3 className="font-semibold mb-2">User Testing</h3>
                  <p className="text-sm text-muted-foreground">Validated designs with target users for usability</p>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span>Smooth chart transitions that reveal data progressively</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span>Microinteractions for buttons, cards, and navigation elements</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span>Loading states with engaging skeleton screens</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0" />
                  <span>Celebration animations for milestone achievements</span>
                </li>
              </ul>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center border-none bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <p className="text-3xl font-bold text-secondary-foreground mb-2">Improved</p>
                  <p className="text-sm text-muted-foreground">User Retention</p>
                </Card>
                <Card className="p-6 text-center border-none bg-gradient-to-br from-primary/10 to-primary/5">
                  <p className="text-3xl font-bold text-primary mb-2">Engaging</p>
                  <p className="text-sm text-muted-foreground">Microinteractions</p>
                </Card>
                <Card className="p-6 text-center border-none bg-gradient-to-br from-accent/10 to-accent/5">
                  <p className="text-3xl font-bold text-accent-foreground mb-2">Enhanced</p>
                  <p className="text-sm text-muted-foreground">User Experience</p>
                </Card>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SmoothieDashboard;