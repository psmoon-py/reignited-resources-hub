import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ResourceGrid } from "@/components/stem-resources/ResourceGrid";
import { ResourceTypeFilter } from "@/components/stem-resources/ResourceTypeFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getResourcesBySubject } from "@/data/resources";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const MathResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  
  const allMathResources = getResourcesBySubject("math");
  
  const filteredResources = allMathResources.filter(resource => {
    const matchesSearch = searchTerm === "" || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === "all" || 
      resource.difficulty === selectedDifficulty || 
      (selectedDifficulty === "all" && resource.difficulty === "all-levels");
    
    const matchesSubcategory = selectedSubcategory === "all" || 
      resource.subcategories.includes(selectedSubcategory as any);
    
    return matchesSearch && matchesDifficulty && matchesSubcategory;
  });
  
  const subcategories = [
    { value: "all", label: "All Topics" },
    { value: "algebra", label: "Algebra" },
    { value: "calculus", label: "Calculus" },
    { value: "geometry", label: "Geometry" },
    { value: "statistics", label: "Statistics" },
    { value: "discrete-math", label: "Discrete Mathematics" },
    { value: "number-theory", label: "Number Theory" },
    { value: "applied-math", label: "Applied Mathematics" }
  ];
  
  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-500/10 to-background pt-32 pb-16">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-6">
              <Link to="/stem-resources" className="flex items-center text-foreground/70 hover:text-foreground transition-colors">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to All Resources
              </Link>
            </div>
            
            <div className="max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-6"
              >
                Mathematics <span className="text-gradient-primary">Resources</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground/70 mb-8"
              >
                Discover our collection of high-quality mathematics resources, from algebra and calculus to statistics and applied mathematics.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative max-w-xl"
              >
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-foreground/50" />
                <Input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search mathematics resources..."
                  className="w-full px-12 py-3 rounded-full border border-muted focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm"
                />
                <Filter className="absolute right-4 top-3.5 h-5 w-5 text-foreground/50" />
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-muted/10 rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Mathematics Topic</label>
                      <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          {subcategories.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
                      <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          {difficulties.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                              {item.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-2 block">Resource Type</label>
                      <div className="flex flex-wrap gap-2">
                        <ResourceTypeFilter />
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedDifficulty("all");
                        setSelectedSubcategory("all");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {filteredResources.length} Mathematics Resources
                  </h2>
                  
                  <Tabs defaultValue="all">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="videos">Videos</TabsTrigger>
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="articles">Articles</TabsTrigger>
                      <TabsTrigger value="tools">Tools</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="mt-6">
                      <ResourceGrid resources={filteredResources} itemsPerPage={9} />
                    </TabsContent>
                    
                    <TabsContent value="videos" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "video" || r.type === "playlist" || r.type === "channel"
                      )} itemsPerPage={9} />
                    </TabsContent>
                    
                    <TabsContent value="courses" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "course"
                      )} itemsPerPage={9} />
                    </TabsContent>
                    
                    <TabsContent value="articles" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "article" || r.type === "pdf"
                      )} itemsPerPage={9} />
                    </TabsContent>
                    
                    <TabsContent value="tools" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "tool" || r.type === "app" || r.type === "website"
                      )} itemsPerPage={9} />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MathResources;
