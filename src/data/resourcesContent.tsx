import React from "react";
import { ExternalLink, Youtube, FileText, BookOpen, Globe, Code, VideoIcon, Clock } from "lucide-react";

// Comprehensive resource data with detailed information
export const programmingResources = [
  {
    id: "prog-1",
    title: "CS50: Introduction to Computer Science",
    type: "Course",
    level: "Beginner",
    source: "Harvard University",
    description: "Harvard University's introduction to the intellectual enterprises of computer science and the art of programming. Taught by David J. Malan, this course teaches students how to think algorithmically and solve problems efficiently.",
    link: "https://cs50.harvard.edu/x/2023/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Computer Science", "Programming Fundamentals", "C", "Python", "SQL", "HTML", "CSS", "JavaScript"],
    featured: true
  },
  {
    id: "prog-2",
    title: "The Coding Train",
    type: "YouTube Channel",
    level: "All Levels",
    source: "Daniel Shiffman",
    description: "Daniel Shiffman makes coding accessible through creative coding tutorials and challenges using p5.js, Processing, and more. His enthusiasm makes learning programming concepts enjoyable.",
    link: "https://www.youtube.com/c/TheCodingTrain",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Creative Coding", "p5.js", "JavaScript", "Processing", "Machine Learning", "Visualization"],
    featured: true
  },
  {
    id: "prog-3",
    title: "freeCodeCamp",
    type: "Interactive Platform",
    level: "Beginner to Advanced",
    source: "freeCodeCamp.org",
    description: "A nonprofit community that helps you learn to code by building projects. The curriculum includes HTML, CSS, JavaScript, data visualization, APIs, Node.js, Python, and more.",
    link: "https://www.freecodecamp.org/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Web Development", "JavaScript", "Python", "Data Science", "Full Stack"],
    featured: true
  },
  {
    id: "prog-4",
    title: "Structure and Interpretation of Computer Programs",
    type: "Book & Lectures",
    level: "Intermediate",
    source: "MIT",
    description: "Classic computer science textbook used at MIT. The lectures by Hal Abelson and Gerald Jay Sussman provide deep insights into programming concepts and computational thinking.",
    link: "https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Computer Science", "Lisp", "Scheme", "Programming Fundamentals"],
    featured: false
  },
  {
    id: "prog-5",
    title: "Algorithms Specialization",
    type: "Course Series",
    level: "Intermediate to Advanced",
    source: "Stanford University (Coursera)",
    description: "Four-course series taught by Tim Roughgarden covering algorithmic techniques for solving problems, including divide-and-conquer, greedy algorithms, dynamic programming, NP-completeness, and more.",
    link: "https://www.coursera.org/specializations/algorithms",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Algorithms", "Data Structures", "Computer Science", "Problem Solving"],
    featured: false
  },
  {
    id: "prog-6",
    title: "Exercism",
    type: "Interactive Platform",
    level: "All Levels",
    source: "Exercism.io",
    description: "Improve your coding skills with practice and mentorship in 50+ programming languages. Each exercise has automated tests and community mentors provide feedback on your solutions.",
    link: "https://exercism.io/",
    icon: <Code className="h-5 w-5" />,
    tags: ["Practice Problems", "Mentorship", "Multiple Languages", "Problem Solving"],
    featured: false
  },
  {
    id: "prog-7",
    title: "Full Stack Open",
    type: "Course",
    level: "Intermediate",
    source: "University of Helsinki",
    description: "Modern web development course teaching React, Redux, Node.js, MongoDB, GraphQL, and TypeScript. The course content is aligned with industry best practices.",
    link: "https://fullstackopen.com/en/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Web Development", "React", "Node.js", "JavaScript", "Full Stack"],
    featured: true
  },
  {
    id: "prog-8",
    title: "Missing Semester of Your CS Education",
    type: "Lecture Series",
    level: "All Levels",
    source: "MIT",
    description: "Practical technical tools and skills often overlooked in CS curriculum but essential for development: shell, editors, version control, debugging, and more.",
    link: "https://missing.csail.mit.edu/",
    icon: <VideoIcon className="h-5 w-5" />,
    tags: ["Developer Tools", "Shell", "Vim", "Git", "Debugging", "Productivity"],
    featured: false
  },
  {
    id: "prog-9",
    title: "Python for Everybody",
    type: "Course",
    level: "Beginner",
    source: "University of Michigan (Coursera)",
    description: "Dr. Charles Severance's course introduces fundamental programming concepts using Python. Perfect for those with no prior coding experience.",
    link: "https://www.py4e.com/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Python", "Programming Fundamentals", "Data Structures"],
    featured: false
  },
  {
    id: "prog-10",
    title: "Teach Yourself Computer Science",
    type: "Guide",
    level: "All Levels",
    source: "teachyourselfcs.com",
    description: "A structured, self-study guide to computer science with recommended textbooks and online courses for each key subject area in CS.",
    link: "https://teachyourselfcs.com/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Computer Science", "Self-Study", "Comprehensive Guide"],
    featured: true
  },
  {
    id: "prog-11",
    title: "Competitive Programming Handbook",
    type: "Book",
    level: "Intermediate to Advanced",
    source: "Antti Laaksonen",
    description: "Comprehensive guide to competitive programming that covers algorithmic techniques required for programming contests and technical interviews.",
    link: "https://cses.fi/book/book.pdf",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Competitive Programming", "Algorithms", "Data Structures", "Problem Solving"],
    featured: false
  },
  {
    id: "prog-12",
    title: "The Odin Project",
    type: "Curriculum",
    level: "Beginner to Intermediate",
    source: "The Odin Project",
    description: "Full-stack curriculum that starts from the fundamentals and progresses to advanced concepts. Project-based approach focuses on building real applications.",
    link: "https://www.theodinproject.com/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Web Development", "JavaScript", "Ruby on Rails", "Full Stack"],
    featured: false
  }
];

