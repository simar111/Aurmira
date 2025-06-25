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
    <nav className="bg-midnight shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="text-2xl font-poppins text-ivory font-bold"
              >
                Aurmira
              </motion.div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.path}
                  className="text-ivory hover:text-gold font-poppins text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-ivory shadow-lg rounded-lg py-2 hidden group-hover:block"
                  >
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.path}
                        className="block px-4 py-2 text-charcoal hover:bg-rose hover:text-ivory text-sm font-roboto transition-colors duration-200"
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
          <div className="hidden md:flex space-x-4 items-center">
            {icons.map((icon) => (
              <a
                key={icon.name}
                href={icon.path}
                className="text-ivory hover:text-gold transition-colors duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="text-xl"
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
                animate={{ rotate: isOpen ? 90 : 0 }}
                className="text-2xl"
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
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-midnight"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.path}
                    className="block text-ivory hover:text-gold font-poppins text-sm font-medium py-2 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="pl-4">
                      {item.submenu.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.path}
                          className="block text-ivory hover:text-rose font-roboto text-xs py-1 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex space-x-4 pt-4">
                {icons.map((icon) => (
                  <a
                    key={icon.name}
                    href={icon.path}
                    className="text-ivory hover:text-gold transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      className="text-xl"
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