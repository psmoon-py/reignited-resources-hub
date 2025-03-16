
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, Code, TestTube, Calculator, BrainCircuit, Telescope, X } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import Pagination from "@/components/ui/pagination";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Categories and other filter options
const categories = ["All", "Programming", "Science", "Mathematics", "AI & Machine Learning", "Astronomy", "Study Materials"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const types = ["All", "Tutorial", "Course", "Article", "Practice", "Study Guide", "Experiment", "Guide"];

// Generate 1000+ resources
const generateResources = () => {
  const resourceTitles = {
    Programming: [
      "Introduction to Python Programming",
      "Advanced Java Techniques",
      "C++ Data Structures",
      "Web Development with React",
      "Mobile App Development with Flutter",
      "Rust Programming Language",
      "Go Programming Tutorial",
      "JavaScript Fundamentals",
      "HTML and CSS Basics",
      "RESTful API Design",
      "Backend Development with Node.js",
      "Introduction to TypeScript",
      "Ruby on Rails Development",
      "SQL Database Design",
      "MongoDB for Beginners",
      "Git and GitHub Version Control",
      "Functional Programming in JavaScript",
      "Object-Oriented Programming Principles",
      "Algorithms and Problem Solving",
      "Secure Coding Practices",
    ],
    Science: [
      "Chemistry Lab Experiments",
      "Physics: Mechanics and Motion",
      "Biology: Cell Structure and Function",
      "Environmental Science Projects",
      "Chemistry: Periodic Table Explained",
      "Physics: Electricity and Magnetism",
      "Biology: Genetics and Heredity",
      "Earth Science: Geology Basics",
      "Chemistry: Organic Compounds",
      "Physics: Thermodynamics",
      "Biology: Ecology and Ecosystems",
      "Astronomy: The Solar System",
      "Chemistry: Chemical Reactions",
      "Physics: Waves and Optics",
      "Biology: Human Anatomy",
      "Environmental Science: Climate Change",
      "Chemistry: Solutions and Mixtures",
      "Physics: Quantum Mechanics",
      "Biology: Evolution and Natural Selection",
      "Forensic Science Techniques",
    ],
    Mathematics: [
      "Advanced Calculus Practice Problems",
      "Linear Algebra Essentials",
      "Statistics and Probability",
      "Geometry Problem Solving",
      "Algebra I Fundamentals",
      "Algebra II and Functions",
      "Trigonometry Basics",
      "Pre-Calculus Concepts",
      "Differential Equations",
      "Discrete Mathematics",
      "Number Theory Introduction",
      "Mathematical Proofs",
      "Vector Calculus",
      "Complex Analysis",
      "Applied Mathematics",
      "Mathematical Modeling",
      "Numerical Methods",
      "Graph Theory",
      "Optimization Techniques",
      "Mathematical Logic",
    ],
    "AI & Machine Learning": [
      "Neural Networks Demystified",
      "Deep Learning Applications",
      "Introduction to Machine Learning",
      "Natural Language Processing",
      "Computer Vision Fundamentals",
      "Reinforcement Learning",
      "AI Ethics and Governance",
      "Data Science with Python",
      "TensorFlow and Keras",
      "PyTorch for Deep Learning",
      "Big Data Analytics",
      "AI for Robotics",
      "Generative AI Models",
      "Recommender Systems",
      "Time Series Forecasting",
      "Clustering Algorithms",
      "Decision Trees and Random Forests",
      "Support Vector Machines",
      "AI in Healthcare",
      "AI for Climate Science",
    ],
    Astronomy: [
      "Astronomy: Exploring Our Solar System",
      "Stellar Evolution and Black Holes",
      "Galaxies and the Universe",
      "Celestial Navigation",
      "Telescopes and Astronomical Instruments",
      "Planetary Science",
      "The Life Cycle of Stars",
      "Cosmic Microwave Background",
      "Dark Matter and Dark Energy",
      "Space Exploration History",
      "Astronomical Phenomena",
      "Exoplanets and Habitable Worlds",
      "Cosmology: The Big Bang Theory",
      "Radio Astronomy",
      "Astrophotography for Beginners",
      "Astrobiology: Life in the Universe",
      "Gravitational Waves",
      "Comets, Asteroids, and Meteors",
      "The Milky Way Galaxy",
      "Stargazing for Beginners",
    ],
    "Study Materials": [
      "Organic Chemistry Study Guide",
      "Study Skills for STEM Students",
      "Exam Preparation Techniques",
      "Note-Taking Strategies",
      "Time Management for Students",
      "Memory Improvement Techniques",
      "Critical Thinking Skills",
      "Research Paper Writing Guide",
      "Scientific Method Explained",
      "Laboratory Safety Guidelines",
      "STEM Career Planning",
      "Scholarship Application Guide",
      "College Application Essays",
      "Scientific Literature Review",
      "Technical Writing Guidelines",
      "Presentation Skills for STEM",
      "Collaboration in STEM Projects",
      "Math Problem-Solving Strategies",
      "Science Fair Project Ideas",
      "STEM Internship Preparation",
    ],
  };

  const descriptions = [
    "A comprehensive guide covering fundamental concepts with practical examples and exercises.",
    "In-depth exploration of advanced topics with step-by-step explanations and interactive demonstrations.",
    "Hands-on learning resource with projects and challenges to reinforce understanding and build skills.",
    "Detailed tutorial with visual aids and real-world applications to enhance learning experience.",
    "Concise reference material with key formulas, definitions, and examples for quick review and study.",
    "Problem-solving focused resource with practice exercises and worked solutions to develop critical thinking.",
    "Interactive learning module with simulations and experiments to promote active engagement.",
    "Self-paced course with quizzes and assessments to track progress and mastery of concepts.",
    "Research-based content with the latest developments and discoveries in the field.",
    "Beginner-friendly introduction with clear explanations and no prior knowledge required.",
  ];

  let resources = [];
  let id = 1;

  // Generate resources for each category
  Object.entries(resourceTitles).forEach(([category, titles]) => {
    const icon = 
      category === "Programming" ? <Code className="h-8 w-8 text-brand-blue" /> :
      category === "Science" ? <TestTube className="h-8 w-8 text-brand-orange" /> :
      category === "Mathematics" ? <Calculator className="h-8 w-8 text-brand-blue" /> :
      category === "AI & Machine Learning" ? <BrainCircuit className="h-8 w-8 text-brand-orange" /> :
      category === "Astronomy" ? <Telescope className="h-8 w-8 text-brand-blue" /> :
      <BookOpen className="h-8 w-8 text-brand-orange" />;

    // Create multiple variations of each title with different difficulty levels and types
    titles.forEach(title => {
      levels.slice(1).forEach(level => {
        types.slice(1).forEach(type => {
          // Create variations of the title
          const variation = `${title} - ${type}`;
          
          // Add multiple resources for each combination
          for (let i = 0; i < 3; i++) {
            resources.push({
              id: id++,
              title: i === 0 ? title : `${title} (${i})`,
              description: descriptions[Math.floor(Math.random() * descriptions.length)],
              category,
              icon,
              level,
              type,
            });
          }
        });
      });
    });
  });

  return resources;
};

// Create resource data (1000+ items)
const resourcesData = generateResources();

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [activeTab, setActiveTab] = useState("grid");

  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || resource.level === selectedLevel;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesType;
  });

  // Calculate pagination
  const totalFilteredItems = filteredResources.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResources.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedType("All");
    setSearchTerm("");
  };

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, selectedLevel, selectedType]);

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
                Access our comprehensive collection of {resourcesData.length}+ STEM learning materials, exercises, and guides - completely free.
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedCategory === category
                          ? "bg-brand-blue text-white"
                          : "bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Level</label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedLevel === level
                          ? "bg-brand-blue text-white"
                          : "bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1 rounded-full text-sm ${
                        selectedType === type
                          ? "bg-brand-blue text-white"
                          : "bg-muted/50 hover:bg-muted"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Resources Display */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">
                {filteredResources.length} Resources Found
              </h2>
              
              <div className="flex items-center gap-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                  <TabsList className="grid w-24 grid-cols-2">
                    <TabsTrigger value="grid">Grid</TabsTrigger>
                    <TabsTrigger value="list">List</TabsTrigger>
                  </TabsList>
                </Tabs>
                
                <div className="flex items-center gap-2">
                  <span className="text-sm text-foreground/70 hidden md:inline">Items per page:</span>
                  <select 
                    className="bg-muted/10 border border-muted rounded-md px-2 py-1"
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
            
            {filteredResources.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 mx-auto text-foreground/30 mb-4" />
                <h3 className="text-xl font-semibold mb-2">No resources found</h3>
                <p className="text-foreground/70 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            ) : (
              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentItems.map((resource) => (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (resource.id % 10) * 0.05 }}
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
                        
                        <p className="text-foreground/70 mb-6 flex-grow">
                          {resource.description}
                        </p>
                        
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="mt-auto w-full"
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
                              <span className="text-xs text-foreground/50">{resource.category}</span>
                              <Button 
                                variant="outline" 
                                size="sm"
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
            )}
            
            {filteredResources.length > 0 && (
              <div className="mt-12">
                <Pagination
                  totalItems={filteredResources.length}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  className="mb-6"
                />
                
                <div className="text-center text-sm text-foreground/70">
                  Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredResources.length)} of {filteredResources.length} resources
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