export const scienceResources = [
  {
    id: "sci-1",
    title: "Khan Academy Science",
    type: "Interactive Platform",
    level: "All Levels",
    source: "Khan Academy",
    description: "Free comprehensive learning resources covering physics, chemistry, biology, and other sciences with video lessons, interactive exercises, and practice quizzes.",
    link: "https://www.khanacademy.org/science",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Physics", "Chemistry", "Biology", "Earth Science"],
    featured: true
  },
  {
    id: "sci-2",
    title: "MIT OpenCourseWare - Science",
    type: "Course Lectures",
    level: "Intermediate to Advanced",
    source: "MIT",
    description: "Free lecture notes, exams, and videos from MIT science courses. Covers undergraduate and graduate-level physics, chemistry, biology, and more.",
    link: "https://ocw.mit.edu/search/?d=Chemistry&d=Biology&d=Physics",
    icon: <VideoIcon className="h-5 w-5" />,
    tags: ["Physics", "Chemistry", "Biology", "Higher Education"],
    featured: true
  },
  {
    id: "sci-3",
    title: "Crash Course: Chemistry",
    type: "Video Series",
    level: "Beginner to Intermediate",
    source: "PBS Digital Studios",
    description: "Engaging, high-quality video series explaining chemistry concepts from atomic structure to organic chemistry. Hosted by Hank Green.",
    link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Chemistry", "Video Lessons", "Engaging Content"],
    featured: false
  },
  {
    id: "sci-4",
    title: "PhET Interactive Simulations",
    type: "Interactive Simulations",
    level: "All Levels",
    source: "University of Colorado Boulder",
    description: "Free interactive math and science simulations. Engage with concepts through fun, visual, and interactive experiences based on scientific research.",
    link: "https://phet.colorado.edu/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Physics", "Chemistry", "Biology", "Simulations", "Interactive"],
    featured: true
  },
  {
    id: "sci-5",
    title: "Chemistry LibreTexts",
    type: "Open Textbook",
    level: "All Levels",
    source: "LibreTexts",
    description: "Comprehensive, peer-reviewed, open-licensed chemistry textbooks covering general, organic, analytical, physical, and biochemistry.",
    link: "https://chem.libretexts.org/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Chemistry", "Textbook", "Comprehensive"],
    featured: false
  },
  {
    id: "sci-6",
    title: "Biology OpenStax",
    type: "Textbook",
    level: "College",
    source: "OpenStax (Rice University)",
    description: "Free, peer-reviewed biology textbook covering cells, genetics, evolution, ecology, and more with high-quality illustrations and examples.",
    link: "https://openstax.org/details/books/biology-2e",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Biology", "Textbook", "College-Level"],
    featured: false
  },
  {
    id: "sci-7",
    title: "Minute Physics",
    type: "YouTube Channel",
    level: "All Levels",
    source: "Henry Reich",
    description: "Short videos explaining physics concepts with simple drawings. Makes complex topics accessible through clear explanations and visualizations.",
    link: "https://www.youtube.com/user/minutephysics",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Physics", "Short Videos", "Visualizations"],
    featured: false
  },
  {
    id: "sci-8",
    title: "The Feynman Lectures on Physics",
    type: "Lecture Series",
    level: "Intermediate to Advanced",
    source: "Caltech",
    description: "Classic physics lectures by Nobel laureate Richard Feynman. Known for their clarity and insight, these lectures cover mechanics, electromagnetism, and quantum mechanics.",
    link: "https://www.feynmanlectures.caltech.edu/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Physics", "Mechanics", "Electromagnetism", "Quantum Physics"],
    featured: true
  },
  {
    id: "sci-9",
    title: "HHMI BioInteractive",
    type: "Interactive Resources",
    level: "High School to College",
    source: "Howard Hughes Medical Institute",
    description: "High-quality resources for biology education including animations, videos, and interactive activities based on current scientific research.",
    link: "https://www.biointeractive.org/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Biology", "Interactive", "Animations", "Research-Based"],
    featured: false
  },
  {
    id: "sci-10",
    title: "ACS Chemistry Education Resources",
    type: "Educational Resources",
    level: "All Levels",
    source: "American Chemical Society",
    description: "Chemistry education resources from the world's largest scientific society, including lesson plans, virtual labs, and professional development.",
    link: "https://www.acs.org/education/resources.html",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Chemistry", "Education", "Labs", "Teacher Resources"],
    featured: false
  }
];

