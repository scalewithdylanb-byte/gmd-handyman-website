import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const heroHighlights = [
  {
    title: "Same-week availability",
    description: "Scheduling that meets your timeline without long waits.",
  },
  {
    title: "Licensed & insured",
    description: "Work completed safely and backed by proper credentials.",
  },
  {
    title: "Respect for your home",
    description: "Protective drop cloths, shoe covers, and tidy cleanups every visit.",
  },
];

const services = [
  {
    title: "Repairs",
    description:
      "Skilled fixes that keep your home running smoothly without the hassle.",
    items: ["Drywall patches", "Door and trim adjustments", "Fixture replacements"],
  },
  {
    title: "Installations",
    description:
      "Professional setup for new features that look sharp and work flawlessly.",
    items: ["Lighting and ceiling fans", "Shelving and storage", "Smart home add-ons"],
  },
  {
    title: "Maintenance",
    description:
      "Preventative care to protect your investment and avoid surprise issues.",
    items: ["Seasonal tune-ups", "Caulking and sealing", "Punch list completion"],
  },
];

const values = [
  {
    title: "Respectful in-home care",
    description:
      "We arrive on time, protect your space, and leave every room tidy once the job is done.",
  },
  {
    title: "Transparent communication",
    description:
      "Clear scopes, upfront pricing, and progress updates so you always know what’s next.",
  },
  {
    title: "Detail-first craftsmanship",
    description:
      "Careful measurements, durable materials, and clean finishes that look great long after we leave.",
  },
];

const serviceHighlights = [
  {
    title: "Home repairs",
    description: "Quick fixes for doors, trim, drywall, and fixtures that keep daily life smooth.",
    icon: "🛠️",
  },
  {
    title: "Upgrades & installs",
    description: "Ceiling fans, shelving, smart home add-ons, and lighting placed with precision.",
    icon: "💡",
  },
  {
    title: "Outdoor care",
    description: "Deck touch-ups, weatherproofing, and exterior lighting to boost curb appeal.",
    icon: "🌿",
  },
  {
    title: "Maintenance checks",
    description: "Seasonal tune-ups, caulking, and punch list completion to prevent surprises.",
    icon: "✅",
  },
];

const gallery = [
  {
    title: "Kitchen refresh",
    description:
      "Updated fixtures, added backsplash, and tuned cabinet hardware for a cohesive finish.",
  },
  {
    title: "Outdoor upgrades",
    description:
      "Secured decking, weatherproofed railings, and installed modern exterior lighting.",
  },
  {
    title: "Bathroom improvements",
    description:
      "Replaced faucets, recaulked tile, and added storage to keep essentials organized.",
  },
  {
    title: "Entryway repairs",
    description:
      "Adjusted doors, fixed trim, and mounted shelving to create a welcoming first impression.",
  },
];

const testimonials = [
  {
    quote:
      "Showed up on time, walked me through the plan, and left everything spotless. Best experience I’ve had with a handyman.",
    name: "Maria L.",
    role: "Homeowner in GMD",
  },
  {
    quote:
      "Clear pricing, fast scheduling, and thoughtful craftsmanship. My projects finally feel under control.",
    name: "James P.",
    role: "Repeat client",
  },
  {
    quote:
      "From small fixes to a full room refresh, the communication and quality were consistent every step of the way.",
    name: "Danielle R.",
    role: "Investment property owner",
  },
];

export default function Home() {
  return (
    <main>
      <Section id="home" className="items-center text-center gap-10">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
            Reliable handyman services in the GMD area
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            <span>Locally owned & responsive</span>
          </span>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
              Quality repairs, upgrades, and maintenance for your home
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-700">
              Friendly, licensed handyman support for the GMD area. We handle the punch
              list, keep you updated, and leave your space cleaner than we found it.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="tel:+14074672629" size="lg">
            Call now
          </Button>
          <Button href="mailto:gilhandyman407@gmail.com" variant="secondary" size="lg">
            Get a free quote
          </Button>
        </div>

        <div className="grid w-full gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:grid-cols-3">
          {heroHighlights.map((item) => (
            <div key={item.title} className="space-y-2 text-left">
              <h2 className="text-lg font-semibold text-neutral-900">{item.title}</h2>
              <p className="text-sm text-neutral-700">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        surface
        align="center"
        eyebrow="Popular services"
        title="Quick preview of how we can help"
        description="Clear, friendly handyman support for the fixes and upgrades that matter most."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {serviceHighlights.map((service) => (
            <div
              key={service.title}
              className="flex h-full gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-5 text-left shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-2xl">
                <span role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
                <p className="text-sm text-neutral-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="services"
        surface
        title="Services tailored to your to-do list"
        description="Whether it’s a quick fix or a room-by-room update, we bring the right tools, know-how, and communication to each project."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            >
              <ul className="space-y-2 text-sm text-neutral-700">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        id="about"
        title="Why homeowners choose GMD Handyman Services"
        description="You get a responsive partner who treats your project like their own—from the first walkthrough to the final cleanup."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} title={value.title} description={value.description} />
          ))}
        </div>
      </Section>

      <Section
        id="gallery"
        surface
        title="Recent projects and finishes"
        description="A glimpse into the kind of detail and care we bring to every room."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {gallery.map((project) => (
            <Card key={project.title} title={project.title} description={project.description} />
          ))}
        </div>
      </Section>

      <Section
        id="testimonials"
        align="center"
        title="Trusted by GMD homeowners"
        description="Neighbors count on us for responsive communication, fair pricing, and workmanship that lasts."
      >
        <div className="flex flex-wrap items-center justify-center gap-3 text-primary-600">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="text-xl">
              ★
            </span>
          ))}
          <span className="text-sm font-semibold text-neutral-700">
            5.0 average from local clients
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200"
            >
              <p className="text-lg font-medium text-neutral-900">“{testimonial.quote}”</p>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-neutral-900">
                  {testimonial.name}
                </span>
                <span className="text-sm text-neutral-600">{testimonial.role}</span>
              </div>
              <div className="mt-auto inline-flex items-center gap-2 self-start rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700 ring-1 ring-primary-100">
                Verified local client
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        surface
        align="center"
        title="Ready to cross items off your list?"
        description="Tell us what you need help with and we’ll provide a clear plan, pricing, and a schedule that fits."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:gilhandyman407@gmail.com" size="lg">
            Request a quote
          </Button>
          <Button href="tel:+14074672629" variant="secondary" size="lg">
            Call 407-467-2629
          </Button>
        </div>
      </Section>
    </main>
  );
}
