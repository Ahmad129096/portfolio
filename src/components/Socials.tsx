import Link from "next/link";
import type { ReactElement } from "react";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

export type SocialLink = {
  name: string;
  href: string;
  icon: ReactElement;
};

/**
 * Shared profile links — imported by the header and footer so the icons can
 * never drift apart. Order matters: GitHub and LinkedIn come first because
 * they are the two profiles the header surfaces.
 */
export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/ahmad129096",
    icon: <RiGithubLine />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmad-hassan-792619140/",
    icon: <RiLinkedinBoxLine />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ahmad129096?igsh=cXMwY3VuZ2NtY28z&utm_source=qr",
    icon: <RiInstagramLine />,
  },
];

const Socials = ({ className = "flex items-center gap-x-5 text-lg" }) => {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <Link
          key={link.name}
          target="_blank"
          rel="noopener noreferrer"
          href={link.href}
          aria-label={link.name}
          className="icon-link"
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
