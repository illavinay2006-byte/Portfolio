/**
 * PORTFOLIO DATA & STORAGE ENGINE
 * Student: Illa Vinay Kumar
 * College: St. Ann's College of Engineering and Technology, Chirala
 * Role: B.Tech 3rd Year CSE Student | Aspiring Full Stack Developer
 * 
 * Includes local persistence engine for additions from the Admin Portal.
 */

const DEFAULT_PORTFOLIO_DATA = {
  student: {
    name: "Illa Vinay Kumar",
    role: "B.Tech 3rd Year CSE Student | Aspiring Full Stack Developer",
    college: "St. Ann's College of Engineering and Technology, Chirala",
    branch: "Computer Science and Engineering",
    currentStatus: "3rd Year B.Tech Student",
    graduationYear: "2026 (Expected)",
    location: "Chirala, Andhra Pradesh, India",
    careerGoal: "Full Stack Developer",
    heroIntro: "Computer Science Engineering student passionate about building scalable web applications, mastering modern backend architectures, and translating complex problem statements into clean, maintainable digital solutions.",
    aboutBio: "I am a dedicated 3rd-year Computer Science and Engineering student at St. Ann's College of Engineering and Technology, Chirala. Driven by curiosity and a hands-on learning mindset, I specialize in full-stack web development with strong foundational grounding in Python, Flask, Java, Node.js, and modern JavaScript. I enjoy architecting robust backend APIs, building responsive user interfaces, and adhering to solid software engineering principles. I am actively preparing for software engineering roles and technical internships where I can contribute to production-grade systems."
  },

  socialLinks: {
    github: {
      label: "GitHub",
      url: "https://github.com/illavinay2006-byte",
      display: "github.com/illavinay2006-byte"
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vinay-kumar-4ab345424/",
      display: "linkedin.com/in/vinay-kumar-4ab345424"
    },
    email: {
      label: "Email",
      url: "mailto:illavinay2006@gmail.com",
      display: "illavinay2006@gmail.com"
    },
    phone: {
      label: "Phone",
      url: "tel:+916305034309",
      display: "+91 6305034309"
    },
    whatsapp: {
      label: "WhatsApp",
      url: "https://wa.me/916305034309",
      display: "+91 6305034309"
    }
  },

  quickOverview: [
    {
      title: "Current Status",
      value: "3rd Year B.Tech CSE",
      detail: "St. Ann's College of Engineering & Technology, Chirala",
      badge: "In Progress"
    },
    {
      title: "Primary Specialization",
      value: "Full Stack Web Dev",
      detail: "Python, Flask, Java, Node.js, Express & Modern JS",
      badge: "Core Track"
    },
    {
      title: "Engineering Foundation",
      value: "Data Structures & OOP",
      detail: "Clean architecture, database systems & algorithmic logic",
      badge: "Computer Science"
    },
    {
      title: "Immediate Objective",
      value: "Software Internships",
      detail: "Ready for technical assessments & interview evaluations",
      badge: "Interview Ready"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      specialization: "Computer Science and Engineering",
      institution: "St. Ann's College of Engineering and Technology, Chirala",
      status: "3rd Year (Currently Enrolled)",
      duration: "2022 – 2026 (Expected)",
      score: "Coursework in Progress (JNTUK)",
      highlights: [
        "Core focus on Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Software Design.",
        "Active laboratory hands-on practice in Java, Python programming, and Web Technologies.",
        "Collaborating on technical team projects and departmental coding initiatives."
      ]
    },
    {
      degree: "Intermediate / Higher Secondary (10+2)",
      specialization: "Mathematics, Physics, and Chemistry (MPC)",
      institution: "Board of Intermediate Education, Andhra Pradesh",
      status: "Completed",
      duration: "2020 – 2022",
      score: "Graduated with High Academic Standing",
      highlights: [
        "Developed rigorous analytical and quantitative problem-solving foundations.",
        "Excelled in mathematical reasoning, algebra, calculus, and physical sciences."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC / 10th)",
      specialization: "General Academic Curriculum",
      institution: "Board of Secondary Education, Andhra Pradesh",
      status: "Completed",
      duration: "2020",
      score: "Graduated with First Class Honors",
      highlights: [
        "Formed initial interest in computational logic, science, and mathematics.",
        "Consistent academic discipline and participation in school co-curricular activities."
      ]
    }
  ],

  academicMarks: [
    {
      level: "B.Tech (CSE) - 3rd Year",
      institution: "St. Ann's College of Engineering and Technology, Chirala",
      boardOrUniversity: "JNTUK Affiliated",
      period: "2022 – Present",
      gradeOrPercentage: "Undergraduate Program in Progress",
      status: "Currently Pursuing"
    },
    {
      level: "Intermediate (10+2 / MPC)",
      institution: "Junior College Curriculum (MPC)",
      boardOrUniversity: "State Board of Intermediate Education, AP",
      period: "2020 – 2022",
      gradeOrPercentage: "Completed",
      status: "Completed"
    },
    {
      level: "Secondary School (10th / SSC)",
      institution: "Secondary High School Curriculum",
      boardOrUniversity: "Board of Secondary Education, AP",
      period: "Completed 2020",
      gradeOrPercentage: "Completed",
      status: "Completed"
    }
  ],

  skills: {
    frontend: [
      { name: "HTML5", level: "Semantic Markup, Modern APIs, A11y", icon: "html5" },
      { name: "CSS3", level: "Flexbox, Grid, Custom Properties, Animations", icon: "css3" },
      { name: "JavaScript", level: "ES6+, DOM Manipulation, Async/Await, Events", icon: "javascript" },
      { name: "Bootstrap", level: "Responsive Grid, Components, Mobile-first Design", icon: "bootstrap" }
    ],
    backend: [
      { name: "Python", level: "OOP, Scripting, Data Handling, Backend Logic", icon: "python" },
      { name: "Flask", level: "Lightweight Web Services, Routing, Jinja2, MVC", icon: "flask" },
      { name: "Java", level: "Object-Oriented Programming, Collections, Multithreading", icon: "java" },
      { name: "Node.js", level: "Server-side JavaScript, Event Loop, File System", icon: "nodejs" },
      { name: "Express.js", level: "Middleware, RESTful Routing, API Architecture", icon: "express" }
    ],
    programmingFoundations: [
      { name: "Data Structures & Algorithms", level: "Arrays, Linked Lists, Stacks, Queues, Trees, Searching & Sorting", icon: "code" },
      { name: "Object-Oriented Programming (OOP)", level: "Encapsulation, Inheritance, Polymorphism, Abstraction", icon: "layers" },
      { name: "Problem Solving", level: "Logical deduction, algorithmic efficiency, debugging", icon: "cpu" }
    ],
    databases: [
      { name: "Relational Databases / SQL", level: "Schema Design, Queries, Joins, Constraints, Indexing", icon: "database" },
      { name: "Database Integration", level: "Connecting Web Backends to Relational Stores (SQLite/MySQL)", icon: "server" }
    ],
    developerTools: [
      { name: "Git & Version Control", level: "Branching, Merging, Commit conventions, Collaboration", icon: "git" },
      { name: "GitHub", level: "Remote Repositories, Issue Tracking, Code Hosting", icon: "github" },
      { name: "VS Code", level: "Integrated Development, Debugging, Extensions", icon: "terminal" },
      { name: "REST APIs & Postman", level: "API Testing, Endpoint Validation, JSON Payloads", icon: "send" }
    ],
    softSkills: [
      { name: "Continuous Learning", level: "Quick adaptation to emerging technologies and tools", icon: "award" },
      { name: "Analytical Thinking", level: "Systematic breakdown of complex engineering issues", icon: "check-circle" },
      { name: "Technical Communication", level: "Clear documentation, team discussion, presentation", icon: "message" },
      { name: "Interview Readiness", level: "Practicing core computer science concepts and coding questions", icon: "briefcase" }
    ]
  },

  projects: [],

  certificates: [],

  journeyStages: [
    {
      stageNumber: 1,
      period: "Early Foundations",
      title: "School / Early Education",
      doing: "Completed primary and secondary schooling, establishing discipline, academic consistency, and scientific curiosity.",
      learned: "Discovered an early fascination for computers, logical puzzles, and mathematical problem-solving.",
      milestones: "Consistently performed well in science and mathematics competitions, inspiring the decision to pursue engineering.",
      skills: ["Logical Reasoning", "Mathematics", "Foundational Science"]
    },
    {
      stageNumber: 2,
      period: "Pre-University",
      title: "Intermediate / Higher Secondary (MPC)",
      doing: "Completed rigorous 10+2 education focusing on Mathematics, Physics, and Chemistry.",
      learned: "Deepened quantitative reasoning, systematic analytical calculation, and algorithmic thinking principles.",
      milestones: "Successfully qualified entrance assessments for undergraduate engineering admissions.",
      skills: ["Advanced Mathematics", "Analytical Deduction", "Structured Problem Solving"]
    },
    {
      stageNumber: 3,
      period: "Year 1 (2022 – 2023)",
      title: "Started B.Tech in Computer Science Engineering",
      doing: "Joined St. Ann's College of Engineering and Technology, Chirala, in the Department of Computer Science and Engineering.",
      learned: "Acquired fundamental computing paradigms, computer hardware concepts, and intro to programming logic.",
      milestones: "Mastered fundamental syntax, control flows, and basic problem solving through practical programming labs.",
      skills: ["C Programming", "Computer Organization", "Engineering Basics"]
    },
    {
      stageNumber: 4,
      period: "Year 2 (2023 – 2024)",
      title: "Explored Programming & Web Development",
      doing: "Transitioned to modern programming languages and the fundamentals of the World Wide Web.",
      learned: "Mastered HTML5 semantics, modern CSS3 styling, JavaScript DOM interactions, and Object-Oriented Java.",
      milestones: "Engineered first interactive web interfaces and learned the mechanics of client-server interaction.",
      skills: ["HTML5", "CSS3", "JavaScript", "Java OOP", "Bootstrap"]
    },
    {
      stageNumber: 5,
      period: "Year 2 – Year 3",
      title: "Started Building Practical Projects",
      doing: "Began bridging academic theory into practical, functional software applications.",
      learned: "Explored backend frameworks including Python Flask and Node.js/Express, and learned how to query SQL databases.",
      milestones: "Designed full-stack project prototypes including academic management and REST API workflows.",
      skills: ["Python", "Flask", "Node.js", "Express.js", "SQL Databases"]
    },
    {
      stageNumber: 6,
      period: "Technical Expansion",
      title: "Certifications & Technical Learning",
      doing: "Engaged in structured self-learning, academic workshops, and online developer platforms.",
      learned: "Version control workflows with Git/GitHub, API testing with Postman, and writing clean, modular code.",
      milestones: "Earned technical credentials and organized code repositories following industry conventions.",
      skills: ["Git", "GitHub", "Postman", "REST Architecture", "Clean Code"]
    },
    {
      stageNumber: 7,
      period: "Current Stage (2024 – 2025)",
      title: "3rd Year B.Tech CSE Immersion",
      doing: "Advancing through upper-division core Computer Science subjects while refining full-stack coding competencies.",
      learned: "Advanced Data Structures, Relational Database Normalization, Operating System threads/processes, and Software Engineering lifecycles.",
      milestones: "Building polished portfolio projects and preparing rigorously for technical interview coding rounds.",
      skills: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Web Engineering"]
    },
    {
      stageNumber: 8,
      period: "Forward Horizon",
      title: "Current Goal – Full Stack Developer",
      doing: "Actively seeking summer internships and entry-level software development opportunities.",
      learned: "Focusing on production-level code hygiene, system scalability, and teamwork readiness.",
      milestones: "Aiming to join a high-performing software engineering team where I can create real user value and continue growing.",
      skills: ["Full Stack Engineering", "Production Readiness", "Continuous Learning", "Team Collaboration"]
    }
  ]
};

