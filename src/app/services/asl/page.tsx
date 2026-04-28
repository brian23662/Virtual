import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export const metadata: Metadata = {
  title: "ASL Interpretation Services",
  description:
    "Nationally RID-certified ASL interpreters for medical, educational, legal, and business settings. HIPAA-compliant remote video. No two-hour minimums.",
};

interface Interpreter {
  name: string;
  initials: string;
  photo?: string;
  cert: string;
  langs: string;
  years: number;
  specialties: string[];
}

const INTERPRETERS: Interpreter[] = [
  { name: "Lisa Garcia",     initials: "LG",                                     cert: "RID NIC Master",                       langs: "ASL · Spanish",                  years: 15, specialties: ["Medical", "Mental Health", "Education"] },
  { name: "Brandon Dockery", initials: "BD", photo: "/images/team/brandon.jpg",  cert: "RID NIC Master",                       langs: "ASL · Spanish · Bolivian SL",    years: 19, specialties: ["Technical", "Engineering", "Education"] },
  { name: "Nichole Rodriguez", initials: "NR", photo: "/images/team/nichole.jpg", cert: "BEI Master",                          langs: "ASL",                            years: 12, specialties: ["Healthcare", "Mental Health"] },
  { name: "Carmen Saunders", initials: "CS",                                     cert: "EIPA Certified",                       langs: "ASL · Spanish · Tactile",        years: 18, specialties: ["Government", "Medical", "K-12"] },
  { name: "Teresa Vonloh",   initials: "TV",                                     cert: "Deaf C.E.R.T. Instructor",             langs: "ASL",                            years: 22, specialties: ["Conferences", "Public Events"] },
  { name: "James Smith",     initials: "JS",                                     cert: "RID Certified · WA Court Certified",   langs: "ASL",                            years: 16, specialties: ["Legal", "Court", "Depositions"] },
];

export default function ASLPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] orb-teal opacity-60" aria-hidden="true" />

        <div className="container-x relative">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">ASL Interpretation</p>
            <h1 className="font-display text-5xl lg:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
              The right interpreter for the moment that matters.
            </h1>
            <p className="mt-6 text-xl text-ink/80 leading-relaxed">
              All Virtual VRI ASL interpreters are nationally RID-certified with deep experience in
              ASL, PSE, and SEE. We match you with someone who specializes in your subject matter —
              medical, legal, technical, educational, or whatever your moment requires.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-quote" className="btn-primary">Request a Free Demo</Link>
              <Link href="/services/on-demand" className="btn-secondary">See On-Demand Service</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two service tiers */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="card p-8 lg:p-10">
              <p className="eyebrow mb-3">Pre-Scheduled</p>
              <h2 className="font-display text-3xl text-plum-deep mb-4">Reserve in advance.</h2>
              <p className="text-ink/75 leading-relaxed mb-6">
                Recurring appointments, weekly meetings, scheduled medical visits, classroom lectures —
                we'll match you with a consistent interpreter who knows your context.
              </p>
              <ul className="space-y-3">
                {[
                  "Pair with a subject-matter specialist",
                  "Build a relationship with preferred interpreters",
                  "Ideal for ongoing or recurring needs",
                  "Most reasonable hourly rates in the industry",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink/85 text-[15px]">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8 lg:p-10 bg-gradient-to-br from-plum to-plum-deep text-bone border-plum-deep">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 mb-3">On-Demand</p>
              <h2 className="font-display text-3xl text-bone mb-4">Connect in seconds.</h2>
              <p className="text-haze-light leading-relaxed mb-6">
                Last-minute appointments, ER admissions, walk-in clients, urgent business meetings.
                No advance booking, no scheduling overhead.
              </p>
              <ul className="space-y-3">
                {[
                  "Available outside business hours",
                  "ASL plus 175+ spoken languages",
                  "No two-hour minimums",
                  "Average connect time under 60 seconds",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-bone text-[15px]">
                    <svg className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/on-demand" className="mt-7 inline-flex items-center gap-2 text-teal-200 hover:text-bone font-medium transition-colors">
                See how on-demand works
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interpreters grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Meet our interpreters</p>
            <h2 className="font-display text-4xl lg:text-5xl text-plum-deep tracking-tight">
              Real people. Real credentials. Real experience.
            </h2>
            <p className="mt-5 text-lg text-ink/75">
              Every interpreter on our team holds national certification. Below is a sample — your
              account manager will match you with the right person for your context.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INTERPRETERS.map((i) => (
              <div key={i.name} className="card p-6">
                <div className="flex items-center gap-4 mb-4">
                  {i.photo ? (
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-teal-100">
                      <Image
                        src={i.photo}
                        alt={`${i.name}, ${i.cert}`}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-200 to-teal-500 flex items-center justify-center font-display font-bold text-plum-deep text-lg flex-shrink-0">
                      {i.initials}
                    </div>
                  )}
                  <div>
                    <h3 className="font-display text-lg text-plum-deep leading-tight">{i.name}</h3>
                    <p className="text-xs text-haze-deep mt-0.5">{i.years} years experience</p>
                  </div>
                </div>
                <p className="text-sm font-medium text-teal-600 mb-1">{i.cert}</p>
                <p className="text-sm text-ink/75 mb-4">{i.langs}</p>
                <div className="flex flex-wrap gap-1.5">
                  {i.specialties.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 bg-plum/5 text-plum rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIPAA / compliance */}
      <section className="py-20 lg:py-28">
        <div className="container-x max-w-4xl">
          <div className="card p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 orb-plum opacity-50" aria-hidden="true" />
            <div className="relative">
              <p className="eyebrow mb-4">Compliance</p>
              <h2 className="font-display text-3xl lg:text-4xl text-plum-deep tracking-tight mb-5">
                HIPAA-compliant. ADA-aligned. Section 508-aware.
              </h2>
              <p className="text-lg text-ink/75 leading-relaxed mb-8">
                Healthcare and government clients depend on us for secure video and a documented
                compliance posture. We use encrypted, HIPAA-compliant connections, and we sign BAAs
                where required.
              </p>
              <Link href="/request-quote" className="btn-primary">
                Request our compliance overview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
