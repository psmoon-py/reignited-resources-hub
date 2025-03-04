
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";

const opportunities = [
  {
    icon: <Trophy className="h-10 w-10 text-brand-blue" />,
    category: "Competitions",
    title: "International Science Olympiad",
    date: "Registration Open: May 15 - July 30, 2023",
    description: "Compete with students worldwide in various scientific disciplines and win scholarships and recognition.",
    delay: 0.1,
  },
  {
    icon: <Briefcase className="h-10 w-10 text-brand-orange" />,
    category: "Internships",
    title: "NASA Summer Research Program",
    date: "Application Deadline: March 31, 2023",
    description: "Gain hands-on experience working with NASA scientists on cutting-edge space research projects.",
    delay: 0.2,
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-brand-blue" />,
    category: "Scholarships",
    title: "STEM Excellence Scholarship",
    date: "Application Deadline: December 15, 2023",
    description: "Full-ride scholarships for underprivileged students pursuing STEM degrees at top universities.",
    delay: 0.3,
  },
  {
    icon: <Award className="h-10 w-10 text-brand-orange" />,
    category: "Hackathons",
    title: "Global Solutions Hackathon",
    date: "Event Date: August 5-7, 2023",
    description: "48-hour coding challenge to develop innovative solutions for global environmental problems.",
    delay: 0.4,
  },
];

const Opportunities: React.FC = () => {
  return (
    <section id="opportunities" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gradient-primary">Opportunities</span> For Growth
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover hackathons, competitions, internships, and scholarships that can take your career to the next level.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {opportunities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: item.delay }}
            >
              <Card glassEffect className="h-full">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-muted/30">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="inline-block px-3 py-1 rounded-full bg-muted/30 text-xs font-medium mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-brand-blue mb-4">{item.date}</p>
                    <p className="text-foreground/70 mb-6">{item.description}</p>
                    <Button variant={index % 2 === 0 ? "primary" : "secondary"} className="w-full">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline">
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
