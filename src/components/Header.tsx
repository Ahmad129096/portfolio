import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-4 py-3 backdrop-blur-2xl shadow-[0_0_0_1px_rgba(255,255,255,0.04)] sm:px-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.25em] text-slate-100 xl:text-[1.35rem]"
        >
          <span className="text-accent">AHMAD</span> HASSAN
        </Link>
        <div className="hidden sm:block">
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
