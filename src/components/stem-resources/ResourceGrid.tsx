
import React, { useState } from "react";
import { StemResource } from "@/types/resource";
import { ResourceCard } from "./ResourceCard";
import Pagination from "@/components/ui/pagination";

interface ResourceGridProps {
  resources: StemResource[];
  compact?: boolean;
  itemsPerPage?: number;
}

export const ResourceGrid: React.FC<ResourceGridProps> = ({ 
  resources, 
  compact = false,
  itemsPerPage = 12
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground/70">No resources found</h3>
        <p className="text-foreground/50 mt-2">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  // Calculate pagination
  const indexOfLastResource = currentPage * itemsPerPage;
  const indexOfFirstResource = indexOfLastResource - itemsPerPage;
  const currentResources = resources.slice(indexOfFirstResource, indexOfLastResource);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top of grid when page changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-8">
      <div className={`grid gap-6 ${compact 
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {currentResources.map((resource) => (
          <ResourceCard 
            key={resource.id} 
            resource={resource} 
            compact={compact}
          />
        ))}
      </div>
      
      {resources.length > itemsPerPage && (
        <Pagination
          totalItems={resources.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          className="mt-8"
        />
      )}
    </div>
  );
};
