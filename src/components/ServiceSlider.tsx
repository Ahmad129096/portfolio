"use client";
import Link from "next/link";
import { HiCommandLine, HiRectangleGroup, HiBolt, HiArrowUpRight } from "react-icons/hi2";
import { FaWordpress } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const serviceData = [
  {
    icon: <HiCommandLine />,
    title: "Web App Development",
    description:
      "End-to-end engineering of fast, reliable web applications with React and Next.js — from architecture through deployment.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    icon: <HiRectangleGroup />,
    title: "UI Systems & Interactions",
    description:
      "Turning designs into clean, reusable component systems with smooth, purposeful motion and consistent styling.",
    tags: ["Tailwind CSS", "Framer Motion", "Responsive Design"],
  },
  {
    icon: <HiBolt />,
    title: "Performance Optimization",
    description:
      "Auditing and tightening the front end for faster loads, smaller bundles, and smoother interactions.",
    tags: ["Core Web Vitals", "Asset Optimization", "Bundle Size"],
  },
  {
    icon: <FaWordpress />,
    title: "WordPress & CMS Development",
    description:
      "Building and customizing WordPress sites for businesses that need a reliable, content-driven web presence.",
    tags: ["WordPress", "Custom Themes", "Content Migration"],
  },
];

const ServiceSlider = () => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 16 },
          1280: { slidesPerView: 2.4, spaceBetween: 16 },
        }}
        pagination={{ type: "fraction", el: ".services-pagination" }}
        navigation={{
          nextEl: ".services-next",
          prevEl: ".services-prev",
        }}
        modules={[Pagination, Navigation]}
        className="services-swiper !pb-2"
      >
        {serviceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="glass-card group flex h-full min-h-[320px] flex-col justify-between p-6">
              <div>
                <div className="mb-5 text-xl text-accent">{item.icon}</div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mb-5 text-sm text-stone-400">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-stone-500">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <Link
                href="#contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent transition group-hover:gap-2"
              >
                Explore scope
                <HiArrowUpRight />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex items-center justify-between">
        <div className="services-pagination text-sm text-stone-500" />
        <div className="flex items-center gap-2">
          <button
            aria-label="Previous service"
            className="services-prev flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-white/30 hover:text-white"
          >
            ‹
          </button>
          <button
            aria-label="Next service"
            className="services-next flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-stone-400 transition hover:border-white/30 hover:text-white"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
