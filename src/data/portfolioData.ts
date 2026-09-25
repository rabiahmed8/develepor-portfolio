export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  codeSnippet?: string;
  codeLanguage?: string;
  highlights: string[];
  featured?: boolean; // Set to true (or omit) to include in the CV. Set to false to exclude from CV while keeping in portfolio.
  isRepoPrivate?: boolean; // If true, displays a subtle "Private Repo" badge with tooltip explaining proprietary/client code
  repoNote?: string; // Optional custom message for repo tooltip (e.g. "Proprietary client code under NDA")
  demoStatus?: "live" | "offline" | "internal" | "none"; // Optional status: if "offline" or "internal", shows subtle badge with tooltip instead of disappearing
  demoNote?: string; // Optional tooltip explanation (e.g. "Internal dashboard deployed on private enterprise network")
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: number; icon: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  twitter?: string;
}

export const aboutMe = {
  name: "Rabi Ahmed",
  role: "Full-Stack Software Developer",
  bio: "Passionate software engineer specializing in building high-performance, responsive web applications and scalable backend systems with Next.js, TypeScript, Node.js, and PostgreSQL. Dedicated to clean code, modular architecture, and creating immersive user experiences.",
  stats: {
    "Experience": "3+ Years",
    "Shipped to Production": "10+ Apps",
    "Core Stack": "Next.js & TypeScript",
    "Humor Setting": "75%"
  }
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript (ES6+)", level: 92, icon: "Code2" },
      { name: "TypeScript", level: 90, icon: "FileCode" },
      { name: "Python (academic)", level: 78, icon: "FileCode" },
      { name: "C++ (academic)", level: 75, icon: "Code2" }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: 94, icon: "Code2" },
      { name: "Next.js", level: 92, icon: "Code2" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "HTML5", level: 95, icon: "Palette" },
      { name: "CSS3", level: 95, icon: "Palette" },
      { name: "shadcn/ui", level: 88, icon: "Layers" },
      { name: "Ant Design", level: 85, icon: "Layers" }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88, icon: "Server" },
      { name: "Express.js", level: 88, icon: "Server" },
      { name: "Next.js API Routes", level: 90, icon: "Server" },
      { name: "RESTful APIs", level: 90, icon: "GitMerge" },
      { name: "Authentication", level: 86, icon: "ShieldCheck" }
    ]
  },
  {
    category: "Databases & ORMs",
    items: [
      { name: "PostgreSQL (neon db, Supabase)", level: 88, icon: "Database" },
      { name: "MySQL", level: 82, icon: "Database" },
      { name: "Prisma ORM", level: 90, icon: "Database" },
      { name: "TypeORM", level: 82, icon: "Database" }
    ]
  },
  {
    category: "Dev Tools & Workflow",
    items: [
      { name: "Git & GitHub", level: 92, icon: "Github" },
      { name: "VS Code", level: 95, icon: "FileCode" },
      { name: "Postman", level: 88, icon: "Cpu" },
      { name: "Vercel", level: 88, icon: "Cloud" },
      { name: "Figma", level: 85, icon: "Palette" }
    ]
  }
];