export const mathematicsResources = [
  {
    id: "math-1",
    title: "3Blue1Brown",
    type: "YouTube Channel",
    level: "All Levels",
    source: "Grant Sanderson",
    description: "Animated math videos that focus on the visual and intuitive understanding of mathematical concepts. Known for series on calculus, linear algebra, and neural networks.",
    link: "https://www.youtube.com/c/3blue1brown",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Calculus", "Linear Algebra", "Visualizations", "Intuitive Math"],
    featured: true
  },
  {
    id: "math-2",
    title: "Khan Academy Mathematics",
    type: "Interactive Platform",
    level: "All Levels",
    source: "Khan Academy",
    description: "Comprehensive math learning resources from arithmetic to differential equations, with video lessons, practice problems, and mastery challenges.",
    link: "https://www.khanacademy.org/math",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Algebra", "Calculus", "Geometry", "Statistics", "Practice Problems"],
    featured: true
  },
  {
    id: "math-3",
    title: "Paul's Online Math Notes",
    type: "Notes & Tutorials",
    level: "College",
    source: "Paul Dawkins (Lamar University)",
    description: "Detailed course notes for Algebra, Calculus I-III, Differential Equations, and Linear Algebra. Includes practice problems with detailed solutions.",
    link: "https://tutorial.math.lamar.edu/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Calculus", "Differential Equations", "Linear Algebra", "Problem Solutions"],
    featured: false
  },
  {
    id: "math-4",
    title: "MIT OpenCourseWare - Mathematics",
    type: "Course Materials",
    level: "Undergraduate to Graduate",
    source: "MIT",
    description: "Free lecture notes, problem sets, and exams from MIT mathematics courses, from calculus to advanced graduate-level topics.",
    link: "https://ocw.mit.edu/search/?d=Mathematics",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Advanced Mathematics", "Linear Algebra", "Calculus", "Differential Equations"],
    featured: true
  },
  {
    id: "math-5",
    title: "Brilliant",
    type: "Interactive Platform",
    level: "All Levels",
    source: "Brilliant.org",
    description: "Interactive courses on math, science, and computer science. Visual, interactive approach to learning complex concepts through problem-solving.",
    link: "https://brilliant.org/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Problem Solving", "Interactive", "Logic", "Scientific Thinking"],
    featured: false
  },
  {
    id: "math-6",
    title: "Art of Problem Solving",
    type: "Interactive Platform",
    level: "Intermediate to Advanced",
    source: "AoPS Inc.",
    description: "Resources for mathematically gifted students, including textbooks, online classes, and a community of problem solvers. Focuses on competition math.",
    link: "https://artofproblemsolving.com/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Competition Math", "Olympiad", "Advanced Problem Solving"],
    featured: false
  },
  {
    id: "math-7",
    title: "Desmos Graphing Calculator",
    type: "Interactive Tool",
    level: "All Levels",
    source: "Desmos",
    description: "Free online graphing calculator that plots equations, visualizes algebraic expressions, and supports animations, sliders, and interactive elements.",
    link: "https://www.desmos.com/calculator",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Graphing", "Visualization", "Functions", "Equations"],
    featured: false
  },
  {
    id: "math-8",
    title: "Mathematics Stack Exchange",
    type: "Q&A Community",
    level: "All Levels",
    source: "Stack Exchange Network",
    description: "Question and answer site for mathematics students and professionals. Covers topics from basic algebra to research-level mathematics.",
    link: "https://math.stackexchange.com/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Problem Solving", "Community", "Q&A", "Explanations"],
    featured: false
  },
  {
    id: "math-9",
    title: "Mathologer",
    type: "YouTube Channel",
    level: "Intermediate to Advanced",
    source: "Burkard Polster",
    description: "Engaging videos on fascinating mathematical topics, paradoxes, and visual proofs. Makes advanced concepts accessible through clear explanations.",
    link: "https://www.youtube.com/c/Mathologer",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Number Theory", "Paradoxes", "Mathematical Proofs", "Visual Math"],
    featured: false
  },
  {
    id: "math-10",
    title: "Mathematics LibreTexts",
    type: "Open Textbook",
    level: "All Levels",
    source: "LibreTexts",
    description: "Comprehensive, peer-reviewed, open-licensed mathematics textbooks covering algebra, calculus, statistics, linear algebra, and more.",
    link: "https://math.libretexts.org/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Textbook", "Comprehensive", "Reference", "Practice Problems"],
    featured: false
  }
];

