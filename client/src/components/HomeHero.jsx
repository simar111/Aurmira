import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const AurmiraHero = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const floatingY = useMotionValue(0);
  const textOpacity = useMotionValue(0);
  const textY = useMotionValue(20);
  const bgScale = useMotionValue(1);
  const bgPosition = useMotionValue('50%');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const position = windowWidth < 640 ? '25%' : 
                   windowWidth < 768 ? '30%' : 
                   'center';
    
    animate(bgPosition, position, {
      duration: 0.8,
      ease: 'easeOut'
    });

    const scale = windowWidth < 768 ? 1.05 : 1.02;
    animate(bgScale, scale, {
      duration: 0.8,
      ease: 'easeOut'
    });

    animate(floatingY, [0, -15, 0], {
      duration: 15,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut'
    });

    animate(textOpacity, 1, { duration: 1.2, ease: [0.16, 1, 0.3, 1] });
    animate(textY, 0, { duration: 1, ease: [0.16, 1, 0.3, 1] });
  }, [windowWidth]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center">
      {/* Background with reduced overlay darkness */}
      <motion.div 
        className="absolute inset-0 bg-cover brightness-90"
        style={{
          backgroundImage: "url('/images/Home.png')",
          scale: bgScale,
          backgroundPositionX: bgPosition,
          backgroundPositionY: 'center',
          zIndex: -1
        }}
      >
        <div className={`absolute inset-0 ${
          windowWidth < 768 ? 'bg-[#2E3247]/40' : 
          'bg-gradient-to-t from-[#2E3247]/60 via-[#6B9E7A]/30 to-transparent'
        }`}></div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(windowWidth < 768 ? 12 : 24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#2E3247]/30 backdrop-blur-[1px]"
            style={{
              width: windowWidth < 768 ? Math.random() * 3 + 1 : Math.random() * 5 + 2,
              height: windowWidth < 768 ? Math.random() * 3 + 1 : Math.random() * 5 + 2,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              y: floatingY,
            }}
            animate={{
              opacity: [0.05, 0.2, 0.05],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
          <motion.div
            style={{
              opacity: textOpacity,
              y: textY
            }}
            className="px-4"
          >
            <motion.div
              className="inline-flex items-center justify-center mb-5 md:mb-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#2E3247] uppercase inline-block">
                  AURMIRA SIGNATURE
                </span>
                <motion.span 
                  className="absolute top-0 left-0 w-6 h-full bg-[#2E3247]/30"
                  initial={{ x: -30 }}
                  animate={{ x: '180%' }}
                  transition={{
                    delay: 1.2,
                    duration: 1.8,
                    repeat: Infinity,
                    repeatDelay: 4
                  }}
                  style={{
                    transform: 'skewX(-25deg)'
                  }}
                />
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-8 font-playfair"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[#2E3247]">
                TIMELESS
              </span>
              <br />
              <span className="text-[#6B9E7A]">
                ELEGANCE
              </span>
            </motion.h1>

            <motion.div
              className={`w-20 sm:w-24 md:w-28 h-px bg-gradient-to-r from-transparent via-[#2E3247]/80 to-transparent mx-auto mb-6 md:mb-8`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.p
              className="text-lg md:text-xl text-[#2E3247] mb-8 sm:mb-10 md:mb-12 max-w-md sm:max-w-lg md:max-w-xl mx-auto font-medium font-inter tracking-wide leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Where contemporary design meets<br className="xs:hidden" /> uncompromising quality in every detail
            </motion.p>

            <motion.div
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 8px 32px -4px rgba(46, 50, 71, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="px-6 sm:px-7 md:px-8 py-3 bg-[#2E3247] hover:bg-[#2E3247]/90 text-[#F8F1E9] font-medium rounded-full transition-all text-sm sm:text-base md:text-[0.95rem] relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Shop Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-[#2E3247]/40 to-[#6B9E7A]/40 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: 'rgba(46, 50, 71, 0.08)',
                  borderColor: 'rgba(46, 50, 71, 0.6)'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="px-6 sm:px-7 md:px-8 py-3 bg-[#F8F1E9]/5 border border-[#2E3247]/50 hover:border-[#2E3247]/80 text-[#2E3247] font-medium rounded-full transition-all text-sm sm:text-base md:text-[0.95rem]"
              >
                Explore Lookbook
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AurmiraHero;