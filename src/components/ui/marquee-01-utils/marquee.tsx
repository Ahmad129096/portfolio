import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type MarqueeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
};

export function Marquee({
  children,
  className,
  pauseOnHover = false,
  reverse = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn("overflow-hidden", pauseOnHover && "marquee-row", className)}
      {...props}
    >
      <div
        className={cn(
          "marquee-track",
          reverse && "marquee-track-reverse",
        )}
      >
        <div className="flex shrink-0 items-center gap-4 pr-4">{children}</div>
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-4 pr-4"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
