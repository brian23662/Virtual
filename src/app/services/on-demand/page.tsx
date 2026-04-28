import Link from "next/link";
import type { Metadata } from "next";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export const metadata: Metadata = {
  title: "On-Demand Interpreting",
  description:
    "Connect with a certified ASL or foreign-language interpreter in under 60 seconds. No scheduling. No two-hour minimums. Available outside business hours for ASL plus 175+ spoken languages.",
};

export default function OnDemandPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] orb-teal" aria-hidden="true" />

        <div className="container-x relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eyebrow mb-4">On-Demand Service</p>
              <h1 className="font-display text-5xl lg:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
                A certified interpreter,{" "}
                <span className="italic text-teal-600">in under a minute.</span>
              </h1>
              <p className="mt-6 text-xl text-ink/80 leading-relaxed">
                For walk-in clients, ER admissions, urgent meetings, and the thousand other moments
                that don't wait for a calendar invite.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/request-quote" className="btn-primary">
                  Set up On-Demand access
                </Link>
                <a href="tel:8664409140" className="btn-secondary">
                  Call 866-440-9140
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-plum to-plum-deep rounded-3xl p-8 shadow-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-teal-300" />
                    <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-teal-300 animate-ping" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-teal-200 font-semibold">Live</span>
                </div>
                <p className="font-display text-3xl text-bone mb-2">Connecting...</p>
                <p className="text-haze-light text-sm">Matching you with a certified interpreter</p>
                <div className="mt-8 bg-bone/10 backdrop-blur rounded-2xl p-5 border border-bone/15">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-300 to-teal-500 flex items-center justify-center font-display font-bold text-plum-deep">
                      LM
                    </div>
                    <div>
                      <p className="text-bone font-medium">Lisa M.</p>
                      <p className="text-haze-light text-xs">RID NIC Master · ASL · Spanish</p>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="bg-bone/5 rounded-lg py-2">
                      <p className="text-teal-200 font-display text-lg leading-none">23s</p>
                      <p className="text-[10px] text-haze-light uppercase tracking-wider mt-1">Connect</p>
                    </div>
                    <div className="bg-bone/5 rounded-lg py-2">
                      <p className="text-teal-200 font-display text-lg leading-none">HD</p>
                      <p className="text-[10px] text-haze-light uppercase tracking-wider mt-1">Quality</p>
                    </div>
                    <div className="bg-bone/5 rounded-lg py-2">
                      <p className="text-teal-200 font-display text-lg leading-none">256</p>
                      <p className="text-[10px] text-haze-light uppercase tracking-wider mt-1">Encrypted</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it's for */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">When it makes sense</p>
            <h2 className="font-display text-4xl lg:text-5xl text-plum-deep tracking-tight">
              Not every conversation can be scheduled.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { t: "Emergency rooms", d: "An ER admission can't wait. We connect within seconds." },
              { t: "Urgent care & pharmacy", d: "Walk-in patients deserve real communication, not gestures." },
              { t: "Customer service desks", d: "When a Deaf customer arrives, you're already ready." },
              { t: "HR & legal incidents", d: "Investigations and conversations that can't be delayed." },
              { t: "Mental health crises", d: "Trained interpreters available outside business hours." },
              { t: "Government services", d: "DMV, social services, public agencies — accessibility on tap." },
            ].map((u) => (
              <div key={u.t} className="card p-7">
                <h3 className="font-display text-xl text-plum-deep mb-2">{u.t}</h3>
                <p className="text-ink/75 leading-relaxed">{u.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-plum-deep text-bone relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] orb-teal opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow text-teal-200 mb-4">How it works</p>
            <h2 className="font-display text-4xl lg:text-5xl text-bone tracking-tight">
              One link. One click. One interpreter.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { n: "01", t: "We set up your account", d: "Quick onboarding call, account credentials, language preferences, BAA where needed." },
              { n: "02", t: "You bookmark the connect link", d: "When you need help, click it. Choose ASL or your spoken language. No app to install." },
              { n: "03", t: "Interpreter joins instantly", d: "An available certified interpreter appears on screen, ready to help. Average under 60 seconds." },
            ].map((s) => (
              <div key={s.n} className="bg-bone/5 backdrop-blur rounded-2xl p-7 border border-bone/10">
                <span className="font-display text-5xl text-teal-200 leading-none tabular-nums block mb-4">{s.n}</span>
                <h3 className="font-display text-2xl mb-2 text-bone">{s.t}</h3>
                <p className="text-haze-light leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/request-quote" className="btn-accent">
              Set up On-Demand access
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="container-x max-w-3xl">
          <p className="eyebrow mb-4">Common questions</p>
          <h2 className="font-display text-4xl lg:text-5xl text-plum-deep tracking-tight mb-12">
            Things we hear all the time.
          </h2>

          <dl className="space-y-4">
            {[
              { q: "Is there a minimum commitment?", a: "No. We bill in 15-minute increments. No two-hour minimums, no surprise travel fees." },
              { q: "Which video platforms do you support?", a: "Zoom, Teams, Google Meet, Webex, Doxy.me, GoToMeeting, and our own HIPAA-compliant connection. If your platform isn't on the list, ask — we probably support it." },
              { q: "Are your interpreters US-based?", a: "Yes. All of our certified ASL interpreters are US-based and hold national certification." },
              { q: "Is the connection HIPAA-compliant?", a: "Yes. We use encrypted video and sign BAAs with healthcare clients." },
              { q: "What languages are available on-demand?", a: "ASL plus 175+ spoken languages including Spanish, Mandarin, Arabic, Vietnamese, Russian, Tagalog, Haitian Creole, and many more. Some sign languages (Spanish SL, Bolivian SL, Mexican SL) are available with brief advance notice." },
              { q: "How is on-demand priced?", a: "Per-minute pricing with a small monthly access fee for organizations. We'll work out the details on your demo call." },
            ].map((f) => (
              <details key={f.q} className="group bg-white rounded-xl border border-haze-light/40 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-plum/5 transition-colors">
                  <dt className="font-display text-lg text-plum-deep flex-1">{f.q}</dt>
                  <svg className="w-5 h-5 text-haze-deep transition-transform group-open:rotate-180 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </summary>
                <dd className="px-5 pb-5 text-ink/80 leading-relaxed">{f.a}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
