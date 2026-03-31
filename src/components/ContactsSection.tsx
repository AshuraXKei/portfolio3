import { useMemo, useState } from "react";
import type { Profile, SocialLink } from "../data/profile";
import { Icon } from "./Icons";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { cn } from "../utils/cn";

type Props = {
  profile: Profile;
};

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot
};

export function ContactsSection({ profile }: Props) {
  const { contacts } = profile;
  const { copy, status } = useCopyToClipboard();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState<"idle" | "sent">("idle");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(contacts.formSubject);
    const body = encodeURIComponent(
      `Имя: ${form.name}\nEmail: ${form.email}\n\nСообщение:\n${form.message}`
    );
    return `mailto:${contacts.email}?subject=${subject}&body=${body}`;
  }, [contacts.email, contacts.formSubject, form]);

  return (
    <Section
      id="contacts"
      eyebrow="Связь"
      title="Контакты"
      description="Можно написать напрямую или через форму — откроется ваш почтовый клиент с готовым письмом."
    >
      <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-white">Почта</p>
              <a className="mt-1 block text-sm text-white/75 underline" href={`mailto:${contacts.email}`}>
                {contacts.email}
              </a>
            </div>
            <Button
              type="button"
              variant="soft"
              onClick={() => copy(contacts.email)}
              aria-live="polite"
            >
              {status === "copied" ? "Скопировано" : status === "error" ? "Ошибка" : "Копировать"}
            </Button>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-white">Профили</p>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {contacts.links.map((l) => (
                <SocialLinkCard key={l.label} link={l} />
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/10 p-4">
            <p className="text-sm font-medium text-white">Чем могу помочь</p>
            <ul className="mt-2 grid gap-2 text-sm text-white/70">
              {[
                "лендинг/портфолио с SEO",
                "React/Next.js разработка",
                "аудит и оптимизация производительности",
                "интеграции API и формы",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <form
            className="grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();

              // простая защита от ботов
              if (form.company.trim()) {
                setSubmitted("sent");
                return;
              }

              window.location.href = mailtoHref;
              setSubmitted("sent");
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Имя">
                <input
                  value={form.name}
                  onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                  className={inputClass}
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                />
              </Field>
              <Field label="Email">
                <input
                  value={form.email}
                  onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                  className={inputClass}
                  autoComplete="email"
                  inputMode="email"
                  placeholder="name@company.com"
                />
              </Field>
            </div>

            {/* Honeypot */}
            <div className="hidden">
              <label>
                Company
                <input
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                />
              </label>
            </div>

            <Field label="Сообщение">
              <textarea
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                className={cn(inputClass, "min-h-32 resize-y")}
                placeholder="Коротко опишите задачу или предложение"
              />
            </Field>

            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit" variant="primary">
                Отправить
                <Icon name="external" className="h-4 w-4" />
              </Button>
              <a
                href={mailtoHref}
                className="text-sm text-white/70 underline"
                onClick={() => setSubmitted("sent")}
              >
                Открыть письмо вручную
              </a>
            </div>

            {submitted === "sent" ? (
              <p className="text-xs text-white/60">
                Если почтовый клиент не открылся, напишите на {contacts.email} или через Telegram.
              </p>
            ) : (
              <p className="text-xs text-white/60">
                Форма не отправляет данные на сервер — это безопасно и быстро для GitHub Pages.
              </p>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}

function SocialLinkCard({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-3 py-2",
        "text-sm text-white/75 hover:bg-white/10 hover:text-white"
      )}
    >
      <Icon name={link.icon} className="h-4 w-4" />
      <span className="truncate">{link.label}</span>
    </a>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1">
      <span className="text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-sky-400/40";
