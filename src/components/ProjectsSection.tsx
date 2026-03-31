import { useMemo, useState } from "react";
import type { Profile, Project } from "../data/profile";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";
import { Icon } from "./Icons";
import { cn } from "../utils/cn";

type Props = {
  profile: Profile;
};

export function ProjectsSection({ profile }: Props) {
  const [query, setQuery] = useState("");
  const [tech, setTech] = useState<string | "all">("all");

  const allTech = useMemo(() => {
    const set = new Set<string>();
    profile.projects.forEach((p) => p.tech.forEach((t) => set.add(t)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [profile.projects]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profile.projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q));

      const matchesTech = tech === "all" ? true : p.tech.includes(tech);
      return matchesQuery && matchesTech;
    });
  }, [profile.projects, query, tech]);

  return (
    <Section
      id="projects"
      eyebrow="Портфолио"
      title="Проекты"
      description="Подборка работ. Структура данных вынесена в отдельный файл — добавлять проекты можно за минуту."
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="flex w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 sm:max-w-md">
          <span className="text-xs text-white/55">Поиск</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Например: Next.js, SEO, dashboard…"
            className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
            aria-label="Поиск по проектам"
          />
        </label>

        <div className="flex flex-wrap gap-2">
          <FilterPill active={tech === "all"} onClick={() => setTech("all")}>
            Все
          </FilterPill>
          {allTech.map((t) => (
            <FilterPill key={t} active={tech === t} onClick={() => setTech(t)}>
              {t}
            </FilterPill>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-sm text-white/60">
          Ничего не найдено. Попробуйте другой запрос или сбросьте фильтр.
        </p>
      ) : null}
    </Section>
  );
}

function FilterPill({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border px-3 py-1 text-xs transition-colors",
        active
          ? "border-sky-400/40 bg-sky-400/10 text-white"
          : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:bg-white/10"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <ProjectPreview slug={project.slug} />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-base font-semibold text-white">{project.title}</h3>
          <div className="flex gap-2">
            {project.links.demo ? (
              <a
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Открыть демо: ${project.title}`}
              >
                <Icon name="website" className="h-4 w-4" />
              </a>
            ) : null}
            {project.links.code ? (
              <a
                className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
                href={project.links.code}
                target="_blank"
                rel="noreferrer"
                aria-label={`Открыть код: ${project.title}`}
              >
                <Icon name="github" className="h-4 w-4" />
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/70">{project.description}</p>

        <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/70">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-white/50" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectPreview({ slug }: { slug: string }) {
  const palette = [
    ["#f8fafc", "#38bdf8"],
    ["#e2e8f0", "#94a3b8"],
    ["#cbd5e1", "#0ea5e9"],
    ["#ffffff", "#64748b"],
  ] as const;

  const i = Math.abs(hash(slug)) % palette.length;
  const [a, b] = palette[i];

  return (
    <div className="relative h-36 w-full overflow-hidden border-b border-white/10">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 240"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`g-${slug}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={a} stopOpacity="0.9" />
            <stop offset="1" stopColor={b} stopOpacity="0.85" />
          </linearGradient>
          <filter id={`f-${slug}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>
        <rect width="600" height="240" fill={`url(#g-${slug})`} opacity="0.45" />
        <circle cx="140" cy="80" r="70" fill={a} filter={`url(#f-${slug})`} opacity="0.6" />
        <circle cx="430" cy="150" r="90" fill={b} filter={`url(#f-${slug})`} opacity="0.55" />
        <path
          d="M0,190 C150,140 240,230 380,180 C470,148 520,130 600,160 L600,240 L0,240 Z"
          fill="#000"
          opacity="0.18"
        />
      </svg>
       <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,6,10,0.78)] to-transparent" />
      <div className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
        {slug.replace(/-/g, " ")}
      </div>
    </div>
  );
}

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h << 5) - h + input.charCodeAt(i);
  return h;
}
