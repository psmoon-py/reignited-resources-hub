
import React, { useState } from "react";
import { StemResource } from "@/types/resource";
import { ResourceCard } from "./ResourceCard";
import Pagination from "@/components/ui/pagination";

interface ResourceGridProps {
  resources: StemResource[];
  compact?: boolean;
}

export const ResourceGrid: React.FC<ResourceGridProps> = ({ 
  resources, 
  compact = false 
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = compact ? 12 : 9;
  
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground/70">No resources found</h3>
        <p className="text-foreground/50 mt-2">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  // Calculate total number of pages
  const totalPages = Math.ceil(resources.length / itemsPerPage);
  
  // Get current page of resources
  const indexOfLastResource = currentPage * itemsPerPage;
  const indexOfFirstResource = indexOfLastResource - itemsPerPage;
  const currentResources = resources.slice(indexOfFirstResource, indexOfLastResource);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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
      
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination 
            totalItems={resources.length} 
            itemsPerPage={itemsPerPage} 
            currentPage={currentPage} 
            onPageChange={handlePageChange}
          />
          <p className="text-center text-foreground/50 mt-2">
            Showing {indexOfFirstResource + 1}-{Math.min(indexOfLastResource, resources.length)} of {resources.length} resources
          </p>
        </div>
      )}
    </div>
  );
};
