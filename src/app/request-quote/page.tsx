"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  "ASL Interpretation",
  "Trilingual Interpretation",
  "Foreign Language Interpretation",
  "CART / TypeWell Transcription",
  "Post-Production Captioning",
  "Document Translation",
  "Other / Not sure yet",
];

const APPOINTMENT_TYPES = [
  "Medical",
  "Educational (K-12)",
  "Educational (Post-secondary)",
  "Legal",
  "Business / Meeting",
  "HR / Employment",
  "Mental Health",
  "Government",
  "Other",
];

const VIDEO_PLATFORMS = [
  "Zoom",
  "Microsoft Teams",
  "Google Meet",
  "Webex",
  "Doxy.me",
  "GoToMeeting",
  "Other",
  "Not sure — please advise",
];

// Generate proper time options — fixing the original site's "15:00 PM" bug
function makeTimeOptions(): string[] {
  const out: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (const m of [0, 15, 30, 45]) {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const meridiem = h < 12 ? "AM" : "PM";
      out.push(`${hour12}:${m.toString().padStart(2, "0")} ${meridiem}`);
    }
  }
  return out;
}

const TIME_OPTIONS = makeTimeOptions();

type FormState = {
  step: 1 | 2 | 3;
  service: string;
  appointmentType: string;
  date: string;
  time: string;
  duration: string;
  videoPlatform: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  details: string;
  website: string; // honeypot
};

