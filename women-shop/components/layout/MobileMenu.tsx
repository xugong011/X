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
    <div className="border-t border-brand-200 bg-[#fafafa] md:hidden">
      <div className="flex flex-col px-6 py-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="py-3 text-sm tracking-widest text-cocoa transition-colors hover:text-cocoa-light"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}