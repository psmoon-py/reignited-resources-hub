
import React from "react";
import { BookText } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { researchSkillsResources } from "@/data/resourcesContent";

const ResearchSkillsResources: React.FC = () => {
  const relatedCategories = [
    { name: "Academic Success", path: "/resources/academic-success" },
    { name: "Networking", path: "/resources/networking" },
    { name: "Science", path: "/resources/science" }
  ];

  return (
    <ResourcePageTemplate
      title="Research Skills Resources"
      description="Develop essential research skills for academic and scientific work. Learn how to read scientific papers, conduct literature reviews, write academic papers, use research tools, and understand research methodologies."
      icon={<BookText className="h-10 w-10 text-brand-orange" />}
      resources={researchSkillsResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-purple-100/30 dark:from-purple-950/30"
    />
  );
};

export default ResearchSkillsResources;
