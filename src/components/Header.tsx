"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useDonation } from "@/context/DonationContext";

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useDonation();
  const [activeSection, setActiveSection] = useState("accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Progress Logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Close menu when pathname changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Accueil", href: "/#accueil" },
    { name: "Qui sommes-nous", href: "/#qui-sommes-nous" },
    { name: "Nos actions", href: "/#nos-actions" },
    { name: "Actualités", href: "/#actualites" },
    { name: "Galerie", href: "/galerie" },
  ];

  useEffect(() => {
    // Only run scroll spy on the homepage
    if (pathname !== "/") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSection("");
      return;
    }

    const sections = [
      "accueil",
      "qui-sommes-nous",
      "actualites",
      "nos-actions",
      "galerie",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Triggers when section is in the top/middle of the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent-gold origin-left z-200"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 z-100 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-24 h-24">
              <Image
                src="/LMRA Logo Site.png"
                alt="Logo"
                fill
                sizes="96px"
                priority
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isAnchor = link.href.startsWith("/#");
            const sectionId = isAnchor ? link.href.split("#")[1] : "";
            const isActive =
              pathname === "/"
                ? activeSection === sectionId
                : pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-secondary-dark-teal font-semibold text-base transition-all relative group ${isActive ? "text-primary-dark" : "hover:text-primary-medium"
                  }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-accent-gold rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    } transition-all duration-300`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA Button - Desktop */}
        <button
          onClick={openModal}
          className="hidden lg:block bg-accent-gold cursor-pointer text-white px-8 py-3 rounded-[12px] font-bold text-base hover:brightness-110 transition-all shadow-sm"
        >
          Faire un Don
        </button>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-primary-dark p-2 hover:bg-zinc-100 rounded-full transition-colors relative z-110"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.2, opacity: 0 }}
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
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-100 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col items-center justify-center p-8 pt-24"
          >
            {/* Close Button inside Overlay */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-primary-dark hover:bg-zinc-100 rounded-full transition-colors z-50 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
              <div className="absolute -top-1/4 -right-1/4 w-full h-full rounded-full bg-accent-gold blur-3xl" />
              <div className="absolute -bottom-1/4 -left-1/4 w-full h-full rounded-full bg-primary-medium blur-3xl opacity-20" />
            </div>

            <nav className="flex flex-col gap-8 text-center w-full max-w-sm">
              {navLinks.map((link) => {
                const isAnchor = link.href.startsWith("/#");
                const sectionId = isAnchor ? link.href.split("#")[1] : "";
                const isActive =
                  pathname === "/"
                    ? activeSection === sectionId
                    : pathname === link.href;

                return (
                  <div key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-3xl font-bold transition-all ${isActive
                        ? "text-primary-dark"
                        : "text-zinc-400 hover:text-primary-medium"
                        }`}
                    >
                      <span className="relative">
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="active-mobile-indicator"
                            className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-gold rounded-full"
                          />
                        )}
                      </span>
                    </Link>
                  </div>
                );
              })}

              <div className="pt-8">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModal();
                  }}
                  className="w-full block cursor-pointer bg-accent-gold text-white px-8 py-4 rounded-[16px] font-bold text-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all active:scale-95"
                >
                  Faire un Don
                </button>
              </div>
            </nav>

            <div className="mt-20 flex flex-col items-center gap-4">
              <div className="w-12 h-12 relative rounded-full overflow-hidden border border-zinc-100 flex items-center justify-center p-1 bg-zinc-50 shadow-inner">
                <div className="relative w-full h-full text-[8px] text-center font-bold text-primary-dark leading-none">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-zinc-400 text-sm font-medium uppercase tracking-[0.2em]">
                ASBL - RDC
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
