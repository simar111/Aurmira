import { motion, useMotionValue, animate, useAnimation } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const AurmiraHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const autoplayInterval = useRef(null);
  const textControls = useAnimation();

  // Slides data
  const slides = [
    {
      id: 1,
      title: "Timeless Elegance",
      subtitle: "AURMIRA SIGNATURE",
      description: "Where contemporary design meets uncompromising quality in every detail",
      bgImage: "/images/Bg.png",
      color: "#6B9E7A",
      textColor: "#2E3247",
      highlightColor: "#F8F1E9"
    },
    {
      id: 2,
      title: "Modern Luxury",
      subtitle: "AURMIRA COLLECTION",
      description: "Crafting spaces that embody sophistication and comfort",
      bgImage: "/images/Men.png",
      color: "#8FB9A8",
      textColor: "#2E3247",
      highlightColor: "#F8F1E9"
    },
    {
      id: 3,
      title: "Refined Living",
      subtitle: "AURMIRA ESSENCE",
      description: "Elevating everyday moments with exceptional design",
      bgImage: "/images/womenhero.png",
      color: "#A7D7C5",
      textColor: "#2E3247",
      highlightColor: "#F8F1E9"
    }
  ];

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const startAutoplay = () => {
      autoplayInterval.current = setInterval(() => {
        nextSlide();
      }, 6000);
    };

    const stopAutoplay = () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };

    startAutoplay();
    return () => stopAutoplay();
  }, [currentSlide]);

  // Animation for slide transition
  useEffect(() => {
    const transition = async () => {
      await textControls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.4 }
      });
      
      await controls.start({
        x: -currentSlide * 100 + '%',
        transition: { type: 'spring', stiffness: 300, damping: 30 }
      });

      await textControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      });
    };

    transition();
  }, [currentSlide, controls, textControls]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative overflow-hidden min-h-[90vh] md:min-h-screen w-full">
      {/* Slider container */}
      <div className="relative w-full h-full" ref={sliderRef}>
        <motion.div
          className="flex w-full h-full"
          animate={controls}
          style={{ x: useMotionValue(-currentSlide * 100 + '%') }}
        >
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className="w-full flex-shrink-0 relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center"
            >
              {/* Background image with enhanced overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                style={{ 
                  backgroundImage: `url(${slide.bgImage})`,
                  zIndex: -2,
                  filter: 'brightness(0.7)'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-t from-[#2E3247]/70 via-[${slide.color}]/20 to-transparent`}></div>
                <div className="absolute inset-0 bg-[#2E3247]/20"></div>
              </div>

              {/* Animated floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(windowWidth < 768 ? 15 : 30)].map((_, i) => {
                  const size = windowWidth < 768 ? Math.random() * 4 + 2 : Math.random() * 6 + 3;
                  return (
                    <motion.div
                      key={i}
                      className="absolute rounded-full backdrop-blur-[1px]"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        backgroundColor: `rgba(248, 241, 233, ${Math.random() * 0.3 + 0.1})`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.1, 0.4, 0.1],
                        scale: [1, 1.5, 1],
                        x: [0, Math.random() * 20 - 10, 0]
                      }}
                      transition={{
                        duration: Math.random() * 20 + 15,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                        delay: Math.random() * 10
                      }}
                    />
                  );
                })}
              </div>

              {/* Subtle grid overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="h-full w-full grid grid-cols-12 gap-0">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="border-r border-[#F8F1E9]"></div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="container mx-auto px-5 sm:px-6 lg:px-8 py-12 md:py-24 relative z-10">
                <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center">
                  <motion.div
                    animate={textControls}
                    className="px-4"
                  >
                    <motion.div
                      className="inline-flex items-center justify-center mb-5 md:mb-8"
                    >
                      <div className="relative overflow-hidden">
                        <motion.span 
                          className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase inline-block"
                          style={{ color: slide.highlightColor }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        >
                          {slide.subtitle}
                        </motion.span>
                        <motion.span 
                          className="absolute bottom-0 left-0 w-full h-px bg-[#6B9E7A]"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ delay: 0.6, duration: 1.2 }}
                        />
                      </div>
                    </motion.div>

                    <motion.h1
                      className="text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-8 font-playfair leading-tight"
                      style={{ textShadow: '0 2px 10px rgba(46, 50, 71, 0.3)' }}
                    >
                      <motion.span 
                        style={{ color: slide.highlightColor }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                      >
                        {slide.title.split(' ')[0]}
                      </motion.span>
                      <br />
                      <motion.span 
                        style={{ 
                          color: slide.color,
                          textShadow: `0 2px 20px ${slide.color}40`
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                      >
                        {slide.title.split(' ')[1]}
                      </motion.span>
                    </motion.h1>

                    <motion.div
                      className={`w-20 sm:w-24 md:w-28 h-px mx-auto mb-6 md:mb-8`}
                      style={{ 
                        background: `linear-gradient(90deg, transparent 0%, ${slide.highlightColor} 50%, transparent 100%)`
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.7, duration: 1.2 }}
                    />

                    <motion.p
                      className="text-lg md:text-xl mb-8 sm:mb-10 md:mb-12 max-w-md sm:max-w-lg md:max-w-xl mx-auto font-medium font-inter tracking-wide leading-relaxed"
                      style={{ 
                        color: slide.highlightColor,
                        textShadow: '0 1px 3px rgba(46, 50, 71, 0.5)'
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9, duration: 1.2 }}
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1, duration: 0.8 }}
                    >
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: `0 10px 40px -5px ${slide.color}60`
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="px-7 sm:px-8 md:px-9 py-3.5 font-medium rounded-full transition-all text-sm sm:text-base md:text-[0.95rem] relative overflow-hidden group"
                        style={{ 
                          backgroundColor: slide.color,
                          color: slide.textColor
                        }}
                      >
                        <span className="relative z-10 flex items-center">
                          Shop Collection
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                        <motion.span 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.8 }}
                        />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: 'rgba(248, 241, 233, 0.15)',
                          borderColor: slide.highlightColor
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                        className="px-7 sm:px-8 md:px-9 py-3.5 border rounded-full transition-all text-sm sm:text-base md:text-[0.95rem]"
                        style={{ 
                          borderColor: `${slide.highlightColor}/50`,
                          color: slide.highlightColor,
                          backgroundColor: 'rgba(248, 241, 233, 0.05)'
                        }}
                      >
                        Explore Lookbook
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 pointer-events-none z-20">
        <motion.button 
          onClick={prevSlide}
          className="pointer-events-auto p-3 rounded-full bg-[#2E3247]/30 backdrop-blur-md hover:bg-[#2E3247]/50 transition-all shadow-lg"
          aria-label="Previous slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="h-6 w-6 text-[#F8F1E9]" />
        </motion.button>
        <motion.button 
          onClick={nextSlide}
          className="pointer-events-auto p-3 rounded-full bg-[#2E3247]/30 backdrop-blur-md hover:bg-[#2E3247]/50 transition-all shadow-lg"
          aria-label="Next slide"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="h-6 w-6 text-[#F8F1E9]" />
        </motion.button>
      </div>

      {/* Enhanced Pagination dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all flex items-center justify-center`}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
          >
            <motion.span 
              className={`block rounded-full transition-all ${currentSlide === index ? 'bg-[#F8F1E9]' : 'bg-[#F8F1E9]/50'}`}
              animate={{
                width: currentSlide === index ? 24 : 8,
                height: currentSlide === index ? 8 : 8
              }}
              transition={{ type: 'spring', stiffness: 500 }}
            />
          </motion.button>
        ))}
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2E3247] to-transparent z-10 opacity-50"></div>

      {/* Subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-[#F8F1E9]/70 flex justify-center">
          <motion.div 
            className="w-1 h-2 rounded-full bg-[#F8F1E9] mt-1"
            animate={{
              y: [0, 4, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.2
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AurmiraHero;