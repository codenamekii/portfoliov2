import Flowbite from "@/svgs/flowbite";
import { FaEthereum, FaJava } from "react-icons/fa";
import {
  SiAlpinedotjs,
  SiAndroid,
  SiCodeigniter,
  SiCss3,
  SiDart,
  SiDocker,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFlutter,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiLivewire,
  SiMui,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiWebpack
} from "react-icons/si";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  // Languages
  JavaScript: <SiJavascript size={iconSize} color="#F7DF1E" />, // yellow-500
  TypeScript: <SiTypescript size={iconSize} color="#60A5FA" />, // blue-400
  Dart: <SiDart size={iconSize} color="#60A5FA" />, // blue-400
  Go: <SiGo size={iconSize} color="#60A5FA" />, // blue-400

  // Web3 and Blockchain
  EVM: <FaEthereum size={iconSize} color="#627EEA" />, // EVM icon, using Ethereum color

  // Mobile Frameworks
  Android: <SiAndroid size={iconSize} color="#16A34A" />,
  Java: <FaJava size={iconSize} color="#DC2626" />,
  Flutter: <SiFlutter size={iconSize} color="#60A5FA" />,

  // Frontend Frameworks
  "Next.js": <SiNextdotjs size={iconSize} />,
  "React.js": <SiReact size={iconSize} color="#0EA5E9" />, // sky-500
  "Nuxt.js": <SiNuxtdotjs size={iconSize} color="#A855F7" />, // purple-500
  Webpack: <SiWebpack size={iconSize} color="#3B82F6" />, // blue-500
  "Alpine.js": <SiAlpinedotjs size={iconSize} color="#8B5CF6" />, // purple-600
  "Livewire": <SiLivewire size={iconSize} color="#FBBF24" />, // yellow-400

  // Frontend Library
  "shadcn/ui": <SiShadcnui size={iconSize} />,
  "Material UI": <SiMui size={iconSize} color="#38BDF8" />, // sky-400
  TailwindCSS: <SiTailwindcss size={iconSize} color="#67E8F9" />, // cyan-300
  Redux: <SiRedux size={iconSize} color="#A855F7" />, // purple-500
  CSS: <SiCss3 size={iconSize} color="#93C5FD" />, // blue-300
  Flowbite: <Flowbite iconSize={iconSize} />,

  // Backend
  Express: <SiExpress size={iconSize} />,
  "Codeigniter": <SiCodeigniter size={iconSize} color="#DC2626" />, // red-600
  "Nest.js": <SiNestjs size={iconSize} color="#DC2626" />, // red-600
  Prisma: <SiPrisma size={iconSize} color="#10B981" />, // emerald-500
  Firebase: <SiFirebase size={iconSize} color="#F59E0B" />, // yellow-500
  Supabase: <SiSupabase size={iconSize} color="#22C55E" />, // green-500
  Golang: <SiGo size={iconSize} color="#60A5FA" />, // blue-400
  Redis: <SiRedis size={iconSize} color="#DC2626" />, // red-600
  Laravel: <SiLaravel size={iconSize} color="#FBBF24" />, // yellow-400

  // Others
  "Node.js": <SiNodedotjs size={iconSize} color="#16A34A" />, // green-600
  Nginx: <SiNginx size={iconSize} color="#22C55E" />, // green-500
  Docker: <SiDocker size={iconSize} color="#93C5FD" />, // blue-300
  Gemini: <SiGooglegemini size={iconSize} />,
  Linux: <SiLinux size={iconSize} />,
  Figma: <SiFigma size={iconSize} />,
};
