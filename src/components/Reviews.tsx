import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  service?: string;
  date: string;
}

interface ReviewsProps {
  variant?: "spotlight" | "disco" | "hub";
  className?: string;
}

export const Reviews = ({ variant = "hub", className }: ReviewsProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "spotlight":
        return {
          accent: "text-spotlight-gold",
          bg: "bg-spotlight-black/20",
          border: "border-spotlight-gold/30"
        };
      case "disco":
        return {
          accent: "text-disco-turquoise",
          bg: "bg-disco-turquoise/10",
          border: "border-disco-turquoise/30"
        };
      default:
        return {
          accent: "text-cosmic-star",
          bg: "bg-cosmic-space/20",
          border: "border-cosmic-star/30"
        };
    }
  };

  const getReviews = (): Review[] => {
    switch (variant) {
      case "spotlight":
        return [
          {
            id: 1,
            name: "Priya Sharma",
            rating: 5,
            comment: "Absolutely stunning photography! They captured our wedding perfectly. The attention to detail and creative vision exceeded our expectations.",
            service: "Wedding Photography",
            date: "2 weeks ago"
          },
          {
            id: 2,
            name: "Raj Patel",
            rating: 5,
            comment: "Professional film production services. The team was incredibly talented and delivered a high-quality corporate video that boosted our brand image.",
            service: "Corporate Video",
            date: "1 month ago"
          },
          {
            id: 3,
            name: "Anita Reddy",
            rating: 4,
            comment: "Great experience with product photography. The images perfectly showcased our products and helped increase our online sales significantly.",
            service: "Product Photography",
            date: "3 weeks ago"
          }
        ];
      case "disco":
        return [
          {
            id: 1,
            name: "Vikram Singh",
            rating: 5,
            comment: "What an incredible trip to Goa! Every detail was perfectly planned. The accommodations, activities, and local experiences were amazing.",
            service: "Goa Beach Package",
            date: "1 week ago"
          },
          {
            id: 2,
            name: "Meera Nair",
            rating: 5,
            comment: "Himalayan trek was life-changing! Professional guides, safety measures, and breathtaking views. Highly recommend for adventure seekers.",
            service: "Himalayan Trek",
            date: "2 months ago"
          },
          {
            id: 3,
            name: "Arjun Kumar",
            rating: 4,
            comment: "Excellent Kerala backwater experience. The houseboat was comfortable and the cultural immersion was authentic. Great value for money!",
            service: "Kerala Backwaters",
            date: "3 weeks ago"
          }
        ];
      default:
        return [
          {
            id: 1,
            name: "Rohit Gupta",
            rating: 5,
            comment: "UnitySpaceHub delivered exceptional results across multiple projects. Their diverse expertise and professional approach make them a reliable partner.",
            date: "2 weeks ago"
          },
          {
            id: 2,
            name: "Kavya Iyer",
            rating: 5,
            comment: "From photography to travel planning, they excel in everything. One-stop solution for creative and adventure needs. Highly professional team!",
            date: "1 month ago"
          }
        ];
    }
  };

  const styles = getVariantStyles();
  const reviews = getReviews();

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={cn(
              "w-4 h-4",
              star <= rating ? `fill-current ${styles.accent}` : "text-muted-foreground"
            )}
          />
        ))}
      </div>
    );
  };

  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", styles.accent)}>
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from our valued customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className={cn("cosmic-card", styles.bg, styles.border)}>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", styles.bg)}>
                        <User className={cn("w-5 h-5", styles.accent)} />
                      </div>
                      <div>
                        <h3 className={cn("font-semibold", styles.accent)}>{review.name}</h3>
                        <p className="text-xs text-muted-foreground">{review.date}</p>
                      </div>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  
                  {review.service && (
                    <div className={cn("text-sm font-medium", styles.accent)}>
                      {review.service}
                    </div>
                  )}
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};