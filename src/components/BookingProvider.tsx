"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";
import { HiXMark } from "react-icons/hi2";

const CalComWidget = dynamic(() => import("@/components/CalComWidget"), {
  ssr: false,
});

type BookingContextValue = {
  openBooking: () => void;
};

const BookingContext = createContext<BookingContextValue>({
  openBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

/**
 * Single source of truth for the "Book a call" action.
 *
 * Every CTA on the site (header, hero, contact, footer) funnels through this
 * one modal instead of opening a new tab or duplicating a heavy inline embed.
 */
export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const openBooking = useCallback(() => {
    setHasOpened(true);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}

      {hasOpened && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Book a call with Ahmad Hassan"
          className={`fixed inset-0 z-[80] transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
            <div
              onClick={closeBooking}
              aria-hidden
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

              <div
                ref={panelRef}
                tabIndex={-1}
                data-lenis-prevent
                className={`glass-panel relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden outline-none transition duration-300 ${
                  isOpen
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-4 scale-95 opacity-0"
                }`}
              >
                <div className="flex items-start justify-between gap-4 border-b border-overlay/10 px-5 py-4 sm:px-6">
                  <div className="text-left">
                    <p className="font-heading text-sm font-semibold text-text sm:text-base">
                      Book a call with Ahmad Hassan
                    </p>
                    <p className="mt-0.5 text-xs text-muted sm:text-sm">
                      Pick a duration, choose a slot — confirmation is instant.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={closeBooking}
                    aria-label="Close booking"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-overlay/15 text-muted transition hover:border-accent/50 hover:text-accent"
                  >
                    <HiXMark />
                  </button>
                </div>

                <div
                  className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6"
                  data-lenis-prevent
                >
                  <CalComWidget />
                </div>
              </div>
          </div>
        </div>
      )}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
