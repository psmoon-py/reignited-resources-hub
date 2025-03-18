
import React, { useState } from "react";
import { StemResource } from "@/types/resource";
import { ResourceCard } from "./ResourceCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const totalPages = Math.ceil(resources.length / itemsPerPage);
  
  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground/70">No resources found</h3>
        <p className="text-foreground/50 mt-2">Try adjusting your filters or search terms</p>
      </div>
    );
  }

  const paginatedResources = resources.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="space-y-6">
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
        <div className="flex items-center justify-center gap-2 pt-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handlePrevPage} 
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>
          <span className="text-sm text-muted-foreground px-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      )}
    </div>
  );
};
