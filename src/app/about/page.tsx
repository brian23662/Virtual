import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PlainLanguageButton } from "@/components/PlainLanguageButton";

export const metadata: Metadata = {
  title: "About Virtual VRI",
  description:
    "Founded in 2009 by Linda Sokol and Teresa Vonloh, Virtual VRI provides nationally certified video remote interpreting from Ormond Beach, Florida.",
};

const TEAM = [
  {
    name: "Linda Sokol",
    role: "Founder & Owner",
    photo: "/images/team/linda_headshot.jpg",
    bio: "Linda holds a degree in Sign Language Interpreting and has worked full-time as a freelance interpreter since 2000. She holds the Educational Interpreter K-12 certificate and the RID Certificates of Interpretation and Transliteration. She founded Virtual VRI in 2009 to bring high-quality remote interpreting to clients underserved by traditional in-person agencies.",
  },
  {
    name: "Melissa Deets",
    role: "Operations & Scheduling",
    photo: "/images/team/melissa.jpg",
    bio: "Melissa holds a Bachelor's in Human Development and Family Studies and a Master's in Reading and Writing Instruction. A former elementary school teacher, she has watched her mother build Virtual VRI for over a decade and now leads scheduling, operations, and customer relationships.",
  },
  {
    name: "Teresa Vonloh",
    role: "Co-founder & Advisor",
    photo: null as string | null,
    bio: "Teresa co-founded Virtual VRI with Linda in 2009. While she stepped down as co-owner in 2015, she remains an integral part of the team, providing instruction and advisory support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] orb-plum opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Our Story</p>
              <h1 className="font-display text-5xl lg:text-6xl text-plum-deep tracking-tighter leading-[1.05]">
                Communication is a basic human need.
              </h1>
              <p className="mt-6 text-xl text-ink/80 leading-relaxed">
                Virtual VRI is proud to be an integral link between the Deaf and hearing worlds, and
                between English speakers and the 25 million Americans who speak another language at
                home. We've been doing this since 2009 — and we plan to keep doing it well.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/team/linda_workspace.jpg"
                  alt="Linda Sokol, founder of Virtual VRI, at her workstation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-5 bg-bone rounded-xl shadow-xl px-5 py-3 border border-haze-light/40">
                <p className="text-xs uppercase tracking-[0.18em] text-haze-deep">Founder & Owner</p>
                <p className="font-display text-lg text-plum-deep leading-tight mt-0.5">Linda Sokol</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <p className="eyebrow mb-4">Mission</p>
              <h2 className="font-display text-4xl text-plum-deep tracking-tight mb-5 leading-tight">
                Reasonably priced. Exceptionally skilled. Personable.
              </h2>
              <p className="text-lg text-ink/80 leading-relaxed mb-5">
                Our mission is to provide the Deaf community and Limited English Proficient
                individuals with some of the most reasonably priced, exceptionally skilled, and
                personable interpreters available — and to make sure every interaction works for
                everyone involved.
              </p>
              <p className="text-lg text-ink/80 leading-relaxed">
                We work only with nationally certified interpreters. We never charge two-hour
                minimums or travel fees. And we treat every client — whether they're a hospital
                chain or a one-person clinic — with the same care and respect.
              </p>
            </div>

            <div>
              <p className="eyebrow mb-4">Founder's Note</p>
              <blockquote className="font-display text-2xl text-plum-deep italic leading-snug">
                "Linda is amazing. She is the very best — most professional, most reliable agency I
                have worked with in twenty years."
              </blockquote>
              <p className="mt-4 text-sm text-haze-deep">— DHH Advisor, College Disability Services</p>

              <div className="mt-10 pt-10 border-t border-haze-light/40">
                <h3 className="font-display text-2xl text-plum-deep mb-4">Where we are</h3>
                <p className="text-ink/80 leading-relaxed">
                  Virtual VRI is based in Ormond Beach, Florida. Our interpreters work from across
                  the United States, allowing us to serve clients in any time zone, in cities and
                  rural areas alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="container-x">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Meet the team</p>
            <h2 className="font-display text-4xl lg:text-5xl text-plum-deep tracking-tight">
              Real people. No call center.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {TEAM.map((person) => (
              <article key={person.name} className="card overflow-hidden group">
                <div className="relative aspect-[4/5] bg-gradient-to-br from-plum-100 to-haze-light overflow-hidden">
                  {person.photo ? (
                    <Image
                      src={person.photo}
                      alt={`${person.name}, ${person.role} at Virtual VRI`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-display text-7xl text-plum-deep/40">
                      {person.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-plum-deep">{person.name}</h3>
                  <p className="text-sm text-teal-600 font-medium mb-4">{person.role}</p>
                  <p className="text-ink/75 text-[15px] leading-relaxed">{person.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-display text-4xl lg:text-5xl text-plum-deep tracking-tight">
            Ready to see it in action?
          </h2>
          <p className="mt-5 text-lg text-ink/75">
            Every new client gets a free demo. It's the best way to see how we work and ask anything
            you want to ask.
          </p>
          <Link href="/request-quote" className="mt-8 inline-flex btn-primary">
            Schedule a free demo
          </Link>
        </div>
      </section>

      <PlainLanguageButton />
    </>
  );
}
