import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Star, Camera, Plane, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  variant?: "hub" | "spotlight" | "disco";
}

export const Footer = ({ variant = "hub" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const getFooterStyles = () => {
    switch (variant) {
      case "spotlight":
        return "bg-spotlight-black border-spotlight-gold/30";
      case "disco":
        return "bg-disco-turquoise/10 border-disco-magenta/30";
      default:
        return "bg-cosmic-space/90 border-cosmic-star/30";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "spotlight":
        return "text-spotlight-gold";
      case "disco":
        return "text-disco-magenta";
      default:
        return "text-cosmic-star";
    }
  };

  return (
    <footer className={`border-t backdrop-blur-md mt-20 ${getFooterStyles()}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className={`w-6 h-6 animate-twinkle ${getIconColor()}`} />
              <span className={`text-xl font-bold ${getIconColor()}`}>UnitySpaceHub</span>
            </div>
            <p className="text-muted-foreground">
              Connecting Ideas. Creating Worlds.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={`font-semibold ${getIconColor()}`}>Our Brands</h3>
            <div className="space-y-2">
              <Link to="/spotlight-studios" className="flex items-center space-x-2 text-muted-foreground hover:text-spotlight-gold transition-colors">
                <Camera className="w-4 h-4" />
                <span>Spotlight Studios</span>
              </Link>
              <Link to="/disco-travels" className="flex items-center space-x-2 text-muted-foreground hover:text-disco-turquoise transition-colors">
                <Plane className="w-4 h-4" />
                <span>Disco Travels</span>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`font-semibold ${getIconColor()}`}>Connect</h3>
            
            {/* Location */}
            <Link to="/location" className="flex items-center space-x-2 text-muted-foreground hover:text-cosmic-star transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Our Location</span>
            </Link>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            {variant !== "hub" && (
              <Link to="/">
                <Button variant="cosmic-outline" size="sm" className="mb-2">
                  <Home className="w-4 h-4 mr-2" />
                  Back to UnitySpaceHub
                </Button>
              </Link>
            )}
            <p className="text-muted-foreground text-sm">
              © {currentYear} UnitySpaceHub. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};