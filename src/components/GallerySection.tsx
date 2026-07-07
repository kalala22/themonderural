"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  {
    id: 1,
    src: "/assets/agriculture_gallery.png",
    alt: "Agriculture rurale",
    category: "Agriculture"
  },
  {
    id: 2,
    src: "/assets/education_gallery.png",
    alt: "Education communautaire",
    category: "Éducation"
  },
  {
    id: 3,
    src: "/assets/health_gallery.png",
    alt: "Santé en milieu rural",
    category: "Santé"
  },
  {
    id: 4,
    src: "/assets/environment_gallery.png",
    alt: "Environnement durable",
    category: "Environnement"
  },
  {
    id: 5,
    src: "/assets/social_gallery.png",
    alt: "Autonomisation des femmes",
    category: "Sociaux"
  },
  {
    id: 6,
    src: "/assets/infrastructure_gallery.png",
    alt: "Infrastructures",
    category: "Infrastructures"
  }
];

export default function GallerySection() {
  return (
    <section id="galerie" className="relative w-full py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary-dark text-4xl md:text-6xl font-bold mb-6">
              Notre Impact en <span className="text-secondary-blue-medium">Images</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl font-light leading-relaxed">
              Découvrez les moments forts de nos interventions sur le terrain et le sourire de ceux que nous accompagnons au quotidien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 md:mt-0"
          >
            <Link
              href="/galerie"
              className="group flex items-center gap-3 bg-primary-dark hover:bg-primary-medium text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Voir plus d&apos;images
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {images.map((img) => (
            <motion.div
              key={img.id}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
              }}
              className="relative aspect-4/3 rounded-[32px] overflow-hidden group cursor-pointer shadow-xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-secondary-blue-vlight text-sm font-bold uppercase tracking-wider mb-2">
                  {img.category}
                </span>
                <h4 className="text-white text-xl font-bold">
                  {img.alt}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
