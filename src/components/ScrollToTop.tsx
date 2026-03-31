import { useEffect, useState } from "react";
import { Icon } from "./Icons";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { cn } from "../utils/cn";

export function ScrollToTop() {
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={cn(
        "fixed bottom-5 right-5 z-40",
        "rounded-2xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur",
        "shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition",
        show ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      )}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: reduced ? "auto" : "smooth",
        })
      }
      aria-label="Наверх"
    >
      <Icon name="arrowUp" className="h-5 w-5" />
    </button>
  );
}
