// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Kiran M",
    position: "Customer",
    message:
      "Did my project with Ahmad. He is friendly, fast and efficient in what he is doing. heknows the user requirement and communicate in time. I will hire him again if I need",
  },
  {
    image: "/t-avt-2.png",
    name: "Md.Shibly S",
    position: "Customer",
    message:
      "10/10 service, went above and beyond to make sure that all requirements met and took time to help clarrify some questions that I had with the code. Provided quick responses to questions and was able to demonstrate a clear understanding on requirements. Deliverd comfortably ahead of deadline.",
  },
  {
    image: "/t-avt-3.png",
    name: "Aight619",
    position: "Customer",
    message:
      "Very good gave what I wanted exactly, in the little time i gave him. 100% would work with him again in the future",
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper/modules";

import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div
            className=" h-full flex flex-col items-center md:flex-row gap-x-8
          px-16"
          >
            <div
              className="w-full max-w-[300px] flex flex-col xl:justify-center
            items-center relative mx-auto xl:mx-0"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="mb-2 mx-auto">
                  <Image alt="" src={person.image} width={100} height={100} />
                </div>
                <div className="text-lg">{person.name}</div>
                <div className="text-[12px] uppercase font-extralight tracking-widest">
                  {person.position}
                </div>
              </div>
            </div>
            <div
              className="flex-1 flex flex-col justify-center
            before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
            xl:before:h-[200px] relative xl:pl-20"
            >
              <div className="mb-4">
                <FaQuoteLeft className=" text-4xl xl:text-6xl text-white/20 mx-auto" />
              </div>
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
