
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Video, FileText, Globe, Smartphone, FileDigit, 
  PlaySquare, BookOpen, Book, Tool, Database, Youtube, ListChecks
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ResourceTypeFilterProps {
  activeType?: string;
}

export const ResourceTypeFilter: React.FC<ResourceTypeFilterProps> = ({ activeType }) => {
  const navigate = useNavigate();
  
  const resourceTypes = [
    { type: "video", label: "Videos", icon: <Video className="h-4 w-4 mr-2" /> },
    { type: "playlist", label: "Playlists", icon: <ListChecks className="h-4 w-4 mr-2" /> },
    { type: "channel", label: "Channels", icon: <Youtube className="h-4 w-4 mr-2" /> },
    { type: "article", label: "Articles", icon: <FileText className="h-4 w-4 mr-2" /> },
    { type: "website", label: "Websites", icon: <Globe className="h-4 w-4 mr-2" /> },
    { type: "app", label: "Apps", icon: <Smartphone className="h-4 w-4 mr-2" /> },
    { type: "pdf", label: "PDFs", icon: <FileDigit className="h-4 w-4 mr-2" /> },
    { type: "presentation", label: "Presentations", icon: <PlaySquare className="h-4 w-4 mr-2" /> },
    { type: "course", label: "Courses", icon: <BookOpen className="h-4 w-4 mr-2" /> },
    { type: "book", label: "Books", icon: <Book className="h-4 w-4 mr-2" /> },
    { type: "tool", label: "Tools", icon: <Tool className="h-4 w-4 mr-2" /> },
    { type: "dataset", label: "Datasets", icon: <Database className="h-4 w-4 mr-2" /> }
  ];

  const handleTypeClick = (type: string) => {
    navigate(`/stem-resources/type/${type}`);
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {resourceTypes.map((item) => (
        <Button
          key={item.type}
          variant={activeType === item.type ? "default" : "outline"}
          size="sm"
          className="flex items-center"
          onClick={() => handleTypeClick(item.type)}
        >
          {item.icon}
          {item.label}
        </Button>
      ))}
    </div>
  );
};
