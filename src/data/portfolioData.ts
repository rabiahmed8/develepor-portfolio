export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  codeSnippet: string;
  codeLanguage: string;
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
    experience: "3+ Years",
    projects: "15+ Completed",
    commits: "1,200+ This Year",
    coffee: "Infinite"
  }
};

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript (ES6+)", level: 92, icon: "Code2" },
      { name: "TypeScript", level: 90, icon: "FileCode" },
      { name: "Python (academic)", level: 78, icon: "FileCode" },
      { name: "c++ (academic)", level: 75, icon: "Code2" }
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
    id: "best-orthopaedic-surgeons",
    name: "BestOrthopaedicSurgeons.com",
    category: "Full-Stack Platform",
    description: "A full-stack patient-doctor platform for bookings, reviews, and public Q&A. Implemented server components for performance, Prisma ORM for database, and a clean UI using Tailwind + ShadCN. The goal was to create something clean, fast, and genuinely helpful for patients looking for trusted doctors.",
    tags: ["Next.js", "Prisma ORM", "NeonDB", "TypeScript", "Tailwind CSS", "ShadCN UI", "PostgreSQL"],
    demoUrl: "https://www.bestorthopaedicsurgeon.com.au/",
    githubUrl: "https://github.com/rabiahmed8/best-orthopaedic-surgeons",
    codeLanguage: "typescript",
    codeSnippet: `// app/actions/booking.ts
"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface AppointmentRequest {
  doctorId: string;
  patientName: string;
  patientEmail: string;
  slotTime: Date;
  reason: string;
}

export async function createAppointment(data: AppointmentRequest) {
  // Check for doctor slot availability without race conditions
  const existing = await prisma.appointment.findFirst({
    where: {
      doctorId: data.doctorId,
      slotTime: data.slotTime,
      status: { not: "CANCELLED" }
    }
  });

  if (existing) {
    return { success: false, error: "Slot already booked by another patient." };
  }

  const appointment = await prisma.appointment.create({
    data: {
      doctorId: data.doctorId,
      patientName: data.patientName,
      patientEmail: data.patientEmail,
      slotTime: data.slotTime,
      reason: data.reason,
      status: "CONFIRMED"
    }
  });

  revalidatePath(\`/doctors/\${data.doctorId}\`);
  return { success: true, bookingId: appointment.id };
}`,
    highlights: [
      "Engineered with Next.js Server Components and streaming SSR for sub-second page loads and high search engine ranking",
      "Designed relational schema with Prisma ORM backed by NeonDB serverless PostgreSQL for doctor scheduling, reviews, and Q&A",
      "Built responsive, accessible UI using Tailwind CSS and ShadCN UI components with role-based dashboard controls"
    ]
  },
  {
    id: "solana-token-sniper",
    name: "Solana Token Sniper App",
    category: "Desktop & Web3 App",
    description: "A desktop app that listens to Solana network in real time via WebSockets and executes automated token swaps using Jupiter & Raydium APIs.",
    tags: ["Electron", "React", "TypeScript", "Solana Web3.js", "WebSockets", "Jupiter API", "Raydium"],
    demoUrl: "https://github.com/rabiahmed8/solana-token-sniper",
    githubUrl: "https://github.com/rabiahmed8/solana-token-sniper",
    codeLanguage: "typescript",
    codeSnippet: `// src/services/SolanaSniperEngine.ts
import { Connection, PublicKey } from "@solana/web3.js";
import { JupiterApi } from "@/lib/jupiter";

export class SolanaSniperEngine {
  private connection: Connection;
  private isListening = false;

  constructor(rpcUrl: string, private jupiter: JupiterApi) {
    this.connection = new Connection(rpcUrl, { commitment: "confirmed", wsEndpoint: rpcUrl.replace("https", "wss") });
  }

  async listenNewPools(raydiumProgramId: PublicKey, onNewPoolDetected: (mint: string) => Promise<void>) {
    this.isListening = true;
    this.connection.onProgramAccountChange(raydiumProgramId, async (keyedAccountInfo) => {
      if (!this.isListening) return;
      const mintAddress = this.parseMintFromAccount(keyedAccountInfo.accountInfo.data);
      if (mintAddress) {
        await onNewPoolDetected(mintAddress);
      }
    });
  }

  async executeSwap(tokenMint: string, amountLamports: number, slippageBps = 100) {
    const quote = await this.jupiter.getQuote({
      inputMint: "So11111111111111111111111111111111111111112", // WSOL
      outputMint: tokenMint,
      amount: amountLamports,
      slippageBps
    });
    return await this.jupiter.executeSwapTransaction(quote);
  }
}`,
    highlights: [
      "Real-time WebSocket listener tracking Raydium liquidity pool creation and token mint transactions on Solana RPC nodes",
      "Automated sub-second swap execution routing through Jupiter Aggregator V6 API with slippage protection and dynamic priority fees",
      "Packaged as a performant Electron desktop app with React UI for real-time order monitoring and instant emergency stop"
    ]
  },
  {
    id: "onelm-crm",
    name: "OneLm CRM (SaaS)",
    category: "Enterprise SaaS Platform",
    description: "Contributed to a large CRM SaaS platform, building new features across frontend + backend, improving performance, and maintaining database schemas.",
    tags: ["React", "Express.js", "TypeORM", "MySQL", "TypeScript", "REST APIs", "Redis"],
    demoUrl: "https://onelm.io",
    githubUrl: "https://github.com/rabiahmed8/onelm-crm",
    codeLanguage: "typescript",
    codeSnippet: `// src/controllers/DealPipelineController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Deal } from "../entities/Deal";
import { AuditLog } from "../entities/AuditLog";

export class DealPipelineController {
  static async updateStage(req: Request, res: Response) {
    const { dealId } = req.params;
    const { targetStage, value } = req.body;

    return await AppDataSource.transaction(async (transactionalEntityManager) => {
      const deal = await transactionalEntityManager.findOne(Deal, {
        where: { id: dealId },
        relations: ["account", "owner"]
      });

      if (!deal) return res.status(404).json({ message: "Deal not found" });

      const oldStage = deal.stage;
      deal.stage = targetStage;
      if (value) deal.value = value;
      deal.updatedAt = new Date();

      await transactionalEntityManager.save(deal);

      // Record stage transition audit trail
      const audit = transactionalEntityManager.create(AuditLog, {
        entityId: dealId,
        action: "STAGE_TRANSITION",
        metadata: { from: oldStage, to: targetStage, userId: req.user?.id }
      });
      await transactionalEntityManager.save(audit);

      return res.json({ success: true, deal });
    });
  }
}`,
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
    demoUrl: "https://floorngo.com",
    githubUrl: "https://github.com/rabiahmed8/floorngo-cms",
    codeLanguage: "typescript",
    codeSnippet: `// src/lib/supabase/products.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function getCategoryProducts(categorySlug: string, limit = 24) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: { get: (name) => cookieStore.get(name)?.value } }
  );

  const { data: category } = await supabase
    .from("categories")
    .select("id, name, slug")
    .eq("slug", categorySlug)
    .single();

  if (!category) return null;

  const { data: products, error } = await supabase
    .from("products")
    .select("id, title, slug, price, images, is_available, specifications")
    .eq("category_id", category.id)
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) throw new Error(error.message);
  return { category, products };
}`,
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
    demoUrl: "https://sudoware.pk",
    githubUrl: "https://github.com/rabiahmed8/sudoware-website",
    codeLanguage: "typescript",
    codeSnippet: `// components/sections/CapabilitiesSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Cloud, ShieldCheck, Cpu } from "lucide-react";

const capabilities = [
  { icon: Code2, title: "Custom Software Engineering", desc: "Tailor-made cloud native architectures built for global enterprise scale." },
  { icon: Cloud, title: "DevOps & Infrastructure", desc: "Automated multi-region CI/CD pipelines, containerization, and IaC." },
  { icon: ShieldCheck, title: "FinTech & Security", desc: "Compliant payment integrations, cryptographic auditing, and zero-trust systems." },
  { icon: Cpu, title: "AI & Data Automation", desc: "Predictive pipelines, automated data transformations, and LLM integrations." }
];

export const CapabilitiesSection = () => {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 backdrop-blur-sm transition-all"
          >
            <item.icon className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};`,
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
    description: "Worked on the frontend admin dashboard of a towing company's website built with React. Focused on fixing serious performance issues, improving loading speed, optimizing component rendering, and enhancing the overall UI/UX. Also added several new features to make the site more functional and user-friendly.",
    tags: ["React", "TypeScript", "Performance Optimization", "State Management", "Tailwind CSS", "Virtualization"],
    demoUrl: "https://etows.com",
    githubUrl: "https://github.com/rabiahmed8/etows-dashboard",
    codeLanguage: "typescript",
    codeSnippet: `// src/components/dispatch/LiveDispatchQueue.tsx
import React, { useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { TowJob, JobStatus } from "@/types/dispatch";

interface DispatchQueueProps {
  jobs: TowJob[];
  onAssignDriver: (jobId: string, driverId: string) => void;
}

export const LiveDispatchQueue: React.FC<DispatchQueueProps> = React.memo(({ jobs, onAssignDriver }) => {
  // Memoize filtered active queue to avoid heavy re-computations on ticker re-renders
  const activeJobs = useMemo(() => {
    return jobs.filter(j => j.status === JobStatus.PENDING || j.status === JobStatus.EN_ROUTE);
  }, [jobs]);

  const Row = useCallback(({ index, style }: { index: number; style: React.CSSProperties }) => {
    const job = activeJobs[index];
    return (
      <div style={style} className="p-3 border-b border-slate-800 flex items-center justify-between hover:bg-slate-800/40">
        <div>
          <span className="font-mono text-xs text-emerald-400">#{job.id}</span>
          <p className="text-sm font-semibold text-white">{job.pickupLocation}</p>
          <span className="text-xs text-slate-400">Vehicle: {job.vehicleDetails}</span>
        </div>
        <button
          onClick={() => onAssignDriver(job.id, "auto-nearest")}
          className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs rounded hover:bg-emerald-500/30"
        >
          Assign Driver
        </button>
      </div>
    );
  }, [activeJobs, onAssignDriver]);

  return (
    <div className="h-[500px] rounded-lg border border-slate-800 bg-[#070b14]">
      <List height={500} itemCount={activeJobs.length} itemSize={80} width="100%">
        {Row}
      </List>
    </div>
  );
});`,
    highlights: [
      "Eliminated critical rendering bottlenecks and runaway re-renders through state normalization and React memoization",
      "Implemented virtualized list rendering for live towing dispatch calls, handling hundreds of simultaneous entries seamlessly",
      "Revamped UI/UX workflows with intuitive job assignment, driver status indicators, and live dispatch tracking"
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: "ahmedrabi8@gmail.com",
  phone: "+92 300 0000000",
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
