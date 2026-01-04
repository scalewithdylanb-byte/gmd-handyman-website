import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const values = [
  {
    title: "Consistency you can trust",
    description:
      "On-time arrivals, clear scopes, and tidy workspaces so you always know what to expect.",
  },
  {
    title: "Quality-first workmanship",
    description:
      "Durable materials, careful measurements, and finishes that hold up long after the job is done.",
  },
  {
    title: "Respect for your home",
    description:
      "Protective coverings, shoe guards, and thorough cleanups—because reliable service should feel considerate.",
  },
];

const experienceHighlights = [
  {
    label: "Years of experience",
    detail: "15+",
    description:
      "Hands-on repairs, upgrades, and maintenance serving homeowners throughout GMD.",
  },
  {
    label: "Projects completed",
    detail: "1,200+",
    description: "From quick fixes to room refreshes with consistent communication and follow-through.",
  },
  {
    label: "Average response time",
    detail: "< 24 hrs",
    description: "Clear updates and scheduling so you’re never left wondering about next steps.",
  },
];

const serviceAreas = [
  "Downtown GMD and surrounding neighborhoods",
  "Northside and riverfront communities",
  "Suburban developments and new builds",
  "Historic districts needing careful touch-ups",
];

const storyImages = [
  {
    title: "Trusted local partner",
    caption: "Licensed, insured, and invested in keeping GMD homes running smoothly.",
    image:
      "https://images.unsplash.com/photo-1582719478248-1f57d30d78e4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Craftsmanship up close",
    caption: "Detail-driven finishes that blend seamlessly with your space.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-50">
      <Section
        title="Our story: a reliable neighbor for every project"
        description="GMD Handyman Services was built to give homeowners a dependable partner—someone who shows up, communicates clearly, and treats every job with care."
        className="gap-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-primary-100">
              Locally owned & invested
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              <span>Serving GMD homeowners</span>
            </div>
            <p className="text-lg text-neutral-700">
              What started as a one-person shop helping neighbors with stubborn doors and
              leaky faucets has grown into a full-service, licensed handyman team. We pair
              friendly communication with dependable workmanship so you can relax knowing
              your home is in capable hands.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Licensed & insured", "Transparent pricing", "Detailed cleanups", "Respectful in-home care"].map(
                (highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-3 rounded-xl bg-white/60 px-4 py-3 shadow-sm ring-1 ring-neutral-200/80 backdrop-blur"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-neutral-900">{highlight}</span>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="relative grid gap-4 sm:grid-cols-2">
            <div className="absolute -left-6 -top-6 h-20 w-20 rounded-full bg-primary-200/50 blur-2xl" aria-hidden />
            <div className="absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-primary-100/60 blur-3xl" aria-hidden />
            {storyImages.map((item) => (
              <div
                key={item.title}
                className="relative h-52 overflow-hidden rounded-2xl bg-neutral-200 shadow-sm ring-1 ring-neutral-200"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.2), rgba(15, 23, 42, 0.5)), url('${item.image}')` }}
                />
                <div className="relative flex h-full flex-col justify-end gap-1 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent p-4 text-white">
                  <span className="text-sm font-semibold">{item.title}</span>
                  <span className="text-xs text-neutral-100">{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section
        surface
        title="Reliability and quality in every visit"
        description="We prioritize communication, tidy workspaces, and durable finishes so your home improvements feel effortless."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </Section>

      <Section
        title="Experience that keeps projects on track"
        description="Our process blends hands-on know-how with planning and protection, so even complex punch lists stay organized."
        className="gap-10"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              {experienceHighlights.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-2 rounded-xl bg-white p-5 shadow-sm ring-1 ring-neutral-200"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                    {item.label}
                  </span>
                  <span className="text-3xl font-bold text-neutral-900">{item.detail}</span>
                  <p className="text-sm text-neutral-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-primary-700 p-6 text-white shadow-sm">
            <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #ffffff, transparent 35%), radial-gradient(circle at 80% 30%, #a5b4fc, transparent 30%), radial-gradient(circle at 50% 80%, #c7d2fe, transparent 25%)" }} />
            <div className="relative space-y-3">
              <h3 className="text-xl font-semibold">Built for long-term peace of mind</h3>
              <p className="text-sm text-primary-50">
                We prep surfaces, protect your floors, and share maintenance tips so your home
                stays in great shape after every visit.
              </p>
              <ul className="space-y-2 text-sm text-primary-50/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>Documented scopes before work begins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>Protective coverings for floors, countertops, and fixtures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-white" />
                  <span>Follow-up checks to ensure every detail is right</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        surface
        title="Serving the greater GMD area"
        description="Wherever you are in the region, we’re close by with the tools and experience to get your list done."
      >
        <div className="grid gap-6 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div className="space-y-4">
            <ul className="grid gap-3 sm:grid-cols-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 rounded-xl bg-neutral-50 px-4 py-3 shadow-sm ring-1 ring-neutral-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                  <span className="text-sm font-medium text-neutral-900">{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-700">
              Not sure if you’re in range? Reach out and we’ll confirm availability or connect you
              with a trusted partner.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 text-white shadow-sm">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(135deg, #38bdf8 0%, #4f46e5 50%, #22d3ee 100%)" }} />
            <div className="relative space-y-3 p-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-50 ring-1 ring-white/20">
                Service map
              </span>
              <h3 className="text-xl font-semibold">Coverage that’s close to home</h3>
              <p className="text-sm text-neutral-200">
                We keep our service radius tight to arrive on time, finish efficiently, and be
                available for follow-up support whenever you need it.
              </p>
              <div className="h-32 rounded-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 ring-1 ring-white/10">
                <div
                  aria-hidden
                  className="h-full w-full bg-cover bg-center opacity-80"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=900&q=80')" }}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
