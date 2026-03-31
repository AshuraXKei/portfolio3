export type SocialLink = {
  label: string;
  href: string;
  icon:
    | "github"
    | "telegram"
    | "vk"
    | "email"
    | "max"
    | "yandexmusic"
    | "kinopoisk"
    | "website";
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: {
    demo?: string;
    code?: string;
  };
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export const profile = {
  meta: {
    title: "Портфолио разработчика",
    description:
      "Персональное портфолио разработчика: навыки, опыт, проекты и контакты для связи.",
    locale: "ru_RU",
  },
  person: {
    name: "AshuraKei",
    signature: "Ян",
    role: "Frontend / Full‑stack разработчик",
    location: "Россия · удалённо/офис",
    summary:
      "Делаю быстрые и доступные веб‑приложения: от прототипа до продакшена. Люблю чистую архитектуру, дизайн‑системы и оптимизацию производительности.",
    bullets: [
      "React/Next.js, TypeScript, Tailwind CSS",
      "SSR/SSG, SEO, оптимизация Core Web Vitals",
      "Интеграции API, авторизация, платежи (по проекту)",
    ],
  },
  about: {
    paragraph:
      "Я разработчик, который фокусируется на качестве интерфейсов: семантика, доступность (WCAG), производительность, понятный UX. В работе люблю прозрачные требования, короткие итерации и измеримые метрики.",
    skills: {
      primary: [
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "REST/GraphQL",
      ],
      tooling: [
        "Vite",
        "Webpack",
        "ESLint/Prettier",
        "Vitest/Jest",
        "Playwright/Cypress",
      ],
      practices: [
        "Доступность (a11y)",
        "SEO",
        "Code splitting",
        "Design systems",
        "CI/CD",
      ],
    },
  },
  experience: <ExperienceItem[]>[
    {
      company: "Компания A",
      role: "Frontend разработчик",
      period: "2023 — сейчас",
      achievements: [
        "Собрал UI‑кит и унифицировал компоненты (−30% времени на разработку экранов).",
        "Ускорил LCP/INP на ключевых страницах, внедрив lazy‑loading и оптимизацию рендера.",
        "Настроил аналитику событий и мониторинг ошибок (Sentry/GA) — по проекту.",
      ],
    },
    {
      company: "Фриланс",
      role: "Full‑stack разработчик",
      period: "2021 — 2023",
      achievements: [
        "Запуск лендингов и SPA для малого бизнеса с упором на SEO и скорость загрузки.",
        "Интеграции с внешними сервисами (формы, CRM, платежи) через API.",
      ],
    },
  ],
  projects: <Project[]>[
    {
      slug: "saas-dashboard",
      title: "SaaS Dashboard",
      description:
        "Панель управления с ролями, аналитикой и настройками профиля. Проектирование навигации, дизайн‑система и оптимизация производительности.",
      highlights: [
        "SSR/SSG и метатеги для SEO",
        "Компонентный UI + темизация",
        "Графики и таблицы с виртуализацией",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      links: {
        demo: "https://example.com",
      },
    },
    {
      slug: "ecommerce",
      title: "E‑commerce витрина",
      description:
        "Каталог товаров, фильтры, поиск и корзина. Упор на UX и скорость: код‑сплиттинг, оптимизация изображений, понятные состояния загрузки.",
      highlights: [
        "Фильтры/сортировка с сохранением состояния",
        "Оптимизация Core Web Vitals",
        "Интеграция с API каталога",
      ],
      tech: ["React", "TypeScript", "Vite", "REST API"],
      links: {
        demo: "https://example.com",
        code: "https://github.com/example/repo",
      },
    },
    {
      slug: "portfolio",
      title: "Персональное портфолио",
      description:
        "Мини‑сайт визитка: секции, проекты, контакты, форма обратной связи, SEO и адаптивность.",
      highlights: [
        "Семантическая разметка и доступность",
        "Якорная навигация + scrollspy",
        "Лёгкая структура данных для масштабирования",
      ],
      tech: ["React", "TypeScript", "Tailwind"],
      links: {
        demo: "https://example.com",
        code: "https://github.com/example/repo",
      },
    },
  ],
  contacts: {
    email: "yansugak@gmail.com",
    formSubject: "Сообщение с сайта‑портфолио",
    links: <SocialLink[]>[
      { label: "Email", href: "mailto:yansugak@gmail.com", icon: "email" },
      { label: "Telegram", href: "https://t.me/AshuraKei", icon: "telegram" },
    ],
  },
} as const;

export type Profile = typeof profile;
