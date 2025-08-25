import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Twitter, 
  Facebook, 
  Send, 
  MapPin,
  Clock,
  Shield,
  Truck,
  Award,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';

const FooterComponent = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Subscribed with:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-charcoal via-charcoal/95 to-charcoal/90 text-ivory relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-mint/15 via-pale-mint/10 to-rose-gold/8 opacity-40" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-mint/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-dusty-pink/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 py-16 md:py-24 relative z-10">
        {/* Trust Badges Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20"
        >
          {[
            { icon: Shield, text: "100% Authentic Jewelry", desc: "Certified quality guarantee" },
            { icon: Truck, text: "Free Worldwide Shipping", desc: "On orders above ₹5,000" },
            { icon: Award, text: "Lifetime Warranty", desc: "On all premium pieces" }
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-mint/10 to-rose-gold/10 backdrop-blur-sm border border-mint/20 hover:border-mint/40 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-gradient-to-r from-mint/20 to-pale-mint/20">
                <badge.icon className="w-6 h-6 text-mint" />
              </div>
              <div>
                <h4 className="font-semibold text-ivory text-sm md:text-base">{badge.text}</h4>
                <p className="text-xs md:text-sm text-ivory/70">{badge.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-mint via-rose-gold to-dusty-pink bg-clip-text text-transparent mb-4">
                Aurmira
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-mint to-rose-gold rounded-full mb-4" />
            </motion.div>
            
            <p className="text-sm md:text-base text-ivory/85 mb-6 leading-relaxed">
              Crafting exquisite artificial jewelry that captures the essence of luxury and elegance for the modern connoisseur.
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, text: "support@aurmira.com", href: "mailto:support@aurmira.com" },
                { icon: Phone, text: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: MapPin, text: "Mumbai, India", href: "#" },
                { icon: Clock, text: "Mon-Sat: 9AM-8PM", href: "#" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  whileHover={{ x: 8 }}
                  className="flex items-center group cursor-pointer"
                >
                  <contact.icon className="w-5 h-5 mr-3 text-pale-mint/80 group-hover:text-mint transition-colors" />
                  <span className="text-sm md:text-base text-ivory/85 group-hover:text-ivory transition-colors">
                    {contact.text}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-mint to-rose-gold bg-clip-text text-transparent mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                'New Arrivals', 'Bestsellers', 'Necklaces', 'Earrings', 
                'Bracelets', 'Rings', 'Gift Cards', 'Size Guide'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <a 
                    href="#" 
                    className="text-sm md:text-base text-ivory/80 hover:text-dusty-pink transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Care */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-mint to-rose-gold bg-clip-text text-transparent mb-6">
              Customer Care
            </h3>
            <ul className="space-y-3">
              {[
                'Track Your Order', 'Shipping Info', 'Returns & Exchange', 
                'Care Instructions', 'FAQ', 'Live Chat', 'Wholesale', 'Careers'
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <a 
                    href="#" 
                    className="text-sm md:text-base text-ivory/80 hover:text-dusty-pink transition-all duration-300 flex items-center group"
                  >
                    <ChevronRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-mint to-rose-gold bg-clip-text text-transparent mb-6">
              Stay Connected
            </h3>
            
            <p className="text-sm text-ivory/80 mb-6">
              Subscribe for exclusive offers, new arrivals, and jewelry care tips.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="relative mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-charcoal/60 backdrop-blur-sm text-ivory border border-mint/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-mint/50 focus:border-mint/50 transition-all duration-400 placeholder-ivory/50"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubscribed}
                className={`w-full px-6 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-3 transition-all duration-400 ${
                  isSubscribed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gradient-to-r from-mint to-rose-gold text-charcoal hover:shadow-lg hover:shadow-mint/25'
                }`}
              >
                <span>{isSubscribed ? 'Subscribed!' : 'Subscribe Now'}</span>
                <Send size={18} className={isSubscribed ? 'hidden' : 'block'} />
              </motion.button>
            </form>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-ivory">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: '#', color: 'hover:text-pink-400' },
                  { icon: Facebook, href: '#', color: 'hover:text-blue-400' },
                  { icon: Twitter, href: '#', color: 'hover:text-blue-300' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-gradient-to-r from-mint/20 to-rose-gold/20 backdrop-blur-sm border border-mint/20 text-ivory/80 ${social.color} transition-all duration-300 hover:border-mint/40`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 md:mt-20 pt-8 border-t border-gradient-to-r from-transparent via-mint/20 to-transparent"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-ivory/70 text-center md:text-left">
              © {new Date().getFullYear()} Aurmira. All rights reserved. Crafted with ❤️ in India.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm text-ivory/70">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ color: '#B8E6B8' }}
                  className="hover:text-mint transition-colors duration-300"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterComponent;
