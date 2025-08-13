import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Star, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute top-20 left-10 w-2 h-2 bg-hymn-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-hymn-gold rounded-full animate-pulse delay-100"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-hymn-silver rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-hymn-cyan rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-hymn-gold rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Floating Runes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-4xl text-hymn-gold/20 animate-float">✦</div>
        <div className="absolute top-1/3 right-1/4 text-3xl text-hymn-cyan/20 animate-float delay-1000">◆</div>
        <div className="absolute bottom-1/3 left-1/3 text-2xl text-hymn-silver/20 animate-float delay-2000">⬟</div>
        <div className="absolute bottom-1/4 right-1/3 text-5xl text-hymn-gold/10 animate-float delay-3000">※</div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-8 px-6 py-2 text-lg bg-hymn-cyan/20 border-hymn-cyan/30 text-hymn-cyan hover:bg-hymn-cyan/30 transition-all duration-300">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Server Online • 1,247 Players Active
          </Badge>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Sing Your Own
            </span>
            <br />
            <span className="text-hymn-silver">
              Legend
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-hymn-silver/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the ultimate Ragnarok Online adventure in a world where dreams become reality. 
            Join thousands of adventurers in the most epic journey yet.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" variant="hero" className="group px-8 py-4 text-lg font-semibold min-w-[200px]">
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Join Now
            </Button>
            <Button size="lg" variant="celestial" className="px-8 py-4 text-lg min-w-[200px]">
              <Users className="w-5 h-5 mr-2" />
              View Rankings
            </Button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/60 backdrop-blur-sm border border-hymn-cyan/20 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 group">
              <Star className="w-8 h-8 text-hymn-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2 text-hymn-silver">Max Level 255</h3>
              <p className="text-sm text-muted-foreground">Transcendent & Extended Classes</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-hymn-cyan/20 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 group">
              <Zap className="w-8 h-8 text-hymn-cyan mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2 text-hymn-silver">Custom Content</h3>
              <p className="text-sm text-muted-foreground">Exclusive dungeons & events</p>
            </div>
            
            <div className="bg-card/60 backdrop-blur-sm border border-hymn-cyan/20 rounded-xl p-6 hover:bg-card/80 transition-all duration-300 group">
              <Users className="w-8 h-8 text-hymn-gold mb-3 mx-auto group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2 text-hymn-silver">Active Community</h3>
              <p className="text-sm text-muted-foreground">24/7 support & events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;