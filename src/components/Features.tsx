import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Camera, 
  TrendingUp, 
  AlertTriangle, 
  Database, 
  Zap,
  ChevronRight,
  CheckCircle
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Camera,
      title: "AI Waste Classification",
      description: "Upload images of waste items and get instant classification with recycling instructions",
      gradient: "gradient-forest",
      features: ["Real-time image analysis", "99.2% accuracy rate", "Custom training data", "Multi-language support"]
    },
    {
      icon: TrendingUp,
      title: "Water Usage Forecasting",
      description: "Predict future water consumption patterns using advanced machine learning algorithms",
      gradient: "gradient-ocean", 
      features: ["7-day forecasting", "Usage optimization tips", "Historical trend analysis", "Smart alerts"]
    },
    {
      icon: AlertTriangle,
      title: "Pollution Report Analysis",
      description: "Analyze environmental data and generate comprehensive pollution assessment reports",
      gradient: "gradient-earth",
      features: ["Air quality monitoring", "Water contamination detection", "Soil analysis", "Compliance tracking"]
    }
  ];

  const techFeatures = [
    {
      icon: Brain,
      title: "Custom AI Models",
      description: "Proprietary models trained on environmental datasets"
    },
    {
      icon: Database,
      title: "Real-time Data Processing",
      description: "Process and analyze environmental data in real-time"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Get instant results with optimized ML inference"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Powerful AI Features for{" "}
            <span className="bg-gradient-nature bg-clip-text text-transparent">
              Environmental Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of environmental monitoring with our cutting-edge AI technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group">
              <div className={`absolute inset-0 bg-${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              <CardHeader className="relative z-10">
                <div className={`p-3 rounded-xl bg-${feature.gradient} w-fit mb-4 shadow-soft`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-6">
                  {feature.features.map((item, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Built with Advanced Technology</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our platform leverages cutting-edge machine learning and cloud infrastructure for maximum performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techFeatures.map((tech, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-card border shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="p-2 rounded-lg bg-accent/10">
                <tech.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold mb-2">{tech.title}</h4>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;