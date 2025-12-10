import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  priceNote?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  onButtonClick: () => void;
}

const ServiceCard = ({
  title,
  description,
  price,
  priceNote,
  features,
  buttonText,
  isPopular = false,
  onButtonClick,
}: ServiceCardProps) => {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-4px] ${
        isPopular
          ? "bg-gradient-primary text-primary-foreground shadow-card scale-105"
          : "bg-card border border-border shadow-soft"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-background text-primary text-sm font-semibold rounded-full shadow-soft">
          Most Popular
        </span>
      )}
      
      <h3 className={`font-display text-xl font-bold mb-2 ${isPopular ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h3>
      
      <p className={`text-sm mb-6 ${isPopular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {description}
      </p>
      
      <div className="mb-6">
        <span className={`text-4xl font-bold ${isPopular ? "text-primary-foreground" : "text-foreground"}`}>
          {price}
        </span>
        {priceNote && (
          <span className={`text-sm ml-2 ${isPopular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
            {priceNote}
          </span>
        )}
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPopular ? "text-primary-foreground" : "text-primary"}`} />
            <span className={`text-sm ${isPopular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <Button
        className={`w-full ${
          isPopular
            ? "bg-background text-primary hover:bg-background/90"
            : "bg-gradient-primary text-primary-foreground hover:opacity-90"
        }`}
        size="lg"
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;
