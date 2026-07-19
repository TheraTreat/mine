import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

async function loadOgFonts() {
  const dir = path.join(process.cwd(), "src", "fonts", "og");
  const [regular, semibold] = await Promise.all([
    readFile(path.join(dir, "IBMPlexMono-Regular.ttf")),
    readFile(path.join(dir, "IBMPlexMono-SemiBold.ttf")),
  ]);
  return [
    { name: "PlexMono", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "PlexMono", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

/**
 * Shared OG card — the chart-field motif on a deep navy ground.
 * Used by the home page and every insights post.
 */
export async function ogCard(opts: { kicker: string; title: string; footer: string }) {
  const fonts = await loadOgFonts();
  const titleSize = opts.title.length > 55 ? 52 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#0a1b2e",
          padding: 56,
          fontFamily: "PlexMono",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            border: "1.5px solid rgba(247,249,250,0.22)",
            borderRadius: 18,
            padding: "64px 60px 48px",
          }}
        >
          {/* Field label chip sitting on the border — the site's signature motif */}
          <div
            style={{
              position: "absolute",
              top: -17,
              left: 44,
              display: "flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "#0a1b2e",
              padding: "0 16px",
              fontSize: 22,
              letterSpacing: 4,
              color: "#5ec8b4",
              fontWeight: 600,
            }}
          >
            {opts.kicker.toUpperCase()}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 600,
              color: "#f7f9fa",
              lineHeight: 1.18,
              letterSpacing: -1,
              maxWidth: 1000,
            }}
          >
            {opts.title}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderTop: "1.5px dashed rgba(247,249,250,0.25)",
              paddingTop: 28,
              fontSize: 24,
              color: "#9fb3c8",
            }}
          >
            <div style={{ display: "flex", maxWidth: 860, whiteSpace: "nowrap", overflow: "hidden" }}>
              {opts.footer}
            </div>
            <div style={{ display: "flex", flexShrink: 0, color: "#5ec8b4", whiteSpace: "nowrap" }}>
              S · O · A · P
            </div>
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts },
  );
}