export const aiMlResources = [
  {
    id: "ai-1",
    title: "Machine Learning Crash Course",
    type: "Course",
    level: "Beginner to Intermediate",
    source: "Google",
    description: "A self-study guide for aspiring machine learning practitioners. Features video lectures, real-world case studies, and hands-on practice exercises with TensorFlow.",
    link: "https://developers.google.com/machine-learning/crash-course",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Machine Learning", "TensorFlow", "Practical Applications", "Hands-on"],
    featured: true
  },
  {
    id: "ai-2",
    title: "Deep Learning Specialization",
    type: "Course Series",
    level: "Intermediate",
    source: "Andrew Ng (Coursera)",
    description: "Five-course series teaching the foundations of deep learning, how to build neural networks, and how to lead successful machine learning projects.",
    link: "https://www.coursera.org/specializations/deep-learning",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    featured: true
  },
  {
    id: "ai-3",
    title: "Fast.ai Practical Deep Learning for Coders",
    type: "Course",
    level: "All Levels",
    source: "fast.ai",
    description: "Top-down approach to deep learning that gets students building state-of-the-art models from the beginning. Focuses on practical applications.",
    link: "https://course.fast.ai/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Deep Learning", "PyTorch", "Computer Vision", "NLP", "Practical"],
    featured: true
  },
  {
    id: "ai-4",
    title: "Elements of AI",
    type: "Course",
    level: "Beginner",
    source: "University of Helsinki",
    description: "Free online course that demystifies AI. No programming skills required. Covers basic concepts, real-world applications, and the implications of AI.",
    link: "https://www.elementsofai.com/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["AI Basics", "No Programming", "Accessible", "Conceptual"],
    featured: false
  },
  {
    id: "ai-5",
    title: "Distill",
    type: "Interactive Journal",
    level: "Intermediate to Advanced",
    source: "Distill.pub",
    description: "Machine learning research journal with interactive visualizations that make complex topics clear and accessible. Focuses on transparency and understanding.",
    link: "https://distill.pub/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Research", "Visualizations", "Neural Networks", "Cutting-edge"],
    featured: false
  },
  {
    id: "ai-6",
    title: "Hugging Face",
    type: "Platform & Community",
    level: "All Levels",
    source: "Hugging Face, Inc.",
    description: "Community and platform for natural language processing. Provides pre-trained models, datasets, and tools for implementing state-of-the-art NLP systems.",
    link: "https://huggingface.co/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["NLP", "Transformers", "Pre-trained Models", "Community"],
    featured: false
  },
  {
    id: "ai-7",
    title: "Stanford CS231n: Deep Learning for Computer Vision",
    type: "Course",
    level: "Intermediate to Advanced",
    source: "Stanford University",
    description: "Comprehensive course on deep learning applied to computer vision. Covers CNNs, image classification, object detection, and generative models.",
    link: "http://cs231n.stanford.edu/",
    icon: <VideoIcon className="h-5 w-5" />,
    tags: ["Computer Vision", "CNNs", "Deep Learning", "Computer Vision"],
    featured: false
  },
  {
    id: "ai-8",
    title: "Kaggle Learn",
    type: "Interactive Tutorials",
    level: "Beginner to Intermediate",
    source: "Kaggle",
    description: "Hands-on tutorials for machine learning, computer vision, NLP, and more. Learn by doing with Jupyter notebooks and real datasets.",
    link: "https://www.kaggle.com/learn",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Practical", "Hands-on", "Data Science", "Competitions"],
    featured: false
  },
  {
    id: "ai-9",
    title: "Reinforcement Learning: An Introduction",
    type: "Book",
    level: "Intermediate to Advanced",
    source: "Richard S. Sutton and Andrew G. Barto",
    description: "Definitive textbook on reinforcement learning, covering the theory and practice of this important subfield of machine learning.",
    link: "http://incompleteideas.net/book/the-book-2nd.html",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Reinforcement Learning", "Textbook", "Theory", "Algorithms"],
    featured: false
  },
  {
    id: "ai-10",
    title: "TensorFlow Tutorials",
    type: "Tutorials & Examples",
    level: "All Levels",
    source: "Google",
    description: "Official guides and examples for TensorFlow. Covers basics to advanced topics with code examples and practical applications.",
    link: "https://www.tensorflow.org/tutorials",
    icon: <Globe className="h-5 w-5" />,
    tags: ["TensorFlow", "Practical", "Code Examples", "Implementation"],
    featured: false
  }
];

