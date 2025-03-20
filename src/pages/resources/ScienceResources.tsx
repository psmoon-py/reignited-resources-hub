
import React from "react";
import { TestTube } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { scienceResources } from "@/data/resourcesContent";

const ScienceResources: React.FC = () => {
  const relatedCategories = [
    { name: "Mathematics", path: "/resources/mathematics" },
    { name: "Research Skills", path: "/resources/research-skills" },
    { name: "Programming", path: "/resources/programming" }
  ];

  return (
    <ResourcePageTemplate
      title="Science Resources"
      description="Explore comprehensive physics, chemistry, and biology resources for all academic levels. Access interactive simulations, video lectures, open textbooks, and laboratory guides from trusted educational sources."
      icon={<TestTube className="h-10 w-10 text-brand-orange" />}
      resources={scienceResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-green-100/30 dark:from-green-950/30"
    />
  );
};

export default ScienceResources;