/**
 * DYNAMIC STORAGE HELPER
 * Merges localStorage additions from admin.html seamlessly with default data
 */
const PortfolioStorage = {
  STORAGE_KEY_PROJECTS: 'ivk_custom_projects',
  STORAGE_KEY_CERTS: 'ivk_custom_certificates',
  STORAGE_KEY_PROFILE: 'ivk_custom_profile',

  getProfile() {
    try {
      const defaults = {
        email: 'illavinay2006@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vinay-kumar-4ab345424/',
        github: 'https://github.com/illavinay2006-byte',
        phone: '+91 6305034309',
        whatsapp: '+91 6305034309'
      };
      if (typeof localStorage === 'undefined') return defaults;
      const stored = localStorage.getItem(this.STORAGE_KEY_PROFILE);
      if (!stored) return defaults;
      const custom = JSON.parse(stored);
      return { ...defaults, ...custom };
    } catch (e) {
      console.warn('Could not load profile settings from storage', e);
      return {
        email: 'illavinay2006@gmail.com',
        linkedin: 'https://www.linkedin.com/in/vinay-kumar-4ab345424/',
        github: 'https://github.com/illavinay2006-byte',
        phone: '+91 6305034309',
        whatsapp: '+91 6305034309'
      };
    }
  },

  saveProfile(profileData) {
    if (typeof localStorage === 'undefined') return {};
    localStorage.setItem(this.STORAGE_KEY_PROFILE, JSON.stringify(profileData));
    return profileData;
  },

  getProjects() {
    try {
      if (typeof localStorage === 'undefined') return DEFAULT_PORTFOLIO_DATA.projects;
      const stored = localStorage.getItem(this.STORAGE_KEY_PROJECTS);
      const customProjects = stored ? JSON.parse(stored) : [];
      return [...customProjects, ...DEFAULT_PORTFOLIO_DATA.projects];
    } catch (e) {
      console.warn('Could not load custom projects from storage', e);
      return DEFAULT_PORTFOLIO_DATA.projects;
    }
  },

  addProject(project) {
    if (typeof localStorage === 'undefined') return [];
    const stored = localStorage.getItem(this.STORAGE_KEY_PROJECTS);
    const custom = stored ? JSON.parse(stored) : [];
    custom.unshift(project);
    localStorage.setItem(this.STORAGE_KEY_PROJECTS, JSON.stringify(custom));
    return custom;
  },

  deleteProject(id) {
    if (typeof localStorage === 'undefined') return false;
    const stored = localStorage.getItem(this.STORAGE_KEY_PROJECTS);
    if (!stored) return false;
    let custom = JSON.parse(stored);
    custom = custom.filter(p => p.id !== id);
    localStorage.setItem(this.STORAGE_KEY_PROJECTS, JSON.stringify(custom));
    return true;
  },

  getCertificates() {
    try {
      if (typeof localStorage === 'undefined') return DEFAULT_PORTFOLIO_DATA.certificates;
      const stored = localStorage.getItem(this.STORAGE_KEY_CERTS);
      const customCerts = stored ? JSON.parse(stored) : [];
      return [...customCerts, ...DEFAULT_PORTFOLIO_DATA.certificates];
    } catch (e) {
      console.warn('Could not load custom certificates from storage', e);
      return DEFAULT_PORTFOLIO_DATA.certificates;
    }
  },

  addCertificate(cert) {
    if (typeof localStorage === 'undefined') return [];
    const stored = localStorage.getItem(this.STORAGE_KEY_CERTS);
    const custom = stored ? JSON.parse(stored) : [];
    custom.unshift(cert);
    localStorage.setItem(this.STORAGE_KEY_CERTS, JSON.stringify(custom));
    return custom;
  },

  deleteCertificate(id) {
    if (typeof localStorage === 'undefined') return false;
    const stored = localStorage.getItem(this.STORAGE_KEY_CERTS);
    if (!stored) return false;
    let custom = JSON.parse(stored);
    custom = custom.filter(c => c.id !== id);
    localStorage.setItem(this.STORAGE_KEY_CERTS, JSON.stringify(custom));
    return true;
  },

  resetAllCustomData() {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(this.STORAGE_KEY_PROJECTS);
    localStorage.removeItem(this.STORAGE_KEY_CERTS);
    localStorage.removeItem(this.STORAGE_KEY_PROFILE);
  }
};

// Global accessor
const PORTFOLIO_DATA = {
  ...DEFAULT_PORTFOLIO_DATA,
  get projects() {
    return PortfolioStorage.getProjects();
  },
  get certificates() {
    return PortfolioStorage.getCertificates();
  },
  get profile() {
    return PortfolioStorage.getProfile();
  }
};

// Explicit global exposure for browser environments
if (typeof window !== 'undefined') {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
  window.DEFAULT_PORTFOLIO_DATA = DEFAULT_PORTFOLIO_DATA;
  window.PortfolioStorage = PortfolioStorage;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PORTFOLIO_DATA, DEFAULT_PORTFOLIO_DATA, PortfolioStorage };
}
