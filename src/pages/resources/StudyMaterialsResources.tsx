
import React from "react";
import { BookOpen } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";

// Sample study materials resources
const studyMaterialsResources = [
  {
    id: "study-1",
    title: "OpenStax Textbooks",
    type: "Textbook Collection",
    level: "College",
    source: "Rice University",
    description: "Free, peer-reviewed textbooks covering biology, chemistry, physics, mathematics, and other STEM subjects. High-quality resources used by millions of students and faculty.",
    link: "https://openstax.org/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Textbooks", "College-Level", "Comprehensive", "Multiple Subjects"],
    featured: true
  },
  {
    id: "study-2",
    title: "MIT OpenCourseWare",
    type: "Course Materials",
    level: "College",
    source: "Massachusetts Institute of Technology",
    description: "Free publication of MIT course materials including lecture notes, problem sets, exams, and videos from thousands of MIT courses across all departments.",
    link: "https://ocw.mit.edu/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Course Materials", "Lectures", "Problem Sets", "Higher Education"],
    featured: true
  },
  {
    id: "study-3",
    title: "edX STEM Courses",
    type: "Online Courses",
    level: "All Levels",
    source: "edX",
    description: "Free and paid STEM courses from top universities around the world. Includes computer science, engineering, mathematics, biology, chemistry, and physics.",
    link: "https://www.edx.org/search?subject=Science",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Online Courses", "Multiple Subjects", "University-Level", "Certificates"],
    featured: false
  },
  {
    id: "study-4",
    title: "MERLOT",
    type: "Resource Collection",
    level: "All Levels",
    source: "California State University",
    description: "Curated collection of free and open online teaching, learning, and faculty development materials in STEM disciplines. Includes simulations, tutorials, and exercises.",
    link: "https://www.merlot.org/merlot/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Teaching Materials", "Learning Materials", "Multi-format", "Peer-Reviewed"],
    featured: false
  },
  {
    id: "study-5",
    title: "CK-12",
    type: "Interactive Textbooks",
    level: "K-12",
    source: "CK-12 Foundation",
    description: "Free digital textbooks, practice exercises, and resources for K-12 STEM subjects. Interactive content with videos, simulations, and real-world applications.",
    link: "https://www.ck12.org/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["K-12", "Interactive", "Digital Textbooks", "Practice Problems"],
    featured: true
  },
  {
    id: "study-6",
    title: "LibreTexts",
    type: "Open Textbooks",
    level: "College",
    source: "LibreTexts Consortium",
    description: "Free, customizable open textbooks for chemistry, biology, physics, mathematics, statistics, and engineering. Developed through multi-institutional collaboration.",
    link: "https://libretexts.org/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Textbooks", "Open Educational Resources", "Customizable", "College-Level"],
    featured: false
  },
  {
    id: "study-7",
    title: "PLOS Biology",
    type: "Academic Journal",
    level: "Advanced",
    source: "Public Library of Science",
    description: "Open-access journal publishing research in all areas of biological science. Access peer-reviewed papers on cutting-edge biological and medical research.",
    link: "https://journals.plos.org/plosbiology/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Research Papers", "Biology", "Open Access", "Academic"],
    featured: false
  },
  {
    id: "study-8",
    title: "NIST Digital Library of Mathematical Functions",
    type: "Reference Resource",
    level: "Advanced",
    source: "National Institute of Standards and Technology",
    description: "Comprehensive reference on special functions and their applications. Includes formulas, visualizations, references, and downloadable data for mathematical functions.",
    link: "https://dlmf.nist.gov/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Mathematics", "Reference", "Special Functions", "Formulas"],
    featured: false
  },
  {
    id: "study-9",
    title: "PhET Interactive Simulations",
    type: "Simulations",
    level: "All Levels",
    source: "University of Colorado Boulder",
    description: "Free interactive simulations for physics, chemistry, biology, and mathematics. Engaging, game-like environments enable exploration of STEM phenomena.",
    link: "https://phet.colorado.edu/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Simulations", "Interactive", "Multiple Subjects", "Visual Learning"],
    featured: false
  },
  {
    id: "study-10",
    title: "Digital Public Library of America",
    type: "Digital Archive",
    level: "All Levels",
    source: "DPLA",
    description: "Free access to millions of items from libraries, archives, and museums, including historical scientific documents, images, and research materials.",
    link: "https://dp.la/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Digital Archive", "Historical Documents", "Research Materials", "Multiple Formats"],
    featured: false
  }
];

const StudyMaterialsResources: React.FC = () => {
  const relatedCategories = [
    { name: "Academic Success", path: "/resources/academic-success" },
    { name: "Mathematics", path: "/resources/mathematics" },
    { name: "Science", path: "/resources/science" }
  ];

  return (
    <ResourcePageTemplate
      title="Study Materials"
      description="Access a comprehensive collection of high-quality STEM study materials including textbooks, lecture notes, problem sets, interactive simulations, and reference materials from leading educational institutions and publishers."
      icon={<BookOpen className="h-10 w-10 text-brand-orange" />}
      resources={studyMaterialsResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-orange-100/30 dark:from-orange-950/30"
    />
  );
};

export default StudyMaterialsResources;
