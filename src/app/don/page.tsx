"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, CreditCard, Smartphone, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function DonationPage() {
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mobile"); // 'mobile' | 'card'
  const [isSubmitted, setIsSubmitted] = useState(false);

  const predefinedAmounts = [10, 20, 50, 100];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-primary-dark pt-32 pb-20 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl p-10 max-w-lg w-full shadow-xl text-center"
        >
          <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-primary-dark mb-4">Merci pour votre générosité !</h2>
          <p className="text-zinc-600 mb-8">
            Votre don va nous aider à avoir un impact significatif dans le monde rural congolais. Nous vous avons envoyé un email de confirmation.
          </p>
          <Link 
            href="/"
            className="inline-block bg-primary-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-medium transition-colors"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-primary-dark pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Side - Info */}
          <div className="md:w-5/12 bg-primary-dark p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold opacity-20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10">
              <Heart className="w-12 h-12 text-accent-gold mb-6" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Faire un Don</h1>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Votre soutien financier est essentiel pour réaliser nos projets de développement en milieu rural. Chaque contribution compte et fait une réelle différence.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-accent-gold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Impact Direct</h3>
                    <p className="text-white/70 text-sm">Financement de projets agricoles et d'infrastructures locales.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-accent-gold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Transparence</h3>
                    <p className="text-white/70 text-sm">Rapports réguliers sur l'utilisation de vos dons.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-7/12 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-4 uppercase tracking-wide">
                  Choisissez un montant (USD)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
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
                    className="w-full pl-10 pr-4 py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors font-semibold"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-bold text-primary-dark mb-4 uppercase tracking-wide">
                  Méthode de paiement
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("mobile")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all gap-2 ${
                      paymentMethod === "mobile" 
                        ? "border-primary-dark bg-primary-dark/5 text-primary-dark" 
                        : "border-zinc-200 text-zinc-500 hover:border-primary-dark/50"
                    }`}
                  >
                    <Smartphone className="w-8 h-8" />
                    <span className="font-semibold text-sm sm:text-base">Mobile Money</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all gap-2 ${
                      paymentMethod === "card" 
                        ? "border-primary-dark bg-primary-dark/5 text-primary-dark" 
                        : "border-zinc-200 text-zinc-500 hover:border-primary-dark/50"
                    }`}
                  >
                    <CreditCard className="w-8 h-8" />
                    <span className="font-semibold text-sm sm:text-base">Carte Bancaire</span>
                  </button>
                </div>
              </div>

              {/* Personal Info */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-primary-dark uppercase tracking-wide">
                  Vos informations
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Prénom"
                    className="w-full px-4 py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Nom"
                    className="w-full px-4 py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                  />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Adresse Email"
                  className="w-full px-4 py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                />
                <input
                  type="tel"
                  required
                  placeholder="Numéro de téléphone"
                  className="w-full px-4 py-4 bg-zinc-50 border-2 border-zinc-200 rounded-xl focus:outline-none focus:border-accent-gold transition-colors"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!amount && !customAmount}
                className="w-full bg-accent-gold text-white font-bold text-lg py-5 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-accent-gold/30 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Faire mon don de {amount || customAmount ? `$${amount || customAmount}` : ""}
              </button>
              
              <p className="text-center text-xs text-zinc-400 mt-4">
                Vos paiements sont sécurisés et chiffrés de bout en bout.
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
