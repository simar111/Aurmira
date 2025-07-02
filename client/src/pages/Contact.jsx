import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Twitter, Linkedin, ChevronDown, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import FooterComponent from "../components/Footer";


const ContactPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const particlesRef = useRef(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      question: "What are your shipping times?",
      answer: "We process orders within 1-2 business days. Domestic shipping takes 3-5 days, international 7-14 days."
    },
    {
      question: "What is your return policy?",
      answer: "You may return unworn items with tags within 30 days for a full refund. Jewelry must be in original packaging."
    },
    {
      question: "How do I care for my jewelry?",
      answer: "Avoid contact with water, perfumes, and chemicals. Store in the provided pouch when not wearing."
    }
  ];

  // Simple particle animation setup
  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current;
      particles.innerHTML = Array(30).fill(0).map(() => 
        `<div class="absolute w-2 h-2 rounded-full bg-rose-gold opacity-70" 
          style="top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
          animation: float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s;"></div>`
      ).join('');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-mint to-pale-mint font-inter text-charcoal">
      
      {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center bg-emerald-950 overflow-hidden font-sans px-4 py-12 sm:px-8">
  {/* Particle canvas */}
  <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-0" />

  {/* Background Image */}
  <div className="absolute inset-0 bg-[url('https://example.com/luxury-bg.jpg')] bg-cover bg-center opacity-10 mix-blend-soft-light z-0" />

  {/* Glow and gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 to-black/90 z-0" />

  {/* Sparkles / grain */}
  <div className="absolute inset-0 z-0 pointer-events-none">
    <div className="w-full h-full animate-pulse bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[length:20px_20px]" />
  </div>

  {/* Blurred color blobs */}
  <div className="absolute top-[10%] left-[5%] w-80 h-80 bg-amber-500 opacity-20 blur-[100px] rounded-full z-0"></div>
  <div className="absolute bottom-[15%] right-[10%] w-72 h-72 bg-yellow-400 opacity-10 blur-[80px] rounded-full z-0"></div>

  {/* Split Layout */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl w-full">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="text-white text-center md:text-left px-4"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-extrabold bg-gradient-to-r from-gold via-yellow-300 to-white text-transparent bg-clip-text drop-shadow-xl mb-6 leading-tight">
        Let’s Connect <br /> with <span className="text-white">Aurmira</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
        Whether it’s style guidance, order help, or business inquiries — we’re here to chat and collaborate.
      </p>
    </motion.div>

    {/* Right Contact Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2 }}
      className="relative bg-white/5 backdrop-blur-2xl border border-amber-100/10 shadow-[0_10px_40px_rgba(255,215,0,0.15)] rounded-3xl p-10 text-center"
    >
      <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-gold via-amber-400 to-gold blur-xl opacity-20 animate-pulse pointer-events-none" />
      <div className="relative z-10">
        <h2 className="text-2xl font-semibold text-white mb-4">Reach Out Now</h2>
        <p className="text-gray-300 mb-6">We typically respond within a few hours.</p>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-gradient-to-r from-gold via-amber-400 to-gold text-black font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none"
        >
          Contact Now
        </motion.button>
      </div>
    </motion.div>
  </div>
</section>




      {/* Contact Information */}
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0f2f1b] via-[#1e3d2b] to-[#1b3426] text-white">
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      visible: { transition: { staggerChildren: 0.25 } },
      hidden: {}
    }}
  >
    {/* Address Card */}
    <motion.div
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-rose-500/20 transition-all duration-300"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
    >
      <div className="flex items-center mb-5">
        <MapPin className="w-7 h-7 text-[#e5b299] mr-3" />
        <h3 className="text-2xl font-playfair font-semibold tracking-wide">Our Location</h3>
      </div>
      <p className="text-lg text-white/80 mb-6 font-inter">
        123 Luxury Lane,<br /> Fashion District, Mumbai, India
      </p>
      <div className="h-48 rounded-xl overflow-hidden border border-white/10">
        <div className="w-full h-full flex items-center justify-center bg-[#e0f0e6]/10">
          <MapPin className="w-10 h-10 text-[#e5b299] animate-pulse" />
        </div>
      </div>
    </motion.div>

    {/* Contact Card */}
    <motion.div
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-rose-500/20 transition-all duration-300"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
    >
      <h3 className="text-2xl font-playfair font-semibold tracking-wide mb-6">Contact Details</h3>
      
      <motion.div
        className="flex items-center mb-4 hover:text-[#e5b299] cursor-pointer transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Phone className="w-5 h-5 mr-3 text-[#e5b299]" />
        <a href="tel:+919876543210" className="text-lg font-inter">+91 98765 43210</a>
      </motion.div>

      <motion.div
        className="flex items-center hover:text-[#e5b299] cursor-pointer transition-all"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <Mail className="w-5 h-5 mr-3 text-[#e5b299]" />
        <a href="mailto:support@aurmira.com" className="text-lg font-inter">support@aurmira.com</a>
      </motion.div>
    </motion.div>

    {/* Social Card */}
    <motion.div
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl hover:shadow-rose-500/20 transition-all duration-300"
      variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
    >
      <h3 className="text-2xl font-playfair font-semibold tracking-wide mb-6">Connect With Us</h3>
      <div className="flex space-x-4">
        {[
          { icon: Instagram, name: "Instagram" },
          { icon: Twitter, name: "Twitter" },
          { icon: Linkedin, name: "LinkedIn" }
        ].map((social, idx) => (
          <motion.a
            key={idx}
            href="#"
            className="w-12 h-12 rounded-full border border-white/20 bg-white/10 text-[#e5b299] hover:bg-[#e5b299] hover:text-white transition-colors flex items-center justify-center"
            whileHover={{ scale: 1.12, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </motion.div>
  </motion.div>
</section>


      {/* Contact Form */}
    {/* 🌿 Contact Section */}
<section className="py-24 px-6 bg-gradient-to-b from-[#eaf1eb] via-[#f8f8f5] to-[#fefcfb]">
  <div className="max-w-5xl mx-auto">
    <motion.div 
      className="bg-white/70 backdrop-blur-xl p-10 md:p-14 rounded-3xl shadow-2xl border border-[#e5b299]/30"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-3 text-center text-[#1e2b26]">
        Send Us a Message
      </h2>
      <p className="text-center mb-10 text-[#4a4a4a] text-lg">
        We usually respond within 24 hours. Your satisfaction is our priority.
      </p>

      <form className="space-y-8 text-[#1e2b26]">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">Your Name</label>
            <input 
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-5 py-4 rounded-xl bg-white/80 border border-[#e5b299]/30 focus:ring-[#e5b299]/50 focus:border-[#e5b299] transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">Email Address</label>
            <input 
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-5 py-4 rounded-xl bg-white/80 border border-[#e5b299]/30 focus:ring-[#e5b299]/50 focus:border-[#e5b299] transition-all"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block mb-2 font-semibold">Subject</label>
          <select 
            id="subject"
            className="w-full px-5 py-4 rounded-xl bg-white/80 border border-[#e5b299]/30 focus:ring-[#e5b299]/50 focus:border-[#e5b299] appearance-none transition-all"
          >
            <option value="">Select a subject</option>
            <option value="support">Support</option>
            <option value="order">Order Inquiry</option>
            <option value="collab">Collaboration</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold">Your Message</label>
          <textarea 
            id="message"
            rows="5"
            placeholder="How can we help you?"
            className="w-full px-5 py-4 rounded-xl bg-white/80 border border-[#e5b299]/30 focus:ring-[#e5b299]/50 focus:border-[#e5b299] transition-all"
          ></textarea>
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-[#c59d84] to-[#d68895] text-white font-semibold text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </div>
</section>
<section className="py-24 px-6 max-w-5xl mx-auto">
  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-14 text-[#1e2b26]">
    Frequently Asked Questions
  </h2>

  <div className="space-y-6">
    {faqs.map((faq, index) => (
      <motion.div 
        key={index}
        className="rounded-xl overflow-hidden shadow-md border border-[#d6e2d6] bg-white/80 backdrop-blur-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        {/* Toggle Button */}
        <motion.button
          className={`w-full flex justify-between items-center px-6 py-5 text-left transition-colors ${
            activeAccordion === index ? 'bg-[#eaf1eb]' : 'bg-[#f5f8f6]'
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <span className="font-semibold text-lg text-[#1e2b26]">{faq.question}</span>
          <motion.div
            animate={{ rotate: activeAccordion === index ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-[#7e8e7c]" />
          </motion.div>
        </motion.button>

        {/* Expandable Answer */}
        <motion.div
          className="overflow-hidden bg-[#fefcfb]"
          initial={{ height: 0 }}
          animate={{ height: activeAccordion === index ? 'auto' : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="px-6 pb-6 text-[#4a4a4a]">
            {faq.answer}
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</section>

<FooterComponent />
      {/* Map Section */}
      {/* <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-charcoal/10 flex items-center justify-center"> */}
          {/* Simple map placeholder */}
          {/* <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto text-rose-gold mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold">Store Locations</h3>
            <p className="mt-2">Mumbai • Delhi • Bangalore</p>
          </div>
        </div> */}
        
        {/* Store info overlay */}
        {/* <motion.div 
          className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xs"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="font-semibold text-lg mb-2">Flagship Store</h4>
          <p className="mb-2">123 Luxury Lane, Mumbai</p>
          <p>Open 10AM - 8PM daily</p>
        </motion.div>
      </section> */}
    </div>
  );
};

export default ContactPage;