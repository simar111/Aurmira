import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TeamSection from '../components/Team';
import FooterComponent from '../components/Footer';
const AboutUsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Enhanced parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mintGradientOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  // Team data with fallback images
  const teamMembers = [
  {
    id: 1,
    name: "Nitin Chhimpa",
    role: "Lead Designer",
    bio: "With 12 years in luxury fashion, Nitin brings avant-garde vision to Aurmira's collections.",
    image: "/images/Nitin.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format"
  },
  {
    id: 2,
    name: "Simar Narula",
    role: "CEO & Founder",
    bio: "Serial entrepreneur with a passion for sustainable luxury and innovative retail experiences.",
    image: "/images/Simar.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format"
  },
  {
    id: 3,
    name: "Vansh Kocher",
    role: "Creative Director",
    bio: "Former art director at Vogue India, crafts Aurmira's distinctive visual language.",
    image: "/images/Vansh.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format"
  }
];
  // Enhanced timeline data with better images
  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "Aurmira was born from a vision to redefine luxury fashion with sustainability at its core.",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&auto=format"
    },
    {
      year: "2024",
      title: "First Collection",
      description: "Launched our debut line featuring ethically sourced materials and timeless designs.",
      image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=800&auto=format"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Opened flagship stores in Milan and Tokyo, bringing our vision to international markets.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&auto=format"
    },
    {
      year: "Future",
      title: "Innovation Hub",
      description: "Plans to establish a sustainable fashion research center by 2026.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format"
    }
  ];

  // Enhanced hero background with dynamic time-based gradient
  const getTimeBasedGradient = () => {
    const hours = new Date().getHours();
    if (hours >= 6 && hours < 12) {
      return "bg-gradient-to-br from-teal-300/40 via-amber-200/20 to-pink-200/30";
    } else if (hours >= 12 && hours < 18) {
      return "bg-gradient-to-br from-teal-400/50 via-amber-300/30 to-pink-300/40";
    } else {
      return "bg-gradient-to-br from-teal-500/60 via-amber-400/40 to-pink-400/50";
    }
  };

  return (
    <div ref={ref} className="relative overflow-hidden bg-gray-900 text-gray-100 font-sans">
      {/* Enhanced Particle Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <ParticleBackground />
      </div>

      {/* Hero Section with Dynamic Gradient */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1920&auto=format')] bg-cover bg-center"
          style={{ y: backgroundY }}
        />
        
        <motion.div 
          className={`absolute inset-0 ${getTimeBasedGradient()}`}
          style={{ opacity: mintGradientOpacity }}
        />
        
        <motion.div 
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-amber-200 to-pink-200"
            style={{ y: textY }}
          >
            Our Story
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl max-w-3xl mx-auto mb-12 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Crafting Luxury, Embracing Elegance
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.1,
              background: "linear-gradient(45deg, #D8A7B1, #C1E1C5)",
              boxShadow: "0 0 30px rgba(193, 225, 197, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-200 to-teal-300 text-gray-900 font-semibold text-lg shadow-lg transition-all duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>
      </section>

      {/* Brand Philosophy Section with Enhanced Logo Animation */}
      <section className="relative py-28 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2">
              <motion.div
                className="relative w-64 h-64 mx-auto"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-300 via-amber-200 to-pink-200 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <img 
                      src="https://example.com/aurmira-logo.png" 
                      alt="Aurmira Logo"
                      className="w-3/4 h-3/4 object-contain"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format";
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <motion.h2 
                className="text-4xl md:text-5xl font-serif font-bold mb-8 text-teal-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Our Philosophy
              </motion.h2>
              <div className="text-lg md:text-xl leading-relaxed text-gray-200 space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  At Aurmira, we believe luxury should be both exquisite and ethical. Founded in 2023, our mission is to blend sustainable practices with timeless design, creating pieces that transcend trends while respecting our planet.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Each garment and jewelry piece is crafted with meticulous attention to detail, using responsibly sourced materials and artisanal techniques passed down through generations. We challenge the fast fashion paradigm by offering collections designed to last a lifetime.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Journey Section with 3D Cards */}
      <section className="py-20 px-6 bg-gray-800/50 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-amber-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-teal-300/50 to-pink-200/50 transform -translate-x-1/2"></div>
            
            <div className="space-y-24 md:space-y-0">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex flex-col md:flex-row items-center justify-center mb-16"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div 
                      className="bg-gray-700/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-100/10 relative group"
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 25px 50px rgba(196, 162, 143, 0.3)",
                        transform: "perspective(1000px) rotateX(5deg) rotateY(5deg)"
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={milestone.image} 
                          alt={milestone.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=800&auto=format";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-teal-300 to-pink-200 flex items-center justify-center text-gray-900 font-bold text-xl">
                            {milestone.year}
                          </div>
                          <h3 className="ml-4 text-2xl font-serif font-semibold text-gray-100">
                            {milestone.title}
                          </h3>
                        </div>
                        <p className="text-gray-200/90">
                          {milestone.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <TeamSection />

      {/* Ultra-Modern Team Section with Guaranteed Images */}
    
    
   
   
 
              
              
            {/* Back of card */}
          
              
               
             

      {/* Enhanced Sustainability Commitment Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-gray-800/70 to-gray-900/90 backdrop-blur-md z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-amber-200">
                Our Commitment
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
                Sustainability isn't just a trend for us—it's woven into every fiber of our business. From sourcing to packaging, we prioritize the planet without compromising on luxury.
              </p>
              <ul className="space-y-4">
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-300/30 border border-teal-300 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></div>
                  </div>
                  <span className="text-gray-200/90">
                    100% of our fabrics are either organic, recycled, or sustainably sourced
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-300/30 border border-teal-300 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></div>
                  </div>
                  <span className="text-gray-200/90">
                    Carbon-neutral shipping with 100% biodegradable packaging
                  </span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-300/30 border border-teal-300 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></div>
                  </div>
                  <span className="text-gray-200/90">
                    Fair wages and ethical working conditions for all artisans
                  </span>
                </motion.li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-700/50 backdrop-blur-md rounded-2xl p-8 border border-gray-100/10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-300/10 filter blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-pink-200/10 filter blur-3xl"></div>
                <h3 className="text-2xl font-serif font-semibold text-teal-300 mb-6 text-center relative z-10">
                  Our 2025 Sustainability Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <motion.div 
                    className="bg-gray-800/70 rounded-xl p-6 text-center border border-teal-300/20 hover:border-teal-300/40 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-5xl font-bold text-teal-300 mb-2">87%</div>
                    <div className="text-gray-200/80">Recycled Materials</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800/70 rounded-xl p-6 text-center border border-pink-200/20 hover:border-pink-200/40 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-5xl font-bold text-pink-200 mb-2">64%</div>
                    <div className="text-gray-200/80">Reduced Water Usage</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800/70 rounded-xl p-6 text-center border border-amber-200/20 hover:border-amber-200/40 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-5xl font-bold text-amber-200 mb-2">92%</div>
                    <div className="text-gray-200/80">Ethically Sourced</div>
                  </motion.div>
                  <motion.div 
                    className="bg-gray-800/70 rounded-xl p-6 text-center border border-emerald-100/20 hover:border-emerald-100/40 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-5xl font-bold text-emerald-100 mb-2">100%</div>
                    <div className="text-gray-200/80">Carbon Neutral</div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer CTA */}
      <section className="py-20 px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-3xl p-12 border border-teal-300/20 relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-teal-300/10 filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-pink-200/10 filter blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-teal-300">
              Experience Aurmira
            </h2>
            <p className="text-xl text-gray-200/90 mb-10 max-w-2xl mx-auto">
              Discover our curated collections that redefine modern luxury with a conscience.
            </p>
            <motion.a
              href="/"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(193, 225, 197, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-teal-300 to-pink-200 text-gray-900 font-semibold text-lg shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Return to Homepage</span>
              <span className="absolute inset-0 bg-gradient-to-r from-pink-200 to-teal-300 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </div>
        </motion.div>
      </section>
      
    </div>
    
  );
};

// Enhanced Particle Background Component
const ParticleBackground = () => {
  useEffect(() => {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Particle system
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 30 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 1 - 0.5,
        speedY: Math.random() * 1 - 0.5,
        color: `hsl(${Math.random() * 60 + 150}, 70%, ${Math.random() * 30 + 50}%)`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <motion.canvas
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    />
  );
};

export default AboutUsPage;