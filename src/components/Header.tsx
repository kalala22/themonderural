"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Acceuil", href: "/" },
    { name: "Qui sommes-nous", href: "#qui-sommes-nous" },
    { name: "Actualités", href: "#actualites" },
    { name: "Nos actions", href: "#nos-actions" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm px-4 md:px-12 py-3 flex items-center justify-between">
      {/* Logo Placeholder */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-primary-medium bg-secondary-blue-vlight flex items-center justify-center p-1">
          <div className="text-[10px] text-center font-bold text-primary-dark leading-none">
             LE MONDE<br/>RURAL<br/>ASBL
          </div>
        </div>
        <div className="hidden sm:flex flex-col">
          <h1 className="text-primary-dark font-bold text-xl leading-none">
            Le Monde <span className="block text-2xl uppercase tracking-tighter">Rural</span>
          </h1>
          <span className="text-primary-medium font-bold text-sm tracking-[0.2em]">ASBL</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`text-secondary-dark-teal font-semibold text-lg transition-all relative ${
                isActive ? "text-primary-dark" : "hover:text-primary-medium"
              }`}
            >
              {link.name}
              {isActive && (
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-gold rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* CTA Button */}
      <button className="bg-accent-gold text-white px-5 md:px-8 py-2 md:py-3 rounded-[12px] font-bold text-sm md:text-base hover:brightness-105 transition-all shadow-sm">
        Faire un Don
      </button>

      {/* Mobile Menu Icon (Simple version) */}
      <div className="lg:hidden">
        <button className="text-primary-dark p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </button>
      </div>
    </header>
  );
}
