import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "+919912614274"; // Replace with your number (country code + number, no + or spaces)
const WHATSAPP_MESSAGE =
  "Hi Nikhil! I came across your portfolio and would like to connect.";

const WhatsAppButton = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank");
  };

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip Card */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative bg-[#020b18] border border-cyan-500/20 rounded-2xl shadow-xl shadow-black/40 p-4 max-w-[220px]"
          >
            {/* Dismiss button */}
            <button
              onClick={() => setIsTooltipVisible(true)}
              className="absolute top-2 right-2 p-1 rounded-full text-gray-600 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
            >
              <X className="h-3 w-3" />
            </button>

            {/* Avatar + name */}
            <div className="flex items-center gap-3 mb-3 pr-4">
              <div className="w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs font-black font-mono text-white">
                  Nikhil Marati
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-green-400">
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Message bubble */}
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl rounded-tl-none px-3 py-2 mb-3">
              <p className="text-xs font-mono text-gray-400 leading-relaxed">
                👋 Hey! Feel free to reach out. I typically reply within a few
                hours.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={handleClick}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-mono font-semibold hover:bg-green-500/20 hover:border-green-500/40 transition-all duration-200"
            >
              {/* WhatsApp SVG icon */}
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start a Chat
            </button>

            {/* Pointer arrow */}
            <div className="absolute -bottom-2 right-5 w-3 h-3 bg-[#020b18] border-r border-b border-cyan-500/20 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB button */}
      <motion.button
        onClick={() => setIsTooltipVisible((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 1 }}
        className="relative w-14 h-14 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-400 shadow-lg shadow-green-500/10 hover:bg-green-500/25 hover:border-green-500/50 transition-all duration-200"
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-green-500/10 animate-ping" />

        <AnimatePresence mode="wait">
          {isTooltipVisible ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="whatsapp"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
