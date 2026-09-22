import { FaNode, FaReact, FaWordpress } from "react-icons/fa";
import { SiFramer, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

type Tool = {
  name: string;
  blurb: string;
  icon: React.ReactNode;
  color: string;
};

const row1: Tool[] = [
  { name: "React", blurb: "UI library", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", blurb: "React framework", icon: <SiNextdotjs />, color: "#eeece6" },
  { name: "Node.js", blurb: "Runtime", icon: <FaNode />, color: "#3C873A" },
  { name: "TypeScript", blurb: "Type safety", icon: <SiTypescript />, color: "#3178C6" },
];

const row2: Tool[] = [
  { name: "Tailwind CSS", blurb: "Utility-first styling", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "Framer Motion", blurb: "Animation", icon: <SiFramer />, color: "#c9a24d" },
  { name: "WordPress", blurb: "CMS", icon: <FaWordpress />, color: "#21759B" },
];

const Pill = ({ tool }: { tool: Tool }) => (
  <div className="flex shrink-0 items-center gap-3 rounded-full border border-overlay/10 bg-surface px-5 py-3 shadow-soft">
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-overlay/5 text-xl"
      style={{ color: tool.color }}
    >
      {tool.icon}
    </span>
    <div className="whitespace-nowrap text-left">
      <div className="text-sm font-semibold text-text">{tool.name}</div>
      <div className="text-xs text-muted">{tool.blurb}</div>
    </div>
  </div>
);

const Row = ({ tools, reverse }: { tools: Tool[]; reverse?: boolean }) => (
  <div className="marquee-row marquee-mask overflow-hidden">
    <div className={`marquee-track gap-4 pr-4 ${reverse ? "marquee-track-reverse" : ""}`}>
      {[...tools, ...tools].map((tool, i) => (
        <Pill key={`${tool.name}-${i}`} tool={tool} />
      ))}
    </div>
  </div>
);

const TechMarquee = () => (
  <div className="space-y-4">
    <Row tools={row1} />
    <Row tools={row2} reverse />
  </div>
);

export default TechMarquee;
