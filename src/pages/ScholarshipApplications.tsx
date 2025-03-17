
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Search, Filter, BadgeDollarSign } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { scholarshipSections, getResourceIcon } from "@/data/scholarshipContent";
import { useAuth } from "@/contexts/AuthContext";
import { useMediaQuery } from "@/hooks/use-mobile";

const ScholarshipApplications: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const [activeSection, setActiveSection] = useState(sectionId || "database");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();
  const isMobile = useMediaQuery("(max-width: 768px)");
  
  useEffect(() => {
    if (sectionId) {
      setActiveSection(sectionId);
    }
  }, [sectionId]);

  const currentSection = scholarshipSections.find(section => section.id === activeSection);
  
  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    navigate(`/scholarship-applications/${section}`);
  };

  const filteredResources = currentSection?.resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleResourceClick = (link: string) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const handleTrackingPrompt = () => {
    if (!isAuthenticated) {
      toast({
        title: "Sign in required",
        description: "Please sign in to track your scholarship applications and set reminders for deadlines.",
        variant: "default"
      });
      setTimeout(() => navigate("/auth"), 2000);
    } else {
      toast({
        title: "Coming Soon",
        description: "The scholarship tracking feature is currently under development.",
        variant: "default"
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Scholarship <span className="text-gradient-primary">Applications</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-foreground/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Find and apply for scholarships that match your profile. From major-specific awards to need-based grants, 
                we'll help you navigate the scholarship landscape and maximize your opportunities.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/50 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search resources..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-muted bg-background focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button 
                  onClick={handleTrackingPrompt} 
                  className="whitespace-nowrap"
                >
                  <BadgeDollarSign className="mr-2 h-5 w-5" /> 
                  Track My Applications
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Section Navigation */}
              <div className="md:w-1/4">
                <Card className="sticky top-24 p-4">
                  <h3 className="text-xl font-semibold mb-4">Sections</h3>
                  <nav className="space-y-2">
                    {scholarshipSections.map((section) => (
                      <div
                        key={section.id}
                        className={`flex items-center p-2 rounded-lg cursor-pointer transition-colors ${
                          activeSection === section.id
                            ? "bg-brand-blue/10 text-brand-blue"
                            : "hover:bg-muted/50"
                        }`}
                        onClick={() => handleSectionChange(section.id)}
                      >
                        <div className="mr-3">{section.icon}</div>
                        <span className="font-medium">{section.title}</span>
                      </div>
                    ))}
                  </nav>
                </Card>
              </div>

              {/* Content Area */}
              <div className="md:w-3/4">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {currentSection && (
                    <>
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold mb-3">{currentSection.title}</h2>
                        <p className="text-foreground/70">{currentSection.description}</p>
                      </div>

                      {/* Resources Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredResources?.map((resource, index) => (
                          <Card
                            key={index}
                            className={`hover:shadow-md cursor-pointer transition-all ${
                              resource.premium ? "border border-brand-orange/30" : ""
                            }`}
                            onClick={() => handleResourceClick(resource.link)}
                          >
                            <div className="flex items-start">
                              <div className="p-2 rounded-full bg-muted/50 mr-4">
                                {getResourceIcon(resource.type)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h3 className="font-semibold">{resource.title}</h3>
                                  {resource.premium && (
                                    <span className="text-xs px-2 py-1 bg-brand-orange/10 text-brand-orange rounded-full">
                                      Premium
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-foreground/70 mb-2">{resource.description}</p>
                                <div className="flex items-center text-xs text-foreground/50">
                                  <span className="capitalize">{resource.type}</span>
                                  {resource.rating && (
                                    <>
                                      <span className="mx-2">•</span>
                                      <span>{resource.rating}/5</span>
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>

                      {/* Navigation Buttons */}
                      <div className="flex justify-between mt-8">
                        {scholarshipSections.findIndex(s => s.id === activeSection) > 0 && (
                          <Button
                            variant="outline"
                            onClick={() => {
                              const currentIndex = scholarshipSections.findIndex(s => s.id === activeSection);
                              if (currentIndex > 0) {
                                handleSectionChange(scholarshipSections[currentIndex - 1].id);
                              }
                            }}
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Previous Section
                          </Button>
                        )}
                        
                        {scholarshipSections.findIndex(s => s.id === activeSection) < scholarshipSections.length - 1 && (
                          <Button
                            variant="outline"
                            className="ml-auto"
                            onClick={() => {
                              const currentIndex = scholarshipSections.findIndex(s => s.id === activeSection);
                              if (currentIndex < scholarshipSections.length - 1) {
                                handleSectionChange(scholarshipSections[currentIndex + 1].id);
                              }
                            }}
                          >
                            Next Section <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Scholarships Table */}
        <section className="py-12 bg-muted/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Featured Scholarships</h2>
              
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Scholarship Name</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Eligibility</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Gates Scholarship</TableCell>
                        <TableCell>Full Cost of Attendance</TableCell>
                        <TableCell>September 15, 2023</TableCell>
                        <TableCell>High-achieving, low-income minority students</TableCell>
                        <TableCell>
                          <Button size="sm" onClick={() => window.open("https://www.thegatesscholarship.org/", "_blank", "noopener,noreferrer")}>Apply</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Coca-Cola Scholars Program</TableCell>
                        <TableCell>$20,000</TableCell>
                        <TableCell>October 31, 2023</TableCell>
                        <TableCell>High school seniors with leadership and service experience</TableCell>
                        <TableCell>
                          <Button size="sm" onClick={() => window.open("https://www.coca-colascholarsfoundation.org/apply/", "_blank", "noopener,noreferrer")}>Apply</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Jack Kent Cooke Foundation</TableCell>
                        <TableCell>Up to $55,000 per year</TableCell>
                        <TableCell>November 18, 2023</TableCell>
                        <TableCell>High-achieving students with financial need</TableCell>
                        <TableCell>
                          <Button size="sm" onClick={() => window.open("https://www.jkcf.org/our-scholarships/", "_blank", "noopener,noreferrer")}>Apply</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Hispanic Scholarship Fund</TableCell>
                        <TableCell>$500 to $5,000</TableCell>
                        <TableCell>February 15, 2024</TableCell>
                        <TableCell>Hispanic heritage students with 3.0+ GPA</TableCell>
                        <TableCell>
                          <Button size="sm" onClick={() => window.open("https://www.hsf.net/", "_blank", "noopener,noreferrer")}>Apply</Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Questbridge National College Match</TableCell>
                        <TableCell>Full four-year scholarship</TableCell>
                        <TableCell>September 28, 2023</TableCell>
                        <TableCell>High-achieving, low-income students</TableCell>
                        <TableCell>
                          <Button size="sm" onClick={() => window.open("https://www.questbridge.org/", "_blank", "noopener,noreferrer")}>Apply</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </Card>
              
              <div className="text-center mt-8">
                <Button onClick={() => handleSectionChange("database")}>
                  Explore All Scholarships <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ScholarshipApplications;
