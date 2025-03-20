
import React from "react";
import { BrainCircuit } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { aiMlResources } from "@/data/resourcesContent";

const AiMlResources: React.FC = () => {
  const relatedCategories = [
    { name: "Programming", path: "/resources/programming" },
    { name: "Mathematics", path: "/resources/mathematics" },
    { name: "Projects", path: "/resources/projects" }
  ];

  return (
    <ResourcePageTemplate
      title="AI & Machine Learning Resources"
      description="Explore artificial intelligence and machine learning resources for all skill levels. Access courses, tutorials, tools, and guides on neural networks, deep learning, computer vision, NLP, and more from leading experts and organizations."
      icon={<BrainCircuit className="h-10 w-10 text-brand-orange" />}
      resources={aiMlResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-purple-100/30 dark:from-purple-950/30"
    />
  );
};

export default AiMlResources;
