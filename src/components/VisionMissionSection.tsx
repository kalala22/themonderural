import Image from "next/image";

export default function VisionMissionSection() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-secondary-dark-teal overflow-hidden">
      {/* Texture Layer - Leaves/Vegetation */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')`, // Texture-like foliage
          backgroundSize: "cover",
          backgroundPosition: "center",
          mixBlendMode: "overlay"
        }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        {/* Vision Card */}
        <div className="group bg-primary-medium rounded-[48px] overflow-hidden flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-all duration-500">
          <div className="h-72 sm:h-80 md:h-96 relative overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2000&auto=format&fit=crop" 
              alt="Notre Vision" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Overlay Gradient on Image */}
            <div className="absolute inset-0 bg-linear-to-t from-primary-medium via-transparent to-transparent opacity-60"></div>
          </div>
          
          <div className="p-10 md:p-14 flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-12 bg-accent-gold rounded-full" />
              <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Notre Vision</h3>
            </div>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light opacity-95">
              Réduire les inégalités, combattre la pauvreté et améliorer durablement les conditions de vie des populations rurales et périurbaines en République Démocratique du Congo.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="group bg-[#062c1f] rounded-[48px] overflow-hidden flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-all duration-500">
          <div className="h-72 sm:h-80 md:h-96 relative overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1529391409740-59f2dee08361?q=80&w=2000&auto=format&fit=crop" 
              alt="Notre Mission" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110" 
            />
             {/* Overlay Gradient on Image */}
             <div className="absolute inset-0 bg-linear-to-t from-[#062c1f] via-transparent to-transparent opacity-60"></div>
          </div>
          
          <div className="p-10 md:p-14 flex flex-col flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-12 bg-primary-medium rounded-full" />
              <h3 className="text-white text-4xl md:text-5xl font-bold tracking-tight">Notre Mission</h3>
            </div>
            <p className="text-white text-xl md:text-2xl leading-relaxed font-light mb-8 opacity-95">
              Promouvoir un développement rural durable et inclusif en offrant :
            </p>
            <ul className="space-y-6">
              {[
                "Un accompagnement technique;",
                "Un appui financier;",
                "Un plaidoyer engagé pour défendre les droits et intérêts des communautés rurales."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4 group/item">
                  <span className="text-primary-medium font-black text-3xl leading-none mt-1 group-hover/item:scale-125 transition-transform">•</span>
                  <span className="text-white text-lg md:text-xl font-light opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

