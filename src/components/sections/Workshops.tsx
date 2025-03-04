
import React from "react";
import { motion } from "framer-motion";
import Card from "../ui/Card";
import Button from "../ui/Button";
import { CalendarClock, Users, Clock, MapPin } from "lucide-react";

const workshops = [
  {
    title: "Introduction to Machine Learning",
    date: "June 15, 2023",
    time: "10:00 AM - 2:00 PM EST",
    location: "Online (Zoom)",
    spots: "50 spots available",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
    description: "Learn the fundamentals of machine learning algorithms and how to implement them using Python.",
    delay: 0.1,
  },
  {
    title: "College Essay Writing Workshop",
    date: "July 8, 2023",
    time: "1:00 PM - 4:00 PM EST",
    location: "Online (Zoom)",
    spots: "30 spots available",
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=600&q=80",
    description: "Craft compelling college application essays that stand out to admissions committees.",
    delay: 0.2,
  },
  {
    title: "Web Development Bootcamp",
    date: "August 12-13, 2023",
    time: "9:00 AM - 5:00 PM EST",
    location: "Online (Zoom)",
    spots: "40 spots available",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?auto=format&fit=crop&w=600&q=80",
    description: "Build a complete web application in a weekend using modern JavaScript frameworks.",
    delay: 0.3,
  },
];

const Workshops: React.FC = () => {
  return (
    <section id="workshops" className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Upcoming <span className="text-gradient-primary">Workshops</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-foreground/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Join our interactive workshops led by industry professionals and academic experts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: workshop.delay }}
            >
              <Card 
                glassEffect 
                className="h-full overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 -mx-6 -mt-6 mb-6">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-semibold">{workshop.title}</h3>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-brand-blue" />
                    <span className="text-foreground/80">{workshop.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-brand-blue" />
                    <span className="text-foreground/80">{workshop.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue" />
                    <span className="text-foreground/80">{workshop.location}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-brand-blue" />
                    <span className="text-foreground/80">{workshop.spots}</span>
                  </div>
                  
                  <p className="text-foreground/70 pt-2 border-t border-muted/20">
                    {workshop.description}
                  </p>
                  
                  <Button 
                    variant="primary"
                    className="w-full mt-4"
                  >
                    Register Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline">
            View All Workshops
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
