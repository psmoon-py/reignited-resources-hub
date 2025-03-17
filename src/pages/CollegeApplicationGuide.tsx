import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { guideData } from "../data/collegeApplicationGuide";

const CollegeApplicationGuide: React.FC = () => {
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<GuideSection | null>(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (section) {
      const foundSection = guideData.find(s => s.id === section);
      if (foundSection) {
        setActiveSection(foundSection);
      } else {
        // If invalid section ID, redirect to main guide page
        navigate("/college-application-guide", { replace: true });
      }
    } else {
      // If no section specified, default to the guide overview
      setActiveSection(null);
    }
  }, [section, navigate]);

  const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
    const getIcon = () => {
      switch (resource.type) {
        case "video":
          return (
            <div className="rounded-full bg-brand-orange/20 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          );
        case "article":
          return (
            <div className="rounded-full bg-brand-blue/20 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            </div>
          );
        case "tool":
          return (
            <div className="rounded-full bg-purple-500/20 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
          );
        case "website":
        default:
          return (
            <div className="rounded-full bg-green-500/20 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          );
      }
    };

    return (
      <div className="bg-muted/30 rounded-lg p-4 flex gap-3">
        {getIcon()}
        <div className="flex-1">
          <h4 className="font-medium text-sm">{resource.title}</h4>
          <p className="text-xs text-foreground/70 mb-2">{resource.description}</p>
          <a 
            href={resource.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-xs text-brand-blue hover:underline flex items-center"
          >
            View Resource <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        </div>
      </div>
    );
  };

  const renderGuideOverview = () => (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            College Application <span className="text-gradient-primary">Guide</span>
          </motion.h1>
          <motion.p
            className="text-lg text-foreground/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive guidance for every step of your college application journey
          </motion.p>
        </div>

        <motion.div
          className="grid gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {guideData.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <Card className="p-6 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-muted/50 text-brand-blue">
                    {section.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                    <p className="text-foreground/70 mb-4">{section.shortDescription}</p>
                    
                    <Link to={`/college-application-guide/${section.id}`}>
                      <Button className="flex items-center gap-2">
                        Explore Guide <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  const renderSection = () => {
    if (!activeSection) return null;

    return (
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center text-sm text-foreground/60 mb-8">
            <Link to="/college-application-guide" className="flex items-center hover:text-brand-blue">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Guide
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-muted/50 text-brand-blue">
                {activeSection.icon}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{activeSection.title}</h1>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg">{activeSection.content.introduction}</p>
            </div>

            <Tabs 
              defaultValue="0" 
              className="mt-8"
              value={activeTabIndex.toString()}
              onValueChange={(value) => setActiveTabIndex(parseInt(value))}
            >
              <TabsList className="mb-6 w-full flex overflow-x-auto pb-px">
                {activeSection.content.sections.map((section, index) => (
                  <TabsTrigger
                    key={index}
                    value={index.toString()}
                    className="text-sm px-4 py-2 whitespace-nowrap"
                  >
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>

              {activeSection.content.sections.map((section, index) => (
                <TabsContent key={index} value={index.toString()} className="pt-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                    <div className="prose dark:prose-invert max-w-none mb-6">
                      <p>{section.content}</p>
                    </div>

                    {section.tips && (
                      <div className="mt-6 mb-8">
                        <h3 className="text-lg font-medium mb-4">Tips & Recommendations</h3>
                        <div className="bg-muted/30 rounded-lg p-6">
                          <ul className="space-y-3">
                            {section.tips.map((tip, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-brand-blue/20 text-brand-blue flex items-center justify-center mr-3 mt-0.5">
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </span>
                                <span className="text-sm">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {section.resources && section.resources.length > 0 && (
                      <div className="mt-6">
                        <h3 className="text-lg font-medium mb-4">Helpful Resources</h3>
                        <div className="grid gap-4">
                          {section.resources.map((resource, idx) => (
                            <ResourceCard key={idx} resource={resource} />
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between mt-8">
                      <Button 
                        variant="outline" 
                        onClick={() => setActiveTabIndex(Math.max(0, activeTabIndex - 1))}
                        disabled={activeTabIndex === 0}
                      >
                        Previous Section
                      </Button>
                      <Button 
                        onClick={() => setActiveTabIndex(Math.min(activeSection.content.sections.length - 1, activeTabIndex + 1))}
                        disabled={activeTabIndex === activeSection.content.sections.length - 1}
                      >
                        Next Section
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          <div className="mt-16 bg-muted/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Explore Other Guide Sections</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guideData
                .filter(item => item.id !== activeSection.id)
                .map((item) => (
                  <Link key={item.id} to={`/college-application-guide/${item.id}`} className="group">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                      <div className="p-2 rounded-full bg-muted/50 text-brand-blue">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium group-hover:text-brand-blue transition-colors">{item.title}</h4>
                        <p className="text-sm text-foreground/70 line-clamp-1">{item.shortDescription}</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32">
        {section && activeSection ? renderSection() : renderGuideOverview()}
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CollegeApplicationGuide;
