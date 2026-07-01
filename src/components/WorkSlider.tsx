"use client";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Accounts Management System",
          path: "/thumb1.png",
          link: "https://books.seebiz.com",
        },
        {
          title: "Reilitics",
          path: "/reilitics2.png",
          link: "https://www.reilitics.com/",
        },
        { title: "Krub ai", path: "/krubai.png", link: "https://krub.ai" },
        { title: "Inflink", path: "/inflink.png", link: "https://inflink.ae" },
      ],
    },
    {
      images: [
        {
          title: "Following",
          path: "/following.png",
          link: "https://following.ae",
        },
        {
          title: "Inventory Management System",
          path: "/thumb1.png",
          link: "https://inventory.seebiz.com",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={16}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[320px] sm:h-[500px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 gap-4">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="group relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/60 p-2 shadow-[0_0_30px_rgba(0,240,255,0.05)]"
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  width={500}
                  height={300}
                  className="h-full w-full rounded-[1rem] object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-[1.4rem] bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  <div className="text-sm font-medium text-white">
                    {image.title}
                  </div>
                  <Link
                    target="_blank"
                    href={image.link}
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm text-accent/60 transition hover:text-accent"
                  >
                    Visit project <BsArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
