import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Star, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-space via-cosmic-nebula to-cosmic-space" />
      
      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cosmic-star rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto px-4">
        <div className="space-y-4">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-cosmic-star rounded-full flex items-center justify-center animate-pulse shadow-2xl">
              <Star className="w-12 h-12 text-cosmic-space" />
            </div>
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bold text-cosmic-star animate-float">
            404
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-cosmic-star">
            Lost in Space
          </h2>
          
          <p className="text-xl text-cosmic-star/80 max-w-md mx-auto">
            It seems like you've drifted too far from our galaxy. 
            Let's get you back to familiar stars.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="cosmic" size="lg" className="animate-pulse">
              <Home className="w-5 h-5 mr-2" />
              Return to Hub
            </Button>
          </Link>
          
          <Button 
            variant="cosmic-outline" 
            size="lg" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 text-cosmic-star/60 text-sm">
          <p>Need help navigating our universe?</p>
          <Link to="/#contact" className="text-cosmic-star hover:text-cosmic-gold underline transition-colors">
            Contact Mission Control
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
