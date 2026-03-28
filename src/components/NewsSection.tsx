"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "Forum sur l'exode rural",
      headline: "L'exode rural et ses répercussions sur Kinshasa",
      content: (
        <div className="space-y-6">
          <p>
            L'ASBL Le Monde Rural a organisé le
            <span className="italic"> 14 juin 2025</span>, à l’Université
            Protestante au Congo (UPC), son forum inaugural, marquant
            officiellement la sortie publique de l’organisation. Le thème
            choisi, « L’exode rural et ses répercussions sur la ville de
            Kinshasa », répond à une problématique brûlante en République
            Démocratique du Congo.
          </p>
          <p>
            L’exode rural, défini comme le déplacement massif et permanent des
            populations des zones rurales vers les grandes villes, touche
            particulièrement Kinshasa. La capitale, initialement planifiée pour
            environ 500 000 habitants, abrite aujourd’hui plus de 15 millions de
            personnes.
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1591115765373-520b7a08332a?q=80&w=2000&auto=format&fit=crop", // Forum setup
    },
    {
      subtitle: "Forum sur l'exode rural",
      headline: "Cette pression démographique se traduit par :",
      content: (
        <div className="space-y-4">
          <ul className="space-y-3 list-disc pl-5 opacity-90">
            <li>
              Une urbanisation anarchique et l'émergence de quartiers précaires,
            </li>
            <li>
              Une pression accrue sur les services sociaux de base (éducation,
              santé, eau potable),
            </li>
            <li>La montée du chômage, particulièrement chez les jeunes,</li>
            <li>
              Une insécurité alimentaire liée à la dépendance de la ville
              vis-à-vis des produits importés,
            </li>
            <li>Une déconnexion croissante entre ville et campagne.</li>
          </ul>
          <p className="pt-4 font-medium italic border-t border-white/20">
            C’est dans ce contexte que ce forum a été initié pour réfléchir à
            des pistes d’action concrètes.
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd058a548?q=80&w=2000&auto=format&fit=crop", // Audience wide
    },
    {
      subtitle: "Forum sur l'exode rural",
      headline: "Objectifs du forum :",
      content: (
        <div className="space-y-4">
          <ol className="space-y-4 list-decimal pl-5">
            <li>
              <span className="font-semibold">Analyser</span> les causes
              profondes de l'exode rural en RDC.
            </li>
            <li>
              <span className="font-semibold">Mesurer</span> les conséquences
              sur Kinshasa et ses habitants.
            </li>
            <li>
              <span className="font-semibold">Proposer</span> des actions
              concrètes en faveur du développement rural et de la stabilisation
              des populations.
            </li>
            <li>
              <span className="font-semibold">Lancer officiellement</span>{" "}
              l'ASBL Le Monde Rural comme acteur engagé dans la lutte contre les
              inégalités.
            </li>
          </ol>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2000&auto=format&fit=crop", // Woman speaker
    },
    {
      subtitle: "Forum sur l'exode rural",
      headline: "Déroulement et points saillants",
      content: (
        <div className="space-y-4">
          <p>
            Le forum a réuni des étudiants, des professeurs, des experts ainsi
            que des acteurs de la société civile. Les échanges ont mis en
            évidence :
          </p>
          <ul className="space-y-3 opacity-90">
            <li className="flex gap-2">
              <span>•</span>{" "}
              <span>
                <span className="font-bold">Infrastructures</span> : routes
                impraticables, absence d’électricité, faiblesse de l’offre
                éducative.
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>{" "}
              <span>
                <span className="font-bold">Migrations</span> : Chômage et
                pauvreté rurale qui poussent les jeunes vers Kinshasa.
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>{" "}
              <span>
                <span className="font-bold">Dépendance</span> : La RDC importe
                une grande partie de ce qui est consommé en ville.
              </span>
            </li>
            <li className="flex gap-2">
              <span>•</span>{" "}
              <span>
                <span className="font-bold">Poids sur Kinshasa</span> :
                embouteillages, criminalité, pression foncière.
              </span>
            </li>
          </ul>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2000&auto=format&fit=crop", // Conference setting
    },
    {
      subtitle: "Forum sur l'exode rural",
      headline: "Perspectives et pistes d’action (part. 1)",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-2 uppercase text-base">
              1. Soutien à l’agriculture
            </h4>
            <p className="text-sm md:text-base opacity-90">
              Promouvoir l’accès aux intrants agricoles et aux financements.
              Mettre en place des coopératives pour valoriser la production
              locale.
            </p>
          </div>
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-2 uppercase text-base">
              2. Infrastructures de base
            </h4>
            <p className="text-sm md:text-base opacity-90">
              Plaidoyer pour des routes rurales praticables et développement des
              mini-réseaux d’électricité solaire.
            </p>
          </div>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1475721027187-4024f0df06ae?q=80&w=2000&auto=format&fit=crop", // Expert speaker
    },
    {
      subtitle: "Forum sur l'exode rural",
      headline: "Perspectives et pistes d’action (part. 2)",
      content: (
        <div className="space-y-6">
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-2 uppercase text-base">
              3. Formation et entrepreneuriat
            </h4>
            <p className="text-sm md:text-base opacity-90">
              Mise en place de centres de formation ruraux adaptés aux jeunes et
              promotion de l'agro-transformation.
            </p>
          </div>
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-2 uppercase text-base">
              4. Sensibilisation et plaidoyer
            </h4>
            <p className="text-sm md:text-base opacity-90">
              Campagnes auprès des jeunes sur les opportunités rurales et
              dialogue avec les autorités.
            </p>
          </div>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=2000&auto=format&fit=crop", // Speaker at podium
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
      className="relative w-full py-24 md:py-32 overflow-hidden flex items-center bg-primary-dark"
    >
      {/* Background with Dark Green Overlay */}
      <div className="absolute inset-0 bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-primary-dark via-primary-dark/95 to-primary-dark"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700"
        >
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Branded Section Title */}
            <div className="flex items-center gap-0">
              <div className="w-2.5 h-16 bg-accent-gold rounded-l-[4px]" />
              <div className="bg-primary-medium px-8 py-4 rounded-r-[4px] shadow-lg">
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

            {/* Navigation Controls */}
            <div className="flex items-center gap-8 pt-8">
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 group"
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
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-accent-gold hover:border-accent-gold transition-all duration-300 group"
                >
                  <svg
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
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "w-8 bg-accent-gold"
                        : "w-2.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Featured Image Column */}
          <div className="w-full lg:w-1/2 relative group">
            <AnimatePresence mode="wait">
              <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-[4/3] rounded-[40px] md:rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] border-4 border-white/5 group-hover:border-accent-gold/20 transition-all duration-500"
              >
                <Image
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].headline}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* Background Decorative Element */}
            <div
              className={`absolute -z-10 -bottom-6 -right-6 w-1/2 h-1/2 rounded-full blur-[80px] transition-colors duration-1000 ${
                currentSlide % 2 === 0
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

