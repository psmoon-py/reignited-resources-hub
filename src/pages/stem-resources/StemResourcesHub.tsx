
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ResourceGrid } from "@/components/stem-resources/ResourceGrid";
import { SubjectSelector } from "@/components/stem-resources/SubjectSelector";
import { ResourceTypeFilter } from "@/components/stem-resources/ResourceTypeFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getFeaturedResources } from "@/data/stemResources";
import ContactForm from "@/components/sections/ContactForm";

const StemResourcesHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const featuredResources = getFeaturedResources();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue/10 to-background pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Find the Best <span className="text-gradient-primary">STEM Resources</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground/70 mb-8"
              >
                Explore our curated collection of high-quality resources for mathematics, science, technology, and engineering.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative max-w-xl mx-auto"
              >
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-foreground/50" />
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for STEM resources..."
                  className="w-full px-12 py-6 rounded-full border border-muted focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm text-lg"
                />
                <Button 
                  className="absolute right-2 top-2"
                  size="sm"
                >
                  Search
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Subject Categories */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore by Subject</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Find resources tailored to your specific area of interest in STEM.
              </p>
            </div>
            
            <SubjectSelector />
          </div>
        </section>
        
        {/* Featured Resources */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Featured Resources</h2>
              <Button variant="ghost" className="flex items-center gap-1">
                See all <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <ResourceGrid resources={featuredResources} />
          </div>
        </section>
        
        {/* Resource Types */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Browse by Resource Type</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Find the format that works best for your learning style.
              </p>
            </div>
            
            <ResourceTypeFilter />
          </div>
        </section>
        
        {/* Contact Form */}
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default StemResourcesHub;
