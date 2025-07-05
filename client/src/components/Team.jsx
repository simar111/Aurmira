import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModernTeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nitin Chhimpa",
      role: "Lead Designer",
      bio: "With 12 years in luxury fashion, Nitin brings avant-garde vision to Aurmira's collections.",
      image: "./images/Nitin.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Simar Narula",
      role: "CEO & Founder",
      bio: "Serial entrepreneur with a passion for sustainable luxury and innovative retail experiences.",
      image:"./images/Simar.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Vansh Kocher",
      role: "Creative Director",
      bio: "Former art director at Vogue India, crafts Aurmira's distinctive visual language.",
      image: "./images/Vansh.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 px-6 z-10 bg-gradient-to-b from-gray-900/10 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-amber-200 to-pink-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Creative Minds
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ModernTeamMember key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ModernTeamMember = ({ member, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative h-[500px] rounded-3xl overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent z-10" />
      
      {/* Floating name plate */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 z-20 px-6 text-center"
        animate={{
          y: hovered ? -20 : 0,
          opacity: hovered ? 1 : 0.9
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-2xl font-serif font-bold text-white mb-1">
          {member.name}
        </h3>
        <p className="text-teal-300 font-medium mb-4">
          {member.role}
        </p>
      </motion.div>
      
      {/* Bio panel that slides up */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-30 p-6"
        initial={{ y: '100%' }}
        animate={{ 
          y: hovered ? '0%' : '100%',
          height: hovered ? 'auto' : '40%'
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="text-gray-200 text-center">
          {member.bio}
        </p>
      </motion.div>
      
      {/* Main image */}
      <ImageWithFallback 
        src={member.image}
        fallback={member.fallbackImage}
        alt={`Portrait of ${member.name}`}
        className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 ease-out"
        style={{ 
          scale: hovered ? 1.05 : 1,
          filter: hovered ? 'brightness(0.8)' : 'brightness(0.7)'
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-6 right-6 z-20">
        <motion.div 
          className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-300 to-pink-200 flex items-center justify-center text-gray-900 font-bold shadow-lg"
          animate={{
            rotate: hovered ? 360 : 0,
            scale: hovered ? 1.1 : 1
          }}
          transition={{ duration: 0.6 }}
        >
          {member.id}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ImageWithFallback = ({ src, fallback, alt, className, style }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.img
      src={imgSrc}
      alt={alt}
      className={`${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      onLoad={() => setLoaded(true)}
      onError={() => {
        setImgSrc(fallback);
        console.log(`Falling back to alternative image for ${alt}`);
      }}
    />
  );
};

export default ModernTeamSection;