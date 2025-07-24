import { Icons } from "@/components/icons";

export const PROJECTS = [
  {
    title: "accreditation document information system",
    href: "https://github.com/codenamekii/siaksi",
    dates: "Jan 2025 - Feb 2025",
    featured: true,
    description:
      "This system's where you dump and manage all those accreditation docs — no more digging through chats or lost files. GJM, UJM, even assessors just log in, upload, and done. Everything’s tidy, synced, and stress-free.",
    technologies: [
      "Laravel",
      "Livewire",
      "TailwindCSS",
      "AlpineJS",
      "FilamentPHP",
      "MySQL",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/codenamekii/siaksi",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Journal Publication",
        href: "https://siaksi.codenamekii.com",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/assets/projects/asesor.png",
    video: "",
  },
  {
    title: "Indonesia Formatter",
    href: "https://www.npmjs.com/package/indonesia-formatter-dev",
    dates: "Des 2023 - Jan 2024",
    featured: true,
    active: false,
    description:
      "A comprehensive TypeScript/JavaScript library for formatting Indonesian-specific data including phone numbers, NPWP, NIK, dates, and calendar conversions (Javanese & Hijri).",
    technologies: [
      "Next14",
      "Typescript",
      "AcernityUI",
      "TailwindCSS",
      "Framer",
    ],
    links: [
      {
        type: "Demo",
        href: "https://indo-formatter.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/codenamekii/indonesia-formatter",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/assets/projects/indoformat.png",
    video: "",
  },
  {
    title: "Sukamaju Fun Run 2025",
    href: "https://github.com/codenamekii/sukamaju-fun-run",
    dates: "",
    featured: false,
    description:
      "This repository or website is used to support the running competition event in Sukamaju village.",
    technologies: [
      "NextJs",
      "TailwindCSS",
      "ReactJS",
      "Netlify",
      "Prisma",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/codenamekii/sukamaju-fun-run",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://skmjfunrun2025.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
  {
    title: "Bahasa Indonesia Auto Formalizer",
    href: "https://github.com/codenamekii/ID-auto-formalizer",
    dates: "",
    featured: false,
    archived:false,
    description:
      "Convert Indonesian text from casual/informal to formal style. Suitable for official letters, professional emails, and formal reports.",
    technologies: ["ReactJS", "NextJS", "TailwindCSS", "OpenAI", "Netlify"],
    links: [
      {
        type: "Source",
        href: "https://github.com/codenamekii/ID-auto-formalizer",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://gaultoindo.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/assets/projects/gaul.png",
    video: "",
  },
  {
    title: "Badi & Bani Lawfirm Website",
    href: "https://github.com/codenamekii/Badi-Bani-Company-Profile",
    dates: "",
    featured: false,
    description:
      "Badi and Bani Law Firm portfolio website for digital promotion of Badi and Bani Law Firm",
    technologies: ["NextJs", "TailwindCSS", "ReactJS", "Prisma", "MongoDB"],
    links: [
      {
        type: "Source",
        href: "https://github.com/codenamekii/Badi-Bani-Company-Profile",
        icon: <Icons.github className="size-3" />,
      },
      {
        type: "Demo",
        href: "https://badibani.netlify.app/",
        icon: <Icons.globe className="size-3" />,
      },
    ],
    image: "/assets/projects/badibani.png",
    video: "",
  },
  {
    title: "Laravel TALL Stack Blog App",
    href: "https://github.com/codenamekii/blog-app",
    dates: "",
    featured: false,
    description:
      "blog application using TALL stack plus filament php to write and post lecture materials so they can be accessed online",
    technologies: ["Laravel", "Livewire", "AlpineJS", "TailwindCSS", "FilamentPHP"],
    links: [
      {
        type: "Source",
        href: "https://github.com/codenamekii/blog-app",
        icon: <Icons.github className="size-3" />,
      },
    ],
    image: "",
    video: "",
  },
];