"use client";

import { motion } from "framer-motion";
import {
  Download,
  Rocket,
  Users,
  CheckCircle,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function EbookPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#000a1d] via-[#020f2a] to-black text-white overflow-hidden">
      <div className="wrapper py-24 space-y-20">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            Proven Hiring Blueprint
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Hire Smarter. <br /> Grow Faster. Spend Less.
          </h1>

          <p className="text-lg sm:text-xl text-stone-300">
            Unlock the exact hiring system used by top digital agencies to build
            skilled, affordable teams — even on a tight budget.
          </p>

          <p className="text-stone-400 max-w-3xl mx-auto text-base sm:text-lg">
            Building a digital marketing agency is hard enough — hiring talent
            shouldn’t drain your entire budget. This ebook gives you a proven
            roadmap to find affordable, skilled talent from around the world and
            scale your agency without the stress, guesswork, or overspending.
            <br /><br />
            From job post templates to hiring funnels, onboarding systems, and
            global talent sources — this is your complete blueprint.
          </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-5"
        >
          <a
            href="/ebook-2.pdf"
            download
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-lg font-semibold shadow-xl hover:scale-105 transition-transform"
          >
            <Download className="w-6 h-6" />
            Download the Ebook — Only $14.99
          </a>

          <a
            href="#learn"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl border border-white/30 text-lg hover:bg-white/10 transition"
          >
            <Rocket className="w-6 h-6" />
            Start Building Your Team Today
          </a>
        </motion.div>

        {/* TRUST + SCARCITY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-stone-400"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-400" />
            Early-bird discount active — price will increase soon.
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            Instant download. No subscription. No upsells.
          </div>
        </motion.div>

        {/* WHAT YOU’LL LEARN */}
        <div id="learn" className="max-w-5xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center">
            What You’ll Learn
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 text-stone-300">
            {[
              "Where to find affordable talent (global marketplaces, universities, niche sites)",
              "Exactly which roles to hire first, second, and third",
              "How to create a lean team that does more with less",
              "How to avoid common hiring mistakes that cost agencies thousands",
              "Step-by-step hiring funnels you can copy",
              "Tools and automations to streamline your hiring process",
              "Bonus templates for job posts, interviews, and onboarding",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-3 bg-white/5 p-5 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-blue-400 mt-1" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* PERFECT FOR */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold text-center">
            This Ebook Is Perfect For
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "New digital agency owners",
              "Freelancers looking to scale",
              "Content creators building a team",
              "Startup founders",
              "Anyone wanting skilled talent without the high cost",
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 bg-white/5 p-4 rounded-xl text-stone-300"
              >
                <Users className="w-5 h-5 text-purple-400" />
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center pt-12"
        >
          <a
            href="/ebook-2.pdf"
            download
            className="inline-flex items-center gap-4 px-12 py-6 rounded-3xl bg-gradient-to-r from-purple-600 to-pink-600 text-xl font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            <Download className="w-7 h-7" />
            Download the Ebook — Only $14.99
          </a>
        </motion.div>

      </div>
    </section>
  );
}
