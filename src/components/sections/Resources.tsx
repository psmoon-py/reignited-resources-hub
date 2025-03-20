
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/button";

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Explore Our <span className="text-gradient-primary">STEM Resources</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-foreground/70 text-lg"
          >
            Access our comprehensive collection of learning resources for mathematics, science, technology, 
            and engineering - expertly curated to support your academic journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resourceCategories.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={resource.link} className="block h-full">
                <div className="bg-gradient-to-br from-background to-muted/30 hover:shadow-lg transition-all duration-300 rounded-xl p-6 h-full flex flex-col">
                  <div className="p-3 rounded-full bg-muted/30 w-fit mb-4">
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-foreground/70 mb-4 flex-grow">{resource.description}</p>
                  <div className="flex items-center text-brand-blue font-medium mt-auto">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/stem-resources">
            <Button size="lg">
              View All Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

const resourceCategories = [
  {
    title: "Mathematics",
    description: "Explore resources for algebra, calculus, statistics, geometry, and more.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><path d="M17 22V2" /><path d="M12 12H2V17H12V12Z" /><path d="M19 17V12H7" /><path d="M22 7H17" /></svg>,
    link: "/stem-resources/math"
  },
  {
    title: "Science",
    description: "Learn physics, chemistry, biology, and more through engaging resources.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h6" /><path d="M14 2v6h6" /><path d="M16 22a2 2 0 0 1-2-2" /><path d="M20 22a2 2 0 1 0 0-4" /><path d="M20 14a2 2 0 1 0 0 4" /></svg>,
    link: "/stem-resources/science"
  },
  {
    title: "Technology",
    description: "Discover resources for programming, web development, data science, and AI.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-blue"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    link: "/stem-resources/technology"
  },
  {
    title: "Engineering",
    description: "Access resources for various engineering disciplines and practical applications.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
    link: "/stem-resources/engineering"
  }
];

export default Resources;
