import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "./utils";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-primary-600 text-white shadow hover:bg-primary-700 focus-visible:outline-primary-500",
  secondary:
    "bg-white text-primary-700 ring-1 ring-primary-200 hover:bg-primary-50 focus-visible:outline-primary-500",
  ghost:
    "bg-transparent text-neutral-800 hover:bg-neutral-100 focus-visible:outline-primary-500",
};

const sizeStyles: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold no-underline transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...linkProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={props.href} {...linkProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const { type, ...otherButtonProps } = buttonProps;

  return (
    <button className={classes} type={type ?? "button"} {...otherButtonProps}>
      {children}
    </button>
  );
}
