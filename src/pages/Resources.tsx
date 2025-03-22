
import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, Code, TestTube, Calculator, BrainCircuit, Telescope, X, ArrowUpAZ, ArrowDownAZ, ArrowUp, RotateCcw, List, Grid2X2, Lightbulb, Book, Presentation, BookText, GraduationCap, Clock, Users, FileText, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { resourcesData, subjectCategories, resourceTypes, difficultyLevels } from "@/data/resources";
import { getAllResources } from "@/data/resourcesContent";
import Pagination from "@/components/ui/pagination";

// Sort options
const sortOptions = [
  { value: "az", label: "A-Z", icon: <ArrowUpAZ className="h-4 w-4 mr-2" /> },
  { value: "za", label: "Z-A", icon: <ArrowDownAZ className="h-4 w-4 mr-2" /> },
  { value: "newest", label: "Newest", icon: <ArrowUp className="h-4 w-4 mr-2" /> },
  { value: "oldest", label: "Oldest", icon: <RotateCcw className="h-4 w-4 mr-2" /> },
];

// Resource categories with paths
const resourceCategories = [
  { 
    title: "Programming",
    category: "Programming",
    icon: <Code className="h-5 w-5 text-brand-blue" />
  },
  { 
    title: "Science",
    category: "Science",
    icon: <TestTube className="h-5 w-5 text-brand-orange" />
  },
  { 
    title: "Mathematics",
    category: "Mathematics",
    icon: <Calculator className="h-5 w-5 text-brand-blue" />
  },
  { 
    title: "AI & Machine Learning",
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="h-5 w-5 text-brand-orange" />
  },
  { 
    title: "Astronomy",
    category: "Astronomy",
    icon: <Telescope className="h-5 w-5 text-brand-blue" />
  },
  { 
    title: "Study Materials",
    category: "Study Materials",
    icon: <BookOpen className="h-5 w-5 text-brand-orange" />
  },
  { 
    title: "Academic Success",
    category: "Academic Success",
    icon: <GraduationCap className="h-5 w-5 text-brand-blue" />
  },
  { 
    title: "Research Skills",
    category: "Research Skills",
    icon: <BookText className="h-5 w-5 text-brand-orange" />
  },
  { 
    title: "Networking",
    category: "Networking",
    icon: <Users className="h-5 w-5 text-brand-blue" />
  }
];

const ResourcesPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [activeTab, setActiveTab] = useState("grid");
  const [sortOption, setSortOption] = useState("az");
  
  // Combined resource data
  const allResources = [...resourcesData, ...getAllResources()];
  
  // Get URL params on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  // Get available subcategories based on selected category
  const availableSubcategories = selectedCategory !== "All" 
    ? ["All", ...subjectCategories[selectedCategory as keyof typeof subjectCategories] || []] 
    : ["All"];

  // Reset subcategory when category changes
  useEffect(() => {
    setSelectedSubcategory("All");
  }, [selectedCategory]);

  // Filter resources based on search term and selected filters
  const filteredResources = allResources.filter((resource) => {
    // Handle different resource structures
    const title = 'title' in resource ? resource.title : '';
    const description = 'description' in resource ? resource.description : '';
    const category = 'category' in resource ? resource.category : '';
    const subcategory = 'subcategory' in resource ? resource.subcategory : '';
    const level = 'level' in resource ? resource.level : '';
    const type = 'type' in resource ? resource.type : '';

    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || category === selectedCategory;
    const matchesSubcategory = selectedSubcategory === "All" || subcategory === selectedSubcategory;
    const matchesLevel = selectedLevel === "All" || level === selectedLevel;
    const matchesType = selectedType === "All" || type === selectedType;
    
    return matchesSearch && matchesCategory && matchesSubcategory && matchesLevel && matchesType;
  });

  // Sort resources based on selected sort option
  const sortedResources = [...filteredResources].sort((a, b) => {
    const titleA = 'title' in a ? a.title : '';
    const titleB = 'title' in b ? b.title : '';
    const idA = 'id' in a ? a.id : 0;
    const idB = 'id' in b ? b.id : 0;
    
    switch (sortOption) {
      case "az":
        return titleA.localeCompare(titleB);
      case "za":
        return titleB.localeCompare(titleA);
      case "newest":
        return typeof idB === 'number' && typeof idA === 'number' ? idB - idA : 0;
      case "oldest":
        return typeof idA === 'number' && typeof idB === 'number' ? idA - idB : 0;
      default:
        return 0;
    }
  });

  // Calculate pagination
  const totalFilteredItems = sortedResources.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedResources.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedSubcategory("All");
    setSelectedLevel("All");
    setSelectedType("All");
    setSearchTerm("");
    setSortOption("az");
  };

  const handleResourceClick = (resourceId: any) => {
    // Handle different resource formats
    if (typeof resourceId === 'string' && resourceId.startsWith('prog-')) {
      // Handle direct navigation to external links for new resource format
      const resource = getAllResources().find(r => r.id === resourceId);
      if (resource && 'link' in resource) {
        window.open(resource.link, '_blank');
      }
    } else {
      // Handle traditional resource detail view
      navigate(`/resource/${resourceId}`);
    }
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedSubcategory, selectedLevel, selectedType, sortOption]);

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
                Explore Our <span className="text-gradient-primary">STEM Resources</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground/70 mb-8"
              >
                Access our comprehensive collection of {allResources.length}+ STEM learning materials, exercises, guides, videos, courses, and tools - completely free.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative max-w-xl mx-auto"
              >
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-foreground/50" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for resources..."
                  className="w-full px-12 py-3 rounded-full border border-muted focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm"
                />
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="absolute right-4 top-3 p-1 rounded-full hover:bg-muted/50 transition-colors"
                >
                  <Filter className="h-5 w-5 text-foreground/70" />
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Category Quick Filters */}
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                selectedCategory === "All" 
                  ? "bg-brand-blue text-white border-brand-blue" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              }`}
            >
              All Resources
            </button>
            
            {resourceCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors flex items-center gap-2 ${
                  selectedCategory === category.category 
                    ? "bg-brand-blue text-white border-brand-blue" 
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
                }`}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        {/* Filters */}
        <motion.section 
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: showFilters ? "auto" : 0,
            opacity: showFilters ? 1 : 0
          }}
          className="overflow-hidden bg-muted/10"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Filters</h3>
              <button 
                onClick={clearFilters}
                className="text-sm text-brand-blue hover:underline flex items-center"
              >
                <X className="h-4 w-4 mr-1" /> Clear filters
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Subject Category */}
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Subjects</SelectItem>
                    {Object.keys(subjectCategories).map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Subcategory - only show if a category is selected */}
              <div>
                <label className="block text-sm font-medium mb-2">Topic</label>
                <Select 
                  value={selectedSubcategory} 
                  onValueChange={setSelectedSubcategory}
                  disabled={selectedCategory === "All"}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSubcategories.map((subcategory) => (
                      <SelectItem key={subcategory} value={subcategory}>
                        {subcategory}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Level */}
              <div>
                <label className="block text-sm font-medium mb-2">Level</label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Levels</SelectItem>
                    {difficultyLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Type */}
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resource type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Types</SelectItem>
                    {resourceTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Resources Section */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">
                {sortedResources.length} Resources Found
              </h2>
              
              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4 mr-1" /> 
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {sortOptions.map((option) => (
                      <DropdownMenuItem 
                        key={option.value}
                        onClick={() => setSortOption(option.value)}
                        className="flex items-center cursor-pointer"
                      >
                        {option.icon}
                        {option.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                
                {/* View Tabs */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                  <TabsList className="grid w-24 grid-cols-2">
                    <TabsTrigger value="grid"><Grid2X2 className="h-4 w-4" /></TabsTrigger>
                    <TabsTrigger value="list"><List className="h-4 w-4" /></TabsTrigger>
                  </TabsList>
                </Tabs>
                
                {/* Items per page selector */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/70 hidden md:inline">Items per page:</span>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger className="w-16">
                      <SelectValue placeholder="12" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="12">12</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="48">48</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            {sortedResources.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 mx-auto text-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-foreground/70 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <Tabs value={activeTab} defaultValue="grid">
                <TabsContent value="grid" className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentItems.map((resource) => (
                      <motion.div
                        key={resource.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                      >
                        <Card glassEffect className="h-full flex flex-col hover:shadow-lg">
                          <div className="flex justify-between items-start mb-4">
                            <div className="p-3 rounded-full bg-muted/30">
                              {resource.icon}
                            </div>
                            <div className="flex gap-2">
                              <span className="px-2 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                                {resource.level}
                              </span>
                              <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full">
                                {resource.type}
                              </span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                          
                          <p className="text-foreground/70 mb-2 flex-grow">
                            {resource.description}
                          </p>
                          
                          <div className="text-xs text-foreground/50 mb-4">
                            {resource.subcategory && (
                              <div className="mb-1">Topic: {resource.subcategory}</div>
                            )}
                            <div>Category: {resource.category}</div>
                          </div>
                          
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="mt-auto w-full"
                            onClick={() => handleResourceClick(resource.id)}
                          >
                            Access Resource
                          </Button>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="list" className="mt-0">
                  <ScrollArea className="h-[70vh] rounded-md border">
                    <div className="w-full">
                      {currentItems.map((resource) => (
                        <motion.div
                          key={resource.id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="border-b p-4 hover:bg-muted/10"
                        >
                          <div className="flex items-start gap-4">
                            <div className="p-2 rounded-full bg-muted/30 shrink-0">
                              {resource.icon}
                            </div>
                            
                            <div className="flex-grow">
                              <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold">{resource.title}</h3>
                                <div className="flex gap-2">
                                  <span className="px-2 py-0.5 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                                    {resource.level}
                                  </span>
                                  <span className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange text-xs rounded-full">
                                    {resource.type}
                                  </span>
                                </div>
                              </div>
                              
                              <p className="text-sm text-foreground/70 my-2">
                                {resource.description}
                              </p>
                              
                              <div className="flex justify-between items-center">
                                <div className="text-xs text-foreground/50">
                                  {resource.category} {resource.subcategory && `/ ${resource.subcategory}`}
                                </div>
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => handleResourceClick(resource.id)}
                                >
                                  Access Resource
                                </Button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            )}
            
            {sortedResources.length > 0 && (
              <div className="mt-12">
                <Pagination
                  totalItems={sortedResources.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  className="mb-6"
                />
                
                <div className="text-center text-sm text-foreground/70">
                  Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, sortedResources.length)} of {sortedResources.length} resources
                </div>
              </div>
            )}
          </div>
        </section>
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesPage;
