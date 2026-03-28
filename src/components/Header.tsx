"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Acceuil", href: "/" },
    { name: "Qui sommes-nous", href: "#qui-sommes-nous" },
    { name: "Actualités", href: "#actualites" },
    { name: "Nos actions", href: "#nos-actions" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm px-4 md:px-12 py-3 flex items-center justify-between"
    >
      {/* Logo Placeholder */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-4"
      >
        {/*<Image src="/LMR Logo-02.png" alt="Logo" width={100} height={100} />*/}
        <div className="font-bold text-xl text-primary-dark tracking-tighter uppercase">
          Le Monde <span className="text-accent-gold">Rural</span>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        {navLinks.map((link, index) => {
          const isActive = pathname === link.href;
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`text-secondary-dark-teal font-semibold text-base transition-all relative group ${
                  isActive ? "text-primary-dark" : "hover:text-primary-medium"
                }`}
              >
                {link.name}
                <motion.div 
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-accent-gold rounded-full ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  } transition-all duration-300`}
                />
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* CTA Button */}
      <motion.button 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1, duration: 0.4 }}
        className="bg-accent-gold text-white px-5 md:px-8 py-2 md:py-3 rounded-[12px] font-bold text-sm md:text-base hover:brightness-110 transition-all shadow-sm"
      >
        Faire un Don
      </motion.button>

      {/* Mobile Menu Icon (Simple version) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="lg:hidden"
      >
        <button className="text-primary-dark p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </motion.div>
    </motion.header>
  );
}

