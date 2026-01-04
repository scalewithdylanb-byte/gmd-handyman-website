export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-10">
        <section className="space-y-6 text-center">
          <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
            Reliable handyman services in the GMD area
          </span>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Quality repairs, upgrades, and maintenance for your home
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              From small fixes to larger projects, GMD Handyman Services delivers
              prompt, trustworthy work backed by clear communication and fair
              pricing.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a className="btn btn-primary" href="mailto:hello@gmdhandyman.com">
              Get a free quote
            </a>
            <a className="btn btn-secondary" href="tel:+18005551234">
              Call (800) 555-1234
            </a>
          </div>
        </section>

        <section className="grid gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200 md:grid-cols-3">
          {["Repairs", "Installations", "Maintenance"].map((category) => (
            <div key={category} className="space-y-2">
              <h2 className="text-2xl font-semibold text-neutral-900">{category}</h2>
              <p className="text-neutral-700">
                Expert help with everyday household needs—no job too small. We
                show up on time, respect your home, and get the details right.
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
