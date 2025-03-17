
import { StemResource } from "@/types/resource";

export const stemResources: StemResource[] = [
  // Math Resources
  {
    id: "math-001",
    title: "3Blue1Brown - Essence of Calculus",
    description: "A visual and intuitive approach to understanding calculus concepts with beautiful animations and clear explanations.",
    type: "playlist",
    difficulty: "intermediate",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr",
    imageUrl: "https://i.ytimg.com/vi/WUvTyaaNkzM/maxresdefault.jpg",
    author: "Grant Sanderson",
    subjects: ["math"],
    subcategories: ["calculus"],
    tags: ["calculus", "visualization", "series", "derivatives", "integrals"],
    rating: 4.9,
    featured: true,
    isFree: true
  },
  {
    id: "math-002",
    title: "Khan Academy - Linear Algebra",
    description: "Comprehensive course covering vectors, matrices, transformations, and other linear algebra concepts with practice problems.",
    type: "course",
    difficulty: "intermediate",
    url: "https://www.khanacademy.org/math/linear-algebra",
    imageUrl: "https://cdn.kastatic.org/images/khan-logo-vertical-transparent.png",
    author: "Khan Academy",
    subjects: ["math"],
    subcategories: ["algebra"],
    tags: ["linear algebra", "vectors", "matrices", "transformations"],
    rating: 4.8,
    isFree: true
  },
  {
    id: "math-003",
    title: "Paul's Online Math Notes",
    description: "A collection of free math notes and tutorials covering algebra, calculus, differential equations, and more.",
    type: "website",
    difficulty: "all-levels",
    url: "https://tutorial.math.lamar.edu/",
    author: "Paul Dawkins",
    subjects: ["math"],
    subcategories: ["algebra", "calculus", "discrete-math"],
    tags: ["notes", "tutorials", "reference"],
    rating: 4.7,
    isFree: true
  },
  {
    id: "math-004",
    title: "MIT OpenCourseWare - Single Variable Calculus",
    description: "Complete course materials including video lectures, notes, and problem sets from MIT's calculus course.",
    type: "course",
    difficulty: "intermediate",
    url: "https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/",
    imageUrl: "https://ocw.mit.edu/images/ocw_mast.png",
    author: "MIT",
    publishedDate: "2006",
    subjects: ["math"],
    subcategories: ["calculus"],
    tags: ["university course", "lectures", "problem sets"],
    rating: 4.9,
    featured: true,
    isFree: true
  },
  {
    id: "math-005",
    title: "Desmos Graphing Calculator",
    description: "Interactive online graphing calculator for visualizing functions, plotting data, and exploring mathematical relationships.",
    type: "tool",
    difficulty: "all-levels",
    url: "https://www.desmos.com/calculator",
    imageUrl: "https://s3.amazonaws.com/desmos/img/calc_thumb.png",
    author: "Desmos",
    subjects: ["math"],
    subcategories: ["algebra", "calculus", "geometry"],
    tags: ["graphing", "visualization", "interactive"],
    rating: 4.9,
    isFree: true
  },
  
  // Science Resources
  {
    id: "science-001",
    title: "Crash Course - Physics",
    description: "Fast-paced but thorough introduction to fundamental physics concepts with engaging animations and explanations.",
    type: "playlist",
    difficulty: "beginner",
    url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN0ge7yDk_UA0ldZJdhwkoV",
    imageUrl: "https://i.ytimg.com/vi/ZM8ECpBuQYE/maxresdefault.jpg",
    author: "Crash Course",
    subjects: ["science"],
    subcategories: ["physics"],
    tags: ["physics", "mechanics", "electricity", "magnetism", "thermodynamics"],
    rating: 4.8,
    featured: true,
    isFree: true
  },
  {
    id: "science-002",
    title: "Nature Journal",
    description: "One of the world's leading scientific journals publishing research across all fields of science and technology.",
    type: "website",
    difficulty: "advanced",
    url: "https://www.nature.com/",
    imageUrl: "https://media.springernature.com/full/nature-cms/uploads/product/nature/header-86f1263ea01eccd46b530284be10585e.svg",
    author: "Springer Nature",
    subjects: ["science"],
    subcategories: ["physics", "chemistry", "biology"],
    tags: ["research", "journal", "peer-reviewed"],
    rating: 4.9,
    isFree: false
  },
  {
    id: "science-003",
    title: "NASA Climate Change Resources",
    description: "Educational resources, data, and visualizations about climate science and Earth's changing climate system.",
    type: "website",
    difficulty: "all-levels",
    url: "https://climate.nasa.gov/resources/",
    imageUrl: "https://climate.nasa.gov/img/layout/climate_nasa_gov_logo@2x.png",
    author: "NASA",
    subjects: ["science"],
    subcategories: ["earth-science", "environmental-science"],
    tags: ["climate change", "earth science", "data visualization"],
    rating: 4.7,
    isFree: true
  },
  {
    id: "science-004",
    title: "The Feynman Lectures on Physics",
    description: "Classic lectures by Nobel Prize-winning physicist Richard Feynman, covering the fundamentals of physics.",
    type: "book",
    difficulty: "intermediate",
    url: "https://www.feynmanlectures.caltech.edu/",
    imageUrl: "https://feynmanlectures.caltech.edu/cover.jpg",
    author: "Richard Feynman",
    publishedDate: "1964",
    subjects: ["science"],
    subcategories: ["physics"],
    tags: ["lectures", "mechanics", "quantum physics", "classic"],
    rating: 4.9,
    featured: true,
    isFree: true
  },
  {
    id: "science-005",
    title: "ChemCollective Virtual Labs",
    description: "Interactive virtual chemistry labs and simulations for practicing lab techniques and understanding chemical concepts.",
    type: "tool",
    difficulty: "intermediate",
    url: "http://chemcollective.org/vlabs",
    author: "ChemCollective",
    subjects: ["science"],
    subcategories: ["chemistry"],
    tags: ["simulation", "virtual lab", "interactive", "experiments"],
    rating: 4.6,
    isFree: true
  },
  
  // Technology Resources
  {
    id: "tech-001",
    title: "freeCodeCamp - Full Stack Web Development",
    description: "Comprehensive curriculum teaching HTML, CSS, JavaScript, and more with interactive coding challenges and projects.",
    type: "course",
    difficulty: "beginner",
    url: "https://www.freecodecamp.org/learn/",
    imageUrl: "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
    author: "freeCodeCamp",
    subjects: ["technology"],
    subcategories: ["web-development", "programming"],
    tags: ["coding", "javascript", "html", "css", "projects"],
    rating: 4.8,
    featured: true,
    isFree: true
  },
  {
    id: "tech-002",
    title: "CS50's Introduction to Computer Science",
    description: "Harvard University's introduction to computer science and programming covering algorithms, data structures, and more.",
    type: "course",
    difficulty: "intermediate",
    url: "https://cs50.harvard.edu/x/",
    imageUrl: "https://pll.harvard.edu/sites/default/files/styles/16_9_large/public/course/CS50x_pll.png",
    author: "Harvard University",
    subjects: ["technology"],
    subcategories: ["programming"],
    tags: ["computer science", "algorithms", "C", "Python", "SQL"],
    rating: 4.9,
    featured: true,
    isFree: true
  },
  {
    id: "tech-003",
    title: "Fast.ai - Practical Deep Learning for Coders",
    description: "Hands-on approach to deep learning with practical applications using PyTorch.",
    type: "course",
    difficulty: "intermediate",
    url: "https://course.fast.ai/",
    imageUrl: "https://course.fast.ai/images/fastai_logo.png",
    author: "Jeremy Howard & Rachel Thomas",
    subjects: ["technology"],
    subcategories: ["artificial-intelligence", "data-science"],
    tags: ["deep learning", "machine learning", "neural networks", "pytorch"],
    rating: 4.8,
    featured: true,
    isFree: true
  },
  {
    id: "tech-004",
    title: "GitHub Learning Lab",
    description: "Interactive courses to learn GitHub and developer workflows with hands-on practice.",
    type: "tool",
    difficulty: "beginner",
    url: "https://lab.github.com/",
    imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    author: "GitHub",
    subjects: ["technology"],
    subcategories: ["programming", "web-development"],
    tags: ["git", "version control", "collaboration", "open source"],
    rating: 4.7,
    isFree: true
  },
  {
    id: "tech-005",
    title: "Kaggle Learn - Data Science Courses",
    description: "Practical courses on machine learning, data visualization, and other data science topics with hands-on exercises.",
    type: "course",
    difficulty: "intermediate",
    url: "https://www.kaggle.com/learn",
    imageUrl: "https://www.kaggle.com/static/images/site-logo.png",
    author: "Kaggle",
    subjects: ["technology"],
    subcategories: ["data-science", "artificial-intelligence"],
    tags: ["python", "machine learning", "data visualization", "pandas"],
    rating: 4.7,
    isFree: true
  },
  
  // Engineering Resources
  {
    id: "eng-001",
    title: "MIT OpenCourseWare - Introduction to Aerospace Engineering",
    description: "Complete course materials from MIT's introductory aerospace engineering class with lecture notes and assignments.",
    type: "course",
    difficulty: "intermediate",
    url: "https://ocw.mit.edu/courses/aeronautics-and-astronautics/16-00-introduction-to-aerospace-engineering-and-design-spring-2003/",
    imageUrl: "https://ocw.mit.edu/images/ocw_mast.png",
    author: "MIT",
    publishedDate: "2003",
    subjects: ["engineering"],
    subcategories: ["aerospace"],
    tags: ["aerospace", "design", "engineering principles"],
    rating: 4.8,
    isFree: true
  },
  {
    id: "eng-002",
    title: "Practical Engineering YouTube Channel",
    description: "Engaging videos explaining civil engineering concepts with real-world demonstrations and experiments.",
    type: "channel",
    difficulty: "all-levels",
    url: "https://www.youtube.com/c/PracticalEngineeringChannel",
    imageUrl: "https://yt3.googleusercontent.com/ytc/AGIKgqOUlOHgj9I9i9aHIJMUAMbAKXj0h8BI-cafV3GNZg=s176-c-k-c0x00ffffff-no-rj",
    author: "Grady Hillhouse",
    subjects: ["engineering"],
    subcategories: ["civil"],
    tags: ["infrastructure", "hydraulics", "structural engineering", "demonstrations"],
    rating: 4.9,
    featured: true,
    isFree: true
  },
  {
    id: "eng-003",
    title: "Engineering Toolbox",
    description: "Comprehensive reference site with formulas, calculators, and technical data for various engineering disciplines.",
    type: "website",
    difficulty: "all-levels",
    url: "https://www.engineeringtoolbox.com/",
    author: "Engineering ToolBox",
    subjects: ["engineering"],
    subcategories: ["mechanical", "electrical", "civil", "chemical"],
    tags: ["reference", "calculations", "formulas", "technical data"],
    rating: 4.7,
    isFree: true
  },
  {
    id: "eng-004",
    title: "Circuit Simulator - TinkerCAD",
    description: "Online tool for designing and simulating electronic circuits with a user-friendly interface.",
    type: "tool",
    difficulty: "beginner",
    url: "https://www.tinkercad.com/circuits",
    imageUrl: "https://www.tinkercad.com/img/tinkercad-lockup.svg",
    author: "Autodesk",
    subjects: ["engineering"],
    subcategories: ["electrical"],
    tags: ["simulation", "electronics", "circuits", "design"],
    rating: 4.6,
    isFree: true
  },
  {
    id: "eng-005",
    title: "Engineering Ethics: An Industrial Perspective",
    description: "Comprehensive PDF examining real-world ethical challenges in engineering practice with case studies.",
    type: "pdf",
    difficulty: "intermediate",
    url: "https://www.sciencedirect.com/book/9780120885756/engineering-ethics",
    author: "Gail Baura",
    publishedDate: "2006",
    subjects: ["engineering"],
    subcategories: ["mechanical", "electrical", "civil", "chemical", "biomedical", "aerospace", "environmental"],
    tags: ["ethics", "professional practice", "case studies"],
    rating: 4.5,
    isFree: false
  }
];

