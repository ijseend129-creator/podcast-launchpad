import { User, MessageCircle, Clock, Award } from "lucide-react";

const benefits = [
  {
    icon: User,
    text: "Designed for individuals, not companies",
  },
  {
    icon: MessageCircle,
    text: "Personal support, no templates",
  },
  {
    icon: Clock,
    text: "Saves time and removes stress",
  },
  {
    icon: Award,
    text: "Makes you sound professional from day one",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="section-padding bg-gradient-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice">
          <circle cx="100" cy="100" r="80" fill="currentColor" />
          <circle cx="700" cy="300" r="120" fill="currentColor" />
          <circle cx="400" cy="50" r="40" fill="currentColor" />
        </svg>
      </div>
      
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">
              Why Choose This Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Built for creators who want to be heard
            </h2>
            <p className="text-lg opacity-90 leading-relaxed">
              I understand that starting a podcast can feel overwhelming. That's why I've designed 
              this service to take the pressure off your shoulders and let you focus on what matters 
              most—your message.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
