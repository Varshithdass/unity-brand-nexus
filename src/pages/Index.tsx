import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { Camera, Plane, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import cosmicHero from "@/assets/cosmic-hero.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
  };

  const scrollToBrands = () => {
    document.getElementById("brands")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Navigation variant="hub" />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${cosmicHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-cosmic-space/70 backdrop-blur-[1px]" />
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-cosmic-star rounded-full flex items-center justify-center animate-twinkle shadow-2xl">
                <Star className="w-10 h-10 text-cosmic-space" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-cosmic-star animate-float">
              UnitySpaceHub
            </h1>
            <p className="text-2xl md:text-3xl text-cosmic-star/80 font-light">
              Connecting Ideas. Creating Worlds.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-cosmic-star/70 max-w-2xl mx-auto">
              Welcome to the cosmic center of creativity and adventure. Discover our unique brands 
              that bring your wildest dreams to reality.
            </p>
            <Button 
              variant="cosmic" 
              size="xl" 
              onClick={scrollToBrands}
              className="animate-float"
            >
              Explore Our Brands <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        
        {/* Animated Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cosmic-star rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Brands Gallery */}
      <section id="brands" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-star mb-4">
              Our Universe of Brands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each brand in our galaxy offers unique experiences and exceptional services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Spotlight Studios Card */}
            <Card className="cosmic-card group cursor-pointer">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-spotlight-red rounded-lg flex items-center justify-center group-hover:bg-spotlight-gold transition-colors">
                  <Camera className="w-8 h-8 text-white group-hover:text-spotlight-black" />
                </div>
                <CardTitle className="text-3xl text-cosmic-star">Spotlight Studios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-lg text-muted-foreground">
                  A creative powerhouse specializing in photography, film, and media production. 
                  We craft visual stories that capture the essence of your brand and vision.
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-sm text-cosmic-star/70">Services:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Professional Photography</li>
                    <li>• Film Production & Editing</li>
                    <li>• Brand Media Solutions</li>
                  </ul>
                </div>
                <Link to="/spotlight-studios">
                  <Button variant="spotlight" size="lg" className="w-full">
                    Enter Studio <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Disco Travels Card */}
            <Card className="cosmic-card group cursor-pointer">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-disco-turquoise rounded-lg flex items-center justify-center group-hover:bg-disco-magenta transition-colors">
                  <Plane className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-cosmic-star">Disco Travels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-lg text-muted-foreground">
                  Your gateway to adventure and unforgettable experiences. We craft bespoke 
                  travel packages that turn your wanderlust into extraordinary memories.
                </CardDescription>
                <div className="space-y-2">
                  <p className="text-sm text-cosmic-star/70">Specialties:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom Travel Packages</li>
                    <li>• Adventure Tours</li>
                    <li>• Luxury Destinations</li>
                  </ul>
                </div>
                <Link to="/disco-travels">
                  <Button variant="disco-gradient" size="lg" className="w-full">
                    Start Adventure <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-cosmic-space/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cosmic-star mb-8">
            About UnitySpaceHub
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Born from the infinite possibilities of the cosmos, UnitySpaceHub serves as the central 
              constellation connecting diverse creative and business ventures across the galaxy of innovation.
            </p>
            <p>
              We believe in the power of unity—bringing together different industries, talents, and visions 
              under one stellar umbrella. Our mission is to create a space where ideas flourish, 
              creativity knows no bounds, and every project reaches for the stars.
            </p>
            <p className="text-cosmic-star/80 font-semibold">
              "In unity, we find strength. In space, we find freedom. In the hub, we find home."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-cosmic-star mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your cosmic journey? Let's connect across the stars.
            </p>
          </div>

          <Card className="cosmic-card">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-cosmic-star block mb-2">
                      Name
                    </label>
                    <Input 
                      required 
                      className="bg-cosmic-space/30 border-cosmic-star/30 focus:border-cosmic-star"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-cosmic-star block mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="bg-cosmic-space/30 border-cosmic-star/30 focus:border-cosmic-star"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-cosmic-star block mb-2">
                    Subject
                  </label>
                  <Input 
                    required 
                    className="bg-cosmic-space/30 border-cosmic-star/30 focus:border-cosmic-star"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-cosmic-star block mb-2">
                    Message
                  </label>
                  <Textarea 
                    required 
                    rows={4}
                    className="bg-cosmic-space/30 border-cosmic-star/30 focus:border-cosmic-star resize-none"
                  />
                </div>
                <Button type="submit" variant="cosmic" size="lg" className="w-full">
                  Send Message to the Stars
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer variant="hub" />
    </div>
  );
};

export default Index;