import { Card, CardContent } from "@/components/ui/card";
import { Marquee } from "@/components/ui/marquee-01-utils/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Claudia Parker",
    username: "@claudiaparker",
    body: "“Ahmad delivered our dashboard ahead of schedule. The performance improvements were noticeable immediately - reports load in seconds now.”",
    profile:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Sara Khan",
    username: "@sarakhan",
    body: "“Exceptional work on our MERN stack application. Clean code, great communication, and he understood our business needs perfectly.”",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Usman Ali",
    username: "@usmanali",
    body: "“Working with Ahmad was seamless. He built our internal tool that cut our reconciliation time from days to hours. Highly recommended.”",
    profile:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Fatima Malik",
    username: "@fatimamalik",
    body: "“Professional, reliable, and delivers quality work. Our React app runs flawlessly and the UX is exactly what we envisioned.”",
    profile:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Hassan Mahmood",
    username: "@hassanmahmood",
    body: "“Best investment we made. Ahmad built a scalable solution that grows with our business. Great attention to detail and performance.”",
    profile:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Ayesha Noor",
    username: "@ayeshanoor",
    body: "“Quick turnaround, excellent code quality, and great problem-solving skills. Will definitely work with him again for future projects.”",
    profile:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

const ReviewCard = ({
  profile,
  name,
  username,
  body,
}: {
  profile: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <Card className="relative h-full w-80 cursor-pointer overflow-hidden border-primary/20 bg-surface/80 shadow-none p-4 backdrop-blur-sm">
      <CardContent className="p-0 flex flex-col gap-3">
        <div className="flex flex-row items-center gap-3">
          <Image
            className="rounded-full object-cover"
            width="40"
            height="40"
            alt={name}
            src={profile}
          />
          <div className="flex flex-col">
            <p className="text-sm font-medium text-text">{name}</p>
            <p className="text-xs font-medium text-muted">{username}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted">{body}</p>
      </CardContent>
    </Card>
  );
};

export default function TestimonialMarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:25s]">
        {firstRow.map((review, idx) => (
          <ReviewCard key={`${review.username}-${idx}`} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:25s]">
        {secondRow.map((review, idx) => (
          <ReviewCard key={`${review.username}-${idx}`} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
