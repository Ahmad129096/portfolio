import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-m-none rounded-full">
      <Image
        src={"/portfolio-image3.png"}
        width={637}
        height={578}
        alt="Avatar"
        className="w-full h-full rounded-full"
      />
    </div>
  );
};

export default Avatar;
