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
    <section id={id} className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <div
          className={cn(
            "flex flex-col gap-8 md:gap-10",
            surface &&
              "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-8",
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
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {description && (
                <p className="max-w-2xl text-base text-neutral-700 sm:text-lg">
                  {description}
                </p>
              )}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
