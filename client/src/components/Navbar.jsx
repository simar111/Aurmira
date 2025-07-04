import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-gradient-to-r from-[#2E3247] via-[#6B9E7A] to-[#A8D4AE] backdrop-blur-xl border-b border-[#C4A28F]/20 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo with advanced animation */}
        <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="flex-shrink-0"
          >
            <motion.a
              href="#"
              className="block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img 
                src='./images/Logo1.png'
                alt="Aurmira Logo" 
                className="h-10 w-auto" 
              />
              <motion.span 
                className="block h-[1.5px] bg-gradient-to-r from-[#4CAF50] to-transparent mt-1"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <div className="flex space-x-10">
              <NavItem href="/" text="Home" delay={0.2} />
              
              <div className="relative">
                <NavItem 
                  text="Shop" 
                  delay={0.25}
                  onMouseEnter={() => setIsShopOpen(true)}
                />
                
                <AnimatePresence>
                  {isShopOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-0 mt-1 w-56 bg-white/97 backdrop-blur-2xl rounded-lg shadow-2xl py-2 z-50 border border-white/10 overflow-hidden"
                      onMouseLeave={() => setIsShopOpen(false)}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.05 }}
                      >
                        <DropdownItem href="#" text="Men" delay={0} />
                        <DropdownItem href="#" text="Women" highlighted delay={0.05} />
                        <DropdownItem href="#" text="Jewelry" delay={0.1} />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <NavItem href="/about" text="About" delay={0.3} />
              <NavItem href="/contact" text="Contact" delay={0.35} />
            </div>

            {/* Icons with advanced interactions */}
            <motion.div 
              className="flex items-center space-x-8 ml-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <NavIcon icon={<Search size={20} strokeWidth={1.8} />} delay={0.4} />
              <NavIcon icon={<Heart size={20} strokeWidth={1.8} />} delay={0.45} />
              <NavIcon icon={<ShoppingBag size={20} strokeWidth={1.8} />} delay={0.5} />
              <NavIcon icon={<User size={20} strokeWidth={1.8} />} delay={0.55} />
            </motion.div>
          </div>

          {/* Ultra-modern mobile menu button */}
          <motion.div 
            className="lg:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-8 h-8 flex flex-col items-center justify-center group"
              aria-label="Menu"
            >
              <motion.span
                className="block absolute h-[2px] w-6 bg-[#F8F3EB] rounded-full"
                animate={isMenuOpen ? 
                  { rotate: 45, y: 0, width: '100%' } : 
                  { rotate: 0, y: -6, width: '24px' }
                }
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="block absolute h-[2px] w-6 bg-[#F8F3EB] rounded-full"
                animate={isMenuOpen ? 
                  { opacity: 0, x: -10 } : 
                  { opacity: 1, x: 0 }
                }
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block absolute h-[2px] w-6 bg-[#F8F3EB] rounded-full"
                animate={isMenuOpen ? 
                  { rotate: -45, y: 0, width: '100%' } : 
                  { rotate: 0, y: 6, width: '16px' }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Premium mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-white/98 backdrop-blur-3xl w-full overflow-hidden shadow-xl border-t border-white/10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-6 py-4 space-y-1"
            >
              <MobileNavItem href="#" text="Home" delay={0} />
              
              <div>
                <button 
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="flex justify-between items-center w-full px-4 py-3 text-[#2E3247] font-montserrat font-semibold text-[15px] tracking-wide"
                >
                  <span>Shop</span>
                  <motion.span
                    animate={{ rotate: isShopOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {isShopOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-6 overflow-hidden"
                    >
                      <div className="space-y-1 py-1">
                        <MobileSubItem href="#" text="Men" delay={0} />
                        <MobileSubItem href="#" text="Women" highlighted delay={0.05} />
                        <MobileSubItem href="#" text="Jewelry" delay={0.1} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <MobileNavItem href="#" text="About" delay={0.15} />
              <MobileNavItem href="#" text="Contact" delay={0.2} />
              
              <motion.div 
                className="flex justify-center space-x-8 px-4 pt-6 pb-4 border-t border-white/10 mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
              >
                <MobileNavIcon icon={<Search size={20} strokeWidth={1.8} />} />
                <MobileNavIcon icon={<Heart size={20} strokeWidth={1.8} />} />
                <MobileNavIcon icon={<ShoppingBag size={20} strokeWidth={1.8} />} />
                <MobileNavIcon icon={<User size={20} strokeWidth={1.8} />} />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Enhanced Components with Animation
const NavItem = ({ href, text, delay = 0, ...props }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, y: -5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="relative text-[#F8F3EB] font-montserrat font-medium text-[14px] uppercase tracking-[0.15em] hover:text-[#C4A28F] transition-colors duration-300 group"
    {...props}
  >
    {text}
    <motion.span 
      className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A28F]"
      whileHover={{ width: '100%' }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    />
  </motion.a>
);

const DropdownItem = ({ href, text, highlighted = false, delay = 0 }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -5 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className={`block px-5 py-2.5 text-[14px] ${highlighted ? 'text-[#D8A7B1] font-semibold' : 'text-[#2E3247]'} hover:bg-gray-50/70 transition-all duration-200`}
  >
    {text}
  </motion.a>
);

const NavIcon = ({ icon, delay = 0 }) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="text-[#F8F3EB] hover:text-[#C4A28F] transition-all duration-300"
  >
    {icon}
  </motion.button>
);

const MobileNavItem = ({ href, text, delay = 0 }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="block px-4 py-3 text-[#2E3247] font-montserrat font-semibold text-[15px] tracking-wide rounded-lg hover:bg-gray-50/50 transition-colors duration-200"
  >
    {text}
  </motion.a>
);

const MobileSubItem = ({ href, text, highlighted = false, delay = 0 }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, x: -5 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className={`block px-4 py-2 text-[13px] ${highlighted ? 'text-[#D8A7B1] font-medium' : 'text-[#2E3247]'} rounded-md hover:bg-gray-50/50 transition-colors duration-150`}
  >
    {text}
  </motion.a>
);

const MobileNavIcon = ({ icon }) => (
  <motion.button
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.9 }}
    className="text-[#2E3247] hover:text-[#C4A28F] transition-all duration-200"
  >
    {icon}
  </motion.button>
);

export default Navbar;