import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle, Lock, FileText, Calculator, List, GraduationCap, YoutubeIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { testPrepData } from "@/data/testPrepContent";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import Card from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Globe from "@/components/test-prep/Globe";

const TestPreparation: React.FC = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const [activeSection, setActiveSection] = useState(
    sectionId || testPrepData[0].id
  );
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth();

  useEffect(() => {
    if (sectionId) {
      setActiveSection(sectionId);
    }
    window.scrollTo(0, 0);
  }, [sectionId]);

  const currentSection = testPrepData.find(section => section.id === activeSection) || testPrepData[0];

  const currentIndex = testPrepData.findIndex(section => section.id === activeSection);
  const prevSection = currentIndex > 0 ? testPrepData[currentIndex - 1] : null;
  const nextSection = currentIndex < testPrepData.length - 1 ? testPrepData[currentIndex + 1] : null;

  const navigateToSection = (sectionId: string) => {
    navigate(`/test-preparation/${sectionId}`);
  };

  const handleAuthRequired = () => {
    if (currentSection.requiresAuth && !isAuthenticated) {
      toast({
        title: "Authentication Required",
        description: "You need to sign in to access this feature.",
        variant: "destructive",
      });
      navigate("/auth", { state: { returnUrl: `/test-preparation/${activeSection}` } });
      return true;
    }
    return false;
  };

  useEffect(() => {
    handleAuthRequired();
  }, [activeSection, isAuthenticated]);

  const getResourceTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <div className="p-1 rounded-full bg-red-100 text-red-600"><YoutubeIcon className="h-4 w-4" /></div>;
      case 'article':
        return <div className="p-1 rounded-full bg-blue-100 text-blue-600"><FileText className="h-4 w-4" /></div>;
      case 'tool':
        return <div className="p-1 rounded-full bg-green-100 text-green-600"><Calculator className="h-4 w-4" /></div>;
      case 'website':
        return <div className="p-1 rounded-full bg-purple-100 text-purple-600"><Globe className="h-4 w-4" /></div>;
      case 'playlist':
        return <div className="p-1 rounded-full bg-orange-100 text-orange-600"><List className="h-4 w-4" /></div>;
      case 'course':
        return <div className="p-1 rounded-full bg-indigo-100 text-indigo-600"><GraduationCap className="h-4 w-4" /></div>;
      default:
        return <div className="p-1 rounded-full bg-gray-100 text-gray-600"><FileText className="h-4 w-4" /></div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">SAT/ACT Test Preparation</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Comprehensive resources to help you achieve your target score on standardized tests.
            </p>

            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Your Progress</span>
                <span className="text-sm font-medium">
                  {isAuthenticated ? `${Math.round(60)}%` : "Sign in to track progress"}
                </span>
              </div>
              <Progress value={isAuthenticated ? 60 : 0} className="h-2" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Content Sections</h3>
                <ul className="space-y-2">
                  {testPrepData.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => navigateToSection(section.id)}
                        className={`w-full text-left p-3 rounded-lg flex items-center justify-between ${
                          activeSection === section.id
                            ? "bg-brand-blue text-white"
                            : "hover:bg-muted"
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-2">{section.icon}</span>
                          <span>{section.title}</span>
                        </div>
                        {section.requiresAuth && !isAuthenticated && (
                          <Lock className="h-4 w-4" />
                        )}
                        {activeSection === section.id && (
                          <CheckCircle className="h-4 w-4" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="p-6">
                {currentSection.requiresAuth && !isAuthenticated ? (
                  <div className="text-center py-12">
                    <Lock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-2xl font-bold mb-4">Authentication Required</h3>
                    <p className="text-muted-foreground mb-6">
                      You need to sign in to access this feature. This helps us personalize your experience and track your progress.
                    </p>
                    <Button
                      onClick={() => navigate("/auth", { state: { returnUrl: `/test-preparation/${activeSection}` } })}
                    >
                      Sign in or Register
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold flex items-center gap-3 mb-4">
                        <span className="p-2 rounded-full bg-muted">
                          {currentSection.icon}
                        </span>
                        {currentSection.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {currentSection.shortDescription}
                      </p>
                    </div>

                    <div className="mb-8 bg-muted/30 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-3">Introduction</h3>
                      <p>{currentSection.content.introduction}</p>
                    </div>

                    <Tabs defaultValue={currentSection.content.sections[0].title.toLowerCase().replace(/\s+/g, '-')}>
                      <TabsList className="mb-6 flex flex-wrap">
                        {currentSection.content.sections.map((section) => (
                          <TabsTrigger
                            key={section.title}
                            value={section.title.toLowerCase().replace(/\s+/g, '-')}
                          >
                            {section.title}
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {currentSection.content.sections.map((section) => (
                        <TabsContent
                          key={section.title}
                          value={section.title.toLowerCase().replace(/\s+/g, '-')}
                        >
                          <div className="mb-6">
                            <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                            <p className="mb-6">{section.content}</p>

                            {section.tips && section.tips.length > 0 && (
                              <div className="mb-6 bg-muted/20 p-6 rounded-lg">
                                <h4 className="text-lg font-semibold mb-3">Key Tips</h4>
                                <ul className="space-y-2">
                                  {section.tips.map((tip, index) => (
                                    <li key={index} className="flex items-start">
                                      <CheckCircle className="h-5 w-5 text-brand-blue mr-2 shrink-0 mt-0.5" />
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {section.resources && section.resources.length > 0 && (
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold mb-3">Recommended Resources</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {section.resources.map((resource, index) => (
                                    <a
                                      key={index}
                                      href={resource.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex items-start p-4 border border-muted rounded-lg hover:bg-muted/20 transition-colors"
                                    >
                                      <div className="mr-3 mt-1">
                                        {getResourceTypeIcon(resource.type)}
                                      </div>
                                      <div>
                                        <h5 className="font-medium mb-1">{resource.title}</h5>
                                        <p className="text-sm text-muted-foreground">
                                          {resource.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>

                    <div className="mt-12 flex justify-between">
                      {prevSection ? (
                        <Button
                          variant="outline"
                          onClick={() => navigateToSection(prevSection.id)}
                          className="flex items-center"
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Previous: {prevSection.title}
                        </Button>
                      ) : (
                        <div></div>
                      )}

                      {nextSection && (
                        <Button
                          onClick={() => navigateToSection(nextSection.id)}
                          className="flex items-center"
                        >
                          Next: {nextSection.title}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestPreparation;
