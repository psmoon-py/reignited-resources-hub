
import React from "react";
import { Lightbulb } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";

// Sample data for passionate projects
const projectsResources = [
  {
    id: "proj-1",
    title: "How to Find and Develop Your STEM Passion Project",
    type: "Guide",
    level: "All Levels",
    source: "MIT Admissions",
    description: "Comprehensive guide to identifying your interests, turning them into meaningful projects, and developing them into impactful experiences for both learning and college applications.",
    link: "https://mitadmissions.org/blogs/entry/how-to-prepare-for-mit/",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Passion Projects", "College Applications", "STEM Projects", "Personal Development"],
    featured: true
  },
  {
    id: "proj-2",
    title: "Science Fair Project Ideas",
    type: "Resource Library",
    level: "Middle/High School",
    source: "Science Buddies",
    description: "Over 1,200 free science fair project ideas across all STEM disciplines. Includes step-by-step guides, materials lists, and difficulty ratings for each project.",
    link: "https://www.sciencebuddies.org/science-fair-projects/science-projects",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Science Fair", "Project Ideas", "Hands-on", "K-12"],
    featured: true
  },
  {
    id: "proj-3",
    title: "GitHub Student Developer Pack",
    type: "Developer Tools",
    level: "High School/College",
    source: "GitHub Education",
    description: "Free access to developer tools and services for students. Build your coding projects with professional tools including GitHub Pro, Microsoft Azure, DigitalOcean, and many more.",
    link: "https://education.github.com/pack",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Programming", "Developer Tools", "Free Resources", "Project Development"],
    featured: false
  },
  {
    id: "proj-4",
    title: "Building a Research Project from Scratch",
    type: "Video Series",
    level: "High School/College",
    source: "iBiology",
    description: "Series on how to develop a research question, design experiments, collect and analyze data, and present your findings - skills essential for any serious STEM project.",
    link: "https://www.ibiology.org/resource/planning-your-scientific-journey/",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Research Methods", "Experimental Design", "Scientific Process"],
    featured: false
  },
  {
    id: "proj-5",
    title: "Resume Building for STEM Students",
    type: "Guide",
    level: "High School/College",
    source: "STEM Jobs",
    description: "How to create effective resumes highlighting STEM skills, projects, and experiences. Includes templates and examples tailored to different STEM fields.",
    link: "https://stemjobs.com/stem-resume-sample",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Resume", "Career Development", "Job Applications", "Professional Skills"],
    featured: true
  },
  {
    id: "proj-6",
    title: "Kaggle Competitions",
    type: "Data Science Projects",
    level: "Intermediate to Advanced",
    source: "Kaggle",
    description: "Participate in data science competitions to solve real-world problems, build your portfolio, and possibly win prizes. Great for developing practical machine learning skills.",
    link: "https://www.kaggle.com/competitions",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Data Science", "Machine Learning", "Competitions", "Portfolio Building"],
    featured: false
  },
  {
    id: "proj-7",
    title: "Arduino Project Hub",
    type: "Electronics Projects",
    level: "All Levels",
    source: "Arduino",
    description: "Collection of projects using Arduino microcontrollers. Browse by category, difficulty, or hardware to find electronics and programming projects that match your interests.",
    link: "https://create.arduino.cc/projecthub",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Arduino", "Electronics", "DIY", "Hands-on Projects"],
    featured: false
  },
  {
    id: "proj-8",
    title: "LinkedIn Profile Guide for STEM Students",
    type: "Career Guide",
    level: "College",
    source: "LinkedIn Learning",
    description: "Create an effective LinkedIn profile that showcases your STEM skills, projects, and educational background to attract opportunities and build your professional network.",
    link: "https://www.linkedin.com/learning/learning-linkedin-for-students",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["LinkedIn", "Professional Profile", "Networking", "Career Development"],
    featured: false
  },
  {
    id: "proj-9",
    title: "ProjectBoard: Science and Engineering Fair Platform",
    type: "Project Platform",
    level: "High School/College",
    source: "Engineering.com",
    description: "Digital platform for showcasing STEM projects, connecting with peers, and entering competitions. Create multimedia presentations of your work and get feedback.",
    link: "https://projectboard.engineering.com/",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Project Showcase", "Science Fair", "Engineering Projects", "Peer Feedback"],
    featured: false
  },
  {
    id: "proj-10",
    title: "STEM Career Exploration Tool",
    type: "Interactive Resource",
    level: "All Levels",
    source: "National Science Foundation",
    description: "Interactive tool to explore different STEM careers, required education, work environments, and salary information. Helps you align projects and studies with career goals.",
    link: "https://www.nsf.gov/news/classroom/stem-careers.jsp",
    icon: <Lightbulb className="h-5 w-5" />,
    tags: ["Career Exploration", "STEM Careers", "Professional Development", "Education Planning"],
    featured: false
  }
];

const ProjectsResources: React.FC = () => {
  const relatedCategories = [
    { name: "Research Skills", path: "/resources/research-skills" },
    { name: "Networking", path: "/resources/networking" },
    { name: "Academic Success", path: "/resources/academic-success" }
  ];

  return (
    <ResourcePageTemplate
      title="Projects & Career Resources"
      description="Discover resources for developing meaningful STEM projects, building your resume, exploring career paths, and creating a professional presence. From passion projects to research initiatives, find guides and tools to showcase your skills."
      icon={<Lightbulb className="h-10 w-10 text-brand-orange" />}
      resources={projectsResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-yellow-100/30 dark:from-yellow-950/30"
    />
  );
};

export default ProjectsResources;
