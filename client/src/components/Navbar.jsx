import { useState, useRef, useEffect } from 'react';
import { Search, ShoppingBag, Heart, ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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

  // Define components that need access to state inside the Navbar component
  const MobileNavItem = ({ href, text, delay = 0 }) => (
    <Link
      to={href}
      className="block px-4 py-3 text-[#F8F3EB] font-medium text-[16px] tracking-wide rounded-lg hover:bg-[#6B9E7A]/20 transition-colors duration-200"
      onClick={() => setIsMenuOpen(false)}
    >
      {text}
    </Link>
  );

  const MobileSubItem = ({ href, text, highlighted = false, delay = 0 }) => (
    <Link
      to={href}
      className={`block px-4 py-2 text-[14px] ${highlighted ? 'text-[#D8A7B1] font-medium' : 'text-[#F8F3EB]'} rounded-md hover:bg-[#6B9E7A]/20 transition-colors duration-150`}
      onClick={() => setIsMenuOpen(false)}
    >
      {text}
    </Link>
  );

  const NavItem = ({ href, text, delay = 0, icon, ...props }) => (
    <Link
      to={href}
      className="relative text-[#F8F3EB] font-medium text-[15px] uppercase tracking-[0.15em] hover:text-[#C4A28F] transition-colors duration-300 group flex items-center"
      {...props}
    >
      {text}
      {icon && <span className="ml-1">{icon}</span>}
      <motion.span 
        className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A28F]"
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </Link>
  );

  const DropdownItem = ({ href, text, highlighted = false, delay = 0 }) => (
    <Link
      to={href}
      className={`block px-5 py-2.5 text-[14px] ${highlighted ? 'text-[#D8A7B1] font-semibold' : 'text-[#2E3247]'} hover:bg-gray-50/70 transition-all duration-200`}
    >
      {text}
    </Link>
  );

  const NavIcon = ({ icon, delay = 0, badge }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      className="relative"
    >
      <motion.button
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="text-[#F8F3EB] hover:text-[#C4A28F] transition-all duration-300 relative"
      >
        {icon}
        {badge && (
          <span className="absolute -top-1 -right-1 bg-[#D8A7B1] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {badge}
          </span>
        )}
      </motion.button>
    </motion.div>
  );

  const MobileNavIcon = ({ icon, badge }) => (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="text-[#F8F3EB] hover:text-[#C4A28F] transition-all duration-200 relative"
    >
      {icon}
      {badge && (
        <span className="absolute -top-1 -right-1 bg-[#D8A7B1] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {badge}
        </span>
      )}
    </motion.button>
  );

  return (
    <motion.nav 
      ref={navRef}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-gradient-to-r from-[#2E3247] via-[#6B9E7A] to-[#A8D4AE] backdrop-blur-xl border-b border-[#C4A28F]/20 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-8xl mx-auto px-6">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="block">
              <motion.div
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
              </motion.div>
            </Link>
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
                  icon={<ChevronDown size={16} className="ml-1" />}
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
              
              <NavItem href="/contact" text="Contact" delay={0.3} />
            </div>

            {/* Icons and Auth Links */}
            <motion.div 
              className="flex items-center space-x-8 ml-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.1 }}
            >
              <NavIcon icon={<Search size={20} strokeWidth={1.8} />} delay={0.4} />
              <NavIcon icon={<Heart size={20} strokeWidth={1.8} />} delay={0.45} />
              <NavIcon 
                icon={<ShoppingBag size={20} strokeWidth={1.8} />} 
                delay={0.5} 
                badge={3}
              />
              
              {/* Auth Links */}
              <div className="flex items-center space-x-4 ml-4">
                <Link 
                  to="/login"
                  className="px-4 py-2 text-[#F8F3EB] font-medium text-sm hover:text-[#C4A28F] transition-colors duration-200 relative group"
                >
                  Login
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A28F] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link 
                  to="/signup"
                  className="px-4 py-2 bg-[#C4A28F]/20 text-[#F8F3EB] font-medium text-sm rounded-md hover:bg-[#C4A28F]/30 transition-colors duration-200 border border-[#C4A28F]/30 relative group"
                >
                  Sign Up
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C4A28F] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.div 
            className="lg:hidden flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex flex-col items-center justify-center group"
              aria-label="Menu"
            >
              <motion.span
                className="block absolute h-[2px] w-6 bg-[#F8F3EB] rounded-full"
                animate={isMenuOpen ? 
                  { rotate: 45, y: 0, width: '24px' } : 
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
                  { rotate: -45, y: 0, width: '24px' } : 
                  { rotate: 0, y: 6, width: '24px' }
                }
                transition={{ duration: 0.3 }}
              />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#2E3247] w-full overflow-hidden shadow-xl border-t border-[#6B9E7A]/20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="px-6 py-4 space-y-1"
            >
              <div className="flex justify-end mb-2">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#F8F3EB] rounded-full hover:bg-[#6B9E7A]/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <MobileNavItem href="/" text="Home" />
              
              <div>
                <button 
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="flex justify-between items-center w-full px-4 py-3 text-[#F8F3EB] font-medium text-[15px] tracking-wide rounded-lg hover:bg-[#6B9E7A]/20 transition-colors"
                >
                  <span>Shop</span>
                  <motion.span
                    animate={{ rotate: isShopOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
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
                        <MobileSubItem href="#" text="Men" />
                        <MobileSubItem href="#" text="Women" highlighted />
                        <MobileSubItem href="#" text="Jewelry" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <MobileNavItem href="/contact" text="Contact" />
              
              {/* Mobile Auth Links */}
              <div className="pt-4 mt-2 border-t border-[#6B9E7A]/20">
                <Link 
                  to="/login"
                  className="block w-full px-4 py-3 mb-3 text-center text-[#F8F3EB] font-medium rounded-lg hover:bg-[#6B9E7A]/20 transition-colors border border-[#6B9E7A]/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/signup"
                  className="block w-full px-4 py-3 text-center bg-[#6B9E7A] text-[#2E3247] font-medium rounded-lg hover:bg-[#A8D4AE] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
              
              <div className="flex justify-center space-x-8 px-4 pt-6 pb-4 border-t border-[#6B9E7A]/20 mt-3">
                <MobileNavIcon icon={<Search size={20} strokeWidth={1.8} />} />
                <MobileNavIcon icon={<Heart size={20} strokeWidth={1.8} />} />
                <MobileNavIcon 
                  icon={<ShoppingBag size={20} strokeWidth={1.8} />} 
                  badge={3}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;