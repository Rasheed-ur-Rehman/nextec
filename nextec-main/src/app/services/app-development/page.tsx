"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  ChevronRight,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Play,
  Award,
  Users,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<"mobile" | "web" | "desktop">(
    "mobile"
  );
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    {
      icon: <Smartphone className="h-10 w-10" />,
      title: "Mobile App Development",
      description:
        "iOS and Android applications using native and cross-platform technologies",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Applications",
      description: "Responsive and progressive web apps with modern frameworks",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Backend Development",
      description: "Robust server-side architecture and API development",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Security Integration",
      description: "End-to-end encryption and security best practices",
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: "Performance Optimization",
      description:
        "Speed and efficiency enhancements for better user experience",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Maintenance & Support",
      description: "Ongoing updates, bug fixes, and technical support",
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Planning",
      description:
        "We analyze your requirements and create a detailed project roadmap",
    },
    {
      title: "UI/UX Design",
      description: "Our designers create intuitive and engaging user interfaces",
    },
    {
      title: "Development",
      description: "Our developers bring your application to life with clean code",
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing ensures your app works flawlessly",
    },
    {
      title: "Deployment",
      description:
        "We launch your application to the relevant app stores or servers",
    },
    {
      title: "Maintenance & Updates",
      description: "We provide ongoing support and feature enhancements",
    },
  ];

  const portfolioItems = {
    mobile: [
      {
        id: 1,
        title: "Finance Tracker App",
        description:
          "A cross-platform mobile application for personal finance management",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
        features: ["Budget Tracking", "Expense Reports", "Investment Monitoring"],
      },
      {
        id: 2,
        title: "Fitness Companion",
        description:
          "Workout tracking application with AI-powered recommendations",
        image:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
        features: ["Workout Plans", "Progress Tracking", "Personal Coach"],
      },
      {
        id: 3,
        title: "Food Delivery Service",
        description: "Restaurant ordering system with real-time delivery tracking",
        image:
          "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
        features: ["Order Tracking", "Multiple Restaurants", "Secure Payments"],
      },
    ],
    web: [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-featured online store with inventory management",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
        features: ["Product Catalog", "Shopping Cart", "Payment Gateway"],
      },
      {
        id: 2,
        title: "Project Management Tool",
        description: "Collaborative workspace for team productivity",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
        features: ["Task Management", "Team Collaboration", "Time Tracking"],
      },
    ],
    desktop: [
      {
        id: 1,
        title: "Video Editing Suite",
        description: "Professional media production software",
        image:
          "/images/v.jpg",
        features: ["Timeline Editing", "Effects Library", "4K Export"],
      },
      {
        id: 2,
        title: "Accounting System",
        description: "Enterprise financial management application",
        image:
          "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=600&q=80",
        features: ["Invoice Management", "Tax Calculations", "Financial Reports"],
      },
    ],
  };

  const filteredProjects = portfolioItems[activeTab];

  const openLightbox = (project: any, index: number) => {
    setSelectedImage(project);
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigateLightbox = useCallback(
    (direction: "next" | "prev") => {
      let newIndex =
        direction === "next"
          ? (lightboxIndex + 1) % filteredProjects.length
          : (lightboxIndex - 1 + filteredProjects.length) %
            filteredProjects.length;
      setLightboxIndex(newIndex);
      setSelectedImage(filteredProjects[newIndex]);
    },
    [lightboxIndex, filteredProjects]
  );

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-blue-500 rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* HERO */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-6 z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                Transform Ideas into{" "}
                <span className="text-blue-400">Powerful Apps</span>
              </h1>
              <p className="text-lg text-gray-200 mb-8">
                From startups to enterprises, we craft scalable, secure, and
                user-friendly applications across platforms.
              </p>
              <div className="flex gap-4">
               
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <Image
                src="/images/appdevelopment.jpg"
                alt="App Development"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl border border-blue-400/20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Development Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 hover:border-blue-500 hover:shadow-blue-500/20 shadow-xl transition"
            >
              <div className="text-blue-500 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Development Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-900/70 rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition"
              >
                <div className="flex items-center mb-4">
                  <span className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">
                    {i + 1}
                  </span>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2>
        <div className="flex justify-center gap-4 mb-12">
          {["mobile", "web", "desktop"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-2 rounded-full font-medium ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.toUpperCase()} Apps
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openLightbox(p, i)}
              className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition cursor-pointer"
            >
              <div className="relative h-56">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                  <Plus size={48} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.features.map((f, j) => (
                    <span
                      key={j}
                      className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-gray-800 p-3 rounded-full"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-6 bg-gray-800 p-3 rounded-full"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-6 bg-gray-800 p-3 rounded-full"
          >
            <ChevronRightIcon size={28} />
          </button>
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1000}
              height={700}
              className="object-contain rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-gray-800/80 px-3 py-1 rounded-lg text-sm">
              {lightboxIndex + 1} / {filteredProjects.length}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Build Your App?</h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Let&apos;s discuss your project and create a custom solution that drives
          your business forward.
        </p>
        <div className="flex justify-center gap-4">
         
        </div>
      </section>
    </div>
  );
}
