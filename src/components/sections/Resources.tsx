import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card";
import { BookOpen, Code, TestTube, Calculator, BrainCircuit, Telescope } from "lucide-react";
import Button from "../ui/button";

const resourceCategories = [
  {
    icon: <Code className="h-10 w-10 text-brand-blue" />,
    title: "Programming",
    description: "Access tutorials, exercises, and projects in Python, Java, C++, and more.",
    delay: 0.1,
  },
  {
    icon: <TestTube className="h-10 w-10 text-brand-orange" />,
    title: "Science",
    description: "Explore physics, chemistry, and biology resources with interactive experiments.",
    delay: 0.2,
  },
  {
    icon: <Calculator className="h-10 w-10 text-brand-blue" />,
    title: "Mathematics",
    description: "From algebra to calculus with practice problems and step-by-step solutions.",
    delay: 0.3,
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-brand-orange" />,
    title: "AI & Machine Learning",
    description: "Learn data science, neural networks, and practical ML applications.",
    delay: 0.4,
  },
  {
    icon: <Telescope className="h-10 w-10 text-brand-blue" />,
    title: "Astronomy",
    description: "Discover the cosmos with star charts, planet guides, and space science resources.",
    delay: 0.5,
  },
  {
    icon: <BookOpen className="h-10 w-10 text-brand-orange" />,
    title: "Study Materials",
    description: "Textbooks, lecture notes, and study guides for various STEM subjects.",
    delay: 0.6,
  },
];

const Resources: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Explore Our <span className="text-gradient-primary">STEM Resources</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Access a comprehensive library of high-quality resources designed to help you excel in your STEM journey. All completely free.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: category.delay }}
            >
              <Card 
                glassEffect 
                className="h-full hover:scale-105 flex flex-col"
              >
                <div className="p-4 rounded-full bg-muted/30 w-fit mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-foreground/70 mb-6 flex-grow">
                  {category.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-auto w-full"
                >
                  Browse Resources
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resources;
