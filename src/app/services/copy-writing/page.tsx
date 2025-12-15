"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  FileText,
  Megaphone,
  TrendingUp,
  Users,
  CheckCircle,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Play,
  Award,
  Clock,
  BookOpen,
  Type,
} from "lucide-react";

export default function CopywritingPage() {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Website Copywriting",
      description: "Compelling copy that converts visitors into customers",
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Ad Copy & Sales Letters",
      description: "Persuasive copy that drives action and increases conversions",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Blog Content & Articles",
      description: "Engaging, SEO-friendly content that establishes authority",
    },
    {
      icon: <Type className="h-10 w-10" />,
      title: "Brand Voice Development",
      description:
        "Consistent messaging that reflects your brand&apos;s personality",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "SEO Copywriting",
      description:
        "Content optimized for search engines and human readers",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Email Marketing Copy",
      description:
        "Engaging email sequences that nurture leads and drive sales",
    },
  ];

  const processSteps = [
    {
      title: "Discovery & Research",
      description: "We learn about your business, audience, and goals",
    },
    {
      title: "Strategy Development",
      description: "We create a content strategy tailored to your needs",
    },
    {
      title: "Copy Creation",
      description: "Our writers craft compelling, conversion-focused copy",
    },
    {
      title: "Editing & Refinement",
      description: "We polish the copy to perfection",
    },
    {
      title: "Client Review",
      description: "You provide feedback for any final adjustments",
    },
    {
      title: "Final Delivery",
      description: "You receive copy ready to implement and publish",
    },
  ];

  const portfolioItems: Record<string, any[]> = {
    web: [
      {
        id: 1,
        title: "E-commerce Website Copy",
        description: "Complete website copy for an online fashion retailer",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        features: ["Homepage", "Product Pages", "About Us"],
      },
      {
        id: 2,
        title: "SaaS Landing Pages",
        description: "High-converting copy for a software company",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        features: ["Headlines", "Value Propositions", "CTAs"],
      },
    ],
    ads: [
      {
        id: 1,
        title: "Facebook Ad Campaign",
        description: "Scroll-stopping ad copy for a fitness product",
        image:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
        features: ["Multiple Ad Variations", "A/B Testing", "Targeted Messaging"],
      },
    ],
    content: [
      {
        id: 1,
        title: "Blog Article Series",
        description: "SEO-optimized articles for a legal firm",
        image:
          "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        features: ["Keyword Research", "Reader Engagement", "Expert Positioning"],
      },
    ],
  };

  const filteredProjects = portfolioItems[activeTab];

  const openLightbox = (project: any, index: number) => {
    setSelectedImage(project);
    setLightboxIndex(index);
    if (isClient) document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    if (isClient) document.body.style.overflow = "unset";
  }, [isClient]);

  const navigateLightbox = useCallback(
    (direction: "next" | "prev") => {
      const newIndex =
        direction === "next"
          ? (lightboxIndex + 1) % filteredProjects.length
          : (lightboxIndex - 1 + filteredProjects.length) %
            filteredProjects.length;
      setLightboxIndex(newIndex);
      setSelectedImage(filteredProjects[newIndex]);
    },
    [lightboxIndex, filteredProjects]
  );

  useEffect(() => {
    if (!isClient) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, isClient, closeLightbox, navigateLightbox]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Professional <span className="text-green-400">Copywriting</span>{" "}
              Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Words that sell, engage, and convert. Our expert copywriters craft
              compelling content that drives results for your business.
            </p>
           
           
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-green-500/30">
              <Image
                src="/images/copywriting.jpg"
                alt="Copywriting Services"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Copywriting Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition"
              >
                <div className="text-green-500 mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["web", "ads", "content"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  activeTab === tab
                    ? "bg-green-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "web" && "Website Copy"}
                {tab === "ads" && "Ad Copy"}
                {tab === "content" && "Content Writing"}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <div
                key={p.id}
                onClick={() => openLightbox(p, i)}
                className="bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-56"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-400">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 bg-gray-800 p-2 rounded-full"
          >
            <X size={28} />
          </button>
          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-6 bg-gray-800 p-2 rounded-full"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-6 bg-gray-800 p-2 rounded-full"
          >
            <ChevronRightIcon size={28} />
          </button>
          <div className="max-w-4xl w-full">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1000}
              height={600}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
