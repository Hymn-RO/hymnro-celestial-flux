import Layout from "@/components/HymnRO/Layout";
import HeroSection from "@/components/HymnRO/HeroSection";
import InfoCards from "@/components/HymnRO/InfoCards";
import NewsSection from "@/components/HymnRO/NewsSection";
import Sidebar from "@/components/HymnRO/Sidebar";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Info Cards */}
      <InfoCards />
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <NewsSection />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
