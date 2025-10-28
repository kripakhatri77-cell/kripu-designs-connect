import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HotelFindingApp = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hotel Finding App</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A user-friendly hotel booking application with intuitive search filters and immersive property previews.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Mobile App</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Travel</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Booking</span>
            </div>
          </div>

          {/* Project Image Placeholder */}
          <Card className="mb-12 overflow-hidden border-none shadow-soft">
            <div className="h-96 bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
              <ExternalLink className="w-16 h-16 text-foreground/20" />
            </div>
          </Card>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                The hotel finding app was designed to simplify the process of discovering and booking accommodations. 
                The main challenge was to create an interface that handles complex filtering options while maintaining 
                a clean, intuitive user experience.
              </p>
            </section>

            {/* Design Process */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Design Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-foreground font-bold">1</div>
                  <h3 className="font-semibold mb-2">Competitive Analysis</h3>
                  <p className="text-sm text-muted-foreground">Studied popular booking apps to identify best practices and gaps</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-foreground font-bold">2</div>
                  <h3 className="font-semibold mb-2">Journey Mapping</h3>
                  <p className="text-sm text-muted-foreground">Created user journey maps from search to booking confirmation</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-foreground font-bold">3</div>
                  <h3 className="font-semibold mb-2">High-Fidelity Mockups</h3>
                  <p className="text-sm text-muted-foreground">Designed detailed screens with real content and imagery</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent-foreground font-bold">4</div>
                  <h3 className="font-semibold mb-2">Usability Testing</h3>
                  <p className="text-sm text-muted-foreground">Conducted tests to refine the booking flow</p>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span>Advanced search filters (location, price, amenities, ratings)</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span>Immersive photo galleries with 360° virtual tours</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span>Real-time availability and instant booking confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                  <span>User reviews and ratings with helpful sorting options</span>
                </li>
              </ul>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center border-none bg-gradient-to-br from-accent/10 to-accent/5">
                  <p className="text-3xl font-bold text-accent-foreground mb-2">Streamlined</p>
                  <p className="text-sm text-muted-foreground">Booking Process</p>
                </Card>
                <Card className="p-6 text-center border-none bg-gradient-to-br from-primary/10 to-primary/5">
                  <p className="text-3xl font-bold text-primary mb-2">Increased</p>
                  <p className="text-sm text-muted-foreground">Conversions</p>
                </Card>
                <Card className="p-6 text-center border-none bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <p className="text-3xl font-bold text-secondary-foreground mb-2">Enhanced</p>
                  <p className="text-sm text-muted-foreground">User Satisfaction</p>
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

export default HotelFindingApp;