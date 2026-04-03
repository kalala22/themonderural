/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  return (
    <section
      id="qui-sommes-nous"
      ref={containerRef}
      className="relative w-full py-24 md:py-48 overflow-hidden flex items-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-secondary-dark-teal bg-center bg-cover bg-no-repeat w-full h-[120%] -top-[10%]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/assets/IMG Maq3 copie.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/70"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl space-y-12"
        >
          {/* Title with Section Styling */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center gap-0"
          >
            <div className="w-2.5 h-16 bg-accent-gold rounded-l-sm" />
            <div className="bg-primary-medium px-8 py-4 rounded-r-sm shadow-2xl">
              <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
                Qui sommes-nous ?
              </h3>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1.0 }}
            className="flex flex-col gap-8 text-white text-lg leading-relaxed md:leading-normal font-light"
          >
            <p className="text-xl md:text-2xl font-medium text-accent-gold/90">
              Transformer les connaissances en impact réel.
            </p>
            <p className="text-justify">
              <span className="font-semibold text-accent-gold">
                Le Monde Rural ASBL
              </span>{" "}
              est une Association Sans But Lucratif fondée par d'anciens
              étudiants de l'Université Protestante au Congo (UPC), en
              particulier ceux issus du cursus d'économie rurale, sous la vision
              et le leadership de{" "}
              <span className="italic font-normal">
                Madame Fideline BULEMVO KADIMA
              </span>
              .
            </p>
            <p className="opacity-80 text-justify">
              L’association est née de la volonté de transformer les acquis
              scientifiques en actions concrètes au service des communautés
              rurales. Son lancement officiel a eu lieu le 14 juin 2025 lors du
              Forum d’Économie Rurale organisé en partenariat avec l’UPC.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
