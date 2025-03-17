
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Calculator, 
  TestTube, 
  Code, 
  Cog,
  PanelTopOpen
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface SubjectSelectorProps {
  className?: string;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ className }) => {
  const navigate = useNavigate();
  
  const subjects = [
    {
      name: "Mathematics",
      description: "Algebra, calculus, statistics, geometry, and other mathematical concepts",
      icon: <Calculator className="h-12 w-12 text-brand-blue" />,
      color: "from-blue-500/20 to-blue-600/20",
      path: "/stem-resources/math"
    },
    {
      name: "Science",
      description: "Physics, chemistry, biology, earth science, astronomy, and more",
      icon: <TestTube className="h-12 w-12 text-brand-orange" />,
      color: "from-orange-500/20 to-orange-600/20",
      path: "/stem-resources/science"
    },
    {
      name: "Technology",
      description: "Programming, web development, data science, AI, cybersecurity",
      icon: <Code className="h-12 w-12 text-brand-blue" />,
      color: "from-blue-500/20 to-blue-600/20",
      path: "/stem-resources/technology"
    },
    {
      name: "Engineering",
      description: "Mechanical, electrical, civil, chemical, aerospace, biomedical engineering",
      icon: <Cog className="h-12 w-12 text-brand-orange" />,
      color: "from-orange-500/20 to-orange-600/20",
      path: "/stem-resources/engineering"
    },
    {
      name: "Browse by Type",
      description: "Find resources by format: videos, articles, tools, courses, and more",
      icon: <PanelTopOpen className="h-12 w-12 text-purple-500" />,
      color: "from-purple-500/20 to-purple-600/20",
      path: "/stem-resources/type/video"
    }
  ];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {subjects.map((subject, index) => (
        <motion.div
          key={subject.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="h-full"
        >
          <Card 
            className={`h-full cursor-pointer bg-gradient-to-br ${subject.color} hover:shadow-lg transition-all duration-300`}
            onClick={() => navigate(subject.path)}
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                {subject.icon}
              </div>
              <CardTitle className="text-center text-xl">{subject.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-center text-foreground/70">
                {subject.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-sm font-medium text-brand-blue hover:underline">
                Explore Resources
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
