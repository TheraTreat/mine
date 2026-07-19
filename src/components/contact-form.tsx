"use client";

import { useState } from "react";
import type { FormEvent } from "react";

import { site } from "@content/site";

const inputClass =
  "mt-2 w-full rounded-[6px] border border-line bg-panel px-3.5 py-2.5 text-[15px] text-ink placeholder:text-note/60 focus:border-scrub-ink";

/**
 * v1 is deliberately backend-free: submitting composes an email in the
 * visitor's own mail app via mailto:. Nothing is stored or sent from here.
 */
export function ContactForm() {
  const topics = site.respondsTo.map((r) => r.label);
  const [topic, setTopic] = useState<string>(topics[0]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[${topic}] ${name || "Website enquiry"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name || "(name not given)"}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="contact-topic" className="chart-label">
          Topic
        </label>
        <select
          id="contact-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClass}
        >
          {topics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-name" className="chart-label">
          Your name
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dr. A. Deshpande"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="chart-label">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Two or three sentences is plenty to start."
          className={`${inputClass} resize-y`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-[6px] bg-scrub-ink px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-deep"
      >
        Compose email
      </button>
      <p className="mt-3 text-[13px] leading-relaxed text-note">
        This opens your own email app with the message pre-filled — nothing is stored on this site.
        Prefer it direct? Write to{" "}
        <a href={`mailto:${site.email}`} className="dotted-link font-medium">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}