export const academicSuccessResources = [
  {
    id: "acad-1",
    title: "Learning How to Learn",
    type: "Course",
    level: "All Levels",
    source: "Dr. Barbara Oakley (Coursera)",
    description: "Powerful mental tools to help you master tough subjects. Based on neuroscience research, this course teaches effective learning techniques and overcoming procrastination.",
    link: "https://www.coursera.org/learn/learning-how-to-learn",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Learning Techniques", "Memory", "Procrastination", "Study Habits"],
    featured: true
  },
  {
    id: "acad-2",
    title: "Thomas Frank's Study Skills",
    type: "YouTube Channel",
    level: "All Levels",
    source: "Thomas Frank",
    description: "Videos on productivity, study strategies, and academic success. Practical advice on note-taking, time management, and building effective study systems.",
    link: "https://www.youtube.com/c/thomasfrank",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Productivity", "Study Strategies", "Time Management", "Note-taking"],
    featured: true
  },
  {
    id: "acad-3",
    title: "Cornell Note-Taking System",
    type: "Technique Guide",
    level: "All Levels",
    source: "Cornell University",
    description: "Effective note-taking method that helps organize, synthesize, and review lecture materials. Includes templates and implementation guides.",
    link: "https://lsc.cornell.edu/how-to-study/taking-notes/cornell-note-taking-system/",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Note-taking", "Organization", "Study Method", "Review Technique"],
    featured: false
  },
  {
    id: "acad-4",
    title: "Pomodoro Technique",
    type: "Productivity Method",
    level: "All Levels",
    source: "Francesco Cirillo",
    description: "Time management method using a timer to break work into intervals, traditionally 25 minutes, separated by short breaks. Enhances focus and reduces mental fatigue.",
    link: "https://francescocirillo.com/pages/pomodoro-technique",
    icon: <Clock className="h-5 w-5" />,
    tags: ["Time Management", "Focus", "Productivity", "Study Method"],
    featured: false
  },
  {
    id: "acad-5",
    title: "Anki Spaced Repetition Software",
    type: "Learning Tool",
    level: "All Levels",
    source: "Anki",
    description: "Powerful, intelligent flashcard program that makes remembering things easy. Uses spaced repetition to optimize learning and long-term retention.",
    link: "https://apps.ankiweb.net/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Flashcards", "Memory", "Spaced Repetition", "Retention"],
    featured: true
  },
  {
    id: "acad-6",
    title: "Cal Newport's Deep Work",
    type: "Book",
    level: "All Levels",
    source: "Cal Newport",
    description: "Rules for focused success in a distracted world. Learn to concentrate without distraction on cognitively demanding tasks—a key skill for STEM studies.",
    link: "https://www.calnewport.com/books/deep-work/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Focus", "Concentration", "Productivity", "Distraction Management"],
    featured: false
  },
  {
    id: "acad-7",
    title: "How to Take Smart Notes",
    type: "Book",
    level: "College+",
    source: "Sönke Ahrens",
    description: "One simple technique to boost writing, learning and thinking. Based on the Zettelkasten method, it teaches effective note-taking for knowledge development.",
    link: "https://takesmartnotes.com/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Note-taking", "Zettelkasten", "Knowledge Management", "Academic Writing"],
    featured: false
  },
  {
    id: "acad-8",
    title: "Ali Abdaal's Study Techniques",
    type: "YouTube Channel",
    level: "All Levels",
    source: "Ali Abdaal",
    description: "Evidence-based study techniques from a Cambridge graduate. Covers active recall, spaced repetition, and effective learning strategies.",
    link: "https://www.youtube.com/c/aliabdaal",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Active Recall", "Spaced Repetition", "Evidence-Based", "Medical School"],
    featured: false
  },
  {
    id: "acad-9",
    title: "Mind Maps",
    type: "Technique Guide",
    level: "All Levels",
    source: "Tony Buzan",
    description: "Visual thinking tool that helps structure information, analyze, comprehend, synthesize, and generate new ideas. Excellent for complex STEM topics.",
    link: "https://tonybuzan.com/about/mind-mapping/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Visual Learning", "Organization", "Creativity", "Note-taking"],
    featured: false
  },
  {
    id: "acad-10",
    title: "Academic Skills Center",
    type: "Resource Hub",
    level: "College",
    source: "Dartmouth College",
    description: "Comprehensive guides on time management, reading strategies, note-taking, exam preparation, and other academic skills essential for college success.",
    link: "https://students.dartmouth.edu/academic-skills/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["College Skills", "Comprehensive", "Study Guides", "Academic Success"],
    featured: false
  }
];

