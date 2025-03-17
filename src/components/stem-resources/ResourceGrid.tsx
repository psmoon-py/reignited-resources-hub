
import React from "react";
import { StemResource } from "@/types/resource";
import { ResourceCard } from "./ResourceCard";

interface ResourceGridProps {
  resources: StemResource[];
  compact?: boolean;
}

export const ResourceGrid: React.FC<ResourceGridProps> = ({ 
  resources, 
  compact = false 
}) => {
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground/70">No resources found</h3>
        <p className="text-foreground/50 mt-2">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${compact 
      ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
    >
      {resources.map((resource) => (
        <ResourceCard 
          key={resource.id} 
          resource={resource} 
          compact={compact}
        />
      ))}
    </div>
  );
};
