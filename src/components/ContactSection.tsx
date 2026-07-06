"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, ExternalLink } from "lucide-react";

// Lucide-react no longer ships brand icons (Facebook, Instagram, LinkedIn).
// We use lightweight inline SVGs instead.
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission — replace with a real service (Formspree, EmailJS, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Adresse",
      value: "Kinshasa, République Démocratique du Congo",
      href: null,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "+243 819 800 448",
      href: "tel:+243819800448",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "contact@lemonderural.net",
      href: "mailto:contact@lemonderural.net",
    },
  ];

  const socials = [
    { icon: <FacebookIcon className="w-5 h-5" />, label: "Facebook", href: "https://www.facebook.com/people/Le-Monde-Rural-Asbl/61573814172598/" },
    { icon: <InstagramIcon className="w-5 h-5" />, label: "Instagram", href: "https://www.instagram.com/lemonderuralasbl?utm_source=qr#" },
    { icon: <LinkedInIcon className="w-5 h-5" />, label: "LinkedIn", href: "https://www.linkedin.com/company/le-monde-rural-asbl/?viewAsMember=true" },
  ];

  const inputClasses =
    "w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all duration-300 backdrop-blur-sm";

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-32 bg-primary-dark overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent-gold blur-[200px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-primary-medium blur-[180px]" />
      </div>

      {/* Top diagonal divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
        <svg
          className="relative block w-full h-15 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <polygon fill="#184C23" points="0,120 1200,0 1200,120" />
        </svg>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-accent-gold rounded-full" />
            <span className="text-accent-gold font-bold text-sm uppercase tracking-[0.2em]">
              Contactez-nous
            </span>
            <div className="w-10 h-[2px] bg-accent-gold rounded-full" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Engagez-vous à nos{" "}
            <span className="text-accent-gold">côtés</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Que vous souhaitiez devenir bénévole, faire un don ou établir un partenariat,
            rejoignez-nous pour transformer le monde rural en RDC.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Form — 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-xl shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-primary-medium/20 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-primary-medium" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">
                    Message envoyé !
                  </h3>
                  <p className="text-white/60 text-lg max-w-md">
                    Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-white/70 text-sm font-medium mb-2"
                      >
                        Nom complet
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-white/70 text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClasses}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-white/70 text-sm font-medium mb-2"
                    >
                      Objet
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none cursor-pointer`}
                    >
                      <option value="" disabled className="text-zinc-800">
                        Sélectionnez un objet
                      </option>
                      <option value="partenariat" className="text-zinc-800">
                        Partenariat
                      </option>
                      <option value="benevolat" className="text-zinc-800">
                        Bénévolat
                      </option>
                      <option value="don" className="text-zinc-800">
                        Faire un don
                      </option>

                      <option value="autre" className="text-zinc-800">
                        Autre
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-white/70 text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Décrivez votre demande..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-accent-gold hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed text-primary-dark font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-accent-gold/20 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Envoyer le message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Right: Contact Info — 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-accent-gold/30 hover:bg-white/[0.08] transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold shrink-0 group-hover:bg-accent-gold/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/50 text-sm font-medium mb-1">
                          {item.label}
                        </p>
                        <p className="text-white font-semibold text-base group-hover:text-accent-gold transition-colors">
                          {item.value}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-white/20 ml-auto mt-1 group-hover:text-accent-gold/50 transition-colors" />
                    </a>
                  ) : (
                    <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                      <div className="w-12 h-12 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/50 text-sm font-medium mb-1">
                          {item.label}
                        </p>
                        <p className="text-white font-semibold text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/[0.04] border border-white/10"
            >
              <h4 className="text-white font-bold text-lg mb-5">
                Suivez-nous
              </h4>
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-white/10 hover:bg-accent-gold rounded-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-accent-gold/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
