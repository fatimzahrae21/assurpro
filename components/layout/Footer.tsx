"use client";

import { Shield, Twitter, Linkedin, Facebook, Instagram, ChevronRight } from "lucide-react";
import { navLinks, services } from "@/lib/data";

const footerServices = services.map((s) => ({ label: s.title, href: `#${s.id}` }));

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGV", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-white">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-semibold">
                Assur<span className="text-brand-400">Pro</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Courtier en assurances agréé ORIAS. Nous vous aidons à trouver les meilleures garanties au meilleur prix depuis 2015.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-500 flex items-center justify-center transition-colors duration-200"
                >
                  <s.icon className="w-4 h-4 text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-white/90">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-teal-400 text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1.5 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-white/90">Nos Assurances</h4>
            <ul className="space-y-3">
              {footerServices.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-teal-400 text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -ml-1.5 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold mb-5 text-white/90">Restez informé</h4>
            <p className="text-white/50 text-sm mb-4">
              Conseils, actualités assurance et offres exclusives dans votre boîte mail.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="votre@email.fr"
                className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-brand-400 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} AssurPro. Tous droits réservés. ORIAS n° 15004321.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/30 hover:text-white/60 text-xs transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
