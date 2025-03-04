
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Resources from "@/components/sections/Resources";
import Opportunities from "@/components/sections/Opportunities";
import Services from "@/components/sections/Services";
import Workshops from "@/components/sections/Workshops";

const Index: React.FC = () => {
  useEffect(() => {
    // Reset scroll position when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Resources />
        <Opportunities />
        <Services />
        <Workshops />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
