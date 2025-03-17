
import React from "react";
import { BadgeDollarSign, FileText, Globe, Video, Play, School, Users, BookOpen, BookText, Landmark, GraduationCap } from "lucide-react";

export interface ScholarshipSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  resources: Resource[];
}

export interface Resource {
  title: string;
  description: string;
  link: string;
  type: "article" | "video" | "tool" | "website" | "playlist" | "course" | "app" | "pdf";
  amount?: string;
  deadline?: string;
  eligibility?: string[];
  premium?: boolean;
  rating?: number;
}

const getResourceIcon = (type: Resource["type"]) => {
  switch (type) {
    case "article":
      return <FileText className="h-4 w-4" />;
    case "video":
      return <Video className="h-4 w-4" />;
    case "playlist":
      return <Play className="h-4 w-4" />;
    case "website":
      return <Globe className="h-4 w-4" />;
    case "tool":
      return <School className="h-4 w-4" />;
    case "course":
      return <BookOpen className="h-4 w-4" />;
    case "app":
      return <Users className="h-4 w-4" />;
    case "pdf":
      return <BookText className="h-4 w-4" />;
    default:
      return <Globe className="h-4 w-4" />;
  }
};

const scholarshipSections: ScholarshipSection[] = [
  {
    id: "database",
    title: "Scholarship Database",
    description: "Explore thousands of scholarships organized by eligibility criteria, deadline, and award amount.",
    icon: <BadgeDollarSign className="h-6 w-6" />,
    resources: [
      {
        title: "FastWeb",
        description: "One of the largest scholarship databases with personalized matching to your profile.",
        link: "https://www.fastweb.com/",
        type: "website",
        rating: 4.7
      },
      {
        title: "Scholarships.com",
        description: "Database with over 3.7 million scholarships and grants worth over $19 billion.",
        link: "https://www.scholarships.com/",
        type: "website",
        rating: 4.6
      },
      {
        title: "Peterson's Scholarship Search",
        description: "Find scholarships, fellowships, grants, and other financial aid options.",
        link: "https://www.petersons.com/scholarship-search.aspx",
        type: "website",
        rating: 4.5
      },
      {
        title: "Chegg Scholarships",
        description: "Personalized scholarship matching with weekly updates on new opportunities.",
        link: "https://www.chegg.com/scholarships",
        type: "website",
        rating: 4.6
      },
      {
        title: "CareerOneStop Scholarship Finder",
        description: "U.S. Department of Labor's free scholarship search tool with over 8,000 scholarships.",
        link: "https://www.careeronestop.org/toolkit/training/find-scholarships.aspx",
        type: "website",
        rating: 4.8
      },
      {
        title: "Scholarship Database Comparison",
        description: "An in-depth analysis of the most popular scholarship databases and how to use them effectively.",
        link: "https://www.niche.com/blog/scholarship-search-websites/",
        type: "article",
        rating: 4.4
      },
      {
        title: "How to Use Scholarship Databases Effectively",
        description: "Tips and strategies for maximizing your search results in scholarship databases.",
        link: "https://www.youtube.com/watch?v=6EGSBLbjk9M",
        type: "video",
        rating: 4.5
      },
      {
        title: "Finding Scholarships for International Students",
        description: "Special database resources and search strategies for international students.",
        link: "https://educationusa.state.gov/find-financial-aid",
        type: "website",
        rating: 4.7
      }
    ],
  },
  {
    id: "application-guides",
    title: "Application Requirements",
    description: "Learn about the common requirements for scholarship applications and how to prepare strong materials.",
    icon: <FileText className="h-6 w-6" />,
    resources: [
      {
        title: "Common Scholarship Application Requirements",
        description: "Overview of standard materials needed for most scholarship applications.",
        link: "https://www.bestcolleges.com/blog/scholarship-application-requirements/",
        type: "article",
        rating: 4.6
      },
      {
        title: "How to Write a Winning Scholarship Essay",
        description: "Step-by-step guide with examples of successful scholarship essays.",
        link: "https://www.collegeessayguy.com/blog/scholarship-essay",
        type: "article",
        rating: 4.9
      },
      {
        title: "Scholarship Resume Template",
        description: "Template and guide for creating a resume specifically for scholarship applications.",
        link: "https://resumegenius.com/resume-samples/scholarship-resume",
        type: "pdf",
        rating: 4.7
      },
      {
        title: "Requesting Strong Letters of Recommendation",
        description: "How to approach recommenders and what information to provide them.",
        link: "https://www.princetonreview.com/college-advice/letter-of-recommendation",
        type: "article",
        rating: 4.5
      },
      {
        title: "Scholarship Application Timeline",
        description: "Monthly checklist to keep your scholarship applications on track throughout the year.",
        link: "https://www.cappex.com/articles/applications/scholarship-application-timeline",
        type: "pdf",
        rating: 4.6
      },
      {
        title: "Scholarship Interview Preparation",
        description: "Practice questions and tips for acing scholarship interviews.",
        link: "https://www.youtube.com/watch?v=2SxY_hkl1z8",
        type: "video",
        rating: 4.8
      },
      {
        title: "Common Scholarship Application Mistakes to Avoid",
        description: "Expert advice on pitfalls that can disqualify your application.",
        link: "https://www.scholarships.com/financial-aid/college-scholarships/scholarship-application-strategies/scholarships-and-the-seven-deadly-sins/",
        type: "article",
        rating: 4.7
      },
      {
        title: "Scholarship Essay Writing Course",
        description: "Comprehensive online course on crafting compelling scholarship essays.",
        link: "https://www.udemy.com/course/writing-winning-scholarship-essays/",
        type: "course",
        premium: true,
        rating: 4.9
      }
    ],
  },
  {
    id: "essay-workshops",
    title: "Essay Writing Workshops",
    description: "Resources to help you craft compelling scholarship essays that stand out to selection committees.",
    icon: <BookOpen className="h-6 w-6" />,
    resources: [
      {
        title: "Scholarship Essay Writing MasterClass",
        description: "Step-by-step video course on writing essays that win scholarships.",
        link: "https://www.youtube.com/playlist?list=PLgbHiQMPliGKGHE7UdU2oa42CIg3vcvKf",
        type: "playlist",
        rating: 4.9
      },
      {
        title: "Harvard's Guide to Writing Personal Statements",
        description: "Expert advice from Harvard University on crafting compelling personal narratives.",
        link: "https://hwpi.harvard.edu/files/ocs/files/undergrad_resumes_and_cover_letters.pdf",
        type: "pdf",
        rating: 4.8
      },
      {
        title: "Scholarship Essay Samples with Analysis",
        description: "Collection of successful scholarship essays with expert commentary on why they worked.",
        link: "https://www.goingmerry.com/blog/scholarship-essay-examples/",
        type: "article",
        rating: 4.7
      },
      {
        title: "From Brainstorm to Final Draft: Essay Writing Workshop",
        description: "Interactive workshop guiding you through the entire process of writing a scholarship essay.",
        link: "https://www.khanacademy.org/college-careers-more/college-admissions/applying-to-college/admissions-essays",
        type: "course",
        rating: 4.8
      },
      {
        title: "Grammar and Style Guide for Scholarship Essays",
        description: "Comprehensive guide to common grammar issues and style considerations.",
        link: "https://owl.purdue.edu/owl/general_writing/index.html",
        type: "website",
        rating: 4.6
      },
      {
        title: "How to Tell Your Story: Personal Narrative Workshop",
        description: "Techniques for incorporating your personal experiences into compelling narratives.",
        link: "https://www.youtube.com/watch?v=LQ3q1M8-fRQ",
        type: "video",
        rating: 4.5
      },
      {
        title: "Scholarship Essay Editing Checklist",
        description: "Comprehensive checklist for self-editing your scholarship essays.",
        link: "https://www.scholarshipjunkies.org/uploads/media/default/0001/01/e4f9b383a5b2032b7be8d71dca5d5af35ed34535.pdf",
        type: "pdf",
        rating: 4.7
      }
    ],
  },
  {
    id: "financial-aid",
    title: "Financial Aid Consultation",
    description: "Guidance on complementing scholarships with other forms of financial aid for complete college funding.",
    icon: <Landmark className="h-6 w-6" />,
    resources: [
      {
        title: "Understanding the FAFSA",
        description: "Complete guide to the Free Application for Federal Student Aid and how it impacts your college funding.",
        link: "https://studentaid.gov/h/apply-for-aid/fafsa",
        type: "website",
        rating: 4.9
      },
      {
        title: "CSS Profile Explained",
        description: "How the College Scholarship Service Profile works for non-federal financial aid.",
        link: "https://cssprofile.collegeboard.org/",
        type: "website",
        rating: 4.7
      },
      {
        title: "Financial Aid Appeals Process",
        description: "Step-by-step guide to appealing your financial aid offer for better funding.",
        link: "https://www.nerdwallet.com/article/loans/student-loans/financial-aid-appeal-letter",
        type: "article",
        rating: 4.6
      },
      {
        title: "Understanding Student Loans",
        description: "Comprehensive overview of federal and private student loan options.",
        link: "https://www.consumerfinance.gov/paying-for-college/",
        type: "website",
        rating: 4.8
      },
      {
        title: "Work-Study Programs Explained",
        description: "How federal work-study programs can complement your scholarship funding.",
        link: "https://studentaid.gov/understand-aid/types/work-study",
        type: "article",
        rating: 4.5
      },
      {
        title: "Virtual Financial Aid Counselor",
        description: "Interactive tool to help you understand your financial aid options.",
        link: "https://www.mappingyourfuture.org/paying/financialaidestimator/",
        type: "tool",
        rating: 4.6
      },
      {
        title: "Financial Aid Workshop Series",
        description: "Comprehensive video series covering all aspects of college financial aid.",
        link: "https://www.youtube.com/playlist?list=PLyImQRx6CJeWBXZGBUHVpSWTSW_8GfF9V",
        type: "playlist",
        rating: 4.7
      },
      {
        title: "State-Based Financial Aid Programs",
        description: "Guide to finding and applying for state-specific financial aid programs.",
        link: "https://www.nasfaa.org/State_Financial_Aid_Programs",
        type: "website",
        rating: 4.6
      }
    ],
  },
  {
    id: "specialized-scholarships",
    title: "Specialized Scholarships",
    description: "Resources for finding scholarships tailored to specific demographics, interests, and career paths.",
    icon: <GraduationCap className="h-6 w-6" />,
    resources: [
      {
        title: "STEM Scholarships Directory",
        description: "Comprehensive list of scholarships specifically for students pursuing STEM fields.",
        link: "https://www.scholarships.com/financial-aid/college-scholarships/scholarship-directory/academic-major/science-technology-engineering-and-mathematics",
        type: "website",
        rating: 4.8
      },
      {
        title: "First-Generation College Student Scholarships",
        description: "Opportunities specifically for students who are the first in their family to attend college.",
        link: "https://www.unigo.com/scholarships/by-type/first-generation-scholarships",
        type: "website",
        rating: 4.7
      },
      {
        title: "Scholarships for Underrepresented Groups in Higher Education",
        description: "Resources for students from backgrounds traditionally underrepresented in higher education.",
        link: "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-type/minority-scholarships/",
        type: "website",
        rating: 4.9
      },
      {
        title: "Athletic Scholarships Guide",
        description: "How to pursue and secure athletic scholarships across different sports and divisions.",
        link: "https://www.ncaa.org/sports/2014/10/6/scholarships.aspx",
        type: "website",
        rating: 4.6
      },
      {
        title: "Community Service Scholarships",
        description: "Scholarships rewarding students with a commitment to community service and volunteering.",
        link: "https://bold.org/scholarships/community-service-scholarships/",
        type: "website",
        rating: 4.5
      },
      {
        title: "Creative Arts Scholarship Opportunities",
        description: "Scholarships for students pursuing visual arts, music, theater, creative writing, and other artistic fields.",
        link: "https://www.collegexpress.com/scholarships/creative/",
        type: "website",
        rating: 4.7
      },
      {
        title: "International Student Scholarship Guide",
        description: "Resources specifically for international students seeking US college funding.",
        link: "https://www.internationalstudent.com/scholarship-search/",
        type: "website",
        rating: 4.8
      },
      {
        title: "Grants vs. Scholarships: Understanding the Difference",
        description: "Clarification on the distinctions between grants and scholarships and how to pursue both.",
        link: "https://www.salliemae.com/college-planning/financial-aid/understand-college-grants/",
        type: "article",
        rating: 4.5
      }
    ],
  }
];

export { scholarshipSections, getResourceIcon };
