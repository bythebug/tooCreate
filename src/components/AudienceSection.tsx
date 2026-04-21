import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Building2, 
  Rocket,
  ArrowRight
} from "lucide-react";

const AudienceSection = () => {
  const audiences = [
    {
      icon: Star,
      title: "Creators",
      subtitle: "Content Creators & Influencers",
      description: "Scale your personal brand with strategic content and platform growth. Transform your creativity into sustainable revenue streams that last.",
      features: ["Content Strategy", "Channel Growth", "Brand Partnerships", "Monetization"],
      stats: { value: "2.3M+", label: "Avg. Follower Growth" },
      gradient: "from-yellow-400/20 to-orange-500/20"
    },
    {
      icon: Building2,
      title: "Brands", 
      subtitle: "Established Companies",
      description: "Amplify your brand presence with authentic content that resonates. Drive engagement and build lasting customer relationships at scale.",
      features: ["Brand Storytelling", "Creator Partnerships", "Campaign Management", "Performance Analytics"],
      stats: { value: "300%", label: "Avg. Engagement Boost" },
      gradient: "from-blue-400/20 to-purple-500/20"
    },
    {
      icon: Rocket,
      title: "Startups",
      subtitle: "Tech Companies & Founders", 
      description: "Launch with confidence using our proven go-to-market strategies. From MVP to market leader, we accelerate your growth trajectory.",
      features: ["Product Launches", "Market Positioning", "Growth Strategy", "Investor Relations"],
      stats: { value: "$50M+", label: "Funding Raised for Clients" },
      gradient: "from-green-400/20 to-teal-500/20"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-subtle-gradient" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-accent border-accent/30 backdrop-blur-sm">
            Who We Serve
          </Badge>
          
          <h2 className="text-luxury-lg text-foreground mb-8">
            Trusted by <span className="text-accent">creators</span>, <span className="text-accent">brands</span><br />
            & <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">visionary startups</span>
          </h2>
          
          <p className="text-luxury-body max-w-4xl mx-auto">
            Whether you're building a personal brand, scaling a company, or launching the next big thing, 
            we have the expertise, creativity, and strategic insight to elevate your presence and accelerate your growth.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 stagger-children">
          {audiences.map((audience, index) => (
            <div 
              key={audience.title}
              className="card-luxury group relative overflow-hidden"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              {/* Dynamic gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon and stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-3xl group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110 relative">
                    <audience.icon className="w-10 h-10 text-accent" />
                    <div className="absolute inset-0 bg-accent/20 rounded-3xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-accent">{audience.stats.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      {audience.stats.label}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  {audience.title}
                </h3>
                
                <p className="text-accent font-medium mb-4 text-lg">
                  {audience.subtitle}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {audience.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {audience.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ transitionDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="btn-luxury group/btn w-full relative overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent/80 scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left" />
                </Button>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;