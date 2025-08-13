import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Users, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card/60 backdrop-blur-xl border-t border-hymn-cyan/20 mt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-hymn-navy/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-hymn-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-hymn-silver">HymnRO</h3>
                <p className="text-sm text-hymn-cyan">Requiem of Dreams</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Join thousands of adventurers in the most immersive Ragnarok Online experience. 
              Create your legend in our celestial realm.
            </p>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                Online
              </Badge>
              <Badge variant="secondary" className="bg-hymn-cyan/20 text-hymn-cyan border-hymn-cyan/30">
                v2.1.3
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-hymn-silver">Quick Links</h4>
            <div className="space-y-2">
              {[
                "Download Client",
                "Create Account", 
                "Server Rules",
                "Player Guide",
                "Class Builds",
                "Item Database"
              ].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="block text-sm text-muted-foreground hover:text-hymn-cyan transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-hymn-silver">Community</h4>
            <div className="space-y-3">
              <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-hymn-silver">Discord</div>
                    <div className="text-xs text-muted-foreground">Join our server</div>
                  </div>
                </div>
              </Button>
              
              <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-hymn-silver">Facebook</div>
                    <div className="text-xs text-muted-foreground">Follow updates</div>
                  </div>
                </div>
              </Button>
              
              <Button variant="ghost" size="sm" className="w-full justify-start p-0 h-auto text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-hymn-silver">YouTube</div>
                    <div className="text-xs text-muted-foreground">Watch content</div>
                  </div>
                </div>
              </Button>
            </div>
          </div>

          {/* Server Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-hymn-silver">Server Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Max Level:</span>
                <span className="text-sm text-hymn-gold">255/120</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Base Rates:</span>
                <span className="text-sm text-hymn-cyan">150x/150x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Drop Rate:</span>
                <span className="text-sm text-hymn-silver">10x</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Uptime:</span>
                <span className="text-sm text-green-400">99.8%</span>
              </div>
            </div>
            <div className="pt-3 border-t border-hymn-cyan/20">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-hymn-gold" />
                <span className="text-xs text-muted-foreground">DDoS Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-hymn-cyan/20 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 HymnRO - Requiem of Dreams. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-hymn-cyan transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-hymn-cyan transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-hymn-cyan transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;