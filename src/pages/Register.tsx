import Layout from "@/components/HymnRO/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { UserPlus, Shield, Crown, Gamepad2 } from "lucide-react";

const RegisterPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">Join 15,847 Active Players</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Begin Your</span>
            <br />
            <span className="text-foreground">Epic Journey</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Create your account and step into the world of HymnRO. 
            Experience classic Ragnarok Online with modern enhancements.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Registration Form */}
            <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <UserPlus className="w-6 h-6 mr-3 text-hymn-gold" />
                  Create Account
                </CardTitle>
                <CardDescription>
                  Fill in your details to create your HymnRO account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Choose a unique username" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Create a strong password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the <span className="text-hymn-gold cursor-pointer">Terms of Service</span> and <span className="text-hymn-cyan cursor-pointer">Privacy Policy</span>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to newsletter for updates and events
                    </Label>
                  </div>
                </div>
                
                <Button className="w-full" size="lg">
                  <Crown className="w-4 h-4 mr-2" />
                  Create My Account
                </Button>
                
                <p className="text-center text-sm text-muted-foreground">
                  Already have an account? <span className="text-hymn-gold cursor-pointer">Sign in here</span>
                </p>
              </CardContent>
            </Card>

            {/* Benefits & Features */}
            <div className="space-y-8">
              <Card className="border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-hymn-cyan" />
                    Account Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hymn-gold rounded-full mr-3"></div>
                      <span>Access to all game servers</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hymn-gold rounded-full mr-3"></div>
                      <span>Free character slots (6 per account)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hymn-gold rounded-full mr-3"></div>
                      <span>Guild creation privileges</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hymn-gold rounded-full mr-3"></div>
                      <span>Forum and community access</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-hymn-gold rounded-full mr-3"></div>
                      <span>Event participation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Gamepad2 className="w-5 h-5 mr-3 text-secondary" />
                    What's Next?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-hymn-gold/20 rounded-full flex items-center justify-center text-xs font-bold text-hymn-gold mt-1">1</div>
                      <div>
                        <h4 className="font-semibold">Download Client</h4>
                        <p className="text-sm text-muted-foreground">Get the game client and install</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-hymn-gold/20 rounded-full flex items-center justify-center text-xs font-bold text-hymn-gold mt-1">2</div>
                      <div>
                        <h4 className="font-semibold">Create Character</h4>
                        <p className="text-sm text-muted-foreground">Choose your class and start playing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-hymn-gold/20 rounded-full flex items-center justify-center text-xs font-bold text-hymn-gold mt-1">3</div>
                      <div>
                        <h4 className="font-semibold">Join Community</h4>
                        <p className="text-sm text-muted-foreground">Connect with other players</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RegisterPage;