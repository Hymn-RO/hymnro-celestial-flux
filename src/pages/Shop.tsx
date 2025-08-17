import Layout from "@/components/HymnRO/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Crown, Zap, Gift, Star, Coins } from "lucide-react";

const ShopPage = () => {
  const featuredItems = [
    {
      id: 1,
      name: "Premium Monthly Package",
      description: "30 days of premium benefits",
      price: 15.99,
      currency: "USD",
      image: "👑",
      popular: true,
      benefits: ["2x EXP Boost", "2x Drop Rate", "Exclusive Areas", "Priority Support"]
    },
    {
      id: 2,
      name: "Costume Package",
      description: "Exclusive costume collection",
      price: 9.99,
      currency: "USD", 
      image: "👘",
      benefits: ["5 Unique Costumes", "Special Effects", "Account Bound"]
    },
    {
      id: 3,
      name: "Storage Expansion",
      description: "Increase your storage capacity",
      price: 4.99,
      currency: "USD",
      image: "📦",
      benefits: ["+200 Storage Slots", "Permanent Upgrade", "All Characters"]
    }
  ];

  const cashShopItems = [
    { name: "Healing Potion Bundle", price: 100, currency: "Credits", image: "🧪" },
    { name: "Teleport Scrolls (50x)", price: 150, currency: "Credits", image: "📜" },
    { name: "Stat Reset Potion", price: 200, currency: "Credits", image: "⚗️" },
    { name: "Skill Reset Potion", price: 200, currency: "Credits", image: "🌟" },
    { name: "Character Slot +1", price: 500, currency: "Credits", image: "👤" },
    { name: "Guild Emblem Change", price: 300, currency: "Credits", image: "🛡️" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">Support the Server & Get Rewards</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Premium</span>
            <br />
            <span className="text-foreground">Shop</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Enhance your adventure with premium items, cosmetics, and convenience features. 
            Support HymnRO and unlock exclusive content.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="featured" className="flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Featured
              </TabsTrigger>
              <TabsTrigger value="premium" className="flex items-center">
                <Crown className="w-4 h-4 mr-2" />
                Premium
              </TabsTrigger>
              <TabsTrigger value="items" className="flex items-center">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Items
              </TabsTrigger>
              <TabsTrigger value="credits" className="flex items-center">
                <Coins className="w-4 h-4 mr-2" />
                Credits
              </TabsTrigger>
            </TabsList>

            {/* Featured Tab */}
            <TabsContent value="featured">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {featuredItems.map((item) => (
                  <Card key={item.id} className={`relative border-hymn-gold/20 bg-card/50 backdrop-blur-sm ${item.popular ? 'ring-2 ring-hymn-gold/50' : ''}`}>
                    {item.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-hymn-gold text-hymn-navy">
                        Most Popular
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{item.image}</div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="text-2xl font-bold text-hymn-gold">
                        ${item.price} {item.currency}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {item.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={item.popular ? "default" : "outline"}>
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Purchase Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Payment Notice */}
              <Card className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Gift className="w-5 h-5 mr-3 text-hymn-cyan" />
                    Payment Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Accepted Payment Methods</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• PayPal</li>
                        <li>• Credit/Debit Cards (Visa, MasterCard)</li>
                        <li>• Cryptocurrency (Bitcoin, Ethereum)</li>
                        <li>• Bank Transfer</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Important Notes</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• All purchases are final</li>
                        <li>• Items delivered instantly after payment</li>
                        <li>• 24/7 support for payment issues</li>
                        <li>• Secure encrypted transactions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Premium Tab */}
            <TabsContent value="premium">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Crown className="w-6 h-6 mr-3 text-hymn-gold" />
                    Premium Membership
                  </CardTitle>
                  <CardDescription>Unlock exclusive benefits and enhanced gameplay</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Premium Benefits</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <Zap className="w-5 h-5 text-hymn-gold mr-3" />
                          <span>Double EXP and Drop Rates</span>
                        </li>
                        <li className="flex items-center">
                          <Crown className="w-5 h-5 text-hymn-gold mr-3" />
                          <span>Access to VIP Areas</span>
                        </li>
                        <li className="flex items-center">
                          <Gift className="w-5 h-5 text-hymn-gold mr-3" />
                          <span>Monthly Premium Items</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="w-5 h-5 text-hymn-gold mr-3" />
                          <span>Priority Support</span>
                        </li>
                        <li className="flex items-center">
                          <ShoppingCart className="w-5 h-5 text-hymn-gold mr-3" />
                          <span>Exclusive Shop Discounts</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div className="text-center p-6 border border-hymn-gold/30 rounded-lg bg-hymn-gold/5">
                        <h4 className="text-lg font-bold mb-2">Monthly Premium</h4>
                        <div className="text-3xl font-bold text-hymn-gold mb-4">$15.99/mo</div>
                        <Button className="w-full">
                          Get Premium Access
                        </Button>
                      </div>
                      <div className="text-center p-6 border border-hymn-cyan/30 rounded-lg">
                        <h4 className="text-lg font-bold mb-2">3-Month Premium</h4>
                        <div className="text-2xl font-bold text-hymn-cyan mb-2">$39.99</div>
                        <div className="text-sm text-muted-foreground mb-4">Save $8</div>
                        <Button variant="outline" className="w-full">
                          Best Value
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Items Tab */}
            <TabsContent value="items">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cashShopItems.map((item, index) => (
                  <Card key={index} className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl mb-4">{item.image}</div>
                      <h3 className="font-semibold mb-2">{item.name}</h3>
                      <div className="text-lg font-bold text-hymn-gold mb-4">
                        {item.price} {item.currency}
                      </div>
                      <Button variant="outline" className="w-full">
                        Purchase
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Credits Tab */}
            <TabsContent value="credits">
              <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Coins className="w-6 h-6 mr-3 text-hymn-gold" />
                    Purchase Credits
                  </CardTitle>
                  <CardDescription>Buy credits to use in the in-game cash shop</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center p-6 border border-hymn-cyan/30 rounded-lg">
                      <div className="text-2xl font-bold text-hymn-gold mb-2">500 Credits</div>
                      <div className="text-lg mb-4">$4.99</div>
                      <Button variant="outline" className="w-full">Buy Now</Button>
                    </div>
                    <div className="text-center p-6 border border-hymn-gold/30 rounded-lg bg-hymn-gold/5">
                      <Badge className="mb-2">Popular</Badge>
                      <div className="text-2xl font-bold text-hymn-gold mb-2">1,200 Credits</div>
                      <div className="text-lg mb-4">$9.99</div>
                      <Button className="w-full">Buy Now</Button>
                    </div>
                    <div className="text-center p-6 border border-hymn-cyan/30 rounded-lg">
                      <div className="text-2xl font-bold text-hymn-gold mb-2">2,500 Credits</div>
                      <div className="text-lg mb-4">$19.99</div>
                      <Button variant="outline" className="w-full">Buy Now</Button>
                    </div>
                    <div className="text-center p-6 border border-secondary/30 rounded-lg">
                      <Badge variant="secondary" className="mb-2">Best Value</Badge>
                      <div className="text-2xl font-bold text-hymn-gold mb-2">5,500 Credits</div>
                      <div className="text-lg mb-4">$39.99</div>
                      <Button variant="secondary" className="w-full">Buy Now</Button>
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

export default ShopPage;