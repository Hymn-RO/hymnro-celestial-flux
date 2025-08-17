import { Button } from "@/components/ui/button";
import { Crown, Download, Users, Trophy, DollarSign, MessageSquare, LogIn } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navigation = () => {
  return (
    <nav className="relative z-50 bg-card/80 backdrop-blur-xl border-b border-hymn-cyan/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-glow animate-pulse-glow">
                <Crown className="w-8 h-8 text-hymn-navy" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-hymn-cyan rounded-full animate-pulse"></div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                HymnRO
              </h1>
              <p className="text-sm text-hymn-cyan">Requiem of Dreams</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="nav-item">
              <Crown className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" size="sm" className="nav-item">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="ghost" size="sm" className="nav-item">
              <Users className="w-4 h-4 mr-2" />
              Register
            </Button>
            <Button variant="ghost" size="sm" className="nav-item">
              <Trophy className="w-4 h-4 mr-2" />
              Rankings
            </Button>
            <Button variant="celestial" size="sm" className="nav-item-special">
              <DollarSign className="w-4 h-4 mr-2" />
              Donate
            </Button>
            <Button variant="ghost" size="sm" className="nav-item">
              <MessageSquare className="w-4 h-4 mr-2" />
              Forum
            </Button>
          </div>

          {/* Login Section */}
          <div className="flex items-center space-x-3">
            <ThemeSwitcher />
            <Button variant="hero" size="sm" className="hidden md:flex items-center">
              <LogIn className="w-4 h-4 mr-2" />
              Login
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="lg:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;