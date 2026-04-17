"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Axe = {
  id: number;
  title: string;
  color: string;
  image: React.ReactNode;
  description: string;
  detailImage: string | React.ReactNode;
};

export default function AxesSection() {
  const [selectedAxe, setSelectedAxe] = useState<Axe | null>(null);

  useEffect(() => {
    if (selectedAxe) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedAxe]);

  const interventionAxes: Axe[] = [
    {
      id: 1,
      title: "Agriculture & Sécurité alimentaire",
      color: "bg-primary-medium",
      description:
        "Nous accompagnons les ménages et petits exploitants ruraux afin d’améliorer leur productivité agricole, leur résilience et leur sécurité alimentaire. Nos interventions encouragent l’agroécologie, facilitent l’accès aux intrants, stimulent la diversification des cultures et réduisent les pertes post-récolte.",
      detailImage: (
        <Image
          src="/assets/axe_1.png"
          alt="Agriculture & Sécurité alimentaire"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-01.png"
          alt="Agriculture & Sécurité alimentaire"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 2,
      title: "Développement économique & entrepreneuriat rural",
      color: "bg-secondary-blue-medium",
      description:
        "Favoriser l'émergence d'entreprises locales et de coopératives pour dynamiser l'économie rurale. Nous soutenons la création de chaînes de valeur, l'accès aux marchés et le renforcement des capacités entrepreneuriales des jeunes et des femmes.",
      detailImage: (
        <Image
          src="/assets/axe_2.png"
          alt="Développement économique & entrepreneuriat rural"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-02.png"
          alt="Développement économique & entrepreneuriat rural"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },

    {
      id: 3,
      title: "Environnement & Durabilité",
      color: "bg-primary-olive",
      description:
        "Préserver les ressources naturelles et promouvoir des pratiques durables. Nous travaillons sur la reforestation, la gestion des déchets, et la sensibilisation au changement climatique pour protéger les écosystèmes fragiles de la RDC.",
      detailImage: (
        <Image
          src="/assets/axe_3.png"
          alt="Environnement & Durabilité"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-03.png"
          alt="Environnement & Durabilité"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 4,
      title: "Éducation financière & digitale",
      color: "bg-secondary-blue-light",
      description:
        "Renforcer l'autonomie financière par la formation et les outils numériques. Nous facilitons l'accès au micro-crédit, l'épargne communautaire et l'utilisation des technologies mobiles pour les services financiers en milieu rural.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Éducation financière & digitale"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-04.png"
          alt="Éducation financière & digitale"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 5,
      title: "Genre & Autonomisation des femmes et filles",
      color: "bg-accent-gold",
      description:
        "Promouvoir l'égalité des chances et le leadership féminin. Nos programmes visent à lever les barrières socio-économiques, à prévenir les violences basées sur le genre et à soutenir l'éducation des filles.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Genre & Autonomisation des femmes et filles"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-05.png"
          alt="Genre & Autonomisation des femmes et filles"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 6,
      title: "Santé communautaire",
      color: "bg-secondary-dark-teal",
      description:
        "Améliorer l'accès aux soins de base et la prévention dans les zones reculées. Nous intervenons dans la vaccination, la santé maternelle et infantile, et la sensibilisation aux maladies endémiques.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Santé communautaire"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-06.png"
          alt="Santé communautaire"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 7,
      title: "Protection des groupes vulnérables",
      color: "bg-secondary-blue-medium",
      description:
        "Assurer la sécurité et la dignité des personnes les plus fragiles (orphelins, personnes âgées, handicapés). Nous mettons en place des filets sociaux et des programmes de réinsertion communautaire.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Protection des groupes vulnérables"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-07.png"
          alt="Protection des groupes vulnérables"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 8,
      title: "Eau potable & Assainissement",
      color: "bg-secondary-blue-vlight text-primary-dark",
      description:
        "Garantir un accès durable à l'eau de qualité et à l'hygiène. Nous construisons des forages, des systèmes d'adduction d'eau et promouvons les bonnes pratiques d'assainissement pour réduire les maladies hydriques.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Eau potable & Assainissement"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-08.png"
          alt="Eau potable & Assainissement"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 9,
      title: "Infrastructures rurales & Habitat",
      color: "bg-secondary-blue-medium",
      description:
        "Désenclaver les milieux ruraux par l'amélioration des voies de communication et de l'habitat. Nous participons à la maintenance des pistes rurales et à la promotion de techniques de construction durables.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Infrastructures rurales & Habitat"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-09.png"
          alt="Infrastructures rurales & Habitat"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
    {
      id: 10,
      title: "Domaines connexes (culture, sport, etc.)",
      color: "bg-primary-medium",
      description:
        "Renforcer la cohésion sociale à travers les activités culturelles et sportives. Nous soutenons les talents locaux et utilisons le sport comme vecteur de paix et de développement communautaire.",
      detailImage: (
        <Image
          src="/assets/AZZ_1668.jpg"
          alt="Domaines connexes (culture, sport, etc.)"
          fill
          sizes="50vw"
          quality={100}
          className="object-cover"
        />
      ),
      image: (
        <Image
          src="/LMRA Icônes-10.png"
          alt="Domaines connexes (culture, sport, etc.)"
          fill
          sizes="64px"
          quality={75}
          className="object-contain"
        />
      ),
    },
  ];

  return (
    <section
      id="nos-actions"
      className="relative w-full py-24 md:py-32 bg-primary-dark overflow-hidden"
    >
      {/* Texture Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24 drop-shadow-lg"
        >
          Nos Axes d&apos;Intervention
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4"
        >
          {interventionAxes.map((axe) => (
            <motion.div
              key={axe.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedAxe(axe)}
              className={`${axe.color} rounded-3xl p-6 flex flex-col items-center text-center shadow-xl transition-all duration-300 min-h-65 justify-between group cursor-pointer`}
            >
              <div className="w-16 h-16 relative ">{axe.image}</div>

              <div className="flex flex-col gap-3 flex-1 mt-4 justify-center">
                <span
                  className={`text-2xl md:text-3xl font-black ${axe.color.includes("vlight") ? "text-primary-dark/40" : "text-white/40"}`}
                >
                  {axe.id}.
                </span>
                <h4
                  className={`text-base md:text-lg font-bold leading-snug uppercase ${axe.color.includes("vlight") ? "text-primary-dark" : "text-white"}`}
                >
                  {axe.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Integration with Framer Motion */}
      <AnimatePresence>
        {selectedAxe && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setSelectedAxe(null)}
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl md:rounded-2xl overflow-hidden max-w-4xl w-full max-h-[85vh] relative z-10 flex flex-col md:flex-row shadow-2xl"
            >
              {/* Left Content Column */}
              <div
                className={`w-full md:w-1/2 p-6 md:p-10 flex flex-col ${selectedAxe.color.split(" ")[0]} relative`}
              >
                {/* Close Button Mobile */}
                <button
                  onClick={() => setSelectedAxe(null)}
                  className="absolute top-6 right-6 md:hidden text-white/80 hover:text-white"
                >
                  <svg
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
                  </svg>
                </button>

                <div className="flex-1 flex flex-col justify-center">
                  {/* Header with icon and title side by side */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 mb-8"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14  flex items-center justify-center overflow-hidden relative shrink-0">
                      {selectedAxe.image}
                    </div>
                    <h2
                      className={`text-lg md:text-xl font-bold leading-tight ${selectedAxe.color.includes("vlight") ? "text-primary-dark" : "text-white"}`}
                    >
                      {selectedAxe.id}. {selectedAxe.title}
                    </h2>
                  </motion.div>

                  {/* Description */}
                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className={`text-lg md:text-xl leading-relaxed ${selectedAxe.color.includes("vlight") ? "text-primary-dark/90" : "text-white/90"}`}
                    >
                      {selectedAxe.description}
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Right Image Column */}
              <div className="hidden md:block w-1/2 relative bg-zinc-100">
                <div>{selectedAxe.detailImage}</div>

                {/* Close Button Desktop */}
                <button
                  onClick={() => setSelectedAxe(null)}
                  className="absolute top-4 right-4 bg-black/20 hover:cursor-pointer hover:bg-black/40 backdrop-blur-md text-white p-3 rounded-full transition-all group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 group-hover:rotate-90 transition-transform"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
