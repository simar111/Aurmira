import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutUsPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const mintGradientOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.8]);

  // Team data
  const teamMembers = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Lead Designer",
      bio: "With 12 years in luxury fashion, Priya brings avant-garde vision to Aurmira's collections.",
      image: "https://example.com/team1.jpg"
    },
    {
      id: 2,
      name: "Rahul Kapoor",
      role: "CEO & Founder",
      bio: "Serial entrepreneur with a passion for sustainable luxury and innovative retail experiences.",
      image: "https://example.com/team2.jpg"
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "Creative Director",
      bio: "Former art director at Vogue India, Aisha crafts Aurmira's distinctive visual language.",
      image: "https://example.com/team3.jpg"
    },
    {
      id: 4,
      name: "Vikram Patel",
      role: "Head of Sustainability",
      bio: "Pioneer in eco-conscious materials, ensuring Aurmira meets its 2025 sustainability goals.",
      image: "https://example.com/team4.jpg"
    }
  ];

  // Timeline data
  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description: "Aurmira was born from a vision to redefine luxury fashion with sustainability at its core.",
      image: "https://example.com/journey1.jpg"
    },
    {
      year: "2024",
      title: "First Collection",
      description: "Launched our debut line featuring ethically sourced materials and timeless designs.",
      image: "https://example.com/journey2.jpg"
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Opened flagship stores in Milan and Tokyo, bringing our vision to international markets.",
      image: "https://example.com/journey3.jpg"
    },
    {
      year: "Future",
      title: "Innovation Hub",
      description: "Plans to establish a sustainable fashion research center by 2026.",
      image: "https://example.com/journey4.jpg"
    }
  ];

  return (
    <div ref={ref} className="relative overflow-hidden bg-gray-900 text-gray-100 font-sans">
      {/* Particle Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <ParticleBackground />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[url('https://example.com/luxury-bg-about.jpg')] bg-cover bg-center"
          style={{ y: backgroundY }}
        />
        
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-teal-300/30 via-emerald-100/15 to-gray-700/70"
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
              background: "linear-gradient(45deg, #D8A7B1, #C1E1C5)"
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-200 to-teal-300 text-gray-900 font-semibold text-lg shadow-lg transition-all duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row items-center gap-12"
          >
            <div className="w-full md:w-1/2">
              <motion.img 
                src="https://example.com/aurmira-logo.png" 
                alt="Aurmira Logo"
                className="w-64 h-64 mx-auto object-contain"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
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

      {/* Our Journey Section */}
      <section className="py-20 px-6 bg-gray-800/50 backdrop-blur-md">
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
                      className="bg-gray-700/80 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl border border-gray-100/10"
                      whileHover={{ 
                        y: -10,
                        boxShadow: "0 25px 50px rgba(196, 162, 143, 0.3)"
                      }}
                    >
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-64 object-cover"
                      />
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

      {/* Team Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-serif font-bold mb-20 text-center text-teal-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meet The Visionaries
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="relative h-96"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
                  style={{ transformStyle: "preserve-3d" }}
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 bg-gray-700/80 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center justify-center border border-gray-100/10">
                    <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-teal-300/50 mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-gray-100 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-pink-200 font-medium">
                      {member.role}
                    </p>
                    <div className="mt-4 flex space-x-4">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-teal-300 to-amber-200"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-200 to-pink-200"></div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-200 to-teal-300"></div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-6 flex flex-col items-center justify-center border border-teal-300/20 rotate-y-180 backface-hidden">
                    <h3 className="text-xl font-serif font-semibold text-teal-300 mb-4">
                      {member.name}
                    </h3>
                    <p className="text-gray-200/90 text-center">
                      {member.bio}
                    </p>
                    <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-teal-300/50 to-transparent"></div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Commitment Section */}
      <section className="py-28 px-6 bg-gradient-to-br from-gray-800/70 to-gray-900/90 backdrop-blur-md">
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
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-300/30 border border-teal-300 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                  </div>
                  <span className="text-gray-200/90">
                    100% of our fabrics are either organic, recycled, or sustainably sourced
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-300/30 border border-teal-300 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                  </div>
                  <span className="text-gray-200/90">
                    Carbon-neutral shipping with 100% biodegradable packaging
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-300/30 border border-teal-300 flex items-center justify-center mr-4 mt-1">
                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                  </div>
                  <span className="text-gray-200/90">
                    Fair wages and ethical working conditions for all artisans
                  </span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-700/50 backdrop-blur-md rounded-2xl p-8 border border-gray-100/10">
                <h3 className="text-2xl font-serif font-semibold text-teal-300 mb-6 text-center">
                  Our 2025 Sustainability Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gray-800/70 rounded-xl p-6 text-center border border-teal-300/20">
                    <div className="text-5xl font-bold text-teal-300 mb-2">87%</div>
                    <div className="text-gray-200/80">Recycled Materials</div>
                  </div>
                  <div className="bg-gray-800/70 rounded-xl p-6 text-center border border-pink-200/20">
                    <div className="text-5xl font-bold text-pink-200 mb-2">64%</div>
                    <div className="text-gray-200/80">Reduced Water Usage</div>
                  </div>
                  <div className="bg-gray-800/70 rounded-xl p-6 text-center border border-amber-200/20">
                    <div className="text-5xl font-bold text-amber-200 mb-2">92%</div>
                    <div className="text-gray-200/80">Ethically Sourced</div>
                  </div>
                  <div className="bg-gray-800/70 rounded-xl p-6 text-center border border-emerald-100/20">
                    <div className="text-5xl font-bold text-emerald-100 mb-2">100%</div>
                    <div className="text-gray-200/80">Carbon Neutral</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-md rounded-3xl p-12 border border-teal-300/20"
        >
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
            className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-teal-300 to-pink-200 text-gray-900 font-semibold text-lg shadow-lg transition-all duration-300"
          >
            Return to Homepage
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

// Particle Background Component
const ParticleBackground = () => {
  return (
    <motion.canvas
      className="absolute inset-0 w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 2 }}
    >
      {(() => {
        // This would be replaced with actual canvas particle animation code
        if (typeof window !== 'undefined') {
          const canvas = document.querySelector('canvas');
          if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              
              // Particle system implementation would go here
              // Using theme colors: #C1E1C5, #D8A7B1, #C4A28F
            }
          }
        }
      })()}
    </motion.canvas>
  );
};

export default AboutUsPage;