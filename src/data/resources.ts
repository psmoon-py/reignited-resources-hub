
import React from "react";
import { BookOpen, Code, TestTube, Calculator, BrainCircuit, Telescope, Clock, Book, BookText, Presentation, GraduationCap, Lightbulb } from "lucide-react";

// Define subject subcategories
const programmingSubcategories = [
  "Python", "JavaScript", "Java", "C++", "Ruby", "Go", "Rust", "Swift", 
  "Web Development", "Mobile App Development", "Data Structures", "Algorithms",
  "Database Systems", "Machine Learning", "Game Development", "Cloud Computing"
];

const mathematicsSubcategories = [
  "Algebra", "Geometry", "Trigonometry", "Calculus", "Statistics", "Probability",
  "Linear Algebra", "Differential Equations", "Discrete Mathematics", "Number Theory",
  "Applied Mathematics", "Mathematical Modeling", "Numerical Analysis", "Complex Analysis",
  "Graph Theory", "Optimization"
];

const scienceSubcategories = [
  "Physics - Mechanics", "Physics - Electricity & Magnetism", "Physics - Thermodynamics",
  "Physics - Waves & Optics", "Physics - Quantum Mechanics", "Chemistry - General",
  "Chemistry - Organic", "Chemistry - Inorganic", "Chemistry - Physical",
  "Biology - Cell Biology", "Biology - Genetics", "Biology - Ecology",
  "Biology - Human Anatomy", "Biology - Evolution", "Earth Science", "Environmental Science"
];

const aiSubcategories = [
  "Machine Learning Basics", "Deep Learning", "Neural Networks", "Natural Language Processing",
  "Computer Vision", "Reinforcement Learning", "AI Ethics", "Data Science",
  "Generative AI", "Robotics", "Big Data Analytics", "Time Series Analysis",
  "Recommender Systems", "Decision Trees", "Support Vector Machines", "Clustering"
];

const astronomySubcategories = [
  "Solar System", "Stars & Stellar Evolution", "Galaxies", "Cosmology",
  "Black Holes", "Space Exploration", "Telescopes & Instrumentation", "Planetary Science",
  "Celestial Mechanics", "Astrobiology", "Astrophotography", "Radio Astronomy",
  "Dark Matter & Dark Energy", "Exoplanets", "Comets & Asteroids", "Astrophysics"
];

const studySubcategories = [
  "Study Skills", "Exam Preparation", "Note-Taking", "Time Management",
  "Memory Techniques", "Critical Thinking", "Research Methods", "Academic Writing",
  "Presentation Skills", "Scholarship Applications", "College Applications", "STEM Career Planning",
  "Laboratory Skills", "Project Management", "Collaboration Skills", "Technical Writing"
];

