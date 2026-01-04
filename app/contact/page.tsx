"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const contactMethods = [
  {
    label: "Call or text",
    value: "407-467-2629",
    href: "tel:+14074672629",
    description: "Quick responses for scheduling, pricing, and project questions.",
  },
  {
    label: "Email",
    value: "gilhandyman407@gmail.com",
    href: "mailto:gilhandyman407@gmail.com",
    description: "Send details or photos so we can provide an accurate plan.",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    field: keyof FormState,
  ) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Section
        align="center"
        title="Contact GMD Handyman Services"
        description="Share what you need help with, and we’ll follow up with a clear plan and timing."
        className="gap-10"
      >
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              className="flex flex-col gap-2 rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-neutral-200 transition hover:-translate-y-0.5 hover:ring-primary-200"
              aria-label={`${method.label}: ${method.value}`}
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-primary-700">
                {method.label}
              </span>
              <span className="text-3xl font-bold text-neutral-900">{method.value}</span>
              <p className="text-sm text-neutral-700">{method.description}</p>
            </a>
          ))}
        </div>

        <Section
          surface
          title="Send a quick request"
          description="Provide a brief overview of your project and how we can reach you."
          className="w-full"
        >
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-neutral-800" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={handleChange("name")}
                  className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="Your full name"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-neutral-800" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={handleChange("email")}
                  className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-neutral-800" htmlFor="message">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formState.message}
                onChange={handleChange("message")}
                className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-neutral-900 shadow-sm focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                placeholder="Tell us what you need help with and any timing preferences."
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-neutral-600">
                We respond within one business day. For urgent needs, call directly.
              </p>
              <Button type="submit" size="lg">
                Submit request
              </Button>
            </div>

            {submitted && (
              <p className="text-sm font-semibold text-primary-700" role="status">
                Thanks for reaching out! We’ll get back to you soon with next steps.
              </p>
            )}
          </form>
        </Section>

        <Section
          surface
          align="center"
          title="Prefer to talk now?"
          description="Skip the form and reach us immediately by phone."
          className="w-full"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="tel:+14074672629" size="lg">
              Call 407-467-2629
            </Button>
            <Button href="mailto:gilhandyman407@gmail.com" variant="secondary" size="lg">
              Email us
            </Button>
          </div>
        </Section>
      </Section>
    </main>
  );
}
