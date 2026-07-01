"use client";
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Transforms concepts into visual experiences, blending creativity and functionality.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Code, debug, test, and refine products into scalable, elegant solutions.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Elevate online presence through thoughtful content strategy and technical polish.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[280px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-6 shadow-[0_6px_24px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-accent/06 p-3 text-3xl text-accent">
                {item.icon}
              </div>
              <div className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </div>
              <p className="max-w-[350px] text-sm text-slate-300">
                {item.description}
              </p>
            </div>
            <div className="mt-6 text-2xl text-slate-400 transition group-hover:text-accent">
              <RxArrowTopRight />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
