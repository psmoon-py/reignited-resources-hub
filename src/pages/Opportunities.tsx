
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Award,
  Briefcase,
  Calendar,
  ChevronDown,
  Clock,
  Code,
  Filter,
  GraduationCap,
  MapPin,
  Search,
  Trophy,
} from "lucide-react";
import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import Card from "@/components/ui/card"; // Fixed import for Card component
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { OpportunityType, StatusType, EducationLevel, Opportunity, mockOpportunities } from "@/data/opportunities";

const Opportunities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<OpportunityType[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<StatusType | "">("");
  const [selectedEducation, setSelectedEducation] = useState<EducationLevel | "">("");
  const [sortOption, setSortOption] = useState<string>("deadline");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const itemsPerPage = 9;

  // Filter opportunities
  const filteredOpportunities = mockOpportunities.filter((opportunity) => {
    // Search term filter
    const matchesSearchTerm = 
      searchTerm === "" || 
      opportunity.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      opportunity.organization.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Type filter
    const matchesType = 
      selectedTypes.length === 0 || 
      selectedTypes.includes(opportunity.type);
    
    // Status filter
    const matchesStatus = 
      selectedStatus === "" || 
      opportunity.status === selectedStatus;
    
    // Education level filter
    const matchesEducation = 
      selectedEducation === "" || 
      opportunity.eligibleEducationLevels.includes(selectedEducation as EducationLevel);
    
    return matchesSearchTerm && matchesType && matchesStatus && matchesEducation;
  });

  // Sort opportunities
  const sortedOpportunities = [...filteredOpportunities].sort((a, b) => {
    let comparison = 0;
    
    switch (sortOption) {
      case "deadline":
        comparison = new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        break;
      case "name":
        comparison = a.title.localeCompare(b.title);
        break;
      case "registrationDate":
        comparison = new Date(a.registrationOpens).getTime() - new Date(b.registrationOpens).getTime();
        break;
      default:
        comparison = new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    
    return sortDirection === "asc" ? comparison : -comparison;
  });

  // Pagination
  const totalPages = Math.ceil(sortedOpportunities.length / itemsPerPage);
  const currentOpportunities = sortedOpportunities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedTypes, selectedStatus, selectedEducation, sortOption, sortDirection]);

  const toggleType = (type: OpportunityType) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const getTypeIcon = (type: OpportunityType) => {
    switch (type) {
      case "competition": return <Trophy className="h-5 w-5" />;
      case "hackathon": return <Code className="h-5 w-5" />;
      case "internship": return <Briefcase className="h-5 w-5" />;
      case "scholarship": return <GraduationCap className="h-5 w-5" />;
      default: return <Award className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: StatusType) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
      case "expired": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
      case "upcoming": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-brand-blue/10 to-transparent pt-32 pb-16">
          <div className="container mx-auto px-6">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-gradient-primary">STEM Opportunities</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-foreground/70 text-center max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Discover competitions, hackathons, internships, and scholarships to advance your STEM career.
              Filter by your education level and opportunity type to find the perfect match.
            </motion.p>

            <motion.div 
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50" />
                <Input
                  type="search"
                  placeholder="Search opportunities by title or organization..."
                  className="pl-10 pr-4 py-6 text-lg rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap mt-4 gap-2 justify-center">
                <Badge 
                  variant="outline" 
                  className={`cursor-pointer ${selectedTypes.includes("competition") ? "bg-brand-blue/20" : ""}`}
                  onClick={() => toggleType("competition")}
                >
                  <Trophy className="h-3 w-3 mr-1" /> Competitions
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`cursor-pointer ${selectedTypes.includes("hackathon") ? "bg-brand-orange/20" : ""}`}
                  onClick={() => toggleType("hackathon")}
                >
                  <Code className="h-3 w-3 mr-1" /> Hackathons
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`cursor-pointer ${selectedTypes.includes("internship") ? "bg-brand-blue/20" : ""}`}
                  onClick={() => toggleType("internship")}
                >
                  <Briefcase className="h-3 w-3 mr-1" /> Internships
                </Badge>
                <Badge 
                  variant="outline" 
                  className={`cursor-pointer ${selectedTypes.includes("scholarship") ? "bg-brand-orange/20" : ""}`}
                  onClick={() => toggleType("scholarship")}
                >
                  <GraduationCap className="h-3 w-3 mr-1" /> Scholarships
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Filters - Desktop */}
              <div className="hidden lg:block">
                <Card className="p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4">Filters</h3>
                  
                  <div className="space-y-6">
                    {/* Opportunity Type */}
                    <div>
                      <h4 className="font-medium mb-2">Opportunity Type</h4>
                      <div className="space-y-2">
                        {["competition", "hackathon", "internship", "scholarship"].map((type) => (
                          <div key={type} className="flex items-center">
                            <Checkbox 
                              id={`type-${type}`} 
                              checked={selectedTypes.includes(type as OpportunityType)}
                              onCheckedChange={() => toggleType(type as OpportunityType)}
                            />
                            <Label htmlFor={`type-${type}`} className="ml-2 cursor-pointer">
                              {type.charAt(0).toUpperCase() + type.slice(1)}s
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <h4 className="font-medium mb-2">Status</h4>
                      <Select 
                        value={selectedStatus} 
                        onValueChange={(value) => setSelectedStatus(value as StatusType)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All statuses" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All statuses</SelectItem>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="upcoming">Upcoming</SelectItem>
                          <SelectItem value="expired">Expired</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Education Level */}
                    <div>
                      <h4 className="font-medium mb-2">Education Level</h4>
                      <Select 
                        value={selectedEducation} 
                        onValueChange={(value) => setSelectedEducation(value as EducationLevel)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="All levels" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">All levels</SelectItem>
                          <SelectItem value="highSchool">High School</SelectItem>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="graduate">Graduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Sort */}
                    <div>
                      <h4 className="font-medium mb-2">Sort By</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Select value={sortOption} onValueChange={setSortOption}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sort by" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="deadline">Deadline</SelectItem>
                            <SelectItem value="name">Name</SelectItem>
                            <SelectItem value="registrationDate">Registration Date</SelectItem>
                          </SelectContent>
                        </Select>
                        
                        <Button 
                          variant="outline" 
                          onClick={() => setSortDirection(prev => prev === "asc" ? "desc" : "asc")}
                        >
                          {sortDirection === "asc" ? "↑" : "↓"}
                        </Button>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedTypes([]);
                        setSelectedStatus("");
                        setSelectedEducation("");
                        setSortOption("deadline");
                        setSortDirection("asc");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Mobile Filters */}
              <div className="lg:hidden mb-6">
                <div className="flex justify-between items-center mb-4">
                  <Button 
                    variant="outline" 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="flex items-center"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Filters {selectedTypes.length > 0 || selectedStatus || selectedEducation ? `(${selectedTypes.length + (selectedStatus ? 1 : 0) + (selectedEducation ? 1 : 0)})` : ""}
                  </Button>
                  
                  <div className="flex space-x-2">
                    <Select value={sortOption} onValueChange={setSortOption}>
                      <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Sort by" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="deadline">Deadline</SelectItem>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="registrationDate">Registration</SelectItem>
                      </SelectContent>
                    </Select>
                    
                    <Button 
                      variant="outline"
                      onClick={() => setSortDirection(prev => prev === "asc" ? "desc" : "asc")}
                    >
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </Button>
                  </div>
                </div>

                {isFilterOpen && (
                  <Card className="p-4 mb-6">
                    <Tabs defaultValue="type">
                      <TabsList className="w-full mb-4">
                        <TabsTrigger value="type" className="flex-1">Type</TabsTrigger>
                        <TabsTrigger value="status" className="flex-1">Status</TabsTrigger>
                        <TabsTrigger value="level" className="flex-1">Education</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="type" className="space-y-2">
                        {["competition", "hackathon", "internship", "scholarship"].map((type) => (
                          <div key={type} className="flex items-center">
                            <Checkbox 
                              id={`mobile-type-${type}`} 
                              checked={selectedTypes.includes(type as OpportunityType)}
                              onCheckedChange={() => toggleType(type as OpportunityType)}
                            />
                            <Label htmlFor={`mobile-type-${type}`} className="ml-2 cursor-pointer">
                              {type.charAt(0).toUpperCase() + type.slice(1)}s
                            </Label>
                          </div>
                        ))}
                      </TabsContent>
                      
                      <TabsContent value="status">
                        <Select 
                          value={selectedStatus} 
                          onValueChange={(value) => setSelectedStatus(value as StatusType)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="All statuses" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All statuses</SelectItem>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="upcoming">Upcoming</SelectItem>
                            <SelectItem value="expired">Expired</SelectItem>
                          </SelectContent>
                        </Select>
                      </TabsContent>
                      
                      <TabsContent value="level">
                        <Select 
                          value={selectedEducation} 
                          onValueChange={(value) => setSelectedEducation(value as EducationLevel)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="All levels" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="">All levels</SelectItem>
                            <SelectItem value="highSchool">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                          </SelectContent>
                        </Select>
                      </TabsContent>
                    </Tabs>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mt-4"
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedTypes([]);
                        setSelectedStatus("");
                        setSelectedEducation("");
                        setSortOption("deadline");
                        setSortDirection("asc");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </Card>
                )}
              </div>

              {/* Results */}
              <div className="lg:col-span-3">
                {/* Results Count */}
                <div className="mb-6">
                  <p className="text-foreground/70">
                    Showing {currentOpportunities.length} of {filteredOpportunities.length} opportunities
                  </p>
                </div>

                {currentOpportunities.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentOpportunities.map((opportunity) => (
                      <Card key={opportunity.id} className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                        <div className={`p-4 ${opportunity.type === "competition" || opportunity.type === "internship" ? "bg-brand-blue/10" : "bg-brand-orange/10"} flex items-center`}>
                          <div className="p-2 rounded-full bg-white mr-3">
                            {getTypeIcon(opportunity.type)}
                          </div>
                          <span className="text-sm font-medium capitalize">{opportunity.type}</span>
                          <span className={`ml-auto text-xs px-2 py-1 rounded-full ${getStatusColor(opportunity.status)}`}>
                            {opportunity.status === "active" ? "Active" : 
                             opportunity.status === "expired" ? "Expired" : "Upcoming"}
                          </span>
                        </div>
                        
                        <div className="p-6 flex-grow flex flex-col">
                          <h3 className="text-lg font-semibold mb-2">{opportunity.title}</h3>
                          <p className="text-sm text-foreground/60 mb-2">{opportunity.organization}</p>
                          <p className="text-sm mb-6 flex-grow">{opportunity.description}</p>
                          
                          <div className="space-y-2 text-sm text-foreground/70 mb-4">
                            <div className="flex">
                              <Calendar className="h-4 w-4 mr-2" />
                              <span>
                                <strong>Deadline:</strong> {new Date(opportunity.deadline).toLocaleDateString()}
                              </span>
                            </div>
                            
                            <div className="flex">
                              <Clock className="h-4 w-4 mr-2" />
                              <span>
                                <strong>Registration:</strong> {new Date(opportunity.registrationOpens).toLocaleDateString()}
                              </span>
                            </div>
                            
                            <div className="flex">
                              <MapPin className="h-4 w-4 mr-2" />
                              <span>{opportunity.location}</span>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-4">
                            {opportunity.eligibleEducationLevels.map((level) => (
                              <Badge key={level} variant="outline" className="text-xs">
                                {level === "highSchool" ? "High School" : 
                                 level === "undergraduate" ? "Undergraduate" : 
                                 level === "graduate" ? "Graduate" : "PhD"}
                              </Badge>
                            ))}
                          </div>
                          
                          <Button className="w-full">Apply Now</Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
                    <p className="text-foreground/70 mb-6">Try adjusting your filters or search term</p>
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedTypes([]);
                        setSelectedStatus("");
                        setSelectedEducation("");
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-10">
                    <Pagination
                      totalItems={filteredOpportunities.length}
                      itemsPerPage={itemsPerPage}
                      currentPage={currentPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Opportunities;
