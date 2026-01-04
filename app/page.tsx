import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

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

export default function Home() {
  return (
    <main>
      <Section id="home" className="items-center text-center">
        <span className="inline-flex items-center rounded-full bg-primary-50 px-4 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
          Reliable handyman services in the GMD area
        </span>

        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Quality repairs, upgrades, and maintenance for your home
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-neutral-700">
            From small fixes to larger projects, GMD Handyman Services delivers prompt,
            trustworthy work backed by clear communication and fair pricing.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:hello@gmdhandyman.com" size="lg">
            Get a free quote
          </Button>
          <Button href="tel:+18005551234" variant="secondary" size="lg">
            Call (800) 555-1234
          </Button>
        </div>

        <div className="grid w-full gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:grid-cols-3">
          {[
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
          ].map((item) => (
            <div key={item.title} className="space-y-2 text-left">
              <h2 className="text-lg font-semibold text-neutral-900">{item.title}</h2>
              <p className="text-sm text-neutral-700">{item.description}</p>
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
        id="contact"
        surface
        align="center"
        title="Ready to cross items off your list?"
        description="Tell us what you need help with and we’ll provide a clear plan, pricing, and a schedule that fits."
      >
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="mailto:hello@gmdhandyman.com" size="lg">
            Request a quote
          </Button>
          <Button href="tel:+18005551234" variant="secondary" size="lg">
            Call (800) 555-1234
          </Button>
        </div>
      </Section>
    </main>
  );
}
