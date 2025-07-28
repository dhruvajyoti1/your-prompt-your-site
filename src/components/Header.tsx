import { Button } from "@/components/ui/button";
import { Leaf, Menu, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-nature shadow-soft">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-forest bg-clip-text text-transparent">
              EcoSphere
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </a>
            <a href="#waste" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Waste Analysis
            </a>
            <a href="#water" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Water Tracking
            </a>
            <a href="#pollution" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pollution Reports
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button variant="eco" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;