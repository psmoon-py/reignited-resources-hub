
// Types
export type OpportunityType = "competition" | "hackathon" | "internship" | "scholarship";
export type StatusType = "active" | "expired" | "upcoming";
export type EducationLevel = "middleSchool" | "highSchool" | "undergraduate";

export interface Opportunity {
  id: string;
  title: string;
  organization: string;
  description: string;
  type: OpportunityType;
  registrationOpens: string;
  deadline: string;
  location: string;
  eligibleEducationLevels: EducationLevel[];
  status: StatusType;
  link: string;
}

// Helper functions to generate dates
const today = new Date();
const getDateString = (daysFromNow: number): string => {
  const date = new Date(today);
  date.setDate(date.getDate() + daysFromNow);
  return date.toISOString();
};

// Mock data
export const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "International Science Olympiad",
    organization: "Global Science Foundation",
    description: "Compete with students worldwide in various scientific disciplines and win scholarships and recognition.",
    type: "competition",
    registrationOpens: getDateString(-30),
    deadline: getDateString(30),
    location: "Virtual",
    eligibleEducationLevels: ["middleSchool", "highSchool", "undergraduate"],
    status: "active",
    link: "https://example.com/science-olympiad"
  },
  {
    id: "2",
    title: "NASA Summer Research Program",
    organization: "NASA",
    description: "Gain hands-on experience working with NASA scientists on cutting-edge space research projects.",
    type: "internship",
    registrationOpens: getDateString(-60),
    deadline: getDateString(-15),
    location: "Houston, TX",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "expired",
    link: "https://example.com/nasa-program"
  },
  {
    id: "3",
    title: "STEM Excellence Scholarship",
    organization: "STEM Foundation",
    description: "Full-ride scholarships for underprivileged students pursuing STEM degrees at top universities.",
    type: "scholarship",
    registrationOpens: getDateString(-45),
    deadline: getDateString(45),
    location: "Multiple Locations",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "active",
    link: "https://example.com/stem-scholarship"
  },
  {
    id: "4",
    title: "Global Solutions Hackathon",
    organization: "Tech for Good",
    description: "48-hour coding challenge to develop innovative solutions for global environmental problems.",
    type: "hackathon",
    registrationOpens: getDateString(15),
    deadline: getDateString(60),
    location: "Virtual",
    eligibleEducationLevels: ["middleSchool", "highSchool", "undergraduate"],
    status: "upcoming",
    link: "https://example.com/global-hackathon"
  },
  {
    id: "5",
    title: "Microsoft Research Internship",
    organization: "Microsoft",
    description: "Work with leading researchers on cutting-edge AI and machine learning technologies.",
    type: "internship",
    registrationOpens: getDateString(-90),
    deadline: getDateString(10),
    location: "Redmond, WA",
    eligibleEducationLevels: ["undergraduate"],
    status: "active",
    link: "https://example.com/microsoft-internship"
  },
  {
    id: "6",
    title: "Women in STEM Scholarship",
    organization: "Women in Tech Foundation",
    description: "Supporting women pursuing degrees in STEM fields with financial assistance and mentorship.",
    type: "scholarship",
    registrationOpens: getDateString(-120),
    deadline: getDateString(75),
    location: "Nationwide",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "active",
    link: "https://example.com/women-stem-scholarship"
  },
  {
    id: "7",
    title: "Robotics World Championship",
    organization: "Robotics Education Association",
    description: "Showcase your robotics innovations and compete for prizes and industry recognition.",
    type: "competition",
    registrationOpens: getDateString(30),
    deadline: getDateString(120),
    location: "Tokyo, Japan",
    eligibleEducationLevels: ["middleSchool", "highSchool", "undergraduate"],
    status: "upcoming",
    link: "https://example.com/robotics-championship"
  },
  {
    id: "8",
    title: "Google Summer of Code",
    organization: "Google",
    description: "Work on open source projects and get paid while learning from experienced mentors.",
    type: "internship",
    registrationOpens: getDateString(-150),
    deadline: getDateString(-30),
    location: "Remote",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "expired",
    link: "https://example.com/google-summer-code"
  },
  {
    id: "9",
    title: "Quantum Computing Hackathon",
    organization: "IBM Quantum",
    description: "Explore quantum computing applications and develop solutions using IBM's quantum platform.",
    type: "hackathon",
    registrationOpens: getDateString(-10),
    deadline: getDateString(40),
    location: "Virtual",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "active",
    link: "https://example.com/quantum-hackathon"
  },
  {
    id: "10",
    title: "National Merit Scholarship",
    organization: "National Merit Scholarship Corporation",
    description: "Recognition and scholarships for academically talented U.S. high school students.",
    type: "scholarship",
    registrationOpens: getDateString(-200),
    deadline: getDateString(-60),
    location: "United States",
    eligibleEducationLevels: ["highSchool"],
    status: "expired",
    link: "https://example.com/national-merit"
  },
  {
    id: "11",
    title: "SpaceX Hyperloop Pod Competition",
    organization: "SpaceX",
    description: "Design and build a scaled prototype transport vehicle for the Hyperloop concept.",
    type: "competition",
    registrationOpens: getDateString(-40),
    deadline: getDateString(90),
    location: "Hawthorne, CA",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "active",
    link: "https://example.com/hyperloop-competition"
  },
  {
    id: "12",
    title: "National Science Foundation Grant",
    organization: "NSF",
    description: "Research grants for students pursuing advanced studies in STEM fields.",
    type: "scholarship",
    registrationOpens: getDateString(-30),
    deadline: getDateString(60),
    location: "United States",
    eligibleEducationLevels: ["undergraduate"],
    status: "active",
    link: "https://example.com/nsf-grant"
  },
  {
    id: "13",
    title: "Amazon Web Services Hackathon",
    organization: "AWS",
    description: "Build innovative cloud solutions using AWS technologies and compete for prizes.",
    type: "hackathon",
    registrationOpens: getDateString(20),
    deadline: getDateString(80),
    location: "Online",
    eligibleEducationLevels: ["highSchool", "undergraduate"],
    status: "upcoming",
    link: "https://example.com/aws-hackathon"
  },
  {
    id: "14",
    title: "Facebook AI Research Internship",
    organization: "Meta",
    description: "Work on cutting-edge AI problems with FAIR teams around the world.",
    type: "internship",
    registrationOpens: getDateString(-60),
    deadline: getDateString(15),
    location: "Multiple Locations",
    eligibleEducationLevels: ["undergraduate"],
    status: "active",
    link: "https://example.com/fair-internship"
  },
  {
    id: "15",
    title: "FIRST Robotics Competition",
    organization: "FIRST",
    description: "Team-based robotics competition for high school students with mentorship from professionals.",
    type: "competition",
    registrationOpens: getDateString(-90),
    deadline: getDateString(-15),
    location: "Nationwide",
    eligibleEducationLevels: ["middleSchool", "highSchool"],
    status: "expired",
    link: "https://example.com/first-robotics"
  },
  {
    id: "16",
    title: "Middle School Science Fair",
    organization: "National Science Teachers Association",
    description: "Showcase your scientific research projects and compete with other middle school students.",
    type: "competition",
    registrationOpens: getDateString(-20),
    deadline: getDateString(40),
    location: "Multiple Locations",
    eligibleEducationLevels: ["middleSchool"],
    status: "active",
    link: "https://example.com/middle-school-science-fair"
  },
];
