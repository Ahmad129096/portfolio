import Link from "next/link";
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href="https://www.instagram.com/ahmad129096?igsh=cXMwY3VuZ2NtY28z&utm_source=qr"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://github.com/ahmad129096"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/ahmad-hassan-792619140/"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
