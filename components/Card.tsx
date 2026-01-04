import type { ReactNode } from "react";
import { cn } from "./utils";

type CardProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  eyebrow,
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-3 rounded-xl bg-white p-6 shadow-sm ring-1 ring-neutral-200",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-wide text-primary-600">
          {eyebrow}
        </span>
      )}
      <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
      {description && <p className="text-neutral-700">{description}</p>}
      {children && <div className="mt-auto">{children}</div>}
    </div>
  );
}
