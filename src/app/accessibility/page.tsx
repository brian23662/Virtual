import type { Metadata } from "next";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Virtual VRI's commitment to digital accessibility, our WCAG 2.2 AA conformance posture, and how to reach us about accessibility issues.",
};

export default function AccessibilityPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">Accessibility Statement</p>
          <h1 className="font-display text-5xl lg:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
            Accessibility is the work, not an afterthought.
          </h1>
          <p className="mt-6 text-xl text-ink/80 leading-relaxed">
            Virtual VRI exists to make communication accessible. It would be hypocritical for our
            own website not to live up to that standard, so we don't take this lightly.
          </p>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="container-x max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl text-plum-deep tracking-tight mt-0">Our commitment</h2>
            <p className="text-ink/80 leading-relaxed">
              We are committed to providing a website that is accessible to the widest possible
              audience, regardless of technology or ability. We aim to conform with the{" "}
              <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong>, the
              standard for digital accessibility worldwide.
            </p>

            <h2 className="font-display text-3xl text-plum-deep tracking-tight mt-12">What we've done</h2>
            <ul className="space-y-3 text-ink/80">
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Semantic HTML throughout, with proper heading hierarchy and landmark regions.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Keyboard-accessible navigation with visible focus indicators throughout.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Skip-to-content link, descriptive link text, and ARIA where appropriate.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Captions on every video, displayed by default with a visible toggle.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>Color contrast that meets WCAG AA across all text and interactive elements.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>An on-page <strong>plain-language helper</strong> that rewrites any page in friendly, simple English — for users with cognitive disabilities, ESL/LEP visitors, and anyone who prefers it.</span>
              </li>
              <li className="flex gap-3">
                <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span>No CAPTCHAs that fail accessibility tests. No autoplaying media. No flashing content.</span>
              </li>
            </ul>

            <h2 className="font-display text-3xl text-plum-deep tracking-tight mt-12">What we're still working on</h2>
            <p className="text-ink/80 leading-relaxed">
              No website is ever fully done with accessibility. We continuously test, find issues,
              and fix them. Areas we are actively improving: third-party form components, advanced
              ARIA patterns on interactive widgets, and adding sign-language summaries to key
              service pages.
            </p>

            <div className="not-prose bg-plum/5 rounded-2xl p-7 border border-plum/15 mt-12">
              <h2 className="font-display text-2xl text-plum-deep tracking-tight mb-3">Found an issue?</h2>
              <p className="text-ink/80 leading-relaxed mb-4">
                We genuinely want to hear about it. If something on this site doesn't work for you,
                please tell us — we'll fix it and follow up to make sure it's resolved for you
                personally.
              </p>
              <p className="text-ink/80 leading-relaxed">
                Email us at{" "}
                <a href="mailto:accessibility@virtualvri.com" className="font-semibold text-plum underline">
                  accessibility@virtualvri.com
                </a>{" "}
                or call{" "}
                <a href="tel:8664409140" className="font-semibold text-plum underline">
                  866-440-9140
                </a>
                . We aim to respond within one business day.
              </p>
            </div>

            <p className="text-sm text-haze-deep mt-12">
              Last reviewed: April 2026. This statement covers the virtualvri.com website. Our
              interpreting and transcription services are governed by separate accessibility and
              compliance policies, available on request.
            </p>
          </div>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
