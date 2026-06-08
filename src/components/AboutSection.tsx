import { Badge } from "@/components/ui/badge";
import { Sparkles, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Execution-Obsessed",
      description: "We turn strategies into impactful, measurable, and scalable real-world growth.",
      metric: "500%",
      metricLabel: "Avg. Growth"
    },
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Every piece of content is crafted to captivate and convert.",
      metric: "10M+",
      metricLabel: "Views Generated"
    },
    {
      icon: Zap,
      title: "Holistic Solutions",
      description: "Complete, seamless management for maximum growth impact.",
      metric: "98%",
      metricLabel: "Client Retention"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-subtle-gradient" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-accent border-accent/30 backdrop-blur-sm">
            About toocreate
          </Badge>
          
          <h2 className="text-luxury-lg text-foreground mb-8">
            We're the <span className="text-accent">growth partner</span> that turns<br />
            your vision into <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">market dominance</span>.
          </h2>
          
          <p className="text-luxury-body max-w-4xl mx-auto">
            toocreate combines the creative firepower of a top-tier studio with the strategic 
            precision of elite consulting. We obsess over every detail, from brand messaging 
            to performance metrics, ensuring your launch doesn't just succeed — it dominates.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {values.map((value, index) => (
            <div 
              key={value.title}
              className="card-luxury text-center group relative"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-3xl mb-6 group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110 relative">
                <value.icon className="w-10 h-10 text-accent" />
                <div className="absolute inset-0 bg-accent/20 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              
              <div className="mb-6">
                <div className="text-3xl font-bold text-accent mb-1">{value.metric}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{value.metricLabel}</div>
              </div>
              
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;