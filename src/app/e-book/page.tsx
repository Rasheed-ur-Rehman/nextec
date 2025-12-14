import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, Download, Clock, Users, Shield, Globe, Zap } from 'lucide-react'

export default function EbookLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock size={16} />
              Early-bird discount active — price will increase soon
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Hire Smarter. <span className="text-blue-600">Grow Faster.</span> Spend Less.
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Unlock the exact hiring system used by top digital agencies to build skilled, affordable teams — even on a tight budget.
            </p>

            {/* Hero Description */}
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-10 max-w-4xl mx-auto border border-gray-100">
              <p className="text-gray-700 text-lg mb-4">
                Building a digital marketing agency is hard enough — hiring talent shouldn't drain your entire budget.
              </p>
              <p className="text-gray-700 text-lg">
                This ebook gives you a proven roadmap to find affordable, skilled talent from around the world… and scale your agency without the stress, guesswork, or overspending.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-800 font-semibold">
                  From job post templates to hiring funnels, onboarding systems, and global talent sources — this is your complete blueprint.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                href="/book/ebook-2.pdf" 
                download
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <Download size={24} />
                Download the Ebook — Only $14.99
              </Link>
              
              <Link 
                href="#features" 
                className="inline-flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
              >
                <Users size={24} />
                Start Building Your Team Today
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-lg border border-emerald-200">
              <Shield size={20} />
              <span className="font-medium">Instant download. No subscription. No upsells.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What You'll <span className="text-blue-600">Learn</span>
            </h2>
            <p className="text-gray-600 text-lg">Everything you need to build your dream team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="text-blue-500" size={24} />,
                title: "Where to find affordable talent",
                description: "Global marketplaces, universities, niche sites"
              },
              {
                icon: <Users className="text-purple-500" size={24} />,
                title: "Exactly which roles to hire first",
                description: "Strategic hiring sequence for maximum impact"
              },
              {
                icon: <Zap className="text-amber-500" size={24} />,
                title: "Create a lean team that does more",
                description: "Optimize productivity with minimal resources"
              },
              {
                icon: <Shield className="text-red-500" size={24} />,
                title: "Avoid common hiring mistakes",
                description: "Save thousands by learning from others' errors"
              },
              {
                icon: <Download className="text-green-500" size={24} />,
                title: "Step-by-step hiring funnels",
                description: "Copy-paste templates and systems"
              },
              {
                icon: <CheckCircle className="text-indigo-500" size={24} />,
                title: "Tools and automations",
                description: "Streamline your entire hiring process"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bonus Templates */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🎁 Bonus Templates Included
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Job post templates for various roles",
                "Interview question banks",
                "Complete onboarding checklists"
              ].map((template, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg">
                  <CheckCircle className="text-green-500" size={20} />
                  <span className="font-medium text-gray-800">{template}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              This Ebook Is Perfect For
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "New digital agency owners",
                "Freelancers looking to scale",
                "Content creators building a team",
                "Startup founders",
                "Anyone wanting skilled talent without the high cost"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Building Your Dream Team Today
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Get instant access to the complete hiring blueprint for only $14.99
          </p>

          {/* Scarcity Timer */}
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 text-yellow-200 px-6 py-3 rounded-lg mb-8 border border-yellow-500/30">
            <Clock size={20} />
            <span className="font-semibold">Early-bird discount ends soon!</span>
          </div>

          <div className="space-y-4">
            <Link 
              href="/book/ebook-2.pdf" 
              download
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-900 px-10 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl w-full sm:w-auto"
            >
              <Download size={28} />
              Download Now — $14.99
            </Link>
            
            <div className="text-blue-200 font-medium">
              <CheckCircle className="inline mr-2" size={20} />
              30-Day Money Back Guarantee • Lifetime Access
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Nextec. All rights reserved.</p>
          <p className="mt-2 text-sm">Instant digital download. No recurring charges.</p>
        </div>
      </footer>
    </div>
  )
}