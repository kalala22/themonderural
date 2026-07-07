/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";

export default function ConferencesPage() {
  const conferences = [
    {
      id: 1,
      title: "L'exode rural et ses répercussions sur la ville de Kinshasa",
      date: "14 Juin 2025",
      location: "Université Protestante au Congo (UPC), Kinshasa",
      description:
        "Forum inaugural marquant la sortie officielle de l'ASBL. Une analyse du déséquilibre entre Kinshasa (15M d'habitants) et l'arrière-pays, mettant en lumière le besoin urgent de revitaliser les zones rurales pour stabiliser les populations et assurer un développement équilibré.",
      image:
        "https://images.unsplash.com/photo-1591115765373-520b7a08332a?q=80&w=2000&auto=format&fit=crop",
      objectives: [
        "Analyse des causes profondes de l'exode rural et son impact sur l'urbanisation anarchique de Kinshasa.",
        "Soutien à l'agriculture familiale : Accès aux intrants et création de coopératives locales.",
        "Infrastructures de base : Plaidoyer pour le désenclavement des villages (routes, solaire, eau).",
        "Formation & Entrepreneuriat : Création de centres ruraux et projets d'agro-transformation.",
        "Sensibilisation & Plaidoyer : Dialogue avec les autorités pour un équilibre ville-campagne.",
      ],
    },
    {
      id: 2,
      title:
        "RDC 2025 : Jeunesse, Gouvernance et Souveraineté pour une transformation durable",
      date: "4 Novembre 2025",
      location: "Université Technologique Bel Campus",
      description:
        "Participation au Forum Observatoire organisé par DRC Afrivision Think Tank. Nous avons présenté la SNIJV (Stratégie Nationale Intégrée pour la Jeunesse Villageoise 2026-2036) pour placer les jeunes, qui représentent 60% de la population rurale, au cœur de la souveraineté et de la transformation durable de la RDC.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop",
      objectives: [
        "Lancement de la Stratégie Nationale Intégrée pour la Jeunesse Villageoise (SNIJV 2026-2036).",
        "Axe 1 : Éducation & Autonomisation (Filières techniques et lutte contre l'insécurité alimentaire).",
        "Axe 2 : Accès à la terre & entrepreneuriat agricole (Valorisation des 80 M ha agricoles).",
        "Axe 3 : Santé & Bien-être (Infrastructures rurales et santé reproductive).",
        "Axe 4 : Leadership & Participation (Positionnement des jeunes dans les décisions locales).",
        "Axe 5 : Culture & Sport (Valorisation des savoirs locaux et tourisme rural).",
      ],
    },
    {
      id: 3,
      title: "Mission de terrain : Centre Mbankana (Maluku)",
      date: "Mai 2025",
      location: "Centre Mbankana, Commune de Maluku, Kinshasa",
      description:
        "Une immersion au cœur des réalités rurales avec les étudiants en économie rurale. Loin des bureaux, nous avons confronté la théorie aux défis du terrain et évalué la résilience des paysans face aux réalités locales, notamment l'impact du phénomène Mobondo.",
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
      objectives: [
        "Confrontation de la théorie économique aux réalités pratiques du terrain.",
        "Évaluation de l'impact du phénomène Mobondo sur l'activité agricole locale.",
        "Analyse de la résilience des petits exploitants agricoles de Maluku.",
        "Renforcement des capacités d'observation et d'écoute des futurs experts ruraux.",
      ],
    },
  ];
  return (
    <>
      <Header />
      <main className="min-h-screen bg-stone-50 pt-32 pb-24">
        {/* Hero Section */}
        <section className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-accent-gold rounded-full" />
              <h2 className="text-secondary-blue-medium font-bold uppercase tracking-widest text-sm">
                Nos Événements
              </h2>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-dark tracking-tight leading-tight mb-8">
              Conférences & Forums
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl font-light">
              Découvrez nos interventions, nos réflexions et nos actions sur le
              terrain au travers de nos conférences thématiques dédiées au
              développement du monde rural en RDC.
            </p>
          </motion.div>
        </section>

        {/* Conferences List */}
        <section className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10">
          <div className="space-y-16 md:space-y-24">
            {conferences.map((conf, index) => (
              <motion.div
                key={conf.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border border-stone-200 flex flex-col lg:flex-row relative"
              >
                <div className="w-full lg:w-2/5 aspect-[4/3] lg:aspect-auto relative overflow-hidden bg-primary-dark">
                  <Image
                    src={conf.image}
                    alt={conf.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent"></div>

                  {/* Date Badge */}
                  <div className="absolute top-6 left-6 bg-accent-gold text-primary-dark font-black px-6 py-2.5 rounded-full text-sm shadow-lg flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                      <path
                        fillRule="evenodd"
                        d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {conf.date}
                  </div>
                </div>

                <div className="w-full lg:w-3/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white relative">
                  <div className="flex items-center gap-2 text-primary-medium mb-5 font-semibold text-sm tracking-wide uppercase">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                    <span>{conf.location}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-primary-dark mb-6 leading-snug group-hover:text-primary-medium transition-colors">
                    {conf.title}
                  </h3>

                  <p className="text-stone-600 text-lg mb-8 leading-relaxed font-light">
                    {conf.description}
                  </p>

                  <div className="space-y-4 pt-6 border-t border-stone-100">
                    <h4 className="font-bold text-primary-dark text-lg">
                      Points clés abordés :
                    </h4>
                    <ul className="space-y-3">
                      {conf.objectives.map((obj, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-stone-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-accent-gold shrink-0 mt-0.5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="leading-tight">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call To Action Bottom */}
        <section className="container mx-auto px-6 md:px-16 lg:px-24 xl:px-32 mt-32 mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-dark rounded-[40px] p-12 md:p-20 relative overflow-hidden"
          >
            {/* Decorative background overlay */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Vous souhaitez nous inviter ?
              </h2>
              <p className="text-white/80 text-lg md:text-xl mb-10 font-light">
                L'ASBL Le Monde Rural intervient régulièrement lors de forums,
                de conférences et d'ateliers pour sensibiliser sur les réalités
                du monde rural en RDC.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-primary-dark font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <span>Contactez-nous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}
