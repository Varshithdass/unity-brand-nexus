import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Plane, MapPin, Calendar, Users, Star, ArrowRight, Globe, Mountain, Waves } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { Reviews } from "@/components/Reviews";
import { Testimonials } from "@/components/Testimonials";
import { AIAssistant } from "@/components/AIAssistant";
import discoHero from "@/assets/disco-hero.jpg";

const DiscoTravels = () => {
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const contactData = {
      name: formData.get('name'),
      email: formData.get('email'),
      destination: formData.get('destination'),
      travelDate: formData.get('travelDate'),
      groupSize: formData.get('groupSize'),
      message: formData.get('message')
    };
    
    // TODO: Implement email sending to unityspacehub@gmail.com
    console.log('Disco Travels booking:', contactData);
    
    toast({
      title: "Booking Request Sent!",
      description: "Your adventure awaits! We'll contact you within 24 hours to plan your journey at unityspacehub@gmail.com",
    });
  };

  const packages = [
    {
      icon: Waves,
      title: "Tropical Paradise",
      price: "From ₹2,04,999",
      duration: "7 Days",
      description: "Escape to pristine beaches, crystal clear waters, and vibrant coral reefs.",
      highlights: ["Luxury Resort Stay", "Snorkeling Adventures", "Sunset Cruises", "Local Cuisine Tours"]
    },
    {
      icon: Mountain,
      title: "Mountain Explorer",
      price: "From ₹1,55,999",
      duration: "5 Days",
      description: "Conquer breathtaking peaks and immerse yourself in alpine wilderness.",
      highlights: ["Guided Hiking", "Alpine Lodges", "Wildlife Spotting", "Photography Tours"]
    },
    {
      icon: Globe,
      title: "Cultural Odyssey",
      price: "From ₹2,70,999",
      duration: "10 Days",
      description: "Discover ancient civilizations and vibrant modern cultures around the world.",
      highlights: ["Historical Sites", "Local Guides", "Cultural Workshops", "Authentic Dining"]
    },
    {
      icon: Plane,
      title: "Custom Adventure",
      price: "Quote Based",
      duration: "Flexible",
      description: "Tailored experiences designed around your unique travel dreams and preferences.",
      highlights: ["Personalized Itinerary", "VIP Treatment", "Exclusive Access", "24/7 Support"]
    }
  ];

  const destinations = [
    { name: "Bali, Indonesia", rating: 4.9, travelers: "2.3k", image: "🏝️" },
    { name: "Swiss Alps", rating: 4.8, travelers: "1.8k", image: "🏔️" },
    { name: "Tokyo, Japan", rating: 4.9, travelers: "3.1k", image: "🏙️" },
    { name: "Santorini, Greece", rating: 4.7, travelers: "2.7k", image: "🏛️" },
    { name: "Patagonia", rating: 4.8, travelers: "1.2k", image: "🦌" },
    { name: "Maldives", rating: 5.0, travelers: "1.9k", image: "🏖️" }
  ];

  const blogPosts = [
    { title: "Hidden Gems of Southeast Asia", category: "Adventure", readTime: "5 min" },
    { title: "Sustainable Travel Tips", category: "Guide", readTime: "8 min" },
    { title: "Photography in Remote Locations", category: "Tips", readTime: "6 min" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation variant="disco" />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${discoHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-disco-turquoise/20 via-disco-orange/20 to-disco-magenta/20" />
        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-disco-turquoise rounded-full flex items-center justify-center shadow-2xl hover:bg-disco-magenta transition-colors duration-300 animate-pulse">
                <Plane className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-2xl">
              Disco Travels
            </h1>
            <p className="text-2xl md:text-3xl text-disco-yellow font-light drop-shadow-lg">
              Your Adventure Awaits
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
              Embark on extraordinary journeys to the world's most incredible destinations. 
              We craft bespoke adventures that create memories to last a lifetime.
            </p>
            <Button variant="disco-gradient" size="xl" className="animate-bounce">
              Start Your Journey <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-disco-turquoise/5 to-disco-orange/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-disco-magenta mb-4">
              Travel Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated adventures designed to exceed your wildest travel dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="disco-card group overflow-hidden">
                <CardHeader className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-disco-turquoise rounded-lg flex items-center justify-center group-hover:bg-disco-magenta transition-colors">
                      <pkg.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-disco-magenta">{pkg.price}</p>
                      <p className="text-sm text-muted-foreground">{pkg.duration}</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-disco-magenta">{pkg.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-disco-yellow" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="disco" className="w-full mt-4">
                    View Details <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-disco-magenta mb-4">
              Popular Destinations
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover the world's most breathtaking locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <PhotoPlaceholder
                key={index}
                title={destination.name}
                description={`${destination.rating} ⭐ • ${destination.travelers} travelers`}
                variant="disco"
                size="md"
                className="cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-disco-orange/5 to-disco-magenta/5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-disco-magenta mb-4">
              Travel Stories & Tips
            </h2>
            <p className="text-xl text-muted-foreground">
              Insights from fellow adventurers and travel experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="disco-card group cursor-pointer">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Badge className="bg-disco-turquoise/20 text-disco-turquoise border-disco-turquoise/30">
                      {post.category}
                    </Badge>
                    <CardTitle className="text-lg text-disco-magenta group-hover:text-disco-orange transition-colors">
                      {post.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="disco-outline" size="lg">
              View All Stories <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews variant="disco" />

      {/* Testimonials Section */}
      <Testimonials variant="disco" />

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-disco-magenta mb-4">
              Plan Your Adventure
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to explore? Let's create your perfect travel experience together.
            </p>
          </div>

          <Card className="disco-card">
            <CardContent className="p-8">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-disco-magenta block mb-2">
                      Name
                    </label>
                    <Input 
                      name="name"
                      required 
                      className="border-disco-turquoise/30 focus:border-disco-turquoise"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-disco-magenta block mb-2">
                      Email
                    </label>
                    <Input 
                      name="email"
                      type="email" 
                      required 
                      className="border-disco-turquoise/30 focus:border-disco-turquoise"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-disco-magenta block mb-2">
                    Preferred Destination
                  </label>
                  <Input 
                    name="destination"
                    placeholder="Where would you like to go?"
                    className="border-disco-turquoise/30 focus:border-disco-turquoise"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-disco-magenta block mb-2">
                      Travel Dates
                    </label>
                    <Input 
                      name="travelDate"
                      type="date"
                      className="border-disco-turquoise/30 focus:border-disco-turquoise"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-disco-magenta block mb-2">
                      Group Size
                    </label>
                    <Input 
                      name="groupSize"
                      type="number" 
                      min="1"
                      placeholder="How many travelers?"
                      className="border-disco-turquoise/30 focus:border-disco-turquoise"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-disco-magenta block mb-2">
                    Tell us about your dream trip
                  </label>
                  <Textarea 
                    name="message"
                    required 
                    rows={4}
                    placeholder="What kind of adventure are you looking for? Any special requirements or preferences?"
                    className="border-disco-turquoise/30 focus:border-disco-turquoise resize-none"
                  />
                </div>
                <Button type="submit" variant="disco-gradient" size="lg" className="w-full">
                  Start Planning My Adventure
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Assistant */}
      <AIAssistant />

      <Footer variant="disco" />
    </div>
  );
};

export default DiscoTravels;