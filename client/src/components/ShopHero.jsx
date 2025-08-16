import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HERO_GRADIENT = "bg-gradient-to-r from-[#6B9E7A] to-[#8FB9A8]";
const GOLD = "#D4A574";
const TEXT = "#F8F1E9";

export default function EnhancedHero() {
  const headlineControls = useAnimation();
  const subtextControls = useAnimation();
  const shimmerControls = useAnimation();

  useEffect(() => {
    headlineControls.start({
      opacity: [0, 1],
      y: [40, 0],
      scale: [0.98, 1],
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    });
    subtextControls.start({
      opacity: [0, 1],
      y: [32, 0],
      scale: [0.98, 1],
      transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
    });
    shimmerControls.start({
      x: ["-100%", "150%"],
      transition: { duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 },
    });
  }, [headlineControls, subtextControls, shimmerControls]);

  return (
    <div className={`relative ${HERO_GRADIENT} py-20 px-6 overflow-hidden min-h-[60vh] flex items-center justify-center`}>
      {/* Animated floating golden particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 3}px`,
              height: `${Math.random() * 3 + 3}px`,
              top: `${Math.random() * 90 + 5}%`,
              left: `${Math.random() * 95}%`,
              background: `radial-gradient(circle, ${GOLD}99 60%, transparent 100%)`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.25, 0.7, 0.25],
              scale: [1, 1.45, 1],
              x: [0, Math.random() * 10 - 5, 0],
              filter: ["blur(2px)", "blur(0.5px)", "blur(2px)"],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "mirror",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Soft glass morph overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-br from-white/15 via-[#F8F1E9]/15 to-transparent backdrop-blur-xl pointer-events-none z-10"
      />

      {/* Shimmer line accent */}
      <motion.div
        animate={shimmerControls}
        className="absolute top-1/3 left-0 w-[120%] h-1 bg-gradient-to-r from-transparent via-[#FFF6DD]/50 to-transparent z-20 opacity-70 pointer-events-none"
      />

      {/* Hero Content */}
      <div className="container mx-auto z-30 text-center relative">
        <motion.h1
          animate={headlineControls}
          className="text-5xl md:text-7xl font-extrabold font-playfair text-shadow-lg mb-7"
          style={{
            color: TEXT,
            textShadow: "0 6px 34px rgba(212,165,116,0.13), 0 1px 3px #2E324712",
          }}
        >
          Discover&nbsp;
          <span
            className="bg-gradient-to-r from-[#F8F1E9] via-[#D4A574] to-[#8FB9A8] bg-clip-text text-transparent drop-shadow-lg"
            style={{ fontWeight: 800 }}
          >
            Exquisite
          </span>
          &nbsp;Jewelry
        </motion.h1>
        <motion.p
          animate={subtextControls}
          className="text-lg md:text-xl font-medium mb-9 tracking-wide"
          style={{
            color: `${TEXT}`,
            textShadow: "0 2px 12px #2E324740",
            letterSpacing: "0.03em",
          }}
        >
          Handcrafted artificial jewelry that speaks to your soul
        </motion.p>
        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <motion.button
            whileHover={{
              scale: 1.09,
              boxShadow: "0 10px 40px -5px #6B9E7A99",
              background: "linear-gradient(90deg,#6B9E7A,#D4A574,#8FB9A8)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 340, damping: 18 }}
            className="px-9 py-4 font-semibold rounded-full transition-all text-base shadow-md bg-gradient-to-r from-[#D4A574]/75 to-[#8FB9A8]/80 text-[#2E3247] border border-[#F8F1E9]/40"
          >
            Shop Collection
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.06,
              borderColor: GOLD,
              background: "rgba(248, 241, 233, 0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 340, damping: 18 }}
            className="px-9 py-4 border rounded-full transition-all text-base font-semibold bg-white/30 text-[#D4A574] border-[#D4A574]/40"
          >
            Explore Lookbook
          </motion.button>
        </div>
      </div>

      {/* Decorative bottom gradient glow and scroll hint */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.5, y: 0 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#8FB9A8] via-[#F8F1E9]/60 to-transparent z-20 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-8 h-14 rounded-full border-2 border-[#F8F1E9]/90 flex justify-center items-center bg-white/5 shadow-md">
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-[#D4A574] mt-1"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
