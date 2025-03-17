
import React from "react";
import { StemResource } from "@/types/resource";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book, Video, FileText, Globe, Smartphone, FileDigit, PlaySquare, BookOpen, Tool, Database, Youtube, ListChecks } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  resource: StemResource;
  compact?: boolean;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({ resource, compact = false }) => {
  const getIcon = () => {
    switch (resource.type) {
      case "video": return <Video className="h-5 w-5 text-brand-blue" />;
      case "playlist": return <ListChecks className="h-5 w-5 text-brand-orange" />;
      case "channel": return <Youtube className="h-5 w-5 text-red-500" />;
      case "article": return <FileText className="h-5 w-5 text-brand-blue" />;
      case "website": return <Globe className="h-5 w-5 text-brand-orange" />;
      case "app": return <Smartphone className="h-5 w-5 text-brand-blue" />;
      case "pdf": return <FileDigit className="h-5 w-5 text-red-500" />;
      case "presentation": return <PlaySquare className="h-5 w-5 text-brand-orange" />;
      case "course": return <BookOpen className="h-5 w-5 text-brand-blue" />;
      case "book": return <Book className="h-5 w-5 text-brand-orange" />;
      case "tool": return <Tool className="h-5 w-5 text-brand-blue" />;
      case "dataset": return <Database className="h-5 w-5 text-brand-orange" />;
      default: return <FileText className="h-5 w-5 text-brand-blue" />;
    }
  };

  const getDifficultyColor = () => {
    switch (resource.difficulty) {
      case "beginner": return "bg-green-100 text-green-800";
      case "intermediate": return "bg-yellow-100 text-yellow-800";
      case "advanced": return "bg-red-100 text-red-800";
      case "all-levels": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  if (compact) {
    return (
      <Link to={resource.url} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-full bg-muted/30">{getIcon()}</div>
              <Badge variant="secondary" className={getDifficultyColor()}>
                {resource.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-lg mt-2 line-clamp-2">{resource.title}</CardTitle>
          </CardHeader>
          <CardFooter className="pt-0 flex justify-between items-center">
            <Badge variant="outline">{resource.type}</Badge>
            {resource.rating && (
              <div className="flex items-center">
                <span className="text-yellow-500">★</span>
                <span className="text-sm ml-1">{resource.rating}</span>
              </div>
            )}
          </CardFooter>
        </Card>
      </Link>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={resource.url} target="_blank" rel="noopener noreferrer">
        <Card className="h-full hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-full bg-muted/30">{getIcon()}</div>
              <Badge variant="secondary" className={getDifficultyColor()}>
                {resource.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-xl mt-2">{resource.title}</CardTitle>
            {resource.author && (
              <CardDescription>By {resource.author}</CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 line-clamp-3">{resource.description}</p>
            <div className="flex flex-wrap gap-1 mt-3">
              {resource.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {resource.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{resource.tags.length - 3} more
                </Badge>
              )}
            </div>
          </CardContent>
          <CardFooter className="pt-0 flex justify-between items-center">
            <Badge variant="outline">{resource.type}</Badge>
            <div className="flex items-center">
              {resource.isFree ? (
                <Badge variant="outline" className="bg-green-100 text-green-800">Free</Badge>
              ) : (
                <Badge variant="outline" className="bg-blue-100 text-blue-800">Premium</Badge>
              )}
              {resource.rating && (
                <div className="flex items-center ml-2">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm ml-1">{resource.rating}</span>
                </div>
              )}
            </div>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  );
};
