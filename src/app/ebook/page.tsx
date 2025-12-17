'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PayPalButtons,
  PayPalScriptProvider
} from '@paypal/react-paypal-js';
import {
  CheckCircle,
  Download,
  Lock,
  Loader2,
  Star,
  Shield,
  Clock,
  Users,
  FileText,
  ChevronRight,
  Award,
  BadgeCheck,
  Sparkles
} from 'lucide-react';

export default function EbookPage() {
  const [purchaseStatus, setPurchaseStatus] = useState<
    'idle' | 'processing' | 'success' | 'error'
  >('idle');
  const [orderID, setOrderID] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showPaypal, setShowPaypal] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  
  const paypalSectionRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const paypalOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
    currency: 'USD',
    intent: 'capture'
  };

  const ebookDetails = {
    name: 'The Ultimate Agency Hiring Playbook',
    price: '27.00',
    currency: 'USD',
    description: 'Complete Guide to Building Your High-Performance Team',
    downloadUrl: '/agency-hiring-playbook.pdf',
    fileName: 'Agency-Hiring-Playbook.pdf',
    features: [
      { icon: FileText, text: '180+ Pages of Proven Strategies' },
      { icon: Users, text: 'Team Building Frameworks' },
      { icon: Clock, text: 'Time-Saving Templates' },
      { icon: Shield, text: 'Legal & Compliance Guides' },
      { icon: Award, text: 'Interview Scorecards' },
      { icon: BadgeCheck, text: 'Quality Assurance Checklists' }
    ],
    testimonials: [
      { name: 'Alex Morgan', role: 'CEO @ GrowthLab', text: 'Cut our hiring time by 70% and improved candidate quality dramatically.' },
      { name: 'Sarah Chen', role: 'HR Director', text: 'The templates alone are worth 10x the price. Incredible value.' },
      { name: 'Marcus Johnson', role: 'Agency Owner', text: 'Went from struggling to hire to building a world-class team in 3 months.' }
    ]
  };

  const createOrder = (_: any, actions: any) => {
    setPurchaseStatus('processing');
    return actions.order.create({
      purchase_units: [
        {
          description: ebookDetails.description,
          amount: {
            value: ebookDetails.price,
            currency_code: ebookDetails.currency
          }
        }
      ]
    });
  };

  const onApprove = async (_: any, actions: any) => {
    try {
      const details = await actions.order.capture();
      setOrderID(details.id);
      setPurchaseStatus('success');
      setShowPaypal(false);

      localStorage.setItem(
        'ebook_purchase',
        JSON.stringify({
          orderId: details.id,
          product: ebookDetails.name,
          date: new Date().toISOString()
        })
      );

      handleDownload();
    } catch (err) {
      console.error(err);
      setPurchaseStatus('error');
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise((r) => setTimeout(r, 1500));
    
    const link = document.createElement('a');
    link.href = ebookDetails.downloadUrl;
    link.download = ebookDetails.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsDownloading(false);
  };

  const handleBuyClick = () => {
    setShowPaypal(true);
    setTimeout(() => {
      paypalSectionRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    }, 200);
  };

  const scrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem('ebook_purchase');
    if (saved) {
      const parsed = JSON.parse(saved);
      setOrderID(parsed.orderId);
      setPurchaseStatus('success');
    }
  }, []);

  const faqs = [
    {
      question: 'What exactly do I get with this purchase?',
      answer: 'You get instant access to the complete 180+ page ebook, all templates (interview scripts, scorecards, offer letters), legal documents, and lifetime free updates. Everything is delivered in PDF and editable formats.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes! We offer a 30-day money-back guarantee. If the playbook doesn\'t help improve your hiring process, just email us for a full refund, no questions asked.'
    },
    {
      question: 'How soon will I get access after purchasing?',
      answer: 'Access is instant! After payment confirmation, you\'ll immediately be able to download all files. We also email you a backup download link.'
    },
    {
      question: 'Will this work for my industry/size?',
      answer: 'The strategies are designed to scale from startups to 100+ person agencies. The principles apply across industries, and we include industry-specific adaptations.'
    },
    {
      question: 'Are there any recurring fees?',
      answer: 'No. This is a one-time payment. You get lifetime access to all current and future content without any subscription fees.'
    },
    {
      question: 'Can I share this with my team?',
      answer: 'Yes! The license allows sharing within your organization. We encourage you to use it with your entire HR and hiring team.'
    }
  ];

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50/30">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                Agency<span className="text-blue-600">Playbook</span>
              </span>
            </div>

            {purchaseStatus === 'success' ? (
              <motion.button
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                onClick={handleDownload}
                className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300"
              >
                {isDownloading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Download className="w-5 h-5" />
                )}
                <span className="font-semibold">
                  {isDownloading ? 'Downloading...' : 'Download Ebook'}
                </span>
              </motion.button>
            ) : (
              <button
                onClick={handleBuyClick}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Access
              </button>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full border border-blue-200 mb-8"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  🚀 LIMITED TIME OFFER
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              >
                Build Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Dream Team
                </span>
                <br />
                Without The Headaches
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-600 mb-10"
              >
                The complete system used by top agencies to hire, train, and scale 
                high-performance teams in record time.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-2 gap-6 mb-12"
              >
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">180+</div>
                  <div className="text-gray-600">Pages</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="text-3xl font-bold text-gray-900">40+</div>
                  <div className="text-gray-600">Templates</div>
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 mb-12"
              >
                {ebookDetails.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={handleBuyClick}
                className="w-full lg:w-auto px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3 mb-6"
              >
                <Lock className="w-5 h-5" />
                Get Instant Access Now
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-gray-600 text-sm"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>Lifetime updates included</span>
                </div>
              </motion.div>
            </div>

            {/* Right - Book Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-indigo-900/30">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full -translate-y-16 translate-x-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full translate-y-12 -translate-x-12" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-300">Bestseller</span>
                    </div>

                    <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                      {ebookDetails.name}
                    </h2>

                    <div className="space-y-4 mb-8">
                      {[
                        'Complete Hiring Framework',
                        'Interview Scripts & Scorecards',
                        'Salary Benchmarking Guide',
                        'Remote Team Management',
                        'Legal Templates & Contracts',
                        'Onboarding Playbook'
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-200">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <div className="text-sm text-gray-400 mb-2">One-time payment</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl lg:text-6xl font-bold">$27</span>
                        <span className="text-gray-400 line-through text-xl">$97</span>
                        <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                          72% OFF
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={scrollToTestimonials}
                      className="w-full py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-colors flex items-center justify-center gap-2"
                    >
                      <Star className="w-5 h-5" />
                      <span>See What Others Say</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Floating Testimonial */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 right-6 bg-white rounded-xl p-4 shadow-2xl border max-w-xs"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
                    <div>
                      <div className="font-semibold text-gray-900">Jamie Rivera</div>
                      <div className="text-sm text-gray-600">Agency Owner</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 italic">
                    This playbook transformed how we hire.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* PayPal Section */}
          <AnimatePresence>
            {showPaypal && (
              <motion.div
                ref={paypalSectionRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-center mb-8">
                  Complete Your Purchase
                </h3>
                <div className="max-w-md mx-auto">
                  <PayPalButtons
                    style={{
                      layout: 'vertical',
                      label: 'pay',
                      shape: 'pill',
                      color: 'blue'
                    }}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={() => setPurchaseStatus('error')}
                  />
                  
                  {purchaseStatus === 'processing' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 flex flex-col items-center"
                    >
                      <Loader2 className="w-8 h-8 text-blue-600 animate-spin mb-2" />
                      <p className="text-gray-600">Processing your payment...</p>
                    </motion.div>
                  )}

                  {purchaseStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl text-center"
                    >
                      <p className="text-red-600 font-semibold mb-2">
                        Payment failed
                      </p>
                      <p className="text-red-500 text-sm">
                        Please try again or use a different payment method.
                      </p>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Testimonials */}
          <section ref={testimonialsRef} className="mt-32">
            <h2 className="text-3xl font-bold text-center mb-4">
              Trusted by 2,500+ Agency Leaders
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              See how other agency owners transformed their hiring process
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {ebookDetails.testimonials.map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.text}</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mt-32 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        activeFAQ === i ? 'rotate-90' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeFAQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="mt-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of successful agencies who are already mastered 
                the art of building dream teams.
              </p>
              
              {purchaseStatus === 'success' ? (
                <motion.button
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  onClick={handleDownload}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Your Copy
                </motion.button>
              ) : (
                <button
                  onClick={handleBuyClick}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Lock className="w-5 h-5" />
                  Get Instant Access for $27
                </button>
              )}
              
              <p className="mt-6 text-blue-200 text-sm">
                30-day money-back guarantee • No recurring fees • Lifetime updates
              </p>
            </motion.div>
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} AgencyPlaybook. All rights reserved.</p>
            <p className="mt-2 text-sm">
              This is a digital product. You will receive instant access after purchase.
            </p>
          </div>
        </footer>
      </div>
    </PayPalScriptProvider>
  );
}