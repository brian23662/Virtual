import Link from "next/link";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export default function Home() {
  return (
    <>
      {/* HERO — full-bleed video background with overlay headline. Pulled up under the
          transparent header via negative margin so the video shows behind it. */}
      <section className="relative overflow-hidden -mt-24">
        {/* Video background layer */}
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/hero.mp4"
            poster="/videos/hero_poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for text legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-plum-deep/95 via-plum-deep/85 to-plum-deep/55"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-plum-deep/30"
            aria-hidden="true"
          />
        </div>

        {/* "Captioned" badge — confirms the video is captioned even in autoplay-muted hero use */}
        <div className="absolute bottom-32 lg:bottom-40 right-6 z-20 flex items-center gap-2 bg-bone/15 backdrop-blur-md border border-bone/20 text-bone px-3 py-1.5 rounded-full text-xs font-semibold">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
          </svg>
          Captioned video
        </div>

        <div className="container-x relative z-10 pt-44 pb-32 lg:pt-56 lg:pb-44">
          <div className="max-w-3xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-200 mb-6">
              Trusted since 2009
            </p>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-bone leading-[1.0] tracking-tighter">
              Real interpreters.
              <br />
              <span className="italic text-teal-200">Real moments.</span>
            </h1>
            <p className="mt-8 text-xl lg:text-2xl text-bone/85 leading-relaxed max-w-2xl font-light">
              Nationally RID-certified ASL, trilingual, and 175+ foreign-language
              interpreters — pre-scheduled or on-demand. HIPAA-compliant video. No two-hour
              minimums.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/request-quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal px-7 py-4 text-white font-medium tracking-wide transition-all duration-300 hover:bg-teal-600 hover:shadow-2xl hover:-translate-y-0.5"
              >
                Request a Free Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/services/on-demand"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-bone/10 backdrop-blur-md border border-bone/30 px-7 py-4 text-bone font-medium tracking-wide hover:bg-bone/20 transition-all duration-300"
              >
                See On-Demand Service
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip at the bottom of the hero, on a tinted band */}
        <div className="relative z-10 bg-plum-deep/60 backdrop-blur-md border-t border-bone/10">
          <div className="container-x py-7">
            <dl className="grid grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center sm:text-left">
                <dt className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-teal-200 mb-1">Founded</dt>
                <dd className="font-display text-2xl sm:text-4xl text-bone">2009</dd>
              </div>
              <div className="text-center sm:text-left border-l border-bone/15 pl-4 sm:pl-8">
                <dt className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-teal-200 mb-1">Languages</dt>
                <dd className="font-display text-2xl sm:text-4xl text-bone">175+</dd>
              </div>
              <div className="text-center sm:text-left border-l border-bone/15 pl-4 sm:pl-8">
                <dt className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-teal-200 mb-1">Certified</dt>
                <dd className="font-display text-2xl sm:text-4xl text-bone">100%</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-16">
            <p className="eyebrow mb-4">What we do</p>
            <h2 className="font-display text-4xl sm:text-5xl text-plum-deep tracking-tight">
              Real-time access for every conversation that matters.
            </h2>
            <p className="mt-5 text-lg text-ink/75 leading-relaxed">
              Whether it's a doctor's appointment, a college lecture, a courtroom, or a Tuesday
              staff meeting — we connect you with the right interpreter for the moment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ASL Interpretation",
                desc: "Nationally RID-certified ASL, PSE, and SEE interpreters with deep expertise in medical, legal, and educational settings.",
                href: "/services/asl",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                ),
              },
              {
                title: "CART & TypeWell",
                desc: "Live remote transcription for classes, conferences, and meetings — every word captured and displayed in real time.",
                href: "/services/transcription",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                ),
              },
              {
                title: "Foreign Language",
                desc: "Spoken-language and trilingual sign interpreting — from Spanish and Mandarin to Bolivian, Mexican, and Japanese Sign Language.",
                href: "/services/foreign-language",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                ),
              },
              {
                title: "On-Demand Service",
                desc: "Last-minute appointments, no waiting time. Available outside business hours for ASL plus 175+ spoken languages.",
                href: "/services/on-demand",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
              },
              {
                title: "Document Translation",
                desc: "Written translation of forms, manuals, and educational materials — paired with the same interpreter team for consistency.",
                href: "/request-quote",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                ),
              },
              {
                title: "Post-Production Captioning",
                desc: "Accurate, accessible captions for recorded videos, training content, and webinars — delivered fast.",
                href: "/services/transcription#captioning",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                ),
              },
            ].map((s) => (
              <Link key={s.title} href={s.href} className="card p-7 group">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-plum-deep mb-3 leading-tight">{s.title}</h3>
                <p className="text-ink/70 text-[15px] leading-relaxed mb-5">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-600 group-hover:gap-3 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32 bg-plum-deep text-bone relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] orb-teal opacity-50" aria-hidden="true" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <p className="eyebrow text-teal-200 mb-4">How it works</p>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight text-bone leading-[1.1]">
                Three steps to a certified interpreter.
              </h2>
              <p className="mt-6 text-haze-light text-lg leading-relaxed">
                We work with whatever video platform you already use — Zoom, Teams, Webex, Doxy.me,
                Google Meet — or our HIPAA-compliant connection.
              </p>
              <Link href="/request-quote" className="mt-8 inline-flex btn-accent">
                Schedule your free demo
              </Link>
            </div>

            <ol className="lg:col-span-7 space-y-6">
              {[
                {
                  n: "01",
                  t: "Tell us what you need",
                  d: "Service type, date, time, language, appointment context. One clean form, no jargon.",
                },
                {
                  n: "02",
                  t: "We match the right interpreter",
                  d: "We pair you with a certified specialist who fits the subject matter and any preferences you've shared.",
                },
                {
                  n: "03",
                  t: "Connect on any platform",
                  d: "Join the meeting, our interpreter joins too. No software to install. No two-hour minimums to pay.",
                },
              ].map((step) => (
                <li
                  key={step.n}
                  className="bg-bone/5 backdrop-blur rounded-2xl p-7 border border-bone/10 hover:border-teal-200/30 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-display text-5xl text-teal-200 leading-none tabular-nums">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl text-bone mb-2">{step.t}</h3>
                      <p className="text-haze-light leading-relaxed">{step.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">From the people we serve</p>
            <h2 className="font-display text-4xl sm:text-5xl text-plum-deep tracking-tight">
              Care, respect, and a real human on the other side.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Linda is amazing! She is the very best — most professional, most reliable agency I have worked with in twenty years.",
                name: "DHH Advisor",
                role: "College Disability Services",
              },
              {
                quote:
                  "The interpreters are professional, easy to work with, and our deaf patients tell us they feel heard. That's everything.",
                name: "Billie G.",
                role: "Medical Office Manager",
              },
              {
                quote:
                  "I use Virtual VRI for my weekly staff meetings. Easy, convenient, and I never have to worry whether my interpreter will show up.",
                name: "Mike H.",
                role: "Electrical Engineer (Deaf)",
              },
            ].map((t) => (
              <figure key={t.name} className="card p-7 flex flex-col">
                <svg className="w-9 h-9 text-teal-200 mb-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C18.553 16.227 18 15 18 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                <blockquote className="font-display text-xl text-plum-deep leading-snug flex-1 italic">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-haze-light/40">
                  <p className="font-medium text-ink text-sm">{t.name}</p>
                  <p className="text-haze-deep text-xs mt-0.5">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-5">Ready when you are</p>
            <h2 className="font-display text-4xl sm:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
              Let's get the right interpreter on the call.
            </h2>
            <p className="mt-6 text-xl text-ink/75 leading-relaxed">
              Free demo. No commitment. Honest answers from real humans about whether we're the
              right fit for your organization.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/request-quote" className="btn-primary text-base">
                Request a Free Demo
              </Link>
              <a href="tel:8664409140" className="btn-secondary text-base">
                Call 866-440-9140
              </a>
            </div>
          </div>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
