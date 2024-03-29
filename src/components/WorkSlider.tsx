"use client";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.png",
          link: "https://books.seebiz.cloud",
        },
        {
          title: "title",
          path: "/reilitics2.png",
          link: "https://www.reilitics.com/",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "https://books.seebiz.cloud",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "https://books.seebiz.cloud",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          link: "/work",
        },
        {
          title: "title",
          path: "/thumb1.png",
          link: "/work",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          link: "work",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          link: "work",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[270px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="relative rounded-lg overflow-hidden flex
              items-center justify-center group"
              >
                <div
                  className="flex items-center justify-center relative
                overflow-hidden group"
                >
                  <Image src={image.path} alt="" width={500} height={300} />
                  <div
                    className=" absolute inset-0 bg-gradient-to-l
                from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                group-hover:opacity-80 transition-all duration-700"
                  ></div>

                  <Link
                    target="_blank"
                    href={image.link}
                    rel="noopener noreferrer"
                    className="absolute bottom-0 translate-y-full
                  group-hover:translate-y-10 group-hover:xl:-translate-y-20
                  transition-all duration-100"
                  >
                    <div
                      className="flex items-center gap-x-2
                    text-[13px] tracking-[0.2em]"
                    >
                      <div className="delay-100">LIVE</div>
                      <div
                        className="translate-y-[500%] group-hover:translate-y-0
                      transition-all duration-300 delay-150"
                      >
                        PROJECT
                      </div>
                      <div
                        className="text-xl translate-y-[500%]
                      group-hover:translate-y-0 transition-all duration-300
                      delay-200"
                      >
                        <BsArrowRight />
                      </div>
                    </div>
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
