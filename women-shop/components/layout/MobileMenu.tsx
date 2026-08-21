import Link from "next/link";
import { navLinks } from "@/data/site";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="border-t border-brand-100 bg-cream md:hidden">
      <div className="flex flex-col px-4 py-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-xl px-3 py-3 font-medium text-cocoa transition-colors hover:bg-brand-50 hover:text-brand-600"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}