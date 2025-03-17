
import React from "react";
import { 
  BookOpen, 
  Mic, 
  PenTool, 
  ListChecks, 
  FileText, 
  BookOpen as BookOpenIcon, 
  GraduationCap, 
  Lightbulb, 
  BookMarked
} from "lucide-react";

export type TestSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  requiresAuth?: boolean;
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
  type: "video" | "article" | "tool" | "website" | "playlist" | "course" | "app" | "pdf";
};

export const englishProficiencyData: TestSection[] = [
  {
    id: "overview",
    title: "English Proficiency Tests Overview",
    icon: <BookOpenIcon className="h-6 w-6" />,
    shortDescription: "Understand the structure and requirements of major English proficiency exams including TOEFL, IELTS, and more.",
    content: {
      introduction: "English proficiency tests are standardized assessments designed to evaluate non-native English speakers' ability to use and understand English in academic and professional settings. This guide provides an overview of the major tests, their formats, and strategies to prepare effectively.",
      sections: [
        {
          title: "Major English Proficiency Tests",
          content: "Several standardized tests assess English language proficiency, each with different formats, scoring systems, and institutional recognition. The most widely accepted tests include TOEFL (Test of English as a Foreign Language), IELTS (International English Language Testing System), PTE Academic (Pearson Test of English), and Cambridge English Qualifications (including FCE, CAE, and CPE).",
          resources: [
            {
              title: "TOEFL vs. IELTS vs. PTE: Which Test Should You Take?",
              description: "A comprehensive comparison of the major English proficiency tests",
              link: "https://magoosh.com/blog/toefl-vs-ielts-vs-pte/",
              type: "article"
            },
            {
              title: "Overview of English Proficiency Tests",
              description: "Video explaining the different tests and their requirements",
              link: "https://www.youtube.com/watch?v=WcEo2Bvs2Yk",
              type: "video"
            }
          ]
        },
        {
          title: "Test Formats and Sections",
          content: "Most English proficiency tests evaluate four core language skills: reading, listening, speaking, and writing. However, the specific format, duration, and administration methods vary. TOEFL iBT is primarily internet-based, IELTS offers both computer and paper-based options, and PTE Academic is fully computer-based with AI scoring for speaking sections.",
          tips: [
            "TOEFL iBT typically takes about 3 hours and is delivered via computer",
            "IELTS has a total test time of 2 hours and 45 minutes",
            "PTE Academic is typically completed in about 3 hours",
            "Cambridge exams vary in length from 2-4 hours depending on the level"
          ],
          resources: [
            {
              title: "Inside the TOEFL Test",
              description: "Official ETS videos explaining each section of the TOEFL iBT",
              link: "https://www.youtube.com/playlist?list=PLxkE-kzOmK6up-0at-bbv3Q55hJ9CAzUI",
              type: "playlist"
            },
            {
              title: "IELTS Test Format",
              description: "Official breakdown of the IELTS test format and scoring",
              link: "https://www.ielts.org/about-the-test/test-format",
              type: "website"
            }
          ]
        },
        {
          title: "Scoring Systems",
          content: "Each test has a unique scoring system. TOEFL iBT scores range from 0-120, with each section scored 0-30. IELTS uses a band scale from 1-9, with possibility of half-band scores (e.g., 6.5). PTE Academic scores range from 10-90. Understanding the scoring criteria is essential for setting realistic goals and interpreting your results.",
          resources: [
            {
              title: "How to Interpret Your TOEFL Score",
              description: "Guide to understanding what your TOEFL scores mean",
              link: "https://www.ets.org/toefl/score-users/scores-admissions/about.html",
              type: "website"
            },
            {
              title: "Understanding IELTS Scores",
              description: "Explanation of the IELTS band scores and what they represent",
              link: "https://www.britishcouncil.org/exam/ielts/results/scores-explained",
              type: "website"
            }
          ]
        },
        {
          title: "Choosing the Right Test",
          content: "When deciding which test to take, consider several factors: the requirements of your target institutions, test availability in your location, your strengths and weaknesses in different testing formats, and cost. Many universities and programs accept scores from multiple tests, giving you flexibility in your choice.",
          tips: [
            "Check which tests are accepted by your target institutions",
            "Consider which test format best matches your strengths",
            "Factor in test availability and scheduling in your region",
            "Compare test fees and preparation costs"
          ],
          resources: [
            {
              title: "Which English Test Should I Take?",
              description: "Interactive tool to help you decide which test suits your needs",
              link: "https://www.cambridgeenglish.org/test-your-english/which-test-to-take/",
              type: "tool"
            }
          ]
        }
      ]
    }
  },
  {
    id: "speaking-practice",
    title: "Speaking Practice",
    icon: <Mic className="h-6 w-6" />,
    shortDescription: "Develop your English speaking skills with structured practice exercises, pronunciation guides, and conversation strategies.",
    content: {
      introduction: "The speaking component of English proficiency tests assesses your ability to communicate effectively in English. This section provides strategies, practice exercises, and resources to help you improve your pronunciation, fluency, vocabulary usage, and ability to organize your thoughts in spoken English.",
      sections: [
        {
          title: "Speaking Test Formats",
          content: "Each proficiency test has a different speaking section format. TOEFL iBT includes 4 speaking tasks that you complete by speaking into a microphone. IELTS has a face-to-face interview with an examiner. PTE Academic requires speaking into a microphone with responses scored by AI. Understanding the specific format of your chosen test is essential for targeted preparation.",
          resources: [
            {
              title: "TOEFL iBT Speaking Section Explained",
              description: "Detailed breakdown of the TOEFL speaking tasks",
              link: "https://www.toeflresources.com/speaking-section/",
              type: "website"
            },
            {
              title: "IELTS Speaking: Band 9 Sample",
              description: "Video showing a full IELTS Speaking test with examiner comments",
              link: "https://www.youtube.com/watch?v=G3CQlCSlg8U",
              type: "video"
            }
          ]
        },
        {
          title: "Pronunciation Practice",
          content: "Clear pronunciation is crucial for scoring well on speaking tests. Focus on commonly confused sounds in English, stress patterns in words and sentences, and intonation. Regular practice with feedback will help you identify and correct pronunciation issues that could affect your comprehensibility.",
          tips: [
            "Record yourself speaking and compare with native speakers",
            "Practice minimal pairs (e.g., 'ship' vs. 'sheep')",
            "Pay attention to word stress in multi-syllable words",
            "Work on sentence rhythm and intonation patterns"
          ],
          resources: [
            {
              title: "English Pronunciation Practice",
              description: "Comprehensive app for improving pronunciation with feedback",
              link: "https://www.elsa.app/",
              type: "app"
            },
            {
              title: "Rachel's English",
              description: "YouTube channel dedicated to American English pronunciation",
              link: "https://www.youtube.com/user/rachelsenglish",
              type: "video"
            },
            {
              title: "BBC Learning English Pronunciation Tips",
              description: "Free resources for improving your English pronunciation",
              link: "https://www.bbc.co.uk/learningenglish/english/features/pronunciation",
              type: "website"
            }
          ]
        },
        {
          title: "Fluency Development",
          content: "Fluency refers to your ability to speak smoothly, without excessive pauses or hesitations. Improve fluency through regular speaking practice, learning common transitions and fillers, and developing strategies to avoid long silences when searching for words or organizing thoughts.",
          tips: [
            "Practice speaking on topics from test prep materials daily",
            "Learn useful phrases to buy thinking time (e.g., 'That's an interesting question...')",
            "Join conversation groups or language exchange programs",
            "Record yourself speaking for 1-2 minutes on various topics and analyze your fluency"
          ],
          resources: [
            {
              title: "Speechling",
              description: "Platform offering free feedback from native speakers on your pronunciation",
              link: "https://speechling.com/",
              type: "website"
            },
            {
              title: "Tandem",
              description: "Language exchange app to practice with native speakers",
              link: "https://www.tandem.net/",
              type: "app"
            }
          ]
        },
        {
          title: "Response Organization",
          content: "Test scores often depend on how well you organize your responses. Learn to structure answers with clear introductions, well-developed points, and concise conclusions. Practice using templates for different question types to ensure comprehensive, coherent responses under time pressure.",
          tips: [
            "Use a simple structure: introduction, 2-3 main points, conclusion",
            "Practice transitions between ideas (e.g., 'Furthermore...', 'On the other hand...')",
            "Time yourself when practicing to build speed and efficiency",
            "Develop templates for common question types in your test"
          ],
          resources: [
            {
              title: "TOEFL Speaking Templates",
              description: "PDF with response templates for each TOEFL speaking task",
              link: "https://www.toeflresources.com/wp-content/uploads/2020/04/TOEFL-Speaking-Templates.pdf",
              type: "pdf"
            },
            {
              title: "Speaking Structure Strategies",
              description: "Video tutorial on structuring speaking responses effectively",
              link: "https://www.youtube.com/watch?v=ZEd0-zTVoMo",
              type: "video"
            }
          ]
        }
      ]
    }
  },
  {
    id: "writing-practice",
    title: "Writing Practice",
    icon: <PenTool className="h-6 w-6" />,
    shortDescription: "Improve your written English with essay structures, grammar exercises, and feedback tools for academic and general writing tasks.",
    content: {
      introduction: "The writing section of English proficiency tests evaluates your ability to express ideas clearly and coherently in written English. This guide provides strategies for different writing task types, essay structures, grammar improvement, and resources for practice and feedback.",
      sections: [
        {
          title: "Writing Task Types",
          content: "English proficiency tests include various writing task types. TOEFL iBT has integrated and independent writing tasks. IELTS Academic has a graph/chart description and an essay, while IELTS General has a letter and an essay. PTE Academic includes summarizing written text and essay writing. Familiarize yourself with the specific requirements of your chosen test.",
          resources: [
            {
              title: "IELTS Writing Task 1 Academic and General",
              description: "Detailed explanation of IELTS Writing Task 1 requirements",
              link: "https://www.ieltsadvantage.com/ielts-writing-task-1/",
              type: "website"
            },
            {
              title: "TOEFL Independent Writing Tutorial",
              description: "Step-by-step guide to the TOEFL independent writing task",
              link: "https://www.toeflresources.com/writing-section/toefl-independent-writing-section/",
              type: "article"
            }
          ]
        },
        {
          title: "Essay Structure and Organization",
          content: "A well-structured essay is crucial for achieving high scores. Learn to organize your writing with clear introductions, body paragraphs with topic sentences and supporting details, and effective conclusions. Practice outlining before writing to ensure logical flow and comprehensive coverage of the topic.",
          tips: [
            "Create a brief outline before writing any essay",
            "Write a clear thesis statement in your introduction",
            "Use one main idea per paragraph with supporting details",
            "Practice timed writing to improve efficiency under test conditions"
          ],
          resources: [
            {
              title: "Academic Writing Structure",
              description: "Guide to structuring academic essays effectively",
              link: "https://www.scribbr.com/academic-essay/essay-structure/",
              type: "article"
            },
            {
              title: "Essay Organization Patterns",
              description: "Video explaining different organizational structures for essays",
              link: "https://www.youtube.com/watch?v=L8SuaFShRQU",
              type: "video"
            }
          ]
        },
        {
          title: "Grammar and Vocabulary Enrichment",
          content: "Advanced grammar and varied vocabulary significantly impact writing scores. Focus on using complex sentence structures, appropriate transitions, and precise vocabulary. Review common grammar issues for non-native speakers and practice incorporating academic vocabulary into your writing.",
          tips: [
            "Learn to use a variety of sentence structures (simple, compound, complex)",
            "Practice using cohesive devices and transitions",
            "Build academic vocabulary relevant to common essay topics",
            "Review common grammar error patterns in your writing"
          ],
          resources: [
            {
              title: "Academic Word List Exercises",
              description: "Practice with the 570 most common academic words",
              link: "https://www.englishvocabularyexercises.com/AWL/",
              type: "website"
            },
            {
              title: "Grammar for IELTS Writing",
              description: "Comprehensive guide to grammar for IELTS Writing",
              link: "https://www.ieltsbuddy.com/grammar-for-ielts.html",
              type: "website"
            },
            {
              title: "Grammarly",
              description: "Writing assistant tool to check grammar and enhance vocabulary",
              link: "https://www.grammarly.com/",
              type: "tool"
            }
          ]
        },
        {
          title: "Getting Feedback on Your Writing",
          content: "Receiving constructive feedback is essential for improvement. Learn how to use online tools for initial grammar and vocabulary checks, but also seek human feedback to address higher-level issues like argument strength, coherence, and overall effectiveness of your writing.",
          resources: [
            {
              title: "Write & Improve with Cambridge",
              description: "Free tool that provides instant feedback on writing with CEFR levels",
              link: "https://writeandimprove.com/",
              type: "tool"
            },
            {
              title: "IELTS Writing Correction Service",
              description: "Professional feedback service for IELTS writing practice",
              link: "https://ieltscharlie.com/writing-correction/",
              type: "service"
            },
            {
              title: "r/EnglishLearning subreddit",
              description: "Community where you can post writing samples for feedback",
              link: "https://www.reddit.com/r/EnglishLearning/",
              type: "website"
            }
          ]
        }
      ]
    }
  },
  {
    id: "vocabulary-building",
    title: "Vocabulary Building",
    icon: <BookMarked className="h-6 w-6" />,
    shortDescription: "Expand your English vocabulary with targeted word lists, memory techniques, and practical exercises for different contexts.",
    content: {
      introduction: "A rich vocabulary is essential for success in English proficiency tests and real-world communication. This section provides strategies for vocabulary acquisition, memorization techniques, and resources for building both general and academic English vocabulary.",
      sections: [
        {
          title: "Vocabulary for English Tests",
          content: "Different English proficiency tests may emphasize different vocabulary domains. Academic tests like TOEFL and IELTS Academic focus on academic vocabulary, while general tests like IELTS General include more everyday and workplace vocabulary. Understanding which vocabulary to prioritize can make your study more efficient.",
          tips: [
            "Focus on the Academic Word List for TOEFL and IELTS Academic",
            "Learn vocabulary in context rather than isolated word lists",
            "Pay attention to collocations (words that naturally go together)",
            "Study topic-specific vocabulary for common test themes"
          ],
          resources: [
            {
              title: "Vocabulary for IELTS",
              description: "Topic-based vocabulary lists for IELTS preparation",
              link: "https://www.vocabulary.com/lists/194479",
              type: "website"
            },
            {
              title: "TOEFL Vocabulary Lists with Exercises",
              description: "Essential word lists with practice activities",
              link: "https://www.prepscholar.com/toefl/blog/toefl-vocabulary-list/",
              type: "article"
            }
          ]
        },
        {
          title: "Vocabulary Learning Strategies",
          content: "Effective vocabulary acquisition requires more than simple memorization. Learn techniques like spaced repetition, contextual learning, word mapping, and etymological analysis to deepen your understanding and retention of new words.",
          tips: [
            "Use flashcard apps with spaced repetition algorithms",
            "Learn words in related groups or themes",
            "Study word families (e.g., economy, economic, economical)",
            "Use new vocabulary actively in speaking and writing"
          ],
          resources: [
            {
              title: "Anki Flashcard App",
              description: "Powerful spaced repetition flashcard system",
              link: "https://apps.ankiweb.net/",
              type: "app"
            },
            {
              title: "Vocabulary.com",
              description: "Adaptive vocabulary learning platform",
              link: "https://www.vocabulary.com/",
              type: "website"
            },
            {
              title: "How to Remember New Vocabulary",
              description: "Research-based techniques for vocabulary retention",
              link: "https://www.youtube.com/watch?v=JzA6Pkf_0nA",
              type: "video"
            }
          ]
        },
        {
          title: "Academic Vocabulary Focus",
          content: "Academic vocabulary includes words commonly used in educational texts, lectures, and formal writing. The Academic Word List (AWL) contains 570 word families that appear frequently across academic disciplines. Mastering these words can significantly improve your performance on English proficiency tests.",
          resources: [
            {
              title: "Academic Word List (AWL) in Context",
              description: "Practice the AWL with example sentences and definitions",
              link: "https://www.academicvocabularyexercises.com/",
              type: "website"
            },
            {
              title: "Academic Vocabulary in Use",
              description: "Comprehensive book for self-study of academic vocabulary",
              link: "https://www.cambridge.org/us/cambridgeenglish/catalog/grammar-vocabulary-and-pronunciation/academic-vocabulary-use-2nd-edition",
              type: "book"
            }
          ]
        },
        {
          title: "Vocabulary in Context",
          content: "Context-based vocabulary learning is more effective than memorizing isolated word lists. Improve your vocabulary by reading widely, listening to diverse content, and noting how words are used in natural contexts. Pay attention to collocations, register, and connotations of words.",
          tips: [
            "Read articles on various topics and note unfamiliar words",
            "Watch videos with subtitles and pause to look up new words",
            "Create sentence examples using new vocabulary",
            "Use a learner's dictionary to understand usage and collocations"
          ],
          resources: [
            {
              title: "News in Levels",
              description: "Current news articles written at different difficulty levels",
              link: "https://www.newsinlevels.com/",
              type: "website"
            },
            {
              title: "Oxford Learner's Dictionary",
              description: "Dictionary designed specifically for English learners",
              link: "https://www.oxfordlearnersdictionaries.com/",
              type: "tool"
            },
            {
              title: "TED Talks with Interactive Transcripts",
              description: "Engaging talks with vocabulary learning features",
              link: "https://www.ted.com/talks",
              type: "website"
            }
          ]
        }
      ]
    }
  },
  {
    id: "grammar-comprehension",
    title: "Grammar & Comprehension",
    icon: <BookOpen className="h-6 w-6" />,
    shortDescription: "Master English grammar rules and improve your reading and listening comprehension with structured exercises and practice materials.",
    content: {
      introduction: "Strong grammar skills and reading/listening comprehension are fundamental to success on English proficiency tests. This section offers targeted resources for improving your grammar knowledge, reading strategies, and listening skills through structured practice and technique development.",
      sections: [
        {
          title: "Grammar for Proficiency Tests",
          content: "English proficiency tests evaluate both your explicit knowledge of grammar rules and your ability to use grammar correctly in context. Focus on mastering complex structures that demonstrate advanced proficiency, such as conditionals, relative clauses, perfect tenses, and passive constructions.",
          tips: [
            "Review grammar systematically, focusing on one structure at a time",
            "Practice identifying grammar errors in sample sentences",
            "Apply grammar knowledge in your own writing and speaking",
            "Pay special attention to tenses, articles, and prepositions"
          ],
          resources: [
            {
              title: "English Grammar in Use",
              description: "Comprehensive grammar practice book with explanations",
              link: "https://www.cambridge.org/us/cambridgeenglish/catalog/grammar-vocabulary-and-pronunciation/english-grammar-use-5th-edition",
              type: "book"
            },
            {
              title: "Advanced Grammar for IELTS",
              description: "Grammar lessons targeting IELTS band scores 6.5+",
              link: "https://www.ieltsadvantage.com/grammar-for-ielts/",
              type: "website"
            },
            {
              title: "English Club Grammar Practice",
              description: "Free grammar exercises organized by topic",
              link: "https://www.englishclub.com/grammar/",
              type: "website"
            }
          ]
        },
        {
          title: "Reading Comprehension Strategies",
          content: "Effective reading strategies help you understand academic texts quickly and accurately. Learn techniques such as skimming for main ideas, scanning for specific information, and making inferences. Practice identifying the author's purpose, tone, and distinguishing between facts and opinions.",
          tips: [
            "Practice different reading speeds for different purposes",
            "Learn to identify key information in complex texts",
            "Preview texts by reading titles, headings, and first/last paragraphs",
            "Practice making inferences and drawing conclusions from texts"
          ],
          resources: [
            {
              title: "IELTS Reading Practice Tests",
              description: "Full IELTS Reading tests with answers and explanations",
              link: "https://ieltsliz.com/ielts-reading-practice-tests/",
              type: "website"
            },
            {
              title: "TOEFL Reading Practice with TPO Tests",
              description: "Official TOEFL practice materials for reading",
              link: "https://www.ets.org/toefl/test-takers/ibt/prepare/practice-tests.html",
              type: "website"
            },
            {
              title: "Reading Comprehension Strategies",
              description: "Video tutorial on academic reading techniques",
              link: "https://www.youtube.com/watch?v=10auVRva1Jk",
              type: "video"
            }
          ]
        },
        {
          title: "Listening Comprehension Techniques",
          content: "Listening sections in English proficiency tests assess your ability to understand lectures, conversations, and discussions. Develop skills like note-taking, identifying main ideas and supporting details, and recognizing signpost language and transitions in spoken English.",
          tips: [
            "Practice listening to various accents and speaking styles",
            "Develop efficient note-taking techniques",
            "Learn to predict content based on context clues",
            "Pay attention to tone and attitude in spoken passages"
          ],
          resources: [
            {
              title: "IELTS Listening Practice Tests",
              description: "Full IELTS Listening tests with transcripts and explanations",
              link: "https://www.ielts-exam.net/ielts_listening_samples/",
              type: "website"
            },
            {
              title: "TED-Ed",
              description: "Educational videos with interactive transcripts and comprehension questions",
              link: "https://ed.ted.com/",
              type: "website"
            },
            {
              title: "BBC Learning English",
              description: "Audio and video resources for English learners at various levels",
              link: "https://www.bbc.co.uk/learningenglish/",
              type: "website"
            }
          ]
        },
        {
          title: "Integrated Skills Practice",
          content: "Modern English proficiency tests often include integrated tasks that combine multiple language skills. For example, TOEFL iBT has tasks that require you to read a passage, listen to a lecture, and then speak or write a response. Practice these combined skills to prepare for such tasks.",
          resources: [
            {
              title: "TOEFL Integrated Writing Practice",
              description: "Tutorial and practice for the integrated writing task",
              link: "https://www.toeflresources.com/writing-section/toefl-integrated-writing-section/",
              type: "article"
            },
            {
              title: "PTE Academic Summarize Spoken Text Practice",
              description: "Guidance and practice for the PTE summarizing task",
              link: "https://ptepreparation.com/pte-summarize-spoken-text/",
              type: "website"
            }
          ]
        }
      ]
    }
  },
  {
    id: "mock-tests",
    title: "Mock Tests with Evaluation",
    icon: <ListChecks className="h-6 w-6" />,
    shortDescription: "Practice with full-length mock tests that simulate actual exam conditions and receive detailed feedback on your performance.",
    requiresAuth: true,
    content: {
      introduction: "Taking full-length practice tests under exam-like conditions is one of the most effective ways to prepare for English proficiency exams. This section provides access to high-quality mock tests, scoring guides, and performance analysis to help you identify strengths and areas for improvement.",
      sections: [
        {
          title: "Full-Length Practice Tests",
          content: "Complete practice tests that mirror the format, difficulty, and timing of actual English proficiency exams are invaluable preparation tools. Take these tests under timed conditions in a quiet environment to simulate the real testing experience as closely as possible.",
          tips: [
            "Complete at least 3-5 full practice tests before your exam",
            "Follow official time limits strictly",
            "Take tests in a quiet environment without interruptions",
            "Use official answer sheets if available to practice proper marking procedures"
          ],
          resources: [
            {
              title: "IELTS Practice Tests with Answer Keys",
              description: "Complete IELTS tests for Academic and General Training versions",
              link: "https://www.ielts.org/for-test-takers/sample-test-questions",
              type: "website"
            },
            {
              title: "TOEFL iBT Free Practice Test",
              description: "Official ETS TOEFL practice test with scoring",
              link: "https://www.ets.org/toefl/test-takers/ibt/prepare/free-practice-test.html",
              type: "website"
            },
            {
              title: "PTE Academic Scored Practice Tests",
              description: "Official practice tests with performance analysis",
              link: "https://www.pearsonpte.com/preparation/resources/scored-practice-test",
              type: "tool"
            }
          ]
        },
        {
          title: "Self-Evaluation Techniques",
          content: "Learning to evaluate your own performance is a valuable skill. Use official scoring rubrics and guidelines to assess your practice test responses, particularly for speaking and writing sections. Recording your speaking responses allows you to review and identify areas for improvement.",
          tips: [
            "Familiarize yourself with official scoring criteria for each test section",
            "Record your speaking responses and listen critically",
            "Compare your written responses to sample answers at different score levels",
            "Track your progress on each skill area over multiple practice tests"
          ],
          resources: [
            {
              title: "IELTS Public Band Descriptors",
              description: "Official scoring criteria for IELTS Writing and Speaking",
              link: "https://www.ielts.org/for-test-takers/how-ielts-is-scored/your-writing-sample",
              type: "pdf"
            },
            {
              title: "TOEFL iBT Scoring Guides",
              description: "Rubrics used to score TOEFL Speaking and Writing tasks",
              link: "https://www.ets.org/toefl/test-takers/ibt/scores/understand.html",
              type: "website"
            }
          ]
        },
        {
          title: "Professional Evaluation Services",
          content: "While self-evaluation is valuable, professional feedback provides insights that may be difficult to identify on your own. Consider using professional evaluation services, especially for speaking and writing sections, to receive expert guidance on improving your performance.",
          resources: [
            {
              title: "IELTS Writing Correction Service",
              description: "Detailed feedback on IELTS Writing tasks from certified examiners",
              link: "https://ieltsadvantage.com/writing-correction-service/",
              type: "service"
            },
            {
              title: "TOEFL Speaking and Writing Feedback",
              description: "Professional evaluation service with improvement suggestions",
              link: "https://www.toeflresources.com/speaking-section/toefl-speaking-evaluation-service/",
              type: "service"
            }
          ]
        },
        {
          title: "Creating a Study Plan Based on Results",
          content: "Use the results from your mock tests to create a targeted study plan. Identify patterns in your mistakes and focus your preparation on addressing specific weaknesses. Regular testing and adjustment of your study plan based on results leads to efficient improvement.",
          tips: [
            "Analyze error patterns across multiple practice tests",
            "Prioritize areas with the largest potential for score improvement",
            "Set specific, measurable goals for each skill area",
            "Retest regularly to track progress and adjust your study plan"
          ],
          resources: [
            {
              title: "How to Create an Effective Study Plan",
              description: "Guide to developing a personalized test preparation schedule",
              link: "https://magoosh.com/ielts/ielts-study-plans/",
              type: "article"
            }
          ]
        }
      ]
    }
  },
  {
    id: "score-tracking",
    title: "Score Improvement Tracking",
    icon: <FileText className="h-6 w-6" />,
    shortDescription: "Track your progress over time with our specialized tools that analyze your performance and identify areas for improvement.",
    requiresAuth: true,
    content: {
      introduction: "Systematic tracking of your practice test scores and performance metrics is essential for effective preparation. Our score tracking tools help you visualize progress, identify trends, and focus your study efforts on areas that will yield the greatest improvements.",
      sections: [
        {
          title: "Performance Analytics",
          content: "Our score tracking system provides detailed analytics of your performance across all test sections. Charts and graphs visualize your progress over time, while diagnostic tools identify specific areas of strength and weakness. This data-driven approach allows for targeted, efficient preparation.",
          tips: [
            "Record all practice test scores consistently",
            "Track section-by-section performance to identify specific weaknesses",
            "Note the types of questions that consistently challenge you",
            "Set realistic score improvement goals based on your progress data"
          ]
        },
        {
          title: "Error Analysis",
          content: "Understanding the patterns in your mistakes is key to efficient improvement. Our error analysis tools categorize your mistakes by type, helping you recognize recurring issues in grammar, vocabulary, comprehension, or task fulfillment. This insight allows you to address root causes rather than symptoms.",
          tips: [
            "Maintain an error log categorizing types of mistakes",
            "Review past errors before taking new practice tests",
            "Look for patterns in your mistakes across different practice sessions",
            "Focus remedial study on your most common error types"
          ]
        },
        {
          title: "Skill Gap Identification",
          content: "Different test sections require different skills, and your proficiency may vary across these areas. Our tracking tools identify specific skill gaps in reading, listening, speaking, and writing, allowing you to allocate your study time more effectively to areas needing improvement.",
          resources: [
            {
              title: "Skill-Based TOEFL Preparation",
              description: "Resources targeting specific skill development for TOEFL",
              link: "https://www.toeflresources.com/study-guide/",
              type: "website"
            },
            {
              title: "IELTS Skills Development",
              description: "Targeted practice for developing specific IELTS skills",
              link: "https://www.ieltsbuddy.com/ielts-practice.html",
              type: "website"
            }
          ]
        },
        {
          title: "Progress Reports and Study Plans",
          content: "Based on your tracked performance data, our system generates personalized progress reports and suggested study plans. These recommendations help you focus on high-impact study activities that address your specific needs and learning patterns.",
          tips: [
            "Review progress reports regularly to adjust your study plan",
            "Follow personalized recommendations for practice activities",
            "Set incremental goals based on your progress data",
            "Share progress reports with tutors or study partners for additional insights"
          ]
        }
      ]
    }
  },
  {
    id: "test-day-preparation",
    title: "Test Day Preparation",
    icon: <GraduationCap className="h-6 w-6" />,
    shortDescription: "Essential strategies and tips to help you perform at your best on the actual test day.",
    content: {
      introduction: "Your performance on test day depends not only on your English proficiency but also on your physical readiness, mental state, and familiarity with test procedures. This guide provides practical advice for the days leading up to the test and strategies for optimal performance during the exam.",
      sections: [
        {
          title: "Week Before the Test",
          content: "The final week before your English proficiency test should focus on review rather than learning new material. Take one last full practice test 5-7 days before your exam, then switch to targeted review of weak areas and light practice to maintain skills without exhaustion.",
          tips: [
            "Complete your last full practice test 5-7 days before the exam",
            "Review your most challenging areas in short, focused sessions",
            "Gradually adjust your sleep schedule to match test day timing",
            "Confirm test location, required documents, and arrival procedures"
          ]
        },
        {
          title: "Day Before the Test",
          content: "The day before your test should be relatively relaxed. Avoid intensive studying, which can lead to mental fatigue. Instead, engage in light review, prepare everything you'll need for test day, and focus on physical and mental rest to ensure you're at your best.",
          tips: [
            "Gather identification documents and test registration information",
            "Prepare comfortable clothing appropriate for test center temperature",
            "Plan your route to the test center, allowing extra time for delays",
            "Avoid studying new material or taking full practice tests",
            "Get a good night's sleep (aim for 7-8 hours)"
          ]
        },
        {
          title: "Test Day Strategies",
          content: "On test day, follow routines that help you perform at your best. Eat a balanced meal before the test, arrive early to reduce stress, and use proven test-taking strategies like time management, strategic guessing when necessary, and maintaining focus throughout the exam.",
          tips: [
            "Eat a familiar, balanced meal before the test",
            "Arrive at the test center 30-45 minutes early",
            "Use relaxation techniques if you feel anxious (deep breathing, positive visualization)",
            "Read all instructions carefully before beginning each section",
            "Manage your time by checking the clock periodically"
          ]
        },
        {
          title: "Managing Test Anxiety",
          content: "Test anxiety can significantly impact performance. Learn techniques to manage anxiety symptoms, including cognitive strategies to reframe negative thoughts, relaxation methods to reduce physical tension, and preparation routines that build confidence and reduce uncertainty.",
          tips: [
            "Practice relaxation techniques before and during the test",
            "Replace negative thoughts with positive, constructive ones",
            "Remember that mild anxiety can actually improve performance",
            "Focus on the current question rather than worrying about your overall score"
          ],
          resources: [
            {
              title: "Managing Test Anxiety",
              description: "Techniques for controlling anxiety during high-stakes exams",
              link: "https://www.anxiety.org/test-anxiety-how-to-cope",
              type: "article"
            },
            {
              title: "5-Minute Relaxation Exercises",
              description: "Quick relaxation techniques to use before and during tests",
              link: "https://www.youtube.com/watch?v=MR57rug8NsM",
              type: "video"
            }
          ]
        }
      ]
    }
  },
  {
    id: "resources-directory",
    title: "Comprehensive Resource Directory",
    icon: <Lightbulb className="h-6 w-6" />,
    shortDescription: "A curated collection of the best books, websites, apps, and courses for English proficiency test preparation.",
    content: {
      introduction: "This comprehensive directory brings together high-quality resources for English proficiency test preparation. Whether you prefer books, online courses, mobile apps, or video content, you'll find vetted recommendations to support your preparation across all test sections and skill areas.",
      sections: [
        {
          title: "Official Test Preparation Materials",
          content: "Official materials produced by test administrators offer the most accurate representation of test format, question types, and difficulty levels. These resources should form the foundation of your preparation, supplemented by other materials as needed.",
          resources: [
            {
              title: "Official TOEFL iBT Resources",
              description: "Test preparation materials from ETS, the creators of TOEFL",
              link: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
              type: "website"
            },
            {
              title: "Official IELTS Materials",
              description: "Preparation resources from the British Council, IDP, and Cambridge Assessment",
              link: "https://www.ielts.org/for-test-takers/ielts-preparation",
              type: "website"
            },
            {
              title: "PTE Academic Official Guide",
              description: "Preparation materials from Pearson, the creators of PTE Academic",
              link: "https://www.pearsonpte.com/preparation/resources",
              type: "website"
            }
          ]
        },
        {
          title: "Recommended Books",
          content: "Quality test preparation books provide structured learning paths, comprehensive content review, and practice questions. The books listed here are selected for their accuracy, thoroughness, and effectiveness based on student feedback and expert reviews.",
          resources: [
            {
              title: "The Official Guide to the TOEFL Test",
              description: "ETS's official guide with practice tests and sample questions",
              link: "https://www.amazon.com/Official-Guide-TOEFL-Test-Edition/dp/1260470350/",
              type: "book"
            },
            {
              title: "Cambridge IELTS Series",
              description: "Authentic examination papers with answers and audio",
              link: "https://www.cambridge.org/us/cambridgeenglish/catalog/cambridge-english-exams-ielts/cambridge-ielts-authentic-examination-papers",
              type: "book"
            },
            {
              title: "Barron's TOEFL iBT",
              description: "Comprehensive preparation with online practice tests",
              link: "https://www.amazon.com/TOEFL-Internet-Based-Online-Tests-Audio/dp/1438011873/",
              type: "book"
            }
          ]
        },
        {
          title: "Online Courses and Platforms",
          content: "Online courses offer structured learning with video lessons, practice exercises, and sometimes personalized feedback. These platforms range from free resources to comprehensive paid courses taught by experienced instructors.",
          resources: [
            {
              title: "edX TOEFL Test Preparation: The Insider's Guide",
              description: "Free course developed by ETS test experts",
              link: "https://www.edx.org/course/toefl-test-preparation-the-insiders-guide",
              type: "course"
            },
            {
              title: "Magoosh IELTS Preparation",
              description: "Video lessons, practice questions, and score predictions",
              link: "https://magoosh.com/ielts/",
              type: "course"
            },
            {
              title: "E2Language Test Preparation",
              description: "Structured courses for multiple English proficiency tests",
              link: "https://www.e2language.com/",
              type: "course"
            }
          ]
        },
        {
          title: "Mobile Apps for On-the-Go Practice",
          content: "Mobile apps allow for flexible practice during short breaks or commutes. These apps offer various features from flashcards and quizzes to complete practice tests and personalized study plans.",
          resources: [
            {
              title: "TOEFL iBT Practice Questions App",
              description: "Official ETS app with authentic practice questions",
              link: "https://www.ets.org/toefl/test-takers/ibt/prepare/app.html",
              type: "app"
            },
            {
              title: "IELTS Prep App",
              description: "Official British Council app with practice tests and activities",
              link: "https://www.britishcouncil.org/exam/ielts/prepare/app",
              type: "app"
            },
            {
              title: "Duolingo",
              description: "General English practice app with gamified learning",
              link: "https://www.duolingo.com/",
              type: "app"
            },
            {
              title: "Elsa Speak",
              description: "Pronunciation training with AI feedback",
              link: "https://elsaspeak.com/",
              type: "app"
            }
          ]
        },
        {
          title: "YouTube Channels and Video Resources",
          content: "Video lessons and tutorials can clarify complex concepts and provide engaging instruction. These YouTube channels offer valuable content for English proficiency test preparation, from strategy guidance to detailed skill development.",
          resources: [
            {
              title: "IELTS Liz",
              description: "Comprehensive IELTS preparation videos with expert tips",
              link: "https://www.youtube.com/user/ieltsliz",
              type: "video"
            },
            {
              title: "NoteFull TOEFL Mastery",
              description: "In-depth TOEFL preparation with strategy videos",
              link: "https://www.youtube.com/c/NoteFullTOEFLMastery",
              type: "video"
            },
            {
              title: "E2 IELTS",
              description: "IELTS preparation videos from experienced teachers",
              link: "https://www.youtube.com/c/E2IELTS",
              type: "video"
            },
            {
              title: "English with Lucy",
              description: "General English instruction with focus on natural pronunciation",
              link: "https://www.youtube.com/c/EnglishwithLucy",
              type: "video"
            }
          ]
        }
      ]
    }
  }
];
