
import React from "react";
import { BookOpen, Video, Globe, FileText, Play, Laptop, Smartphone, FileBox } from "lucide-react";

export interface EnglishProficiencySection {
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
  type: "article" | "video" | "tool" | "website" | "playlist" | "course" | "app" | "pdf" | "book" | "service";
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
      return <Laptop className="h-4 w-4" />;
    case "course":
      return <BookOpen className="h-4 w-4" />;
    case "app":
      return <Smartphone className="h-4 w-4" />;
    case "pdf":
      return <FileBox className="h-4 w-4" />;
    case "book":
      return <BookOpen className="h-4 w-4" />;
    case "service":
      return <Globe className="h-4 w-4" />;
    default:
      return <Globe className="h-4 w-4" />;
  }
};

// Change the naming to match what's imported in EnglishProficiency.tsx
export const englishProficiencyData = [
  {
    id: "listening",
    title: "Listening Comprehension",
    description: "Improve your listening skills with targeted exercises and authentic audio materials.",
    icon: <Video className="h-6 w-6" />,
    shortDescription: "Enhance your ability to understand spoken English in various contexts, from academic lectures to everyday conversations.",
    requiresAuth: false,
    content: {
      introduction: "Listening comprehension is a crucial skill for English proficiency tests. This section provides resources to help you improve your ability to understand spoken English, from academic lectures to everyday conversations.",
      sections: [
        {
          title: "Understanding Test Formats",
          content: "Different English proficiency tests assess listening in various ways. TOEFL focuses on academic lectures and conversations, while IELTS includes everyday situations and various accents.",
          tips: [
            "Familiarize yourself with the specific format of your test",
            "Practice with authentic test materials",
            "Listen to a variety of accents and speaking speeds"
          ],
          resources: [
            {
              title: "BBC Learning English",
              description: "A wide range of listening activities and exercises for different levels.",
              link: "https://www.bbc.co.uk/learningenglish/",
              type: "website",
              rating: 4.8
            },
            {
              title: "ESL Lab",
              description: "Listening quizzes and activities with audio and transcripts.",
              link: "https://www.esl-lab.com/",
              type: "website",
              rating: 4.6
            },
            {
              title: "TED Talks",
              description: "Engaging talks on various topics to improve listening comprehension.",
              link: "https://www.ted.com/talks",
              type: "website",
              rating: 4.7
            }
          ]
        },
        {
          title: "Effective Note-Taking",
          content: "Developing good note-taking skills is essential for listening sections of English proficiency tests, especially for longer passages like academic lectures.",
          tips: [
            "Focus on keywords and main ideas, not every word",
            "Develop your own shorthand system",
            "Practice paraphrasing what you hear",
            "Review and organize your notes immediately after listening"
          ],
          resources: [
            {
              title: "English as a Second Language Podcast",
              description: "Podcast lessons with clear explanations and real-life conversations.",
              link: "https://www.eslpod.com/",
              type: "website",
              rating: 4.5
            },
            {
              title: "VOA Learning English",
              description: "News and features stories adapted for English learners.",
              link: "https://learningenglish.voanews.com/",
              type: "website",
              rating: 4.4
            }
          ]
        },
        {
          title: "Immersive Listening Practice",
          content: "Regular immersion in English audio content helps train your ear and build familiarity with different accents and speech patterns.",
          tips: [
            "Listen to English content daily, even if just for 15 minutes",
            "Use subtitles initially, then challenge yourself without them",
            "Try shadowing (repeating what you hear immediately after)"
          ],
          resources: [
            {
              title: "Learn English with TV Series",
              description: "Use popular TV shows to improve your listening and vocabulary.",
              link: "https://ororo.tv/",
              type: "website",
              premium: true,
              rating: 4.9
            },
            {
              title: "Listening Practice with Movies",
              description: "Extracts from movies to practice listening and understanding dialogues.",
              link: "https://www.youtube.com/watch?v=j9NRZYG2C-0",
              type: "video",
              rating: 4.7
            },
            {
              title: "Everyday English Conversations",
              description: "Practice listening to everyday conversations to improve fluency.",
              link: "https://www.youtube.com/watch?v=cE2bDnJFTsk",
              type: "video",
              rating: 4.6
            }
          ]
        }
      ]
    },
    resources: [
      {
        title: "BBC Learning English",
        description: "A wide range of listening activities and exercises for different levels.",
        link: "https://www.bbc.co.uk/learningenglish/",
        type: "website",
        rating: 4.8
      },
      {
        title: "ESL Lab",
        description: "Listening quizzes and activities with audio and transcripts.",
        link: "https://www.esl-lab.com/",
        type: "website",
        rating: 4.6
      },
      {
        title: "TED Talks",
        description: "Engaging talks on various topics to improve listening comprehension.",
        link: "https://www.ted.com/talks",
        type: "website",
        rating: 4.7
      },
      {
        title: "Podcast: English as a Second Language",
        description: "Podcast lessons with clear explanations and real-life conversations.",
        link: "https://www.eslpod.com/",
        type: "website",
        rating: 4.5
      },
      {
        title: "VOA Learning English",
        description: "News and features stories adapted for English learners.",
        link: "https://learningenglish.voanews.com/",
        type: "website",
        rating: 4.4
      },
      {
        title: "Learn English with TV Series",
        description: "Use popular TV shows to improve your listening and vocabulary.",
        link: "https://ororo.tv/",
        type: "website",
        premium: true,
        rating: 4.9
      },
      {
        title: "Listening Practice with Movies",
        description: "Extracts from movies to practice listening and understanding dialogues.",
        link: "https://www.youtube.com/watch?v=j9NRZYG2C-0",
        type: "video",
        rating: 4.7
      },
      {
        title: "Everyday English Conversations",
        description: "Practice listening to everyday conversations to improve fluency.",
        link: "https://www.youtube.com/watch?v=cE2bDnJFTsk",
        type: "video",
        rating: 4.6
      }
    ],
  },
  {
    id: "speaking",
    title: "Speaking Practice",
    description: "Enhance your spoken English with interactive exercises and real-time feedback.",
    icon: <Globe className="h-6 w-6" />,
    shortDescription: "Develop fluency, pronunciation, and the ability to express complex ideas clearly in English.",
    requiresAuth: false,
    content: {
      introduction: "Speaking clearly and confidently in English is essential for success in proficiency tests and real-world communication. This section offers strategies and resources to improve your speaking skills.",
      sections: [
        {
          title: "Test-Specific Speaking Tasks",
          content: "Each English proficiency test has unique speaking components. Understanding these formats will help you prepare effectively.",
          tips: [
            "Practice with a timer to build comfort with time constraints",
            "Record yourself and analyze your speaking",
            "Work on transitional phrases to connect your ideas smoothly"
          ],
          resources: [
            {
              title: "TalkEnglish.com",
              description: "Structured lessons and exercises to improve your speaking skills.",
              link: "https://www.talkenglish.com/",
              type: "website",
              rating: 4.7
            },
            {
              title: "English Speaking Practice",
              description: "Practice speaking with native speakers and get feedback.",
              link: "https://www.conversationexchange.com/",
              type: "website",
              rating: 4.6
            }
          ]
        },
        {
          title: "Pronunciation Improvement",
          content: "Clear pronunciation is crucial for effective communication and scoring well on speaking assessments.",
          tips: [
            "Focus on commonly mispronounced sounds in your native language",
            "Learn the International Phonetic Alphabet (IPA) for English",
            "Practice stress patterns in multi-syllable words",
            "Work on sentence rhythm and intonation"
          ],
          resources: [
            {
              title: "Rachel's English",
              description: "Learn American English pronunciation and speaking skills.",
              link: "https://rachelsenglish.com/",
              type: "website",
              rating: 4.5
            },
            {
              title: "Pronunciation Practice",
              description: "Improve your pronunciation with targeted exercises.",
              link: "https://www.youtube.com/watch?v=PwJjWjZIy5U",
              type: "video",
              rating: 4.6
            }
          ]
        },
        {
          title: "Fluency Development",
          content: "Building fluency involves practicing speaking regularly and developing strategies to communicate effectively even when you don't know every word.",
          tips: [
            "Practice speaking on a variety of topics for 3-5 minutes daily",
            "Learn circumlocution (describing words you don't know)",
            "Use fillers appropriately rather than long silences",
            "Join language exchange groups or find a speaking partner"
          ],
          resources: [
            {
              title: "italki",
              description: "Find online tutors for personalized speaking practice.",
              link: "https://www.italki.com/",
              type: "website",
              premium: true,
              rating: 4.8
            },
            {
              title: "Verbling",
              description: "Take online classes with certified English teachers.",
              link: "https://www.verbling.com/",
              type: "website",
              premium: true,
              rating: 4.9
            },
            {
              title: "Speaking Tips and Tricks",
              description: "Learn how to speak English more fluently and confidently.",
              link: "https://www.youtube.com/watch?v=C6DmJzCXc9I",
              type: "video",
              rating: 4.7
            },
            {
              title: "Shadowing Technique",
              description: "Use the shadowing technique to improve your speaking skills.",
              link: "https://www.youtube.com/watch?v=wcq2XA-J-nE",
              type: "video",
              rating: 4.8
            }
          ]
        }
      ]
    },
    resources: [
      {
        title: "TalkEnglish.com",
        description: "Structured lessons and exercises to improve your speaking skills.",
        link: "https://www.talkenglish.com/",
        type: "website",
        rating: 4.7
      },
      {
        title: "English Speaking Practice",
        description: "Practice speaking with native speakers and get feedback.",
        link: "https://www.conversationexchange.com/",
        type: "website",
        rating: 4.6
      },
      {
        title: "italki",
        description: "Find online tutors for personalized speaking practice.",
        link: "https://www.italki.com/",
        type: "website",
        premium: true,
        rating: 4.8
      },
      {
        title: "Verbling",
        description: "Take online classes with certified English teachers.",
        link: "https://www.verbling.com/",
        type: "website",
        premium: true,
        rating: 4.9
      },
      {
        title: "Rachel's English",
        description: "Learn American English pronunciation and speaking skills.",
        link: "https://rachelsenglish.com/",
        type: "website",
        rating: 4.5
      },
      {
        title: "Pronunciation Practice",
        description: "Improve your pronunciation with targeted exercises.",
        link: "https://www.youtube.com/watch?v=PwJjWjZIy5U",
        type: "video",
        rating: 4.6
      },
      {
        title: "Speaking Tips and Tricks",
        description: "Learn how to speak English more fluently and confidently.",
        link: "https://www.youtube.com/watch?v=C6DmJzCXc9I",
        type: "video",
        rating: 4.7
      },
      {
        title: "Shadowing Technique",
        description: "Use the shadowing technique to improve your speaking skills.",
        link: "https://www.youtube.com/watch?v=wcq2XA-J-nE",
        type: "video",
        rating: 4.8
      }
    ],
  },
  {
    id: "reading",
    title: "Reading Comprehension",
    description: "Develop your reading skills with a variety of texts and exercises.",
    icon: <FileText className="h-6 w-6" />,
    shortDescription: "Improve your ability to understand and analyze written English across different contexts and difficulty levels.",
    requiresAuth: false,
    content: {
      introduction: "Reading comprehension is a key component of English proficiency tests. This section will help you develop strategies to understand various text types, from academic articles to everyday materials.",
      sections: [
        {
          title: "Reading Strategies",
          content: "Effective reading involves using specific strategies based on your purpose and the text type.",
          tips: [
            "Skim for general ideas before detailed reading",
            "Learn to identify main ideas and supporting details",
            "Practice making inferences from text",
            "Develop vocabulary through context clues"
          ],
          resources: [
            {
              title: "Breaking News English",
              description: "Read news articles adapted for English learners.",
              link: "https://breakingnewsenglish.com/",
              type: "website",
              rating: 4.7
            },
            {
              title: "ReadTheory",
              description: "Personalized reading comprehension exercises.",
              link: "https://readtheory.org/",
              type: "website",
              rating: 4.6
            }
          ]
        },
        {
          title: "Academic Reading Skills",
          content: "Academic texts require specific approaches to understand complex arguments, data, and specialized vocabulary.",
          tips: [
            "Analyze text structure and organization",
            "Identify author's purpose and tone",
            "Practice summarizing and paraphrasing",
            "Work on speed reading techniques"
          ],
          resources: [
            {
              title: "Newsela",
              description: "Read news articles at different reading levels.",
              link: "https://newsela.com/",
              type: "website",
              premium: true,
              rating: 4.8
            },
            {
              title: "ESL Reading Articles",
              description: "A collection of reading articles for ESL learners.",
              link: "https://www.rong-chang.com/read.htm",
              type: "website",
              rating: 4.5
            }
          ]
        },
        {
          title: "Test-Taking Techniques",
          content: "Specific techniques can help you navigate reading comprehension questions more effectively during tests.",
          tips: [
            "Read questions before passages when appropriate",
            "Develop strategies for multiple-choice questions",
            "Practice matching headings to paragraphs",
            "Work on time management for reading sections"
          ],
          resources: [
            {
              title: "Reading Comprehension Practice",
              description: "Practice reading comprehension with targeted exercises.",
              link: "https://www.examenglish.com/reading/index.php",
              type: "website",
              rating: 4.4
            },
            {
              title: "Short Stories for English Learners",
              description: "Read short stories to improve your reading skills.",
              link: "https://www.eslfast.com/stories/",
              type: "website",
              rating: 4.6
            },
            {
              title: "Reading Strategies",
              description: "Learn effective reading strategies to improve comprehension.",
              link: "https://www.youtube.com/watch?v=g9J_IMp0j1w",
              type: "video",
              rating: 4.7
            },
            {
              title: "Speed Reading Techniques",
              description: "Learn how to read faster and more efficiently.",
              link: "https://www.youtube.com/watch?v=ysJH_uK-ABQ",
              type: "video",
              rating: 4.8
            }
          ]
        }
      ]
    },
    resources: [
      {
        title: "Breaking News English",
        description: "Read news articles adapted for English learners.",
        link: "https://breakingnewsenglish.com/",
        type: "website",
        rating: 4.7
      },
      {
        title: "ReadTheory",
        description: "Personalized reading comprehension exercises.",
        link: "https://readtheory.org/",
        type: "website",
        rating: 4.6
      },
      {
        title: "Newsela",
        description: "Read news articles at different reading levels.",
        link: "https://newsela.com/",
        type: "website",
        premium: true,
        rating: 4.8
      },
      {
        title: "ESL Reading Articles",
        description: "A collection of reading articles for ESL learners.",
        link: "https://www.rong-chang.com/read.htm",
        type: "website",
        rating: 4.5
      },
      {
        title: "Reading Comprehension Practice",
        description: "Practice reading comprehension with targeted exercises.",
        link: "https://www.examenglish.com/reading/index.php",
        type: "website",
        rating: 4.4
      },
      {
        title: "Short Stories for English Learners",
        description: "Read short stories to improve your reading skills.",
        link: "https://www.eslfast.com/stories/",
        type: "website",
        rating: 4.6
      },
      {
        title: "Reading Strategies",
        description: "Learn effective reading strategies to improve comprehension.",
        link: "https://www.youtube.com/watch?v=g9J_IMp0j1w",
        type: "video",
        rating: 4.7
      },
      {
        title: "Speed Reading Techniques",
        description: "Learn how to read faster and more efficiently.",
        link: "https://www.youtube.com/watch?v=ysJH_uK-ABQ",
        type: "video",
        rating: 4.8
      }
    ],
  },
  {
    id: "writing",
    title: "Writing Practice",
    description: "Improve your written English skills with exercises focused on essay structure, academic writing, and persuasive techniques.",
    icon: <FileText className="h-6 w-6" />,
    shortDescription: "Master different writing styles and formats required for English proficiency tests, from essays to reports.",
    requiresAuth: false,
    content: {
      introduction: "Writing is a complex skill that requires practice and feedback. This section offers strategies and resources to help you develop clear, coherent, and accurate written English for proficiency tests.",
      sections: [
        {
          title: "Essay Structure and Organization",
          content: "Learning to organize your ideas effectively is fundamental to good writing in English.",
          tips: [
            "Master the basic essay structure: introduction, body, conclusion",
            "Practice writing clear thesis statements",
            "Use topic sentences to guide your paragraphs",
            "Develop coherence with appropriate transition words"
          ],
          resources: [
            {
              title: "Purdue OWL",
              description: "Comprehensive writing resources and style guides.",
              link: "https://owl.purdue.edu/owl/index.html",
              type: "website",
              rating: 4.8
            },
            {
              title: "Essay Writing Guide",
              description: "Step-by-step guide to writing effective essays.",
              link: "https://www.khanacademy.org/humanities/grammar/writing-structure/thesis-statements/a/writing-effective-thesis-statements",
              type: "website",
              rating: 4.6
            }
          ]
        },
        {
          title: "Grammar and Mechanics",
          content: "Accuracy in grammar, punctuation, and spelling is essential for clarity and scoring well on writing assessments.",
          tips: [
            "Review common grammar errors for English learners",
            "Learn punctuation rules and their impact on meaning",
            "Practice identifying and fixing run-on sentences and fragments",
            "Develop proofreading strategies"
          ],
          resources: [
            {
              title: "Grammarly",
              description: "Online tool to check your grammar and writing style.",
              link: "https://www.grammarly.com/",
              type: "tool",
              premium: true,
              rating: 4.9
            },
            {
              title: "Hemingway Editor",
              description: "Tool to improve the clarity and conciseness of your writing.",
              link: "http://www.hemingwayapp.com/",
              type: "tool",
              rating: 4.7
            }
          ]
        },
        {
          title: "Task-Specific Writing Skills",
          content: "Different proficiency tests require specific types of writing tasks, from integrated essays to opinion pieces.",
          tips: [
            "Practice summarizing texts and lectures",
            "Develop skills in describing data and visual information",
            "Learn to write effectively under time constraints",
            "Build a repertoire of academic vocabulary"
          ],
          resources: [
            {
              title: "Academic Writing Style",
              description: "Learn the conventions of academic writing.",
              link: "https://www.phrasebank.manchester.ac.uk/",
              type: "website",
              rating: 4.5
            },
            {
              title: "Writing Exercises",
              description: "Practice your writing skills with targeted exercises.",
              link: "https://www.dailywritingtips.com/writing-exercises/",
              type: "website",
              rating: 4.4
            },
            {
              title: "Essay Structure",
              description: "Learn how to structure your essays effectively.",
              link: "https://www.youtube.com/watch?v=rtYjuJufs1I",
              type: "video",
              rating: 4.7
            },
            {
              title: "Cambridge Writing Services",
              description: "Professional writing feedback and evaluation services for IELTS and TOEFL essays.",
              link: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/",
              type: "website",
              premium: true,
              rating: 4.8
            },
            {
              title: "Writing Tips and Tricks",
              description: "Improve your writing skills with these tips and tricks.",
              link: "https://www.youtube.com/watch?v=rISw-c9jQ_Y",
              type: "video",
              rating: 4.6
            }
          ]
        }
      ]
    },
    resources: [
      {
        title: "Grammarly",
        description: "Online tool to check your grammar and writing style.",
        link: "https://www.grammarly.com/",
        type: "tool",
        premium: true,
        rating: 4.9
      },
      {
        title: "Purdue OWL",
        description: "Comprehensive writing resources and style guides.",
        link: "https://owl.purdue.edu/owl/index.html",
        type: "website",
        rating: 4.8
      },
      {
        title: "Hemingway Editor",
        description: "Tool to improve the clarity and conciseness of your writing.",
        link: "http://www.hemingwayapp.com/",
        type: "tool",
        rating: 4.7
      },
      {
        title: "Essay Writing Guide",
        description: "Step-by-step guide to writing effective essays.",
        link: "https://www.khanacademy.org/humanities/grammar/writing-structure/thesis-statements/a/writing-effective-thesis-statements",
        type: "website",
        rating: 4.6
      },
      {
        title: "Academic Writing Style",
        description: "Learn the conventions of academic writing.",
        link: "https://www.phrasebank.manchester.ac.uk/",
        type: "website",
        rating: 4.5
      },
      {
        title: "Writing Exercises",
        description: "Practice your writing skills with targeted exercises.",
        link: "https://www.dailywritingtips.com/writing-exercises/",
        type: "website",
        rating: 4.4
      },
      {
        title: "Essay Structure",
        description: "Learn how to structure your essays effectively.",
        link: "https://www.youtube.com/watch?v=rtYjuJufs1I",
        type: "video",
        rating: 4.7
      },
      {
        title: "Cambridge Writing Services",
        description: "Professional writing feedback and evaluation services for IELTS and TOEFL essays.",
        link: "https://www.cambridgeenglish.org/learning-english/activities-for-learners/",
        type: "website",
        premium: true,
        rating: 4.8
      },
      {
        title: "Writing Tips and Tricks",
        description: "Improve your writing skills with these tips and tricks.",
        link: "https://www.youtube.com/watch?v=rISw-c9jQ_Y",
        type: "video",
        rating: 4.6
      }
    ],
  },
  {
    id: "vocabulary",
    title: "Vocabulary Building",
    description: "Expand your vocabulary with targeted exercises and resources focused on academic and everyday English.",
    icon: <BookOpen className="h-6 w-6" />,
    shortDescription: "Build a rich and varied vocabulary for different contexts, from academic to everyday conversation.",
    requiresAuth: false,
    content: {
      introduction: "A strong vocabulary is essential for success in all areas of English proficiency tests. This section provides strategies and resources to help you expand your word knowledge systematically.",
      sections: [
        {
          title: "Vocabulary Learning Strategies",
          content: "Effective vocabulary acquisition requires systematic approaches and regular review.",
          tips: [
            "Learn words in context rather than isolated lists",
            "Create word families (related forms: noun, verb, adjective)",
            "Use spaced repetition for review",
            "Create personal connections to new words"
          ],
          resources: [
            {
              title: "Quizlet",
              description: "Create and study flashcards online.",
              link: "https://quizlet.com/",
              type: "tool",
              rating: 4.8
            },
            {
              title: "Memrise",
              description: "Learn vocabulary with spaced repetition.",
              link: "https://www.memrise.com/",
              type: "tool",
              rating: 4.7
            }
          ]
        },
        {
          title: "Academic Word Lists",
          content: "Focusing on high-frequency academic vocabulary provides the best return on your study time investment.",
          tips: [
            "Master the Academic Word List (AWL)",
            "Learn common collocations for academic words",
            "Study discipline-specific vocabulary for your field",
            "Practice using new words in your writing"
          ],
          resources: [
            {
              title: "Vocabulary.com",
              description: "Learn new words with definitions and examples.",
              link: "https://www.vocabulary.com/",
              type: "website",
              rating: 4.9
            },
            {
              title: "Oxford Learner's Dictionaries",
              description: "Dictionaries for English learners.",
              link: "https://www.oxfordlearnersdictionaries.com/",
              type: "website",
              rating: 4.5
            },
            {
              title: "Academic Word List (AWL)",
              description: "A curated collection of the most important words for academic writing and reading.",
              link: "https://www.oxfordlearnersdictionaries.com/us/wordlist/american_english/academic/",
              type: "website",
              rating: 4.7
            }
          ]
        },
        {
          title: "Idioms and Phrasal Verbs",
          content: "Understanding common idioms and phrasal verbs is important for both receptive and productive language skills.",
          tips: [
            "Learn idioms in thematic groups",
            "Study the most frequent phrasal verbs first",
            "Notice patterns in phrasal verb particles",
            "Practice using idioms in conversation"
          ],
          resources: [
            {
              title: "Merriam-Webster Dictionary",
              description: "Online dictionary with definitions and examples.",
              link: "https://www.merriam-webster.com/",
              type: "website",
              rating: 4.6
            },
            {
              title: "TOEFL Vocabulary Flash Cards",
              description: "Digital flash card system focused specifically on TOEFL vocabulary.",
              link: "https://magoosh.com/toefl/toefl-vocabulary-flashcards/",
              type: "tool",
              rating: 4.6
            },
            {
              title: "Vocabulary Building Techniques",
              description: "Learn effective techniques for building your vocabulary.",
              link: "https://www.youtube.com/watch?v=vNtzw0j9c9o",
              type: "video",
              rating: 4.8
            },
            {
              title: "Common English Idioms",
              description: "Learn common English idioms and phrases.",
              link: "https://www.youtube.com/watch?v=M9vK-wbYSzk",
              type: "video",
              rating: 4.7
            }
          ]
        }
      ]
    },
    resources: [
      {
        title: "Quizlet",
        description: "Create and study flashcards online.",
        link: "https://quizlet.com/",
        type: "tool",
        rating: 4.8
      },
      {
        title: "Memrise",
        description: "Learn vocabulary with spaced repetition.",
        link: "https://www.memrise.com/",
        type: "tool",
        rating: 4.7
      },
      {
        title: "Vocabulary.com",
        description: "Learn new words with definitions and examples.",
        link: "https://www.vocabulary.com/",
        type: "website",
        rating: 4.9
      },
      {
        title: "Merriam-Webster Dictionary",
        description: "Online dictionary with definitions and examples.",
        link: "https://www.merriam-webster.com/",
        type: "website",
        rating: 4.6
      },
      {
        title: "Oxford Learner's Dictionaries",
        description: "Dictionaries for English learners.",
        link: "https://www.oxfordlearnersdictionaries.com/",
        type: "website",
        rating: 4.5
      },
      {
        title: "Academic Word List (AWL)",
        description: "A curated collection of the most important words for academic writing and reading.",
        link: "https://www.oxfordlearnersdictionaries.com/us/wordlist/american_english/academic/",
        type: "website",
        rating: 4.7
      },
      {
        title: "TOEFL Vocabulary Flash Cards",
        description: "Digital flash card system focused specifically on TOEFL vocabulary.",
        link: "https://magoosh.com/toefl/toefl-vocabulary-flashcards/",
        type: "tool",
        rating: 4.6
      },
      {
        title: "Vocabulary Building Techniques",
        description: "Learn effective techniques for building your vocabulary.",
        link: "https://www.youtube.com/watch?v=vNtzw0j9c9o",
        type: "video",
        rating: 4.8
      },
      {
        title: "Common English Idioms",
        description: "Learn common English idioms and phrases.",
        link: "https://www.youtube.com/watch?v=M9vK-wbYSzk",
        type: "video",
        rating: 4.7
      }
    ],
  },
  {
    id: "grammar",
    title: "Grammar Resources",
    description: "Master English grammar with comprehensive materials covering all the structures you need for proficiency tests.",
    icon: <BookOpen className="h-6 w-6" />,
    shortDescription: "Learn and practice essential grammar rules and structures for accurate English in all exam tasks.",
    requiresAuth: false,
    content: {
      introduction: "Strong grammar skills are fundamental to success in English proficiency tests. This section provides focused resources to help you master key grammatical structures and avoid common errors.",
      sections: [
        {
          title: "Grammar Fundamentals",
          content: "Mastering the basic building blocks of English grammar provides a solid foundation for more complex structures.",
          tips: [
            "Review parts of speech and their functions",
            "Master verb tenses and their appropriate use",
            "Understand sentence structure patterns",
            "Practice identifying and correcting common errors"
          ],
          resources: [
            {
              title: "English Grammar in Use",
              description: "Comprehensive reference and practice book for intermediate learners.",
              link: "https://www.cambridge.org/us/cambridgeenglish/catalog/grammar-vocabulary-and-pronunciation/english-grammar-use-5th-edition",
              type: "book",
              premium: true,
              rating: 4.9
            },
            {
              title: "Grammar Girl",
              description: "Clear explanations of grammar rules and common mistakes.",
              link: "https://www.quickanddirtytips.com/grammar-girl",
              type: "website",
              rating: 4.7
            }
          ]
        },
        {
          title: "Advanced Grammar for Test Takers",
          content: "Proficiency tests often assess sophisticated grammatical structures that demonstrate advanced language competence.",
          tips: [
            "Study complex sentence structures with multiple clauses",
            "Master conditional forms and mixed conditionals",
            "Practice using a variety of modifiers and qualifiers",
            "Understand nuanced uses of modals and subjunctives"
          ],
          resources: [
            {
              title: "English Page",
              description: "In-depth grammar tutorials with interactive exercises.",
              link: "https://www.englishpage.com/",
              type: "website",
              rating: 4.8
            },
            {
              title: "Grammar Bytes",
              description: "Grammar instruction with interactive exercises and videos.",
              link: "https://chompchomp.com/menu.htm",
              type: "website",
              rating: 4.5
            }
          ]
        },
        {
          title: "Grammar in Context",
          content: "Understanding how grammar works in authentic contexts is essential for both the receptive and productive aspects of language tests.",
          tips: [
            "Analyze grammar use in academic articles and lectures",
            "Notice how grammar choices affect meaning and tone",
            "Practice editing texts for grammatical accuracy",
            "Develop awareness of register and formality levels"
          ],
          resources: [
            {
              title: "Perfect English Grammar",
              description: "Clear explanations and exercises for all grammar points.",
              link: "https://www.perfect-english-grammar.com/",
              type: "website",
              rating: 4.6
            },
            {
              title: "Khan Academy Grammar",
              description: "Free grammar lessons with practice exercises.",
              link: "https://www.khanacademy.org/humanities/grammar",
              type: "website",
              rating: 4.7
            },
            {
              title: "English Grammar Secrets",
              description: "Videos explaining tricky grammar points.",
              link: "https://www.youtube.com/playlist?list=PLtDIl_qUwv0yKtHkigxDMWXOKQGD-aJ-M",
              type: "playlist",
              rating: 4.5
            },
            {
              title: "Advanced English Grammar Course",
              description: "Comprehensive video course covering advanced grammar topics.",
              link: "https://www.youtube.com/watch?v=QXhBB_W4dso",
              type: "video",
              rating: 4.8
            }
          ]
        }
      ]
    },
    resources: [
      {
        title: "English Grammar in Use",
        description: "Comprehensive reference and practice book for intermediate learners.",
        link: "https://www.cambridge.org/us/cambridgeenglish/catalog/grammar-vocabulary-and-pronunciation/english-grammar-use-5th-edition",
        type: "book",
        premium: true,
        rating: 4.9
      },
      {
        title: "English Page",
        description: "In-depth grammar tutorials with interactive exercises.",
        link: "https://www.englishpage.com/",
        type: "website",
        rating: 4.8
      },
      {
        title: "Grammar Girl",
        description: "Clear explanations of grammar rules and common mistakes.",
        link: "https://www.quickanddirtytips.com/grammar-girl",
        type: "website",
        rating: 4.7
      },
      {
        title: "Khan Academy Grammar",
        description: "Free grammar lessons with practice exercises.",
        link: "https://www.khanacademy.org/humanities/grammar",
        type: "website",
        rating: 4.7
      },
      {
        title: "Perfect English Grammar",
        description: "Clear explanations and exercises for all grammar points.",
        link: "https://www.perfect-english-grammar.com/",
        type: "website",
        rating: 4.6
      },
      {
        title: "Grammar Bytes",
        description: "Grammar instruction with interactive exercises and videos.",
        link: "https://chompchomp.com/menu.htm",
        type: "website",
        rating: 4.5
      },
      {
        title: "English Grammar Secrets",
        description: "Videos explaining tricky grammar points.",
        link: "https://www.youtube.com/playlist?list=PLtDIl_qUwv0yKtHkigxDMWXOKQGD-aJ-M",
        type: "playlist",
        rating: 4.5
      },
      {
        title: "Advanced English Grammar Course",
        description: "Comprehensive video course covering advanced grammar topics.",
        link: "https://www.youtube.com/watch?v=QXhBB_W4dso",
        type: "video",
        rating: 4.8
      }
    ],
  }
];
