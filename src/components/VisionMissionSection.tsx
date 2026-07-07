"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-secondary-dark-teal overflow-hidden">
      {/* Diagonal Shape Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg
          className="relative block w-full h-15 md:h-25"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <polygon fill="#1a5741" points="0,120 1200,0 1200,120" />
        </svg>
      </div>

      {/* Texture Layer - Leaves/Vegetation */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')`, // Texture-like foliage
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="group bg-primary-medium rounded-4xl overflow-hidden flex flex-col shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] transition-all duration-500"
        >
          <div className="relative">
            <div className="h-56 sm:h-64 md:h-72 relative overflow-hidden">
              <Image
                src="/assets/AZZ_1767.jpg"
                alt="Notre Vision"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Diagonal Shape Divider - V Shape */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg
                className="block w-full h-12.5 md:h-12.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <polygon
                  fill="#32a138"
                  points="0,0 600,120 1200,0 1200,120 0,120"
                />
              </svg>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col flex-1 -mt-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-10 bg-accent-gold rounded-full" />
              <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                Notre Vision
              </h3>
            </div>
            <p className="text-white text-base md:text-lg leading-relaxed font-light opacity-95 text-justify">
              Réduire les inégalités, combattre la pauvreté et améliorer
              durablement les conditions de vie des populations rurales et
              périurbaines en République Démocratique du Congo.
            </p>
          </div>
        </motion.div>

        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ y: -10, transition: { duration: 0.3 } }}
          className="group bg-[#062c1f] rounded-4xl overflow-hidden flex flex-col shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] transition-all duration-500"
        >
          <div className="relative">
            <div className="h-56 sm:h-64 md:h-72 relative overflow-hidden">
              <Image
                src="/assets/AZZ_1913.jpg"
                alt="Notre Mission"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover "
              />
            </div>
            {/* Diagonal Shape Divider - V Shape */}
            <div className="absolute bottom-0 left-0 w-full">
              <svg
                className="block w-full h-12.5 md:h-12.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <polygon
                  fill="#062c1f"
                  points="0,0 600,120 1200,0 1200,120 0,120"
                />
              </svg>
            </div>
          </div>

          <div className="p-8 md:p-10 flex flex-col flex-1 -mt-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-10 bg-primary-medium rounded-full" />
              <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight">
                Notre Mission
              </h3>
            </div>
            <p className="text-white text-base md:text-lg leading-relaxed font-light mb-6 opacity-95">
              Promouvoir un développement rural durable et inclusif en offrant :
            </p>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.2, delayChildren: 0.6 },
                },
              }}
            >
              {[
                "Un accompagnement technique;",
                "Un appui financier;",
                "Un plaidoyer engagé pour défendre les droits et intérêts des communautés rurales.",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4 group/item"
                >
                  <span className="text-primary-medium font-black text-3xl leading-none mt-1 group-hover/item:scale-125 transition-transform duration-300">
                    •
                  </span>
                  <span className="text-white text-lg font-light opacity-90">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
