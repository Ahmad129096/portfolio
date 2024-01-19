import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-m-none  rounded-full">
      <Image
        src={"/portfolio-img.png"}
        width={637}
        height={578}
        alt="Avatar"
        className="translate-z-0 w-full h-full "
      />
    </div>
  );
};

export default Avatar;
