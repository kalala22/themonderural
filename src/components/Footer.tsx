"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-16 md:py-24 border-t border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 md:px-12 lg:px-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-3xl font-bold uppercase tracking-tighter">
              Le Monde <span className="text-accent-gold">Rural</span>
            </h3>
            <p className="text-lg font-light opacity-70 max-w-md">
              Plus de 70% de la population congolaise vit en milieu rural.
              Ensemble, transformons ces milieux pour un avenir prospère.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Navigation</h4>
            <nav className="flex flex-col gap-4 text-lg opacity-80">
              <Link
                href="/"
                className="hover:text-accent-gold transition-colors"
              >
                Acceuil
              </Link>
              <Link
                href="#qui-sommes-nous"
                className="hover:text-accent-gold transition-colors"
              >
                Qui sommes-nous
              </Link>
              <Link
                href="#actualites"
                className="hover:text-accent-gold transition-colors"
              >
                Actualités
              </Link>
              <Link
                href="#nos-actions"
                className="hover:text-accent-gold transition-colors"
              >
                Nos actions
              </Link>
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Contact</h4>
            <div className="flex flex-col gap-4 text-lg opacity-80">
              <p>📍 Kinshasa, RDC</p>

              <Link
                href="mailto:contact@lemonderural.net"
                className="hover:text-accent-gold transition-colors"
              >
                contact@lemonderural.net
              </Link>
              <p>📞 +243 000 000 000</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 opacity-60">
          <p>© 2025 Le Monde Rural ASBL. Tous droits réservés.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">
              Politique de confidentialité
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Mentions légales
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
