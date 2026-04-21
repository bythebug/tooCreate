import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Palette, 
  TrendingUp, 
  Users, 
  Rocket, 
  Target,
  BarChart3,
  MessageCircle
} from "lucide-react";

const ServicesSection = () => {
  const serviceCategories = [
    {
      category: "Creative Excellence",
      color: "accent",
      services: [
        {
          icon: Video,
          title: "Premium Video Production",
          description: "Cinematic-quality content creation from concept to post-production.",
          features: ["4K Production", "Motion Graphics", "Color Grading"]
        },
        {
          icon: Palette,
          title: "Brand Design & Motion",
          description: "Visual identity design and motion graphics that captivate audiences.",
          features: ["Brand Guidelines", "3D Animation", "UI/UX Design"]
        }
      ]
    },
    {
      category: "Strategic Growth",
      color: "accent/80",
      services: [
        {
          icon: TrendingUp,
          title: "Platform Optimization",
          description: "Accelerate growth across YouTube, Instagram, TikTok, and LinkedIn.",
          features: ["Algorithm Mastery", "Content Strategy", "Audience Development"]
        },
        {
          icon: MessageCircle,
          title: "Content Strategy",
          description: "Data-driven content frameworks that drive engagement and conversions.",
          features: ["Editorial Calendars", "Trend Analysis", "Performance Optimization"]
        }
      ]
    },
    {
      category: "Business Impact",
      color: "accent/60",
      services: [
        {
          icon: Rocket,
          title: "Product Launches",
          description: "Go-to-market strategies for tech products and startup ecosystems.",
          features: ["Launch Strategy", "PR Campaigns", "Influencer Networks"]
        },
        {
          icon: BarChart3,
          title: "Growth Consulting",
          description: "Strategic analytics and optimization to scale your operations.",
          features: ["Data Analytics", "ROI Optimization", "Scale Strategy"]
        }
      ]
    },
    {
      category: "Partnership & Execution",
      color: "accent/40",
      services: [
        {
          icon: Users,
          title: "Creator Collaborations",
          description: "Strategic partnerships that deliver authentic brand impact.",
          features: ["Creator Matching", "Campaign Management", "Performance Tracking"]
        },
        {
          icon: Target,
          title: "Campaign Execution",
          description: "Full-scale campaign planning and execution for maximum ROI.",
          features: ["Multi-Platform", "Real-time Optimization", "Detailed Reporting"]
        }
      ]
    }
  ];

  return (
    <section className="py-32 px-6 bg-subtle-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-accent border-accent/30 backdrop-blur-sm">
            Premium Services
          </Badge>
          
          <h2 className="text-luxury-lg text-foreground mb-8">
            End-to-end execution for <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">creators and brands</span><br />
            that demand <span className="text-accent">excellence</span>.
          </h2>
          
          <p className="text-luxury-body max-w-4xl mx-auto">
            From initial strategy to final delivery, we handle every aspect of your content 
            and growth journey with precision, creativity, and measurable results.
          </p>
        </div>
        
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.category} className="stagger-children">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                  {category.category}
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto opacity-60" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, index) => (
                  <div 
                    key={service.title}
                    className="card-luxury group relative overflow-hidden"
                    style={{ '--stagger': index } as React.CSSProperties}
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-all duration-500 group-hover:scale-110 relative">
                          <service.icon className="w-8 h-8 text-accent" />
                          <div className="absolute inset-0 bg-accent/20 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                          {service.title}
                        </h4>
                        
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <span 
                              key={feature}
                              className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                              style={{ transitionDelay: `${featureIndex * 100}ms` }}
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;