export const workExperience: ExperienceItem[] = [
  {
    id: "sudoware",
    role: "Fullstack Developer",
    company: "Sudoware",
    location: "Karachi, Pakistan",
    period: "2022 - 2026",
    type: "Full-time",
    description: "Built and maintained full-stack web applications using React, Next.js, and Express.js, architecting backend services and relational schemas.",
    technologies: ["React", "Next.js", "Express.js", "Node.js", "Prisma", "TypeORM", "Vercel", "Git"],
    highlights: [
      "Built and maintained full-stack applications using React, Next.js, and Express.js",
      "Developed backend features with Node.js, including REST APIs, authentication, and business logic",
      "Used Prisma and TypeORM for database modeling, migrations, and relational schema design",
      "Worked in an Agile team environment with Git version control and deployments on Vercel",
      "Improved UI performance and frontend responsiveness across multiple real-world projects"
    ]
  },
  {
    id: "strugbits",
    role: "Frontend Developer",
    company: "Strugbits",
    location: "Karachi, Pakistan",
    period: "2026 (3 months)",
    type: "Contract",
    description: "Built and customized client websites with a core emphasis on responsive UI, performance, and usability.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Responsive UI", "Slack", "Asana"],
    highlights: [
      "Built and customized client websites, focusing on responsive UI and usability",
      "Collaborated with cross-functional teams using Slack and Asana to manage tasks and communication",
      "Delivered client requirements in a fast-paced, deadline-driven environment"
    ]
  },
  {
    id: "freelance",
    role: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2024 - Present",
    type: "Freelance",
    description: "Delivering end-to-end web applications, CMS platforms, and dynamic frontend experiences directly for global clients.",
    technologies: ["React", "Tailwind CSS", "Next.js", "Supabase", "PostgreSQL", "Vercel"],
    highlights: [
      "Built responsive interfaces with React, Tailwind CSS, and modern component libraries",
      "Communicated directly with clients for requirements, updates, and delivery",
      "Developed features like authentication, CMS systems, file uploads (Supabase), and dashboards",
      "Deployed full-stack applications on Vercel with environment configuration"
    ]
  }
];

export const resumeData = {
  name: "Rabi Ahmed",
  role: "Full-Stack Software Developer",
  location: "Karachi, Pakistan",
  email: "ahmedrabi8@gmail.com",
  github: "https://github.com/rabiahmed8",
  linkedin: "https://www.linkedin.com/in/rabi-ahmed-2b5a9a18b/",
  summary: "Results-driven Full-Stack Software Developer with 3+ years of experience building scalable, performant web applications and backend systems using Next.js, TypeScript, React, Node.js, and PostgreSQL. Passionate about clean code, intuitive UI/UX, and robust system architecture.",
  education: [
    {
      degree: "BS IN COMPUTER SCIENCE",
      institution: "UBIT",
      period: "2020 - Present",
      details: "Gained strong foundation in data structures, algorithms, object-oriented programming, and software engineering principles.",
      highlights: [
        "Gained strong foundation in data structures, algorithms, object-oriented programming, and software engineering principles.",
        "Completed academic projects involving web development, database design, and cloud deployment.",
        "Worked with languages and tools like JavaScript, TypeScript, Python, MySQL, and Linux throughout the degree."
      ]
    }
  ],
  certifications: [
    "Full-Stack Web Development Specialization - Next.js & React",
    "Modern Database Architecture & Relational Modeling (PostgreSQL)",
    "TypeScript & Advanced System Design"
  ]
};

