// Plain-language project data for the client-facing /studio page.
// Kept separate from portfolioData.ts so the developer version stays technical.

export interface StudioProject {
  id: string;
  name: string;
  where: string;
  summary: string;
  tags: string[];
  url: string;
  image: string;
}

export const studioProjects: StudioProject[] = [
  {
    id: "bestortho",
    name: "Best Orthopaedic Surgeons",
    where: "Australia",
    summary: "A directory where patients in Western Australia find, compare and contact orthopaedic surgeons.",
    tags: ["Directory", "Reviews", "Patient enquiries"],
    url: "https://www.bestorthopaedicsurgeon.com.au/",
    image: "/studio/bestortho.webp",
  },
  {
    id: "clinaxy",
    name: "Clinaxy",
    where: "Australia",
    summary: "AI software for clinics that writes up consult notes and answers patient calls, so staff spend less time on paperwork.",
    tags: ["AI assistant", "Voice agent", "Clinic tools"],
    url: "https://clinaxy.ai/",
    image: "/studio/clinaxy.webp",
  },
  {
    id: "onboard",
    name: "Onboard",
    where: "Australia",
    summary: "A hiring platform that connects ship crews with shipping companies and checks their documents automatically.",
    tags: ["Job platform", "Accounts", "Document checks"],
    url: "https://on-board.com.au/",
    image: "/studio/onboard.webp",
  },
  {
    id: "ruhana",
    name: "Ruhana AI",
    where: "Product",
    summary: "A talking video assistant that sits on a website, answers visitors' questions and collects their details as leads.",
    tags: ["AI assistant", "Lead capture"],
    url: "https://www.ruhanaai.com/",
    image: "/studio/ruhana.webp",
  },
  {
    id: "floorngo",
    name: "Floor n' Go",
    where: "United States",
    summary: "An online showroom for a flooring company, with products, a blog and quote requests the owners update themselves.",
    tags: ["Website", "Product catalogue", "Quote form"],
    url: "https://www.floorngo.com/",
    image: "/studio/floorngo.webp",
  },
  {
    id: "sudoware",
    name: "Sudoware",
    where: "Pakistan",
    summary: "The company website for a software agency, built to match their designs pixel for pixel.",
    tags: ["Website", "Animations"],
    url: "https://www.sudoware.co/",
    image: "/studio/sudoware.webp",
  },
];
