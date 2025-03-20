
import React from "react";
import { GraduationCap } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";
import { academicSuccessResources } from "@/data/resourcesContent";

const AcademicSuccessResources: React.FC = () => {
  const relatedCategories = [
    { name: "Research Skills", path: "/resources/research-skills" },
    { name: "Networking", path: "/resources/networking" },
    { name: "Study Materials", path: "/resources/study-materials" }
  ];

  return (
    <ResourcePageTemplate
      title="Academic Success Resources"
      description="Explore proven strategies and techniques to excel in your academic journey. From effective study habits and time management to note-taking methods and productivity systems designed specifically for STEM students."
      icon={<GraduationCap className="h-10 w-10 text-brand-blue" />}
      resources={academicSuccessResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-green-100/30 dark:from-green-950/30"
    />
  );
};

export default AcademicSuccessResources;
