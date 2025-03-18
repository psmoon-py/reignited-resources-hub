
import { StemResource } from "@/types/resource";
import { mathResources } from "./math-resources";
import { scienceResources } from "./science-resources";
import { technologyResources } from "./technology-resources";
import { engineeringResources } from "./engineering-resources";

// Combine all resources from different subject files
export const allResources: StemResource[] = [
  ...mathResources,
  ...scienceResources,
  ...technologyResources,
  ...engineeringResources
];

// Get resources by subject
export const getResourcesBySubject = (subject: string): StemResource[] => {
  return allResources.filter(resource => 
    resource.subjects.includes(subject as any)
  );
};

// Get resources by subcategory
export const getResourcesBySubcategory = (subcategory: string): StemResource[] => {
  if (subcategory === "all") return allResources;
  
  return allResources.filter(resource => 
    resource.subcategories.includes(subcategory as any)
  );
};

// Get resources by type
export const getResourcesByType = (type: string): StemResource[] => {
  if (type === "all") return allResources;
  
  return allResources.filter(resource => 
    resource.type === type
  );
};

// Get featured resources
export const getFeaturedResources = (limit: number = 8): StemResource[] => {
  return allResources
    .filter(resource => resource.featured)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

// Get paginated resources
export const getPaginatedResources = (
  resources: StemResource[], 
  page: number = 1, 
  perPage: number = 12
): { 
  resources: StemResource[],
  totalPages: number,
  currentPage: number
} => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedResources = resources.slice(startIndex, endIndex);
  
  return {
    resources: paginatedResources,
    totalPages: Math.ceil(resources.length / perPage),
    currentPage: page
  };
};

// Get resource by ID
export const getResourceById = (id: string): StemResource | undefined => {
  return allResources.find(resource => resource.id === id);
};

// Search resources
export const searchResources = (query: string): StemResource[] => {
  if (!query || query.trim() === '') return [];
  
  const searchTerm = query.toLowerCase().trim();
  return allResources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm) ||
    resource.description.toLowerCase().includes(searchTerm) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    (resource.author && resource.author.toLowerCase().includes(searchTerm))
  );
};
