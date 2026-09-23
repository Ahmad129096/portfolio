"use client";
import { HiArrowRight } from "react-icons/hi2";
import { useBooking } from "@/components/BookingProvider";

export type BookCallVariant = "primary" | "compact" | "secondary";

const variantClasses: Record<BookCallVariant, string> = {
  primary: "group btn-primary",
  compact: "group inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-ink transition hover:bg-accent/90 active:scale-95 sm:text-sm",
  secondary: "btn-secondary",
};

type Props = {
  variant?: BookCallVariant;
  label?: string;
  className?: string;
};

/**
 * The single primary action path for the whole site.
 *
 * Header, hero, contact and footer all render this component so "Book a call"
 * always does the same thing — open the Cal.com booking modal.
 */
const BookCallButton = ({
  variant = "primary",
  label = "Book a call",
  className = "",
}: Props) => {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
      aria-haspopup="dialog"
      className={`${variantClasses[variant]} ${className}`}
    >
      {label}
      {variant === "primary" ? (
        <span className="btn-primary-icon">
          <HiArrowRight />
        </span>
      ) : (
        <HiArrowRight
          aria-hidden
          className={
            variant === "compact"
              ? "text-base transition-transform group-hover:translate-x-0.5"
              : ""
          }
        />
      )}
    </button>
  );
};

export default BookCallButton;