export const researchSkillsResources = [
  {
    id: "res-1",
    title: "How to Read a Scientific Paper",
    type: "Guide",
    level: "Beginner to Intermediate",
    source: "Science Magazine",
    description: "Step-by-step guide to efficiently reading and understanding scientific literature, with strategies for different reading purposes and paper structures.",
    link: "https://www.science.org/content/article/how-read-scientific-paper",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Scientific Literature", "Reading Strategies", "Critical Analysis"],
    featured: true
  },
  {
    id: "res-2",
    title: "Academic Phrasebank",
    type: "Writing Resource",
    level: "College+",
    source: "University of Manchester",
    description: "Collection of phrases and sentences organized by the functions common in academic writing. Helps students and researchers with academic language.",
    link: "https://www.phrasebank.manchester.ac.uk/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Academic Writing", "Language", "Research Papers", "Thesis"],
    featured: false
  },
  {
    id: "res-3",
    title: "Research Methods Knowledge Base",
    type: "Online Textbook",
    level: "College+",
    source: "Conjoint.ly",
    description: "Comprehensive web-based textbook that addresses all of the topics in a typical research methods course, with explanations of key concepts and methodologies.",
    link: "https://conjointly.com/kb/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Research Methods", "Methodology", "Statistics", "Study Design"],
    featured: true
  },
  {
    id: "res-4",
    title: "Purdue Online Writing Lab (OWL)",
    type: "Writing Resource",
    level: "All Levels",
    source: "Purdue University",
    description: "Free writing resources including citation guides, academic writing standards, and subject-specific writing guides for various disciplines.",
    link: "https://owl.purdue.edu/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Academic Writing", "Citations", "Grammar", "Style Guides"],
    featured: false
  },
  {
    id: "res-5",
    title: "LaTeX Tutorial",
    type: "Technical Guide",
    level: "Beginner to Intermediate",
    source: "Overleaf",
    description: "Learn to use LaTeX, the document preparation system widely used in STEM for professional papers, theses, and technical documentation.",
    link: "https://www.overleaf.com/learn",
    icon: <Globe className="h-5 w-5" />,
    tags: ["LaTeX", "Document Preparation", "Technical Writing", "Mathematics"],
    featured: true
  },
  {
    id: "res-6",
    title: "Coursera: Introduction to Research Methods",
    type: "Course",
    level: "Beginner",
    source: "University of London (Coursera)",
    description: "Introduction to the research process, research designs, and the research methods commonly used in psychology, social sciences, and market research.",
    link: "https://www.coursera.org/learn/introduction-to-research-methods",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Research Methods", "Study Design", "Data Collection", "Analysis"],
    featured: false
  },
  {
    id: "res-7",
    title: "Connected Papers",
    type: "Research Tool",
    level: "College+",
    source: "Connected Papers",
    description: "Visual tool for academic literature research that helps you explore connections between academic papers using a visual graph interface.",
    link: "https://www.connectedpapers.com/",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Literature Review", "Research Tool", "Paper Discovery", "Visual"],
    featured: false
  },
  {
    id: "res-8",
    title: "Understanding Statistics in Research",
    type: "Video Series",
    level: "Intermediate",
    source: "StatQuest with Josh Starmer",
    description: "Clear explanations of statistics concepts essential for understanding and conducting research, from basic probability to advanced machine learning algorithms.",
    link: "https://www.youtube.com/c/joshstarmer",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Statistics", "Data Analysis", "Research Methods", "Visual Explanations"],
    featured: false
  },
  {
    id: "res-9",
    title: "MIT's Research Ethics Course",
    type: "Course Materials",
    level: "College+",
    source: "MIT OpenCourseWare",
    description: "Course on ethical issues in research, including research integrity, data management, authorship, peer review, mentoring, and social responsibility.",
    link: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-915-graduate-algorithms-fall-2001/",
    icon: <BookOpen className="h-5 w-5" />,
    tags: ["Research Ethics", "Integrity", "Responsible Conduct", "Publication"],
    featured: false
  },
  {
    id: "res-10",
    title: "How to Give a Great Research Talk",
    type: "Video Tutorial",
    level: "All Levels",
    source: "Simon Peyton Jones",
    description: "Renowned computer scientist shares principles for giving clear, engaging research presentations that effectively communicate complex ideas.",
    link: "https://www.microsoft.com/en-us/research/academic-program/give-great-research-talk/",
    icon: <VideoIcon className="h-5 w-5" />,
    tags: ["Presentations", "Communication", "Public Speaking", "Conferences"],
    featured: false
  }
];

