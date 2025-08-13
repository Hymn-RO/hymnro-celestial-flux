import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Clock, Zap } from "lucide-react";

const InfoCards = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Server Rates Card */}
          <Card className="relative overflow-hidden group hover:shadow-glow transition-all duration-500 border-hymn-cyan/30 bg-card/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-hymn-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <TrendingUp className="w-8 h-8 text-hymn-gold" />
                <Badge variant="secondary" className="bg-hymn-gold/20 text-hymn-gold border-hymn-gold/30">
                  Balanced
                </Badge>
              </div>
              <CardTitle className="text-2xl text-hymn-silver">Server Rates</CardTitle>
              <CardDescription className="text-hymn-silver/70">
                Perfectly tuned for the best experience
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Base EXP:</span>
                  <span className="text-lg font-semibold text-hymn-gold">150x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Job EXP:</span>
                  <span className="text-lg font-semibold text-hymn-cyan">150x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Drop Rate:</span>
                  <span className="text-lg font-semibold text-hymn-silver">10x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Card Drop:</span>
                  <span className="text-lg font-semibold text-hymn-gold">0.5%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Active Players Card */}
          <Card className="relative overflow-hidden group hover:shadow-cyan-glow transition-all duration-500 border-hymn-cyan/30 bg-card/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-hymn-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <Users className="w-8 h-8 text-hymn-cyan" />
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">LIVE</span>
                </div>
              </div>
              <CardTitle className="text-2xl text-hymn-silver">Active Players</CardTitle>
              <CardDescription className="text-hymn-silver/70">
                Real-time player statistics
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-hymn-cyan mb-2">1,247</div>
                <div className="text-sm text-muted-foreground mb-4">Players Online</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-lg font-semibold text-hymn-gold">324</div>
                    <div className="text-muted-foreground">In WoE</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-hymn-silver">89</div>
                    <div className="text-muted-foreground">In PvP</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest Update Card */}
          <Card className="relative overflow-hidden group hover:shadow-glow transition-all duration-500 border-hymn-gold/30 bg-card/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-hymn-silver/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardHeader className="relative z-10">
              <div className="flex items-center justify-between">
                <Zap className="w-8 h-8 text-hymn-silver" />
                <Badge variant="secondary" className="bg-hymn-cyan/20 text-hymn-cyan border-hymn-cyan/30">
                  v2.1.3
                </Badge>
              </div>
              <CardTitle className="text-2xl text-hymn-silver">Latest Update</CardTitle>
              <CardDescription className="text-hymn-silver/70">
                New features and improvements
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-hymn-gold rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">New Celestial Dungeon</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-hymn-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Enhanced PvP System</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-hymn-silver rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Balance Updates</span>
                </div>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-hymn-cyan/20">
                  <span className="text-xs text-muted-foreground">Released:</span>
                  <span className="text-xs text-hymn-silver">Dec 15, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;