export default function RequestQuotePage() {
  const [form, setForm] = useState<FormState>({
    step: 1,
    service: "",
    appointmentType: "",
    date: "",
    time: "",
    duration: "",
    videoPlatform: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
    details: "",
    website: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const next = () => set("step", Math.min(3, form.step + 1) as 1 | 2 | 3);
  const back = () => set("step", Math.max(1, form.step - 1) as 1 | 2 | 3);

  const stepValid =
    (form.step === 1 && form.service !== "") ||
    (form.step === 2 && true) ||
    (form.step === 3 && form.name && form.email && form.details);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stepValid) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setSuccess(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <section className="py-24 lg:py-32">
        <div className="container-x max-w-2xl text-center">
          <div className="w-20 h-20 rounded-full bg-teal-50 mx-auto mb-8 flex items-center justify-center">
            <svg className="w-10 h-10 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="eyebrow mb-4">Request received</p>
          <h1 className="font-display text-4xl sm:text-5xl text-plum-deep tracking-tight">
            Thank you — we'll be in touch shortly.
          </h1>
          <p className="mt-6 text-lg text-ink/75 leading-relaxed">
            We received your request and you'll see a confirmation in your inbox in a moment. A real
            human from our team will respond within 2 business hours.
          </p>
          <p className="mt-3 text-ink/75">
            If your need is urgent, please call us at{" "}
            <a href="tel:8664409140" className="font-semibold text-plum underline">
              866-440-9140
            </a>
            .
          </p>
          <Link href="/" className="btn-secondary mt-10 inline-flex">
            Back to home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20">
      <div className="container-x max-w-3xl">
        <div className="mb-12">
          <p className="eyebrow mb-4">Request a free demo</p>
          <h1 className="font-display text-4xl sm:text-5xl text-plum-deep tracking-tight leading-tight">
            Tell us what you need.
          </h1>
          <p className="mt-5 text-lg text-ink/75 leading-relaxed">
            Three short steps. We'll respond within 2 business hours with a real human reply — no
            sales bots.
          </p>
        </div>

        {/* Step indicator */}
        <ol className="flex items-center gap-3 mb-10" aria-label="Progress">
          {[1, 2, 3].map((s) => (
            <li key={s} className="flex items-center gap-3 flex-1">
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center font-display font-semibold text-sm transition-all ${
                  s < form.step
                    ? "bg-teal text-white"
                    : s === form.step
                      ? "bg-plum text-bone ring-4 ring-plum/15"
                      : "bg-haze-light/60 text-haze-deep"
                }`}
                aria-current={s === form.step ? "step" : undefined}
              >
                {s < form.step ? (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                ) : (
                  s
                )}
              </span>
              {s < 3 && (
                <span
                  className={`flex-1 h-px transition-colors ${
                    s < form.step ? "bg-teal" : "bg-haze-light"
                  }`}
                />
              )}
            </li>
          ))}
        </ol>

        <form onSubmit={submit} className="bg-white rounded-3xl p-7 sm:p-10 shadow-sm border border-haze-light/40">
          {/* Honeypot */}
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => set("website", e.target.value)}
            className="hidden"
            aria-hidden="true"
          />

          {form.step === 1 && (
            <div className="space-y-7 animate-fade-up">
              <div>
                <h2 className="font-display text-2xl text-plum-deep mb-1">What service do you need?</h2>
                <p className="text-sm text-haze-deep">Pick the one closest to your situation — we'll figure out the rest together.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => (
                  <label
                    key={s}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.service === s
                        ? "border-teal bg-teal-50"
                        : "border-haze-light/60 hover:border-plum/40"
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      value={s}
                      checked={form.service === s}
                      onChange={(e) => set("service", e.target.value)}
                      className="sr-only"
                    />
                    <span
                      className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                        form.service === s ? "border-teal" : "border-haze-light"
                      }`}
                    >
                      {form.service === s && <span className="w-2.5 h-2.5 rounded-full bg-teal" />}
                    </span>
                    <span className="text-sm font-medium text-ink">{s}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {form.step === 2 && (
            <div className="space-y-6 animate-fade-up">
              <div>
                <h2 className="font-display text-2xl text-plum-deep mb-1">When and where?</h2>
                <p className="text-sm text-haze-deep">Skip anything you don't have yet — we can sort details together.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Appointment type">
                  <select
                    value={form.appointmentType}
                    onChange={(e) => set("appointmentType", e.target.value)}
                    className="form-input"
                  >
                    <option value="">— Select —</option>
                    {APPOINTMENT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Video platform">
                  <select
                    value={form.videoPlatform}
                    onChange={(e) => set("videoPlatform", e.target.value)}
                    className="form-input"
                  >
                    <option value="">— Select —</option>
                    {VIDEO_PLATFORMS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </Field>
                <Field label="Date">
                  <input type="date" value={form.date} onChange={(e) => set("date", e.target.value)} className="form-input" />
                </Field>
                <Field label="Time">
                  <select value={form.time} onChange={(e) => set("time", e.target.value)} className="form-input">
                    <option value="">— Select —</option>
                    {TIME_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
                <Field label="Duration">
                  <select value={form.duration} onChange={(e) => set("duration", e.target.value)} className="form-input">
                    <option value="">— Select —</option>
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>1.5 hours</option>
                    <option>2 hours</option>
                    <option>Half day (4 hours)</option>
                    <option>Full day (8 hours)</option>
                    <option>Multiple sessions / recurring</option>
                  </select>
                </Field>
              </div>
            </div>
          )}

          {form.step === 3 && (
            <div className="space-y-6 animate-fade-up">
              <div>
                <h2 className="font-display text-2xl text-plum-deep mb-1">How can we reach you?</h2>
                <p className="text-sm text-haze-deep">A real person from our team will reply within 2 business hours.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your name *">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className="form-input"
                    autoComplete="name"
                  />
                </Field>
                <Field label="Email *">
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className="form-input"
                    autoComplete="email"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    className="form-input"
                    autoComplete="tel"
                  />
                </Field>
                <Field label="Organization">
                  <input
                    type="text"
                    value={form.organization}
                    onChange={(e) => set("organization", e.target.value)}
                    className="form-input"
                    autoComplete="organization"
                  />
                </Field>
              </div>
              <Field label="Anything else we should know? *">
                <textarea
                  required
                  rows={5}
                  value={form.details}
                  onChange={(e) => set("details", e.target.value)}
                  className="form-input"
                  placeholder="Subject matter, special requirements, budget, timing, etc."
                />
              </Field>

              {error && (
                <div className="p-4 rounded-xl bg-plum/10 border border-plum/20 text-plum-deep text-sm">
                  {error}
                </div>
              )}
            </div>
          )}

          {/* Buttons */}
          <div className="flex items-center justify-between pt-8 mt-8 border-t border-haze-light/40">
            {form.step > 1 ? (
              <button
                type="button"
                onClick={back}
                className="text-sm font-medium text-haze-deep hover:text-plum transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back
              </button>
            ) : (
              <span />
            )}
            {form.step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={!stepValid}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                Continue
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting || !stepValid}
                className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {submitting ? "Sending..." : "Send my request"}
              </button>
            )}
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-haze-deep">
          Prefer to talk? Call us at{" "}
          <a href="tel:8664409140" className="font-semibold text-plum underline">
            866-440-9140
          </a>
        </p>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background: white;
          border: 1.5px solid rgba(191, 188, 196, 0.6);
          border-radius: 12px;
          padding: 12px 16px;
          font-size: 15px;
          color: #252b2c;
          transition: all 0.2s;
        }
        .form-input:focus {
          outline: none;
          border-color: #14accc;
          box-shadow: 0 0 0 3px rgba(20, 172, 204, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-[0.1em] text-haze-deep mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
