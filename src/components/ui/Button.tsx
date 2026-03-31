import type { ComponentProps } from "react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "ghost" | "soft";

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium",
        "transition-colors",
        "disabled:opacity-60 disabled:pointer-events-none",
        variant === "primary" &&
          "bg-white text-black hover:bg-white/90 focus-visible:outline-none",
        variant === "soft" &&
          "bg-white/10 text-white hover:bg-white/15 border border-white/10",
        variant === "ghost" &&
          "bg-transparent text-white/85 hover:bg-white/10 border border-white/10",
        className
      )}
      {...props}
    />
  );
}

type LinkButtonProps = ComponentProps<"a"> & {
  variant?: Variant;
};

export function LinkButton({ className, variant = "primary", ...props }: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium",
        "transition-colors",
        variant === "primary" && "bg-white text-black hover:bg-white/90",
        variant === "soft" && "bg-white/10 text-white hover:bg-white/15 border border-white/10",
        variant === "ghost" && "bg-transparent text-white/85 hover:bg-white/10 border border-white/10",
        className
      )}
      {...props}
    />
  );
}
