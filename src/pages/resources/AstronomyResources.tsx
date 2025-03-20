
import React from "react";
import { Telescope } from "lucide-react";
import ResourcePageTemplate from "@/components/resources/ResourcePageTemplate";

// Sample astronomy resources
const astronomyResources = [
  {
    id: "astro-1",
    title: "NASA's Space Place",
    type: "Interactive Website",
    level: "Beginner",
    source: "NASA",
    description: "NASA's educational resource with interactive games, activities, and articles about astronomy and space science for students. Covers planets, stars, galaxies, and space exploration.",
    link: "https://spaceplace.nasa.gov/",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Space", "Planets", "Solar System", "Interactive"],
    featured: true
  },
  {
    id: "astro-2",
    title: "Astronomy Picture of the Day",
    type: "Daily Resource",
    level: "All Levels",
    source: "NASA",
    description: "Each day a different image or photograph of our universe is featured, along with a brief explanation written by a professional astronomer. Archive dates back to 1995.",
    link: "https://apod.nasa.gov/apod/",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Astrophotography", "Daily Content", "Cosmos", "Explanations"],
    featured: true
  },
  {
    id: "astro-3",
    title: "Introduction to Astronomy",
    type: "Online Course",
    level: "Beginner to Intermediate",
    source: "Duke University (Coursera)",
    description: "Comprehensive introduction to astronomy covering the scale of the universe, viewing the sky, the solar system, stars, galaxies, and modern research topics.",
    link: "https://www.coursera.org/learn/astronomy",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Comprehensive", "Solar System", "Stars", "Galaxies"],
    featured: false
  },
  {
    id: "astro-4",
    title: "Stellarium",
    type: "Software",
    level: "All Levels",
    source: "Stellarium.org",
    description: "Free open source planetarium software that shows a realistic 3D sky. Visualize stars, constellations, planets, and celestial objects as they appear from any location on Earth.",
    link: "https://stellarium.org/",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Planetarium", "Software", "Stargazing", "3D Visualization"],
    featured: false
  },
  {
    id: "astro-5",
    title: "Crash Course Astronomy",
    type: "Video Series",
    level: "Beginner to Intermediate",
    source: "PBS Digital Studios",
    description: "Engaging video series covering all aspects of astronomy. Host Phil Plait explains complex concepts in accessible ways with high-quality visualizations.",
    link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Video Series", "Comprehensive", "Visual Learning"],
    featured: true
  },
  {
    id: "astro-6",
    title: "NASA's Eyes",
    type: "Interactive Tool",
    level: "All Levels",
    source: "NASA",
    description: "Visualize NASA's fleet of Earth-observing spacecraft, the solar system, exoplanets, and more in 3D. See real-time data and mission details with interactive controls.",
    link: "https://eyes.nasa.gov/",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Interactive", "3D Visualization", "Space Missions", "Solar System"],
    featured: false
  },
  {
    id: "astro-7",
    title: "The Cosmos: Astronomy in the New Millennium",
    type: "Textbook",
    level: "College",
    source: "OpenStax",
    description: "Comprehensive astronomy textbook covering the solar system, stars, galaxies, cosmology, and astrobiology. Includes images, diagrams, and review questions.",
    link: "https://openstax.org/details/books/astronomy",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Textbook", "Comprehensive", "College-Level"],
    featured: false
  },
  {
    id: "astro-8",
    title: "Sky & Telescope",
    type: "Magazine & Website",
    level: "All Levels",
    source: "Sky & Telescope",
    description: "Leading resource for amateur astronomers with observing guides, equipment reviews, astrophotography tips, and current astronomical events and discoveries.",
    link: "https://skyandtelescope.org/",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Amateur Astronomy", "Stargazing", "Equipment", "Current Events"],
    featured: false
  },
  {
    id: "astro-9",
    title: "Zooniverse Astronomy Projects",
    type: "Citizen Science",
    level: "All Levels",
    source: "Zooniverse",
    description: "Participate in real astronomy research through citizen science projects. Help classify galaxies, find exoplanets, and identify features on the surfaces of planets.",
    link: "https://www.zooniverse.org/projects?discipline=astronomy&page=1",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Citizen Science", "Research Participation", "Classification", "Collaborative"],
    featured: false
  },
  {
    id: "astro-10",
    title: "HubbleSite",
    type: "Resource Collection",
    level: "All Levels",
    source: "NASA/STScI",
    description: "Official website of the Hubble Space Telescope with news, images, videos, and educational materials. Includes resources for educators and interactive tools.",
    link: "https://hubblesite.org/",
    icon: <Telescope className="h-5 w-5" />,
    tags: ["Hubble", "Space Telescope", "Images", "Space Science"],
    featured: false
  }
];

const AstronomyResources: React.FC = () => {
  const relatedCategories = [
    { name: "Science", path: "/resources/science" },
    { name: "Mathematics", path: "/resources/mathematics" },
    { name: "Research Skills", path: "/resources/research-skills" }
  ];

  return (
    <ResourcePageTemplate
      title="Astronomy Resources"
      description="Explore the universe with our collection of astronomy and space science resources. From interactive planetarium software and stargazing guides to courses on astrophysics and cosmology. Discover the wonders of our solar system and beyond."
      icon={<Telescope className="h-10 w-10 text-brand-blue" />}
      resources={astronomyResources}
      relatedCategories={relatedCategories}
      headerBackgroundClass="from-indigo-100/30 dark:from-indigo-950/30"
    />
  );
};

export default AstronomyResources;
