import { Mic, Wand2, Globe } from "lucide-react";

const steps = [
  {
    icon: Mic,
    title: "You record your ideas",
    description: "Just hit record and share your thoughts. No fancy equipment needed—your phone works great.",
  },
  {
    icon: Wand2,
    title: "I edit and publish",
    description: "I transform your raw recording into a polished episode with intro, outro, and clean audio.",
  },
  {
    icon: Globe,
    title: "Your podcast goes live",
    description: "Your episode is published everywhere—Spotify, Apple, and all major podcast platforms.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            How It Works
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three simple steps to podcast success
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No complicated processes. Just record, send, and watch your podcast come to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative inline-flex mb-6">
                <div className="w-32 h-32 rounded-full bg-accent flex items-center justify-center">
                  <step.icon className="w-12 h-12 text-primary" />
                </div>
                <span className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </span>
              </div>
              
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
