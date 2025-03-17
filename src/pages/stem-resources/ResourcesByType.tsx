
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ResourceGrid } from "@/components/stem-resources/ResourceGrid";
import { ResourceTypeFilter } from "@/components/stem-resources/ResourceTypeFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getResourcesByType } from "@/data/stemResources";
import { Link, useParams } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ResourcesByType: React.FC = () => {
  const { resourceType } = useParams<{ resourceType: string }>();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  
  const typeResources = resourceType ? getResourcesByType(resourceType) : [];
  
  // Filter resources based on search and filters
  const filteredResources = typeResources.filter(resource => {
    const matchesSearch = searchTerm === "" || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesDifficulty = selectedDifficulty === "all" || 
      resource.difficulty === selectedDifficulty || 
      (selectedDifficulty === "all" && resource.difficulty === "all-levels");
    
    const matchesSubject = selectedSubject === "all" || 
      resource.subjects.includes(selectedSubject as any);
    
    return matchesSearch && matchesDifficulty && matchesSubject;
  });
  
  const typeLabels: Record<string, string> = {
    "video": "Videos",
    "playlist": "Playlists",
    "channel": "Channels",
    "article": "Articles",
    "website": "Websites",
    "app": "Apps",
    "pdf": "PDFs",
    "presentation": "Presentations",
    "course": "Courses",
    "book": "Books",
    "tool": "Tools",
    "dataset": "Datasets"
  };
  
  const subjects = [
    { value: "all", label: "All Subjects" },
    { value: "math", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "technology", label: "Technology" },
    { value: "engineering", label: "Engineering" }
  ];
  
  const difficulties = [
    { value: "all", label: "All Levels" },
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
  ];
  
  const typeLabel = resourceType ? (typeLabels[resourceType] || resourceType) : "Resources";
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-gradient-to-b from-purple-500/10 to-background pt-32 pb-16">
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
                STEM <span className="text-gradient-primary">{typeLabel}</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground/70 mb-8"
              >
                Browse our collection of {typeLabel.toLowerCase()} across mathematics, science, technology, and engineering subjects.
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
                  placeholder={`Search ${typeLabel.toLowerCase()}...`}
                  className="w-full px-12 py-3 rounded-full border border-muted focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm"
                />
                <Filter className="absolute right-4 top-3.5 h-5 w-5 text-foreground/50" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Resource Type Filter */}
        <section className="py-8 bg-muted/10">
          <div className="container mx-auto px-6">
            <h2 className="text-xl font-bold mb-4 text-center">Browse by Resource Type</h2>
            <ResourceTypeFilter activeType={resourceType} />
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
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((item) => (
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
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedDifficulty("all");
                        setSelectedSubject("all");
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
                  <h2 className="text-2xl font-bold mb-6">
                    {filteredResources.length} {typeLabel}
                  </h2>
                  
                  {filteredResources.length > 0 ? (
                    <ResourceGrid resources={filteredResources} />
                  ) : (
                    <div className="text-center py-12 bg-muted/10 rounded-lg">
                      <h3 className="text-lg font-medium mb-2">No resources found</h3>
                      <p className="text-foreground/70 mb-4">
                        Try adjusting your filters or search terms to find what you're looking for.
                      </p>
                      <Button 
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setSelectedDifficulty("all");
                          setSelectedSubject("all");
                        }}
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  )}
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

export default ResourcesByType;
