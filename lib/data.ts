import { PersonalInfo, Skill, Experience, Education, Project, Certification } from './types';

export const personalInfo: PersonalInfo = {
  name: "Roshin Jimmy",
  title: "Computer Science Engineering Student & Full Stack Developer",
  email: "roshinjimmy.mec@gmail.com",
  phone: "+91 7593035625",
  location: "Kerala, India",
  linkedin: "https://www.linkedin.com/in/roshinjimmy/",
  github: "https://github.com/roshinjimmy",
  website: "",
  summary: "Passionate Computer Science Engineering student with expertise in full-stack development, machine learning, and AI. Experienced in building innovative solutions for real-world problems, with strong leadership skills and a track record of successful project delivery. Currently pursuing B.Tech at Govt. Model Engineering College with a CGPA of 8.6."
};

export const skills: Skill[] = [
  // Technical Skills
  { name: "HTML", category: "Frontend", level: "Advanced" },
  { name: "CSS", category: "Frontend", level: "Advanced" },
  { name: "JavaScript", category: "Frontend", level: "Advanced" },
  { name: "React.js", category: "Frontend", level: "Advanced" },
  { name: "Node.js", category: "Backend", level: "Advanced" },
  { name: "Express.js", category: "Backend", level: "Intermediate" },
  { name: "MongoDB", category: "Database", level: "Intermediate" },
  { name: "Python", category: "Programming", level: "Advanced" },
  { name: "C++", category: "Programming", level: "Intermediate" },
  { name: "Java", category: "Programming", level: "Intermediate" },
  { name: "FastAPI", category: "Backend", level: "Intermediate" },
  { name: "OpenCV", category: "Machine Learning", level: "Intermediate" },
  { name: "PyTorch", category: "Machine Learning", level: "Intermediate" },
  { name: "AWS", category: "Cloud", level: "Beginner" },
  { name: "Git", category: "Tools", level: "Advanced" },
];

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Fullstack Intern",
    company: "GharSetu",
    location: "Remote",
    startDate: "2025-02",
    endDate: "2025-05",
    description: [
      "Enhanced platform search and property listing features for a real estate platform",
      "Optimized search functionalities and implemented efficient loaders for better user experience",
      "Improved backend logic and optimized database queries for faster response times",
      "Enhanced platform responsiveness across different devices and screen sizes"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB"]
  },
  {
    id: "2", 
    title: "Technical Intern",
    company: "Rozenbridge Inspired Simulations",
    location: "Remote",
    startDate: "2024-07",
    endDate: "2024-08",
    description: [
      "Automated VCD to JSON conversion for simulation visualization tools",
      "Built a comprehensive Model Database Manager ensuring data integrity and consistency",
      "Developed Python scripts for efficient data processing and transformation",
      "Worked with MongoDB for data storage and retrieval optimization"
    ],
    technologies: ["Python", "JavaScript", "MongoDB"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Govt. Model Engineering College (KTU)",
    location: "Kochi, Kerala",
    graduationDate: "2026",
    gpa: "CGPA: 8.6",
    honors: [],
    relevantCourses: ["Data Structures", "Algorithms", "Machine Learning", "Web Development", "Database Systems"]
  },
  {
    id: "2",
    degree: "CBSE 12th Standard",
    institution: "Vimala Public School",
    location: "Thodupuzha, Kerala", 
    graduationDate: "2021",
    gpa: "95.8%",
    honors: [],
    relevantCourses: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
  },
  {
    id: "3",
    degree: "CBSE 10th Standard", 
    institution: "Vimala Public School",
    location: "Thodupuzha, Kerala",
    graduationDate: "2019",
    gpa: "97.8%",
    honors: [],
    relevantCourses: ["Mathematics", "Science", "Social Science", "English"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Vision",
    description: "Built a full-stack tool with live color correction for color-blind users, including a browser extension. Features real-time color adjustment and accessibility enhancements.",
    technologies: ["JavaScript", "React", "Python", "FastAPI", "OpenCV"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: "2", 
    name: "Answerly",
    description: "Automated subjective answer grading system using ML & NLP. Extracts handwritten text and evaluates semantic similarity for accurate assessment.",
    technologies: ["Google Vision API", "SBERT", "PyTorch", "OpenCV", "AWS"],
    liveUrl: "",
    githubUrl: "",
    featured: true
  },
  {
    id: "3",
    name: "EchoFrame", 
    description: "Developed AI-powered smart glasses for visually impaired individuals. Features on-device image capture with real-time audio feedback for enhanced navigation.",
    technologies: ["XIAO ESP32S3", "YOLO", "OpenCV", "Pyttsx3"],
    liveUrl: "",
    githubUrl: "https://github.com/roshinjimmy/quad_squad",
    featured: true
  },
  {
    id: "4",
    name: "Mic Bot",
    description: "Developed an offline voice-controlled assistant using speech-to-text & fuzzy matching for system commands. Provides hands-free computer control.",
    technologies: ["Python", "Vosk", "RapidFuzz", "Subprocess"],
    liveUrl: "",
    githubUrl: "https://github.com/roshinjimmy/mic-bot",
    featured: true
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    name: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "2024",
    credentialUrl: ""
  },
  {
    id: "2",
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2024",
    credentialUrl: ""
  },
  {
    id: "3",
    name: "Programming in Python",
    issuer: "University of Michigan (Coursera)",
    date: "2023",
    credentialUrl: ""
  }
];

export const achievements = [
  "Winner – HackForTomorrow (HFT) 2023, Excel Tech Fest, MEC",
  "1st Runner-up – Electrovation 2023 (Project: EpiCare)",
  "Best Performing Team – MECLABS 2024 (Project: EchoFrame)"
];

export const positions = [
  "Lead Developer – ICTEST 2026 official website (International Conference at MEC)",
  "Chairperson (Computer Society, IEEE MEC SB) – Led MEC.Conf, MEC.Hack & Code Clash (2024)",
  "Joint Secretary (FOSSMEC) – Organized workshops & DebUtsav with Debian India (2024)",
  "Tech Lead (TLE MEC) – Migrated hardcoded team data to backend-driven system (2024)",
  "Millennium Fellow (MCN 2023) – Developed The Enableist Project promoting inclusive education (SDG 10)"
];