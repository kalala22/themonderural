"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Heart } from "lucide-react";
import { useState } from "react";

// Lucide-react no longer ships brand icons.
// Lightweight inline SVGs for social media.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.936 12.204h-6.98l-5.63-8.028-5.005 8.028H2.34L10.905 9.25 2.182 2.25h7.26l4.615 6.33L18.244 2.25zM17.268 18.965h2.448L7.095 3.542h-2.58l11.752 15.422z" />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real newsletter service (Mailchimp, etc.)
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  const navLinks = [
    { name: "Accueil", href: "/#accueil" },
    { name: "Qui sommes-nous", href: "/#qui-sommes-nous" },
    { name: "Nos actions", href: "/#nos-actions" },
    { name: "Actualités", href: "/#actualites" },
    { name: "Galerie", href: "/galerie" },
    { name: "Conférences", href: "/conferences" },
    { name: "Contact", href: "/#contact" },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "Kinshasa, RDC",
      href: null,
    },
    {
      icon: <Mail className="w-4 h-4" />,
      text: "contact@lemonderural.net",
      href: "mailto:contact@lemonderural.net",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+243 819 800 448",
      href: "tel:+243819800448",
    },
  ];

  const socials = [
    { icon: <FacebookIcon className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/people/Le-Monde-Rural-Asbl/61573814172598/" },
    { icon: <InstagramIcon className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/lemonderuralasbl?utm_source=qr" },
    { icon: <LinkedInIcon className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/company/le-monde-rural-asbl/?viewAsMember=true" },
    { icon: <XIcon className="w-5 h-5" />, label: "X", href: "https://x.com/lemonderural10?s=21" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-primary-dark to-[#0a2e14] text-white overflow-hidden">
      {/* Subtle glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-primary-medium/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[200px] bg-accent-gold/5 rounded-full blur-[100px]" />
      </div>

      {/* Newsletter Section */}


      {/* Main Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 py-16 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-20 h-20">
                <Image
                  src="/LMRA Logo Site.png"
                  alt="Le Monde Rural ASBL"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>
            </Link>
            <div>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-1">
                Le Monde{" "}
                <span className="text-accent-gold">Rural</span>
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-[0.2em] font-medium">
                ASBL — RDC
              </p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Plus de 70% de la population congolaise vit en milieu rural.
              Ensemble, transformons ces milieux pour un avenir prospère et
              durable.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wider text-accent-gold/80">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-accent-gold transition-colors duration-300 text-sm font-medium flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-[1px] bg-accent-gold transition-all duration-300" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wider text-accent-gold/80">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              {contactInfo.map((item, index) =>
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-white/60 hover:text-accent-gold transition-colors duration-300 text-sm group"
                  >
                    <span className="text-accent-gold/60 group-hover:text-accent-gold transition-colors">
                      {item.icon}
                    </span>
                    {item.text}
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white/60 text-sm"
                  >
                    <span className="text-accent-gold/60">{item.icon}</span>
                    {item.text}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Column 4: Social + CTA */}
          <div className="space-y-6">
            <h4 className="text-base font-bold uppercase tracking-wider text-accent-gold/80">
              Suivez-nous
            </h4>
            <div className="flex gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-accent-gold rounded-xl flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Donation CTA */}
            <div className="pt-2">
              <Link
                href="/don"
                className="group flex items-center justify-center gap-2 w-full bg-accent-gold/15 hover:bg-accent-gold border border-accent-gold/30 hover:border-accent-gold text-accent-gold hover:text-primary-dark font-bold py-3.5 px-6 rounded-xl transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                <span>Faire un Don</span>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Bar 
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              © {new Date().getFullYear()} Le Monde Rural ASBL. Tous droits
              réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="hover:text-white/70 transition-colors"
              >
                Politique de confidentialité
              </Link>
              <Link
                href="#"
                className="hover:text-white/70 transition-colors"
              >
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>*/}
    </footer>
  );
}
