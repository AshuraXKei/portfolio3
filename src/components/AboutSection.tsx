import type { Profile } from "../data/profile";
import { Badge } from "./ui/Badge";
import { Section } from "./ui/Section";

type Props = {
  profile: Profile;
};

export function AboutSection({ profile }: Props) {
  const { about } = profile;

  return (
    <Section
      id="about"
      eyebrow="Профиль"
      title="Обо мне"
      description="Коротко: люблю современный UI, чистый код и измеримую производительность."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm leading-7 text-white/75 sm:text-base">{about.paragraph}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Пишу понятно",
                text: "Семантика, типизация, тестирование и аккуратные детали интерфейса.",
              },
              {
                title: "Делаю доступно",
                text: "Клавиатурная навигация, ARIA‑атрибуты, контраст и уважение prefers‑reduced‑motion.",
              },
              {
                title: "Оптимизирую",
                text: "Core Web Vitals, lazy‑loading, минимизация лишнего JS и понятные состояния загрузки.",
              },
            ].map((it) => (
              <div key={it.title} className="rounded-xl border border-white/10 bg-black/10 p-4">
                <p className="text-sm font-medium text-white">{it.title}</p>
                <p className="mt-1 text-xs leading-5 text-white/60">{it.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-3">
          <SkillCard title="Основной стек" items={about.skills.primary} />
          <SkillCard title="Инструменты" items={about.skills.tooling} />
          <SkillCard title="Практики" items={about.skills.practices} />
        </div>
      </div>
    </Section>
  );
}

function SkillCard({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-medium text-white">{title}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <Badge key={s}>{s}</Badge>
        ))}
      </div>
    </div>
  );
}
