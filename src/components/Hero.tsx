import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Droplets, Recycle, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-sky py-20 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80" />
      
      <div className="container relative z-10 mx-auto max-w-screen-xl px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2 text-sm text-accent-foreground mb-6 animate-slide-up">
            <Shield className="h-4 w-4" />
            <span>AI-Powered Sustainability Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 animate-slide-up">
            Build a{" "}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              Sustainable Future
            </span>
            <br />
            with EcoSphere
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up">
            Harness the power of AI to classify waste, forecast water usage, and analyze pollution data. 
            Make data-driven decisions for a greener tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button variant="eco" size="lg" className="text-lg px-8 py-6">
              Start Your Journey
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/60 backdrop-blur border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="p-3 rounded-full bg-gradient-forest mb-4">
                <Recycle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Waste Classification</h3>
              <p className="text-muted-foreground text-center">
                AI-powered image recognition to automatically classify and sort waste materials
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/60 backdrop-blur border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="p-3 rounded-full bg-gradient-ocean mb-4">
                <Droplets className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Water Usage Forecasting</h3>
              <p className="text-muted-foreground text-center">
                Predict water consumption patterns and optimize usage with machine learning
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 rounded-2xl bg-card/60 backdrop-blur border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="p-3 rounded-full bg-gradient-earth mb-4">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Pollution Analysis</h3>
              <p className="text-muted-foreground text-center">
                Advanced analytics to monitor, analyze, and report environmental pollution data
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;