// Generate resources with subcategories
const generateResources = () => {
  const resourceTitles = {
    Programming: [
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
    ],
    Science: [
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
    ],
    Mathematics: [
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
    ],
    "AI & Machine Learning": [
      "Neural Networks Demystified",
      "Deep Learning Applications",
      "Introduction to Machine Learning",
      "Natural Language Processing",
      "Computer Vision Fundamentals",
      "Reinforcement Learning",
      "AI Ethics and Governance",
      "Data Science with Python",
      "TensorFlow and Keras",
      "PyTorch for Deep Learning",
      "Big Data Analytics",
      "AI for Robotics",
      "Generative AI Models",
      "Recommender Systems",
      "Time Series Forecasting",
      "Clustering Algorithms",
      "Decision Trees and Random Forests",
      "Support Vector Machines",
      "AI in Healthcare",
      "AI for Climate Science",
    ],
    Astronomy: [
      "Astronomy: Exploring Our Solar System",
      "Stellar Evolution and Black Holes",
      "Galaxies and the Universe",
      "Celestial Navigation",
      "Telescopes and Astronomical Instruments",
      "Planetary Science",
      "The Life Cycle of Stars",
      "Cosmic Microwave Background",
      "Dark Matter and Dark Energy",
      "Space Exploration History",
      "Astronomical Phenomena",
      "Exoplanets and Habitable Worlds",
      "Cosmology: The Big Bang Theory",
      "Radio Astronomy",
      "Astrophotography for Beginners",
      "Astrobiology: Life in the Universe",
      "Gravitational Waves",
      "Comets, Asteroids, and Meteors",
      "The Milky Way Galaxy",
      "Stargazing for Beginners",
    ],
    "Study Materials": [
      "Organic Chemistry Study Guide",
      "Study Skills for STEM Students",
      "Exam Preparation Techniques",
      "Note-Taking Strategies",
      "Time Management for Students",
      "Memory Improvement Techniques",
      "Critical Thinking Skills",
      "Research Paper Writing Guide",
      "Scientific Method Explained",
      "Laboratory Safety Guidelines",
      "STEM Career Planning",
      "Scholarship Application Guide",
      "College Application Essays",
      "Scientific Literature Review",
      "Technical Writing Guidelines",
      "Presentation Skills for STEM",
      "Collaboration in STEM Projects",
      "Math Problem-Solving Strategies",
      "Science Fair Project Ideas",
      "STEM Internship Preparation",
    ],
  };

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

  let resources = [];
  let id = 1;

  // Helper function to get subcategory for a resource
  const getSubcategoryForResource = (category: string, index: number) => {
    switch(category) {
      case "Programming": 
        return programmingSubcategories[index % programmingSubcategories.length];
      case "Science": 
        return scienceSubcategories[index % scienceSubcategories.length];
      case "Mathematics": 
        return mathematicsSubcategories[index % mathematicsSubcategories.length];
      case "AI & Machine Learning": 
        return aiSubcategories[index % aiSubcategories.length];
      case "Astronomy": 
        return astronomySubcategories[index % astronomySubcategories.length];
      case "Study Materials": 
        return studySubcategories[index % studySubcategories.length];
      default: 
        return "";
    }
  };

  // Generate resources for each category
  Object.entries(resourceTitles).forEach(([category, titles]) => {
    const getIconComponent = () => {
      if (category === "Programming") return <Code className="h-8 w-8 text-brand-blue" />;
      if (category === "Science") return <TestTube className="h-8 w-8 text-brand-orange" />;
      if (category === "Mathematics") return <Calculator className="h-8 w-8 text-brand-blue" />;
      if (category === "AI & Machine Learning") return <BrainCircuit className="h-8 w-8 text-brand-orange" />;
      if (category === "Astronomy") return <Telescope className="h-8 w-8 text-brand-blue" />;
      return <BookOpen className="h-8 w-8 text-brand-orange" />;
    };

    // Create multiple variations of each title with different difficulty levels and types
    titles.forEach((title, titleIndex) => {
      const subcategory = getSubcategoryForResource(category, titleIndex);
      const levels = ["Beginner", "Intermediate", "Advanced"];
      const types = ["Tutorial", "Course", "Article", "Practice", "Study Guide", "Experiment", "Guide"];
      
      levels.forEach(level => {
        types.forEach(type => {
          // Add multiple resources for each combination
          for (let i = 0; i < 3; i++) {
            resources.push({
              id: id++,
              title: i === 0 ? title : `${title} (${i + 1})`,
              description: descriptions[Math.floor(Math.random() * descriptions.length)],
              category,
              subcategory,
              icon: getIconComponent(),
              level,
              type,
              views: Math.floor(Math.random() * 5000) + 100,
              rating: (Math.floor(Math.random() * 10) + 38) / 10, // Random rating between 3.8 and 4.8
              duration: ["Self-paced", "2 hours", "4 hours", "8 hours", "12 hours"][Math.floor(Math.random() * 5)],
              updatedDate: `${["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][Math.floor(Math.random() * 12)]} ${2023}`
            });
          }
        });
      });
    });
  });

  return resources;
};

export const resourcesData = generateResources();

// Define grouped subcategories for filtering
export const subjectCategories = {
  "All": ["All"],
  "Programming": programmingSubcategories,
  "Science": scienceSubcategories,
  "Mathematics": mathematicsSubcategories,
  "AI & Machine Learning": aiSubcategories,
  "Astronomy": astronomySubcategories,
  "Study Materials": studySubcategories,
};

// Get all unique subcategories
export const getAllSubcategories = () => {
  return [
    "All",
    ...programmingSubcategories,
    ...scienceSubcategories,
    ...mathematicsSubcategories,
    ...aiSubcategories,
    ...astronomySubcategories,
    ...studySubcategories
  ];
};

// Get all resource types
export const resourceTypes = ["All", "Tutorial", "Course", "Article", "Practice", "Study Guide", "Experiment", "Guide"];

// Get all difficulty levels
export const difficultyLevels = ["All", "Beginner", "Intermediate", "Advanced"];

// General guidance categories
export const guidanceCategories = [
  {
    title: "Study Habits",
    icon: React.createElement(Book, { className: "h-5 w-5 text-brand-blue" }),
    description: "Develop effective study routines and habits for academic success"
  },
  {
    title: "Time Management",
    icon: React.createElement(Clock, { className: "h-5 w-5 text-brand-orange" }),
    description: "Strategies for balancing school, activities, and personal time"
  },
  {
    title: "Note-Taking",
    icon: React.createElement(BookText, { className: "h-5 w-5 text-brand-blue" }),
    description: "Methods for taking organized, effective notes that enhance learning"
  },
  {
    title: "Test Preparation",
    icon: React.createElement(Presentation, { className: "h-5 w-5 text-brand-orange" }),
    description: "Techniques for effective exam preparation and reduced test anxiety"
  },
  {
    title: "Career Planning",
    icon: React.createElement(GraduationCap, { className: "h-5 w-5 text-brand-blue" }),
    description: "Guidance for exploring STEM careers and planning your path"
  },
  {
    title: "Learning Strategies",
    icon: React.createElement(Lightbulb, { className: "h-5 w-5 text-brand-orange" }),
    description: "Effective techniques to improve comprehension and retention"
  }
];
