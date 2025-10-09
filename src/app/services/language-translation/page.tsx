"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Globe,
  BookOpen,
  FileText,
  MessageSquare,
  Headphones,
  Users,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Play,
} from "lucide-react";

export default function LanguageTranslationPage() {
  const [activeTab, setActiveTab] = useState("documents");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    { icon: <Globe className="h-10 w-10" />, title: "Website Localization", description: "Translate and adapt your website for global audiences." },
    { icon: <BookOpen className="h-10 w-10" />, title: "Book & E-learning", description: "Translation services for books, e-learning platforms, and academic content." },
    { icon: <FileText className="h-10 w-10" />, title: "Document Translation", description: "Certified translations for business, legal, and medical documents." },
    { icon: <MessageSquare className="h-10 w-10" />, title: "Business Communication", description: "Professional translation for presentations, proposals, and business communication." },
    { icon: <Headphones className="h-10 w-10" />, title: "Transcription & Subtitles", description: "Accurate transcriptions and subtitles for videos and audio." },
    { icon: <Users className="h-10 w-10" />, title: "Interpretation Services", description: "Real-time interpretation for conferences, meetings, and events." },
  ];

  const portfolioItems: Record<string, any[]> = {
    documents: [
      {
        id: 1,
        title: "Legal Contract Translation",
        description: "Translated a 50-page international contract for a corporate client.",
        image: "/images/va.jpg",
        features: ["Legal Terminology", "Accuracy", "Certification"],
      },
      {
        id: 2,
        title: "Medical Reports",
        description: "Translated patient reports and research papers for healthcare professionals.",
        image: "/images/mr.jpg",
        features: ["Technical Precision", "Confidentiality"],
      },
    ],
    websites: [
      {
        id: 1,
        title: "E-commerce Localization",
        description: "Full multilingual website translation for a global e-commerce brand.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
        features: ["UI Adaptation", "SEO Optimization", "Cultural Fit"],
      },
    ],
    media: [
      {
        id: 1,
        title: "Video Subtitles",
        description: "Added multilingual subtitles for an international webinar series.",
        image: "/images/1.png",
        features: ["Accurate Timing", "Multiple Languages"],
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
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Language <span className="text-blue-400">Translation</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Breaking barriers with accurate, professional translations tailored to your industry and audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              <Image
                src="/images/langaugetranslaution.jpg"
                alt="Language Translation Services"
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
        <h2 className="text-3xl font-bold text-center mb-12">Our Translation Services</h2>
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

      {/* Portfolio */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["documents", "websites", "media"].map((tab) => (
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
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expand Your Reach with Professional Translations</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let&apos;s help your business connect with global audiences in their native language.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
           -
          </div>
        </div>
      </section>
    </div>
  );
}
