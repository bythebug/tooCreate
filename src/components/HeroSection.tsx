import { Button } from "@/components/ui/button";
import { ArrowRight, Infinity } from "lucide-react";
import heroImageDark from "@/assets/hero-black-yellow.jpg";
import heroImageLight from "@/assets/hero-luxury.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImageLight} 
          alt="Luxury tech background"
          className="w-full h-full object-cover opacity-20 dark:hidden"
        />
        <img 
          src={heroImageDark} 
          alt="Luxury tech background"
          className="w-full h-full object-cover opacity-30 hidden dark:block"
        />
        <div className="absolute inset-0 bg-luxury-gradient" />
      </div>
      
      {/* Floating Infinity Elements */}
      <div className="absolute top-20 right-20 opacity-10 dark:opacity-20">
        <Infinity className="w-16 h-16 text-accent animate-infinity" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-10 dark:opacity-20">
        <Infinity className="w-12 h-12 text-accent animate-infinity" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Premium Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-8">
            <span className="text-sm font-medium tracking-wide">Premium Growth Partner</span>
            {/* Add this property above to make it yellowish text-accent */}
          </div>
          
          <h1 className="text-luxury-xl text-foreground mb-8 leading-[0.85]">
            If It's <span className="text-accent font-bold">Growth</span>,<br />
            It's <span className="text-accent font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">BingeLoop</span>
          </h1>
          
          <p className="text-luxury-body mb-8 max-w-3xl mx-auto opacity-90">
            End-to-end creator and brand solutions. From strategy to execution, 
            we transform vision into measurable growth.
          </p>
          
          {/* Key Services Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['Strategy', 'Production', 'Design', 'Growth'].map((service) => (
              <span key={service} className="px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/30 rounded-full text-sm text-muted-foreground">
                {service}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button className="btn-luxury group text-lg px-10 py-4 h-auto">
              Schedule Your Free Strategy Call
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* <Button variant="ghost" className="text-muted-foreground hover:text-foreground transition-colors">
              View Our Work →
            </Button> */}
          </div>
        </div>
        
        
        {/* Uncomment if you want a bounce effect */}
        {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-3 h-5 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-1 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;