import type { ReactNode } from "react";
import { cn } from "./utils";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  surface?: boolean;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  align = "left",
  surface = false,
  className,
  children,
}: SectionProps) {
  const alignmentClasses =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <section id={id} className="px-6 py-12 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div
          className={cn(
            "flex flex-col gap-8",
            surface && "rounded-2xl bg-white p-8 shadow-sm ring-1 ring-neutral-200",
            className,
          )}
        >
          {(eyebrow || title || description) && (
            <div className={cn("flex flex-col gap-3", alignmentClasses)}>
              {eyebrow && (
                <span className="inline-flex rounded-full bg-primary-50 px-4 py-1 text-sm font-semibold text-primary-700 ring-1 ring-primary-100">
                  {eyebrow}
                </span>
              )}
              {title && (
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-2xl text-lg text-neutral-700">{description}</p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
