import { motion } from "framer-motion";
import { Phone, Mail, Instagram, Twitter, Linkedin, ChevronDown, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none"
        />
        
        <div className="absolute inset-0 bg-[url('https://example.com/cityscape.png')] bg-cover bg-center opacity-20"></div>
        
        <motion.div
          initial={{ opacity: 0, rotateY: 15 }}
          animate={{ opacity: 1, rotateY: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-4"
        >
          <motion.h1 
            className="font-playfair font-black text-6xl md:text-7xl lg:text-8xl mb-4 text-charcoal"
            whileHover={{ scale: 1.02 }}
          >
            Get in Touch with Aurmira
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            We're here to assist you
          </motion.p>
          <motion.button
            className="bg-rose-gold hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-full text-lg shadow-lg backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Now
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
            hidden: {}
          }}
        >
          {/* Address Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-rose-gold/20"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-8 h-8 text-rose-gold mr-3" />
              <h3 className="text-2xl font-semibold">Our Location</h3>
            </div>
            <p className="mb-6">123 Luxury Lane, Fashion District, Mumbai, India</p>
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
              {/* Simple map placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-pale-mint">
                <MapPin className="w-12 h-12 text-rose-gold animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-rose-gold/20"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
            
            <motion.div 
              className="flex items-center mb-4 hover:text-rose-gold cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-6 h-6 text-rose-gold mr-3" />
              <a href="tel:+919876543210" className="text-lg">+91 98765 43210</a>
            </motion.div>
            
            <motion.div 
              className="flex items-center hover:text-rose-gold cursor-pointer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail className="w-6 h-6 text-rose-gold mr-3" />
              <a href="mailto:support@aurmira.com" className="text-lg">support@aurmira.com</a>
            </motion.div>
          </motion.div>

          {/* Social Card */}
          <motion.div
            className="bg-white/80 backdrop-blur-md p-8 rounded-xl shadow-lg border border-rose-gold/20"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, name: "Instagram" },
                { icon: Twitter, name: "Twitter" },
                { icon: Linkedin, name: "LinkedIn" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-full bg-ivory flex items-center justify-center text-rose-gold hover:bg-rose-gold hover:text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-ivory/50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-xl shadow-2xl border border-rose-gold/30"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-2 text-center">Send Us a Message</h2>
            <p className="text-center mb-8 text-charcoal/80">We'll respond within 24 hours</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-rose-gold/20 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-rose-gold/20 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-rose-gold/20 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all appearance-none"
                >
                  <option value="">Select a subject</option>
                  <option value="support">Support</option>
                  <option value="order">Order Inquiry</option>
                  <option value="collab">Collaboration</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  className="w-full px-4 py-3 rounded-lg bg-white/70 backdrop-blur-sm border border-rose-gold/20 focus:border-rose-gold focus:ring-1 focus:ring-rose-gold/50 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-dusty-pink to-rose-gold text-white font-medium rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                className={`w-full flex justify-between items-center p-6 text-left ${activeAccordion === index ? 'bg-mint' : 'bg-mint/70'} transition-colors`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <motion.div
                className="bg-ivory overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: activeAccordion === index ? 'auto' : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="p-6 pt-2">{faq.answer}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0 bg-charcoal/10 flex items-center justify-center">
          {/* Simple map placeholder */}
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto text-rose-gold mb-4 animate-pulse" />
            <h3 className="text-2xl font-semibold">Store Locations</h3>
            <p className="mt-2">Mumbai • Delhi • Bangalore</p>
          </div>
        </div>
        
        {/* Store info overlay */}
        <motion.div 
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
      </section>
    </div>
  );
};

export default ContactPage;