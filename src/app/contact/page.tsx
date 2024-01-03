"use client";
import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };
  console.log(errors);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <div
        className="container mx-auto h-full flex flex-col items-center
    xl:flex-row gap-x-6 mt-5"
      >
        <div className="flex-1 flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb:2 xl:mb-12"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex-1 flex flex-col gap-2 xl:gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="name"
                  className="input"
                  {...register("name", { required: "this field is required" })}
                />
                {errors.name && (
                  <p className="text-accent" role="alert">
                    Enter name
                  </p>
                )}
              </div>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="email"
                  className="input"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-accent" role="alert">
                    Please enter email
                  </p>
                )}
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="subject"
                className="input"
                {...register("subject", { required: true })}
              />
              {errors.subject && (
                <p className="text-accent" role="alert">
                  Enter subject
                </p>
              )}
            </div>
            <div>
              <textarea
                placeholder="message"
                id=""
                className="textarea"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <p className="text-accent" role="alert">
                  Enter a message
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn rounded-full border border-white/50
              max-w-[170px] px-8 transition-all duration-300 flex items-center
              justify-center overflow-hidden hover:border-accent group"
            >
              <span
                className="group-hover:translate-y-[120%] group-hover:opacity-0
                transition-all duration-500"
              >
                lets talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex
                group-hover:-translate-y-0 group-hover:opacity-100 transition-all
                duration-100 absolute text-[22px]"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
