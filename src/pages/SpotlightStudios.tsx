import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Camera, Film, Edit, Palette, Star, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import spotlightHero from "@/assets/spotlight-hero.jpg";

const SpotlightStudios = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
  };

  const services = [
    {
      icon: Camera,
      title: "Professional Photography",
      description: "Corporate headshots, product photography, events, and artistic portraits that tell your story.",
      features: ["Corporate Headshots", "Product Photography", "Event Coverage", "Portrait Sessions"]
    },
    {
      icon: Film,
      title: "Film Production",
      description: "From concept to completion, we create compelling video content that captivates your audience.",
      features: ["Commercial Videos", "Documentary Films", "Music Videos", "Corporate Content"]
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Expert editing, color grading, and visual effects that bring your vision to life.",
      features: ["Video Editing", "Color Grading", "Visual Effects", "Audio Production"]
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Strategic creative guidance that ensures your brand message resonates with your target audience.",
      features: ["Brand Strategy", "Creative Concepts", "Art Direction", "Brand Consulting"]
    }
  ];

  const portfolioItems = [
    { title: "Tech Startup Campaign", category: "Commercial", image: "🎬" },
    { title: "Fashion Editorial", category: "Photography", image: "📸" },
    { title: "Documentary Series", category: "Film", image: "🎭" },
    { title: "Product Launch", category: "Commercial", image: "🚀" },
    { title: "Corporate Branding", category: "Photography", image: "🏢" },
    { title: "Music Video", category: "Film", image: "🎵" }
  ];

  return (
    <div className="min-h-screen bg-spotlight-black">
      <Navigation variant="spotlight" />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${spotlightHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-spotlight-black/80" />
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-spotlight-red rounded-full flex items-center justify-center shadow-2xl hover:bg-spotlight-gold transition-colors duration-300">
                <Camera className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white">
              Spotlight Studios
            </h1>
            <p className="text-2xl md:text-3xl text-spotlight-gold font-light">
              Crafting Stories. Capturing Moments.
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Where creativity meets technical excellence. We transform your vision into 
              compelling visual narratives that resonate with your audience.
            </p>
            <Button variant="spotlight-gold" size="xl" className="animate-pulse">
              View Our Work <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-spotlight-charcoal/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-spotlight-gold mb-4">
              Our Services
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive creative solutions tailored to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="spotlight-card group">
                <CardHeader className="space-y-4">
                  <div className="w-16 h-16 bg-spotlight-red rounded-lg flex items-center justify-center group-hover:bg-spotlight-gold transition-colors">
                    <service.icon className="w-8 h-8 text-white group-hover:text-spotlight-black" />
                  </div>
                  <CardTitle className="text-2xl text-spotlight-gold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-white/80">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="border-spotlight-gold/30 text-spotlight-gold">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-spotlight-gold mb-4">
              Featured Work
            </h2>
            <p className="text-xl text-white/70">
              A glimpse into our creative universe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="spotlight-card group cursor-pointer overflow-hidden">
                <div className="aspect-video bg-spotlight-charcoal flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {item.image}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg text-spotlight-gold">{item.title}</CardTitle>
                    <Badge className="bg-spotlight-red/20 text-spotlight-red border-spotlight-red/30">
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="spotlight-outline" size="lg">
              View Complete Portfolio <Star className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-spotlight-charcoal/50">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-spotlight-gold mb-4">
              Start Your Project
            </h2>
            <p className="text-xl text-white/70">
              Ready to bring your vision to life? Let's create something extraordinary together.
            </p>
          </div>

          <Card className="spotlight-card">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-spotlight-gold block mb-2">
                      Name
                    </label>
                    <Input 
                      required 
                      className="bg-spotlight-black/50 border-spotlight-gold/30 focus:border-spotlight-gold text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-spotlight-gold block mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      required 
                      className="bg-spotlight-black/50 border-spotlight-gold/30 focus:border-spotlight-gold text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-spotlight-gold block mb-2">
                    Project Type
                  </label>
                  <Input 
                    placeholder="Photography, Film, Branding, etc."
                    className="bg-spotlight-black/50 border-spotlight-gold/30 focus:border-spotlight-gold text-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-spotlight-gold block mb-2">
                    Project Details
                  </label>
                  <Textarea 
                    required 
                    rows={4}
                    placeholder="Tell us about your vision, timeline, and budget..."
                    className="bg-spotlight-black/50 border-spotlight-gold/30 focus:border-spotlight-gold text-white resize-none"
                  />
                </div>
                <Button type="submit" variant="spotlight-gold" size="lg" className="w-full">
                  Send Project Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer variant="spotlight" />
    </div>
  );
};

export default SpotlightStudios;