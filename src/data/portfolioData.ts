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
}

export interface SkillGroup {
  category: string;
  items: { name: string; level: number; icon: string }[];
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
  name: "Ahmed",
  role: "Full-Stack Software Developer",
  bio: "Passionate software engineer specializing in building high-performance, responsive web applications and scalable backend systems. Dedicated to clean code, modular architecture, and creating immersive user experiences.",
  stats: {
    experience: "3+ Years",
    projects: "15+ Completed",
    commits: "1,200+ This Year",
    coffee: "Infinite"
  }
};

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 90, icon: "Code2" },
      { name: "TypeScript", level: 85, icon: "FileCode" },
      { name: "Tailwind CSS", level: 95, icon: "Palette" },
      { name: "Framer Motion", level: 75, icon: "Sparkles" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js / Express", level: 85, icon: "Server" },
      { name: "Prisma ORM", level: 80, icon: "Database" },
      { name: "PostgreSQL & MongoDB", level: 80, icon: "Database" },
      { name: "REST & GraphQL APIs", level: 85, icon: "GitMerge" }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "Git & GitHub", level: 90, icon: "Github" },
      { name: "Docker", level: 70, icon: "Layers" },
      { name: "Vercel / AWS", level: 80, icon: "Cloud" },
      { name: "CI/CD (GitHub Actions)", level: 75, icon: "Cpu" }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "doctors-nextjs",
    name: "Doctor Booking Platform",
    category: "Full-Stack Web App",
    description: "A comprehensive administrative dashboard and doctor scheduling platform featuring secure patient authentication, visual profiles, availability matrix systems, and automated email reminders.",
    tags: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "Nodemailer"],
    demoUrl: "https://doctors-platform.demo",
    githubUrl: "https://github.com/example/doctors-nextjs",
    codeLanguage: "typescript",
    codeSnippet: `// src/lib/services/emailService.ts
import nodemailer from "nodemailer";

export class EmailService {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587"),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  async sendBookingConfirmation(to: string, doctorName: string, date: Date) {
    const formattedDate = date.toLocaleDateString("en-AU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    return await this.transporter.sendMail({
      from: \`"CareBooking" <noreply@carebooking.com.au>\`,
      to,
      subject: \`Booking Confirmation with Dr. \${doctorName}\`,
      html: \`
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Your appointment is confirmed!</h2>
          <p>You have scheduled an appointment with <strong>Dr. \${doctorName}</strong>.</p>
          <p><strong>Time:</strong> \${formattedDate}</p>
          <hr/>
          <p>If you need to reschedule, please contact admin support.</p>
        </div>
      \`
    });
  }
}`,
    highlights: [
      "Designed database schema with relation modeling in Prisma supporting complex multi-schedule calendar availability",
      "Created fully responsive dashboard layout with role-based auth for admins, doctors, and patients",
      "Integrated automated background email queues for appointment confirmation and day-before reminders"
    ]
  },
  {
    id: "design-canvas",
    name: "Glassmorphic Vector Canvas",
    category: "Frontend Utility",
    description: "A lightweight, collaborative, client-side vector drawing canvas built with pure Canvas API and state tracking supporting real-time rendering, layered vector geometries, and JSON export.",
    tags: ["HTML5 Canvas", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://vector-canvas.demo",
    githubUrl: "https://github.com/example/vector-canvas",
    codeLanguage: "typescript",
    codeSnippet: `// src/components/CanvasRenderer.tsx
import React, { useRef, useEffect } from "react";

interface Point { x: number; y: number; }
interface VectorElement {
  id: string;
  type: "rect" | "circle" | "path";
  points: Point[];
  color: string;
}

export const CanvasRenderer: React.FC<{ elements: VectorElement[] }> = ({ elements }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    elements.forEach((el) => {
      ctx.strokeStyle = el.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      if (el.type === "rect" && el.points.length >= 2) {
        const [p1, p2] = el.points;
        ctx.strokeRect(p1.x, p1.y, p2.x - p1.x, p2.y - p1.y);
      } else if (el.type === "path") {
        el.points.forEach((p, idx) => {
          if (idx === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
      }
    });
  }, [elements]);

  return <canvas ref={canvasRef} width={800} height={600} className="w-full h-auto border rounded-lg bg-[#070a13]" />;
};`,
    highlights: [
      "Optimized 2D rendering updates using double buffering to eliminate draw flickering",
      "Created highly reactive mouse tracking coordinate transformation supporting coordinate zoom and pan offsets",
      "Implemented full undo/redo state tracking using Command pattern stack"
    ]
  }
];

export const contactInfo: ContactInfo = {
  email: "ahmed@example.com",
  phone: "+61 400 000 000",
  location: "Melbourne, Australia",
  github: "https://github.com/ahmed",
  linkedin: "https://linkedin.com/in/ahmed"
};

export const terminalResponses: Record<string, string> = {
  about: `SYSTEM_INFO
-----------
Name:       Ahmed
Role:       Full-Stack Software Developer
Location:   Melbourne, Australia
Status:     Actively looking for exciting project opportunities.
Keywords:   Next.js, TypeScript, PostgreSQL, Prisma, APIs, Clean Code.

Type "cat about_me.json" inside the workspace viewer to read full bio details!`,
  
  skills: `TECHNICAL_CAPABILITIES
----------------------
- Frontend:          React, Next.js, TypeScript, Tailwind CSS, Framer Motion
- Backend/Databases: Node.js, Express, PostgreSQL, MongoDB, Prisma ORM
- Infrastructure:    Vercel, AWS, Docker, GitHub Actions CI/CD

Type "cat skills.ts" to view formatted TypeScript data models for skills.`,
  
  projects: `ACTIVE_REPOSITORIES
-------------------
1. doctors-nextjs  -> Doctor Booking Administrative Platform
2. design-canvas   -> Interactive 2D Vector Drawing Tool

Type "cat projects/doctors-nextjs.md" or select a project from the sidebar to inspect detailed files.`,
  
  contact: `COMMUNICATION_CHANNELS
----------------------
- Email:    ahmed@example.com
- Github:   https://github.com/ahmed
- LinkedIn: https://linkedin.com/in/ahmed
- Location: Melbourne, Australia

Type "run contact" to execute interactive contact prompt program!`,

  neofetch: `      /\\_/\\          ahmed@portfolio
     ( o.o )         ---------------
      > ^ <          OS: CyberOS Web v1.0.0
                     Host: Next.js Client Engine
                     Kernel: V8 Javascript VM
                     Uptime: Just loaded
                     Shell: Web Bash Simulation
                     Resolution: Responsive Fluid
                     Theme: Emerald Cyber (Slate/Green)
                     CPU: Virtual Core Browser Thread
                     Memory: 100% Client-Side Rendered`
};
