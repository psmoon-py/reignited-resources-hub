
export type ResourceType = 
  | "video" 
  | "playlist" 
  | "channel" 
  | "article" 
  | "website" 
  | "app" 
  | "pdf" 
  | "presentation" 
  | "course" 
  | "book" 
  | "tool" 
  | "dataset";

export type StemSubject = 
  | "math" 
  | "science" 
  | "technology" 
  | "engineering";

export type DifficultyLevel = 
  | "beginner" 
  | "intermediate" 
  | "advanced" 
  | "all-levels";

export type MathSubcategory = 
  | "algebra" 
  | "calculus" 
  | "geometry" 
  | "statistics" 
  | "discrete-math" 
  | "number-theory" 
  | "applied-math";

export type ScienceSubcategory = 
  | "physics" 
  | "chemistry" 
  | "biology" 
  | "earth-science" 
  | "astronomy" 
  | "environmental-science";

export type TechnologySubcategory = 
  | "programming" 
  | "web-development" 
  | "data-science" 
  | "artificial-intelligence" 
  | "cybersecurity" 
  | "networking" 
  | "blockchain";

export type EngineeringSubcategory = 
  | "mechanical" 
  | "electrical" 
  | "civil" 
  | "chemical" 
  | "aerospace" 
  | "biomedical" 
  | "environmental";

export interface StemResource {
  id: string;
  title: string;
  description: string;
  type: ResourceType;
  difficulty: DifficultyLevel;
  url: string;
  imageUrl?: string;
  author?: string;
  publishedDate?: string;
  subjects: StemSubject[];
  subcategories: (MathSubcategory | ScienceSubcategory | TechnologySubcategory | EngineeringSubcategory)[];
  tags: string[];
  rating?: number;
  featured?: boolean;
  isFree: boolean;
}
