// src/components/ebook/EbookHero.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const EbookHero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32 pb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold mb-8 shadow-lg"
            >
              <span className="animate-pulse mr-2">✨</span>
              AGENCY HIRING BLUEPRINT
            </motion.div>
            
            {/* Headline with animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              <span className="relative inline-block">
                <span className="relative z-10">Hire</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-blue-400 to-transparent opacity-30 rounded-full"></span>
              </span>
              {' '}
              <motion.span 
                className="relative inline-block"
                animate={{ color: isHovered ? '#2563eb' : '#1f2937' }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10">Smarter</span>
                <motion.span 
                  className="absolute bottom-2 left-0 h-1 bg-blue-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: isHovered ? '100%' : 0 }}
                  transition={{ duration: 0.5 }}
                ></motion.span>
              </motion.span>
              .
              <br />
              <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Grow Faster.
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Spend Less.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Unlock the <span className="font-semibold text-blue-600">exact hiring system</span> used by top digital agencies to build skilled, affordable teams — even on a tight budget.
            </motion.p>

            {/* Hero Description Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-8 rounded-r-xl mb-10 shadow-lg overflow-hidden group"
            >
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
              <p className="text-gray-700 text-lg relative z-10 leading-relaxed">
                Building a digital marketing agency is hard enough — <span className="font-semibold text-blue-700">hiring talent should not drain your entire budget</span>. This ebook gives you a proven roadmap to find affordable, skilled talent from around the world…
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/ebook-2.pdf"
                download="Agency-Hiring-Playbook.pdf"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group inline-flex items-center justify-center w-full lg:w-auto px-12 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl rounded-2xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-2xl hover:shadow-3xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="mr-3 text-2xl">🚀</span>
                Download the Ebook — FREE
                <span className="ml-3 text-2xl transform group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Instant download</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>No subscription</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>No upsells</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Animated Ebook Mockup */}
        <div className="relative lg:h-[600px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-full max-w-md mx-auto"
          >
            {/* Floating Ebook */}
            <div className="relative w-full h-full perspective-1000">
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
                className="absolute inset-0"
              >
                {/* Ebook Cover */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                    {/* Ebook Content Design */}
                    <div className="p-10 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                            <span className="text-2xl">📘</span>
                          </div>
                          <div>
                            <div className="text-blue-300 text-sm font-medium">LIMITED EDITION</div>
                            <div className="text-white text-xs">2024 Edition</div>
                          </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-white mb-4 leading-tight">
                          The Ultimate Agency Hiring Playbook
                        </h2>
                        <p className="text-blue-200 text-sm leading-relaxed">
                          Complete Guide to Building Your High-Performance Team
                        </p>
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-flex items-baseline bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">
                          <span className="text-5xl font-bold text-transparent">FREE</span>
                          <span className="text-blue-200 text-sm ml-2">Today Only</span>
                        </div>
                        <motion.div 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-white text-sm font-semibold"
                        >
                          <span>🔥</span>
                          <span>Limited Time Offer</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-6 -right-6 bg-gradient-to-br from-white to-gray-100 p-5 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl">📈</div>
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -3, 3, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 5,
                    delay: 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-gray-100 p-5 rounded-2xl shadow-xl"
                >
                  <div className="text-3xl">👥</div>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Background Decorative Circles */}
            <div className="absolute -z-10 inset-0">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EbookHero;