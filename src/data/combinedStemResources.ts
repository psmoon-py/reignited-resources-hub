
import { StemResource } from "@/types/resource";
import { mathResources } from "./mathResources";
import { scienceResources } from "./scienceResources";
import { technologyResources } from "./technologyResources";
import { engineeringResources } from "./engineeringResources";
import { additionalMathResources } from "./additionalMathResources";
import { additionalScienceResources } from "./additionalScienceResources";
import { additionalTechnologyResources } from "./additionalTechnologyResources";
import { additionalEngineeringResources } from "./additionalEngineeringResources";
import { advancedMathResources } from "./advancedMathResources";
import { advancedScienceResources } from "./advancedScienceResources";
import { advancedTechnologyResources } from "./advancedTechnologyResources";
import { advancedEngineeringResources } from "./advancedEngineeringResources";
import { specializedMathResources } from "./specializedMathResources";
import { specializedScienceResources } from "./specializedScienceResources";
import { specializedTechnologyResources } from "./specializedTechnologyResources";
import { specializedEngineeringResources } from "./specializedEngineeringResources";

// Combine all resources
export const allStemResources: StemResource[] = [
  ...mathResources,
  ...scienceResources,
  ...technologyResources,
  ...engineeringResources,
  ...additionalMathResources,
  ...additionalScienceResources,
  ...additionalTechnologyResources,
  ...additionalEngineeringResources,
  ...advancedMathResources,
  ...advancedScienceResources,
  ...advancedTechnologyResources,
  ...advancedEngineeringResources,
  ...specializedMathResources,
  ...specializedScienceResources,
  ...specializedTechnologyResources,
  ...specializedEngineeringResources
];

// Utility functions for filtering resources
export const getResourcesBySubject = (subject: string): StemResource[] => {
  return allStemResources.filter(resource => 
    resource.subjects.includes(subject as any)
  );
};

export const getResourcesBySubcategory = (subcategory: string): StemResource[] => {
  if (subcategory === "all") return allStemResources;
  
  return allStemResources.filter(resource => 
    resource.subcategories.includes(subcategory as any)
  );
};

export const getResourcesByType = (type: string): StemResource[] => {
  if (type === "all") return allStemResources;
  
  return allStemResources.filter(resource => 
    resource.type === type
  );
};

export const getFeaturedResources = (limit = 8): StemResource[] => {
  const featured = allStemResources.filter(resource => resource.featured);
  // Shuffle and return limited number of featured resources
  return featured
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};

export const getPaginatedResources = (
  resources: StemResource[],
  page: number,
  itemsPerPage: number
): StemResource[] => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return resources.slice(startIndex, endIndex);
};

// Export resource types and difficulties for filtering
export const resourceTypes = [
  "all",
  "video", 
  "playlist", 
  "channel", 
  "article", 
  "website", 
  "app", 
  "pdf", 
  "presentation", 
  "course", 
  "book", 
  "tool", 
  "dataset",
  "social-media"
];

export const difficultyLevels = [
  "all",
  "beginner", 
  "intermediate", 
  "advanced", 
  "all-levels"
];
