"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImg = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const slides = [
    {
      subtitle: "Mission de terrain",
      headline: "Toujours au plus près des réalités rurales",
      content: (
        <div className="space-y-6">
          <p>
            Au mois de <span className="italic font-medium">mai 2025</span>, Le
            Monde Rural ASBL a conduit une mission majeure au Centre Mbankana,
            dans la commune de Maluku, aux côtés d'étudiants en économie rurale.
          </p>
          <blockquote className="border-l-4 border-accent-gold pl-6 py-2 my-8 italic text-white/90 bg-white/5 rounded-r-xl">
            « Ne nous cherchez pas dans un bâtiment imposant, nous sommes des
            hommes de terrain. C’est là que commence le vrai changement. »
          </blockquote>
          <p>
            Cette immersion a rappelé que le développement rural ne se décrète
            pas en salle de réunion : il se vit et s’observe au cœur même des
            communautés.
          </p>
        </div>
      ),
      image:
        "/assets/MbakanaImage/toujour_pres.jpeg",
    },
    {
      subtitle: "Réalités de terrain",
      headline: "Défis et résilience à Mbankana",
      content: (
        <div className="space-y-6">
          <p>
            L'objectif était de confronter la théorie aux réalités brutales du
            terrain pour mieux saisir les enjeux locaux.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-accent-gold mb-2 text-sm uppercase">
                Observation
              </h4>
              <p className="text-sm opacity-90">
                Comprendre les défis structurels et économiques auxquels font
                face les paysans de Maluku.
              </p>
            </div>
            <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
              <h4 className="font-bold text-accent-gold mb-2 text-sm uppercase">
                Impact Mobondo
              </h4>
              <p className="text-sm opacity-90">
                Évaluer l’impact du phénomène Mobondo sur l’activité agricole et
                la résilience des communautés.
              </p>
            </div>
          </div>
          <p className="pt-4 font-medium italic border-t border-white/20 text-accent-gold">
            C’est là que bat le cœur du monde rural.
          </p>
        </div>
      ),
      image:
        "/assets/MbakanaImage/femme_manioc.jpeg",
    },
    {
      subtitle: "Forum Observatoire",
      headline: "Le Monde Rural ASBL au cœur du débat national !",
      content: (
        <div className="space-y-4">
          <p>
            Le <span className="italic font-medium">4 novembre 2025</span>, Le
            Monde Rural ASBL a eu l’honneur de participer au Forum Observatoire
            économique et social, organisé par DRC Afrivision Think Tank en
            partenariat avec l’Université Technologique Bel Campus.
          </p>
          <div className="bg-primary-medium/20 p-4 rounded-xl border border-white/10 my-4">
            <h4 className="font-bold text-accent-gold mb-1 text-sm uppercase">
              Thème de notre intervention :
            </h4>
            <p className="font-semibold text-lg drop-shadow-md">
              « RDC 2025 : Jeunesse, Gouvernance et Souveraineté pour une
              transformation durable »
            </p>
          </div>
          <p>
            Une occasion unique de porter haut la voix du monde rural, de
            défendre les enjeux de la jeunesse villageoise et de contribuer aux
            réflexions sur un avenir durable et souverain pour la RDC.
          </p>
        </div>
      ),
      image:
        "/assets/ForumImage/forumUpc.jpeg",
    },

  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <section
      id="actualites"
      ref={containerRef}
      className="relative w-full py-24 md:py-48 overflow-hidden flex items-center bg-primary-dark"
    >
      {/* Background with Dark Green Overlay */}
      <div className="absolute inset-0 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary-dark via-primary-dark/95 to-primary-dark"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Branded Section Title */}
            <div className="relative inline-flex">
              <div className="w-2.5 h-8 bg-accent-gold absolute left-0 top-1/2 -translate-y-1/2" />
              <div className="bg-primary-medium px-8 py-4 shadow-lg">
                <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight uppercase">
                  {slides[currentSlide].subtitle}
                </h3>
              </div>
            </div>

            {/* Headline and Body with AnimatePresence */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {/* Headline */}
                  <div className="min-h-[120px] md:min-h-[140px] flex items-end mb-10">
                    <h2 className="text-white text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight drop-shadow-md">
                      {slides[currentSlide].headline}
                    </h2>
                  </div>

                  {/* Body Text */}
                  <div className="min-h-[320px] text-white text-lg leading-relaxed font-light">
                    {slides[currentSlide].content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls and Call to Action */}
            <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 pt-8 border-t border-white/10 mt-4">
              <div className="flex items-center gap-8">
                <div className="flex gap-4">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 hover:cursor-pointer rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 hover:cursor-pointer rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5  group-hover:translate-x-1 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex gap-2.5">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2.5 hover:cursor-pointer rounded-full transition-all duration-500 ${index === currentSlide
                        ? "w-8 bg-accent-gold"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                    />
                  ))}
                </div>
              </div>

              <Link
                href="/conferences"
                className="xl:ml-auto group flex items-center justify-center gap-2 px-8 py-3.5 bg-accent-gold/90 text-primary-dark font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,200,87,0.3)] whitespace-nowrap"
              >
                <span>Découvrir nos conférences</span>
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg> */}
              </Link>
            </div>
          </div>

          {/* Featured Image Column */}
          <div className="w-full lg:w-1/2 hidden md:block relative group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-[40px] md:rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-4 border-white/5 group-hover:border-accent-gold/20 transition-all duration-500 z-10 bg-primary-dark"
              >
                <motion.div
                  style={{ y: yImg }}
                  className="absolute inset-0 h-[120%] -top-[10%]"
                >
                  <Image
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].headline}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* Background Decorative Element */}
            <div
              className={`absolute z-0 -bottom-6 -right-6 w-1/2 h-1/2 rounded-full blur-[80px] transition-colors duration-1000 ${currentSlide % 2 === 0
                ? "bg-primary-medium/30"
                : "bg-accent-gold/10"
                }`}
            ></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
