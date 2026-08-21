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
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 font-medium transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0";
  const variantStyle =
    variant === "primary"
      ? "bg-brand-500 text-white shadow-soft hover:bg-brand-600"
      : "border border-brand-300 bg-white/70 text-brand-600 hover:bg-brand-50";
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