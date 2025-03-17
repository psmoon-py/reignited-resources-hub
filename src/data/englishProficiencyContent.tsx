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
  type: "article" | "video" | "tool" | "website" | "playlist" | "course" | "app" | "pdf";
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
    default:
      return <Globe className="h-4 w-4" />;
  }
};

const englishProficiencySections: EnglishProficiencySection[] = [
  {
    id: "listening",
    title: "Listening Comprehension",
    description: "Improve your listening skills with targeted exercises and authentic audio materials.",
    icon: <Video className="h-6 w-6" />,
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
        type: "podcast",
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
    icon: <FileText className="h-6 w-6" />,
    resources: [
      {
        title: "English Grammar Online",
        description: "Comprehensive grammar explanations and exercises.",
        link: "https://www.ego4u.com/en/cram-up/grammar",
        type: "website",
        rating: 4.7
      },
      {
        title: "British Council Grammar",
        description: "Grammar explanations and exercises from the British Council.",
        link: "https://learnenglish.britishcouncil.org/grammar",
        type: "website",
        rating: 4.6
      },
      {
        title: "Perfect English Grammar",
        description: "Clear and simple grammar explanations.",
        link: "https://www.perfect-english-grammar.com/",
        type: "website",
        rating: 4.8
      },
      {
        title: "Grammar Girl",
        description: "Quick and dirty tips for better writing.",
        link: "https://www.quickanddirtytips.com/grammar-girl",
        type: "website",
        rating: 4.5
      },
      {
        title: "Using English",
        description: "Grammar quizzes and exercises.",
        link: "https://www.usingenglish.com/grammar/",
        type: "website",
        rating: 4.4
      },
      {
        title: "Cambridge Grammar Checker",
        description: "Online tool to check your grammar and get instant feedback.",
        link: "https://www.cambridge.org/elt/resources/",
        type: "tool",
        rating: 4.5
      },
      {
        title: "ProWritingAid",
        description: "Advanced grammar, style, and writing improvement tool with detailed reports.",
        link: "https://prowritingaid.com/",
        type: "tool",
        premium: true,
        rating: 4.8
      },
      {
        title: "Common Grammar Mistakes",
        description: "Learn about common grammar mistakes and how to avoid them.",
        link: "https://www.youtube.com/watch?v=rdV-wtJoKnc",
        type: "video",
        rating: 4.7
      },
      {
        title: "Grammar Rules",
        description: "Learn essential grammar rules for better writing.",
        link: "https://www.youtube.com/watch?v=D_qtjSqcu4Y",
        type: "video",
        rating: 4.6
      }
    ],
  },
  {
    id: "mock-tests",
    title: "Mock Tests",
    description: "Practice with realistic test simulations for TOEFL, IELTS, and other English proficiency exams.",
    icon: <FileText className="h-6 w-6" />,
    resources: [
      {
        title: "TOEFL iBT Free Practice Test",
        description: "Free practice test for the TOEFL iBT exam.",
        link: "https://www.ets.org/toefl/test-takers/ibt/prepare/practice-test",
        type: "website",
        rating: 4.8
      },
      {
        title: "IELTS Practice Tests",
        description: "Practice tests for the IELTS exam.",
        link: "https://ieltsonlinetests.com/",
        type: "website",
        rating: 4.7
      },
      {
        title: "TOEIC Sample Test",
        description: "Sample test for the TOEIC exam.",
        link: "https://www.ets.org/toeic/test-takers/listening-reading/sample-questions",
        type: "website",
        rating: 4.6
      },
      {
        title: "The Official Guide to the TOEFL Test",
        description: "Official resource with practice tests and answer explanations from ETS.",
        link: "https://www.ets.org/toefl/test-takers/ibt/prepare/guides.html",
        type: "website",
        premium: true,
        rating: 4.9
      },
      {
        title: "Cambridge IELTS Practice Tests",
        description: "Collection of authentic IELTS examination papers with answers.",
        link: "https://www.cambridge.org/ielts-practice-tests",
        type: "website",
        premium: true,
        rating: 4.8
      },
      {
        title: "Barron's TOEFL iBT",
        description: "Comprehensive test prep guide with online practice tests and audio tracks.",
        link: "https://barronstoefl.com/",
        type: "website",
        premium: true,
        rating: 4.5
      },
      {
        title: "TOEFL Speaking Practice",
        description: "Practice your speaking skills with these TOEFL speaking prompts.",
        link: "https://www.youtube.com/watch?v=wF_ZZ7yS-hc",
        type: "video",
        rating: 4.7
      },
      {
        title: "IELTS Writing Task 2",
        description: "Learn how to write a band 9 IELTS writing task 2 essay.",
        link: "https://www.youtube.com/watch?v=wF_ZZ7yS-hc",
        type: "video",
        rating: 4.6
      },
      {
        title: "TOEFL Writing Practice",
        description: "Practice your writing skills with these TOEFL writing prompts.",
        link: "https://www.youtube.com/watch?v=wF_ZZ7yS-hc",
        type: "video",
        rating: 4.8
      }
    ],
  },
  {
    id: "score-tracking",
    title: "Score Tracking",
    description: "Track your progress and monitor your scores on practice tests.",
    icon: <FileText className="h-6 w-6" />,
    resources: [
      {
        title: "My TOEFL Score",
        description: "Track your TOEFL scores and monitor your progress.",
        link: "https://www.ets.org/toefl/test-takers/your-scores",
        type: "website",
        rating: 4.8
      },
      {
        title: "My IELTS Results",
        description: "Track your IELTS scores and monitor your progress.",
        link: "https://ielts.britishcouncil.org/CheckResults.aspx",
        type: "website",
        rating: 4.7
      },
      {
        title: "TOEIC Score Converter",
        description: "Convert your TOEIC scores to other scales.",
        link: "https://www.ets.org/toeic/test-takers/listening-reading/scores/convert",
        type: "tool",
        rating: 4.6
      },
      {
        title: "Score Analysis",
        description: "Analyze your scores and identify areas for improvement.",
        link: "https://www.youtube.com/watch?v=wF_ZZ7yS-hc",
        type: "video",
        rating: 4.7
      },
      {
        title: "Progress Tracking",
        description: "Track your progress and monitor your scores on practice tests.",
        link: "https://www.youtube.com/watch?v=wF_ZZ7yS-hc",
        type: "video",
        rating: 4.6
      },
      {
        title: "Goal Setting",
        description: "Set goals and track your progress towards achieving them.",
        link: "https://www.youtube.com/watch?v=wF_ZZ7yS-hc",
        type: "video",
        rating: 4.8
      }
    ],
  }
];

export { englishProficiencySections, getResourceIcon };
