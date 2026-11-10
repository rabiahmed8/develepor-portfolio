import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Bot, CalendarCheck, Gauge, LayoutDashboard, Mail, MessageCircle, Smartphone, Wrench } from "lucide-react";
import EnquiryForm from "@/components/studio/EnquiryForm";
import SceneLoader from "@/components/studio/SceneLoader";
import { studioProjects } from "@/components/studio/studioData";
import { contactInfo } from "@/data/portfolioData";

const description =
  "New websites, redesigns, bug fixes, online booking, custom web apps and AI assistants for businesses. Clients in Australia, the US and Europe. Free homepage mockup before you pay anything.";

export const metadata: Metadata = {
  title: "Rabi Ahmed | Websites, web apps & fixes for businesses",
  description,
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Rabi Ahmed | Websites, web apps & fixes for businesses",
    description,
    url: "/studio",
    siteName: "Rabi Ahmed",
    type: "website",
  },
};

// The WhatsApp button is the only public place this number appears. It is kept out of the shared
// contact data on purpose, so it never shows up on the CV page or in the developer version.
const whatsapp = "https://wa.me/923121120251";
const mockupMail = `mailto:${contactInfo.email}?subject=${encodeURIComponent("Website enquiry")}&body=${encodeURIComponent(
  "Hi Rabi,\n\nMy business: \nMy current website (if any): \nWhat I'd like help with: \n"
)}`;

const services = [
  {
    icon: Smartphone,
    title: "A new website, or a redesign",
    text: "Built from scratch or rebuilt from the one you have. Clear prices, opening hours, photos, and a contact button people can actually find, on phones first.",
  },
  {
    icon: Wrench,
    title: "Fixes & small changes",
    text: "A form that doesn’t send, a page that looks wrong on phones, a feature someone left half-finished. Tell me what’s broken and I’ll sort it out, whoever built the site.",
  },
  {
    icon: CalendarCheck,
    title: "Online booking, payments & quotes",
    text: "Let customers book, request a quote or pay online, with a simple dashboard where you see everything.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom web apps",
    text: "Customer portals, admin dashboards, directories, job boards. If a spreadsheet is running part of your business, it can probably be a proper tool.",
  },
  {
    icon: Bot,
    title: "AI that answers for you",
    text: "A chat or voice assistant that answers common questions and takes enquiries, even when you’re closed.",
  },
  {
    icon: Gauge,
    title: "Speed & Google",
    text: "I make slow sites load faster and help them show up better when people search for you.",
  },
];

const steps = [
  { n: "01", title: "Free mockup", text: "Tell me about your business. I design a new homepage for you to look at. No cost, no obligation." },
  { n: "02", title: "Build", text: "If you like it, we agree on the pages and the price. I build it and you see progress along the way." },
  { n: "03", title: "Launch & support", text: "I put it live, connect it to Google, and stay around for changes after launch." },
];

