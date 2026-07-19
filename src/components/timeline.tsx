import { about } from "@content/about";

import { Reveal } from "./reveal";

export function Timeline() {
  return (
    <ol className="mt-1">
      {about.timeline.map((entry, i) => (
        <li
          key={`${entry.year}-${entry.title}`}
          className="relative border-l border-line pb-9 pl-7 last:pb-1"
        >
          <span
            aria-hidden
            className="absolute top-1 -left-[5px] h-[9px] w-[9px] rounded-full border-2 border-scrub bg-paper"
          />
          <Reveal delay={Math.min(i * 0.05, 0.25)}>
            <p className="font-mono text-xs font-semibold tracking-[0.12em] text-scrub-ink">
              {entry.year}
            </p>
            <h3 className="mt-1.5 font-display text-lg font-bold">{entry.title}</h3>
            <p className="mt-1.5 text-[15px] leading-relaxed text-note">{entry.detail}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
