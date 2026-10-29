/**
 * Central profile data configuration for Bhushan Gavale.
 * All personal details, projects, skills, education, and links are maintained here.
 */

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'java' | 'fullstack' | 'ai' | 'backend';
  description: string;
  longDescription: string;
  techStack: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  status: 'Completed' | 'In Active Development' | 'Production Ready';
  accentColor: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level: 'Project Experience' | 'Practicing' | 'Familiar';
    highlight?: boolean;
    description: string;
  }[];
}

export interface Quote {
  text: string;
  subtext?: string;
  author: string;
  tag: string;
}
// all profile data section frist page 
export const PROFILE_DATA = {
  name: "Bhushan Gavale",
  monogram: "BG",
  backgroundWatermark: "DEVELOPER",
  roleHeadline: "Java Developer | Backend Developer | Full Stack Developer",
  shortIntro: "I'm a computer engineer graduate passionate about building reliable backend systems, scalable web applications, and practical software solutions using Java and modern web technologies.",
  aboutParagraphs: [
    "Hello! I'm Bhushan Gavale, a computer engineering graduate with a deep focus on Java, Spring Boot ecosystem, relational database, full stack web development and consistent Data Structures & Algorithms (DSA) problem-solving.",
    "During my academic tenure and intensive hands-on project work, I've designed and Blockchain Based Agricultural Food supply chain systems, secure e-commerce platform, and Android based Applications. I believe in clean object-oriented architecture, and writing maintainable code.",
    "I am eager to contribute my backend engineering and full-stack development skills to an innovative engineering team where I can solve high-impact technical challenges, and deliver reliable customer-facing software."
  ],
  stats: [
    { label: "Core Java & Spring Modules", value: "15+" },
    { label: "End-to-End Projects", value: "2" },
    { label: "Data Structures & Algos", value: "100+" },
    { label: "Availability", value: "Immediate" },
  ],
  contacts: {
    email: "bhushangavale2089@gmail.com",
    github: "https://github.com/Bhushangavale",
    linkedin: "https://www.linkedin.com/in/bhushan-gavale",
    location: "Pune, mumbai, indore, Bangalore, India (Open to Remote & Relocation)",
    phone: "9763200526",
    whatsapp: "97633200526",
  },
  quotes: [
    {
      text: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
      subtext: "Many people quit just before success.",
      author: "Thomas A. Edison",
      tag: "Perseverance"
    },
    {
      text: "Simplicity is prerequisite for reliability.",
      subtext: "Clean code always wins over clever hacks.",
      author: "Edsger W. Dijkstra",
      tag: "Software Engineering"
    },
    {
      text: "Java is C++ without the guns, knives, and clubs.",
      subtext: "Robust memory management and developer productivity.",
      author: "James Gosling",
      tag: "Java Platform"
    },
    {
      text: "Talk is cheap. Show me the code.",
      subtext: "Deliver working software with tests and documentation.",
      author: "Linus Torvalds",
      tag: "Execution"
    }
  ] as Quote[],
  experienceLearning: [
    {
      period: "2025 - 2026",
      title: "Capstone Engineering: Blockchain Agricultural Supply Chain",
      organization: "University Major Project",
      description: "Architected a decentralized traceability platform using Java, Spring Boot, Ethereum smart contracts via Web3j, and a responsive React interface. Eliminated intermediary tampering across agricultural logistics.",
      skills: ["Java", "Spring Boot", "Web3j", "Ethereum", "MySQL", "React"]
    },
     {
      period: "2024-2025",
      title: "Online BusPass System Using Android Studio",
      organization: "University Minor Project",
      description: "Developed a web-based system to simplify bus pass applications, online registration, pass management, and administrative approval.",
      skills: ["Java", "Xml", "Firebase", "Android Studio"]
    },
    {
      period: "2025",
      title: "Full-Stack E-Commerce Platform Development",
      organization: "Academic Software Lab",
      description: "Engineered a modular e-commerce website with transactional order processing, Spring Security authentication, role-based dashboards, and product catalog pagination.",
      skills: ["Spring MVC", "Spring Security", "JPA/Hibernate", "MySQL"]
    }
  ],
  //eduction section---------------------------------------
  education: [
    {
      degree: "Bachelor of Engineering (B.E.) in Computer Engineering",
      institution: "Kaviyatri Bahinabai Choudhary North Maharashtra University (KBCNMU)",
      year: "2023 - 2026",
      status: "Completed",
      CGPA :"8.00",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java), Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering, Embedded System.",
        "Graduated with First Class distinction.",
      ]
    },
    {
      degree: "Diploma In Computer Engineering",
      institution: "Nikam Institude of Technology",
      year: "2021 - 2023",
      status: "Completed",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Object-Oriented Programming (Java, c++), Database Management Systems (DBMS), Operating Systems, Computer Networks, Software Engineering.",
        "Graduated with First Class distinction.",
      ]
    }
  ],
  // cerification section -------------------------------------
  certifications: [
    {
      title: "Gen AI ",
      issuer: " simplilearn",
      date: "2025",
      verified: true
    },
    {
      title: "Hackathon Finalist ",
      issuer: "Unstop",
      date: "2026",
      verified: true
    },
    {
      title: "GenAI Powered Data Analytics",
      issuer: "Forage",
      date: "2026",
      verified: true
    }
  ],
  // Querise section on webpage---------------------------------
  faqs: [
    {
      question: "What is your primary technology focus?",
      answer: "My core expertise is Java backend engineering using Spring Boot, REST APIs, Hibernate/JPA, and SQL databases (MySQL, PostgreSQL). I also have strong full-stack proficiency with React, javaScript, and modern frontend tooling."
    },
    {
      question: "Are you available for immediate joining?",
      answer: "Yes, I am available to join immediately for full-time Java Developer, Backend Developer, or Full Stack Developer opportunities."
    },
    {
      question: "Are you open to relocation or remote work?",
      answer: "Yes, I am flexible and open to in-office roles in major tech hubs (Pune, Bangalore, Hyderabad, Mumbai, Indore, Nashik) as well as hybrid or remote positions worldwide."
    },
    {
      question: "How do you approach code quality and testing?",
      answer: "I follow clean coding conventions, adhere to SOLID principles, write unit tests using JUnit 5 and Mockito, and structure API responses using standard REST error formats and HTTP status codes."
    }
  ]
};
  // Skills section ---------------------------------------------
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    skills: [
      { name: "Java (11/17/21)", level: "Project Experience", highlight: true, description: "Core OOP, Collections, Multithreading, Streams API," },
      { name: "SQL", level: "Project Experience", highlight: true, description: "Complex Queries, Joins, Indexing, Transactions, Normalization" },
      { name: "JavaScript (ES6+)", level: "Project Experience", description: "Async/Await, Promises, Closures, DOM Manipulation" },
      { name: "HTML5 & CSS3", level: "Project Experience", description: "Semantic Markup, Flexbox, CSS Grid, Responsive Design" },
    ]
  },
  {
    id: "backend",
    name: "Backend & SpringBoot",
    skills: [
      { name: "Spring Boot ", level: "Project Experience", highlight: true, description: "Auto-configuration, Spring Starters, Actuator, Dependency Injection" },
      { name: "RESTful APIs", level: "Project Experience", highlight: true, description: "Resource design, JSON serialization, HTTP verbs, Exception handling" },
      { name: "Hibernate / JPA", level: "Project Experience", highlight: true, description: "Entity mappings, JPQL, Criteria API, Transaction management" },
      { name: "Spring Security", level: "Practicing", description: "JWT Authentication, Role-based Access Control (RBAC)" },
      { name: "Spring MVC", level: "Project Experience", description: "Controllers, View Resolvers, Request mapping, Validation annotations" },
    ]
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React ", level: "Project Experience", highlight: true, description: "Hooks (useState, useEffect, useMemo), Component architecture, Context API" },
      { name: "Tailwind CSS", level: "Project Experience", highlight: true, description: "Utility-first design, Responsive breakpoints, Custom themes" },
      { name: "Vite", level: "Project Experience", description: "Modern build pipeline, Fast HMR, Bundling optimization" }
    ]
  },
  {
    id: "databases",
    name: "Databases & Storage",
    skills: [
      { name: "MySQL", level: "Project Experience", highlight: true, description: "Schema design, Constraints, Stored Procedures, ACID compliance" },
      { name: "PostgreSQL", level: "Practicing", description: "Advanced relational queries, JSONB storage, pgvector exploration" },
    ]
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: "Project Experience", highlight: true, description: "Branching workflows, Pull requests, Merge conflict resolution" },
      { name: "Maven", level: "Project Experience", highlight: true, description: "Dependency management, Build lifecycles, Plugin configurations" },
      { name: "Postman", level: "Project Experience", highlight: true, description: "API testing, Environment variables, Mock servers, Test collections" },
      { name: "Docker", level: "Practicing", description: "Dockerfile creation, Containerization of Spring Boot apps" },
      { name: "IntelliJ IDEA & VS Code", level: "Project Experience", description: "Debugging, Profiling, Refactoring shortcuts, Plugins" }
    ]
  },
  {
    id: "ai",
    name: "AI & Modern Integration",
    skills: [
      { name: "Spring AI", level: "Practicing", highlight: true, description: "AI model abstractions, Prompt templates, Document readers" },
      { name: "RAG Architecture", level: "Practicing", description: "Retrieval-Augmented Generation, Vector embeddings, Context windows" },
      { name: "pgvector & Vector DBs", level: "Practicing", description: "Storing and querying document embeddings for semantic similarity" },
      { name: "Ollama & Gemini API", level: "Practicing", description: "Local LLM inference and cloud generative API integrations" }
    ]
  }
];
// Projcets section -----------------------------------------------
export const PROJECTS: Project[] = [
  {
    id: "agri-supply-chain",
    title: "Blockchain-Based Agricultural Supply Chain",
    subtitle: "End-to-End Crop Traceability & Smart Contracts",
    category: "java",
    description: "A decentralized traceability platform built to eliminate tampering, protect farmer pricing, and track farm-to-table crop batches using Java, Spring Boot, and Ethereum smart contracts.",
    longDescription: "Agricultural supply chains suffer from lack of transparency, fake certificates, and middleman markups. This project implements an immutable ledger verifying every transit milestone: crop harvest, quality testing, cold-storage warehousing, and distributor handoff. Built with Spring Boot for business logic, Web3j for Ethereum blockchain interactions, and a clean React frontend for stakeholders.",
    techStack: ["Java", "Spring Boot", "Ethereum", "Web3j", "MySQL", "React", "Tailwind CSS"],
    keyFeatures: [
      "Smart contract interaction via Web3j for immutable batch record creation",
      "Role-based access control for Farmers, Wholesalers, Quality Inspectors, and Consumers",
      "Spring Boot RESTful service managing off-chain metadata in MySQL for sub-second queries",
    ],
    architectureHighlights: [
      "Layered architecture: Presentation (React) -> REST Controller -> Service Layer -> Web3j Blockchain Gateway -> Ethereum Node",
      "Optimized hybrid storage: Heavy asset metadata cached in MySQL while cryptographic hashes and batch proofs reside on Ethereum",
      "Transactional rollbacks to prevent inconsistent state between off-chain database and on-chain events"
    ],
    githubUrl: "https://github.com/Bhushangavale",
    liveDemoUrl: "https://github.com/Bhushangavale/Terrava-agricultural-supply-Food-chain",
    status: "Completed",
    accentColor: "#FFB800"
  },
  {
    id: "ecommerce-platform",
    title: "Enterprise E-Commerce Web Application",
    subtitle: "Robust Product Management, Auth & Checkout Engine",
    category: "fullstack",
    description: "A comprehensive e-commerce application demonstrating product catalog browsing, real-time cart persistence, secure payment simulation, and administrative inventory controls.",
    longDescription: "Engineered from the ground up to showcase clean enterprise backend workflows. Built using Java, Spring Boot, Spring MVC, and JPA/Hibernate. Features end-to-end user authentication with Spring Security, transactional cart checkout, stock deduction with optimistic locking, and dynamic category filtering.",
    techStack: ["Java ", "Spring Boot", "Spring MVC", "Spring Security", "Hibernate / JPA", "MySQL", "React", "Bootstrap / Tailwind"],
    keyFeatures: [
      "Secure authentication & authorization pipeline with session & token support",
      "Product catalog with multifaceted search, price range filtering, and pagination",
      "Persistent cart synchronized with database for logged-in and guest accounts",
      "Transactional order processing ensuring inventory consistency during concurrent checkouts",
      "Admin portal for product management, stock alerts, and customer order fulfillment tracking"
    ],
    architectureHighlights: [
      "Repository pattern with Spring Data JPA implementing custom queries and pagination",
      "Global exception handling with custom @ControllerAdvice returning standardized API errors",
      "Optimistic locking using @Version on inventory entities to prevent race conditions during sales"
    ],
    githubUrl: "https://github.com/Bhushangavale",
    liveDemoUrl: "https://github.com/Bhushangavale/E-commers-Project",
    status: "Completed",
    accentColor: "#111111"
  },

  // this Project are pending to develop and deploye github

  // {
  //   id: "ai-knowledge-assistant",
  //   title: "Enterprise AI Knowledge Assistant",
  //   subtitle: "Spring AI RAG Engine with Document Embeddings",
  //   category: "ai",
  //   description: "An AI-powered knowledge assistant that ingests internal technical documents, generates vector embeddings, and delivers accurate, cited answers using Retrieval-Augmented Generation.",
  //   longDescription: "Solving the problem of institutional knowledge discovery. Rather than having engineers dig through hundreds of pages of technical documentation, this system ingests PDF/DOCX files, splits them into semantic chunks, generates vector embeddings, and retrieves relevant passages to ground generative LLM responses with precise page citations.",
  //   techStack: ["Java 21", "Spring Boot 3", "Spring AI", "React", "PostgreSQL", "pgvector", "Ollama / Gemini"],
  //   keyFeatures: [
  //     "Document ingestion pipeline with automatic text extraction and chunking",
  //     "Semantic similarity search powered by PostgreSQL and the pgvector extension",
  //     "Retrieval-Augmented Generation (RAG) providing accurate answers strictly based on verified documents",
  //     "Direct citation linking back to source file, page number, and relevant excerpt",
  //     "Streaming responses in real-time to the React client interface"
  //   ],
  //   architectureHighlights: [
  //     "Spring AI vector store abstraction integrating seamlessly with pgvector",
  //     "Cosine distance ranking to pull top-K most relevant context chunks into LLM system prompt",
  //     "Hallucination guardrails: Model explicitly indicates when context is insufficient"
  //   ],
  //   githubUrl: "https://github.com",
  //   liveDemoUrl: "https://demo.example.com/ai-knowledge-assistant",
  //   status: "In Active Development",
  //   accentColor: "#FFB800"
  // }
];
