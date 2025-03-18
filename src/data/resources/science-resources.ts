
import React from "react";
import { TestTube } from "lucide-react";
import { StemResource } from "@/types/resource";

// Science subcategories
const scienceSubcategories = [
  "Physics - Mechanics", "Physics - Electricity & Magnetism", "Physics - Thermodynamics",
  "Physics - Waves & Optics", "Physics - Quantum Mechanics", "Chemistry - General",
  "Chemistry - Organic", "Chemistry - Inorganic", "Chemistry - Physical",
  "Biology - Cell Biology", "Biology - Genetics", "Biology - Ecology",
  "Biology - Human Anatomy", "Biology - Evolution", "Earth Science", "Environmental Science"
];

// Generate science resources
export const generateScienceResources = (): StemResource[] => {
  const resourceTitles = [
    "Chemistry Lab Experiments",
    "Physics: Mechanics and Motion",
    "Biology: Cell Structure and Function",
    "Environmental Science Projects",
    "Chemistry: Periodic Table Explained",
    "Physics: Electricity and Magnetism",
    "Biology: Genetics and Heredity",
    "Earth Science: Geology Basics",
    "Chemistry: Organic Compounds",
    "Physics: Thermodynamics",
    "Biology: Ecology and Ecosystems",
    "Astronomy: The Solar System",
    "Chemistry: Chemical Reactions",
    "Physics: Waves and Optics",
    "Biology: Human Anatomy",
    "Environmental Science: Climate Change",
    "Chemistry: Solutions and Mixtures",
    "Physics: Quantum Mechanics",
    "Biology: Evolution and Natural Selection",
    "Forensic Science Techniques",
  ];

  const descriptions = [
    "A comprehensive guide covering fundamental concepts with practical examples and experiments.",
    "In-depth exploration of physics principles with step-by-step explanations and interactive demonstrations.",
    "Detailed examination of biological systems with visual aids and real-world applications.",
    "Hands-on science experiments and activities to explore scientific principles in a practical way.",
    "Concise reference material with key formulas, definitions, and examples for quick review.",
    "Problem-solving focused resource with practice exercises and worked solutions for scientific concepts.",
    "Interactive learning modules with simulations to promote active engagement with science topics.",
    "Self-paced science course with quizzes and assessments to track progress and understanding.",
    "Research-based content presenting the latest developments and discoveries in scientific fields.",
    "Beginner-friendly introduction to complex scientific concepts with clear, accessible explanations.",
  ];

  let resources: StemResource[] = [];
  let id = 3000; // Starting ID to avoid conflicts
  
  // Create science resources with subcategories
  resourceTitles.forEach((title, titleIndex) => {
    const subcategory = scienceSubcategories[titleIndex % scienceSubcategories.length];
    const subjectType = subcategory.split(' - ')[0].toLowerCase();
    const mappedSubcategory = 
      subjectType === 'physics' ? 'physics' :
      subjectType === 'chemistry' ? 'chemistry' :
      subjectType === 'biology' ? 'biology' :
      subjectType === 'earth' ? 'earth-science' :
      'environmental-science';
      
    const levels = ["beginner", "intermediate", "advanced"];
    const types = ["video", "course", "article", "pdf", "playlist", "presentation", "tool", "dataset", "website"];
    
    levels.forEach(level => {
      types.forEach(type => {
        // Add multiple resources for each combination
        for (let i = 0; i < 2; i++) {
          resources.push({
            id: `science-${id++}`,
            title: i === 0 ? title : `${title} (${i + 1})`,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            type: type as any,
            difficulty: level as any,
            url: `https://example.com/science-resources/${titleIndex}-${level}-${type}`,
            imageUrl: Math.random() > 0.5 ? `/placeholder-${Math.floor(Math.random() * 5) + 1}.jpg` : undefined,
            author: ["Science Professor", "National Geographic", "ScienceDaily", "Nova", "Nature Education"][Math.floor(Math.random() * 5)],
            publishedDate: `${2020 + Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
            subjects: ["science"],
            subcategories: [mappedSubcategory] as any,
            tags: [subcategory, level, type, "science", "STEM"],
            rating: (Math.floor(Math.random() * 10) + 38) / 10, // Random rating between 3.8 and 4.8
            featured: Math.random() > 0.9,
            isFree: Math.random() > 0.3,
          });
        }
      });
    });
  });
  
  return resources;
};

export const scienceResources = generateScienceResources();
