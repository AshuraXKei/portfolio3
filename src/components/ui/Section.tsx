import type { ReactNode } from "react";
import { cn } from "../../utils/cn";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: Props) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-14 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <header className="mb-8 sm:mb-10">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/70 sm:text-base">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