export const networkingResources = [
  {
    id: "net-1",
    title: "The Art of the Cold Email",
    type: "Guide",
    level: "All Levels",
    source: "Stanford University",
    description: "Comprehensive guide to writing effective cold emails for academic and professional networking, including templates and real examples that worked.",
    link: "https://www.gsb.stanford.edu/experience/news-history/art-cold-email",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Cold Emails", "Networking", "Professional Communication", "Templates"],
    featured: true
  },
  {
    id: "net-2",
    title: "How to Find Research Opportunities",
    type: "Video Guide",
    level: "College",
    source: "Simon Clark",
    description: "Former PhD student shares strategies for finding and securing undergraduate research opportunities, including how to approach professors effectively.",
    link: "https://www.youtube.com/watch?v=e55UGIDlHWs",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Research Opportunities", "Undergraduate", "Professor Outreach", "STEM"],
    featured: false
  },
  {
    id: "net-3",
    title: "LinkedIn for Students",
    type: "Resource Hub",
    level: "Beginner",
    source: "LinkedIn",
    description: "Official guide for students on building an effective LinkedIn profile, networking with professionals, and finding opportunities in your field.",
    link: "https://university.linkedin.com/linkedin-for-students",
    icon: <Globe className="h-5 w-5" />,
    tags: ["LinkedIn", "Professional Networking", "Career Development", "Profile Building"],
    featured: true
  },
  {
    id: "net-4",
    title: "Networking in Scientific Research",
    type: "Article",
    level: "College+",
    source: "Nature",
    description: "Strategies for building professional networks in academia and scientific research, including conferences, online presence, and collaboration opportunities.",
    link: "https://www.nature.com/articles/d41586-019-02834-8",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Academic Networking", "Conferences", "Collaboration", "Research Community"],
    featured: false
  },
  {
    id: "net-5",
    title: "Finding a Mentor in STEM",
    type: "Guide",
    level: "All Levels",
    source: "Science Magazine",
    description: "Practical advice on identifying, approaching, and building relationships with mentors who can guide your STEM education and career development.",
    link: "https://www.sciencemag.org/careers/2019/08/how-find-right-mentors-and-ask-right-questions",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Mentorship", "Career Development", "Professional Relationships", "STEM"],
    featured: false
  },
  {
    id: "net-6",
    title: "Scientific Conference Networking Tips",
    type: "Video Guide",
    level: "College+",
    source: "PhD Career Guide",
    description: "How to make the most of scientific conferences for networking, including preparation strategies, conversation starters, and follow-up techniques.",
    link: "https://www.youtube.com/watch?v=aN9xtW_BdWA",
    icon: <Youtube className="h-5 w-5" />,
    tags: ["Conferences", "Academic Networking", "Professional Development", "Science Communication"],
    featured: false
  },
  {
    id: "net-7",
    title: "Informational Interviews Guide",
    type: "Guide",
    level: "All Levels",
    source: "University of California, Berkeley",
    description: "How to request and conduct informational interviews with professionals in your field of interest. Includes sample emails, questions, and follow-up strategies.",
    link: "https://career.berkeley.edu/Info/InfoInterview",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Informational Interviews", "Career Exploration", "Networking", "Professional Development"],
    featured: false
  },
  {
    id: "net-8",
    title: "Building Your Digital Presence as a Scientist",
    type: "Course",
    level: "Intermediate",
    source: "Coursera",
    description: "How to develop an effective online presence as a STEM professional, including social media strategies, personal websites, and research repositories.",
    link: "https://www.coursera.org/learn/building-your-digital-presence",
    icon: <Globe className="h-5 w-5" />,
    tags: ["Digital Presence", "Science Communication", "Personal Branding", "Social Media"],
    featured: true
  },
  {
    id: "net-9",
    title: "Networking for Introverts in STEM",
    type: "Article Series",
    level: "All Levels",
    source: "Scientific American",
    description: "Tailored networking strategies for introverts in STEM fields, focusing on authentic connections, one-on-one interactions, and playing to strengths.",
    link: "https://blogs.scientificamerican.com/guest-blog/networking-for-nerds-how-to-network-if-you-hate-small-talk/",
    icon: <FileText className="h-5 w-5" />,
    tags: ["Introvert Networking", "Authentic Connections", "STEM", "Professional Development"],
    featured: false
  },
  {
    id: "net-10",
    title: "Virtual Networking in STEM",
    type: "Webinar",
    level: "All Levels",
    source: "American Association for the Advancement of Science",
    description: "Strategies for effective virtual networking in STEM fields, including online events, digital communities, and remote collaboration opportunities.",
    link: "https://www.aaas.org/resources/communication-toolkit",
    icon: <VideoIcon className="h-5 w-5" />,
    tags: ["Virtual Networking", "Remote Collaboration", "Digital Communities", "Online Events"],
    featured: false
  }
];

// Add more resource categories as needed...

// Helper function to get resources by category
export const getResourcesByCategory = (category: string) => {
  switch(category) {
    case "Programming":
      return programmingResources;
    case "Science":
      return scienceResources;
    case "Mathematics":
      return mathematicsResources;
    case "AI & Machine Learning":
      return aiMlResources;
    case "Academic Success":
      return academicSuccessResources;
    case "Research Skills":
      return researchSkillsResources;
    case "Networking":
      return networkingResources;
    default:
      return [];
  }
};

// Combine all resources
export const getAllResources = () => {
  return [
    ...programmingResources,
    ...scienceResources,
    ...mathematicsResources,
    ...aiMlResources,
    ...academicSuccessResources,
    ...researchSkillsResources,
    ...networkingResources
  ];
};
