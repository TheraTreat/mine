import { ButtonLink } from "@/components/buttons";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-28 md:px-8">
      <p className="chart-label">404 — Not on the chart</p>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight">
        This page isn&apos;t in the record.
      </h1>
      <p className="mt-3 max-w-xl leading-relaxed text-note">
        The URL may have changed, or it never existed. Nothing was lost — the index is one click
        away.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Back to the chart</ButtonLink>
        <ButtonLink href="/insights" variant="secondary">
          Read insights
        </ButtonLink>
      </div>
    </div>
  );
}
