import Link from "next/link";
import Socials from "./Socials";
import Image from "next/image";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center flex px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-y-6
      py-8"
        >
          <Link href="/">
            <Image src="/logo.png" alt="" width={200} height={200} />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
