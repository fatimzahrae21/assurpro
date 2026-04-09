"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Send, Loader2 } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "@/components/ui";
import { contactInfo, insuranceTypes } from "@/lib/data";

interface FormData {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  insuranceType: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "Email invalide";
    if (!form.phone.match(/^[0-9\s+\-()]{8,15}$/))
      newErrors.phone = "Téléphone invalide";
    if (!form.insuranceType) newErrors.insuranceType = "Sélectionnez un type";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!validate()) return;

  setStatus("loading");

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/fatimazahra.jdidi@alm-assurances.fr",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          insuranceType: form.insuranceType,
          message: form.message,
          _subject: "Nouveau devis AssurPro",
        }),
      }
    );

    if (response.ok) {
      setStatus("success");
      setForm(initialForm);
    } else {
      alert("Erreur lors de l'envoi ❌");
      setStatus("idle");
    }
  } catch (error) {
    alert("Erreur réseau ❌");
    setStatus("idle");
  }
};
  const inputBase =
    "w-full px-4 py-3.5 rounded-xl border bg-white text-gray-800 placeholder:text-gray-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-400 focus:border-brand-400";
  const inputNormal = "border-gray-200 hover:border-gray-300";
  const inputError = "border-red-300 focus:ring-red-300";

  return (
    <Section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-50 filter blur-[150px] opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contactez-nous"
          title="Votre devis gratuit<br/><span class='gradient-text'>en 3 minutes</span>"
          subtitle="Remplissez le formulaire et un conseiller expert vous rappelle sous 24h pour vous présenter les meilleures offres."
        />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Contact info */}
          <FadeIn className="lg:col-span-2 space-y-6" direction="right">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <item.icon className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-gray-800 font-medium text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            {/* ORIAS badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-900 to-brand-800 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-teal-300" />
                </div>
                <p className="font-semibold">Courtier agréé ORIAS</p>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                AssurPro est immatriculé à l&apos;ORIAS sous le numéro 15004321.
                Vos données sont protégées conformément au RGPD.
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn className="lg:col-span-3" delay={0.15}>
            <div className="bg-white rounded-3xl border border-gray-100 shadow-card p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-10 h-10 text-teal-500" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-brand-950 mb-3">
                      Demande envoyée !
                    </h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Merci pour votre confiance. Un conseiller AssurPro vous
                      contactera sous 24h avec vos devis personnalisés.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 px-6 py-3 rounded-xl bg-brand-50 text-brand-600 font-semibold text-sm hover:bg-brand-100 transition-colors"
                    >
                      Faire une autre demande
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Nom complet *
                        </label>
                        <input
                        name = "name"
                          type="text"
                          placeholder="Jean Dupont"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Email *
                        </label>
                        <input
                        name="email"
                          type="email"
                          placeholder="jean@exemple.fr"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Téléphone *
                        </label>
                        <input
                        name="phone"
                          type="tel"
                          placeholder="06 12 34 56 78"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          className={`${inputBase} ${errors.phone ? inputError : inputNormal}`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1.5">{errors.phone}</p>
                        )}
                      </div>

                      {/* Insurance type */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Type d&apos;assurance *
                        </label>
                        <select
                        name="insuranceType"
                          value={form.insuranceType}
                          onChange={(e) =>
                            setForm({ ...form, insuranceType: e.target.value })
                          }
                          className={`${inputBase} ${
                            errors.insuranceType ? inputError : inputNormal
                          } appearance-none cursor-pointer`}
                        >
                          <option value="">Sélectionner...</option>
                          {insuranceTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.insuranceType && (
                          <p className="text-red-500 text-xs mt-1.5">
                            {errors.insuranceType}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Précisez vos besoins (optionnel)
                      </label>
                      <textarea
                      name="message"
                        rows={4}
                        placeholder="Décrivez votre situation et vos attentes..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({ ...form, message: e.target.value })
                        }
                        className={`${inputBase} ${inputNormal} resize-none`}
                      />
                    </div>

                    {/* Consent */}
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        required
                        className="mt-0.5 w-4 h-4 rounded accent-brand-500 shrink-0"
                      />
                      <span className="text-xs text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                        J&apos;accepte que mes données soient utilisées pour me
                        contacter. Conformément au{" "}
                        <a href="#" className="text-brand-500 hover:underline">
                          RGPD
                        </a>
                        , vous pouvez exercer vos droits à tout moment.
                      </span>
                    </label>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-base shadow-glow hover:shadow-lg hover:scale-[1.01] transition-all duration-200 disabled:opacity-70 disabled:scale-100 btn-press"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          Envoyer ma demande de devis
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-xs">
                      🔒 Vos données sont sécurisées et ne seront jamais revendues
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
