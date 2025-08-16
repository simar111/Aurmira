import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Sparkle, ChevronDown, Gem } from "lucide-react";

const MINT_PRIMARY = "#6B9E7A";
const MINT_SECONDARY = "#8FB9A8";
const GOLD_LIGHT = "#D4A574";
const GOLD_DARK = "#F0D5A8";
const CREAM = "#F8F5F0";
const DARK_NAVY = "#2E3247";

export default function LuxuryHero() {
  const controls = useAnimation();
  const bgControls = useAnimation();

useEffect(() => {
  bgControls.start({
    opacity: 1,
    backgroundPosition: ["0% 0%", "100% 100%"],
    transition: { duration: 20, repeat: Infinity, repeatType: "mirror" }
  });

  controls.start({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
  });
}, [controls, bgControls]);


  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: DARK_NAVY }}
    >
      {/* Animated Background */}
      <motion.div
        animate={bgControls}
        className="absolute inset-0 z-0 opacity-90"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${MINT_PRIMARY}20 0%, transparent 25%),
            radial-gradient(circle at 80% 70%, ${MINT_SECONDARY}15 0%, transparent 30%),
            linear-gradient(135deg, ${DARK_NAVY} 0%, #3A4058 100%)
          `,
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Delicate Floral Pattern */}
      <div className="absolute inset-0 z-1 opacity-10">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern 
            id="floral" 
            x="0" 
            y="0" 
            width="80" 
            height="80" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M20,20 Q30,10 40,20 T60,20 T80,20" 
              fill="none" 
              stroke={MINT_SECONDARY} 
              strokeWidth="1"
            />
            <circle cx="40" cy="20" r="2" fill={MINT_PRIMARY} />
            <circle cx="60" cy="20" r="2" fill={MINT_PRIMARY} />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#floral)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Geometric Mint Shapes */}
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={`mint-${i}`}
            className="absolute rounded-lg"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              background: `linear-gradient(45deg, ${MINT_PRIMARY}${Math.floor(Math.random() * 20 + 10)}, ${MINT_SECONDARY}${Math.floor(Math.random() * 20 + 10)})`,
              opacity: 0.15,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5
            }}
          />
        ))}
        
        {/* Gold Accent Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`gold-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              background: `radial-gradient(circle, ${GOLD_LIGHT} 0%, ${GOLD_DARK} 100%)`,
              opacity: 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 z-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full backdrop-blur-sm border"
            style={{
              background: 'rgba(107, 158, 122, 0.2)',
              borderColor: 'rgba(143, 185, 168, 0.5)'
            }}
          >
            <Gem className="w-5 h-5" style={{ color: GOLD_LIGHT }} />
            <span 
              className="text-sm font-medium tracking-wider"
              style={{
                color: CREAM,
                letterSpacing: '0.1em',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              LUXURY COLLECTION
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
            style={{
              color: CREAM,
              fontFamily: "'Playfair Display', serif",
              textShadow: '0 4px 12px rgba(0,0,0,0.3)',
              lineHeight: '1.15'
            }}
          >
            <span className="block mb-4">Timeless Elegance</span>
            <span 
              className="bg-clip-text text-transparent"
              style={{
                background: `linear-gradient(135deg, ${MINT_PRIMARY} 0%, ${MINT_SECONDARY} 100%)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                display: 'inline-block'
              }}
            >
              Crafted in Mint
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 0.8 }
            }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
            style={{
              color: `${CREAM}DD`,
              textShadow: '0 2px 8px rgba(0,0,0,0.2)',
              letterSpacing: '0.03em',
              lineHeight: '1.7'
            }}
          >
            Discover our exquisite mint-inspired jewelry collection where modern luxury meets timeless craftsmanship.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.6, staggerChildren: 0.1 }
            }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 10px 30px -5px ${MINT_PRIMARY}80`
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-8 sm:px-10 py-3 sm:py-4 font-medium rounded-full transition-all text-base sm:text-lg"
              style={{
                background: `linear-gradient(135deg, ${MINT_PRIMARY} 0%, ${MINT_SECONDARY} 100%)`,
                color: DARK_NAVY
              }}
            >
              Shop Collection
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: MINT_SECONDARY,
                backgroundColor: 'rgba(143, 185, 168, 0.15)'
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="px-8 sm:px-10 py-3 sm:py-4 border rounded-full transition-all text-base sm:text-lg font-medium"
              style={{
                borderColor: MINT_SECONDARY,
                color: MINT_SECONDARY,
                backgroundColor: 'rgba(248, 245, 240, 0.05)'
              }}
            >
              View Lookbook
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0],
          transition: { 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer"
      >
        <div className="flex flex-col items-center">
          <div 
            className="w-10 h-16 rounded-full border flex justify-center items-start pt-2 backdrop-blur-sm"
            style={{
              borderColor: MINT_SECONDARY,
              background: 'rgba(107, 158, 122, 0.1)'
            }}
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-4 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${MINT_PRIMARY}, ${MINT_SECONDARY})`
              }}
            />
          </div>
          <span 
            className="mt-2 text-xs font-medium tracking-wider"
            style={{
              color: MINT_SECONDARY
            }}
          >
            EXPLORE MORE
          </span>
        </div>
      </motion.div>
    </div>
  );
}