import Link from "next/link";
import type { Metadata } from "next";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export const metadata: Metadata = {
  title: "CART, TypeWell & Captioning",
  description:
    "Live remote transcription with CART or TypeWell, plus accurate post-production captioning for recorded video. Every word, displayed in real time.",
};

export default function TranscriptionPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] orb-plum opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Transcription &amp; Captioning</p>
            <h1 className="font-display text-5xl lg:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
              Every word. <span className="italic text-teal-600">Captured in real time.</span>
            </h1>
            <p className="mt-6 text-xl text-ink/80 leading-relaxed">
              Live remote transcription for classrooms, conferences, and meetings — plus accurate
              post-production captioning for your recorded content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="btn-primary">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CART vs TypeWell */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="card p-8 lg:p-10">
              <p className="eyebrow mb-3">CART</p>
              <h2 className="font-display text-3xl text-plum-deep mb-4">Word-for-word.</h2>
              <p className="text-ink/75 leading-relaxed mb-5">
                Communication Access Realtime Translation. Every spoken word, transcribed verbatim
                and displayed live. Best when accuracy of every term matters — courtrooms, technical
                presentations, conferences with specialized vocabulary.
              </p>
              <ul className="space-y-2 text-[15px] text-ink/85">
                <li className="flex gap-2"><span className="text-teal-600">•</span> Verbatim accuracy</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Best for legal, technical, conferences</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Higher word-per-minute throughput</li>
              </ul>
            </div>

            <div className="card p-8 lg:p-10">
              <p className="eyebrow mb-3">TypeWell</p>
              <h2 className="font-display text-3xl text-plum-deep mb-4">Meaning-for-meaning.</h2>
              <p className="text-ink/75 leading-relaxed mb-5">
                Concept-based transcription that captures the full meaning while filtering filler.
                Easier to read in real time, especially for K–12 and college students who are
                processing information while reading.
              </p>
              <ul className="space-y-2 text-[15px] text-ink/85">
                <li className="flex gap-2"><span className="text-teal-600">•</span> Cleaner, easier to read live</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Best for classroom and lecture settings</li>
                <li className="flex gap-2"><span className="text-teal-600">•</span> Highly trained, certified transcribers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Captioning */}
      <section id="captioning" className="py-20 lg:py-28 bg-plum-deep text-bone relative overflow-hidden scroll-mt-24">
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] orb-teal opacity-40" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow text-teal-200 mb-4">Post-Production Captioning</p>
              <h2 className="font-display text-4xl lg:text-5xl text-bone tracking-tight leading-[1.1]">
                Accurate captions, fast turnaround.
              </h2>
              <p className="mt-6 text-haze-light text-lg leading-relaxed">
                Recorded webinars, training videos, marketing content, public events. We deliver
                accurate, accessibility-compliant captions in standard formats (SRT, VTT, SCC, plus
                burned-in) — usually within 24 to 48 hours.
              </p>
              <Link href="/request-quote" className="mt-8 btn-accent inline-flex">
                Get a captioning quote
              </Link>
            </div>

            <div className="bg-bone/5 backdrop-blur rounded-3xl p-7 border border-bone/10">
              <p className="text-xs uppercase tracking-[0.2em] text-teal-200 mb-4 font-semibold">Sample workflow</p>
              <ol className="space-y-4">
                {[
                  "Send us your video files (any format)",
                  "We transcribe with human-verified accuracy",
                  "Captions returned in your chosen format",
                  "Review, request edits, approve",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-teal-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-bone leading-snug pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
