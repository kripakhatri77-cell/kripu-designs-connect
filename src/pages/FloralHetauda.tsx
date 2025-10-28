import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FloralHetauda = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Floral Hetauda Website</h1>
            <p className="text-xl text-muted-foreground mb-6">
              An elegant e-commerce website for a local flower shop, emphasizing visual appeal and seamless shopping experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Web Design</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">E-commerce</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">UI/UX</span>
            </div>
          </div>

          {/* Project Image Placeholder */}
          <Card className="mb-12 overflow-hidden border-none shadow-soft">
            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <ExternalLink className="w-16 h-16 text-foreground/20" />
            </div>
          </Card>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Floral Hetauda needed a digital presence that would showcase their beautiful flower arrangements 
                while providing customers with an easy way to browse and order. The challenge was to create a 
                visually stunning design that didn't compromise on functionality and user experience.
              </p>
            </section>

            {/* Design Process */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Design Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">1</div>
                  <h3 className="font-semibold mb-2">Market Research</h3>
                  <p className="text-sm text-muted-foreground">Analyzed competitor websites and identified gaps in local flower delivery services</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">2</div>
                  <h3 className="font-semibold mb-2">Wireframes</h3>
                  <p className="text-sm text-muted-foreground">Created low-fidelity wireframes focusing on user flow and product discovery</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">3</div>
                  <h3 className="font-semibold mb-2">Visual Design</h3>
                  <p className="text-sm text-muted-foreground">Developed a soft, floral-inspired color palette with elegant typography</p>
                </Card>
                <Card className="p-6 border-none bg-card/50">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4 text-primary font-bold">4</div>
                  <h3 className="font-semibold mb-2">Prototyping</h3>
                  <p className="text-sm text-muted-foreground">Built interactive prototypes and tested with potential customers</p>
                </Card>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span>Visual product catalog with high-quality flower arrangement photos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span>Easy filtering by occasion, price range, and flower type</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span>Seamless checkout process with multiple payment options</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <span>Mobile-responsive design for on-the-go ordering</span>
                </li>
              </ul>
            </section>

            {/* Impact */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Impact & Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="p-6 text-center border-none bg-gradient-to-br from-primary/10 to-primary/5">
                  <p className="text-3xl font-bold text-primary mb-2">Enhanced</p>
                  <p className="text-sm text-muted-foreground">Brand Presence</p>
                </Card>
                <Card className="p-6 text-center border-none bg-gradient-to-br from-accent/10 to-accent/5">
                  <p className="text-3xl font-bold text-accent-foreground mb-2">Improved</p>
                  <p className="text-sm text-muted-foreground">User Engagement</p>
                </Card>
                <Card className="p-6 text-center border-none bg-gradient-to-br from-secondary/10 to-secondary/5">
                  <p className="text-3xl font-bold text-secondary-foreground mb-2">Increased</p>
                  <p className="text-sm text-muted-foreground">Online Orders</p>
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

export default FloralHetauda;