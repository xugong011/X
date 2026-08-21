import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  children: ReactNode;
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium tracking-widest transition-colors duration-200";
  const variantStyle =
    variant === "primary"
      ? "bg-brand-500 text-white hover:bg-brand-700"
      : "border border-brand-300 text-cocoa hover:border-brand-500 hover:bg-brand-50";
  const cls = `${base} ${variantStyle} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}