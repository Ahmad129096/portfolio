"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SiGithub, SiX, SiYoutube, SiLinkedin } from "react-icons/si";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Claudia Parker",
    title: "Founder, TechStartup PK",
    description:
      "Ahmad delivered our dashboard ahead of schedule. The performance improvements were incredible - our reports went from taking minutes to loading in seconds. His attention to detail and technical expertise is unmatched.",
    imageUrl: "/testimonial1.jpeg",
    // linkedinUrl: "https://www.linkedin.com/in/ahmad-hassan-792619140/",
  },
  {
    name: "Sara Khan",
    title: "CEO, Digital Solutions Lahore",
    description:
      "Working with Ahmad was seamless. He built our MERN stack application from scratch with clean code and great communication. He truly understood our business needs and delivered beyond expectations.",
    imageUrl: "/testimonial2.jpeg",
    // linkedinUrl: "https://www.linkedin.com/in/ahmad-hassan-792619140/",
  },
  {
    name: "Usman Ali",
    title: "Operations Manager, AccountsPro",
    description:
      "Ahmad built our internal accounts management system that cut our month-end reconciliation from 3 days to just a few hours. The ROI was immediate. I couldn't recommend him more highly.",
    imageUrl: "/testimonial3.jpeg",
    // linkedinUrl: "https://www.linkedin.com/in/ahmad-hassan-792619140/",
  },
];

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length,
    );

  const currentTestimonial = testimonials[currentIndex];

  const socialIcons = [
    { icon: SiGithub, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: SiX, url: currentTestimonial.twitterUrl, label: "X" },
    { icon: SiYoutube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    {
      icon: SiLinkedin,
      url: currentTestimonial.linkedinUrl,
      label: "LinkedIn",
    },
  ].filter((item) => item.url);

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4", className)}>
      {/* Desktop layout */}
      <div className="hidden lg:flex relative items-center">
        {/* Avatar */}
        <div className="w-[420px] h-[420px] xl:w-[470px] xl:h-[470px] rounded-3xl overflow-hidden bg-primary/10 flex-shrink-0 border border-primary/20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={470}
                height={470}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className="glass-card rounded-3xl shadow-[0_60px_120px_-80px_rgba(95,107,65,0.3)] p-8 xl:p-10 ml-[-80px] z-10 max-w-xl flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="mb-6">
                <h2 className="text-2xl xl:text-3xl font-semibold text-text mb-2">
                  {currentTestimonial.name}
                </h2>

                <p className="text-sm font-medium text-muted">
                  {currentTestimonial.title}
                </p>
              </div>

              <p className="text-text/90 text-base leading-relaxed mb-8">
                {currentTestimonial.description}
              </p>

              {socialIcons.length > 0 && (
                <div className="flex space-x-3">
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <Link
                      key={label}
                      href={url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-primary rounded-full flex items-center justify-center transition-all hover:opacity-90 hover:scale-105"
                      aria-label={label}
                    >
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Tablet/Mobile layout */}
      <div className="lg:hidden max-w-md mx-auto text-center">
        {/* Avatar */}
        <div className="w-full aspect-square bg-primary/10 rounded-3xl overflow-hidden mb-6 border border-primary/20 mx-auto max-w-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full"
            >
              <Image
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
                draggable={false}
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className="glass-card rounded-3xl p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h2 className="text-xl font-semibold text-text mb-2">
                {currentTestimonial.name}
              </h2>

              <p className="text-sm font-medium text-muted mb-4">
                {currentTestimonial.title}
              </p>

              <p className="text-text/90 text-sm leading-relaxed mb-6">
                {currentTestimonial.description}
              </p>

              {socialIcons.length > 0 && (
                <div className="flex justify-center space-x-3">
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <Link
                      key={label}
                      href={url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-primary rounded-full flex items-center justify-center transition-all hover:opacity-90"
                      aria-label={label}
                    >
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="flex justify-center items-center gap-6 mt-10">
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label="Previous testimonial"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/60 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-text" />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, testimonialIndex) => (
            <button
              key={testimonialIndex}
              onClick={() => setCurrentIndex(testimonialIndex)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                testimonialIndex === currentIndex
                  ? "bg-primary w-6"
                  : "bg-muted/40",
              )}
              aria-label={`Go to testimonial ${testimonialIndex + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:border-primary/60 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-text" />
        </button>
      </div>
    </div>
  );
}
