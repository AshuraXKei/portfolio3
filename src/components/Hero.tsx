import { Icon } from "./Icons";
import { LinkButton } from "./ui/Button";
import type { Profile } from "../data/profile";

type Props = {
  profile: Profile;
};

export function Hero({ profile }: Props) {
  const { person, contacts } = profile;

  return (
    <section id="top" className="scroll-mt-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Icon name="sparkle" className="h-4 w-4" />
            Открыт к предложениям · {person.location}
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {person.name}
          </h1>
          <p className="mt-3 text-base text-white/75 sm:text-lg">
            {person.signature ? `${person.signature} · ` : ""}
            {person.role}
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-6 text-white/70 sm:text-base">
            {person.summary}
          </p>

          <ul className="mt-6 grid gap-2 text-sm text-white/75 sm:grid-cols-2">
            {person.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="#projects" variant="primary">
              Смотреть проекты
              <Icon name="external" className="h-4 w-4" />
            </LinkButton>
            <LinkButton href="#contacts" variant="soft">
              Связаться
              <Icon name="email" className="h-4 w-4" />
            </LinkButton>
            <LinkButton href={`mailto:${contacts.email}`} variant="ghost">
              {contacts.email}
            </LinkButton>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm font-medium text-white">Фокус</p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              SEO, доступность и скорость загрузки. Люблю доводить интерфейсы до состояния «приятно
              пользоваться».
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-white/60">Проекты</p>
              <p className="mt-2 text-2xl font-semibold text-white">10+</p>
              <p className="mt-1 text-xs text-white/60">в продакшене/песочнице</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs text-white/60">Опыт</p>
              <p className="mt-2 text-2xl font-semibold text-white">3+ года</p>
              <p className="mt-1 text-xs text-white/60">коммерческой разработки</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-5">
            <p className="text-sm font-medium text-white">Что могу сделать быстро</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/75">
              {[
                "лендинг с SEO",
                "админ‑панель",
                "интеграции API",
                "дизайн‑система",
                "оптимизация CWV",
              ].map((t) => (
                <span key={t} className="rounded-full border border-white/10 bg-black/10 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
