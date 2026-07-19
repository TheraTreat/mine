import { PageHeader } from "@/components/chart";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/meta";
import { INSIGHT_TAGS, insights } from "@content/insights";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Notes on clinical AI, rehab in India, and building TheraTreat — written from the clinic floor by Dr. Yogesh Shingane.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
      <PageHeader
        letter="Rx"
        accent="scrub"
        label="Prescribed reading — Insights"
        title="Insights"
        lede="Notes on clinical AI, rehab in India, building TheraTreat, and the writing life. Written from practice, not from a content calendar."
      >
        <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Categories">
          {INSIGHT_TAGS.map((tag) => (
            <li
              key={tag}
              className="rounded-[4px] border border-line bg-panel px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] text-note uppercase"
            >
              {tag}
            </li>
          ))}
        </ul>
      </PageHeader>

      <div className="max-w-3xl divide-y divide-line border-t border-line pb-24">
        {insights.map((post, i) => (
          <Reveal key={post.slug} delay={Math.min(i * 0.05, 0.2)}>
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
