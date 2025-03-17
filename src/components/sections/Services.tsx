
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/card";
import { BookOpen, File, GraduationCap, FileCheck } from "lucide-react";
import Button from "../ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <FileCheck className="h-16 w-16 text-brand-blue" />,
    title: "College Application Guidance",
    description: "Get personalized guidance on college applications, from selecting the right schools to crafting compelling essays.",
    features: [
      "University selection assistance",
      "Application timeline planning",
      "Essay review and feedback",
      "Interview preparation",
    ],
    delay: 0.1,
    link: "/college-application-guide"
  },
  {
    icon: <GraduationCap className="h-16 w-16 text-brand-orange" />,
    title: "SAT/ACT Test Preparation",
    description: "Comprehensive preparation resources for standardized tests, including practice tests and study materials.",
    features: [
      "Practice tests with solutions",
      "Subject-specific study guides",
      "Test-taking strategies",
      "Score improvement tracking",
    ],
    delay: 0.2,
    link: "/test-preparation"
  },
  {
    icon: <BookOpen className="h-16 w-16 text-brand-blue" />,
    title: "English Proficiency Tests",
    description: "Prepare for TOEFL, IELTS, and other English proficiency tests with our structured resources.",
    features: [
      "Speaking and writing practice",
      "Vocabulary building exercises",
      "Grammar and comprehension materials",
      "Mock tests with evaluation",
    ],
    delay: 0.3,
    link: "#"
  },
  {
    icon: <File className="h-16 w-16 text-brand-orange" />,
    title: "Scholarship Applications",
    description: "Learn how to find and apply for scholarships that match your profile and aspirations.",
    features: [
      "Scholarship database access",
      "Application requirement guides",
      "Essay writing workshops",
      "Financial aid consultation",
    ],
    delay: 0.4,
    link: "#"
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            College Preparation <span className="text-gradient-primary">Services</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We provide comprehensive guidance for college applications, test preparation, and scholarship opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <Card 
                glassEffect 
                className="h-full hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-muted/30 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-foreground/70 mb-6">{service.description}</p>
                  <ul className="mb-6 w-full">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center py-2 border-b border-muted/20 last:border-0">
                        <div className="w-2 h-2 rounded-full bg-brand-blue mr-3"></div>
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link} className="w-full mt-auto">
                    <Button 
                      variant={index % 2 === 0 ? "primary" : "secondary"}
                      className="w-full"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
