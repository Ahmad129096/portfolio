import Image from "next/image";

const Avatar = () => {
  return (
    <div className="relative flex w-full max-w-[360px] items-center justify-center rounded-[2rem] border border-accent/10 bg-overlay/10 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl xl:max-w-[410px]">
      <div className="absolute inset-0 rounded-[2rem] border border-accent/12" />
      <Image
        src="/portfolio-image.png"
        width={637}
        height={578}
        alt="Portrait of Ahmad Hassan"
        priority
        sizes="(min-width: 1280px) 360px, (min-width: 640px) 320px, 280px"
        className="h-full w-full rounded-[1.6rem] object-cover"
      />
    </div>
  );
};

export default Avatar;
