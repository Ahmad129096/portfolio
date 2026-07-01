import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="group relative flex h-[168px] w-[168px] items-center justify-center rounded-full border border-accent/20 bg-slate-950/60 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition hover:scale-[1.03] hover:border-accent/60"
      >
        <Image
          src="/rounded-text.png"
          alt="View portfolio projects"
          width={141}
          height={148}
          className="h-full max-h-[132px] w-full max-w-[132px] animate-spin-slow"
        />
        <div className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-accent/12 text-2xl text-accent transition group-hover:translate-x-1">
          <HiArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
