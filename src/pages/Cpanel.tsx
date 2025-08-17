import Layout from "@/components/HymnRO/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Settings, User, CreditCard, Download, Shield, Bell, Users, Crown } from "lucide-react";

const CpanelPage = () => {
  const characters = [
    { name: "ShadowKnight", level: 99, job: "Lord Knight", guild: "Eternal Guardians", status: "online" },
    { name: "MysticMage", level: 87, job: "High Wizard", guild: "Arcane Order", status: "offline" },
    { name: "HolyPriest", level: 92, job: "High Priest", guild: "Holy Light", status: "online" }
  ];

  const recentTransactions = [
    { date: "2024-01-15", item: "Premium Package", amount: "$15.99", status: "completed" },
    { date: "2024-01-10", item: "Costume Bundle", amount: "$9.99", status: "completed" },
    { date: "2024-01-05", item: "Storage Expansion", amount: "$4.99", status: "completed" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">Account Management</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Control</span>
            <br />
            <span className="text-foreground">Panel</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Manage your HymnRO account, characters, and settings all in one place.
          </p>
        </div>
      </section>

      {/* Control Panel Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {/* Account Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <User className="w-8 h-8 text-hymn-gold mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Account Status</h3>
                <Badge className="bg-hymn-gold text-hymn-navy">Premium Active</Badge>
                <p className="text-sm text-muted-foreground mt-2">15 days remaining</p>
              </CardContent>
            </Card>

            <Card className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Crown className="w-8 h-8 text-hymn-cyan mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Characters</h3>
                <div className="text-2xl font-bold text-hymn-cyan">3/6</div>
                <p className="text-sm text-muted-foreground">Character slots used</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <CreditCard className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Credits</h3>
                <div className="text-2xl font-bold text-secondary">1,250</div>
                <p className="text-sm text-muted-foreground">Available credits</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="characters" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="characters" className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Characters
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Account
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center">
                <CreditCard className="w-4 h-4 mr-2" />
                Billing
              </TabsTrigger>
              <TabsTrigger value="downloads" className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Downloads
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Characters Tab */}
            <TabsContent value="characters">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Users className="w-6 h-6 mr-3 text-hymn-gold" />
                    My Characters
                  </CardTitle>
                  <CardDescription>Manage your characters and their progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {characters.map((character, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border bg-muted/20">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                            <Crown className="w-6 h-6 text-hymn-navy" />
                          </div>
                          <div>
                            <div className="font-semibold">{character.name}</div>
                            <div className="text-sm text-muted-foreground">
                              Level {character.level} {character.job}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={character.status === 'online' ? 'default' : 'secondary'}>
                            {character.status}
                          </Badge>
                          <div className="text-sm text-hymn-cyan mt-1">{character.guild}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button className="w-full">
                      <Crown className="w-4 h-4 mr-2" />
                      Create New Character
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Account Tab */}
            <TabsContent value="account">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Username</label>
                        <div className="text-sm text-muted-foreground">PlayerName123</div>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Account ID</label>
                        <div className="text-sm text-muted-foreground">#2001547</div>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email Address</label>
                      <div className="text-sm text-muted-foreground">player@example.com</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Member Since</label>
                      <div className="text-sm text-muted-foreground">January 15, 2024</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Login</label>
                      <div className="text-sm text-muted-foreground">2 hours ago</div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Edit Profile
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-hymn-cyan" />
                      Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Two-Factor Authentication</span>
                      <Badge variant="secondary">Disabled</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Password Strength</span>
                      <div className="flex items-center space-x-2">
                        <Progress value={75} className="w-16" />
                        <span className="text-sm text-hymn-gold">Strong</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full">
                        Change Password
                      </Button>
                      <Button variant="outline" className="w-full">
                        Enable 2FA
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Billing Tab */}
            <TabsContent value="billing">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentTransactions.map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center p-3 rounded border border-border">
                          <div>
                            <div className="font-medium">{transaction.item}</div>
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold text-hymn-gold">{transaction.amount}</div>
                            <Badge variant="secondary">{transaction.status}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-xl">Premium Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Current Plan</span>
                        <Badge className="bg-hymn-gold text-hymn-navy">Premium Monthly</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Next Billing</span>
                        <span className="text-hymn-cyan">January 30, 2024</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Auto-Renewal</span>
                        <Badge variant="secondary">Enabled</Badge>
                      </div>
                      <div className="space-y-2 pt-4">
                        <Button className="w-full">
                          Upgrade Plan
                        </Button>
                        <Button variant="outline" className="w-full">
                          Manage Billing
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Download className="w-6 h-6 mr-3 text-hymn-gold" />
                    Game Downloads
                  </CardTitle>
                  <CardDescription>Download game clients and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg border border-hymn-gold/30 bg-hymn-gold/5">
                      <h4 className="font-semibold mb-2">Full Game Client</h4>
                      <p className="text-sm text-muted-foreground mb-4">Complete installation package (2.4 GB)</p>
                      <Button className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg border border-hymn-cyan/30">
                      <h4 className="font-semibold mb-2">Lite Client</h4>
                      <p className="text-sm text-muted-foreground mb-4">Minimal installation with patcher (450 MB)</p>
                      <Button variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Settings className="w-6 h-6 mr-3 text-hymn-gold" />
                    Account Settings
                  </CardTitle>
                  <CardDescription>Configure your account preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive updates about events and maintenance</p>
                      </div>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Privacy Settings</h4>
                        <p className="text-sm text-muted-foreground">Control who can see your character information</p>
                      </div>
                      <Button variant="outline" size="sm">Manage</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Language Preference</h4>
                        <p className="text-sm text-muted-foreground">Change your interface language</p>
                      </div>
                      <Button variant="outline" size="sm">Change</Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Delete Account</h4>
                        <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                      </div>
                      <Button variant="destructive" size="sm">Delete</Button>
                    </div>
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

export default CpanelPage;