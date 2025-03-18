
import React, { useState } from "react";
import { StemResource } from "@/types/resource";
import { ResourceCard } from "./ResourceCard";
import Pagination from "@/components/ui/pagination";
import { getPaginatedResources } from "@/data/resources";

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
  
  const { resources: paginatedResources, totalPages } = getPaginatedResources(
    resources,
    currentPage,
    itemsPerPage
  );
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground/70">No resources found</h3>
        <p className="text-foreground/50 mt-2">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className={`grid gap-6 ${compact 
        ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
      >
        {paginatedResources.map((resource) => (
          <ResourceCard 
            key={resource.id} 
            resource={resource} 
            compact={compact}
          />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination
            totalItems={resources.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            className="justify-center"
          />
        </div>
      )}
    </div>
  );
};
