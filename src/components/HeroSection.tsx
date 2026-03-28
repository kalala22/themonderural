"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center pt-20 overflow-hidden">
      {/* Background Image with Fallback Color */}
      <div 
        className="absolute inset-0 bg-primary-dark/40 bg-center bg-cover bg-no-repeat transition-all duration-700"
        style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop')`, // Placeholder for rural scene
        }}
      >
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-10 drop-shadow-md"
          >
            Puisque plus de{" "}
            <span className="text-accent-gold">70%</span> de la population congolaise vit en milieu rural.
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="bg-accent-gold text-white px-10 md:px-14 py-4 md:py-5 rounded-[12px] font-bold text-lg hover:brightness-110 transition-all shadow-lg"
          >
            Rejoignez-nous
          </motion.button>
        </motion.div>
      </div>

      {/* Hero Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
}

