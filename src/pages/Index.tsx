
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Resources from "@/components/sections/Resources";
import Opportunities from "@/components/sections/Opportunities";
import Services from "@/components/sections/Services";
import Workshops from "@/components/sections/Workshops";
import ContactForm from "@/components/sections/ContactForm";

const Index: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Reset scroll position when page loads
    window.scrollTo(0, 0);
    
    // Handle hash navigation for direct links
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Resources />
        <Opportunities />
        <Services />
        <Workshops />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
