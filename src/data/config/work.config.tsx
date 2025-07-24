import { ExternalLink, Link } from "lucide-react";

export const WORK = [
  {
    title: "Makassar Islamic University",
    role: "Freelance Web Developer",
    dates: "Jan - Present",
    location: "Hybrid, Makassar (Indonesia)",
    description: [
      {
        text: "I build websites that run smooth, look good, and don’t break when you blink. Fast dev cycles, clean logic, and no spaghetti code",
        technologies: ["NextJS", "Typescript", "TailwindCSS", "Firebase", "Prisma","Vercel"]
      },
      {
        text: "From landing pages to full-stack apps, I handle it. Need a fix? I got it. Need it deployed tonight? Bet.",
        technologies: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "Rest APIs", "GIT"]
      },
      {
        text: "I vibe with both UI and backend. I write clean code, but still care about pixels. Your users won’t bounce — promise.",
        technologies: ["NuxtJS", "Vuex", "SCSS", "Pinia", "Supabase", "Netlify"]
      },
      {
        text: "Been working remote for years. I get sh*t done without drama. I build fast, communicate clear, and don’t ghost.",
        technologies: ["Laravel", "Inertia", "Livewire", "AlpineJS", "Filament", "MySQL"]
      },
    ],
    image: "/UIM.png",
    links: [
      {
        title: "Website",
        href: "https://uim-makassar.ac.id/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/in/taufiqurrahman-fiki-583338188/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "PT. Survey Teknologi Indonesia",
    role: "Frontend Developer Intern",
    dates: "Jun - Dec, 2023",
    location: "Hybrid, Makassar (Indonesia)",
    description: [
        {
        text: "Built a full-on company website from scratch for a mining and geotechnical consulting firm — boosting their online presence and making ‘em look pro to potential clients.",
          technologies: []
        },
        {
          text: "Handled the full UI slicing process, turned mockups into a responsive layout that looks clean on both engineer desktops and mobile devices out in the field",
          technologies: ["JavaScript","TailwindCSS",]
        },
        {
          text: "keep things smooth, not boring. Included all the must-haves: company profile, services, mining project portfolio, and direct-contact links (WhatsApp, email, etc.)",
          technologies: ["NextJs", "TailwindCSS", "ReactJS", "Vercel"]
        },
        {
          text: "Took care of all frontend logic, dynamic routing, and even some custom content formatting with markdown/JSON. Also helped the internal team understand how to manage their site content without always calling devs for small stuff",
          technologies: []
        }
    ],
    image: "/STI.png",
    mlh: "",
    links: [
      {
        title: "Website",
        href: "https://indosurtek.com/",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/in/taufiqurrahman-fiki-583338188/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
  {
    title: "CV. Ideal Creative Printing",
    role: "screen printing crew",
    dates: "Mar 2021 - Sept 2022",
    location: "On-Site, Makassar (Indonesia)",
    description: [
      {
        text: "Operated manual and semi-auto screen printing machines for t-shirts, tote bags, and custom merch, ensuring clean and accurate results",
        technologies: []
      },
      {
        text: "Handled prep work like screen setup, film transfer, ink mixing, and post-print cleanup to keep the workflow smooth and efficient",
        technologies: []
      },
      {
        text: "Worked closely with design and finishing team to match print layout, troubleshoot misalignments, and hit daily production targets.",
        technologies: []
      }
    ],
    image: "/sablon.png",
    links: [
      {
        title: "Website",
        href: "#",
        icon: <Link className="size-3" />,
      },
      {
        title: "Proof",
        href: "https://www.linkedin.com/in/taufiqurrahman-fiki-583338188/",
        icon: <ExternalLink className="size-3" />,
      },
    ],
  },
];
