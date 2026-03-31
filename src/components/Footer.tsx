import type { Profile } from "../data/profile";

export function Footer({ profile }: { profile: Profile }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">
              {profile.person.name}
              {profile.person.signature ? (
                <span className="text-white/60"> · {profile.person.signature}</span>
              ) : null}
            </p>
            <p className="mt-1 text-xs text-white/55">
              © {year}. Сделано на React + Tailwind. Подходит для деплоя на GitHub Pages.
            </p>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm" aria-label="Ссылки в подвале">
            {[
              { href: "#about", label: "Обо мне" },
              { href: "#projects", label: "Проекты" },
              { href: "#contacts", label: "Контакты" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="text-white/70 hover:text-white underline">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
