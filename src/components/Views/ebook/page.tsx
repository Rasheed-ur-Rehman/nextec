// app/ebook/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { CheckCircle, Download, Lock, Loader2 } from 'lucide-react';

export default function EbookPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [orderID, setOrderID] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  // PayPal Configuration
  const paypalOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'test',
    currency: 'USD',
    intent: 'capture',
  };

  // Ebook details
  const ebookDetails = {
    name: "The Ultimate Agency Hiring Playbook",
    price: 27.00,
    currency: "USD",
    description: "Complete Guide to Building Your High-Performance Team",
    downloadUrl: "/agency-hiring-playbook.pdf",
    downloadFileName: "Agency-Hiring-Playbook.pdf"
  };

  // Create PayPal order
  const createOrder = async (data: any, actions: any) => {
    setPurchaseStatus('processing');
    return actions.order.create({
      purchase_units: [{
        description: ebookDetails.description,
        amount: {
          value: ebookDetails.price.toString(),
          currency_code: ebookDetails.currency,
        },
      }],
    });
  };

  // Handle PayPal approval
  const onApprove = async (data: any, actions: any) => {
    try {
      const details = await actions.order.capture();
      setOrderID(details.id);
      setPurchaseStatus('success');
      
      // Store purchase in localStorage
      localStorage.setItem('ebook_purchase', JSON.stringify({
        orderId: details.id,
        timestamp: new Date().toISOString(),
        product: ebookDetails.name
      }));
    } catch (error) {
      console.error('Payment error:', error);
      setPurchaseStatus('error');
    }
  };

  // Handle download
  const handleDownload = async () => {
    if (!orderID) {
      alert('Please complete your purchase first');
      return;
    }

    setIsDownloading(true);
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create download link
      const link = document.createElement('a');
      link.href = ebookDetails.downloadUrl;
      link.download = ebookDetails.downloadFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Track download
      console.log('Download completed for order:', orderID);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  // Check if already purchased
  useEffect(() => {
    const purchaseData = localStorage.getItem('ebook_purchase');
    if (purchaseData) {
      const parsed = JSON.parse(purchaseData);
      setOrderID(parsed.orderId);
      setPurchaseStatus('success');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-900">
              Agency<span className="text-blue-600">Playbook</span>
            </div>
            <div className="flex items-center gap-4">
              {purchaseStatus === 'success' ? (
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {isDownloading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Download className="w-5 h-5" />
                  )}
                  {isDownloading ? 'Preparing...' : 'Download Now'}
                </button>
              ) : (
                <div className="text-right">
                  <div className="text-sm text-gray-600">Only</div>
                  <div className="text-2xl font-bold text-gray-900">${ebookDetails.price}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold mb-8 shadow-lg"
              >
                <span className="animate-pulse mr-2">🚀</span>
                PREMIUM HIRING BLUEPRINT
              </motion.div>

              {/* Headline */}
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
                <span className="text-gradient bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Smarter.
                </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Grow Faster.
                </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Spend Less.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Unlock the <span className="font-semibold text-blue-600">exact hiring system</span> used by top digital agencies to build skilled, affordable teams — even on a tight budget.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 mb-10"
              >
                {[
                  "Step-by-step hiring framework",
                  "Global talent sourcing strategies",
                  "Interview scripts & assessment templates",
                  "Salary negotiation tactics",
                  "Remote team management guide",
                  "Legal templates & contracts"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </motion.div>

              {/* Payment Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-white rounded-2xl border p-8 shadow-xl"
              >
                {purchaseStatus === 'success' ? (
                  <div className="text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-4">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Purchase Complete!</h3>
                      <p className="text-gray-600 mb-6">Thank you for your purchase. Your ebook is ready to download.</p>
                      <div className="text-sm text-gray-500">
                        Order ID: {orderID?.substring(0, 8)}...
                      </div>
                    </div>
                    <button
                      onClick={handleDownload}
                      disabled={isDownloading}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl rounded-xl hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isDownloading ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Preparing Download...
                        </>
                      ) : (
                        <>
                          <Download className="w-6 h-6" />
                          Download Your Ebook
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">Secure Payment</h3>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Lock className="w-5 h-5" />
                        <span className="text-sm">Secure Payment</span>
                      </div>
                    </div>
                    
                    {/* Price Display */}
                    <div className="text-center py-6 border-y">
                      <div className="text-sm text-gray-600 mb-1">One-time Payment</div>
                      <div className="text-5xl font-bold text-gray-900">${ebookDetails.price}</div>
                      <div className="text-gray-500 mt-2">Lifetime Access • Free Updates</div>
                    </div>

                    {/* PayPal Button */}
                    <div className="pt-4">
                      <PayPalScriptProvider options={paypalOptions}>
                        <PayPalButtons
                          style={{
                            layout: "vertical",
                            color: "blue",
                            shape: "rect",
                            label: "buynow"
                          }}
                          createOrder={createOrder}
                          onApprove={onApprove}
                          onError={(err) => {
                            console.error('PayPal Error:', err);
                            setPurchaseStatus('error');
                          }}
                        />
                      </PayPalScriptProvider>
                    </div>

                    {purchaseStatus === 'processing' && (
                      <div className="flex items-center justify-center gap-3 text-blue-600">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing your payment...
                      </div>
                    )}

                    {purchaseStatus === 'error' && (
                      <div className="text-center text-red-600 py-4">
                        Payment failed. Please try again or use a different payment method.
                      </div>
                    )}

                    {/* Guarantee */}
                    <div className="text-center pt-6 border-t">
                      <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">30-Day Money Back Guarantee</span>
                      </div>
                      <p className="text-xs text-gray-500">
                        If you arere not satisfied, we all refund your purchase within 30 days.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Ebook Preview */}
          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Ebook Mockup */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                    <div className="p-12 h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">📘</span>
                          </div>
                          <div>
                            <div className="text-blue-300 text-lg font-medium">PREMIUM EDITION</div>
                            <div className="text-white text-sm">Includes Templates & Bonuses</div>
                          </div>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                          {ebookDetails.name}
                        </h2>
                        
                        <div className="space-y-3">
                          {[
                            "180+ pages of actionable content",
                            "12 ready-to-use templates",
                            "Video walkthroughs",
                            "Lifetime updates",
                            "Private community access"
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span className="text-blue-200">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-12">
                        <div className="text-center mb-6">
                          <div className="inline-flex items-baseline">
                            <span className="text-6xl font-bold text-white">${ebookDetails.price}</span>
                            <span className="text-blue-300 text-lg ml-2">one-time</span>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                          <div className="text-center p-4 bg-blue-800/50 rounded-xl">
                            <div className="text-2xl">📊</div>
                            <div className="text-xs text-blue-200 mt-2">Templates</div>
                          </div>
                          <div className="text-center p-4 bg-blue-800/50 rounded-xl">
                            <div className="text-2xl">🎥</div>
                            <div className="text-xs text-blue-200 mt-2">Videos</div>
                          </div>
                          <div className="text-center p-4 bg-blue-800/50 rounded-xl">
                            <div className="text-2xl">👥</div>
                            <div className="text-xs text-blue-200 mt-2">Community</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 6,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl">🚀</div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, -2, 2, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 5,
                  delay: 0.5,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
              >
                <div className="text-4xl">💼</div>
              </motion.div>
            </motion.div>

            {/* Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900">Trusted by 2,500+ Agencies</h3>
              
              {[
                {
                  quote: "This playbook cut our hiring time by 70%. Worth every penny!",
                  author: "Sarah Chen, CEO @GrowthMasters",
                  role: "Digital Agency"
                },
                {
                  quote: "The templates alone saved us $15k in consultant fees.",
                  author: "Marcus Johnson, Founder @PixelCraft",
                  role: "Design Studio"
                },
                {
                  quote: "Finally, a practical guide that actually works in the real world.",
                  author: "Alex Rivera, Director @SocialBoost",
                  role: "Marketing Agency"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border shadow-sm">
                  <div className="text-gray-600 mb-4">{testimonial.quote}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "What's included in the purchase?",
                a: "You get the complete ebook (180+ pages), 12 ready-to-use templates, video walkthroughs, and lifetime updates."
              },
              {
                q: "Is there a money-back guarantee?",
                a: "Yes! 30-day money-back guarantee. If you're not satisfied, email us for a full refund."
              },
              {
                q: "Do I get updates for free?",
                a: "Yes, all future updates are included at no additional cost."
              },
              {
                q: "Can I use PayPal for payment?",
                a: "Yes, we accept PayPal as well as major credit cards through PayPal's secure payment system."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-2xl font-bold mb-4">Agency<span className="text-blue-400">Playbook</span></div>
          <p className="text-gray-400 mb-8">The ultimate guide to building your high-performance team</p>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Agency Hiring Playbook. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}