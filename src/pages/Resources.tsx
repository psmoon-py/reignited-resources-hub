
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen, Code, TestTube, Calculator, BrainCircuit, Telescope, X } from "lucide-react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

// Sample resource data
const resourcesData = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    description: "Learn the basics of Python programming with this comprehensive guide.",
    category: "Programming",
    icon: <Code className="h-8 w-8 text-brand-blue" />,
    level: "Beginner",
    type: "Tutorial",
  },
  {
    id: 2,
    title: "Advanced Calculus Practice Problems",
    description: "Challenge yourself with these advanced calculus problems with step-by-step solutions.",
    category: "Mathematics",
    icon: <Calculator className="h-8 w-8 text-brand-blue" />,
    level: "Advanced",
    type: "Practice",
  },
  {
    id: 3,
    title: "Chemistry Lab Experiments",
    description: "Virtual chemistry lab experiments that you can conduct at home with minimal equipment.",
    category: "Science",
    icon: <TestTube className="h-8 w-8 text-brand-orange" />,
    level: "Intermediate",
    type: "Experiment",
  },
  {
    id: 4,
    title: "Neural Networks Demystified",
    description: "Understand how neural networks work with interactive visualizations and examples.",
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="h-8 w-8 text-brand-orange" />,
    level: "Intermediate",
    type: "Article",
  },
  {
    id: 5,
    title: "Astronomy: Exploring Our Solar System",
    description: "Learn about the planets, moons, and other celestial bodies in our solar system.",
    category: "Astronomy",
    icon: <Telescope className="h-8 w-8 text-brand-blue" />,
    level: "Beginner",
    type: "Course",
  },
  {
    id: 6,
    title: "Organic Chemistry Study Guide",
    description: "Comprehensive study guide for organic chemistry with reaction mechanisms and practice problems.",
    category: "Science",
    icon: <TestTube className="h-8 w-8 text-brand-orange" />,
    level: "Advanced",
    type: "Study Guide",
  },
  {
    id: 7,
    title: "Java Programming: Data Structures",
    description: "Learn how to implement various data structures in Java with practical examples.",
    category: "Programming",
    icon: <Code className="h-8 w-8 text-brand-blue" />,
    level: "Intermediate",
    type: "Tutorial",
  },
  {
    id: 8,
    title: "Physics: Mechanics and Motion",
    description: "Understand the fundamental concepts of mechanics, forces, and motion with interactive simulations.",
    category: "Science",
    icon: <TestTube className="h-8 w-8 text-brand-orange" />,
    level: "Beginner",
    type: "Course",
  },
  {
    id: 9,
    title: "Linear Algebra Essentials",
    description: "Master the essential concepts of linear algebra with visual explanations and examples.",
    category: "Mathematics",
    icon: <Calculator className="h-8 w-8 text-brand-blue" />,
    level: "Intermediate",
    type: "Study Guide",
  },
  {
    id: 10,
    title: "Deep Learning Applications",
    description: "Explore real-world applications of deep learning across various industries.",
    category: "AI & Machine Learning",
    icon: <BrainCircuit className="h-8 w-8 text-brand-orange" />,
    level: "Advanced",
    type: "Article",
  },
  {
    id: 11,
    title: "Stellar Evolution and Black Holes",
    description: "Explore the life cycle of stars and the formation of black holes.",
    category: "Astronomy",
    icon: <Telescope className="h-8 w-8 text-brand-blue" />,
    level: "Advanced",
    type: "Course",
  },
  {
    id: 12,
    title: "Study Skills for STEM Students",
    description: "Effective study strategies specifically designed for STEM subjects to improve retention and understanding.",
    category: "Study Materials",
    icon: <BookOpen className="h-8 w-8 text-brand-orange" />,
    level: "Beginner",
    type: "Guide",
  },
];

const categories = ["All", "Programming", "Science", "Mathematics", "AI & Machine Learning", "Astronomy", "Study Materials"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];
const types = ["All", "Tutorial", "Course", "Article", "Practice", "Study Guide", "Experiment", "Guide"];

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredResources = resourcesData.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || resource.level === selectedLevel;
    const matchesType = selectedType === "All" || resource.type === selectedType;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesType;
  });

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedLevel("All");
    setSelectedType("All");
    setSearchTerm("");
  };

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
                Access our comprehensive collection of STEM learning materials, exercises, and guides - completely free.
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
        
        {/* Resources Grid */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-semibold">
                {filteredResources.length} Resources Found
              </h2>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground/70">Sort by:</span>
                <select className="bg-muted/10 border border-muted rounded-md px-2 py-1">
                  <option>Newest First</option>
                  <option>Popularity</option>
                  <option>A-Z</option>
                </select>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredResources.map((resource) => (
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
            )}
            
            {filteredResources.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Button variant="outline">
                  Load More Resources
                </Button>
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
