import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-24 lg:py-40">
      <div className="container-x max-w-2xl text-center">
        <p className="font-display text-9xl text-teal-200 tracking-tighter">404</p>
        <h1 className="font-display text-4xl lg:text-5xl text-plum-deep tracking-tight mt-4">
          That page took a different route.
        </h1>
        <p className="mt-5 text-lg text-ink/75">
          The page you're looking for doesn't exist or has moved. The pages below are the most
          common things people are looking for.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Back to home</Link>
          <Link href="/services/asl" className="btn-secondary">ASL services</Link>
          <Link href="/request-quote" className="btn-secondary">Request a quote</Link>
        </div>
      </div>
    </section>
  );
}
