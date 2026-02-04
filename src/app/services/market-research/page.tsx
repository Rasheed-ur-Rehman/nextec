"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  BarChart3,
  Target,
  Users,
  TrendingUp,
  PieChart,
  Globe,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Play,
  Award,
  ClipboardCheck,
} from "lucide-react";

export default function MarketingResearchPage() {
  const [activeTab, setActiveTab] = useState("consumer");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    {
      icon: <Target className="h-10 w-10" />,
      title: "Market Analysis",
      description: "Comprehensive research to identify market size, trends, and opportunities",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Consumer Insights",
      description: "In-depth understanding of consumer behavior, preferences, and motivations",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Competitive Intelligence",
      description: "Analysis of competitors' strategies, strengths, and market positioning",
    },
    {
      icon: <PieChart className="h-10 w-10" />,
      title: "Brand Research",
      description: "Measurement of brand awareness, perception, and equity in the market",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Product Testing",
      description: "Evaluation of product concepts, features, and pricing strategies",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Global Market Entry",
      description: "Research for international expansion and cross-cultural market understanding",
    },
  ];

  const portfolioItems: Record<string, any[]> = {
    consumer: [
      {
        id: 1,
        title: "Consumer Behavior Study",
        description: "Comprehensive analysis of purchasing patterns for retail industry",
        image:
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
        features: ["Purchase Journey", "Demographic Analysis", "Behavior Patterns"],
      },
      {
        id: 2,
        title: "Customer Satisfaction Research",
        description: "Measuring customer experience and loyalty for service industry",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
        features: ["NPS Analysis", "Experience Mapping", "Loyalty Drivers"],
      },
    ],
    competitive: [
      {
        id: 1,
        title: "Competitive Landscape Analysis",
        description: "Assessment of competitors and their strategies",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        features: ["SWOT Analysis", "Market Positioning", "Strategy Assessment"],
      },
    ],
    brand: [
      {
        id: 1,
        title: "Brand Perception Study",
        description: "Measuring how target audiences perceive your brand",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
        features: ["Awareness Metrics", "Perception Mapping", "Brand Attributes"],
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
          : (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Marketing <span className="text-blue-400">Research</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Data-driven insights to guide your business decisions and maximize market opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
             
             
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              <Image
                src="/images/marketresearch.jpg"
                alt="Marketing Research"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Research Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition"
            >
              <div className="text-blue-500 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Research Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["consumer", "competitive", "brand"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  activeTab === tab ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
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

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Gain Market Insights?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let our research experts help you make data-driven decisions that drive business growth
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
           
          </div>
        </div>
      </section>
    </div>
  );
}
