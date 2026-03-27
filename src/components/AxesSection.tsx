"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Axe = {
  id: number;
  title: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  detailImage: string;
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
      description: "Nous accompagnons les ménages et petits exploitants ruraux afin d’améliorer leur productivité agricole, leur résilience et leur sécurité alimentaire. Nos interventions encouragent l’agroécologie, facilitent l’accès aux intrants, stimulent la diversification des cultures et réduisent les pertes post-récolte.",
      detailImage: "https://images.unsplash.com/photo-1592911255523-d343f8a4860b?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m24.432 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918" />
        </svg>
      )
    },
    { 
      id: 2, 
      title: "Développement économique & entrepreneuriat rural", 
      color: "bg-secondary-blue-medium", 
      description: "Favoriser l'émergence d'entreprises locales et de coopératives pour dynamiser l'économie rurale. Nous soutenons la création de chaînes de valeur, l'accès aux marchés et le renforcement des capacités entrepreneuriales des jeunes et des femmes.",
      detailImage: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.5 4.5L21.75 7.5M21.75 7.5V12.75M21.75 7.5H16.5" />
        </svg>
      )
    },
    { 
      id: 3, 
      title: "Environnement & Durabilité", 
      color: "bg-primary-olive", 
      description: "Préserver les ressources naturelles et promouvoir des pratiques durables. Nous travaillons sur la reforestation, la gestion des déchets, et la sensibilisation au changement climatique pour protéger les écosystèmes fragiles de la RDC.",
      detailImage: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    },
    { 
      id: 4, 
      title: "Éducation financière & digitale", 
      color: "bg-secondary-blue-light", 
      description: "Renforcer l'autonomie financière par la formation et les outils numériques. Nous facilitons l'accès au micro-crédit, l'épargne communautaire et l'utilisation des technologies mobiles pour les services financiers en milieu rural.",
      detailImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.842c-.83.27-1.708.541-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      )
    },
    { 
      id: 5, 
      title: "Genre & Autonomisation des femmes et filles", 
      color: "bg-accent-gold", 
      description: "Promouvoir l'égalité des chances et le leadership féminin. Nos programmes visent à lever les barrières socio-économiques, à prévenir les violences basées sur le genre et à soutenir l'éducation des filles.",
      detailImage: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200",
      icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      id: 6, 
      title: "Santé communautaire", 
      color: "bg-secondary-dark-teal", 
      description: "Améliorer l'accès aux soins de base et la prévention dans les zones reculées. Nous intervenons dans la vaccination, la santé maternelle et infantile, et la sensibilisation aux maladies endémiques.",
      detailImage: "https://images.unsplash.com/photo-1584362923647-784750ad247a?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      )
    },
    { 
      id: 7, 
      title: "Protection des groupes vulnérables", 
      color: "bg-secondary-blue-medium", 
      description: "Assurer la sécurité et la dignité des personnes les plus fragiles (orphelins, personnes âgées, handicapés). Nous mettons en place des filets sociaux et des programmes de réinsertion communautaire.",
      detailImage: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a5.971 5.971 0 00-.94 3.197m0 0a5.995 5.995 0 005.058 2.771 5.995 5.995 0 005.058-2.771M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
      )
    },
    { 
      id: 8, 
      title: "Eau potable & Assainissement", 
      color: "bg-secondary-blue-vlight text-primary-dark", 
      description: "Garantir un accès durable à l'eau de qualité et à l'hygiène. Nous construisons des forages, des systèmes d'adduction d'eau et promouvons les bonnes pratiques d'assainissement pour réduire les maladies hydriques.",
      detailImage: "https://images.unsplash.com/photo-1541252260737-0402bb74b99d?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
      )
    },
    { 
      id: 9, 
      title: "Infrastructures rurales & Habitat", 
      color: "bg-secondary-blue-medium", 
      description: "Désenclaver les milieux ruraux par l'amélioration des voies de communication et de l'habitat. Nous participons à la maintenance des pistes rurales et à la promotion de techniques de construction durables.",
      detailImage: "https://images.unsplash.com/photo-1529391409740-59f2dee08361?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1" />
        </svg>
      )
    },
    { 
      id: 10, 
      title: "Domaines connexes (culture, sport, etc.)", 
      color: "bg-primary-medium", 
      description: "Renforcer la cohésion sociale à travers les activités culturelles et sportives. Nous soutenons les talents locaux et utilisons le sport comme vecteur de paix et de développement communautaire.",
      detailImage: "https://images.unsplash.com/photo-1517457373958-b7bdd058a548?q=80&w=1200",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-3.012 3.536L6.5 21h11l-.018-1.342a3 3 0 00-3.012-3.536l-4.94 0zM12 3c1.38 0 2.5 1.12 2.5 2.5S13.38 8 12 8 9.5 6.88 9.5 5.5 10.62 3 12 3zM15.5 11l-7 0 0 4 7 0 0-4z" />
        </svg>
      )
    },
  ];

  return (
    <section id="nos-actions" className="relative w-full py-24 md:py-32 bg-primary-dark overflow-hidden">
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
        <div className="w-14 h-14 md:w-16 md:h-16 relative rounded-full overflow-hidden border-2 border-primary-medium bg-secondary-blue-vlight flex items-center justify-center p-1 mb-8 mx-auto">
          <div className="text-[10px] text-center font-bold text-primary-dark leading-none">
             LE MONDE<br/>RURAL<br/>ASBL
          </div>
        </div>
        <h2 className="text-white text-4xl md:text-6xl font-bold text-center mb-16 md:mb-24 drop-shadow-lg">
          Nos Axes d&apos;Intervention
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
          {interventionAxes.map((axe) => (
            <div 
              key={axe.id} 
              onClick={() => setSelectedAxe(axe)}
              className={`${axe.color} rounded-[24px] p-8 flex flex-col items-center text-center shadow-xl hover:scale-105 transition-all duration-300 min-h-[320px] justify-between group cursor-pointer`}
            >
              <div className="text-white group-hover:scale-110 transition-transform">
                {axe.icon && <div className={axe.color.includes('vlight') ? 'text-primary-dark' : 'text-white'}>{axe.icon}</div>}
              </div>
              
              <div className="flex flex-col gap-4 flex-1 mt-6 justify-center">
                <span className={`text-3xl md:text-4xl font-black ${axe.color.includes('vlight') ? 'text-primary-dark/40' : 'text-white/40'}`}>
                  {axe.id}.
                </span>
                <h4 className={`text-lg md:text-xl font-bold leading-snug uppercase ${axe.color.includes('vlight') ? 'text-primary-dark' : 'text-white'}`}>
                  {axe.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Integration */}
      {selectedAxe && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300" 
            onClick={() => setSelectedAxe(null)}
          />
          
          {/* Modal Container */}
          <div className="bg-white rounded-[40px] md:rounded-[48px] overflow-hidden max-w-6xl w-full h-full max-h-[85vh] relative z-10 flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in-95 duration-300">
            {/* Left Content Column */}
            <div className={`w-full md:w-1/2 p-8 md:p-16 flex flex-col ${selectedAxe.color.split(' ')[0]} relative`}>
              {/* Close Button Mobile */}
              <button 
                onClick={() => setSelectedAxe(null)}
                className="absolute top-6 right-6 md:hidden text-white/80 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-white w-20 h-20 md:w-24 md:h-24 rounded-[20px] md:rounded-[24px] flex items-center justify-center mb-8 shadow-inner overflow-hidden">
                  <div className={selectedAxe.color.includes('vlight') ? 'text-primary-dark' : 'text-primary-medium'}>
                    {selectedAxe.icon}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className={`text-white/40 text-2xl md:text-3xl font-black ${selectedAxe.color.includes('vlight') ? 'text-primary-dark/40' : ''}`}>
                    {selectedAxe.id}. {selectedAxe.title.split('&')[0]}
                  </h3>
                  <h2 className={`text-white text-3xl md:text-5xl font-bold leading-tight ${selectedAxe.color.includes('vlight') ? 'text-primary-dark' : ''}`}>
                    {selectedAxe.title}
                  </h2>
                  <p className={`text-white/90 text-lg md:text-2xl leading-relaxed font-light ${selectedAxe.color.includes('vlight') ? 'text-primary-dark/90' : ''}`}>
                    {selectedAxe.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="hidden md:block w-1/2 relative bg-zinc-100">
              <Image 
                src={selectedAxe.detailImage} 
                alt={selectedAxe.title} 
                fill
                className="object-cover"
              />
              
              {/* Close Button Desktop */}
              <button 
                onClick={() => setSelectedAxe(null)}
                className="absolute top-8 right-8 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-3 rounded-full transition-all group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 group-hover:rotate-90 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

