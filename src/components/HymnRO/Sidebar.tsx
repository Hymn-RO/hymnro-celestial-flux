import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Users, Crown, Timer, Trophy, Star } from "lucide-react";

const Sidebar = () => {
  const onlinePlayers = [
    { name: "SwordMaster99", level: 255, job: "Lord Knight", avatar: "SK" },
    { name: "MysticSage", level: 248, job: "High Wizard", avatar: "MS" },
    { name: "HolyPriest", level: 243, job: "High Priest", avatar: "HP" },
    { name: "ShadowAssassin", level: 239, job: "Assassin Cross", avatar: "SA" },
    { name: "ArcherElite", level: 235, job: "Sniper", avatar: "AE" },
    { name: "ForgeKing", level: 232, job: "Whitesmith", avatar: "FK" },
    { name: "BardOfSongs", level: 228, job: "Clown", avatar: "BS" },
    { name: "DancingQueen", level: 225, job: "Gypsy", avatar: "DQ" }
  ];

  const topGuilds = [
    { name: "Celestial Guardians", points: 15847, members: 45, emblem: "CG" },
    { name: "Shadow Legion", points: 14293, members: 42, emblem: "SL" },
    { name: "Divine Order", points: 12586, members: 38, emblem: "DO" },
    { name: "Mystic Warriors", points: 11749, members: 35, emblem: "MW" },
    { name: "Eternal Flames", points: 10832, members: 33, emblem: "EF" }
  ];

  return (
    <div className="space-y-6">
      {/* Event Countdown */}
      <Card className="border-hymn-gold/30 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Timer className="w-5 h-5 text-hymn-gold" />
            <CardTitle className="text-lg text-hymn-silver">Next Event</CardTitle>
          </div>
          <CardDescription className="text-hymn-silver/70">
            Christmas Celebration
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-3">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-hymn-gold/10 rounded-lg p-2">
                <div className="text-lg font-bold text-hymn-gold">02</div>
                <div className="text-xs text-muted-foreground">Days</div>
              </div>
              <div className="bg-hymn-cyan/10 rounded-lg p-2">
                <div className="text-lg font-bold text-hymn-cyan">14</div>
                <div className="text-xs text-muted-foreground">Hours</div>
              </div>
              <div className="bg-hymn-silver/10 rounded-lg p-2">
                <div className="text-lg font-bold text-hymn-silver">37</div>
                <div className="text-xs text-muted-foreground">Mins</div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-hymn-gold/20 text-hymn-gold border-hymn-gold/30">
              Double EXP + Rare Drops
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Online Players */}
      <Card className="border-hymn-cyan/30 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-hymn-cyan" />
              <CardTitle className="text-lg text-hymn-silver">Online Players</CardTitle>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-hymn-cyan">1,247</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {onlinePlayers.map((player, index) => (
              <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-hymn-cyan/5 transition-colors">
                <Avatar className="w-8 h-8 border border-hymn-cyan/30">
                  <AvatarFallback className="text-xs bg-hymn-cyan/10 text-hymn-cyan">
                    {player.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-hymn-silver truncate">
                    {player.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Lv.{player.level} {player.job}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Top Guilds */}
      <Card className="border-hymn-gold/30 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Crown className="w-5 h-5 text-hymn-gold" />
            <CardTitle className="text-lg text-hymn-silver">Top Guilds</CardTitle>
          </div>
          <CardDescription className="text-hymn-silver/70">
            WoE Rankings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topGuilds.map((guild, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-hymn-gold/10 border border-hymn-gold/30">
                  <span className="text-xs font-bold text-hymn-gold">#{index + 1}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-hymn-silver truncate">
                      {guild.name}
                    </span>
                    {index === 0 && <Crown className="w-3 h-3 text-hymn-gold" />}
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{guild.points.toLocaleString()} pts</span>
                    <span>{guild.members} members</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Server Status */}
      <Card className="border-hymn-silver/30 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Star className="w-5 h-5 text-hymn-silver" />
            <CardTitle className="text-lg text-hymn-silver">Server Status</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">CPU Usage</span>
                <span className="text-hymn-cyan">23%</span>
              </div>
              <Progress value={23} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Memory</span>
                <span className="text-hymn-gold">67%</span>
              </div>
              <Progress value={67} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Network</span>
                <span className="text-green-400">12%</span>
              </div>
              <Progress value={12} className="h-2" />
            </div>
            <div className="flex items-center justify-between pt-2 border-t border-hymn-silver/20">
              <span className="text-sm text-muted-foreground">Uptime</span>
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                99.8%
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Sidebar;