import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Infinity, CheckCircle, Zap, Trophy } from "lucide-react";

const STRATEGY_MAILTO = `mailto:hello@toocreate.com?subject=${encodeURIComponent('Free Strategy Call Request')}&body=${encodeURIComponent('Hi toocreate team,\n\nI would like to schedule a free strategy call to discuss growth opportunities for my brand.\n\nName: \nCompany/Brand: \nWhat I need help with: \nPreferred date/time: \n\nLooking forward to hearing from you!')}`;

const CTASection = () => {
  const benefits = [
    { icon: Zap, text: "Strategy session within 24 hours" },
    { icon: Trophy, text: "Proven growth frameworks" },
    { icon: CheckCircle, text: "Custom roadmap included" }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-luxury-gradient" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 opacity-10 dark:opacity-10">
        <Infinity className="w-32 h-32 text-accent animate-infinity" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 dark:opacity-10">
        <Infinity className="w-24 h-24 text-accent animate-infinity" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-accent/10 backdrop-blur-sm rounded-full border border-accent/20 mb-8">
            <span className="text-accent font-medium">Limited Spots Available This Month</span>
          </div>
          
          <h2 className="text-luxury-lg text-foreground mb-6">
            Ready to <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">dominate</span> your market?
          </h2>
          
          <p className="text-luxury-body mb-12 max-w-3xl mx-auto">
            Join the ranks of creators and brands who've scaled to millions of views, 
            generated substantial revenue, and built lasting market dominance. 
            Your transformation starts with one conversation.
          </p>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.text}
                className="flex items-center justify-center space-x-3 text-muted-foreground"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <benefit.icon className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button asChild className="btn-luxury">
              <a href={STRATEGY_MAILTO}>
                <Calendar className="mr-2 w-5 h-5" />
                Book Your Strategy Call
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            {/* <Button asChild variant="outline" className="btn-luxury-outline">
              <a href="#clients">
                View Case Studies
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button> */}
          </div>
          
          <p className="text-muted-foreground text-sm mb-12">
            Free 30-minute consultation • Custom growth strategy • Zero commitment
          </p>
          
          {/* Social Proof */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">10M+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Views Generated</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">500%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Avg Growth Rate</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24hr</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Response Time</div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground">
              Questions? Reach us at{" "}
              <a 
                href="mailto:hello@toocreate.com" 
                className="text-accent hover:text-accent/80 transition-colors font-medium"
              >
                hello@toocreate.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;