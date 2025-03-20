
import React from "react";
import { Code } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { programmingResources } from "@/data/resourcesContent";

const ProgrammingResources: React.FC = () => {
  const relatedCategories = [
    { name: "AI & Machine Learning", path: "/resources/ai-ml" },
    { name: "Mathematics", path: "/resources/mathematics" },
    { name: "Research Skills", path: "/resources/research-skills" }
  ];

  return (
    <ResourcePageTemplate
      title="Programming Resources"
      description="Discover comprehensive programming resources for all levels, from beginner tutorials to advanced algorithms and specialized topics. Access free courses, interactive platforms, books, and video content from leading universities and experts."
      icon={<Code className="h-10 w-10 text-brand-blue" />}
      resources={programmingResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-blue-100/30 dark:from-blue-950/30"
    />
  );
};

export default ProgrammingResources;
