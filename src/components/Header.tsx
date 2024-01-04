import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center flex px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-3 xl:gap-y-6
      xl:py-8 mt-10"
        >
          <Link href="/" className="font-bold text-lg xl:text-[30px]">
            <span className="text-accent">Elevate</span>{" "}
            <span className=""> Tech</span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
