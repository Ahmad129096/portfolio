"use client";
import Circles from "@/components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useForm } from "react-hook-form";
import { useCustomEmail } from "@/hooks";

const defaultValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues });
  const { sendEmail, toggleLoader, loading } = useCustomEmail();

  const onSubmit = (values: any) => {
    sendEmail(values);
    setTimeout(() => {
      reset(defaultValues);
    }, 1000);
    setTimeout(() => {
      toggleLoader();
    }, 2000);
  };

  return (
    <div className="relative min-h-[calc(100vh-16rem)] py-32 text-center xl:text-left">
      <Circles />
      <div className="container mx-auto mt-5 flex flex-col items-center gap-8 xl:flex-row xl:gap-12">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-[640px]"
        >
          <div className="glass-panel p-8 sm:p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-accent/60">
              Contact
            </p>
            <h2 className="h2 text-center xl:text-left">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>
            <p className="mb-8 text-center text-base text-slate-300 xl:text-left">
              If you have a product, launch, or redesign in mind, I’d love to
              hear about it.
            </p>
            <form
              action=""
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="input"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-accent/50" role="alert">
                      Enter name
                    </p>
                  )}
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Email"
                    className="input"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <p className="mt-2 text-sm text-accent/50" role="alert">
                      Please enter email
                    </p>
                  )}
                  {errors.email && errors.email.type === "pattern" && (
                    <p className="mt-2 text-sm text-accent/50" role="alert">
                      Enter a valid email
                    </p>
                  )}
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input"
                  {...register("subject", { required: true })}
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-accent/50" role="alert">
                    Enter subject
                  </p>
                )}
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="textarea"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-accent/50" role="alert">
                    Enter a message
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="group inline-flex h-[52px] max-w-[180px] items-center justify-center rounded-full border border-accent/20 bg-accent/06 px-6 text-sm font-medium text-white transition hover:border-accent/60 hover:bg-accent/10 hover:text-accent"
              >
                <span className="transition duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="absolute translate-y-6 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
              </button>
            </form>
            {loading && (
              <div className="mt-4 text-sm text-accent/50">Email sent</div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
