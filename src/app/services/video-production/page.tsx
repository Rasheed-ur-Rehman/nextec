"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import {
  Video,
  Film,
  Clapperboard,
  PlayCircle,
  Edit3,
  Mic,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Play,
} from "lucide-react";

// Project type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
};

// Tabs type
type Tab = "commercial" | "corporate" | "social";
type PortfolioItems = Record<Tab, Project[]>;

export default function VideoProductionPage() {
  const [activeTab, setActiveTab] = useState<Tab>("commercial");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    {
      icon: <Film className="h-10 w-10" />,
      title: "Commercial Video Production",
      description:
        "Professional commercials that showcase your products and drive sales",
    },
    {
      icon: <Clapperboard className="h-10 w-10" />,
      title: "Corporate Videos",
      description:
        "Engaging videos for training, internal communications, and company stories",
    },
    {
      icon: <PlayCircle className="h-10 w-10" />,
      title: "Social Media Videos",
      description:
        "Short, engaging videos optimized for social media platforms",
    },
    {
      icon: <Edit3 className="h-10 w-10" />,
      title: "Video Editing",
      description: "Professional editing services to polish your raw footage",
    },
    {
      icon: <Mic className="h-10 w-10" />,
      title: "Animation & Motion Graphics",
      description:
        "Dynamic animations that explain concepts and capture attention",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Live Event Coverage",
      description:
        "Professional filming of conferences, concerts, and special events",
    },
  ];

  const portfolioItems: PortfolioItems = useMemo(
    () => ({
      commercial: [
        {
          id: 1,
          title: "Product Launch Commercial",
          description: "60-second spot for a new tech product release",
          image:
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=800&q=80",
          features: ["Concept Development", "4K Production", "Color Grading"],
        },
        {
          id: 2,
          title: "Restaurant TV Commercial",
          description: "30-second TV spot for a national restaurant chain",
          image:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
          features: ["Food Cinematography", "Location Shooting", "Broadcast Quality"],
        },
      ],
      corporate: [
        {
          id: 1,
          title: "Company Culture Video",
          description: "Showcasing company values and team culture",
          image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          features: ["Employee Interviews", "Office Footage", "Brand Alignment"],
        },
        {
          id: 2,
          title: "Training Video Series",
          description: "Comprehensive training program for new employees",
          image:
            "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=800&q=80",
          features: ["Screen Recording", "Presenter Shots", "Graphics Integration"],
        },
      ],
      social: [
        {
          id: 1,
          title: "Instagram Reel Series",
          description: "Engaging short-form content for Instagram",
          image: "/images/insta.webp",
          features: ["Vertical Format", "Quick Cuts", "Trending Audio"],
        },
        {
          id: 2,
          title: "TikTok Campaign",
          description: "Viral content series for TikTok platform",
          image: "/images/tiktok.jpg",
          features: ["Trend Participation", "Creator Collaboration", "Platform Optimization"],
        },
      ],
    }),
    []
  );

  const filteredProjects = useMemo(
    () => portfolioItems[activeTab],
    [activeTab, portfolioItems]
  );

  const openLightbox = (project: Project, index: number) => {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Video <span className="text-blue-400">Production</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Professional video production services that tell your story, engage your audience, and deliver results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              <Image
                src="/images/videoproduction.jpg"
                alt="Video Production"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Video Production Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
              <div className="text-blue-500 mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Video Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["commercial", "corporate", "social"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as Tab)}
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

      {/* Lightbox Section */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let&apos;s discuss your video production needs and create compelling content that tells your story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          </div>
        </div>
      </section>
    </div>
  );
}
