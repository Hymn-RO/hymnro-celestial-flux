import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MessageSquare, Eye, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Celestial Gateway Update v2.1.3",
      excerpt: "New dungeon, enhanced PvP system, and balance changes now live!",
      category: "Update",
      date: "2024-12-15",
      comments: 34,
      views: 1247,
      featured: true
    },
    {
      id: 2,
      title: "Christmas Event: Winter Wonderland",
      excerpt: "Join the festive celebration with exclusive rewards and limited-time content.",
      category: "Event",
      date: "2024-12-12",
      comments: 89,
      views: 2156,
      featured: false
    },
    {
      id: 3,
      title: "War of Emperium Championship",
      excerpt: "Register your guild for the ultimate battle. Prizes worth 50,000 donation points!",
      category: "WoE",
      date: "2024-12-10",
      comments: 156,
      views: 3421,
      featured: false
    },
    {
      id: 4,
      title: "Server Maintenance Complete",
      excerpt: "All systems are now online with improved stability and performance.",
      category: "Maintenance",
      date: "2024-12-08",
      comments: 23,
      views: 987,
      featured: false
    },
    {
      id: 5,
      title: "New Player Guide Updated",
      excerpt: "Comprehensive guide for beginners has been updated with latest content.",
      category: "Guide",
      date: "2024-12-05",
      comments: 67,
      views: 1834,
      featured: false
    },
    {
      id: 6,
      title: "Double Drop Rate Weekend",
      excerpt: "All drop rates doubled for the entire weekend! Don't miss out on rare items.",
      category: "Event",
      date: "2024-12-01",
      comments: 142,
      views: 2876,
      featured: false
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'update': return 'bg-hymn-gold/20 text-hymn-gold border-hymn-gold/30';
      case 'event': return 'bg-hymn-cyan/20 text-hymn-cyan border-hymn-cyan/30';
      case 'woe': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'maintenance': return 'bg-hymn-silver/20 text-hymn-silver border-hymn-silver/30';
      case 'guide': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-hymn-cyan/20 text-hymn-cyan border-hymn-cyan/30';
    }
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Latest</span>
            <span className="text-hymn-silver"> News</span>
          </h2>
          <p className="text-hymn-silver/70 text-lg max-w-2xl mx-auto">
            Stay updated with the latest announcements, events, and updates from HymnRO
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {newsItems.map((news, index) => (
            <Card 
              key={news.id} 
              className={`relative overflow-hidden group hover:shadow-glow transition-all duration-500 border-hymn-cyan/30 bg-card/80 backdrop-blur-sm ${
                news.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {news.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-hymn-gold/20 text-hymn-gold border-hymn-gold/30">
                    Featured
                  </Badge>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-br from-hymn-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className={getCategoryColor(news.category)}>
                    {news.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {new Date(news.date).toLocaleDateString()}
                  </div>
                </div>
                <CardTitle className={`text-hymn-silver group-hover:text-hymn-cyan transition-colors ${news.featured ? 'text-xl' : 'text-lg'}`}>
                  {news.title}
                </CardTitle>
                <CardDescription className="text-hymn-silver/70">
                  {news.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {news.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {news.comments}
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-hymn-cyan hover:text-hymn-gold transition-colors group/btn"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="celestial" size="lg" className="px-8">
            View All News
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;