import Layout from "@/components/HymnRO/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Monitor, Smartphone, HardDrive, Cpu, MemoryStick } from "lucide-react";

const DownloadPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-hymn-gold/30 mb-8">
            <div className="w-2 h-2 bg-hymn-cyan rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm text-hymn-cyan font-medium">Latest Client Version 2.1.5</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-gold bg-clip-text text-transparent">Download</span>
            <br />
            <span className="text-foreground">HymnRO Client</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Start your legendary journey with our custom Ragnarok Online client. 
            Experience enhanced graphics, quality of life improvements, and exclusive content.
          </p>
        </div>
      </section>

      {/* Download Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Full Client */}
            <Card className="relative overflow-hidden border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center mb-4">
                  <HardDrive className="w-6 h-6 text-hymn-navy" />
                </div>
                <CardTitle className="text-xl">Full Client</CardTitle>
                <CardDescription>Complete installation package</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="text-hymn-gold">2.4 GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span className="text-hymn-cyan">2.1.5</span>
                  </div>
                  <Button className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Full Client
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Lite Client */}
            <Card className="relative overflow-hidden border-hymn-cyan/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-hymn-cyan/20 rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-hymn-cyan" />
                </div>
                <CardTitle className="text-xl">Lite Client</CardTitle>
                <CardDescription>Minimal installation with patcher</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="text-hymn-gold">450 MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Version:</span>
                    <span className="text-hymn-cyan">2.1.5</span>
                  </div>
                  <Button variant="outline" className="w-full" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download Lite Client
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Mobile App */}
            <Card className="relative overflow-hidden border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Mobile Companion</CardTitle>
                <CardDescription>Character management & guild chat</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Platform:</span>
                    <span className="text-hymn-gold">Android/iOS</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-hymn-cyan">Coming Soon</span>
                  </div>
                  <Button variant="secondary" className="w-full" size="lg" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Soon Available
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Requirements */}
          <Card className="border-hymn-gold/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Cpu className="w-6 h-6 mr-3 text-hymn-gold" />
                System Requirements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-hymn-gold">Minimum Requirements</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Windows 7 / macOS 10.12 / Ubuntu 16.04</li>
                    <li>• Intel Core 2 Duo / AMD Athlon 64 X2</li>
                    <li>• 2 GB RAM</li>
                    <li>• DirectX 9.0c compatible graphics</li>
                    <li>• 3 GB available space</li>
                    <li>• Broadband internet connection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-hymn-cyan">Recommended Requirements</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Windows 10/11 / macOS 12+ / Ubuntu 20.04+</li>
                    <li>• Intel Core i5 / AMD Ryzen 5</li>
                    <li>• 8 GB RAM</li>
                    <li>• DirectX 11 compatible graphics</li>
                    <li>• 5 GB available space</li>
                    <li>• High-speed internet connection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation Guide */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Need Help Installing?</h3>
            <p className="text-muted-foreground mb-6">
              Check out our comprehensive installation guide and troubleshooting tips.
            </p>
            <Button variant="outline" size="lg">
              View Installation Guide
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DownloadPage;