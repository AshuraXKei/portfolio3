import { useCallback, useState } from "react";

type Status = "idle" | "copied" | "error";

export function useCopyToClipboard(resetMs = 1500) {
  const [status, setStatus] = useState<Status>("idle");

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setStatus("copied");
        window.setTimeout(() => setStatus("idle"), resetMs);
        return true;
      } catch {
        setStatus("error");
        window.setTimeout(() => setStatus("idle"), resetMs);
        return false;
      }
    },
    [resetMs]
  );

  return { copy, status } as const;
}
