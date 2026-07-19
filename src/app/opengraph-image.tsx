import { OG_SIZE, ogCard } from "@/lib/og";
import { site } from "@content/site";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = `${site.name} — Occupational Therapist & Founder, TheraTreat`;

export default async function Image() {
  const domain = new URL(site.url).host;
  return ogCard({
    kicker: "Occupational Therapist · Founder · Author",
    title: site.name,
    footer: `${domain} — Founder, TheraTreat`,
  });
}
