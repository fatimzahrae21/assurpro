"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, ChevronRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-light shadow-lg shadow-brand-500/5"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-teal-500 flex items-center justify-center shadow-glow group-hover:shadow-glow-amber transition-shadow duration-300">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span
              className={cn(
                "font-display font-700 text-xl tracking-tight transition-colors duration-300",
                scrolled ? "text-brand-900" : "text-white"
              )}
            >
              Assur<span className="text-brand-400">Pro</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-brand-400",
                  scrolled ? "text-brand-800" : "text-white/80"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+33123456789"
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled ? "text-brand-700" : "text-white/80"
              )}
            >
              01 23 45 67 89
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-sm font-semibold shadow-glow hover:shadow-lg hover:scale-105 transition-all duration-200 btn-press"
            >
              Devis gratuit
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg",
              scrolled ? "text-brand-800" : "text-white"
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass-light border-b border-brand-100 shadow-xl lg:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-brand-800 font-medium py-2 border-b border-brand-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="mt-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white text-center font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Devis gratuit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
