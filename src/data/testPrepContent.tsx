
import { ArrowRight, BookOpen, BrainCircuit, Calculator, CheckCircle, FileText, GraduationCap, LineChart, List, Puzzle, TimerIcon, Trophy, YoutubeIcon } from "lucide-react";
import React from "react";

export type TestPrepSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  requiresAuth: boolean;
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      tips?: string[];
      resources?: TestPrepResource[];
    }[];
  };
};

export type TestPrepResource = {
  title: string;
  description: string;
  link: string;
  type: "video" | "article" | "tool" | "website" | "playlist" | "course";
};

export const testPrepData: TestPrepSection[] = [
  {
    id: "practice-tests",
    title: "Practice Tests with Solutions",
    icon: <FileText className="h-6 w-6" />,
    shortDescription: "Full-length practice exams with detailed explanations for every question.",
    requiresAuth: false,
    content: {
      introduction: "Regular practice with full-length tests is one of the most effective ways to prepare for the SAT/ACT. Our collection of official and high-quality practice tests will help you build familiarity with the test format, improve your time management, and identify your strengths and weaknesses.",
      sections: [
        {
          title: "Official SAT Practice Tests",
          content: "The College Board offers eight official SAT practice tests that accurately reflect the format and difficulty of the actual exam. Complete these tests under timed conditions to get the most realistic practice experience possible.",
          resources: [
            {
              title: "Official SAT Practice Tests (College Board)",
              description: "Download official SAT practice tests with answer keys and explanations",
              link: "https://satsuite.collegeboard.org/sat/practice-preparation/practice-tests",
              type: "website"
            },
            {
              title: "Khan Academy Official SAT Practice",
              description: "Free personalized practice tests and questions with instant feedback",
              link: "https://www.khanacademy.org/sat",
              type: "tool"
            }
          ]
        },
        {
          title: "Official ACT Practice Tests",
          content: "The ACT organization provides official practice tests that mirror the structure and content of the actual exam. Use these resources to familiarize yourself with the unique format of the ACT.",
          resources: [
            {
              title: "Official ACT Practice Test",
              description: "Download complete ACT practice tests with scoring guides",
              link: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/free-act-test-prep.html",
              type: "website"
            },
            {
              title: "ACT Academy",
              description: "Free online learning tool and test practice program",
              link: "https://academy.act.org/",
              type: "tool"
            }
          ]
        },
        {
          title: "Using Practice Tests Effectively",
          content: "Simply taking practice tests isn't enough—how you use them matters. Take tests under realistic conditions, analyze your mistakes thoroughly, and track your progress over time.",
          tips: [
            "Simulate test day conditions: use a quiet room, proper timing, and minimal breaks",
            "Take full-length tests to build stamina and time management skills",
            "Review every question you miss AND those you guessed correctly",
            "Identify patterns in your mistakes to focus your study efforts",
            "Space out practice tests to allow time for targeted review between them"
          ],
          resources: [
            {
              title: "How to Review SAT Practice Tests Effectively",
              description: "Step-by-step guide to analyzing your practice test results",
              link: "https://blog.prepscholar.com/how-to-review-sat-practice-tests",
              type: "article"
            },
            {
              title: "Making the Most of Practice Tests",
              description: "Video guide on maximizing the value of practice exams",
              link: "https://www.youtube.com/watch?v=OzfsWL2v0Vc",
              type: "video"
            }
          ]
        }
      ]
    }
  },
  {
    id: "subject-guides",
    title: "Subject-Specific Study Guides",
    icon: <BookOpen className="h-6 w-6" />,
    shortDescription: "Comprehensive guides for each test section: Math, Reading, Writing & Language, and Science (ACT).",
    requiresAuth: false,
    content: {
      introduction: "Master the content knowledge and specific skills required for each section of the SAT/ACT with our detailed subject guides. These resources break down complex concepts into manageable chunks and provide targeted strategies for each test component.",
      sections: [
        {
          title: "SAT/ACT Math",
          content: "Both the SAT and ACT test mathematical concepts ranging from pre-algebra to basic trigonometry. Our guides break down the specific content areas, common question types, and effective problem-solving approaches for the math sections.",
          tips: [
            "Memorize key formulas that aren't provided on the test",
            "Practice mental math to save time on simple calculations",
            "Learn to recognize when to use your calculator and when to solve by hand",
            "Develop strategies for checking your work efficiently",
            "Practice translating word problems into mathematical equations"
          ],
          resources: [
            {
              title: "Complete SAT Math Study Guide",
              description: "Comprehensive review of all SAT math concepts with practice problems",
              link: "https://www.khanacademy.org/test-prep/sat/x0a8c2e5f:untitled-652/x0a8c2e5f:math-basics",
              type: "course"
            },
            {
              title: "ACT Math - The Ultimate Review Guide",
              description: "Video playlist covering all ACT math topics",
              link: "https://www.youtube.com/playlist?list=PLWrx3HAZbAqHSCQXShR7u4i6AD3aO64Ma",
              type: "playlist"
            },
            {
              title: "SAT Math: The Ultimate Guessing Trick",
              description: "Learn valuable strategies for when you need to make an educated guess",
              link: "https://www.youtube.com/watch?v=QJgQx1II-Qk",
              type: "video"
            }
          ]
        },
        {
          title: "SAT/ACT Reading",
          content: "The reading sections assess your ability to comprehend and analyze different types of passages. Our guides help you develop efficient reading strategies, improve your comprehension skills, and effectively tackle different question types.",
          tips: [
            "Practice active reading by asking yourself questions as you read",
            "Learn to identify main ideas, tone, and author's purpose quickly",
            "Develop skimming techniques for certain question types",
            "Practice finding evidence in the text to support your answers",
            "Read various types of texts regularly to build comprehension skills"
          ],
          resources: [
            {
              title: "Evidence-Based Reading and Writing Guide",
              description: "Detailed strategies for tackling SAT reading passages and questions",
              link: "https://blog.collegevine.com/the-ultimate-study-guide-for-sat-reading",
              type: "article"
            },
            {
              title: "ACT Reading Strategy Guide",
              description: "Techniques to improve speed and accuracy on the ACT reading test",
              link: "https://www.methodtestprep.com/blog/complete-guide-act-reading-section/",
              type: "article"
            },
            {
              title: "How to Get a Perfect Score on the SAT Reading Section",
              description: "Video with advanced strategies from a perfect scorer",
              link: "https://www.youtube.com/watch?v=EjBuXxg6ueI",
              type: "video"
            }
          ]
        },
        {
          title: "SAT/ACT Writing and Language",
          content: "These sections test your knowledge of grammar rules, effective language use, and essay structure. Our guides cover essential grammar concepts, common error patterns, and strategies for improving sentences and paragraphs.",
          tips: [
            "Learn the major grammar rules tested (subject-verb agreement, pronoun usage, etc.)",
            "Practice identifying wordy phrases and simplifying them",
            "Study effective transitions between ideas",
            "Learn the differences between formal and informal language use",
            "Practice determining which information is relevant to include in a passage"
          ],
          resources: [
            {
              title: "Complete Guide to SAT Grammar Rules",
              description: "Comprehensive coverage of all grammar concepts tested on the SAT",
              link: "https://blog.prepscholar.com/the-complete-guide-to-sat-grammar-rules",
              type: "article"
            },
            {
              title: "Ultimate ACT English Punctuation Guide",
              description: "Detailed explanation of punctuation rules for the ACT",
              link: "https://www.albert.io/blog/act-english-punctuation-rules/",
              type: "article"
            },
            {
              title: "Writing and Language Test Tips",
              description: "Strategy playlist for the SAT Writing and Language section",
              link: "https://www.youtube.com/playlist?list=PLJm7_t7JnSXLExZqPZ2L-JI7aMxOZcnR-",
              type: "playlist"
            }
          ]
        },
        {
          title: "ACT Science",
          content: "The ACT Science section tests your ability to analyze and interpret scientific data, not your science knowledge. Our guide helps you develop strategies for understanding graphs, tables, experiments, and conflicting viewpoints quickly.",
          tips: [
            "Practice reading graphs, charts, and tables quickly",
            "Learn to identify patterns and relationships in data",
            "Develop strategies for comparing multiple experiments or hypotheses",
            "Improve your ability to draw conclusions from limited information",
            "Build familiarity with scientific terms and experiment design"
          ],
          resources: [
            {
              title: "ACT Science: The Only Guide You'll Ever Need",
              description: "Comprehensive strategies for all question types on the ACT Science section",
              link: "https://blog.prepscholar.com/the-only-act-science-study-guide-youll-ever-need",
              type: "article"
            },
            {
              title: "For the Love of ACT Science",
              description: "Popular book excerpt with proven strategies for ACT Science",
              link: "https://www.mcelroytutoring.com/lower-your-act-science-score-by-10-points",
              type: "article"
            },
            {
              title: "ACT Science Strategies: How I got a 36 on the Science Section",
              description: "Video tutorial from a perfect scorer on ACT Science",
              link: "https://www.youtube.com/watch?v=55LpwJ7H4Gg",
              type: "video"
            }
          ]
        }
      ]
    }
  },
  {
    id: "test-strategies",
    title: "Test-Taking Strategies",
    icon: <Puzzle className="h-6 w-6" />,
    shortDescription: "Expert approaches to tackle different question types, manage time effectively, and maximize your score.",
    requiresAuth: false,
    content: {
      introduction: "Beyond content knowledge, success on standardized tests requires strategic thinking. Learn how to approach each section efficiently, manage your time effectively, eliminate wrong answers, and make educated guesses when necessary.",
      sections: [
        {
          title: "Time Management Techniques",
          content: "One of the biggest challenges on standardized tests is completing all questions within the time limit. Learn strategies for pacing yourself, prioritizing questions, and ensuring you have time to attempt every question.",
          tips: [
            "Take timed practice sections regularly to build your internal clock",
            "Develop a section-specific pacing strategy (e.g., 1 minute per math question)",
            "Know when to skip difficult questions and return to them later",
            "Practice the 10-second rule: if you can't start solving in 10 seconds, mark and skip",
            "Leave 2-3 minutes at the end of each section for review and bubbling"
          ],
          resources: [
            {
              title: "SAT/ACT Time Management Strategies",
              description: "Effective techniques for managing time pressure during the test",
              link: "https://www.applerouth.com/blog/2017/11/28/time-management-on-the-sat-and-act/",
              type: "article"
            },
            {
              title: "How to Pace Yourself on Every Section of the SAT",
              description: "Section-by-section pacing strategies for the SAT",
              link: "https://www.youtube.com/watch?v=UtQghJwZ3zM",
              type: "video"
            }
          ]
        },
        {
          title: "Process of Elimination Strategies",
          content: "Eliminating wrong answers significantly increases your chances of selecting the correct answer. Learn systematic approaches to identify and eliminate incorrect options, even when you're not completely sure of the right answer.",
          tips: [
            "Always try to eliminate at least two answer choices",
            "Look for extreme language (always, never, etc.) which often indicates incorrect answers",
            "For reading questions, eliminate answers without textual support",
            "In math, test answer choices by plugging them back into the problem",
            "Look for grammatical inconsistencies between the question and answer choices"
          ],
          resources: [
            {
              title: "The Power of Process of Elimination",
              description: "How to use POE effectively on standardized tests",
              link: "https://www.compassprep.com/the-power-of-process-of-elimination/",
              type: "article"
            },
            {
              title: "ACT/SAT Reading: Process of Elimination",
              description: "Video tutorial on eliminating wrong answers in the reading section",
              link: "https://www.youtube.com/watch?v=x-zJwhudYok",
              type: "video"
            }
          ]
        },
        {
          title: "Strategic Guessing",
          content: "When you can't solve a problem or have limited time, strategic guessing can help improve your score. Learn when and how to make educated guesses that maximize your chances of earning points.",
          tips: [
            "Never leave questions blank (there's no penalty for wrong answers)",
            "Develop a consistent guess letter for complete guesses",
            "For math questions, estimate the approximate value and choose the closest answer",
            "On reading questions, look for answers directly supported by the text",
            "When stuck between two answers, reread the question for subtle clues"
          ],
          resources: [
            {
              title: "Smart Guessing Strategies for the SAT and ACT",
              description: "How to make educated guesses when you don't know the answer",
              link: "https://www.petersons.com/blog/strategic-guessing-on-standardized-tests/",
              type: "article"
            },
            {
              title: "SAT Math: The Ultimate Guessing Trick",
              description: "Video explaining effective guessing strategies for SAT Math",
              link: "https://www.youtube.com/watch?v=QJgQx1II-Qk",
              type: "video"
            }
          ]
        },
        {
          title: "Mental Endurance and Focus",
          content: "The SAT and ACT are marathon tests that require sustained concentration for 3+ hours. Learn techniques to maintain focus, manage test anxiety, and keep your energy levels up throughout the exam.",
          tips: [
            "Practice full-length tests to build mental stamina",
            "Develop a pre-test routine to calm nerves and focus your mind",
            "Use brief mental breaks between sections to reset (deep breaths, stretching)",
            "Practice positive self-talk to overcome difficult moments",
            "Prepare physically with proper sleep, nutrition, and hydration"
          ],
          resources: [
            {
              title: "Test Anxiety: Causes and Remedies",
              description: "Strategies for managing anxiety during standardized tests",
              link: "https://www.princetonreview.com/college-advice/test-anxiety",
              type: "article"
            },
            {
              title: "How to Stay Focused During Standardized Tests",
              description: "Techniques to maintain concentration during long exams",
              link: "https://www.youtube.com/watch?v=JKm3VWuvCwk",
              type: "video"
            }
          ]
        }
      ]
    }
  },
  {
    id: "score-tracking",
    title: "Score Improvement Tracking",
    icon: <LineChart className="h-6 w-6" />,
    shortDescription: "Track your practice test scores, analyze performance trends, and identify areas for improvement.",
    requiresAuth: true,
    content: {
      introduction: "Tracking your progress is essential for effective test preparation. Our score improvement tracking tools help you record practice test results, visualize your progress over time, and identify specific content areas and question types that need additional focus.",
      sections: [
        {
          title: "Setting Your Baseline and Goals",
          content: "Begin your test prep journey by taking a diagnostic test to establish your starting point. Then, set realistic score goals based on your target schools' middle 50% range and your initial performance.",
          tips: [
            "Take a full-length official practice test under realistic conditions",
            "Research average SAT/ACT scores for your target colleges",
            "Set a primary goal score and a stretch goal score",
            "Break down your overall goal into section-specific targets",
            "Establish a timeline with milestone scores to track progress"
          ],
          resources: [
            {
              title: "How to Set Realistic SAT/ACT Score Goals",
              description: "Guide to establishing appropriate score targets based on your needs",
              link: "https://www.applerouth.com/blog/2020/09/22/how-to-set-the-right-target-score/",
              type: "article"
            },
            {
              title: "College Board Score Search",
              description: "Tool to find average test scores for specific colleges",
              link: "https://collegereadiness.collegeboard.org/sat/scores/understanding-scores/interpreting",
              type: "tool"
            }
          ]
        },
        {
          title: "Detailed Performance Analysis",
          content: "Our tracking system allows you to analyze your performance at multiple levels: overall score, section scores, question types, and specific content areas. This granular analysis helps you identify exactly where to focus your study efforts.",
          tips: [
            "Track both raw scores and scaled scores for each section",
            "Categorize missed questions by content area and question type",
            "Identify timing issues by tracking questions you didn't reach",
            "Note questions where you guessed correctly vs. knew the answer",
            "Look for patterns in your errors across multiple practice tests"
          ],
          resources: [
            {
              title: "How to Analyze Your SAT Score Report",
              description: "Detailed explanation of SAT score reports and how to use them",
              link: "https://www.khanacademy.org/test-prep/sat/new-sat-tips-planning/new-sat-how-to-prep/a/full-length-sat-practice-test-and-what-to-do-with-your-score",
              type: "article"
            },
            {
              title: "Understanding Your ACT Score Report",
              description: "Video explanation of how to interpret and use ACT score reports",
              link: "https://www.youtube.com/watch?v=1I6f51n3-dc",
              type: "video"
            }
          ]
        },
        {
          title: "Progress Visualization",
          content: "Visual representations of your progress can provide motivation and clarity. Our tracking tools include graphs and charts that display your score improvements over time and highlight your strengths and weaknesses.",
          tips: [
            "Create a score graph to visualize progress over time",
            "Use radar charts to identify relative strengths across test sections",
            "Set up a question type accuracy tracker to target weak areas",
            "Compare your performance to target score benchmarks",
            "Share progress with tutors or study partners for accountability"
          ]
        },
        {
          title: "Adaptive Study Planning",
          content: "Based on your tracked results, our system helps you create customized study plans that target your specific areas of weakness and adjust as you improve.",
          tips: [
            "Allocate study time proportionally to your areas of weakness",
            "Revisit content areas where you've shown improvement to ensure retention",
            "Adjust your study schedule based on rate of improvement",
            "Focus on high-yield content areas (those with many questions on the test)",
            "Balance content review with strategy practice based on error patterns"
          ],
          resources: [
            {
              title: "Data-Driven SAT/ACT Prep",
              description: "How to use performance data to guide your study plan",
              link: "https://www.compassprep.com/the-most-effective-way-to-prepare-for-standardized-tests/",
              type: "article"
            },
            {
              title: "Personalized SAT Study Plan",
              description: "Video on creating a customized study schedule based on your needs",
              link: "https://www.youtube.com/watch?v=0cHW1MUFcWs",
              type: "video"
            }
          ]
        }
      ]
    }
  },
  {
    id: "additional-resources",
    title: "Additional Resources",
    icon: <BrainCircuit className="h-6 w-6" />,
    shortDescription: "Curated collection of books, websites, apps, and other resources to supplement your test preparation.",
    requiresAuth: false,
    content: {
      introduction: "Beyond our comprehensive guides, we've curated a collection of high-quality external resources to supplement your test preparation. From official test prep books to mobile apps and online courses, these resources can provide additional practice and alternative explanations for challenging concepts.",
      sections: [
        {
          title: "Recommended Books",
          content: "While many resources are available online, certain print materials offer comprehensive content review and practice that can be valuable complements to digital resources.",
          resources: [
            {
              title: "The Official SAT Study Guide",
              description: "Published by the College Board, includes 8 official practice tests and review material",
              link: "https://www.amazon.com/Official-SAT-Study-Guide-2020/dp/1457312190",
              type: "article"
            },
            {
              title: "The Official ACT Prep Guide",
              description: "Published by ACT, includes full-length practice tests and hundreds of practice questions",
              link: "https://www.amazon.com/Official-ACT-Prep-Guide-2022-2023/dp/1394196938/",
              type: "article"
            },
            {
              title: "Princeton Review SAT Premium Prep",
              description: "Comprehensive review materials with strategies and practice tests",
              link: "https://www.amazon.com/Princeton-Review-Premium-Prep-2023/dp/0593450574/",
              type: "article"
            },
            {
              title: "Barron's ACT Premium Study Guide",
              description: "Includes comprehensive content review, strategies, and practice tests",
              link: "https://www.amazon.com/Barrons-ACT-Premium-Study-Guide/dp/1506281966/",
              type: "article"
            }
          ]
        },
        {
          title: "Mobile Apps",
          content: "Test prep apps allow you to study on the go and fit practice into small pockets of time throughout your day.",
          resources: [
            {
              title: "Khan Academy SAT",
              description: "Free official SAT practice app with thousands of questions and video lessons",
              link: "https://apps.apple.com/us/app/khan-academy/id469863705",
              type: "tool"
            },
            {
              title: "ACT Online Prep",
              description: "Official ACT preparation program with personalized learning paths",
              link: "https://www.act.org/content/act/en/products-and-services/the-act/test-preparation/act-online-prep.html",
              type: "tool"
            },
            {
              title: "UWorld College Prep",
              description: "High-quality practice questions with detailed explanations for SAT and ACT",
              link: "https://collegeprep.uworld.com/",
              type: "tool"
            },
            {
              title: "Magoosh SAT & ACT",
              description: "Video lessons and practice questions with score predictions",
              link: "https://magoosh.com/sat/",
              type: "tool"
            }
          ]
        },
        {
          title: "Online Courses and Video Resources",
          content: "Structured online courses and video libraries can provide comprehensive coverage of test content and strategies.",
          resources: [
            {
              title: "Khan Academy SAT",
              description: "Free, comprehensive SAT prep program developed in partnership with College Board",
              link: "https://www.khanacademy.org/sat",
              type: "course"
            },
            {
              title: "PrepScholar SAT/ACT Courses",
              description: "Personalized online prep with customized study schedules",
              link: "https://www.prepscholar.com/",
              type: "course"
            },
            {
              title: "SupertutorTV YouTube Channel",
              description: "Hundreds of free SAT and ACT tutorial videos covering content and strategies",
              link: "https://www.youtube.com/c/SupertutorTV",
              type: "playlist"
            },
            {
              title: "Scalar Learning SAT Math",
              description: "Comprehensive video series covering all SAT math concepts",
              link: "https://www.youtube.com/playlist?list=PLZBnAG03572om0oJ98Q0RJiSRdQyK3DCD",
              type: "playlist"
            }
          ]
        },
        {
          title: "Online Practice and Question Banks",
          content: "Additional sources of practice questions can help you continue challenging yourself after completing official practice tests.",
          resources: [
            {
              title: "UWorld Question Bank",
              description: "High-quality SAT/ACT practice questions with detailed explanations",
              link: "https://collegeprep.uworld.com/",
              type: "tool"
            },
            {
              title: "Varsity Tutors Free Practice Tests",
              description: "Free diagnostic tests and practice questions for SAT and ACT",
              link: "https://www.varsitytutors.com/practice-tests",
              type: "tool"
            },
            {
              title: "CrackSAT.net",
              description: "Collection of free SAT practice tests and questions",
              link: "https://www.cracksat.net/",
              type: "website"
            },
            {
              title: "ACT Academy",
              description: "Free online learning tool and test practice program",
              link: "https://academy.act.org/",
              type: "tool"
            }
          ]
        }
      ]
    }
  }
];
