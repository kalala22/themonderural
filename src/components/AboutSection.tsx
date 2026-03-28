"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="qui-sommes-nous" className="relative w-full py-24 md:py-32 overflow-hidden flex items-center">
      {/* Background Image with Dark Green Overlay */}
      <div 
        className="absolute inset-0 bg-secondary-dark-teal bg-center bg-cover bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1529391409740-59f2dee08361?q=80&w=2000&auto=format&fit=crop')`, // Congolese youth/community vibe
        }}
      >
        <div className="absolute inset-0 bg-primary-dark/85"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl space-y-12"
        >
            {/* Title with Section Styling */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-0"
            >
                <div className="w-2.5 h-16 bg-accent-gold rounded-l-[4px]" />
                <div className="bg-primary-medium px-8 py-4 rounded-r-[4px] shadow-lg">
                    <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Qui sommes-nous ?</h3>
                </div>
            </motion.div>

            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col gap-8 text-white text-lg leading-relaxed md:leading-normal font-light"
            >
                <p>
                    <span className="font-semibold text-accent-gold">Le Monde Rural ASBL</span> est une Association Sans But Lucratif fondée par d’anciens étudiants de l’Université Protestante au Congo (UPC), en particulier ceux issus du cursus d’économie rurale, sous la vision et le leadership de <span className="italic">Madame Fideline BULEMVO KADIMA</span>.
                </p>
                <p>
                    L’association est née de la volonté de transformer les acquis scientifiques en actions concrètes au service des communautés rurales. Son lancement officiel a eu lieu le 14 juin 2025 lors du Forum d’Économie Rurale organisé en partenariat avec l’UPC.
                </p>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

