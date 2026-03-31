import { useEffect } from "react";
import type { Profile } from "../data/profile";

export function Seo({ profile }: { profile: Profile }) {
  useEffect(() => {
    document.title = profile.meta.title;

    const desc = ensureMeta("description");
    desc.setAttribute("content", profile.meta.description);

    const ldId = "ld-person";
    const existing = document.getElementById(ldId);
    const script = existing ?? document.createElement("script");

    script.setAttribute("id", ldId);
    script.setAttribute("type", "application/ld+json");

    const data = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: profile.person.name,
      jobTitle: profile.person.role,
      address: {
        "@type": "PostalAddress",
        addressCountry: profile.person.location,
      },
      email: profile.contacts.email,
      sameAs: profile.contacts.links
        .map((l) => l.href)
        .filter((href) => href.startsWith("http")),
    };

    script.textContent = JSON.stringify(data);

    if (!existing) document.head.appendChild(script);
  }, [profile]);

  return null;
}

function ensureMeta(name: string) {
  let el = document.querySelector(`meta[name=\"${name}\"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  return el;
}
