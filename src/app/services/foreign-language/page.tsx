import Link from "next/link";
import type { Metadata } from "next";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export const metadata: Metadata = {
  title: "Foreign Language &amp; Trilingual Interpreting",
  description:
    "Spoken-language interpreting in 175+ languages, plus trilingual ASL interpreters fluent in Spanish, Bolivian Sign Language, Mexican Sign Language, and more.",
};

const SPOKEN = [
  "Spanish", "Mandarin", "Cantonese", "Vietnamese", "Arabic", "Russian",
  "Tagalog", "Korean", "Haitian Creole", "Portuguese", "French", "Polish",
  "Japanese", "Hindi", "Punjabi", "Farsi", "Urdu", "Burmese", "Somali", "Amharic",
];

const SIGN = [
  "Mexican Sign Language (LSM)",
  "Bolivian Sign Language",
  "Spanish Sign Language (LSE)",
  "Japanese Sign Language",
  "French Sign Language (LSF)",
  "International Sign",
];

export default function ForeignLanguagePage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] orb-teal opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">Foreign Language &amp; Trilingual</p>
            <h1 className="font-display text-5xl lg:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
              Beyond English &amp; ASL.
            </h1>
            <p className="mt-6 text-xl text-ink/80 leading-relaxed">
              Many of our clients prefer to keep one trusted agency for all their language access
              needs. We provide spoken-language interpreting in 175+ languages plus trilingual ASL
              interpreters fluent in Spanish and other foreign sign languages.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="btn-primary">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="card p-8 lg:p-10">
              <p className="eyebrow mb-3">Spoken Languages</p>
              <h2 className="font-display text-3xl text-plum-deep mb-5">175+ languages on demand.</h2>
              <p className="text-ink/75 leading-relaxed mb-6">
                For LEP (Limited English Proficient) patients, students, and clients. Most spoken
                languages available for on-demand connection.
              </p>
              <div className="flex flex-wrap gap-2">
                {SPOKEN.map((l) => (
                  <span key={l} className="px-3 py-1.5 bg-plum/5 text-plum text-sm rounded-full font-medium">
                    {l}
                  </span>
                ))}
                <span className="px-3 py-1.5 bg-teal-100 text-teal-700 text-sm rounded-full font-medium">
                  + 155 more
                </span>
              </div>
            </div>

            <div className="card p-8 lg:p-10">
              <p className="eyebrow mb-3">Foreign Sign Languages</p>
              <h2 className="font-display text-3xl text-plum-deep mb-5">Sign languages from around the world.</h2>
              <p className="text-ink/75 leading-relaxed mb-6">
                For Deaf clients whose primary sign language isn't ASL. Many of our trilingual
                interpreters bridge English, Spanish, ASL, and a foreign sign language.
              </p>
              <ul className="space-y-2">
                {SIGN.map((l) => (
                  <li key={l} className="flex items-center gap-3 text-ink/85 text-[15px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
