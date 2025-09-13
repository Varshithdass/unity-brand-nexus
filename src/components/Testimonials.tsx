import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

interface TestimonialsProps {
  variant?: "spotlight" | "disco" | "hub";
  className?: string;
}

export const Testimonials = ({ variant = "hub", className }: TestimonialsProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "spotlight":
        return {
          accent: "text-spotlight-gold",
          bg: "bg-spotlight-black/30",
          border: "border-spotlight-gold/20",
          quote: "text-spotlight-gold/70"
        };
      case "disco":
        return {
          accent: "text-disco-turquoise",
          bg: "bg-disco-turquoise/20",
          border: "border-disco-turquoise/20",
          quote: "text-disco-turquoise/70"
        };
      default:
        return {
          accent: "text-cosmic-star",
          bg: "bg-cosmic-space/30",
          border: "border-cosmic-star/20",
          quote: "text-cosmic-star/70"
        };
    }
  };

  const getTestimonials = (): Testimonial[] => {
    switch (variant) {
      case "spotlight":
        return [
          {
            id: 1,
            name: "Rajesh Khanna",
            position: "Creative Director",
            company: "Bollywood Productions",
            content: "Spotlight Studios transformed our vision into reality. Their cinematography and attention to detail are unmatched in the industry. Every frame tells a story.",
            rating: 5
          },
          {
            id: 2,
            name: "Deepika Menon",
            position: "Marketing Head",
            company: "Tech Innovations India",
            content: "The corporate video they created for us increased our brand engagement by 300%. Professional, creative, and delivered on time. Absolutely recommended!",
            rating: 5
          }
        ];
      case "disco":
        return [
          {
            id: 1,
            name: "Amit Verma",
            position: "CEO",
            company: "StartUp India",
            content: "Disco Travels organized an incredible team retreat to Rishikesh. The adventure activities and cultural experiences brought our team closer together.",
            rating: 5
          },
          {
            id: 2,
            name: "Sunita Kapoor",
            position: "Travel Blogger",
            company: "Wanderlust India",
            content: "Their customized Kerala tour was beyond expectations. Every detail was perfectly planned, from authentic local cuisine to hidden gems only locals know about.",
            rating: 5
          }
        ];
      default:
        return [
          {
            id: 1,
            name: "Dr. Suresh Agarwal",
            position: "Founder",
            company: "MedTech Solutions",
            content: "UnitySpaceHub has been our creative partner for both product photography and corporate events. Their multi-brand approach gives us access to diverse expertise under one roof.",
            rating: 5
          },
          {
            id: 2,
            name: "Ritu Sharma",
            position: "Event Manager",
            company: "Grand Celebrations",
            content: "From capturing our events beautifully to planning our team's adventure trips, UnitySpaceHub delivers excellence across all services. Truly a one-stop creative solution.",
            rating: 5
          }
        ];
    }
  };

  const styles = getVariantStyles();
  const testimonials = getTestimonials();

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-4 h-4",
              star <= rating ? `fill-current ${styles.accent}` : "text-muted-foreground/30"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={cn("py-20 px-4", styles.bg, className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={cn("text-4xl md:text-5xl font-bold mb-4", styles.accent)}>
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from industry leaders who trust us to bring their visions to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className={cn("cosmic-card relative overflow-hidden", styles.border)}>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <Quote className={cn("w-12 h-12", styles.quote)} />
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <blockquote className="text-lg text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg", styles.bg)}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className={cn("font-semibold text-lg", styles.accent)}>
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};