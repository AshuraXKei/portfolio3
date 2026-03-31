import { useEffect, useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { Icon } from "./Icons";

export type NavItem = {
  id: string;
  label: string;
  href: string;
};

type Props = {
  name: string;
  activeId: string;
};

export function Header({ name, activeId }: Props) {
  const items = useMemo<NavItem[]>(
    () => [
      { id: "top", label: "Главная", href: "#top" },
      { id: "about", label: "Обо мне", href: "#about" },
      { id: "experience", label: "Опыт", href: "#experience" },
      { id: "projects", label: "Проекты", href: "#projects" },
      { id: "contacts", label: "Контакты", href: "#contacts" },
    ],
    []
  );

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <a
        href="#content"
        className={cn(
          "sr-only focus:not-sr-only",
          "fixed left-4 top-4 z-[60] rounded-lg bg-white/10 px-3 py-2 text-sm text-white backdrop-blur"
        )}
      >
        Перейти к содержимому
      </a>

      <header
        className={cn(
          "sticky top-0 z-50",
          "border-b border-white/10 bg-black/20 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-semibold text-white shadow">
              {name.trim().slice(0, 1).toUpperCase()}
            </span>
            <span className="hidden text-sm font-medium text-white/90 sm:block">{name}</span>
          </a>

          <nav className="hidden items-center gap-1 sm:flex" aria-label="Основная навигация">
            {items.map((it) => {
              const isActive = activeId === it.id;
              return (
                <a
                  key={it.id}
                  href={it.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm transition-colors",
                    isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {it.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/85 hover:bg-white/10 sm:hidden"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <Icon name="menu" className="h-5 w-5" />
            Меню
          </button>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Меню"
          id="mobile-nav"
          onClick={() => setOpen(false)}
        >
          <div
            className="mx-auto mt-20 w-[min(92vw,420px)] rounded-2xl border border-white/10 bg-[rgba(5,6,10,0.92)] p-3 shadow-[var(--shadow)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 py-2">
              <p className="text-sm font-medium text-white">Навигация</p>
              <button
                type="button"
                className="rounded-lg p-2 text-white/80 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Закрыть меню"
              >
                <Icon name="close" className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 p-2" aria-label="Навигация (мобильная)">
              {items.map((it) => {
                const isActive = activeId === it.id;
                return (
                  <a
                    key={it.id}
                    href={it.href}
                    className={cn(
                      "rounded-xl px-3 py-3 text-sm",
                      isActive ? "bg-white/10 text-white" : "text-white/70 hover:text-white hover:bg-white/5"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {it.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </>
  );
}
