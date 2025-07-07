import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '../components/Particles';
import React from 'react';

const EnhancedSignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: null,
    agreeTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [particles, setParticles] = useState([]);
  const [isHovering, setIsHovering] = useState(false);

  // Enhanced particle initialization
  useEffect(() => {
    const initialParticles = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 6 + 2,
      color: Math.random() > 0.5 ? '#D8A7B180' : '#C4A28F80',
      speed: Math.random() * 0.8 + 0.2,
      angle: Math.random() * Math.PI * 2
    }));
    setParticles(initialParticles);
  }, []);

  // Floating animation for the form
  useEffect(() => {
    const interval = setInterval(() => {
      setIsHovering(prev => !prev);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'profilePic' && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const validateForm = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = 'Required';
      if (!formData.lastName) newErrors.lastName = 'Required';
      if (!formData.email) newErrors.email = 'Required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email';
    }
    
    if (step === 2) {
      if (!formData.password) newErrors.password = 'Required';
      else if (formData.password.length < 8) newErrors.password = 'Minimum 8 characters';
      
      if (!formData.confirmPassword) newErrors.confirmPassword = 'Required';
      else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
      
      if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(currentStep)) {
      setIsLoading(true);
      setTimeout(() => {
        console.log('Sign up successful', formData);
        setIsLoading(false);
      }, 1500);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pale-mint/30 via-mint/10 to-ivory/60 overflow-hidden">
      {/* Enhanced Particle Background */}
      <Particles particles={particles} />
      
      {/* Luxury Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-5 bg-[url('https://example.com/luxury-geometric.png')] bg-repeat bg-[length:200px_200px] mix-blend-overlay" />
        
        <motion.div 
          animate={{
            x: [0, -15, 0, 15, 0],
            y: [0, 10, 0, -10, 0],
            rotate: [0, 2, -1, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-mint/10 blur-xl"
        />
        <motion.div 
          animate={{
            x: [0, 20, 0, -20, 0],
            y: [0, -15, 0, 10, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-rose-gold/10 blur-xl"
        />
      </div>

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
          className="w-full max-w-2xl space-y-8 backdrop-blur-xl bg-ivory/70 rounded-3xl p-10 shadow-2xl border border-ivory/20"
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
              className="inline-block mb-6"
            >
              <svg className="w-20 h-20 text-mint" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2L4,12L12,22L20,12L12,2M12,15.5C10.62,15.5 9.5,14.38 9.5,13C9.5,11.62 10.62,10.5 12,10.5C13.38,10.5 14.5,11.62 14.5,13C14.5,14.38 13.38,15.5 12,15.5Z" />
              </svg>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-4xl font-playfair font-bold text-charcoal/90 tracking-tight"
              style={{ textShadow: '0 2px 10px rgba(193,225,197,0.3)' }}
            >
              Join Aurmira
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-3 text-lg font-inter text-charcoal/70"
            >
              Begin Your <span className="text-mint font-medium">Exclusive Journey</span>
            </motion.p>
          </div>

          {/* Enhanced Step Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="flex items-center">
              {[1, 2].map((step) => (
                <React.Fragment key={step}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center justify-center w-12 h-12 rounded-full ${currentStep === step ? 'bg-mint text-ivory' : 'bg-ivory/80 text-charcoal/70'} transition-all duration-300 border-2 ${currentStep === step ? 'border-mint-dark' : 'border-mint/30'} shadow-sm`}
                  >
                    <span className="text-lg font-medium">{step}</span>
                  </motion.div>
                  {step < 2 && (
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-1 ${currentStep > step ? 'bg-mint' : 'bg-mint/20'} transition-colors duration-300 mx-2`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Form with Floating Labels */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="relative">
                      <motion.input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="peer relative block w-full px-4 py-3 bg-transparent border-0 border-b-2 border-mint/50 text-charcoal/90 focus:outline-none focus:ring-0 focus:border-mint font-inter placeholder-transparent"
                        placeholder=" "
                      />
                      <motion.label 
                        htmlFor="firstName"
                        className="absolute left-0 -top-5 text-sm text-mint font-medium font-inter transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-mint"
                      >
                        First Name
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

                    {/* Last Name */}
                    <div className="relative">
                      <motion.input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="peer relative block w-full px-4 py-3 bg-transparent border-0 border-b-2 border-mint/50 text-charcoal/90 focus:outline-none focus:ring-0 focus:border-mint font-inter placeholder-transparent"
                        placeholder=" "
                      />
                      <motion.label 
                        htmlFor="lastName"
                        className="absolute left-0 -top-5 text-sm text-mint font-medium font-inter transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-mint"
                      >
                        Last Name
                      </motion.label>
                      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-mint/20 overflow-hidden">
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-rose-gold to-mint"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
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
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-mint to-rose-gold"
                      />
                    </div>
                  </div>

                  {/* Continue Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="pt-6"
                  >
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative w-full flex justify-center py-4 px-6 border border-transparent text-lg font-medium font-playfair rounded-xl text-ivory bg-gradient-to-r from-mint to-mint-dark shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, #C1E1C5 0%, #9DCCB2 100%)',
                        boxShadow: '0 4px 30px rgba(193, 225, 197, 0.4)'
                      }}
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-mint-dark/20 to-mint/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center">
                        Continue
                        <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  </motion.div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Password */}
                  <div className="relative">
                    <motion.input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
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
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gradient-to-r from-mint to-rose-gold"
                      />
                    </div>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <motion.input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="peer relative block w-full px-4 py-3 bg-transparent border-0 border-b-2 border-mint/50 text-charcoal/90 focus:outline-none focus:ring-0 focus:border-mint font-inter placeholder-transparent"
                      placeholder=" "
                    />
                    <motion.label 
                      htmlFor="confirmPassword"
                      className="absolute left-0 -top-5 text-sm text-mint font-medium font-inter transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-charcoal/70 peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-mint"
                    >
                      Confirm Password
                    </motion.label>
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-mint/20 overflow-hidden">
                      <motion.div 
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-rose-gold to-mint"
                      />
                    </div>
                  </div>

                  {/* Profile Picture Upload */}
                  <div className="pt-4">
                    <label className="block text-sm font-medium font-inter text-charcoal/80 mb-3">
                      Profile Picture (Optional)
                    </label>
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-ivory/80 border border-mint/30 rounded-xl hover:bg-ivory transition-all duration-300"
                    >
                      <div className="relative">
                        {previewImage ? (
                          <motion.img 
                            src={previewImage} 
                            alt="Profile preview" 
                            className="w-16 h-16 rounded-full object-cover border-2 border-mint/50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        ) : (
                          <div className="w-16 h-16 rounded-full bg-mint/10 border-2 border-mint/30 flex items-center justify-center">
                            <svg className="w-6 h-6 text-mint/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <label className="cursor-pointer">
                          <motion.div 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2.5 bg-mint/10 border border-mint/30 rounded-lg text-sm font-inter text-mint hover:bg-mint/20 transition-all duration-300 flex items-center"
                          >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            Choose File
                          </motion.div>
                          <input
                            id="profilePic"
                            name="profilePic"
                            type="file"
                            accept="image/*"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                        <p className="mt-1 text-xs font-inter text-charcoal/50">
                          {formData.profilePic ? formData.profilePic.name : 'No file chosen'}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="pt-4">
                    <motion.div 
                      whileHover={{ scale: 1.01 }}
                      className="flex items-start p-4 bg-ivory/80 border border-mint/30 rounded-xl hover:bg-ivory transition-all duration-300"
                    >
                      <div className="flex items-center h-5">
                        <input
                          id="agreeTerms"
                          name="agreeTerms"
                          type="checkbox"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="focus:ring-mint h-5 w-5 text-mint border-mint/50 rounded transition-all duration-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeTerms" className="font-inter text-charcoal/80">
                          I agree to the{' '}
                          <motion.button
                            type="button"
                            onClick={() => setShowTermsModal(true)}
                            className="text-mint hover:text-mint-dark font-medium underline underline-offset-2 decoration-mint/30 hover:decoration-mint transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                          >
                            Terms & Conditions
                          </motion.button>
                        </label>
                      </div>
                    </motion.div>
                  </div>

                  {/* Form Actions */}
                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <motion.button
                      type="button"
                      onClick={handleBack}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="py-3 px-4 border border-mint/50 rounded-xl text-sm font-medium font-inter text-mint bg-ivory/80 hover:bg-ivory transition-all duration-300 flex items-center justify-center"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </motion.button>
                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="py-3 px-4 border border-transparent text-sm font-medium font-playfair rounded-xl text-ivory bg-gradient-to-r from-mint to-mint-dark shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                    >
                      {isLoading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Creating Account...
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          Complete Sign Up
                        </>
                      )}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>

          {/* Enhanced Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8 text-center"
          >
            <p className="text-sm font-inter text-charcoal/60">
              Already a member?{' '}
              <motion.a
                href="/login"
                className="font-medium text-mint hover:text-mint-dark transition-colors duration-300 relative"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative">
                  Sign In
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-mint/30 -z-10" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mint transition-all duration-300 group-hover:w-full" />
                </span>
              </motion.a>
            </p>
            
            {/* Luxury Trust Badges */}
            <div className="mt-6 flex justify-center space-x-6">
              {['Secure Payments', 'Premium Support', 'Exclusive Access'].map((badge, index) => (
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

      {/* Enhanced Terms & Conditions Modal */}
      <AnimatePresence>
        {showTermsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/70 backdrop-blur-xl"
            onClick={() => setShowTermsModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-ivory rounded-2xl shadow-3xl overflow-hidden border border-ivory/30"
              onClick={(e) => e.stopPropagation()}
              style={{
                boxShadow: '0 30px 60px rgba(74, 78, 105, 0.3)'
              }}
            >
              <div className="absolute inset-0 bg-[url('https://example.com/luxury-pattern.png')] bg-repeat opacity-5" />
              <div className="relative p-8 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-playfair font-bold text-charcoal/90">
                    Terms & Conditions
                  </h3>
                  <motion.button
                    onClick={() => setShowTermsModal(false)}
                    whileHover={{ rotate: 90, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-charcoal/50 hover:text-mint transition-colors duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
                <div className="prose prose-sm font-inter text-charcoal/80">
                  <p>Welcome to Aurmira! These terms and conditions outline the rules and regulations for the use of our luxury platform.</p>
                  
                  <h4 className="font-semibold mt-6 text-charcoal/90">1. Account Registration</h4>
                  <p>You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.</p>
                  
                  <h4 className="font-semibold mt-4 text-charcoal/90">2. Privacy</h4>
                  <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.</p>
                  
                  <h4 className="font-semibold mt-4 text-charcoal/90">3. Membership</h4>
                  <p>All memberships are subject to availability. We reserve the right to limit quantities and to revise, suspend, or terminate an account at any time without notice.</p>
                  
                  <h4 className="font-semibold mt-4 text-charcoal/90">4. Intellectual Property</h4>
                  <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of Aurmira and protected by intellectual property laws.</p>
                </div>
              </div>
              <div className="px-8 py-6 bg-mint/10 border-t border-mint/20 flex justify-center">
                <motion.button
                  type="button"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, agreeTerms: true }));
                    setShowTermsModal(false);
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(193, 225, 197, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-mint to-mint-dark text-ivory rounded-lg font-medium font-inter shadow-md hover:shadow-lg transition-all duration-300"
                >
                  I Agree to Terms
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EnhancedSignUpPage;