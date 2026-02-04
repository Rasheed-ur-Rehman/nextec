"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  Share2,
  TrendingUp,
  Users,
  BarChart3,
  MessageCircle,
  Calendar,
  ChevronRight,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Play,
  Award,
} from "lucide-react";

export default function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState("strategy");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    {
      icon: <Share2 className="h-10 w-10" />,
      title: "Social Media Strategy",
      description:
        "Comprehensive plans tailored to your business goals and target audience",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Content Creation",
      description:
        "Engaging posts, stories, and visuals that resonate with your audience",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community Management",
      description: "Building and nurturing relationships with your followers",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Analytics & Reporting",
      description:
        "Detailed insights and performance metrics to measure success",
    },
    {
      icon: <MessageCircle className="h-10 w-10" />,
      title: "Paid Social Advertising",
      description:
        "Targeted campaigns to reach new audiences and drive conversions",
    },
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Content Scheduling",
      description:
        "Strategic posting across all platforms at optimal times",
    },
  ];

  const processSteps = [
    {
      title: "Audit & Analysis",
      description:
        "We review your current social presence and identify opportunities",
    },
    {
      title: "Strategy Development",
      description: "We create a customized plan aligned with your objectives",
    },
    {
      title: "Content Planning",
      description: "We develop a calendar and create engaging assets",
    },
    {
      title: "Implementation",
      description: "We execute the strategy across relevant platforms",
    },
    {
      title: "Engagement & Monitoring",
      description: "We interact with your audience and monitor conversations",
    },
    {
      title: "Reporting & Optimization",
      description: "We analyze performance and refine our approach",
    },
  ];

  // Move portfolioItems inside useMemo
  const filteredProjects = useMemo(() => {
    const portfolioItems: Record<string, any[]> = {
      strategy: [
        {
          id: 1,
          title: "Restaurant Social Strategy",
          description: "Complete overhaul for a restaurant chain",
          image: "/images/resturent.webp",
          features: ["Platform Selection", "Content Strategy", "Growth Plan"],
        },
        {
          id: 2,
          title: "Tech Startup Launch",
          description: "Social media strategy for SaaS launch",
          image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          features: ["Audience Research", "Campaign Planning", "KPI Setting"],
        },
      ],
      content: [
        {
          id: 1,
          title: "Fashion Brand Content",
          description: "Daily content for lifestyle brand",
          image:
            "https://images.unsplash.com/photo-1523264939339-c89f9dadde2e?auto=format&fit=crop&w=800&q=80",
          features: ["Visual Content", "Caption Writing", "Hashtag Strategy"],
        },
        {
          id: 2,
          title: "Wellness Campaign",
          description: "30-day content series for a wellness brand",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
          features: ["Educational Posts", "User Engagement", "Story Series"],
        },
      ],
      growth: [
        {
          id: 1,
          title: "Instagram Growth",
          description: "Scaled followers from 2K to 50K",
          image: "/images/insta.webp",
          features: ["Follower Growth", "Engagement", "Content Performance"],
        },
        {
          id: 2,
          title: "TikTok Viral Campaign",
          description: "Created viral content with 5M+ views",
          image: "/images/tiktok.jpg",
          features: ["Trend Utilization", "Creator Collabs", "Viral Content"],
        },
      ],
    };

    return portfolioItems[activeTab] || [];
  }, [activeTab]);

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
      if (!filteredProjects.length) return;
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
        <div className="animate-spin h-12 w-12 rounded-full border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Social Media <span className="text-blue-400">Management</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We build, grow, and manage social presence that drives engagement,
              builds community, and generates results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
             
             
            </div>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              <Image
                src="/images/socialmedia.jpg"
                alt="Social Media Management"
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Social Media Services
        </h2>
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

      {/* Process */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Social Media Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white h-10 w-10 rounded-full flex items-center justify-center mr-4">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Portfolio
          </h2>
          {/* Tabs */}
          <div className="flex justify-center mb-8 space-x-4">
            {["strategy", "content", "growth"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
          {/* Grid */}
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
