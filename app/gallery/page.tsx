import Image from "next/image";
import { Section } from "@/components/Section";

const galleryImages = [
  {
    title: "Kitchen lighting update",
    description: "Fresh fixtures and clean lines brighten the cooking space.",
    src: "https://picsum.photos/id/1067/800/600",
  },
  {
    title: "Cozy living room",
    description: "Warm tones and tidy finishes for a relaxing space.",
    src: "https://picsum.photos/id/1015/800/600",
  },
  {
    title: "Bathroom refresh",
    description: "Crisp caulking and polished fixtures for a spa-like feel.",
    src: "https://picsum.photos/id/1016/800/600",
  },
  {
    title: "Outdoor retreat",
    description: "Weather-ready seating area with durable finishes.",
    src: "https://picsum.photos/id/1005/800/600",
  },
  {
    title: "Entryway upgrade",
    description: "Welcoming touches with sturdy, clean craftsmanship.",
    src: "https://picsum.photos/id/1011/800/600",
  },
  {
    title: "Dining nook",
    description: "Balanced lighting and trim details for daily gatherings.",
    src: "https://picsum.photos/id/1003/800/600",
  },
];

export default function GalleryPage() {
  return (
    <main>
      <Section
        id="gallery"
        align="center"
        eyebrow="Project highlights"
        title="A closer look at recent finishes"
        description="Browse a mix of clean installs, thoughtful upgrades, and detail-first repairs—each crafted to feel at home in your space."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <figure
              key={image.src}
              className="group relative overflow-hidden rounded-xl bg-neutral-100 shadow-sm ring-1 ring-neutral-200"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105 group-hover:brightness-95"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority
              />
              <figcaption className="absolute inset-x-0 bottom-0 space-y-1 bg-gradient-to-t from-black/60 to-transparent p-4 text-white opacity-0 transition duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold">{image.title}</h3>
                <p className="text-sm text-white/90">{image.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </main>
  );
}
