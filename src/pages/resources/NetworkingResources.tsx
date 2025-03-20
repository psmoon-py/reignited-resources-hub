
import React from "react";
import { Users } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { networkingResources } from "@/data/resourcesContent";

const NetworkingResources: React.FC = () => {
  const relatedCategories = [
    { name: "Research Skills", path: "/resources/research-skills" },
    { name: "Academic Success", path: "/resources/academic-success" },
    { name: "Projects", path: "/resources/projects" }
  ];

  return (
    <ResourcePageTemplate
      title="Networking Resources"
      description="Master the art of professional networking in STEM fields. Learn how to craft effective cold emails, connect with professors, find mentors, navigate conferences, and build meaningful professional relationships that enhance your academic and career development."
      icon={<Users className="h-10 w-10 text-brand-blue" />}
      resources={networkingResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-indigo-100/30 dark:from-indigo-950/30"
    />
  );
};

export default NetworkingResources;
