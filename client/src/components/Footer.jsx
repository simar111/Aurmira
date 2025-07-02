import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Twitter, Facebook, Send } from 'lucide-react';
import { useState } from 'react';

const FooterComponent = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setEmail('');
  };

  return (
    <footer className="bg-charcoal/90 text-ivory relative overflow-hidden">
      {/* Enhanced mint green gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/20 via-pale-mint/15 to-transparent opacity-30 mix-blend-overlay" />
      <div className="container mx-auto px-6 lg:px-16 py-14 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-14">
          {/* Company Info */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-mint via-rose-gold to-dusty-pink mb-5">Aurmira</h3>
            <p className="text-sm md:text-base text-ivory/85 mb-5 leading-relaxed">
              Elevating luxury fashion and jewelry with timeless elegance and sustainability.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-pale-mint/80" />
                <span className="text-sm md:text-base text-ivory/85">support@aurmira.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-pale-mint/80" />
                <span className="text-sm md:text-base text-ivory/85">+91 98765 43210</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-mint via-rose-gold to-dusty-pink mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Shop', 'About', 'Contact'].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8, color: '#D8A7B1' }}
                  transition={{ duration: 0.4 }}
                >
                  <a href="#" className="text-sm md:text-base text-ivory/85 hover:text-dusty-pink transition-colors duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-mint via-rose-gold to-dusty-pink mb-5">Connect With Us</h3>
            <div className="flex space-x-5">
              {[
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Facebook, href: '#' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.3, rotate: 20, color: '#C4A28F' }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="text-ivory/85 hover:text-rose-gold"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-mint via-rose-gold to-dusty-pink mb-5">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3 bg-charcoal/80 text-ivory/90 border border-mint/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-pale-mint transition-all duration-400"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.1, backgroundColor: '#D8A7B1' }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="w-full px-5 py-3 bg-gradient-to-r from-mint to-rose-gold text-charcoal font-semibold rounded-xl flex items-center justify-center space-x-3"
              >
                <span>Subscribe</span>
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 md:mt-16 pt-6 border-t border-mint/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm md:text-base text-ivory/70">
            © {new Date().getFullYear()} Aurmira. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterComponent;