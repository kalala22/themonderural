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
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
    },
    {
      subtitle: "Jeunesse rurale",
      headline: "Un rôle incontournable pour la transformation durable",
      content: (
        <div className="space-y-4">
          <p>
            <span className="font-semibold text-accent-gold">
              Qui sont les jeunes ?
            </span>{" "}
            En RDC, la jeunesse (15–35 ans) représente le cœur de la population
            active.
          </p>
          <div className="bg-white/5 p-4 rounded-xl border border-white/10">
            <p className="font-medium text-accent-gold/90">
              ➡️ 60 % vivent en zones rurales ou périurbaines : impossible de
              parler de développement durable sans eux.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quelques chiffres clés 🇨🇩 :</h4>
            <ul className="space-y-2 list-disc pl-5 opacity-90">
              <li>Population : 112,8 millions</li>
              <li>Actifs (15–64 ans) : 63,2 millions</li>
              <li>Jeunes actifs (15–24 ans) : 38 %</li>
            </ul>
          </div>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop",
    },
    {
      subtitle: "Jeunesse rurale",
      headline: "Les défis majeurs à relever",
      content: (
        <div className="space-y-6">
          <p>
            La jeunesse rurale congolaise fait face à des obstacles
            considérables qui freinent son potentiel et son développement.
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Faible accès à l'éducation",
              "Chômage",
              "Manque d'opportunités",
              "Exode rural",
              "Faible accès aux soins",
              "Quasi-absence de politiques ciblées",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-primary-medium/30 border border-white/20 px-3 py-1.5 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="pt-4 font-medium italic border-t border-white/20 text-accent-gold">
            Point d’attention : la transformation durable ne se fera pas sans la
            jeunesse rurale.
          </p>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop",
    },
    {
      subtitle: "Notre proposition",
      headline: "Une nouvelle vision pour la jeunesse rurale",
      content: (
        <div className="space-y-5">
          <p>
            Pour accélérer la transformation durable, nous proposons la mise en
            place d'un cadre ambitieux :
          </p>
          <div className="bg-accent-gold/10 p-5 rounded-2xl border border-accent-gold/20">
            <h3 className="text-xl font-bold text-accent-gold mb-1">
              La Stratégie Nationale Intégrée pour la Jeunesse Villageoise en
              RDC
            </h3>
            <p className="text-sm uppercase tracking-wider font-semibold opacity-90 text-white">
              (SNIJV – 2026/2036)
            </p>
          </div>
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold mb-1 text-accent-gold">
              Objectif principal :
            </h4>
            <p className="opacity-90">
              Intégrer pleinement la jeunesse rurale dans le développement
              économique, social et environnemental du pays.
            </p>
          </div>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000&auto=format&fit=crop",
    },
    {
      subtitle: "Axes stratégiques",
      headline: "Les 5 axes de la SNIJV (part. 1)",
      content: (
        <div className="space-y-4">
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-1 text-sm uppercase">
              1. Éducation & autonomisation
            </h4>
            <p className="text-sm opacity-90">
              Réforme des filières techniques, formation professionnelle,
              alphabétisation des femmes, lutte contre l’insécurité alimentaire.
            </p>
          </div>
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-1 text-sm uppercase">
              2. Accès à la terre & entrepreneuriat
            </h4>
            <p className="text-sm opacity-90">
              Sécurisation foncière, valorisation des 80 M ha agricoles,
              incubation des entrepreneurs ruraux, accès au financement.
            </p>
          </div>
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-1 text-sm uppercase">
              3. Santé & bien-être
            </h4>
            <p className="text-sm opacity-90">
              Amélioration des infrastructures, santé sexuelle et reproductive,
              lutte contre les mariages précoces, santé mentale.
            </p>
          </div>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1593113565215-5d510ee4e4a0?q=80&w=2000&auto=format&fit=crop",
    },
    {
      subtitle: "Axes stratégiques",
      headline: "Les 5 axes de la SNIJV (part. 2)",
      content: (
        <div className="space-y-4">
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-1 text-sm uppercase">
              4. Leadership & participation
            </h4>
            <p className="text-sm opacity-90">
              Participation des jeunes aux décisions locales, leadership
              féminin, renforcement de la cohésion nationale.
            </p>
          </div>
          <div className="bg-primary-medium/20 p-5 rounded-2xl border border-white/10">
            <h4 className="font-bold text-accent-gold mb-1 text-sm uppercase">
              5. Culture & sport
            </h4>
            <p className="text-sm opacity-90">
              Valorisation des savoirs locaux, développement d'infrastructures
              culturelles, promotion de l'artisanat et du tourisme rural.
            </p>
          </div>
          <div className="mt-4 p-4 border-l-4 border-accent-gold bg-accent-gold/10 rounded-r-xl">
            <p className="font-semibold italic text-white/95">
              Conclusion : Investir dans la jeunesse rurale, c’est investir dans
              l’avenir durable de la RDC.
            </p>
          </div>
        </div>
      ),
      image:
        "https://images.unsplash.com/photo-1526976663112-00dbf6aa8d0f?q=80&w=2000&auto=format&fit=crop",
    },
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
                      className={`h-2.5 hover:cursor-pointer rounded-full transition-all duration-500 ${
                        index === currentSlide
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
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
              </motion.div>
            </AnimatePresence>

            {/* Background Decorative Element */}
            <div
              className={`absolute z-0 -bottom-6 -right-6 w-1/2 h-1/2 rounded-full blur-[80px] transition-colors duration-1000 ${
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
