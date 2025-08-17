import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check localStorage for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      
      if (newTheme) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      setTimeout(() => setIsAnimating(false), 1000);
    }, 300);
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="relative overflow-hidden border-hymn-gold/30 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 h-10 w-16"
      disabled={isAnimating}
    >
      {/* Sun Icon */}
      <Sun 
        className={`absolute inset-0 m-auto h-4 w-4 text-hymn-gold transition-all duration-700 ${
          isDark 
            ? 'animate-[sun-set_0.7s_ease-in-out] opacity-0' 
            : isAnimating 
              ? 'animate-[sun-rise_0.7s_ease-in-out]' 
              : 'opacity-100'
        }`}
      />
      
      {/* Moon Icon */}
      <Moon 
        className={`absolute inset-0 m-auto h-4 w-4 text-hymn-cyan transition-all duration-700 ${
          !isDark 
            ? 'animate-[moon-set_0.7s_ease-in-out] opacity-0' 
            : isAnimating 
              ? 'animate-[moon-rise_0.7s_ease-in-out]' 
              : 'opacity-100'
        }`}
      />
      
      {/* Animated background glow */}
      <div className={`absolute inset-0 rounded-md transition-all duration-1000 ${
        isDark 
          ? 'bg-gradient-to-r from-hymn-navy/20 to-hymn-cyan/20' 
          : 'bg-gradient-to-r from-hymn-gold/20 to-primary/20'
      }`} />
    </Button>
  );
};

export default ThemeSwitcher;