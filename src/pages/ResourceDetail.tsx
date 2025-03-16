
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, ExternalLink, ThumbsUp, Clock, Download, Share2, Bookmark, Code, TestTube, Calculator, BrainCircuit, Telescope } from "lucide-react";
import Button from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { resourcesData } from "@/data/resources";
import { Separator } from "@/components/ui/separator";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const ResourceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [resource, setResource] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("content");
  const [relatedResources, setRelatedResources] = useState<any[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (id) {
      // Find the resource with the matching ID
      const foundResource = resourcesData.find(item => item.id.toString() === id);
      
      if (foundResource) {
        setResource(foundResource);
        
        // Find related resources (same category or subcategory)
        const related = resourcesData
          .filter(item => 
            item.id.toString() !== id && 
            (item.category === foundResource.category || 
             item.subcategory === foundResource.subcategory))
          .slice(0, 6);
        
        setRelatedResources(related);
      }
      
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-brand-blue border-t-transparent rounded-full"></div>
      </div>
    );
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-6">
          <BookOpen className="h-16 w-16 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-semibold mb-2">Resource Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the resource you're looking for.
          </p>
          <Button asChild>
            <Link to="/resources">Back to Resources</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Helper function to get icon based on category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Code className="h-5 w-5 text-brand-blue" />;
      case "Science":
        return <TestTube className="h-5 w-5 text-brand-orange" />;
      case "Mathematics":
        return <Calculator className="h-5 w-5 text-brand-blue" />;
      case "AI & Machine Learning":
        return <BrainCircuit className="h-5 w-5 text-brand-orange" />;
      case "Astronomy":
        return <Telescope className="h-5 w-5 text-brand-blue" />;
      default:
        return <BookOpen className="h-5 w-5 text-brand-orange" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Breadcrumb navigation */}
          <div className="flex items-center text-sm text-foreground/60 mb-8">
            <Link to="/resources" className="flex items-center hover:text-brand-blue">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resources
            </Link>
            <span className="mx-2">/</span>
            <span>{resource.category}</span>
            {resource.subcategory && (
              <>
                <span className="mx-2">/</span>
                <span>{resource.subcategory}</span>
              </>
            )}
          </div>
          
          {/* Resource header */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-muted/30 mr-4">
                {resource.icon || getCategoryIcon(resource.category)}
              </div>
              
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                  {resource.level}
                </span>
                <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full">
                  {resource.type}
                </span>
                {resource.subcategory && (
                  <span className="px-2 py-1 bg-muted/60 text-foreground/80 text-xs rounded-full">
                    {resource.subcategory}
                  </span>
                )}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{resource.title}</h1>
            
            <p className="text-lg text-foreground/80 mb-6">
              {resource.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center text-sm text-foreground/60">
                <Clock className="h-4 w-4 mr-2" />
                {resource.duration || "Self-paced"}
              </div>
              
              <div className="flex items-center text-sm text-foreground/60">
                <ThumbsUp className="h-4 w-4 mr-2" />
                {resource.rating || "4.8/5"}
              </div>
              
              <div className="flex items-center text-sm text-foreground/60">
                <BookOpen className="h-4 w-4 mr-2" />
                {resource.views || "1,234"} views
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button>Start Learning</Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Bookmark className="h-4 w-4" />
                Save
              </Button>
              <Button variant="ghost" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
          
          {/* Tabs for different content sections */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="w-full border-b rounded-none justify-start mb-6 bg-transparent p-0">
              <TabsTrigger 
                value="content" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-blue data-[state=active]:bg-transparent"
              >
                Content
              </TabsTrigger>
              <TabsTrigger 
                value="resources" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-blue data-[state=active]:bg-transparent"
              >
                Resources
              </TabsTrigger>
              <TabsTrigger 
                value="prerequisites" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-blue data-[state=active]:bg-transparent"
              >
                Prerequisites
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-brand-blue data-[state=active]:bg-transparent"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="prose dark:prose-invert max-w-none">
                    <h2>About this resource</h2>
                    <p>{resource.fullDescription || resource.description}</p>
                    
                    {resource.content && resource.content.map((section: any, index: number) => (
                      <div key={index} className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <p>{section.content}</p>
                        {section.list && (
                          <ul className="mt-4 space-y-2">
                            {section.list.map((item: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="text-brand-blue mr-2">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                    
                    {resource.category === "Programming" && (
                      <>
                        <h2>Key Concepts</h2>
                        <p>This resource covers the following key programming concepts:</p>
                        <ul>
                          <li>Variables, data types, and operators</li>
                          <li>Control structures (if statements, loops)</li>
                          <li>Functions and modules</li>
                          <li>Object-oriented programming principles</li>
                          <li>Error handling and debugging</li>
                        </ul>
                        
                        <h2>Sample Code</h2>
                        <pre className="bg-muted p-4 rounded overflow-x-auto">
                          <code>
                            {`# Example Python function
def calculate_average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

# Test the function
test_scores = [85, 90, 78, 92, 88]
average = calculate_average(test_scores)
print(f"The average score is: {average}")`}
                          </code>
                        </pre>
                      </>
                    )}
                    
                    {resource.category === "Mathematics" && (
                      <>
                        <h2>Key Concepts</h2>
                        <p>This resource covers the following key mathematical concepts:</p>
                        <ul>
                          <li>Functions and their properties</li>
                          <li>Limits and continuity</li>
                          <li>Differentiation techniques</li>
                          <li>Integration methods</li>
                          <li>Applications in real-world problems</li>
                        </ul>
                        
                        <h2>Sample Problems</h2>
                        <div className="bg-muted p-4 rounded">
                          <p className="font-semibold">Problem 1:</p>
                          <p>Find the derivative of f(x) = x³ + 3x² - 2x + 5</p>
                          <p className="mt-2 text-brand-blue">Solution:</p>
                          <p>f'(x) = 3x² + 6x - 2</p>
                          
                          <Separator className="my-4" />
                          
                          <p className="font-semibold">Problem 2:</p>
                          <p>Evaluate the integral: ∫(2x + 3)dx</p>
                          <p className="mt-2 text-brand-blue">Solution:</p>
                          <p>∫(2x + 3)dx = x² + 3x + C</p>
                        </div>
                      </>
                    )}
                    
                    {resource.category === "Science" && (
                      <>
                        <h2>Key Concepts</h2>
                        <p>This resource covers the following key scientific concepts:</p>
                        <ul>
                          <li>Scientific method and experimental design</li>
                          <li>Data collection and analysis</li>
                          <li>Hypothesis testing</li>
                          <li>Scientific theories and laws</li>
                          <li>Applications in real-world scenarios</li>
                        </ul>
                        
                        <h2>Experiment Overview</h2>
                        <div className="bg-muted p-4 rounded">
                          <p className="font-semibold">Materials needed:</p>
                          <ul className="mt-2">
                            <li>Beakers (100mL, 250mL)</li>
                            <li>Graduated cylinder</li>
                            <li>Thermometer</li>
                            <li>Safety goggles</li>
                            <li>Lab notebook</li>
                          </ul>
                          
                          <p className="font-semibold mt-4">Procedure:</p>
                          <ol className="mt-2 space-y-2">
                            <li>1. Set up the apparatus as shown in the diagram</li>
                            <li>2. Measure 50mL of solution A using the graduated cylinder</li>
                            <li>3. Record the initial temperature</li>
                            <li>4. Add solution B dropwise and record observations</li>
                            <li>5. Analyze the results and draw conclusions</li>
                          </ol>
                        </div>
                      </>
                    )}
                    
                    <h2>External Resources</h2>
                    <ul>
                      <li>
                        <a href="https://www.youtube.com/c/3blue1brown" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline flex items-center">
                          3Blue1Brown <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        {resource.category === "Mathematics" && " - Excellent visualizations for calculus and linear algebra"}
                      </li>
                      <li>
                        <a href="https://www.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline flex items-center">
                          Khan Academy <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        {" - Comprehensive tutorials and practice problems"}
                      </li>
                      <li>
                        <a href="https://ocw.mit.edu/" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline flex items-center">
                          MIT OpenCourseWare <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        {" - University-level courses and materials"}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-4">What You'll Learn</h3>
                      <ul className="space-y-3">
                        {['Master fundamental concepts', 'Apply knowledge to real-world problems', 'Develop critical thinking skills', 'Prepare for advanced topics'].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mr-3 mt-0.5">
                              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold mb-4">Resource Details</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="py-2 pl-0 font-medium">Category</TableCell>
                            <TableCell className="py-2">{resource.category}</TableCell>
                          </TableRow>
                          {resource.subcategory && (
                            <TableRow>
                              <TableCell className="py-2 pl-0 font-medium">Topic</TableCell>
                              <TableCell className="py-2">{resource.subcategory}</TableCell>
                            </TableRow>
                          )}
                          <TableRow>
                            <TableCell className="py-2 pl-0 font-medium">Type</TableCell>
                            <TableCell className="py-2">{resource.type}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="py-2 pl-0 font-medium">Level</TableCell>
                            <TableCell className="py-2">{resource.level}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="py-2 pl-0 font-medium">Last Updated</TableCell>
                            <TableCell className="py-2">{resource.updatedDate || "October 2023"}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="resources" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Downloadable Resources</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-3 text-brand-blue" />
                        <span>Lecture Notes (PDF)</span>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-3 text-brand-blue" />
                        <span>Practice Worksheet</span>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-3 text-brand-blue" />
                        <span>Reference Guide</span>
                      </div>
                      <Button variant="ghost" size="sm">Download</Button>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Additional Materials</h3>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="flex items-center text-brand-blue hover:underline">
                        <ExternalLink className="h-4 w-4 mr-3" />
                        <span>Supplementary Reading</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-brand-blue hover:underline">
                        <ExternalLink className="h-4 w-4 mr-3" />
                        <span>Interactive Demonstrations</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center text-brand-blue hover:underline">
                        <ExternalLink className="h-4 w-4 mr-3" />
                        <span>Video Tutorials</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Recommended Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {resource.category === "Programming" && (
                    <>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">Visual Studio Code</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          A powerful code editor with excellent support for multiple programming languages.
                        </p>
                        <a 
                          href="https://code.visualstudio.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">GitHub</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Platform for version control and collaboration for software development.
                        </p>
                        <a 
                          href="https://github.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">Replit</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Online IDE for coding in various languages without installation.
                        </p>
                        <a 
                          href="https://replit.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </>
                  )}
                  
                  {resource.category === "Mathematics" && (
                    <>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">GeoGebra</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Interactive geometry, algebra, statistics, and calculus application.
                        </p>
                        <a 
                          href="https://www.geogebra.org/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">Desmos Graphing Calculator</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Powerful online graphing calculator for visualizing mathematical functions.
                        </p>
                        <a 
                          href="https://www.desmos.com/calculator" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">Wolfram Alpha</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Computational knowledge engine for math and other subjects.
                        </p>
                        <a 
                          href="https://www.wolframalpha.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </>
                  )}
                  
                  {resource.category === "Science" && (
                    <>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">PhET Interactive Simulations</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Free interactive math and science simulations.
                        </p>
                        <a 
                          href="https://phet.colorado.edu/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">Labster</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Virtual lab simulations for science education.
                        </p>
                        <a 
                          href="https://www.labster.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-6">
                        <h4 className="font-semibold mb-2">Periodic Table</h4>
                        <p className="text-sm text-foreground/70 mb-4">
                          Interactive periodic table with detailed element information.
                        </p>
                        <a 
                          href="https://ptable.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-brand-blue text-sm hover:underline flex items-center"
                        >
                          Get Started <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prerequisites" className="mt-0">
              <div className="prose dark:prose-invert max-w-none">
                <h2>Prerequisites</h2>
                <p>
                  Before starting this resource, it is recommended that you have the following knowledge:
                </p>
                
                {resource.category === "Programming" && (
                  <ul>
                    <li>Basic computer skills and familiarity with operating systems</li>
                    <li>Understanding of basic programming concepts (if beginner level)</li>
                    <li>Knowledge of fundamental data structures (if intermediate level)</li>
                    <li>Experience with related programming languages (if advanced level)</li>
                  </ul>
                )}
                
                {resource.category === "Mathematics" && (
                  <ul>
                    <li>Comfort with basic algebraic manipulation</li>
                    <li>Understanding of functions and their properties</li>
                    <li>Knowledge of trigonometric functions (for calculus)</li>
                    <li>Familiarity with coordinate geometry</li>
                  </ul>
                )}
                
                {resource.category === "Science" && (
                  <ul>
                    <li>Basic understanding of scientific notation</li>
                    <li>Familiarity with units of measurement</li>
                    <li>Knowledge of basic laboratory safety procedures</li>
                    <li>Understanding of the scientific method</li>
                  </ul>
                )}
                
                <h3>Recommended Background</h3>
                <p>
                  To get the most out of this resource, consider reviewing these concepts:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Foundational Topics</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-brand-blue mr-2">•</span>
                        Topic 1 with brief explanation
                      </li>
                      <li className="flex items-center">
                        <span className="text-brand-blue mr-2">•</span>
                        Topic 2 with brief explanation
                      </li>
                      <li className="flex items-center">
                        <span className="text-brand-blue mr-2">•</span>
                        Topic 3 with brief explanation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3">Helpful Skills</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="text-brand-blue mr-2">•</span>
                        Skill 1 with brief explanation
                      </li>
                      <li className="flex items-center">
                        <span className="text-brand-blue mr-2">•</span>
                        Skill 2 with brief explanation
                      </li>
                      <li className="flex items-center">
                        <span className="text-brand-blue mr-2">•</span>
                        Skill 3 with brief explanation
                      </li>
                    </ul>
                  </div>
                </div>
                
                <h3 className="mt-8">Preparatory Resources</h3>
                <p>
                  If you need to brush up on prerequisites, check out these resources:
                </p>
                
                <ul>
                  <li>
                    <a href="#" className="text-brand-blue hover:underline">
                      Introductory Resource 1 - Brief description
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-brand-blue hover:underline">
                      Introductory Resource 2 - Brief description
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-brand-blue hover:underline">
                      Introductory Resource 3 - Brief description
                    </a>
                  </li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-0">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-4">
                    <div className="text-4xl font-bold mr-2">4.8</div>
                    <div className="text-foreground/60">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star}
                            className={`w-5 h-5 ${star <= 5 ? "text-yellow-500" : "text-gray-300"}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm">Based on 127 reviews</div>
                    </div>
                  </div>
                  
                  <div className="ml-auto">
                    <Button>Write a Review</Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      name: "Alex Johnson", 
                      rating: 5, 
                      date: "September 15, 2023", 
                      comment: "This resource was incredibly helpful for understanding complex topics. The explanations were clear and the practice problems reinforced my learning. Highly recommend!" 
                    },
                    { 
                      name: "Maria Garcia", 
                      rating: 4, 
                      date: "August 22, 2023", 
                      comment: "Very good content and presentation. I found the examples particularly useful. Would have given 5 stars if there were more advanced problems included." 
                    },
                    { 
                      name: "James Wilson", 
                      rating: 5, 
                      date: "July 10, 2023", 
                      comment: "Excellent resource! The step-by-step explanations helped me grasp difficult concepts that I had been struggling with for months. The practice problems were challenging but doable." 
                    },
                  ].map((review, index) => (
                    <div key={index} className="border-b border-muted pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-foreground/60 text-sm">{review.date}</div>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star}
                            className={`w-4 h-4 ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-foreground/80">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related resources */}
          {relatedResources.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">Related Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedResources.map((relatedResource) => (
                  <Link key={relatedResource.id} to={`/resource/${relatedResource.id}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-muted/30 rounded-lg p-6 transition-all hover:shadow-md cursor-pointer h-full flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 rounded-full bg-muted/50">
                          {relatedResource.icon || getCategoryIcon(relatedResource.category)}
                        </div>
                        <div className="flex gap-2">
                          <span className="px-2 py-0.5 bg-brand-blue/10 text-brand-blue text-xs rounded-full">
                            {relatedResource.level}
                          </span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold mb-2">{relatedResource.title}</h3>
                      
                      <p className="text-sm text-foreground/70 mb-4 flex-grow">
                        {relatedResource.description}
                      </p>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="mt-auto w-full"
                      >
                        View Resource
                      </Button>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ResourceDetail;
