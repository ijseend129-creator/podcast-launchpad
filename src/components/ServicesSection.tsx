import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Starter Launch",
    description: "Perfect for first-time podcasters ready to go live",
    price: "$299",
    priceNote: "one-time",
    features: [
      "Full podcast setup & branding",
      "1 professionally edited episode",
      "Show artwork design",
      "Distribution to all platforms",
      "Launch consultation call",
    ],
    buttonText: "Buy Now",
    isPopular: false,
  },
  {
    title: "Weekly Creator",
    description: "Ongoing support for consistent podcasters",
    price: "$199",
    priceNote: "/month",
    features: [
      "4 edited episodes per month",
      "Episode uploading & scheduling",
      "Show notes & descriptions",
      "Basic analytics review",
      "Priority email support",
    ],
    buttonText: "Subscribe",
    isPopular: true,
  },
  {
    title: "All-In Partner",
    description: "Complete done-for-you podcast management",
    price: "$499",
    priceNote: "/month",
    features: [
      "Everything in Weekly Creator",
      "Monthly strategy coaching call",
      "Social media content clips",
      "Guest outreach support",
      "Growth recommendations",
    ],
    buttonText: "Subscribe",
    isPopular: false,
  },
];

const ServicesSection = () => {
  const handleServiceClick = (serviceName: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose your podcast journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're just starting out or ready to scale, there's a plan that fits your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
              onButtonClick={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
