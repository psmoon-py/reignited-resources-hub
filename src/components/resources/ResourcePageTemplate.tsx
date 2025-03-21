
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";

interface Resource {
  id: string;
  title: string;
  type: string;
  level: string;
  source: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  tags: string[];
  featured?: boolean;
}

interface ResourcePageTemplateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  resources: Resource[];
  relatedCategories?: { name: string; path: string }[];
  headerBackgroundClass?: string;
}

const ResourcePageTemplate: React.FC<ResourcePageTemplateProps> = ({
  title,
  description,
  icon,
  resources,
  relatedCategories = [],
  headerBackgroundClass = "from-brand-blue/10"
}) => {
  const featuredResources = resources.filter(resource => resource.featured);
  const regularResources = resources.filter(resource => !resource.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className={`bg-gradient-to-b ${headerBackgroundClass} to-background pt-32 pb-16`}>
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link 
                to="/resources" 
                className="inline-flex items-center mb-8 text-sm text-foreground/60 hover:text-foreground transition-colors"
              >
                ← Back to All Resources
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-muted/30 mr-4">
                  {icon}
                </div>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold"
                >
                  {title}
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-foreground/70 mb-8"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </section>
        
        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-10">Featured Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredResources.map((resource) => (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Card glassEffect className="h-full hover:shadow-lg flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 rounded-full bg-muted/30">
                          {resource.icon}
                        </div>
                        <Badge variant="outline" className="bg-brand-blue/10 text-brand-blue">
                          {resource.type}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                      <p className="text-sm text-foreground/60 mb-3">Source: {resource.source}</p>
                      
                      <p className="text-foreground/70 mb-4 flex-grow">
                        {resource.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {resource.tags.slice(0, 3).map((tag, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {resource.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{resource.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                      
                      {/* FIXED: Removed 'as' property and created a wrapper component */}
                      <a 
                        href={resource.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto w-full"
                      >
                        <Button className="w-full flex items-center justify-center">
                          Access Resource <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* All Resources */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">All Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Card className="h-full hover:shadow-md flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-full bg-muted/30">
                        {resource.icon}
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {resource.type}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {resource.level}
                        </Badge>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-1">{resource.title}</h3>
                    <p className="text-xs text-foreground/60 mb-3">Source: {resource.source}</p>
                    
                    <p className="text-sm text-foreground/70 mb-4 flex-grow">
                      {resource.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {resource.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{resource.tags.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    {/* FIXED: Removed 'as' property and created a wrapper component */}
                    <a 
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full"
                    >
                      <Button 
                        variant="outline"
                        size="sm"
                        className="w-full flex items-center justify-center"
                      >
                        View Resource <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Related Categories */}
        {relatedCategories.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold mb-8">Related Categories</h2>
              <div className="flex flex-wrap gap-4">
                {relatedCategories.map((category, index) => (
                  <Link key={index} to={category.path}>
                    <Button variant="outline" size="lg">
                      {category.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcePageTemplate;
