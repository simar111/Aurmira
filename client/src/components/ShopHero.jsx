import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Sparkles, ChevronDown, Gem, Star, ArrowRight, Play } from "lucide-react";

const MINT_PRIMARY = "#6B9E7A";
const MINT_SECONDARY = "#8FB9A8";
const GOLD_LIGHT = "#D4A574";
const GOLD_DARK = "#F0D5A8";
const CREAM = "#F8F5F0";
const DARK_NAVY = "#2E3247";

export default function LuxuryHero() {
  const controls = useAnimation();
  const bgControls = useAnimation();
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -25]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    // Enhanced background animation
    bgControls.start({
      opacity: 1,
      backgroundPosition: ["0% 0%", "100% 100%", "0% 100%"],
      transition: { 
        duration: 25, 
        repeat: Infinity, 
        repeatType: "loop",
        ease: "linear"
      }
    });

    // Staggered content animation
    controls.start({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15
      }
    });
  }, [controls, bgControls]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    ref.current?.addEventListener('mousemove', handleMouseMove);
    return () => ref.current?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: DARK_NAVY }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced Animated Background with Parallax */}
      <motion.div
        animate={bgControls}
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `
              radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${MINT_PRIMARY}25 0%, transparent 40%),
              radial-gradient(circle at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%, ${MINT_SECONDARY}20 0%, transparent 35%),
              conic-gradient(from 45deg at 50% 50%, ${DARK_NAVY} 0deg, #3A4058 120deg, ${DARK_NAVY} 240deg, #4A5568 360deg)
            `,
            backgroundSize: '150% 150%'
          }}
        />
        
        {/* Mesh Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 20% 40%, ${MINT_PRIMARY}15 0%, transparent 60%),
              radial-gradient(ellipse 60% 80% at 80% 60%, ${GOLD_LIGHT}10 0%, transparent 50%),
              linear-gradient(135deg, transparent 30%, ${MINT_SECONDARY}08 70%)
            `
          }}
        />
      </motion.div>
      
      {/* Interactive Grid Pattern */}
      <motion.div 
        className="absolute inset-0 z-1 opacity-20"
        style={{ y: y2 }}
      >
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern 
              id="modernGrid" 
              x="0" 
              y="0" 
              width="120" 
              height="120" 
              patternUnits="userSpaceOnUse"
            >
              <path 
                d="M 120 0 L 0 0 0 120" 
                fill="none" 
                stroke={MINT_SECONDARY} 
                strokeWidth="0.5"
                opacity="0.3"
              />
              <circle 
                cx="60" 
                cy="60" 
                r="1.5" 
                fill={MINT_PRIMARY}
                opacity="0.6"
              />
            </pattern>
            
            <radialGradient id="gridFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#modernGrid)" mask="url(#gridFade)" />
        </svg>
      </motion.div>

      {/* Dynamic Floating Elements */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
        style={{ y: y1 }}
      >
        {/* Enhanced Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className="absolute"
            style={{
              width: `${Math.random() * 120 + 40}px`,
              height: `${Math.random() * 120 + 40}px`,
              background: i % 3 === 0 
                ? `linear-gradient(${Math.random() * 360}deg, ${MINT_PRIMARY}${Math.floor(Math.random() * 15 + 10)}, ${MINT_SECONDARY}${Math.floor(Math.random() * 15 + 10)})`
                : `radial-gradient(circle, ${GOLD_LIGHT}${Math.floor(Math.random() * 20 + 10)} 0%, transparent 70%)`,
              borderRadius: i % 4 === 0 ? '50%' : `${Math.random() * 30 + 10}px`,
              opacity: 0.12,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 60 - 30],
              rotate: [0, Math.random() * 720 - 360],
              opacity: [0.08, 0.18, 0.08],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Sparkle Effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={isHovered ? {
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            <Sparkles className="w-6 h-6" style={{ color: GOLD_LIGHT }} />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="container mx-auto px-6 z-20 relative"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Enhanced Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full backdrop-blur-md border group cursor-pointer"
            style={{
              background: 'rgba(107, 158, 122, 0.15)',
              borderColor: 'rgba(143, 185, 168, 0.4)',
              boxShadow: '0 8px 32px rgba(107, 158, 122, 0.1)'
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Gem className="w-5 h-5" style={{ color: GOLD_LIGHT }} />
            </motion.div>
            <span 
              className="text-sm font-semibold tracking-wider group-hover:tracking-widest transition-all duration-300"
              style={{
                color: CREAM,
                letterSpacing: '0.12em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              PREMIUM LUXURY COLLECTION 2025
            </span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" style={{ color: GOLD_LIGHT }} />
              ))}
            </div>
          </motion.div>

          {/* Enhanced Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none mb-4"
              style={{
                color: CREAM,
                fontFamily: "'Playfair Display', serif",
                textShadow: '0 6px 20px rgba(0,0,0,0.4)',
                letterSpacing: '-0.02em'
              }}
            >
              <motion.span 
                className="block mb-2"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                Timeless
              </motion.span>
              <motion.span 
                className="bg-clip-text text-transparent block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: `linear-gradient(135deg, ${MINT_PRIMARY} 0%, ${MINT_SECONDARY} 50%, ${GOLD_LIGHT} 100%)`,
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                }}
              >
                Elegance
              </motion.span>
            </motion.h1>
            
            {/* Decorative Line */}
            <motion.div 
              className="w-32 h-1 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              style={{
                background: `linear-gradient(90deg, ${MINT_PRIMARY}, ${GOLD_LIGHT}, ${MINT_SECONDARY})`
              }}
            />
          </motion.div>

          {/* Enhanced Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }
            }}
            className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            style={{
              color: `${CREAM}E6`,
              textShadow: '0 3px 10px rgba(0,0,0,0.3)',
              letterSpacing: '0.02em'
            }}
          >
            Discover our exquisite mint-inspired jewelry collection where 
            <span style={{ color: MINT_SECONDARY, fontWeight: 500 }}> modern luxury </span>
            meets 
            <span style={{ color: GOLD_LIGHT, fontWeight: 500 }}> timeless craftsmanship</span>.
            Each piece tells a story of elegance.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ 
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 1, staggerChildren: 0.15 }
            }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 15px 40px -10px ${MINT_PRIMARY}60`,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group px-12 py-4 font-semibold rounded-full transition-all text-lg relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${MINT_PRIMARY} 0%, ${MINT_SECONDARY} 100%)`,
                color: DARK_NAVY,
                boxShadow: `0 10px 25px -5px ${MINT_PRIMARY}40`
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Shop Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: GOLD_LIGHT,
                backgroundColor: 'rgba(212, 165, 116, 0.15)',
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="group px-12 py-4 border-2 rounded-full transition-all text-lg font-semibold relative overflow-hidden"
              style={{
                borderColor: MINT_SECONDARY,
                color: MINT_SECONDARY,
                backgroundColor: 'rgba(248, 245, 240, 0.08)',
                boxShadow: `0 8px 20px -5px ${MINT_SECONDARY}30`
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Play className="w-5 h-5" />
                Watch Story
              </span>
            </motion.button>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { number: "10K+", text: "Happy Customers" },
              { number: "500+", text: "Unique Designs" },
              { number: "5⭐", text: "Average Rating" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: MINT_SECONDARY }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <div 
                  className="text-sm opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ color: CREAM }}
                >
                  {stat.text}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 2 }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 cursor-pointer group"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          className="flex flex-col items-center"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-8 h-14 rounded-full border-2 flex justify-center items-start pt-2 backdrop-blur-md relative overflow-hidden group-hover:border-opacity-100 transition-all duration-300"
            style={{
              borderColor: `${MINT_SECONDARY}80`,
              background: 'rgba(107, 158, 122, 0.1)'
            }}
          >
            <motion.div
              animate={{
                y: [0, 6, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-1 h-3 rounded-full"
              style={{
                background: `linear-gradient(to bottom, ${MINT_PRIMARY}, ${MINT_SECONDARY})`
              }}
            />
          </div>
          <motion.span 
            className="mt-3 text-xs font-medium tracking-widest opacity-80 group-hover:opacity-100 transition-opacity"
            style={{ color: MINT_SECONDARY }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SCROLL TO EXPLORE
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}
