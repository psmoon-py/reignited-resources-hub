
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "../ui/card";
import Button from "../ui/button";
import { Award, Briefcase, GraduationCap, Trophy } from "lucide-react";
import { mockOpportunities } from "@/data/opportunities";

// Select top 4 opportunities that are active or upcoming
const featuredOpportunities = mockOpportunities
  .filter(opp => opp.status === "active" || opp.status === "upcoming")
  .slice(0, 4)
  .map((opp, index) => {
    let icon;
    switch (opp.type) {
      case "competition":
        icon = <Trophy className="h-10 w-10 text-brand-blue" />;
        break;
      case "internship":
        icon = <Briefcase className="h-10 w-10 text-brand-orange" />;
        break;
      case "scholarship":
        icon = <GraduationCap className="h-10 w-10 text-brand-blue" />;
        break;
      case "hackathon":
        icon = <Award className="h-10 w-10 text-brand-orange" />;
        break;
    }
    
    return {
      icon,
      category: opp.type.charAt(0).toUpperCase() + opp.type.slice(1) + "s",
      title: opp.title,
      date: opp.status === "active" ? 
        `Application Deadline: ${new Date(opp.deadline).toLocaleDateString()}` : 
        `Registration Opens: ${new Date(opp.registrationOpens).toLocaleDateString()}`,
      description: opp.description,
      link: opp.link,
      delay: 0.1 * (index + 1),
    };
  });

const Opportunities: React.FC = () => {
  const navigate = useNavigate();
  
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
          {featuredOpportunities.map((item, index) => (
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
                    <Button 
                      variant={index % 2 === 0 ? "primary" : "secondary"} 
                      className="w-full"
                      onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => navigate("/opportunities")}
          >
            View All Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
