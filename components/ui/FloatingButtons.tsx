"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp-style chat */}
      <motion.a
        href="tel:+33123456789"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
        title="Appeler un conseiller"
        aria-label="Appeler un conseiller"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Scroll to top */}
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
