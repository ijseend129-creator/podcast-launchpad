import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Health & Wellness Coach",
    content:
      "I had zero experience with podcasting, but within a week I had my first episode live! The process was so smooth and stress-free. Highly recommend!",
    avatar: "SM",
  },
  {
    name: "David L.",
    role: "Business Consultant",
    content:
      "The editing quality is fantastic. My podcast sounds professional and I didn't have to learn any complicated software. Worth every penny.",
    avatar: "DL",
  },
  {
    name: "Emily R.",
    role: "Lifestyle Blogger",
    content:
      "Finally found someone who actually listens and cares about my vision. The personal touch makes all the difference. My audience loves the podcast!",
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What podcasters are saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it—hear from creators who've launched their podcasts with my help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
