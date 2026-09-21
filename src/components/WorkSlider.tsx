"use client";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const projects = [
  {
    title: "Accounts Management System",
    image: "/thumb1.png",
    link: "https://books.seebiz.com",
  },
  {
    title: "Reilitics",
    image: "/reilitics2.png",
    link: "https://www.reilitics.com/",
  },
  {
    title: "Krub.ai",
    image: "/krubai.png",
    link: "https://krub.ai",
  },
  {
    title: "Inflink",
    image: "/inflink.png",
    link: "https://inflink.ae",
  },
  {
    title: "Following",
    image: "/following.png",
    link: "https://following.ae",
  },
  {
    title: "Inventory Management System",
    image: "/thumb1.png",
    link: "https://inventory.seebiz.com",
  },
];

const WorkSlider = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={16}
        pagination={{ type: "fraction", el: ".work-pagination" }}
        navigation={{ nextEl: ".work-next", prevEl: ".work-prev" }}
        modules={[Pagination, Navigation]}
        className="work-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.title}>
            <div className="glass-card grid items-center gap-6 p-5 sm:p-6 md:grid-cols-[1.1fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={420}
                  className="h-[220px] w-full object-cover sm:h-[280px]"
                />
              </div>
              <div className="text-left">
                <p className="mb-2 text-xs text-stone-500">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mb-3 font-heading text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm text-stone-500">Live &amp; deployed</p>
                <div>
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:gap-3"
                  >
                    View project
                    <HiArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex items-center justify-between">
        <div className="work-pagination text-sm text-stone-500" />
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous project"
            className="work-prev flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-white/30 hover:text-white"
          >
            ‹
          </button>
          <button
            aria-label="Next project"
            className="work-next flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-white/30 hover:text-white"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
