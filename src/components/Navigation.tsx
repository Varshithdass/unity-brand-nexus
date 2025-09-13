import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Home } from "lucide-react";

interface NavigationProps {
  variant?: "hub" | "spotlight" | "disco";
}

export const Navigation = ({ variant = "hub" }: NavigationProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "spotlight":
        return "bg-spotlight-black/80 border-spotlight-gold/30";
      case "disco":
        return "bg-disco-turquoise/10 border-disco-magenta/30";
      default:
        return "bg-cosmic-space/80 border-cosmic-star/30";
    }
  };

  const getButtonVariant = () => {
    switch (variant) {
      case "spotlight":
        return "spotlight-outline";
      case "disco":
        return "disco-outline";
      default:
        return "cosmic-outline";
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${getVariantStyles()}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cosmic-star rounded-full flex items-center justify-center animate-twinkle">
              <Home className="w-4 h-4 text-cosmic-space" />
            </div>
            <span className="text-xl font-bold text-cosmic-star">UnitySpaceHub</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/#about" className="text-cosmic-star hover:text-cosmic-gold transition-colors">
              About
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-cosmic-star hover:text-cosmic-gold">
                  Our Brands <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-cosmic-space/90 border-cosmic-star/30 backdrop-blur-md">
                <DropdownMenuItem asChild>
                  <Link to="/spotlight-studios" className="text-cosmic-star hover:text-spotlight-gold cursor-pointer">
                    Spotlight Studios
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/disco-travels" className="text-cosmic-star hover:text-disco-turquoise cursor-pointer">
                    Disco Travels
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/#contact">
              <Button variant={getButtonVariant()} size="sm">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};