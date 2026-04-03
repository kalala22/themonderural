"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const allImages = [
  { id: 1, src: "https://images.unsplash.com/photo-1595841696662-5083f30b2063?q=80&w=1024", alt: "Agriculture rurale", category: "Agriculture" },
  { id: 2, src: "https://images.unsplash.com/photo-1488459711615-de64ef5996f6?q=80&w=1024", alt: "Education communautaire", category: "Éducation" },
  { id: 3, src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1024", alt: "Santé en milieu rural", category: "Santé" },
  { id: 4, src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1024", alt: "Environnement durable", category: "Environnement" },
  { id: 5, src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1024", alt: "Autonomisation des femmes", category: "Sociaux" },
  { id: 6, src: "https://images.unsplash.com/photo-1529391409740-59f2dee08361?q=80&w=1024", alt: "Infrastructures", category: "Infrastructures" },
  { id: 7, src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1024", alt: "Paysages ruraux", category: "Nature" },
  { id: 8, src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1024", alt: "Travail aux champs", category: "Agriculture" },
  { id: 9, src: "https://images.unsplash.com/photo-1592911255523-d343f8a4860b?q=80&w=1024", alt: "Récolte de maïs", category: "Agriculture" },
  { id: 10, src: "https://images.unsplash.com/photo-1584362923647-784750ad247a?q=80&w=1024", alt: "Clinique mobile", category: "Santé" },
  { id: 11, src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1024", alt: "Soutien aux orphelins", category: "Protection" },
  { id: 12, src: "https://images.unsplash.com/photo-1541252260737-0402bb74b99d?q=80&w=1024", alt: "Accès à l'eau", category: "Eau" },
];

export default function GaleriePage() {
  const [selectedImage, setSelectedImage] = useState<typeof allImages[0] | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        {/* Hero Page Header */}
        <div className="bg-primary-dark py-20 mb-16 relative overflow-hidden">
             {/* Texture Background */}
            <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

          <div className="container mx-auto px-4 md:px-12 lg:px-24 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-14 h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-primary-medium bg-secondary-blue-vlight flex items-center justify-center p-1 mb-8 mx-auto"
            >
              <div className="text-[10px] text-center font-bold text-primary-dark leading-none">
                 LE MONDE<br/>RURAL<br/>ASBL
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-5xl md:text-7xl font-bold mb-6"
            >
              Notre Galerie <span className="text-secondary-blue-vlight underline decoration-accent-gold underline-offset-8">Photos</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl max-w-3xl mx-auto font-light"
            >
              Plongez dans l&apos;univers de nos projets à travers le regard de nos équipes et des communautés que nous servons en RDC.
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-12 lg:px-24">
            <div className="flex justify-between items-center mb-12">
                <Link href="/" className="flex items-center gap-2 text-primary-dark hover:text-primary-medium transition-colors font-bold group">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Retour à l&apos;accueil
                </Link>
                <div className="text-zinc-400 font-medium">
                    {allImages.length} images disponibles
                </div>
            </div>

            <motion.div 
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
            >
                {allImages.map((img) => (
                    <motion.div
                        layout
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedImage(img)}
                        className="relative aspect-4/3 rounded-[32px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-primary-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-secondary-blue-vlight text-xs font-bold uppercase tracking-widest mb-1">
                                {img.category}
                            </span>
                            <h4 className="text-white text-lg font-bold">
                                {img.alt}
                            </h4>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10"
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-primary-dark/95 backdrop-blur-xl" 
              onClick={() => setSelectedImage(null)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative z-10 w-full max-w-6xl aspect-video rounded-[40px] overflow-hidden shadow-2xl"
            >
              <Image 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                fill
                className="object-contain bg-black/20"
              />
              
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                <span className="text-secondary-blue-vlight text-sm font-bold uppercase tracking-[0.2em] mb-2 block">
                    {selectedImage.category}
                </span>
                <h3 className="text-white text-2xl md:text-4xl font-bold">
                    {selectedImage.alt}
                </h3>
              </div>

              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-4 rounded-full transition-all group shadow-inner"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:rotate-90 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
