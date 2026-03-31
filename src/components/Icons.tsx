import type { ComponentProps } from "react";

type IconProps = ComponentProps<"svg"> & {
  name:
    | "github"
    | "telegram"
    | "vk"
    | "email"
    | "external"
    | "menu"
    | "close"
    | "arrowUp"
    | "sparkle"
    | "max"
    | "yandexmusic"
    | "kinopoisk"
    | "website";
};

export function Icon({ name, ...props }: IconProps) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
  } as const;

  switch (name) {
    case "menu":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      );
    case "external":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3h7v7" />
          <path d="M10 14L21 3" />
          <path d="M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />
        </svg>
      );
    case "arrowUp":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l1.6 5.2L19 9l-5.4 1.8L12 16l-1.6-5.2L5 9l5.4-1.8L12 2z" />
          <path d="M5 14l.9 2.7L9 18l-3.1 1.3L5 22l-.9-2.7L1 18l3.1-1.3L5 14z" />
        </svg>
      );
    case "email":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16v12H4z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "github":
      return (
        <svg {...common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .6a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.8-1.4-3.8-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 1.9 2.9 1.4.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.9 1.2 3.2 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.4 11.4 0 0 0 12 .6z" />
        </svg>
      );
    case "telegram":
      return (
        <svg {...common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.7 15.6 9.5 19c.4 0 .6-.2.8-.4l1.9-1.8 3.9 2.9c.7.4 1.2.2 1.4-.7l2.5-11.8c.2-1-.4-1.4-1.1-1.1L3.7 10.2c-1 .4-1 1.1-.2 1.4l4 1.2 9.3-5.9c.4-.2.8-.1.5.2" />
          <path d="M7.5 12.8 15.9 6.9c.4-.2.7-.1.5.2l-6.7 6.4-.2 2.1" />
        </svg>
      );
    case "vk":
      return (
        <svg {...common} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.7 7.9c.1-.3 0-.5-.4-.5h-3.3c-.3 0-.5.1-.6.4 0 0-1.7 3.6-4.1 6-.8.8-1.2 1-1.6 1-.2 0-.5-.2-.5-.8V7.9c0-.3-.1-.5-.5-.5H5.5c-.3 0-.5.2-.5.4 0 .4.6.5.7 1.6v4.4c0 1-.2 1.2-.5 1.2-.9 0-3.1-3.7-4.4-7.9-.1-.3-.3-.4-.6-.4H.4c-.4 0-.5.2-.4.5 1 4.6 5.1 13.5 11.8 13.5h1.6c.3 0 .5-.1.5-.4v-2.4c0-.8.2-1 0-1 1.4 0 3.1 2.6 3.8 3.8.2.3.4.5.8.5h3.5c.4 0 .6-.2.5-.6-.2-.9-2.1-3.6-2.2-3.8-.3-.4-1.9-2.1-2.2-2.5-.2-.3-.2-.5 0-.8 0 0 3.9-5.5 4.3-7.4z" />
        </svg>
      );
    case "website":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M12 3c2.5 2.4 4 5.7 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.7-4-9s1.5-6.6 4-9Z" />
        </svg>
      );
    case "max":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 17V7l6 6 6-6v10" />
        </svg>
      );
    case "yandexmusic":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
          <path d="M10 15V9l6 3-6 3Z" />
        </svg>
      );
    case "kinopoisk":
      return (
        <svg {...common} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 6h12v12H6z" />
          <path d="M10 9v6" />
          <path d="M14 9v6" />
        </svg>
      );
    default:
      return null;
  }
}
