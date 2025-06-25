import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop', submenu: [
      { name: 'Men', path: '/shop/men' },
      { name: 'Women', path: '/shop/women' },
      { name: 'Jewelry', path: '/shop/jewelry' },
    ] },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const icons = [
    { name: 'Search', path: '/search' },
    { name: 'Cart', path: '/cart' },
    { name: 'Wishlist', path: '/wishlist' },
    { name: 'User', path: '/profile' },
  ];

  return (
    <nav className="bg-gradient-to-r from-midnight to-charcoal backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-3xl font-poppins font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-ivory to-gold drop-shadow-lg"
              >
                Aurmira
              </motion.div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.path}
                  className="text-ivory hover:text-rose font-poppins text-base font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(184,151,120,0.5)]"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-56 bg-ivory/80 backdrop-blur-md shadow-2xl rounded-xl py-3 hidden group-hover:block z-50 border border-gold/10"
                  >
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.path}
                        className="block px-5 py-2 text-charcoal hover:bg-rose/50 hover:text-ivory font-roboto text-sm font-medium transition-all duration-200 hover:translate-x-2"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden md:flex space-x-6 items-center">
            {icons.map((icon) => (
              <a
                key={icon.name}
                href={icon.path}
                className="text-ivory hover:text-gold transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 15, boxShadow: '0 0 15px rgba(184,151,120,0.7)' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-2xl"
                >
                  {icon.name === 'Search' ? '🔍' : icon.name === 'Cart' ? '🛒' : icon.name === 'Wishlist' ? '❤️' : '👤'}
                </motion.div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ivory hover:text-gold focus:outline-none focus:text-gold"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 1.1 : 1 }}
                transition={{ duration: 0.3 }}
                className="text-3xl"
              >
                ☰
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 0.95, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-gradient-to-b from-midnight to-charcoal/80 backdrop-blur-md"
          >
            <div className="px-6 pt-4 pb-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.path}
                    className="block text-ivory hover:text-gold font-poppins text-lg font-semibold py-3 transition-all duration-300 hover:bg-ivory/10 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-6 mt-2 space-y-2">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.path}
                          className="block text-ivory hover:text-rose font-roboto text-base py-2 transition-all duration-200 hover:translate-x-3"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-around pt-6 border-t border-gold/20">
                {icons.map((icon) => (
                  <a
                    key={icon.name}
                    href={icon.path}
                    className="text-ivory hover:text-gold transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.3, rotate: 15, boxShadow: '0 0 20px rgba(184,151,120,0.7)' }}
                      whileTap={{ scale: 0.9 }}
                      className="text-2xl"
                    >
                      {icon.name === 'Search' ? '🔍' : icon.name === 'Cart' ? '🛒' : icon.name === 'Wishlist' ? '❤️' : '👤'}
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;