// Filter functions to get resources by different criteria
export const getResourcesBySubject = (subject: string): StemResource[] => {
  return stemResources.filter(resource => 
    resource.subjects.includes(subject as any)
  );
};

export const getResourcesByType = (type: string): StemResource[] => {
  return stemResources.filter(resource => 
    resource.type === type
  );
};

export const getFeaturedResources = (): StemResource[] => {
  return stemResources.filter(resource => 
    resource.featured === true
  );
};

export const getResourcesByDifficulty = (difficulty: string): StemResource[] => {
  return stemResources.filter(resource => 
    resource.difficulty === difficulty || resource.difficulty === "all-levels"
  );
};

export const getResourcesBySubcategory = (subcategory: string): StemResource[] => {
  return stemResources.filter(resource => 
    resource.subcategories.includes(subcategory as any)
  );
};

export const getRelatedResources = (resource: StemResource, limit: number = 3): StemResource[] => {
  // Get resources with similar subjects or subcategories
  const related = stemResources.filter(r => 
    r.id !== resource.id && (
      r.subjects.some(subject => resource.subjects.includes(subject)) ||
      r.subcategories.some(subcat => resource.subcategories.includes(subcat as any))
    )
  );
  
  // Sort by most relevant (most matching tags)
  return related
    .sort((a, b) => {
      const aMatchingTags = a.tags.filter(tag => resource.tags.includes(tag)).length;
      const bMatchingTags = b.tags.filter(tag => resource.tags.includes(tag)).length;
      return bMatchingTags - aMatchingTags;
    })
    .slice(0, limit);
};
