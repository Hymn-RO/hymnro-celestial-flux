import Layout from "@/components/HymnRO/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Trophy, Crown, Users, Sword, Shield, Zap } from "lucide-react";

const RankingsPage = () => {
  const topPlayers = [
    { rank: 1, name: "ShadowKnight", level: 99, job: "Lord Knight", guild: "Eternal Guardians" },
    { rank: 2, name: "MysticSage", level: 99, job: "High Wizard", guild: "Arcane Order" },
    { rank: 3, name: "DivinePriest", level: 98, job: "High Priest", guild: "Holy Light" },
    { rank: 4, name: "SwiftAssassin", level: 98, job: "Assassin Cross", guild: "Shadow Clan" },
    { rank: 5, name: "ArcherQueen", level: 97, job: "Sniper", guild: "Wind Runners" },
  ];

  const topGuilds = [
    { rank: 1, name: "Eternal Guardians", level: 50, members: 56, leader: "ShadowKnight", woe: 12 },
    { rank: 2, name: "Arcane Order", level: 48, members: 42, leader: "MysticSage", woe: 8 },
    { rank: 3, name: "Holy Light", level: 45, members: 38, leader: "DivinePriest", woe: 6 },
    { rank: 4, name: "Shadow Clan", level: 43, members: 35, leader: "SwiftAssassin", woe: 4 },
    { rank: 5, name: "Wind Runners", level: 40, members: 29, leader: "ArcherQueen", woe: 3 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">Updated Every Hour</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Hall of</span>
            <br />
            <span className="text-foreground">Legends</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover the most powerful players and guilds in HymnRO. 
            Climb the ranks and earn your place among the legends.
          </p>
        </div>
      </section>

      {/* Rankings Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="players" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="players" className="flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                Players
              </TabsTrigger>
              <TabsTrigger value="guilds" className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Guilds
              </TabsTrigger>
              <TabsTrigger value="pvp" className="flex items-center">
                <Sword className="w-4 h-4 mr-2" />
                PvP
              </TabsTrigger>
              <TabsTrigger value="woe" className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                WoE
              </TabsTrigger>
            </TabsList>

            {/* Players Tab */}
            <TabsContent value="players">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Top 3 Players */}
                <div className="lg:col-span-2">
                  <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center">
                        <Trophy className="w-6 h-6 mr-3 text-hymn-gold" />
                        Top Players
                      </CardTitle>
                      <CardDescription>The strongest adventurers in Midgard</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {topPlayers.map((player, index) => (
                          <div key={player.rank} className={`flex items-center justify-between p-4 rounded-lg border ${
                            index === 0 ? 'border-hymn-gold/40 bg-hymn-gold/10' :
                            index === 1 ? 'border-hymn-silver/40 bg-hymn-silver/10' :
                            index === 2 ? 'border-hymn-cyan/40 bg-hymn-cyan/10' :
                            'border-border bg-muted/20'
                          }`}>
                            <div className="flex items-center space-x-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                index === 0 ? 'bg-hymn-gold text-hymn-navy' :
                                index === 1 ? 'bg-hymn-silver text-hymn-navy' :
                                index === 2 ? 'bg-hymn-cyan text-hymn-navy' :
                                'bg-muted text-foreground'
                              }`}>
                                {player.rank}
                              </div>
                              <div>
                                <div className="font-semibold">{player.name}</div>
                                <div className="text-sm text-muted-foreground">{player.job}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-hymn-gold">Lv. {player.level}</div>
                              <div className="text-sm text-hymn-cyan">{player.guild}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Stats Sidebar */}
                <div className="space-y-6">
                  <Card className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Server Statistics</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span>Total Characters:</span>
                        <span className="text-hymn-gold font-bold">47,582</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Level 99 Players:</span>
                        <span className="text-hymn-cyan font-bold">2,847</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Guilds:</span>
                        <span className="text-secondary font-bold">342</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Max Level:</span>
                        <span className="text-hymn-gold font-bold">99</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-lg">Class Distribution</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Lord Knight</span>
                          <Badge variant="secondary">18%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>High Wizard</span>
                          <Badge variant="secondary">16%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Sniper</span>
                          <Badge variant="secondary">14%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>High Priest</span>
                          <Badge variant="secondary">12%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Others</span>
                          <Badge variant="outline">40%</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Guilds Tab */}
            <TabsContent value="guilds">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Users className="w-6 h-6 mr-3 text-hymn-gold" />
                    Top Guilds
                  </CardTitle>
                  <CardDescription>The most powerful guilds in the realm</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topGuilds.map((guild, index) => (
                      <div key={guild.rank} className={`flex items-center justify-between p-6 rounded-lg border ${
                        index === 0 ? 'border-hymn-gold/40 bg-hymn-gold/10' :
                        index === 1 ? 'border-hymn-silver/40 bg-hymn-silver/10' :
                        index === 2 ? 'border-hymn-cyan/40 bg-hymn-cyan/10' :
                        'border-border bg-muted/20'
                      }`}>
                        <div className="flex items-center space-x-6">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                            index === 0 ? 'bg-hymn-gold text-hymn-navy' :
                            index === 1 ? 'bg-hymn-silver text-hymn-navy' :
                            index === 2 ? 'bg-hymn-cyan text-hymn-navy' :
                            'bg-muted text-foreground'
                          }`}>
                            {guild.rank}
                          </div>
                          <div>
                            <div className="font-bold text-lg">{guild.name}</div>
                            <div className="text-sm text-muted-foreground">Leader: {guild.leader}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <div className="text-sm text-muted-foreground">Level</div>
                            <div className="font-bold text-hymn-gold">{guild.level}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Members</div>
                            <div className="font-bold text-hymn-cyan">{guild.members}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">WoE Wins</div>
                            <div className="font-bold text-secondary">{guild.woe}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* PvP Tab */}
            <TabsContent value="pvp">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Sword className="w-6 h-6 mr-3 text-hymn-gold" />
                    PvP Champions
                  </CardTitle>
                  <CardDescription>Masters of player vs player combat</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Zap className="w-16 h-16 text-hymn-gold mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">PvP Rankings Coming Soon</h3>
                    <p className="text-muted-foreground">
                      PvP ranking system is currently in development. Stay tuned for epic battles!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* WoE Tab */}
            <TabsContent value="woe">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Shield className="w-6 h-6 mr-3 text-hymn-gold" />
                    War of Emperium
                  </CardTitle>
                  <CardDescription>Castle ownership and guild warfare statistics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Shield className="w-16 h-16 text-hymn-cyan mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">WoE Season Starting Soon</h3>
                    <p className="text-muted-foreground">
                      The next War of Emperium season will begin next month. Prepare your guilds!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default RankingsPage;