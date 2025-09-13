import { Card } from "@/components/ui/card";
import { ImageIcon, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface PhotoPlaceholderProps {
  title: string;
  description?: string;
  className?: string;
  variant?: "spotlight" | "disco";
  size?: "sm" | "md" | "lg";
}

export const PhotoPlaceholder = ({ 
  title, 
  description, 
  className,
  variant = "spotlight",
  size = "md"
}: PhotoPlaceholderProps) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-32";
      case "lg":
        return "h-80";
      default:
        return "h-48";
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "disco":
        return "border-disco-turquoise/30 bg-disco-turquoise/10 text-disco-turquoise";
      default:
        return "border-spotlight-gold/30 bg-spotlight-gold/10 text-spotlight-gold";
    }
  };

  return (
    <Card className={cn(
      "relative overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105",
      getSizeClasses(),
      getVariantStyles(),
      className
    )}>
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 p-4 text-center">
        <div className="relative">
          <ImageIcon className="w-12 h-12 opacity-50" />
          <Upload className="w-6 h-6 absolute -top-1 -right-1 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h3 className="font-semibold text-sm">{title}</h3>
          {description && (
            <p className="text-xs opacity-70 mt-1">{description}</p>
          )}
        </div>
        <div className="text-xs opacity-60">
          Click to upload photo
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-all duration-300" />
    </Card>
  );
};