import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-plum-deep text-bone mt-24">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand block */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5" aria-label="Virtual VRI">
              <div className="bg-bone rounded-lg p-2">
                <Image src="/images/logo.png" alt="Virtual VRI" width={140} height={114} className="h-14 w-auto" />
              </div>
            </Link>
            <p className="text-sm text-haze-light leading-relaxed mb-6">
              Connecting Deaf, Hard of Hearing, and Limited English Proficiency individuals with
              certified interpreters since 2009.
            </p>
            <p className="text-xs text-haze-light/80">
              Ormond Beach, Florida<br />
              Serving the United States nationwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 mb-5">
              Services
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services/asl" className="hover:text-teal-200 transition-colors">ASL Interpretation</Link></li>
              <li><Link href="/services/transcription" className="hover:text-teal-200 transition-colors">CART & TypeWell</Link></li>
              <li><Link href="/services/foreign-language" className="hover:text-teal-200 transition-colors">Foreign Language</Link></li>
              <li><Link href="/services/on-demand" className="hover:text-teal-200 transition-colors">On-Demand Service</Link></li>
              <li><Link href="/services/transcription#captioning" className="hover:text-teal-200 transition-colors">Post-Production Captioning</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-teal-200 transition-colors">About Us</Link></li>
              <li><Link href="/about#team" className="hover:text-teal-200 transition-colors">Meet Our Team</Link></li>
              <li><Link href="/request-quote" className="hover:text-teal-200 transition-colors">Request a Quote</Link></li>
              <li><Link href="/accessibility" className="hover:text-teal-200 transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200 mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:8664409140" className="hover:text-teal-200 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  866-440-9140
                </a>
              </li>
              <li>
                <a href="mailto:info@virtualvri.com" className="hover:text-teal-200 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4 text-teal-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@virtualvri.com
                </a>
              </li>
              <li className="pt-2">
                <Link href="/request-quote" className="inline-flex items-center gap-2 text-teal-200 hover:text-bone transition-colors font-medium">
                  Get a free demo
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="mt-14 pt-10 border-t border-haze-light/15">
          <p className="text-xs uppercase tracking-[0.2em] text-haze-light mb-4 text-center">
            Certifications & Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-haze-light">
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal" />RID Certified Interpreters</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal" />HIPAA Compliant</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal" />ADA Title II & III</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal" />Section 508</span>
            <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-teal" />WCAG 2.2 AA</span>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-haze-light/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-haze-light">
          <p>© {new Date().getFullYear()} Virtual VRI, LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/accessibility" className="hover:text-teal-200 transition-colors">Accessibility Statement</Link>
            <Link href="#" className="hover:text-teal-200 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-teal-200 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
