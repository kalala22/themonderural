export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center pt-20">
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
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-10 drop-shadow-md">
            Puisque plus de{" "}
            <span className="text-accent-gold">70%</span> de la population congolaise vit en milieu rural.
          </h2>
          
          <button className="bg-accent-gold text-white px-10 md:px-14 py-4 md:py-5 rounded-[12px] font-bold text-lg md:text-xl hover:scale-105 hover:brightness-110 transition-all shadow-lg active:scale-95">
            Rejoignez-nous
          </button>
        </div>
      </div>

      {/* Hero Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