export default function StudioPage() {
  return (
    <div className="studio-page min-h-screen w-full bg-[#f6f4ef] text-[#16171d] font-sans selection:bg-emerald-200">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-black/5 bg-[#f6f4ef]/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
          <Link href="/studio" className="text-lg font-bold tracking-tight">
            Rabi Ahmed<span className="text-emerald-600">.</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-black/65 md:flex">
            <a href="#work" className="hover:text-black">Work</a>
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#process" className="hover:text-black">How it works</a>
            <a href="#about" className="hover:text-black">About</a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#16171d] px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
          >
            Get in touch
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-emerald-300/30 blur-3xl"
          />
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-6 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:pb-20 lg:pt-20">
            <div className="relative z-10 min-w-0">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Taking on new projects
              </p>
              <h1 className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
                Websites that bring you <span className="text-emerald-700">customers</span>, not headaches.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/70">
                I build new websites, fix and improve existing ones, and add online booking, custom tools and AI
                assistants. One developer for all of it, with clients in Australia, the US and Europe.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
                >
                  Get a free homepage mockup <ArrowRight size={18} />
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-6 py-3.5 font-semibold transition hover:border-black/40"
                >
                  See my work
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-black/60">
                <li>✓ New sites &amp; redesigns</li>
                <li>✓ Fixes &amp; features</li>
                <li>✓ Free mockup first</li>
              </ul>
            </div>
            <div className="relative min-w-0 h-[340px] sm:h-[440px] lg:-mr-10 lg:h-[540px]">
              <SceneLoader />
              <p className="pointer-events-none absolute -bottom-6 w-full text-center text-xs text-black/60">
                Drag to spin. Tap a site to read about it.
              </p>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-20 border-t border-black/5 bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recent work</h2>
            <p className="mt-3 max-w-2xl text-black/65">
              From small business websites to AI products. Every one of these is live, so you can click through and try it.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {studioProjects.map((p) => (
                <article
                  key={p.id}
                  id={`work-${p.id}`}
                  className="group scroll-mt-24 overflow-hidden rounded-2xl border border-black/10 bg-[#fbfaf7] transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-black/5">
                    <Image
                      src={p.image}
                      alt={`Homepage of ${p.name}`}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="text-lg font-semibold">{p.name}</h3>
                      <span className="shrink-0 text-xs text-black/60">{p.where}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-black/70">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs text-emerald-800">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-emerald-700 hover:underline"
                    >
                      Visit site <ArrowUpRight size={16} />
                      <span className="sr-only"> for {p.name} (opens in a new tab)</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What I can do for you</h2>
            <p className="mt-3 max-w-2xl text-black/65">
              Big or small. A whole new site, or one annoying bug.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-black/10 bg-white p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-emerald-100 text-emerald-800">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-relaxed text-black/70">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 bg-[#16171d] py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
            <p className="mt-3 text-white/65">You see your new homepage before you spend anything.</p>
            <ol className="mt-12 grid gap-8 md:grid-cols-3">
              {steps.map((s) => (
                <li key={s.n} className="border-t border-white/15 pt-6">
                  <span className="font-mono text-sm text-emerald-400">{s.n}</span>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/70">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-[340px_1fr] md:gap-14">
            <div className="relative mx-auto aspect-[1/1.15] w-full max-w-[340px] overflow-hidden rounded-3xl shadow-2xl shadow-black/15">
              <Image src="/studio/me.webp" alt="Rabi Ahmed" fill sizes="340px" className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Hi, I’m Rabi.</h2>
              <p className="mt-5 text-lg leading-relaxed text-black/70">
                I’m a web developer from Karachi, Pakistan. For over three years I’ve been building websites and web
                apps for businesses abroad, from clinics in Australia to a flooring company in the US.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-black/70">
                I handle all of it: design, building, hosting and the technical bits in between. You get one person who
                answers your messages and cares how the site performs for your business.
              </p>
              <dl className="mt-8 border-t border-black/10 pt-6">
                <dt className="text-sm text-black/60">Experience</dt>
                <dd className="text-2xl font-bold">3+ yrs</dd>
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 px-4 pb-20 sm:px-6">
          <div className="relative mx-auto grid max-w-6xl gap-10 overflow-hidden rounded-3xl bg-emerald-800 px-5 py-12 text-white sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:px-14 lg:py-16">
            <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/30 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tell me what you need.</h2>
              <p className="mt-4 text-lg text-white/80">
                A new website, a fix, a feature, or just a question. If you want a new look, I’ll make you a free
                homepage mockup first, no strings attached.
              </p>
              <p className="mt-8 text-sm text-white/70">Prefer to talk directly?</p>
              <div className="mt-3 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={mockupMail}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10"
                >
                  <Mail size={18} aria-hidden /> Email me
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle size={18} aria-hidden /> Message on WhatsApp
                </a>
              </div>
              <p className="mt-5 break-all text-sm text-white/70">{contactInfo.email}</p>
            </div>
            <div className="relative min-w-0">
              <EnquiryForm email={contactInfo.email} whatsapp={whatsapp} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© {new Date().getFullYear()} Rabi Ahmed</p>
          <div className="flex gap-6">
            <Link href="/resume" className="hover:text-black">CV</Link>
            <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-black">LinkedIn</a>
            <Link href="/" className="hover:text-black">Developer version ↗</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
