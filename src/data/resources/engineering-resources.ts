
import React from "react";
import { Wrench } from "lucide-react";
import { StemResource } from "@/types/resource";

// Engineering subcategories
const engineeringSubcategories = [
  "Mechanical Engineering", "Electrical Engineering", "Civil Engineering", 
  "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering", 
  "Industrial Engineering", "Materials Engineering", "Environmental Engineering",
  "Structural Engineering", "Robotics", "Control Systems", "Thermodynamics",
  "Fluid Mechanics", "Circuit Design", "Engineering Drawing"
];

// Generate engineering resources
export const generateEngineeringResources = (): StemResource[] => {
  const resourceTitles = [
    "Mechanical Engineering Principles",
    "Electrical Circuit Analysis",
    "Civil Engineering Structures",
    "Chemical Engineering Processes",
    "Aerospace Engineering Design",
    "Biomedical Engineering Applications",
    "Industrial Process Optimization",
    "Materials Science and Engineering",
    "Environmental Engineering Solutions",
    "Structural Analysis and Design",
    "Robotics Engineering Fundamentals",
    "Control Systems Engineering",
    "Thermodynamics for Engineers",
    "Fluid Mechanics Applications",
    "Digital Circuit Design",
    "Engineering Drawing Standards",
    "Engineering Ethics",
    "Sustainable Engineering Practices",
    "Engineering Project Management",
    "Finite Element Analysis",
  ];

  const descriptions = [
    "A comprehensive guide to engineering principles with practical examples and problem sets.",
    "In-depth exploration of engineering concepts with step-by-step explanations and design demonstrations.",
    "Hands-on engineering projects and case studies to develop practical skills and understanding.",
    "Detailed tutorials with technical diagrams and real-world applications for engineers.",
    "Concise reference materials with formulas, standards, and examples for professional engineers.",
    "Problem-solving focused resource with engineering exercises and worked solutions.",
    "Interactive engineering simulations and design tools to promote active learning and experimentation.",
    "Self-paced engineering courses with assessments to track progress and technical mastery.",
    "Research-based content covering the latest developments and innovations in engineering fields.",
    "Beginner-friendly introduction to engineering disciplines with clear, accessible explanations.",
  ];

  let resources: StemResource[] = [];
  let id = 7000; // Starting ID to avoid conflicts
  
  // Create engineering resources with subcategories
  resourceTitles.forEach((title, titleIndex) => {
    const subcategory = engineeringSubcategories[titleIndex % engineeringSubcategories.length];
    const mappedSubcategory = 
      subcategory.toLowerCase().includes('mechanical') ? 'mechanical' :
      subcategory.toLowerCase().includes('electrical') ? 'electrical' :
      subcategory.toLowerCase().includes('civil') ? 'civil' :
      subcategory.toLowerCase().includes('chemical') ? 'chemical' :
      subcategory.toLowerCase().includes('aerospace') ? 'aerospace' :
      subcategory.toLowerCase().includes('biomedical') ? 'biomedical' :
      subcategory.toLowerCase().includes('environmental') ? 'environmental' :
      'mechanical';
      
    const levels = ["beginner", "intermediate", "advanced"];
    const types = ["video", "course", "article", "pdf", "playlist", "presentation", "tool", "dataset", "website"];
    
    levels.forEach(level => {
      types.forEach(type => {
        // Add multiple resources for each combination
        for (let i = 0; i < 2; i++) {
          resources.push({
            id: `eng-${id++}`,
            title: i === 0 ? title : `${title} (${i + 1})`,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            type: type as any,
            difficulty: level as any,
            url: `https://example.com/engineering-resources/${titleIndex}-${level}-${type}`,
            imageUrl: Math.random() > 0.5 ? `/placeholder-${Math.floor(Math.random() * 5) + 1}.jpg` : undefined,
            author: ["Engineering Professor", "ASME", "IEEE", "Engineering Academy", "MIT Engineering"][Math.floor(Math.random() * 5)],
            publishedDate: `${2020 + Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
            subjects: ["engineering"],
            subcategories: [mappedSubcategory] as any,
            tags: [subcategory, level, type, "engineering", "STEM"],
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

export const engineeringResources = generateEngineeringResources();
