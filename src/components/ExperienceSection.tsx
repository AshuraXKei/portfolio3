import type { Profile } from "../data/profile";
import { Section } from "./ui/Section";

type Props = {
  profile: Profile;
};

export function ExperienceSection({ profile }: Props) {
  return (
    <Section
      id="experience"
      eyebrow="Резюме"
      title="Опыт"
      description="Последние роли и то, что я обычно улучшаю в продукте: скорость, UX и качество кода."
    >
      <ol className="grid gap-3">
        {profile.experience.map((item) => (
          <li key={`${item.company}-${item.period}`}>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-white">
                  {item.role} · <span className="text-white/80">{item.company}</span>
                </h3>
                <p className="text-xs text-white/55">{item.period}</p>
              </div>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/70">
                {item.achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
