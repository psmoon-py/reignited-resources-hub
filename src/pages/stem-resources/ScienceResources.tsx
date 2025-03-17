
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ResourceGrid } from "@/components/stem-resources/ResourceGrid";
import { ResourceTypeFilter } from "@/components/stem-resources/ResourceTypeFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getResourcesBySubject } from "@/data/stemResources";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ScienceResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  
  const allScienceResources = getResourcesBySubject("science");
  
  // Filter resources based on search and filters
  const filteredResources = allScienceResources.filter(resource => {
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
    { value: "physics", label: "Physics" },
    { value: "chemistry", label: "Chemistry" },
    { value: "biology", label: "Biology" },
    { value: "earth-science", label: "Earth Science" },
    { value: "astronomy", label: "Astronomy" },
    { value: "environmental-science", label: "Environmental Science" }
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
        {/* Header Section */}
        <section className="bg-gradient-to-b from-orange-500/10 to-background pt-32 pb-16">
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
                Science <span className="text-gradient-primary">Resources</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground/70 mb-8"
              >
                Explore our collection of physics, chemistry, biology, astronomy, and other science resources for all learning levels.
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
                  placeholder="Search science resources..."
                  className="w-full px-12 py-3 rounded-full border border-muted focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm"
                />
                <Filter className="absolute right-4 top-3.5 h-5 w-5 text-foreground/50" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Filters and Resources */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Filters */}
              <div className="lg:col-span-1">
                <div className="bg-muted/10 rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Science Subject</label>
                      <Select value={selectedSubcategory} onValueChange={setSelectedSubcategory}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
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
              
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    {filteredResources.length} Science Resources
                  </h2>
                  
                  <Tabs defaultValue="all">
                    <TabsList>
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="videos">Videos</TabsTrigger>
                      <TabsTrigger value="experiments">Experiments</TabsTrigger>
                      <TabsTrigger value="courses">Courses</TabsTrigger>
                      <TabsTrigger value="references">References</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="all" className="mt-6">
                      <ResourceGrid resources={filteredResources} />
                    </TabsContent>
                    
                    <TabsContent value="videos" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "video" || r.type === "playlist" || r.type === "channel"
                      )} />
                    </TabsContent>
                    
                    <TabsContent value="experiments" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.tags.some(tag => 
                          ["experiment", "lab", "practical", "demonstration"].includes(tag)
                        )
                      )} />
                    </TabsContent>
                    
                    <TabsContent value="courses" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "course" || r.type === "book"
                      )} />
                    </TabsContent>
                    
                    <TabsContent value="references" className="mt-6">
                      <ResourceGrid resources={filteredResources.filter(r => 
                        r.type === "article" || r.type === "pdf" || r.type === "website"
                      )} />
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

export default ScienceResources;
