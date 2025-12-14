"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Search,
  BarChart3,
  Target,
  TrendingUp,
  Globe,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Play,
} from "lucide-react";

export default function SEOPage() {
  const [activeTab, setActiveTab] = useState("onpage");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "On-Page SEO",
      description:
        "Optimizing your website structure, content, and metadata for better search engine rankings.",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Technical SEO",
      description:
        "Improving website speed, mobile-friendliness, and crawlability for enhanced performance.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Off-Page SEO",
      description:
        "Building high-quality backlinks and strengthening online authority to boost visibility.",
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Keyword Research",
      description:
        "Identifying high-value keywords to target your audience effectively.",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Local SEO",
      description:
        "Optimizing your business for location-based searches to attract local customers.",
    },
  ];

  const portfolioItems: Record<string, any[]> = {
    onpage: [
      {
        id: 1,
        title: "Website Optimization",
        description: "Enhanced meta tags, headers, and content structure.",
        image:
          "/images/wo.png",
        features: ["Meta Optimization", "Content Structuring", "SEO-friendly URLs"],
      },
      {
        id: 2,
        title: "Blog SEO",
        description: "Optimized blog posts for higher ranking and visibility.",
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        features: ["Keyword Density", "Content Quality", "Internal Linking"],
      },
    ],
    technical: [
      {
        id: 1,
        title: "Site Speed Improvements",
        description: "Boosted performance with code minification and caching.",
        image:
          "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
        features: ["PageSpeed Optimization", "Mobile-Friendly Design", "Crawlability"],
      },
    ],
    offpage: [
      {
        id: 1,
        title: "Backlink Strategy",
        description: "Built high-quality backlinks for better domain authority.",
        image:
          "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
        features: ["Guest Posting", "Link Outreach", "Competitor Backlinks"],
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
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              SEO <span className="text-blue-400">Services</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Drive more organic traffic, increase visibility, and rank higher with our expert SEO solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              <Image
                src="/images/SEO.jpg"
                alt="SEO Services"
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
        <h2 className="text-3xl font-bold text-center mb-12">Our SEO Services</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">SEO Case Studies</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["onpage", "technical", "offpage"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} SEO
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
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-blue-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Rank Higher on Google?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let our SEO experts help you boost organic traffic and reach the top of search results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
         
         
          </div>
        </div>
      </section>
    </div>
  );
}