export const projects: Project[] = [
  {
    id: "ruhana-ai",
    name: "Ruhana AI (Avatar Sales Agent)",
    category: "AI & Real-Time WebRTC Platform",
    description: "An AI-powered conversational sales platform featuring real-time, lipsynced video avatars that live on websites to greet visitors, answer complex product questions, capture qualified leads, and map visitor journeys from page view to conversion intent.",
    tags: ["Next.js 16", "Anam AI", "WebRTC", "LLMs / OpenAI", "Firecrawl", "Supabase", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://www.ruhanaai.com/",
    githubUrl: "https://github.com/Abdulhadidev03/Avatar-Startup",
    highlights: [
      "Engineered real-time lipsynced video avatar streaming using Anam AI SDK and WebRTC for low-latency voice and video sales interactions",
      "Integrated automated website knowledge ingestion via Firecrawl, scraping client domains to generate contextual business profiles",
      "Architected visitor journey tracking and proactive engagement triggers responding to user intent signals and dwell time",
      "Built full operator dashboard with Supabase PostgreSQL for live conversation transcripts, automated lead capture, and conversion scoring"
    ]
  },
  {
    id: "best-orthopaedic-surgeons",
    name: "BestOrthopaedicSurgeons.com",
    category: "Full-Stack Platform",
    description: "A full-stack patient-doctor platform for bookings, reviews, and public Q&A. Implemented server components for performance, Prisma ORM for database, and a clean UI using Tailwind + ShadCN. The goal was to create something clean, fast, and genuinely helpful for patients looking for trusted doctors.",
    tags: ["Next.js", "Prisma ORM", "NeonDB", "TypeScript", "Tailwind CSS", "ShadCN UI", "PostgreSQL"],
    demoUrl: "https://www.bestorthopaedicsurgeon.com.au/",
    isRepoPrivate: true,
    repoNote: "Proprietary client repository under NDA",
    highlights: [
      "Engineered with Next.js Server Components and streaming SSR for sub-second page loads and high search engine ranking",
      "Designed relational schema with Prisma ORM backed by NeonDB serverless PostgreSQL for doctor scheduling, reviews, and Q&A",
      "Built responsive, accessible UI using Tailwind CSS and ShadCN UI components with role-based dashboard controls"
    ]
  },
  {
    id: "solana-trading-bot",
    name: "Solana Token Sniper Bot",
    category: "Web3 & Automated Trading",
    description: "A real-time Solana trading and sniper bot that monitors the Solana blockchain via WebSockets and executes automated token swaps using Jupiter Aggregator and Raydium liquidity pool APIs.",
    tags: ["Next.js", "TypeScript", "Solana Web3.js", "WebSockets", "Jupiter API", "Raydium", "Tailwind CSS"],
    isRepoPrivate: true,
    repoNote: "Proprietary algorithmic trading codebase (private)",
    highlights: [
      "Real-time WebSocket listener tracking Raydium liquidity pool creation and token mint transactions on Solana RPC nodes",
      "Automated sub-second swap execution routing through Jupiter Aggregator V6 API with slippage protection and dynamic priority fees",
      "Interactive monitoring dashboard built with Next.js and TypeScript for transaction logs, pool metrics, and automated risk thresholds"
    ]
  },
  {
    id: "onelm-crm",
    name: "OneLm CRM (SaaS)",
    category: "Enterprise SaaS Platform",
    description: "Contributed to a large CRM SaaS platform, building new features across frontend + backend, improving performance, and maintaining database schemas. Deployed on private infrastructure for enterprise business operations.",
    tags: ["React", "Express.js", "TypeORM", "MySQL", "TypeScript", "REST APIs", "Redis"],
    isRepoPrivate: true,
    repoNote: "Proprietary enterprise repository under NDA",
    demoStatus: "internal",
    demoNote: "Enterprise internal SaaS platform - private network deployment",
    highlights: [
      "Developed end-to-end CRM features across React frontend and Express.js / TypeORM microservices",
      "Refactored heavy relational MySQL queries and indexes, slashing report generation times and database lockups",
      "Maintained modular database migrations and secure multi-tenant role-based access control (RBAC)"
    ]
  },
  {
    id: "floorngo",
    name: "FloornGo CMS & Storefront",
    category: "Full-Stack Web App",
    description: "Built a full content management system for the company including blogs, product listings, categories, media uploads, and admin controls. Developed backend logic using Supabase (auth, storage, database) and implemented secure CRUD APIs. Redesigned multiple sections of the website on the frontend, improved UI/UX, implemented dynamic rendering for products/blogs, and optimized page performance across the site.",
    tags: ["Next.js", "Supabase", "React", "PostgreSQL", "Tailwind CSS", "TypeScript", "Storage APIs"],
    demoUrl: "https://www.floorngo.com/",
    isRepoPrivate: true,
    repoNote: "Proprietary client repository under NDA",
    highlights: [
      "Engineered full CMS dashboard with Supabase Auth, Storage buckets, and PostgreSQL Row-Level Security (RLS) policies",
      "Redesigned product catalog and dynamic blog storefront with improved UI/UX, achieving smooth responsive layouts",
      "Implemented dynamic rendering and aggressive caching in Next.js, significantly reducing bounce rate and load latency"
    ]
  },
  {
    id: "sudoware-website",
    name: "Sudoware Official Website",
    category: "Corporate Web Application",
    description: "Designed and implemented the official company website with modern responsive UI and optimized performance, translating Figma designs into high-speed Next.js code.",
    tags: ["Next.js", "Figma", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "SEO"],
    demoUrl: "https://www.sudoware.co/",
    isRepoPrivate: true,
    repoNote: "Company proprietary repository (private)",
    highlights: [
      "Translated intricate Figma mockups into responsive, fluid Next.js components with zero visual compromises",
      "Attained 95+ Google Lighthouse scores across Performance, Accessibility, and SEO",
      "Integrated smooth micro-interactions and interactive page transitions using Framer Motion"
    ]
  },
  {
    id: "etows-dashboard",
    name: "Etows Towing Company Dashboard",
    category: "Web Application & Dashboard",
    description: "Engineered frontend architecture and performance optimizations for the admin dashboard of a commercial towing and roadside dispatch network. Resolved critical rendering bottlenecks, enhanced loading speeds, optimized state management, and introduced real-time fleet dispatch workflows. Platform website is hosted at etows.ca, with the dispatch dashboard running internally.",
    tags: ["React", "TypeScript", "Performance Optimization", "State Management", "Tailwind CSS", "Virtualization"],
    demoUrl: "https://www.etows.ca/",
    isRepoPrivate: true,
    repoNote: "Proprietary enterprise repository (private)",
    demoNote: "Platform website (internal dispatch & admin dashboard deployed behind authenticated access)",
    highlights: [
      "Eliminated critical rendering bottlenecks and runaway re-renders through state normalization and React memoization",
      "Implemented virtualized list rendering for live towing dispatch calls, handling hundreds of simultaneous entries seamlessly",
      "Revamped UI/UX workflows with intuitive job assignment, driver status indicators, and live dispatch tracking"
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: "ahmedrabi8@gmail.com",
  phone: "+92 312 1120251",
  location: "Karachi, Pakistan",
  github: "https://github.com/rabiahmed8",
  linkedin: "https://www.linkedin.com/in/rabi-ahmed-2b5a9a18b/"
};

export const terminalResponses: Record<string, string> = {
  about: `SYSTEM_INFO
-----------
Name:       ${aboutMe.name}
Role:       ${aboutMe.role}
Location:   ${contactInfo.location}
Status:     Actively looking for exciting project opportunities.
Keywords:   Next.js, TypeScript, PostgreSQL, Prisma, APIs, Clean Code.

Type "cat about_me.json" inside the workspace viewer to read full bio details!`,

  skills: `TECHNICAL_CAPABILITIES
----------------------
${skills.map((s) => `- ${s.category.padEnd(23)}: ${s.items.map((i) => i.name).join(", ")}`).join("\n")}

Type "cat skills.ts" to view formatted TypeScript data models for skills.`,

  experience: `CAREER_TIMELINE
---------------
${workExperience.map((exp, idx) => `${idx + 1}. ${exp.role} @ ${exp.company} (${exp.period})\n   - ${exp.description}`).join("\n")}

Type "cat experience.json" or select from Explorer to view interactive timeline!`,

  projects: `ACTIVE_REPOSITORIES & SHOWCASES
--------------------------------
${projects.map((p, idx) => `${idx + 1}. ${p.id.padEnd(26)} -> ${p.name} (${p.tags.slice(0, 3).join(", ")})`).join("\n")}

Type "cat projects/<id>.md" or select a project from the Explorer sidebar to inspect code & architecture!`,

  contact: `COMMUNICATION_CHANNELS
----------------------
- Email:    ${contactInfo.email}
- Github:   ${contactInfo.github}
- LinkedIn: ${contactInfo.linkedin}
- Location: ${contactInfo.location}

Type "run contact" to execute interactive contact prompt program!`,

  neofetch: `      /\\_/\\          rabiahmed@portfolio
     ( o.o )         -------------------
      > ^ <          OS: CyberOS Web v1.0.0
                     Host: Next.js Client Engine
                     Kernel: V8 Javascript VM
                     Location: Karachi, Pakistan
                     Shell: Web Bash Simulation
                     Resolution: Responsive Fluid
                     Theme: Emerald Cyber (Slate/Green)
                     CPU: Virtual Core Browser Thread
                     Memory: 100% Client-Side Rendered`
};
