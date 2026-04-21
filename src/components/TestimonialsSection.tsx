import { Badge } from "@/components/ui/badge";
import { Quote, Star, Play, ExternalLink, Users, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const TestimonialsSection = () => {
  const [activeCreator, setActiveCreator] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [brandSlide, setBrandSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const brandCarouselRef = useRef<HTMLDivElement>(null);
  
  // Responsive cards per view for creators
  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 5;
    if (window.innerWidth < 640) return 1; // Mobile: 1 card
    if (window.innerWidth < 1024) return 2; // Tablet: 2 cards  
    return 5; // Desktop: 5 cards
  };

  // Responsive cards per view for brands
  const getBrandCardsPerView = () => {
    if (typeof window === 'undefined') return 6;
    if (window.innerWidth < 640) return 2; // Mobile: 2 brands
    if (window.innerWidth < 768) return 3; // Small tablet: 3 brands
    if (window.innerWidth < 1024) return 4; // Tablet: 4 brands
    return 6; // Desktop: 6 brands
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [brandCardsPerView, setBrandCardsPerView] = useState(getBrandCardsPerView);

  // Update cards per view on resize
  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
      setBrandCardsPerView(getBrandCardsPerView());
      setCurrentSlide(0); // Reset slide on resize
      setBrandSlide(0); // Reset brand slide on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      quote: "BingeLoop transformed our brand from unknown to industry leader in just 6 months. Their strategic approach and execution quality is unmatched.",
      author: "Sarah Chen",
      title: "CEO, TechFlow",
      rating: 5,
      company: "TechFlow",
      result: "500% growth in 6 months",
      avatar: "SC"
    },
    {
      quote: "Working with BingeLoop was the best investment we made for our creator brand. They understand both content and business strategy perfectly.",
      author: "Marcus Rodriguez", 
      title: "Content Creator, 2.3M followers",
      rating: 5,
      company: "Creator Brand",
      result: "2M+ new followers",
      avatar: "MR"
    },
    {
      quote: "Their go-to-market strategy for our product launch exceeded all expectations. Professional, creative, and results-driven.",
      author: "Emily Thompson",
      title: "Founder, InnovateLab",
      rating: 5,
      company: "InnovateLab",
      result: "$2M+ in revenue",
      avatar: "ET"
    }
  ];

  const brandPartners = [
    { 
      name: "Google", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "Tech Giant"
    },
    { 
      name: "Amazon", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      category: "E-commerce"
    },
    { 
      name: "YouTube", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",
      category: "Platform"
    },
    { 
      name: "Netflix", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      category: "Streaming"
    },
    { 
      name: "Meta", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      category: "Social Media"
    },
    { 
      name: "Instagram", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
      category: "Creator Platform"
    },
    {
      name: "TikTok",
      logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg",
      category: "Social Media"
    },
    {
      name: "Spotify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      category: "Audio Platform"
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      category: "Tech Giant"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      category: "Tech Giant"
    },
    {
      name: "LinkedIn",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
      category: "Professional Network"
    },
    {
      name: "Twitch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Twitch_Glitch_Logo_Purple.svg",
      category: "Streaming Platform"
    },
    {
      name: "Discord",
      logo: "https://upload.wikimedia.org/wikipedia/en/9/98/Discord_logo.svg",
      category: "Communication"
    },
    {
      name: "Shopify",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
      category: "E-commerce"
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      category: "Automotive"
    }
  ];

  const topCreators = [
    {
      name: "MrBeast",
      handle: "@MrBeast",
      subscribers: "200M+",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=MrBeast&backgroundColor=f59e0b",
      verified: true,
      growth: "+12M this year",
      niche: "Entertainment"
    },
    {
      name: "Ali Abdaal",
      handle: "@aliabdaal", 
      subscribers: "5.2M",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ali&backgroundColor=3b82f6",
      verified: true,
      growth: "+800K this year",
      niche: "Productivity"
    },
    {
      name: "Emma Chamberlain",
      handle: "@emmachamberlain",
      subscribers: "12M",
      platform: "YouTube", 
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ec4899",
      verified: true,
      growth: "+1.2M this year",
      niche: "Lifestyle"
    },
    {
      name: "Marques Brownlee",
      handle: "@MKBHD",
      subscribers: "18M",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marques&backgroundColor=8b5cf6",
      verified: true,
      growth: "+2.1M this year", 
      niche: "Tech Reviews"
    },
    {
      name: "PewDiePie",
      handle: "@PewDiePie",
      subscribers: "111M",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ef4444",
      verified: true,
      growth: "+1.5M this year",
      niche: "Gaming"
    },
    {
      name: "James Charles",
      handle: "@jamescharles",
      subscribers: "23M",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=f97316",
      verified: true,
      growth: "+2.8M this year",
      niche: "Beauty"
    },
    {
      name: "Dude Perfect",
      handle: "@DudePerfect",
      subscribers: "59M",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DudePerfect&backgroundColor=10b981",
      verified: true,
      growth: "+3.2M this year",
      niche: "Sports"
    },
    {
      name: "Michelle Schroeder",
      handle: "@MakingSenseofCents",
      subscribers: "1.2M",
      platform: "Blog/Social",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michelle&backgroundColor=06b6d4",
      verified: true,
      growth: "+400K this year",
      niche: "Finance"
    },
    {
      name: "Gary Vaynerchuk",
      handle: "@garyvee",
      subscribers: "3.1M",
      platform: "Multi-Platform",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gary&backgroundColor=6366f1",
      verified: true,
      growth: "+500K this year",
      niche: "Business"
    },
    {
      name: "Simone Giertz",
      handle: "@simonegiertz",
      subscribers: "2.8M",
      platform: "YouTube",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Simone&backgroundColor=8b5cf6",
      verified: true,
      growth: "+300K this year",
      niche: "Engineering"
    }
  ];

  const nextSlide = () => {
    const maxSlide = Math.max(0, topCreators.length - cardsPerView);
    setCurrentSlide(prev => prev >= maxSlide ? 0 : prev + 1); // Loop back to 0 when at end
  };

  const prevSlide = () => {
    const maxSlide = Math.max(0, topCreators.length - cardsPerView);
    setCurrentSlide(prev => prev <= 0 ? maxSlide : prev - 1); // Loop to end when at beginning
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Brand carousel navigation
  const nextBrandSlide = () => {
    const maxSlide = Math.max(0, brandPartners.length - brandCardsPerView);
    setBrandSlide(prev => prev >= maxSlide ? 0 : prev + 1); // Loop back to 0 when at end
  };

  const prevBrandSlide = () => {
    const maxSlide = Math.max(0, brandPartners.length - brandCardsPerView);
    setBrandSlide(prev => prev <= 0 ? maxSlide : prev - 1); // Loop to end when at beginning
  };

  const goToBrandSlide = (index: number) => {
    setBrandSlide(index);
  };

  // Touch/swipe functionality for creators
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Touch/swipe functionality for brands
  const [brandTouchStart, setBrandTouchStart] = useState<number | null>(null);
  const [brandTouchEnd, setBrandTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide(); // Use nextSlide which now handles looping
    if (isRightSwipe) prevSlide(); // Use prevSlide which now handles looping
  };

  // Brand touch handlers
  const handleBrandTouchStart = (e: React.TouchEvent) => {
    setBrandTouchEnd(null);
    setBrandTouchStart(e.targetTouches[0].clientX);
  };

  const handleBrandTouchMove = (e: React.TouchEvent) => {
    setBrandTouchEnd(e.targetTouches[0].clientX);
  };

  const handleBrandTouchEnd = () => {
    if (!brandTouchStart || !brandTouchEnd) return;
    const distance = brandTouchStart - brandTouchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextBrandSlide(); // Use nextBrandSlide which now handles looping
    if (isRightSwipe) prevBrandSlide(); // Use prevBrandSlide which now handles looping
  };

  return (
    <section className="py-32 px-6 bg-subtle-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-6 px-6 py-2 text-accent border-accent/30 backdrop-blur-sm">
            Client Success Stories
          </Badge>
          
          <h2 className="text-luxury-lg text-foreground mb-8">
            {/* Trusted by <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">industry leaders</span><br /> */}
            {/* and <span className="text-accent">visionary creators</span> */}
            Experienced with <span className="bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">industry leaders</span><br />
            and <span className="text-accent">visionary creators</span>
          </h2>
          
          <p className="text-luxury-body max-w-3xl mx-auto">
            Even before launching BingeLoop, our team has contributed to content and strategy for top creators and brands via industry-leading agencies.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-3 gap-8 mb-24 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-luxury relative group"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                  {testimonial.result}
                </div>
              </div>
              
              <blockquote className="text-foreground text-lg leading-relaxed mb-6 font-serif italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border/50 pt-6 flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center border-2 border-accent/20">
                  <span className="text-accent font-bold text-lg">
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-semibold text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.title}
                  </p>
                  <p className="text-accent text-xs font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div> */}

        {/* Brand Partners Carousel */}
        {/* border-t border-border/30  added the div line*/}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Industry Leading Brands
            </h3>
            <p className="text-muted-foreground">
              Worked with industry leaders across multiple sectors
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Brand Navigation Buttons */}
            <button
              onClick={prevBrandSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-accent/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </button>
            
            <button
              onClick={nextBrandSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-accent/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </button>

            {/* Brand Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={brandCarouselRef}
                className="flex transition-transform duration-500 ease-out gap-6"
                style={{ 
                  transform: `translateX(-${brandSlide * (100/brandCardsPerView)}%)`,
                }}
                onTouchStart={handleBrandTouchStart}
                onTouchMove={handleBrandTouchMove}
                onTouchEnd={handleBrandTouchEnd}
              >
                {brandPartners.map((brand, index) => (
                  <div 
                    key={brand.name}
                    className={`min-w-0 flex-none group cursor-pointer ${
                      brandCardsPerView === 2 ? 'w-[calc(50%-12px)]' :
                      brandCardsPerView === 3 ? 'w-[calc(33.333%-16px)]' :
                      brandCardsPerView === 4 ? 'w-[calc(25%-18px)]' :
                      'w-[calc(16.666%-20px)]'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-24 flex items-center justify-center group-hover:border-accent/30 transition-all duration-300 group-hover:scale-105 group-hover:bg-card/80">
                      <img 
                        src={brand.logo} 
                        alt={brand.name}
                        className="max-w-full max-h-12 object-contain filter brightness-75 dark:brightness-50 group-hover:brightness-100 transition-all duration-300"
                        onError={(e) => {
                          const target = e.currentTarget;
                          target.outerHTML = `<div class="w-full h-full bg-accent/10 rounded-lg flex items-center justify-center"><span class="text-accent font-bold text-lg">${brand.name[0]}</span></div>`;
                        }}
                      />
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-xs font-medium text-foreground group-hover:text-accent transition-colors">
                        {brand.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {brand.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Pagination Dots */}
            {brandPartners.length > brandCardsPerView && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: Math.max(1, brandPartners.length - brandCardsPerView + 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToBrandSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      brandSlide === index 
                        ? 'bg-accent w-6' 
                        : 'bg-muted-foreground/30 hover:bg-accent/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Interactive Creator Carousel */}
        <div className="border-t border-border/30 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Creators & Influencers
            </h3>
            <p className="text-muted-foreground">
              Empowering the next generation of digital influencers
            </p>
          </div>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-accent/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border/50 rounded-full flex items-center justify-center hover:border-accent/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-out gap-4"
                style={{ 
                  transform: `translateX(-${currentSlide * (100/cardsPerView)}%)`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {topCreators.map((creator, index) => (
                  <div 
                    key={creator.name}
                    className={`min-w-0 flex-none ${
                      cardsPerView === 1 ? 'w-full' :
                      cardsPerView === 2 ? 'w-[calc(50%-8px)]' :
                      'w-[calc(20%-12px)] lg:w-[calc(20%-16px)]'
                    }`}
                    onMouseEnter={() => setActiveCreator(index)}
                    onMouseLeave={() => setActiveCreator(null)}
                  >
                    <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-6 h-full group cursor-pointer hover:border-accent/30 transition-all duration-300 hover:scale-105">
                      <div className="relative mb-4">
                        <div className={`mx-auto rounded-full overflow-hidden border-3 border-accent/20 group-hover:border-accent/50 transition-all duration-300 ${
                          cardsPerView === 1 ? 'w-20 h-20' : 'w-16 h-16'
                        }`}>
                          <img 
                            src={creator.avatar} 
                            alt={creator.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {creator.verified && (
                          <div className={`absolute -bottom-1 -right-1 bg-accent rounded-full flex items-center justify-center border-2 border-background ${
                            cardsPerView === 1 ? 'w-7 h-7' : 'w-6 h-6'
                          }`}>
                            <svg className={`text-accent-foreground ${cardsPerView === 1 ? 'w-4 h-4' : 'w-3 h-3'}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-center">
                        <h4 className={`font-semibold text-foreground mb-1 group-hover:text-accent transition-colors ${
                          cardsPerView === 1 ? 'text-base' : 'text-sm'
                        }`}>
                          {creator.name}
                        </h4>
                        <p className={`text-muted-foreground mb-2 ${
                          cardsPerView === 1 ? 'text-sm' : 'text-xs'
                        }`}>
                          {creator.handle}
                        </p>
                        
                        <div className="space-y-1">
                          <div className="flex items-center justify-center space-x-1">
                            <Users className={`text-accent ${cardsPerView === 1 ? 'w-4 h-4' : 'w-3 h-3'}`} />
                            <span className={`font-medium text-accent ${
                              cardsPerView === 1 ? 'text-sm' : 'text-xs'
                            }`}>
                              {creator.subscribers}
                            </span>
                          </div>
                          
                          {activeCreator === index && (
                            <div className="animate-fade-in-up space-y-1">
                              <div className="flex items-center justify-center space-x-1">
                                <TrendingUp className={`text-green-500 ${cardsPerView === 1 ? 'w-4 h-4' : 'w-3 h-3'}`} />
                                <span className={`text-green-500 font-medium ${
                                  cardsPerView === 1 ? 'text-sm' : 'text-xs'
                                }`}>
                                  {creator.growth}
                                </span>
                              </div>
                              <p className={`text-muted-foreground ${
                                cardsPerView === 1 ? 'text-sm' : 'text-xs'
                              }`}>
                                {creator.niche}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.max(1, topCreators.length - cardsPerView + 1) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-accent w-6' 
                      : 'bg-muted-foreground/30 hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;