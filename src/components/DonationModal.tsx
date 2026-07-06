"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, CreditCard, Smartphone, CheckCircle, X } from "lucide-react";
import { useDonation } from "../context/DonationContext";

export default function DonationModal() {
  const { isModalOpen, closeModal } = useDonation();
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mobile"); // 'mobile' | 'card'
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedAmounts = [10, 20, 50, 100];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  // Reset state when modal is closed
  useEffect(() => {
    if (!isModalOpen) {
      setTimeout(() => {
        setAmount(null);
        setCustomAmount("");
        setPaymentMethod("mobile");
        setIsSubmitted(false);
      }, 300); // Wait for exit animation
    }
  }, [isModalOpen]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 text-white md:text-primary-dark md:bg-zinc-100 md:hover:bg-zinc-200 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="w-full p-12 md:p-20 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-primary-dark mb-4">Merci pour votre générosité !</h2>
                <p className="text-zinc-600 mb-8 max-w-md">
                  Votre don va nous aider à avoir un impact significatif dans le monde rural congolais. Nous vous avons envoyé un email de confirmation.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-primary-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-medium transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
                {/* Left Side - Info */}
                <div className="md:w-5/12 bg-primary-dark p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

                  <div className="relative z-10">
                    <Heart className="w-10 h-10 text-accent-gold mb-6" />
                    <h1 className="text-2xl md:text-3xl font-bold mb-4">Faire un Don</h1>
                    <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed">
                      Votre soutien financier est essentiel pour réaliser nos projets de développement en milieu rural.
                    </p>

                    <div className="space-y-6 hidden md:block">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <span className="font-bold text-accent-gold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Impact Direct</h3>
                          <p className="text-white/70 text-xs mt-1">Financement de projets agricoles et d'infrastructures locales.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                          <span className="font-bold text-accent-gold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Transparence</h3>
                          <p className="text-white/70 text-xs mt-1">Rapports réguliers sur l'utilisation de vos dons.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Form */}
                <div className="md:w-7/12 p-6 md:p-10 max-h-[80vh] overflow-y-auto">
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    
                    {/* Amount Selection */}
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-primary-dark mb-3 uppercase tracking-wide">
                        Choisissez un montant (USD)
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                        {predefinedAmounts.map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => { setAmount(amt); setCustomAmount(""); }}
                            className={`py-3 rounded-xl font-bold border-2 transition-all ${
                              amount === amt 
                                ? "border-accent-gold bg-accent-gold/10 text-accent-gold" 
                                : "border-zinc-200 text-zinc-600 hover:border-accent-gold/50"
                            }`}
                          >
                            ${amt}
                          </button>
                        ))}
                      </div>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 font-bold">$</span>
                        <input
                          type="number"
                          placeholder="Autre montant"
                          value={customAmount}
                          onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setAmount(null);
                          }}
                          className="w-full pl-10 pr-4 py-3 md:py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors font-semibold"
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <label className="block text-xs md:text-sm font-bold text-primary-dark mb-3 uppercase tracking-wide">
                        Méthode de paiement
                      </label>
                      <div className="grid grid-cols-2 gap-3 md:gap-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("mobile")}
                          className={`flex flex-col items-center justify-center p-3 md:p-4 rounded-xl border-2 transition-all gap-2 ${
                            paymentMethod === "mobile" 
                              ? "border-primary-dark bg-primary-dark/5 text-primary-dark" 
                              : "border-zinc-200 text-zinc-500 hover:border-primary-dark/50"
                          }`}
                        >
                          <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
                          <span className="font-semibold text-xs sm:text-sm">Mobile Money</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod("card")}
                          className={`flex flex-col items-center justify-center p-3 md:p-4 rounded-xl border-2 transition-all gap-2 ${
                            paymentMethod === "card" 
                              ? "border-primary-dark bg-primary-dark/5 text-primary-dark" 
                              : "border-zinc-200 text-zinc-500 hover:border-primary-dark/50"
                          }`}
                        >
                          <CreditCard className="w-6 h-6 md:w-8 md:h-8" />
                          <span className="font-semibold text-xs sm:text-sm">Carte Bancaire</span>
                        </button>
                      </div>
                    </div>

                    {/* Personal Info */}
                    <div className="space-y-3 md:space-y-4">
                      <label className="block text-xs md:text-sm font-bold text-primary-dark uppercase tracking-wide">
                        Vos informations
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <input
                          type="text"
                          required
                          placeholder="Prénom"
                          className="w-full px-4 py-3 md:py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                        />
                        <input
                          type="text"
                          required
                          placeholder="Nom"
                          className="w-full px-4 py-3 md:py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                        />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="Adresse Email"
                        className="w-full px-4 py-3 md:py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Numéro de téléphone"
                        className="w-full px-4 py-3 md:py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!amount && !customAmount}
                      className="w-full bg-accent-gold text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-accent-gold/30 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Faire mon don de {amount || customAmount ? `$${amount || customAmount}` : ""}
                    </button>
                    
                    <p className="text-center text-xs text-zinc-400 mt-2">
                      Vos paiements sont sécurisés et chiffrés de bout en bout.
                    </p>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
