
import React from "react";
import { Calculator } from "lucide-react";
import { StemResource } from "@/types/resource";

// Math subcategories
const mathematicsSubcategories = [
  "Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability",
  "Linear Algebra", "Differential Equations", "Discrete Mathematics", "Number Theory",
  "Applied Mathematics", "Mathematical Modeling", "Numerical Analysis", "Complex Analysis",
  "Graph Theory", "Optimization"
];

// Generate math resources
export const generateMathResources = (): StemResource[] => {
  const resourceTitles = [
    "Advanced Calculus Practice Problems",
    "Linear Algebra Essentials",
    "Statistics and Probability",
    "Geometry Problem Solving",
    "Algebra I Fundamentals",
    "Algebra II and Functions",
    "Trigonometry Basics",
    "Pre-Calculus Concepts",
    "Differential Equations",
    "Discrete Mathematics",
    "Number Theory Introduction",
    "Mathematical Proofs",
    "Vector Calculus",
    "Complex Analysis",
    "Applied Mathematics",
    "Mathematical Modeling",
    "Numerical Methods",
    "Graph Theory",
    "Optimization Techniques",
    "Mathematical Logic",
  ];

  const descriptions = [
    "A comprehensive guide covering fundamental concepts with practical examples and exercises.",
    "In-depth exploration of advanced topics with step-by-step explanations and interactive demonstrations.",
    "Hands-on learning resource with projects and challenges to reinforce understanding and build skills.",
    "Detailed tutorial with visual aids and real-world applications to enhance learning experience.",
    "Concise reference material with key formulas, definitions, and examples for quick review and study.",
    "Problem-solving focused resource with practice exercises and worked solutions to develop critical thinking.",
    "Interactive learning module with simulations and experiments to promote active engagement.",
    "Self-paced course with quizzes and assessments to track progress and mastery of concepts.",
    "Research-based content with the latest developments and discoveries in the field.",
    "Beginner-friendly introduction with clear explanations and no prior knowledge required.",
  ];

  let resources: StemResource[] = [];
  let id = 1000; // Starting ID to avoid conflicts
  
  // Create math resources with subcategories
  resourceTitles.forEach((title, titleIndex) => {
    const subcategory = mathematicsSubcategories[titleIndex % mathematicsSubcategories.length];
    const levels = ["beginner", "intermediate", "advanced"];
    const types = ["video", "course", "article", "pdf", "playlist", "presentation", "tool", "dataset", "website"];
    
    levels.forEach(level => {
      types.forEach(type => {
        // Add multiple resources for each combination to reach higher resource count
        for (let i = 0; i < 2; i++) {
          resources.push({
            id: `math-${id++}`,
            title: i === 0 ? title : `${title} (${i + 1})`,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            type: type as any,
            difficulty: level as any,
            url: `https://example.com/math-resources/${titleIndex}-${level}-${type}`,
            imageUrl: Math.random() > 0.5 ? `/placeholder-${Math.floor(Math.random() * 5) + 1}.jpg` : undefined,
            author: ["Math Professor", "Math Academy", "MathLearning.org", "Khan Academy", "MIT OpenCourseware"][Math.floor(Math.random() * 5)],
            publishedDate: `${2020 + Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
            subjects: ["math"],
            subcategories: [subcategory.toLowerCase().replace(/\s+/g, '-')] as any,
            tags: [subcategory, level, type, "mathematics", "STEM"],
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

export const mathResources = generateMathResources();
