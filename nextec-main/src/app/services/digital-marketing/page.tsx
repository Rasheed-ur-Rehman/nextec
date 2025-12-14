"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Target,
  TrendingUp,
  BarChart3,
  Mail,
  Search,
  Users,
  ChevronRight,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Play,
  Award,
  Megaphone,
  Globe,
} from "lucide-react";

export default function DigitalMarketingPage() {
  const [activeTab, setActiveTab] = useState("seo");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "SEO Optimization",
      description: "Improve your search engine rankings and drive organic traffic",
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Social Media Marketing",
      description: "Engage your audience and build brand presence across platforms",
    },
    {
      icon: <Mail className="h-10 w-10" />,
      title: "Email Marketing",
      description: "Nurture leads and drive conversions with targeted campaigns",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "PPC Advertising",
      description: "Drive immediate traffic with targeted pay-per-click campaigns",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts and retains customers",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Analytics & Reporting",
      description: "Measure performance and optimize your marketing strategy",
    },
  ];

  const processSteps = [
    { title: "Strategy Development", description: "We analyze your goals and create a customized marketing plan" },
    { title: "Implementation", description: "Our team executes your marketing strategy across channels" },
    { title: "Optimization", description: "We continuously refine campaigns based on performance data" },
    { title: "Monitoring", description: "Regular tracking of key metrics and campaign performance" },
    { title: "Reporting", description: "Detailed insights and recommendations for improvement" },
    { title: "Scaling", description: "Expanding successful strategies to maximize ROI" },
  ];

  const portfolioItems: Record<string, any[]> = {
    seo: [
      {
        id: 1,
        title: "E-commerce SEO",
        description: "Increased organic traffic by 215% for online retailer",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        features: ["Keyword Research", "Technical SEO", "Content Optimization"],
      },
      {
        id: 2,
        title: "Local SEO Campaign",
        description: "Top 3 rankings for 25+ key local search terms",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
        features: ["Google My Business", "Local Citations", "Review Management"],
      },
    ],
    social: [
      {
        id: 1,
        title: "Facebook Ad Campaign",
        description: "62% lower cost per conversion for e-commerce brand",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
        features: ["Audience Targeting", "Creative Testing", "Conversion Tracking"],
      },
      {
        id: 2,
        title: "Instagram Brand Launch",
        description: "Grew followers by 15K in 3 months for lifestyle brand",
        image: "https://images.unsplash.com/photo-1616469829476-8953c5655574?auto=format&fit=crop&w=800&q=80",
        features: ["Influencer Partnerships", "Story Campaigns", "User-Generated Content"],
      },
    ],
    content: [
      {
        id: 1,
        title: "Content Strategy",
        description: "Developed holistic content plan driving 300% more traffic",
        image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800&q=80",
        features: ["Audience Research", "Content Calendar", "Performance Metrics"],
      },
      {
        id: 2,
        title: "Email Nurture Sequence",
        description: "28% conversion rate for webinar promotion series",
        image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=800&q=80",
        features: ["Automation Workflows", "Personalization", "A/B Testing"],
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 via-orange-900 to-amber-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Digital <span className="text-red-400">Marketing</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Data-driven strategies that drive growth, engagement, and conversions for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
             
             
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-red-500/30">
              <Image
                src="/images/digitalmarketing.jpg"
                alt="Digital Marketing Services"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl border border-gray-700 bg-gray-700/30">
            <Award className="h-10 w-10 text-red-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-red-400">350+</p>
            <p className="text-gray-300">Campaigns Managed</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-700 bg-gray-700/30">
            <Users className="h-10 w-10 text-red-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-red-400">95+</p>
            <p className="text-gray-300">Happy Clients</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-700 bg-gray-700/30">
            <TrendingUp className="h-10 w-10 text-red-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-red-400">4.2x</p>
            <p className="text-gray-300">Average ROI</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-700 bg-gray-700/30">
            <CheckCircle className="h-10 w-10 text-red-400 mx-auto mb-2" />
            <p className="text-3xl font-bold text-red-400">100%</p>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Digital Marketing Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition">
              <div className="text-red-500 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["seo", "social", "content"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-medium ${
                  activeTab === tab ? "bg-red-600 text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {tab === "seo" && "SEO & SEM"}
                {tab === "social" && "Social Media"}
                {tab === "content" && "Content Marketing"}
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
                <Image src={p.image} alt={p.title} width={600} height={400} className="object-cover w-full h-56" />
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
          <button onClick={closeLightbox} className="absolute top-6 right-6 bg-gray-800 p-2 rounded-full">
            <X size={28} />
          </button>
          <button onClick={() => navigateLightbox("prev")} className="absolute left-6 bg-gray-800 p-2 rounded-full">
            <ChevronLeft size={28} />
          </button>
          <button onClick={() => navigateLightbox("next")} className="absolute right-6 bg-gray-800 p-2 rounded-full">
            <ChevronRightIcon size={28} />
          </button>
          <div className="max-w-4xl w-full">
            <Image src={selectedImage.image} alt={selectedImage.title} width={1000} height={600} className="object-contain w-full h-auto" />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-900 to-orange-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let&apos;s discuss your digital marketing needs and create a strategy that drives measurable results
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
          </div>
        </div>
      </section>
    </div>
  );
}
