import { StemResource } from "@/types/resource";
import { mathResources } from "./resources/math-resources";
// Import other resource types as needed

// Combine all resources
export const allResources: StemResource[] = [
  ...mathResources,
  // Add other resource types here
];

// Filter resources by subject
export const getResourcesBySubject = (subject: string): StemResource[] => {
  return allResources.filter(resource => 
    resource.subjects.includes(subject as any)
  );
};

// Filter resources by subcategory
export const getResourcesBySubcategory = (subcategory: string): StemResource[] => {
  if (subcategory === 'all') return allResources;
  
  return allResources.filter(resource => 
    resource.subcategories.includes(subcategory as any)
  );
};

// Filter resources by type
export const getResourcesByType = (type: string): StemResource[] => {
  if (type === 'all') return allResources;
  
  return allResources.filter(resource => 
    resource.type === type
  );
};

// Search resources
export const searchResources = (query: string): StemResource[] => {
  const lowercaseQuery = query.toLowerCase();
  
  return allResources.filter(resource => 
    resource.title.toLowerCase().includes(lowercaseQuery) ||
    resource.description.toLowerCase().includes(lowercaseQuery) ||
    resource.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Paginate resources
export const getPaginatedResources = (
  resources: StemResource[],
  page: number,
  itemsPerPage: number
) => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedResources = resources.slice(startIndex, endIndex);
  
  return {
    resources: paginatedResources,
    totalPages: Math.ceil(resources.length / itemsPerPage)
  };
};

// Export resource types
export const resourceTypes = [
  "video",
  "course",
  "article",
  "tutorial",
  "pdf",
  "playlist",
  "presentation",
  "tool",
  "dataset",
  "website",
  "book",
  "app"
];
