"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section
      id="accueil"
      className="relative h-screen min-h-150 w-full flex items-center pt-20 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-primary-dark/40 bg-center bg-cover bg-no-repeat transition-all duration-700"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('assets/AZZ_1913.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent"></div>
        {/* Corner Gradient - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-radial-[ellipse_at_bottom_left] from-black/70 via-black/30 to-transparent"></div>
        {/* Corner Gradient - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-radial-[ellipse_at_bottom_right] from-black/50 via-black/20 to-transparent"></div>
      </motion.div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div
          style={{ opacity, scale }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-10 drop-shadow-md"
          >
            Puisque plus de <span className="text-accent-gold">70%</span> de la
            population congolaise vit en milieu rural.
          </motion.h2> */}

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-10 drop-shadow-xl"
          >
            Avec plus d’un Congolais sur deux vivant en zone rurale, investir
            dans <span className="text-accent-gold">le Monde Rural</span> n’est
            pas une option : c’est la clé d’un développement national équitable,
            inclusif et durable.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-gold text-white px-10 md:px-14 py-4 md:py-5 rounded-xl font-bold text-lg hover:brightness-110 transition-all shadow-lg"
            >
              Rejoignez-nous
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
