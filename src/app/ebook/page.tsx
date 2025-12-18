'use client';

import { useState } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import {
  Check,
  Download,
  Lock,
  Zap,
  Users,
  BookOpen,
  Clock
} from 'lucide-react';

export default function EbookPage() {
  const price = '14.99';
  const [paid, setPaid] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const downloadPdf = () => {
    setDownloading(true);

    const link = document.createElement('a');
    link.href = '/ebook-2.pdf';
    link.download = 'ebook-2.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloading(false);
  };

  return (
    <div className="bg-[#0B0F1A] text-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-blue-600/20 to-purple-600/30 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hire Smarter. <span className="text-indigo-400">Grow Faster.</span>
            <br />Spend Less.
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Unlock the exact hiring system used by top digital agencies to build
            skilled, affordable teams — even on a tight budget.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a
              href="#checkout"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-bold text-lg"
            >
              👉 Download the Ebook — Only ${price}
            </a>

            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-xl font-semibold">
              👉 Start Building Your Team Today
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300 mt-6">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-yellow-400" />
              Early-bird discount active — price will increase soon
            </span>
            <span>💬 Instant download. No subscription. No upsells.</span>
          </div>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-[#12172A] border border-white/10 rounded-3xl p-10">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            <strong className="text-white">
              Building a digital marketing agency is hard enough — hiring talent
              shouldn’t drain your entire budget.
            </strong>
            <br /><br />
            This ebook gives you a proven roadmap to find affordable, skilled
            talent from around the world and scale your agency without stress,
            guesswork, or overspending.
          </p>

          <p className="text-gray-400">
            From job post templates to hiring funnels, onboarding systems, and
            global talent sources — this is your complete blueprint.
          </p>
        </div>
      </section>

      {/* ================= WHAT YOU'LL LEARN ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <BookOpen className="text-indigo-400" />
          What You’ll Learn
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Where to find affordable talent (global marketplaces, universities, niche sites)',
            'Exactly which roles to hire first, second, and third',
            'How to create a lean team that does more with less',
            'How to avoid common hiring mistakes that cost agencies thousands',
            'Step-by-step hiring funnels you can copy',
            'Tools and automations to streamline your hiring process',
            'Bonus templates for job posts, interviews, and onboarding'
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-4 bg-[#12172A] border border-white/10 rounded-xl p-6"
            >
              <Check className="text-green-400 mt-1" />
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHO THIS IS FOR ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
          <Users className="text-indigo-400" />
          This Ebook Is Perfect For
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            'New digital agency owners',
            'Freelancers looking to scale',
            'Content creators building a team',
            'Startup founders',
            'Anyone wanting skilled talent without the high cost'
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#12172A] border border-white/10 rounded-xl p-6 flex gap-3 text-gray-300"
            >
              <Zap className="text-indigo-400" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ================= CHECKOUT ================= */}
      <section id="checkout" className="max-w-xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-8 shadow-2xl">

          <h3 className="text-2xl font-bold mb-4">
            Agency Hiring Blueprint
          </h3>

          <div className="text-4xl font-extrabold mb-2">${price}</div>
          <p className="text-sm opacity-90 mb-6">
            One-time payment • Instant download
          </p>

          {!paid ? (
            <>
              <PayPalScriptProvider
                options={{
                  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
                  currency: 'USD',
                  intent: 'capture'
                }}
              >
                <PayPalButtons
                  style={{ layout: 'vertical', height: 50 }}
                  createOrder={(data, actions) =>
                    actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: price,
                            currency_code: 'USD'
                          }
                        }
                      ]
                    } as any) // ✅ FIXED TYPESCRIPT ERROR
                  }
                  onApprove={async (_, actions) => {
                    await actions.order?.capture();
                    setPaid(true);
                    setTimeout(downloadPdf, 600);
                  }}
                />
              </PayPalScriptProvider>

              <div className="flex items-center gap-2 mt-4 text-sm opacity-90">
                <Lock className="w-4 h-4" />
                Secure PayPal Checkout
              </div>
            </>
          ) : (
            <button
              onClick={downloadPdf}
              className="w-full py-4 bg-black rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <Download />
              {downloading ? 'Preparing...' : 'Download Ebook'}
            </button>
          )}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} Agency Hiring Blueprint
      </footer>
    </div>
  );
}
