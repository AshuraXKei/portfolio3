import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80",
        className
      )}
      {...props}
    />
  );
}
