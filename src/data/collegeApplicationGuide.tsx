
import { BookOpen, School, Clock, FileText, Users, Award, PenTool, FileCheck2, Briefcase, DollarSign, User, Check, Calendar, Search, HelpCircle, Map, Mic } from "lucide-react";

export type GuideSection = {
  id: string;
  title: string;
  icon: JSX.Element;
  shortDescription: string;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      tips?: string[];
      resources?: Resource[];
    }[];
  };
};

export type Resource = {
  title: string;
  description: string;
  link: string;
  type: "video" | "article" | "tool" | "website";
};

export const guideData: GuideSection[] = [
  {
    id: "university-selection",
    title: "University Selection Assistance",
    icon: <School className="h-6 w-6" />,
    shortDescription: "Learn how to identify and select the right universities that match your academic goals, interests, and preferences.",
    content: {
      introduction: "Choosing the right university is one of the most crucial decisions in the college application process. This guide will help you navigate the complex landscape of higher education options and find institutions that align with your academic goals, career aspirations, and personal preferences.",
      sections: [
        {
          title: "Understanding Your Priorities",
          content: "Before diving into college research, take time for self-reflection. Consider your academic interests, career goals, learning style, and personal preferences regarding location, size, and campus culture. Create a list of must-haves versus nice-to-haves to guide your search.",
          tips: [
            "Make a list of subjects you enjoy and excel in",
            "Research careers that interest you and their educational requirements",
            "Consider whether you prefer small classes or large lectures",
            "Think about distance from home, climate preferences, and urban vs. rural settings"
          ]
        },
        {
          title: "Types of Institutions",
          content: "Higher education institutions come in many forms, each offering different experiences and opportunities. Research universities focus on academic research and often offer graduate programs, while liberal arts colleges emphasize undergraduate education with smaller class sizes. Public universities are typically larger and less expensive for in-state students, while private institutions might offer more financial aid but have higher sticker prices.",
          resources: [
            {
              title: "Different Types of Colleges Explained",
              description: "A comprehensive overview of various college types to help you understand your options",
              link: "https://bigfuture.collegeboard.org/find-colleges/college-101/types-of-colleges-the-basics",
              type: "article"
            },
            {
              title: "Public vs. Private Colleges: What's the Difference?",
              description: "Learn about the key differences between public and private institutions",
              link: "https://www.youtube.com/watch?v=KYa3w3x4S0I",
              type: "video"
            }
          ]
        },
        {
          title: "Creating Your College List",
          content: "Develop a balanced list of 8-12 schools across three categories: reach schools (more competitive than your profile), target schools (good match for your qualifications), and safety schools (where your admission is highly likely). This approach ensures you'll have options while still pursuing your dreams.",
          tips: [
            "Include 2-3 reach schools where your profile is below the average admitted student",
            "Add 4-5 target schools where your profile matches the average admitted student",
            "Include 2-3 safety schools where your profile exceeds the average admitted student",
            "Ensure you would be happy attending ANY school on your final list"
          ],
          resources: [
            {
              title: "How to Build a Balanced College List",
              description: "Expert advice on creating a strategic list of colleges to apply to",
              link: "https://www.collegeessayguy.com/blog/how-to-choose-colleges",
              type: "article"
            }
          ]
        },
        {
          title: "Research Resources",
          content: "Take advantage of various resources to research colleges thoroughly. College websites provide official information, but also explore student review sites, virtual tours, and college fairs. College search platforms can help you filter options based on your criteria.",
          resources: [
            {
              title: "College Navigator",
              description: "Official U.S. Department of Education tool for researching colleges",
              link: "https://nces.ed.gov/collegenavigator/",
              type: "tool"
            },
            {
              title: "Virtual College Tours",
              description: "Explore campuses virtually when you can't visit in person",
              link: "https://www.youvisit.com/collegesearch/",
              type: "website"
            },
            {
              title: "College Board BigFuture",
              description: "Comprehensive search tool with detailed college profiles",
              link: "https://bigfuture.collegeboard.org/",
              type: "tool"
            }
          ]
        },
        {
          title: "Campus Visits",
          content: "Whenever possible, visit campuses in person. Attend official tours, sit in on classes, meet with professors, talk to current students, and explore the surrounding community. These experiences provide valuable insights that online research cannot capture.",
          tips: [
            "Schedule visits when school is in session to get an authentic feel",
            "Prepare questions in advance for tour guides and admissions officers",
            "Explore beyond the official tour to see unscripted campus life",
            "Visit dining halls, libraries, and student centers to observe daily student life"
          ]
        }
      ]
    }
  },
  {
    id: "application-timeline",
    title: "Application Timeline Planning",
    icon: <Calendar className="h-6 w-6" />,
    shortDescription: "Create a structured timeline for your application process to ensure you meet all deadlines and complete each step thoroughly.",
    content: {
      introduction: "A well-organized timeline is essential for a successful college application process. This guide breaks down the application journey into manageable steps across your high school years, with special focus on junior and senior year milestones.",
      sections: [
        {
          title: "Freshman & Sophomore Years: Building Foundations",
          content: "These early high school years are about establishing solid academic foundations and exploring interests. Focus on taking challenging courses appropriate for your ability level, maintaining good grades, and getting involved in extracurricular activities that interest you. Begin thinking about college in general terms.",
          tips: [
            "Take challenging courses that align with your abilities and interests",
            "Explore extracurricular activities to discover your passions",
            "Develop good study habits and time management skills",
            "Consider taking PSAT 10 in sophomore year for practice"
          ]
        },
        {
          title: "Junior Year: Fall Semester",
          content: "Junior year marks the beginning of focused college preparation. During fall semester, take the PSAT/NMSQT, which serves as practice for college entrance exams and potentially qualifies you for National Merit Scholarships. Continue challenging yourself academically and deepen involvement in key extracurricular activities.",
          tips: [
            "Take the PSAT/NMSQT in October",
            "Meet with your guidance counselor to discuss college plans",
            "Research potential college majors that align with your interests",
            "Begin building a preliminary college list"
          ],
          resources: [
            {
              title: "College Planning Timeline for Juniors",
              description: "Month-by-month guidance for junior year college preparation",
              link: "https://www.khanacademy.org/college-careers-more/college-admissions/get-started/introduction-ca/a/college-application-timeline",
              type: "article"
            }
          ]
        },
        {
          title: "Junior Year: Spring Semester",
          content: "Spring of junior year is a critical period for standardized testing and college research. Take the SAT or ACT (or both), visit college campuses during spring break, and begin thinking about who might write your recommendation letters. Consider enrolling in test prep if needed.",
          tips: [
            "Register for and take the SAT or ACT (consider taking both to see which fits your style)",
            "Visit colleges during spring break",
            "Prepare for AP/IB exams if applicable",
            "Begin thinking about essay topics and potential recommenders"
          ],
          resources: [
            {
              title: "SAT vs. ACT: Which Test is Right for You?",
              description: "Comparison of the two major college entrance exams",
              link: "https://www.princetonreview.com/college/sat-act",
              type: "article"
            }
          ]
        },
        {
          title: "Summer Before Senior Year",
          content: "Use the summer before senior year to advance your college preparation significantly. Narrow down your college list, work on drafts of your personal statement and supplemental essays, and prepare for additional standardized tests if needed. Consider meaningful summer activities like internships, volunteer work, or academic programs.",
          tips: [
            "Finalize your college list with safety, target, and reach schools",
            "Draft your Common Application or Coalition Application essay",
            "Research and begin applications for scholarships",
            "Engage in meaningful summer activities (internship, volunteer work, etc.)"
          ],
          resources: [
            {
              title: "Common Application Essay Prompts",
              description: "Current essay prompts with guidance on approaching each topic",
              link: "https://www.commonapp.org/apply/essay-prompts",
              type: "website"
            }
          ]
        },
        {
          title: "Senior Year: Fall Semester",
          content: "Fall of senior year is application season. Finalize and submit applications for Early Decision/Early Action programs (typically November deadlines) and continue working on Regular Decision applications (typically January deadlines). Request official test scores to be sent to colleges and follow up with recommenders.",
          tips: [
            "Submit Early Decision/Early Action applications (typically November 1 or 15 deadlines)",
            "Complete FAFSA and CSS Profile (if applicable) as soon as possible after October 1",
            "Request official test scores be sent to colleges",
            "Finalize Regular Decision applications before winter break if possible"
          ],
          resources: [
            {
              title: "FAFSA: Applying for Aid",
              description: "Step-by-step guide to completing the Free Application for Federal Student Aid",
              link: "https://studentaid.gov/apply-for-aid/fafsa/filling-out",
              type: "website"
            },
            {
              title: "Early Decision vs. Early Action vs. Regular Decision",
              description: "Understanding different application options and their implications",
              link: "https://www.youtube.com/watch?v=5K0DEPgUiYA",
              type: "video"
            }
          ]
        },
        {
          title: "Senior Year: Spring Semester",
          content: "As decisions arrive, compare financial aid packages, attend admitted student events, and make your final college decision. Submit your enrollment deposit by May 1 (National College Decision Day) and complete any final requirements for your chosen school.",
          tips: [
            "Compare financial aid packages carefully",
            "Attend admitted student events to help make your decision",
            "Submit enrollment deposit by May 1 (National College Decision Day)",
            "Request final transcripts be sent to your chosen college"
          ],
          resources: [
            {
              title: "How to Compare Financial Aid Award Letters",
              description: "Tools and tips for evaluating and comparing financial aid offers",
              link: "https://www.consumerfinance.gov/paying-for-college/",
              type: "tool"
            }
          ]
        }
      ]
    }
  },
  {
    id: "essay-writing",
    title: "Essay Review and Feedback",
    icon: <PenTool className="h-6 w-6" />,
    shortDescription: "Learn how to craft compelling personal statements and supplemental essays that showcase your unique qualities and experiences.",
    content: {
      introduction: "The college essay is your opportunity to show admissions officers who you are beyond your grades and test scores. This guide will help you craft authentic, compelling essays that showcase your voice, values, and potential contributions to a campus community.",
      sections: [
        {
          title: "Understanding the Purpose of College Essays",
          content: "College essays serve multiple purposes in the application process. They demonstrate your writing ability, reveal aspects of your personality not evident elsewhere in your application, and show how you might contribute to the campus community. Admissions officers use essays to evaluate fit with their institution's culture and values.",
          tips: [
            "Remember that colleges want to know about YOU, not just your accomplishments",
            "Think of essays as one-sided interview responses",
            "Use essays to elaborate on activities or experiences mentioned elsewhere in your application",
            "Show, don't just tell, who you are through specific stories and examples"
          ]
        },
        {
          title: "Brainstorming Meaningful Topics",
          content: "The most effective essays often emerge from thoughtful reflection about your experiences, values, and growth. Consider moments of challenge, change, or realization in your life. Reflect on your background, identity, interests, and aspirations. Look for stories that reveal something essential about who you are.",
          tips: [
            "List significant experiences that have shaped your perspective or values",
            "Consider challenges you've faced and how you've grown from them",
            "Reflect on moments of realization or personal growth",
            "Look for unusual interests or meaningful activities that reveal your character"
          ],
          resources: [
            {
              title: "21 College Essay Topics & Ideas That Worked",
              description: "Examples of successful essay topics with analysis",
              link: "https://www.collegeessayguy.com/blog/college-essay-examples",
              type: "article"
            }
          ]
        },
        {
          title: "Crafting a Compelling Personal Statement",
          content: "The personal statement (Common Application or Coalition Application essay) should tell a focused story that reveals important aspects of your identity, growth, or values. Choose a meaningful topic, establish a clear narrative arc, use vivid details, and reflect on the significance of your experience.",
          tips: [
            "Focus on a specific moment or experience rather than trying to cover your entire life",
            "Start with an engaging hook that draws the reader in",
            "Use concrete details and sensory language to bring your story to life",
            "Include meaningful reflection that shows your maturity and self-awareness"
          ],
          resources: [
            {
              title: "How to Write a College Essay Step-by-Step",
              description: "Comprehensive guide to the essay writing process",
              link: "https://www.khanacademy.org/college-careers-more/college-admissions/applying-to-college/admissions-essays/a/writing-tips-and-techniques-for-your-college-essay",
              type: "article"
            },
            {
              title: "College Essay Guy: Personal Statement Workshop",
              description: "Video workshop on crafting an effective personal statement",
              link: "https://www.youtube.com/watch?v=5zIYVYW6x8A",
              type: "video"
            }
          ]
        },
        {
          title: "Approaching Supplemental Essays",
          content: "Many colleges require additional, school-specific essays beyond the personal statement. These supplemental essays often ask about your interest in the school, your intended major, or aspects of your identity or experience. Research each school thoroughly to craft targeted, specific responses.",
          tips: [
            "Research each school's specific values, programs, and opportunities before writing",
            "Be specific about why you're interested in each particular school",
            "Avoid generic statements that could apply to any college",
            "Tailor each response to show how you'll contribute to that specific campus community"
          ],
          resources: [
            {
              title: "How to Write the 'Why This College' Essay",
              description: "Strategies for crafting compelling school-specific essays",
              link: "https://www.collegeessayadvisors.com/portfolio-items/why-this-college-essay/",
              type: "article"
            }
          ]
        },
        {
          title: "Revision and Feedback",
          content: "Effective essays go through multiple drafts and revisions. After writing an initial draft, set it aside before reviewing it with fresh eyes. Look for clarity, coherence, authenticity, and grammatical correctness. Seek feedback from trusted teachers, counselors, or mentors who know you well.",
          tips: [
            "Read your essay aloud to catch awkward phrasing and flow issues",
            "Check that your voice sounds authentic and true to yourself",
            "Ensure every sentence contributes to your overall message",
            "Proofread carefully for grammar, spelling, and punctuation errors"
          ],
          resources: [
            {
              title: "College Essay Revision Guidelines",
              description: "Checklist for effectively revising your college essays",
              link: "https://www.applerouth.com/blog/2017/11/07/7-steps-for-effective-college-essay-revision/",
              type: "article"
            }
          ]
        },
        {
          title: "Common Essay Mistakes to Avoid",
          content: "Certain pitfalls can weaken otherwise promising essays. Avoid trying to impress with vocabulary you wouldn't normally use. Don't restate information available elsewhere in your application unless you're adding significant new insights. Stay away from controversial topics unless you can discuss them maturely and thoughtfully.",
          tips: [
            "Avoid clichéd topics like winning the big game or a service trip that 'changed your perspective'",
            "Don't try to cover too much in one essay; focus on a specific story or idea",
            "Be careful with humor, as it can be easily misinterpreted",
            "Avoid overly formal language that doesn't reflect how you actually speak"
          ]
        }
      ]
    }
  },
  {
    id: "interview-preparation",
    title: "Interview Preparation",
    icon: <Mic className="h-6 w-6" />,
    shortDescription: "Prepare for college interviews with confidence through practical tips, common questions, and strategies for making a positive impression.",
    content: {
      introduction: "College interviews provide an opportunity to showcase your personality, interests, and fit with a school beyond what's written in your application. This guide will help you prepare for different types of interviews, practice effective responses, and approach the conversation with confidence.",
      sections: [
        {
          title: "Types of College Interviews",
          content: "Colleges offer different interview formats depending on their policies. Evaluative interviews are formal assessments conducted by admissions officers that factor into admission decisions. Informational interviews, often conducted by alumni, are more about providing information and assessing fit. Interviews may be conducted in person, by phone, or via video conference.",
          tips: [
            "Research each college's interview policy and format in advance",
            "Understand whether the interview is evaluative or informational",
            "Prepare differently for alumni vs. admissions officer interviews",
            "For virtual interviews, test your technology in advance"
          ]
        },
        {
          title: "Before the Interview: Research",
          content: "Thorough research is essential for a successful interview. Review the college's website to understand its mission, values, academic programs, and unique opportunities. Be prepared to explain why you're interested in this specific institution and how you would contribute to its community.",
          tips: [
            "Research your intended major and relevant programs at the school",
            "Identify specific courses, professors, or research opportunities of interest",
            "Understand the school's mission statement and values",
            "Prepare thoughtful questions that demonstrate your research"
          ],
          resources: [
            {
              title: "How to Research a College Effectively",
              description: "Comprehensive guide to researching colleges beyond the basics",
              link: "https://www.collegedata.com/resources/getting-in/how-to-research-a-college-effectively",
              type: "article"
            }
          ]
        },
        {
          title: "Common Interview Questions",
          content: "While each interview is unique, certain questions appear frequently. Practice articulate, authentic responses to questions about your academic interests, extracurricular activities, strengths and weaknesses, and why you're interested in the college. Prepare concrete examples that highlight your qualities and experiences.",
          tips: [
            "Prepare for questions like 'Tell me about yourself' with a concise personal summary",
            "Practice explaining your academic interests with specific examples",
            "Be ready to discuss challenges you've faced and how you've overcome them",
            "Prepare to explain why this specific college is a good fit for you"
          ],
          resources: [
            {
              title: "50 Common College Interview Questions and How to Answer Them",
              description: "Comprehensive list of possible questions with response strategies",
              link: "https://blog.prepscholar.com/college-interview-questions",
              type: "article"
            },
            {
              title: "College Interview Tips and Strategies",
              description: "Video with practical interview advice from admissions experts",
              link: "https://www.youtube.com/watch?v=CASzscnRwZ0",
              type: "video"
            }
          ]
        },
        {
          title: "Making a Positive Impression",
          content: "First impressions matter in interviews. Dress appropriately in business casual attire unless otherwise specified. Arrive early or sign in to virtual platforms with time to spare. Demonstrate engagement through body language: maintain eye contact, sit up straight, and nod occasionally to show you're listening.",
          tips: [
            "Dress neatly in business casual attire",
            "Arrive 10-15 minutes early for in-person interviews",
            "Maintain good eye contact throughout the conversation",
            "Turn off your phone completely before the interview begins"
          ]
        },
        {
          title: "Structuring Your Responses",
          content: "Effective interview responses are focused, specific, and thoughtful. Use the STAR method (Situation, Task, Action, Result) for questions about your experiences. Keep responses concise (1-2 minutes) but substantive. Balance confidence with humility and authenticity.",
          tips: [
            "Use the STAR method for behavioral questions: Situation, Task, Action, Result",
            "Support general statements with specific examples",
            "Avoid one-word answers or excessive rambling",
            "Be authentic rather than saying what you think the interviewer wants to hear"
          ]
        },
        {
          title: "Asking Thoughtful Questions",
          content: "The questions you ask reveal your level of interest and research. Prepare several thoughtful questions about academic programs, campus life, or unique opportunities. Avoid asking about information easily found on the website or basic statistics.",
          tips: [
            "Prepare 3-5 specific questions that demonstrate your research",
            "Ask about opportunities unique to this institution",
            "Consider questions about student experiences or campus culture",
            "Avoid questions about admission statistics or basic information readily available online"
          ],
          resources: [
            {
              title: "Questions to Ask in a College Interview",
              description: "List of thoughtful questions that make a positive impression",
              link: "https://www.thoughtco.com/questions-to-ask-in-college-interview-788864",
              type: "article"
            }
          ]
        },
        {
          title: "Practice and Preparation",
          content: "Practice is essential for interview confidence. Conduct mock interviews with teachers, counselors, or family members. Record yourself answering questions to assess your body language and verbal habits. Practice will help reduce anxiety and make your responses feel more natural.",
          tips: [
            "Conduct at least 2-3 full mock interviews before the real thing",
            "Record yourself to identify verbal tics or distracting mannerisms",
            "Practice in the same format as the actual interview (in-person, video, phone)",
            "Ask for honest feedback from your practice partners"
          ],
          resources: [
            {
              title: "Mock Interview Preparation Guide",
              description: "How to set up and get the most from practice interviews",
              link: "https://www.indeed.com/career-advice/interviewing/how-to-prepare-for-a-mock-interview",
              type: "article"
            }
          ]
        },
        {
          title: "Follow-Up Etiquette",
          content: "Send a brief thank-you email or note within 24 hours of your interview. Express appreciation for the interviewer's time, reference specific points from your conversation, and reiterate your interest in the school. This professional courtesy demonstrates your maturity and continued interest.",
          tips: [
            "Send a thank-you email within 24 hours",
            "Reference specific topics from your conversation",
            "Keep the message concise and professional",
            "Proofread carefully before sending"
          ]
        }
      ]
    }
  },
  {
    id: "recommendation-letters",
    title: "Recommendation Letters",
    icon: <FileCheck2 className="h-6 w-6" />,
    shortDescription: "Learn how to request and secure strong recommendation letters that enhance your college applications.",
    content: {
      introduction: "Recommendation letters provide colleges with valuable third-party perspectives on your character, academic abilities, and potential contributions. This guide will help you select appropriate recommenders, make effective requests, and ensure your letters strengthen your overall application.",
      sections: [
        {
          title: "Understanding Recommendation Requirements",
          content: "College recommendation requirements vary by institution. Most require 1-2 teacher recommendations and one counselor recommendation. Some may allow or require additional recommendations from employers, mentors, or community members. Check each college's specific requirements before requesting letters.",
          tips: [
            "Research each college's specific recommendation requirements",
            "Note any preferences for teachers from specific subject areas",
            "Understand deadlines for recommendation submissions",
            "Check whether recommendations must be submitted through specific platforms"
          ]
        },
        {
          title: "Choosing the Right Recommenders",
          content: "Select recommenders who know you well and can speak specifically about your strengths, character, and potential. Ideally, choose teachers from core academic subjects (English, math, science, social studies, foreign language) who have taught you recently, preferably in junior or senior year.",
          tips: [
            "Choose teachers who have seen you overcome challenges",
            "Select recommenders who can speak to different aspects of your abilities",
            "Consider teachers of subjects related to your intended college major",
            "Look for teachers who know you beyond just your academic performance"
          ],
          resources: [
            {
              title: "Who Should Write Your College Recommendations?",
              description: "Guidance on selecting the most effective recommenders",
              link: "https://www.collegedata.com/resources/getting-in/who-should-write-your-college-recommendations",
              type: "article"
            }
          ]
        },
        {
          title: "Making the Request",
          content: "Request recommendations well in advance of deadlines, ideally at least 4-6 weeks before they're due. Make requests in person when possible, followed by a formal email with all necessary details. Be prepared for some teachers to decline if they feel they cannot write a strong letter.",
          tips: [
            "Request recommendations at least 4-6 weeks before deadlines",
            "Ask in person first, then follow up with a detailed email",
            "Be understanding if a teacher declines your request",
            "Express sincere appreciation when someone agrees to write for you"
          ]
        },
        {
          title: "Providing Supporting Materials",
          content: "Help your recommenders write detailed, specific letters by providing them with supporting information. Create a 'brag sheet' outlining your accomplishments, activities, goals, and memorable classroom moments. Include your resume, essay drafts, and any other relevant information about your colleges and intended majors.",
          tips: [
            "Create a detailed 'brag sheet' highlighting key achievements and classroom contributions",
            "Include your resume listing activities and accomplishments",
            "Share draft essays if available to provide context on your narrative",
            "Remind recommenders of specific projects or discussions that showcase your abilities"
          ],
          resources: [
            {
              title: "How to Create an Effective Brag Sheet",
              description: "Template and tips for creating materials for your recommenders",
              link: "https://www.collegeessayguy.com/blog/brag-sheet",
              type: "article"
            }
          ]
        },
        {
          title: "Waiving Your Right to Access",
          content: "When requesting recommendations through application platforms, you'll be asked whether you waive your right to view the letters. Most admissions officers give more weight to confidential recommendations, as they're presumed to be more candid. Consider waiving your right to access for this reason.",
          tips: [
            "Understand that waiving your right often gives recommendations more credibility",
            "Only ask recommenders you trust to write positive, supportive letters",
            "Discuss any concerns about waiving rights with your counselor",
            "Remember that some recommenders may be uncomfortable writing non-confidential letters"
          ]
        },
        {
          title: "Following Up and Expressing Gratitude",
          content: "Track the status of your recommendation submissions and send polite reminders as deadlines approach. After submissions, express sincere gratitude with a handwritten thank-you note. Consider updating recommenders on your college results and final decision.",
          tips: [
            "Send gentle reminders 1-2 weeks before deadlines if needed",
            "Write personalized thank-you notes after recommendations are submitted",
            "Keep recommenders updated on your application results",
            "Consider a small token of appreciation (within ethical boundaries)"
          ]
        },
        {
          title: "Additional Recommendations",
          content: "Some colleges allow optional additional recommendations from coaches, employers, mentors, or community members. These can add value when they provide new insights about your character or abilities not covered elsewhere. However, only submit additional recommendations if they add substantial new information.",
          tips: [
            "Only submit additional recommendations if they add new perspectives",
            "Avoid character references from family friends or relatives",
            "Consider recommendations that highlight leadership, work ethic, or community involvement",
            "Follow the same courtesies and timelines as with required recommendations"
          ],
          resources: [
            {
              title: "When to Submit Additional Letters of Recommendation",
              description: "Guidance on when extra recommendations help or hurt",
              link: "https://www.forbes.com/sites/brennanbarnard/2018/10/02/the-dos-and-donts-of-college-recommendation-letters/",
              type: "article"
            }
          ]
        }
      ]
    }
  },
  {
    id: "financial-aid",
    title: "Financial Aid and Scholarships",
    icon: <DollarSign className="h-6 w-6" />,
    shortDescription: "Navigate the financial aspects of college applications with guidance on financial aid forms, scholarship opportunities, and comparing offers.",
    content: {
      introduction: "Understanding and navigating the financial aspects of college is crucial for making informed decisions. This guide covers the essentials of financial aid applications, scholarship opportunities, and strategies for maximizing your financial assistance for higher education.",
      sections: [
        {
          title: "Understanding Financial Aid Basics",
          content: "Financial aid comes in several forms: grants and scholarships (which don't require repayment), loans (which must be repaid, usually with interest), and work-study (part-time employment to help cover expenses). Aid can come from federal and state governments, colleges themselves, and private organizations.",
          tips: [
            "Learn the difference between need-based and merit-based aid",
            "Understand that the 'sticker price' is often not what students actually pay",
            "Research net price calculators on college websites for cost estimates",
            "Remember that private colleges often offer more institutional aid than public universities"
          ],
          resources: [
            {
              title: "Federal Student Aid: Types of Aid",
              description: "Official information about different forms of financial assistance",
              link: "https://studentaid.gov/understand-aid/types",
              type: "website"
            }
          ]
        },
        {
          title: "Completing the FAFSA",
          content: "The Free Application for Federal Student Aid (FAFSA) is required for access to federal financial aid programs and is used by many states and colleges for their aid programs as well. The FAFSA becomes available on October 1 each year and should be completed as soon as possible thereafter.",
          tips: [
            "Create FSA IDs for both student and parent before starting",
            "Gather required documents (tax returns, bank statements, etc.) in advance",
            "Submit as soon as possible after October 1 of senior year",
            "List all colleges you're considering, even if you haven't applied yet"
          ],
          resources: [
            {
              title: "How to Complete the FAFSA",
              description: "Step-by-step guide to filling out the federal aid application",
              link: "https://www.youtube.com/watch?v=vFeJtRWLXYM",
              type: "video"
            },
            {
              title: "FAFSA: Applying for Aid",
              description: "Official guide to completing the FAFSA",
              link: "https://studentaid.gov/apply-for-aid/fafsa/filling-out",
              type: "website"
            }
          ]
        },
        {
          title: "The CSS Profile",
          content: "Some private colleges and universities require the CSS Profile in addition to the FAFSA. This more detailed financial form helps institutions award their own financial aid funds. Unlike the FAFSA, the CSS Profile has a fee, though fee waivers are available for eligible students.",
          tips: [
            "Check which colleges on your list require the CSS Profile",
            "Complete the CSS Profile as early as possible (available October 1)",
            "Be prepared to provide more detailed financial information than on the FAFSA",
            "Request fee waivers if you qualify based on financial need"
          ],
          resources: [
            {
              title: "CSS Profile Overview and Instructions",
              description: "Information about completing the CSS Profile application",
              link: "https://cssprofile.collegeboard.org/",
              type: "website"
            }
          ]
        },
        {
          title: "Finding and Applying for Scholarships",
          content: "Scholarships are available from numerous sources, including colleges, community organizations, employers, and private foundations. They may be based on merit, financial need, specific talents, intended majors, or demographic factors. Start searching early and apply widely to maximize opportunities.",
          tips: [
            "Begin scholarship searches in junior year and continue throughout senior year",
            "Use reputable scholarship search engines to find opportunities",
            "Look locally (high school, community organizations, local businesses)",
            "Research scholarship opportunities at each college on your list"
          ],
          resources: [
            {
              title: "How to Find College Scholarships",
              description: "Comprehensive guide to finding and applying for scholarships",
              link: "https://www.fastweb.com/college-scholarships/articles/how-to-find-scholarships",
              type: "article"
            },
            {
              title: "Scholarship Search Platforms",
              description: "Free tools for finding scholarship opportunities",
              link: "https://www.scholarships.com/",
              type: "tool"
            }
          ]
        },
        {
          title: "Understanding Financial Aid Offers",
          content: "After college acceptances arrive, you'll receive financial aid award letters. These can be confusing and difficult to compare because colleges present information differently. Learn to identify the components of each offer and calculate your true out-of-pocket cost at each institution.",
          tips: [
            "Distinguish between grants/scholarships and loans in each offer",
            "Calculate the true net cost after gift aid is subtracted",
            "Consider four-year costs, not just freshman year",
            "Understand conditions for maintaining scholarships and grants"
          ],
          resources: [
            {
              title: "Comparing Financial Aid Award Letters",
              description: "Tools and tips for evaluating different financial aid packages",
              link: "https://www.consumerfinance.gov/paying-for-college/compare-financial-aid-and-college-cost/",
              type: "tool"
            },
            {
              title: "How to Read Your Financial Aid Award Letter",
              description: "Video explanation of deciphering financial aid offers",
              link: "https://www.youtube.com/watch?v=D5EGQ7CrKEc",
              type: "video"
            }
          ]
        },
        {
          title: "Appealing Financial Aid Decisions",
          content: "If a financial aid offer is insufficient or if your financial circumstances have changed, you can appeal for reconsideration. This process, sometimes called a professional judgment review, requires documentation of changed circumstances or competing offers from other institutions.",
          tips: [
            "Contact financial aid offices directly about appeal processes",
            "Provide documentation of any changed financial circumstances",
            "Be polite and specific about your needs in appeal letters",
            "Consider sharing competing offers from similar institutions"
          ],
          resources: [
            {
              title: "How to Appeal for More College Financial Aid",
              description: "Guide to the financial aid appeal process",
              link: "https://www.savingforcollege.com/article/how-to-appeal-for-more-college-financial-aid",
              type: "article"
            }
          ]
        },
        {
          title: "Planning for College Costs",
          content: "Beyond financial aid, develop strategies for managing college costs. This may include choosing more affordable institutions, starting at community college, utilizing AP/IB credits to graduate early, working part-time during college, or exploring tuition payment plans.",
          tips: [
            "Compare public vs. private options, considering financial aid differences",
            "Research cooperative education programs that alternate study and paid work",
            "Consider starting at community college and transferring",
            "Explore in-state public universities with reciprocity agreements"
          ],
          resources: [
            {
              title: "Strategies to Make College More Affordable",
              description: "Practical ways to reduce overall college costs",
              link: "https://bigfuture.collegeboard.org/pay-for-college/paying-your-share/keeping-college-costs-down",
              type: "article"
            }
          ]
        }
      ]
    }
  }
];
