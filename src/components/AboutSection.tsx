import { Heart, Shield, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              About the Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Personal podcast support,{" "}
              <span className="text-gradient">just for you</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              This isn't a cookie-cutter podcast factory. I offer personal, one-on-one service 
              designed specifically for first-time podcasters who want to share their voice 
              with the world but don't know where to start.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're nervous about the tech, short on time, or just want someone 
              to guide you through the process—I've got you covered. You bring the ideas, 
              I handle everything else.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="flex gap-4 p-6 rounded-2xl bg-secondary/50 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">No Tech Knowledge Needed</h3>
                <p className="text-muted-foreground">
                  I handle all the technical stuff—you just need to hit record.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-secondary/50 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Fast Setup</h3>
                <p className="text-muted-foreground">
                  Get your podcast live in days, not months. Quick turnaround guaranteed.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-secondary/50 shadow-soft">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Stress-Free Support</h3>
                <p className="text-muted-foreground">
                  Friendly guidance every step of the way. Questions? I'm here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
