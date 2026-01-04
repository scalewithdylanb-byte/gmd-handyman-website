import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const serviceCategories = [
  {
    title: "Repairs",
    description: "Practical fixes that keep doors, trim, and fixtures working right.",
    items: ["Door and cabinet adjustments", "Hardware and fixture swaps", "Minor carpentry touch-ups"],
  },
  {
    title: "Painting",
    description: "Clean, careful paint work to refresh walls, trim, and accent areas.",
    items: ["Wall and ceiling touch-ups", "Trim and baseboard refreshes", "Color matching and caulking"],
  },
  {
    title: "Drywall",
    description: "Smooth, blended drywall repairs that disappear into your existing finish.",
    items: ["Hole and crack patching", "Seam repairs and sanding", "Texture matching and priming"],
  },
  {
    title: "Flooring",
    description: "Reliable help for new installs and small fixes that extend your floor’s life.",
    items: ["Laminate and vinyl plank installs", "Tile and wood board repairs", "Transitions and thresholds"],
  },
  {
    title: "Installations",
    description: "Precise placements for upgrades that look sharp and work flawlessly.",
    items: ["Lighting and ceiling fans", "Shelving and storage systems", "Bath and kitchen fixtures"],
  },
  {
    title: "Maintenance",
    description: "Preventative care that keeps your home running smoothly all year long.",
    items: ["Seasonal home checklists", "Caulking and sealing", "Punch list completion"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Section
        id="services"
        align="center"
        eyebrow="Full service coverage"
        title="Detailed help for every room and project"
        description="Choose the category that fits your to-do list. Each visit comes with clear communication, tidy work areas, and results that last."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
            >
              <ul className="mt-4 space-y-2 text-sm text-neutral-700">
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

      <Section className="pt-4">
        <div className="flex flex-col gap-6 rounded-2xl bg-primary-600 px-6 py-8 text-white shadow-sm ring-1 ring-primary-500/50 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Need a quote?</h2>
            <p className="max-w-2xl text-base text-primary-50">
              Tell us about your project and we’ll provide clear pricing, scheduling, and a game plan that fits your home.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              href="mailto:gilhandyman407@gmail.com"
              variant="secondary"
              className="bg-white text-primary-700 ring-transparent hover:bg-white/90"
            >
              Request a quote
            </Button>
            <Button
              href="tel:+14074672629"
              variant="ghost"
              className="border border-white/50 text-white hover:bg-white/10"
            >
              Call 407-467-2629
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
