
import React from "react";
import { Calculator } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { mathematicsResources } from "@/data/resourcesContent";

const MathematicsResources: React.FC = () => {
  const relatedCategories = [
    { name: "Programming", path: "/resources/programming" },
    { name: "Science", path: "/resources/science" },
    { name: "AI & Machine Learning", path: "/resources/ai-ml" }
  ];

  return (
    <ResourcePageTemplate
      title="Mathematics Resources"
      description="Discover high-quality mathematics learning resources from algebra and calculus to statistics and beyond. Access visual explanations, interactive tools, problem sets, and comprehensive courses for all skill levels."
      icon={<Calculator className="h-10 w-10 text-brand-blue" />}
      resources={mathematicsResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-blue-100/30 dark:from-blue-950/30"
    />
  );
};

export default MathematicsResources;
