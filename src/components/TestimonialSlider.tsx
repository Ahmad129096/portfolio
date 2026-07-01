const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Kiran M",
    position: "Customer",
    message:
      "Did my project with Ahmad. He is friendly, fast, and efficient, and he understood the brief quickly. I’d hire him again without hesitation.",
  },
  {
    image: "/t-avt-2.png",
    name: "Md. Shibly S",
    position: "Customer",
    message:
      "10/10 service. He went above and beyond to make sure every requirement was met and delivered comfortably ahead of deadline.",
  },
  {
    image: "/t-avt-3.png",
    name: "Aight619",
    position: "Customer",
    message:
      "Very good—he delivered exactly what I wanted in a short time and stayed responsive throughout the process.",
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
      spaceBetween={16}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[430px]"
    >
      {testimonialData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className="flex h-full flex-col items-center gap-8 px-4 md:flex-row md:px-10 xl:px-16">
            <div className="flex w-full max-w-[280px] flex-col items-center rounded-[1.6rem] border border-white/10 bg-slate-900/70 p-6 text-center backdrop-blur-xl">
              <div className="mb-3 rounded-full border border-accent/12 bg-accent/06 p-2">
                <Image
                  alt={person.name}
                  src={person.image}
                  width={90}
                  height={90}
                  className="rounded-full"
                />
              </div>
              <div className="text-lg font-semibold text-white">
                {person.name}
              </div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                {person.position}
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center rounded-[1.6rem] border border-white/10 bg-slate-950/60 p-8 text-center shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl md:text-left">
              <FaQuoteLeft className="mx-auto mb-4 text-4xl text-accent/40 md:mx-0 xl:text-5xl" />
              <div className="text-base text-slate-300">{person.message}</div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
