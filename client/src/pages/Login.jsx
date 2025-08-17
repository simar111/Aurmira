import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '../components/Particles';
import FooterComponent from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced particle initialization
  useEffect(() => {
    const initialParticles = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 2,
      color: Math.random() > 0.5 ? '#D8A7B180' : '#C4A28F80',
      speed: Math.random() * 0.8 + 0.2,
      angle: Math.random() * Math.PI * 2
    }));
    setParticles(initialParticles);
  }, []);

  // Add floating animation to the main container
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovering(prev => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Login successful', { email, password });
        setIsLoading(false);
      }, 1500);
    }
  };
   const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pale-mint/30 via-mint/10 to-ivory/60 overflow-hidden">
      {/* Enhanced Particle Background */}
      <Particles particles={particles} />
      
      {/* Luxury Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://example.com/luxury-pattern.png')] bg-repeat bg-[length:300px_300px] mix-blend-overlay" />
      </div>
      
      {/* Animated Mint Green Accents */}
      <motion.div 
        animate={{
          x: [0, -10, 0, 10, 0],
          y: [0, 5, 0, -5, 0],
          rotate: [0, 1, -1, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-mint/10 blur-xl"
      />
      <motion.div 
        animate={{
          x: [0, 15, 0, -15, 0],
          y: [0, -10, 0, 5, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-rose-gold/10 blur-xl"
      />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40, rotateZ: 0.5 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateZ: 0,
            y: isHovering ? -5 : 0
          }}
          transition={{ 
            duration: 0.8,
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }
          }}
          className="w-full max-w-md space-y-8 backdrop-blur-xl bg-ivory/70 rounded-3xl p-10 shadow-2xl border border-ivory/20"
          style={{
            boxShadow: '0 25px 100px rgba(196,162,143,0.3)',
            background: 'linear-gradient(145deg, rgba(248,241,233,0.7) 0%, rgba(248,241,233,0.85) 100%)'
          }}
        >
          {/* Luxury Brand Header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <svg className="w-16 h-16 text-mint" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2L4,12L12,22L20,12L12,2M12,15.5C10.62,15.5 9.5,14.38 9.5,13C9.5,11.62 10.62,10.5 12,10.5C13.38,10.5 14.5,11.62 14.5,13C14.5,14.38 13.38,15.5 12,15.5Z" />
              </svg>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-5xl font-playfair font-bold text-charcoal/90"
              style={{ textShadow: '0 2px 10px rgba(193,225,197,0.3)' }}
            >
              Welcome Back
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-2 text-lg font-inter text-charcoal/70"
            >
              Step into Your <span className="text-mint font-medium">Luxury Journey</span>
            </motion.p>
          </div>

          {/* Enhanced Form Container */}
          <motion.form 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Email Field with Floating Label */}
            <div className="relative">
              <motion.input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer relative block w-full px-4 py-3 bg-transparent border-0 border-b-2 border-mint/50 text-charcoal/90 focus:outline-none focus:ring-0 focus:border-mint font-inter placeholder-transparent"
                placeholder=" "
              />
              <motion.label 
                htmlFor="email"
                className="absolute left-0 -top-5 text-sm text-mint font-medium font-inter transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-mint"
              >
                Email Address
              </motion.label>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-mint/20 overflow-hidden">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-mint to-rose-gold"
                />
              </div>
            </div>

            {/* Password Field with Floating Label */}
            <div className="relative pt-8">
              <motion.input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer relative block w-full px-4 py-3 bg-transparent border-0 border-b-2 border-mint/50 text-charcoal/90 focus:outline-none focus:ring-0 focus:border-mint font-inter placeholder-transparent"
                placeholder=" "
              />
              <motion.label 
                htmlFor="password"
                className="absolute left-0 -top-5 text-sm text-mint font-medium font-inter transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-mint"
              >
                Password
              </motion.label>
              <div className="absolute inset-x-0 bottom-0 h-0.5 bg-mint/20 overflow-hidden">
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-rose-gold to-mint"
                />
              </div>
            </div>

            {/* Enhanced Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-2">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center"
              >
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-5 w-5 text-mint focus:ring-mint border-mint/50 rounded transition-all duration-300"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-inter text-charcoal/70 hover:text-mint transition-colors duration-300">
                  Remember me
                </label>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="#"
                  className="text-sm font-medium text-rose-gold hover:text-mint transition-colors duration-300 flex items-center"
                >
                  Forgot password?
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Luxury Sign In Button */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="pt-6"
            >
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-lg font-medium font-playfair rounded-xl text-ivory bg-gradient-to-r from-mint to-mint-dark shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #C1E1C5 0%, #9DCCB2 100%)',
                  boxShadow: '0 4px 30px rgba(193, 225, 197, 0.4)'
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-mint-dark/20 to-mint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center">
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Signing in...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                      </svg>
                      Sign In
                    </>
                  )}
                </span>
              </button>
            </motion.div>
          </motion.form>

          {/* Luxury Social Login */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10"
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-mint/20"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-ivory/70 text-sm text-charcoal/60 font-inter">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {['Google', 'Facebook', 'Apple'].map((provider, index) => (
                <motion.div
                  key={provider}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  className="relative"
                >
                  <button
                    className="w-full flex justify-center items-center py-3 px-4 bg-ivory/80 border border-mint/20 rounded-xl hover:bg-ivory transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/0 to-mint/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <img 
                      src={`/icons/${provider.toLowerCase()}-icon.svg`} 
                      alt={`${provider} logo`} 
                      className="h-5 w-5"
                    />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Luxury Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-center"
          >
            <p className="text-sm font-inter text-charcoal/60">
              New to Aurmira?{' '}
              <motion.a
                href="/signup"
                className="font-medium text-mint hover:text-mint-dark transition-colors duration-300 relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative">
                  Create account
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mint/30 -z-10" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint transition-all duration-300 group-hover:w-full" />
                </span>
              </motion.a>
            </p>
            
            {/* Luxury Trust Badges */}
            <div className="mt-8 flex justify-center space-x-6">
              {['Secure Payments', 'Luxury Guarantee', '24/7 Support'].map((badge, index) => (
                <motion.div
                  key={badge}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <svg className="h-4 w-4 text-mint mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-inter text-charcoal/50">{badge}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default LoginPage;