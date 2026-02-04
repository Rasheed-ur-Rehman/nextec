"use client";

import React from "react";
import { MapPin, Mail, Users, Target, Award, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About <span className="text-blue-400">Nextec</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Crafting digital excellence through innovative design and
            development solutions
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-blue-400">Story</span>
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Founded with a vision to transform digital experiences, Nextec
                has been at the forefront of creative technology solutions. We
                blend artistic design with cutting-edge development to deliver
                exceptional results for our clients worldwide.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
                Our team of passionate designers, developers, and digital
                strategists work together to create solutions that not only look
                stunning but also drive real business results. We believe in the
                power of technology to transform businesses and create
                meaningful connections.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Our Mission</h3>
                    <p className="text-gray-400">
                      Deliver exceptional digital solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">Our Passion</h3>
                    <p className="text-gray-400">
                      Creating meaningful digital experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-800 to-purple-800 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Our <span className="text-blue-400">Services</span>
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-lg mb-2 text-blue-300">
                    Logo Design
                  </h4>
                  <p className="text-gray-300">
                    Custom logo designs that capture your brand&apos;s essence
                    and make a lasting impression. We create unique identities
                    that stand out in competitive markets.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-lg mb-2 text-blue-300">
                    Web Development
                  </h4>
                  <p className="text-gray-300">
                    Responsive, fast, and engaging websites built with the
                    latest technologies. From simple portfolios to complex
                    e-commerce platforms, we build solutions that perform.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-lg mb-2 text-blue-300">
                    E-commerce Solutions
                  </h4>
                  <p className="text-gray-300">
                    Complete online store development with secure payment
                    integration, inventory management, and marketing features to
                    help your business grow online.
                  </p>
                </div>

                <div className="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-lg mb-2 text-blue-300">
                    Mobile Apps
                  </h4>
                  <p className="text-gray-300">
                    Native and cross-platform mobile applications designed for
                    optimal performance and user experience across all devices
                    and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why <span className="text-blue-400">Choose Us</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We combine creativity, technology, and strategy to deliver
              exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Award className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">Quality Excellence</h3>
              <p className="text-gray-300">
                We never compromise on quality. Every project receives our full
                attention to detail and commitment to excellence.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-600 p-3 rounded-lg">
                  <Users className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">Client Focused</h3>
              <p className="text-gray-300">
                Your success is our priority. We work closely with you to ensure
                your vision becomes reality.
              </p>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Target className="w-10 h-10" />
                </div>
              </div>
              <h3 className="font-bold text-xl mb-3">Results Driven</h3>
              <p className="text-gray-300">
                We create solutions that deliver measurable results and help you
                achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Get in <span className="text-blue-400">Touch</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Our Location</h3>
                 
                  <p className="text-gray-300">Kearny, NJ, USA</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email Us</h3>
                  <p className="text-gray-300">sales@nextec.live</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
             
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
