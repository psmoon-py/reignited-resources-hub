
import React from "react";
import { Code } from "lucide-react";
import { StemResource } from "@/types/resource";

// Technology subcategories
const technologySubcategories = [
  "Python", "JavaScript", "Java", "C++", "Ruby", "Go", "Rust", "Swift", 
  "Web Development", "Mobile App Development", "Data Structures", "Algorithms",
  "Database Systems", "Machine Learning", "Game Development", "Cloud Computing"
];

// Generate technology resources
export const generateTechnologyResources = (): StemResource[] => {
  const resourceTitles = [
    "Introduction to Python Programming",
    "Advanced Java Techniques",
    "C++ Data Structures",
    "Web Development with React",
    "Mobile App Development with Flutter",
    "Rust Programming Language",
    "Go Programming Tutorial",
    "JavaScript Fundamentals",
    "HTML and CSS Basics",
    "RESTful API Design",
    "Backend Development with Node.js",
    "Introduction to TypeScript",
    "Ruby on Rails Development",
    "SQL Database Design",
    "MongoDB for Beginners",
    "Git and GitHub Version Control",
    "Functional Programming in JavaScript",
    "Object-Oriented Programming Principles",
    "Algorithms and Problem Solving",
    "Secure Coding Practices",
  ];

  const descriptions = [
    "A comprehensive guide to technology concepts with practical examples and coding exercises.",
    "In-depth exploration of programming languages with step-by-step explanations and interactive examples.",
    "Hands-on coding projects and challenges to reinforce understanding and build technical skills.",
    "Detailed tutorials with visual aids and real-world applications to enhance the learning experience.",
    "Concise reference materials with code snippets, algorithms, and examples for quick review.",
    "Problem-solving focused resource with coding exercises and worked solutions to develop skills.",
    "Interactive coding modules with live environments to promote active learning and experimentation.",
    "Self-paced technology courses with quizzes and assessments to track progress and mastery.",
    "Research-based content covering the latest developments and trends in technology fields.",
    "Beginner-friendly introduction to programming concepts with clear, accessible explanations.",
  ];

  let resources: StemResource[] = [];
  let id = 5000; // Starting ID to avoid conflicts
  
  // Create technology resources with subcategories
  resourceTitles.forEach((title, titleIndex) => {
    const subcategory = technologySubcategories[titleIndex % technologySubcategories.length];
    const mappedSubcategory = subcategory.toLowerCase().includes('web') ? 'web-development' :
                           subcategory.toLowerCase().includes('app') ? 'web-development' :
                           subcategory.toLowerCase().includes('machine') ? 'artificial-intelligence' :
                           subcategory.toLowerCase().includes('data') ? 'data-science' :
                           'programming';
                           
    const levels = ["beginner", "intermediate", "advanced"];
    const types = ["video", "course", "article", "pdf", "playlist", "presentation", "tool", "dataset", "website"];
    
    levels.forEach(level => {
      types.forEach(type => {
        // Add multiple resources for each combination
        for (let i = 0; i < 2; i++) {
          resources.push({
            id: `tech-${id++}`,
            title: i === 0 ? title : `${title} (${i + 1})`,
            description: descriptions[Math.floor(Math.random() * descriptions.length)],
            type: type as any,
            difficulty: level as any,
            url: `https://example.com/tech-resources/${titleIndex}-${level}-${type}`,
            imageUrl: Math.random() > 0.5 ? `/placeholder-${Math.floor(Math.random() * 5) + 1}.jpg` : undefined,
            author: ["Tech Instructor", "FreeCodeCamp", "W3Schools", "MDN Web Docs", "Codecademy"][Math.floor(Math.random() * 5)],
            publishedDate: `${2020 + Math.floor(Math.random() * 4)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`,
            subjects: ["technology"],
            subcategories: [mappedSubcategory] as any,
            tags: [subcategory, level, type, "programming", "coding", "STEM"],
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

export const technologyResources = generateTechnologyResources();
