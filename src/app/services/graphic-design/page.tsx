"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Palette,
  Brush,
  Layers,
  PenTool,
  Image as ImageIcon,
  Layout,
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

export default function GraphicDesignPage() {
  const [activeTab, setActiveTab] = useState("branding");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    { icon: <Palette className="h-10 w-10" />, title: "Brand Identity Design", description: "Complete branding packages including logos, color schemes, and brand guidelines" },
    { icon: <Brush className="h-10 w-10" />, title: "Print Design", description: "Brochures, business cards, flyers, and other printed materials" },
    { icon: <Layers className="h-10 w-10" />, title: "UI/UX Design", description: "User-friendly interfaces and experiences for digital products" },
    { icon: <PenTool className="h-10 w-10" />, title: "Illustration", description: "Custom illustrations and artwork for various applications" },
    { icon: <ImageIcon className="h-10 w-10" />, title: "Social Media Graphics", description: "Engaging visuals for social media platforms and campaigns" },
    { icon: <Layout className="h-10 w-10" />, title: "Packaging Design", description: "Eye-catching packaging that stands out on shelves" },
  ];

  const processSteps = [
    { title: "Discovery & Research", description: "We learn about your business, audience, and design needs" },
    { title: "Concept Development", description: "Our designers create initial concepts and design directions" },
    { title: "Design Execution", description: "We bring the chosen concept to life with precision" },
    { title: "Client Feedback", description: "You provide input and suggestions for refinement" },
    { title: "Revisions & Polish", description: "We refine the designs based on your feedback" },
    { title: "Final Delivery", description: "You receive all final files in required formats" },
  ];

  const portfolioItems: Record<string, any[]> = {
    branding: [
      {
        id: 1,
        title: "Tech Startup Branding",
        description: "Complete brand identity for an innovative tech company",
        image: "/images/graphic.jpg",
        features: ["Logo Design", "Color Palette", "Brand Guidelines"],
      },
      {
        id: 2,
        title: "Restaurant Identity",
        description: "Vibrant branding for a modern fusion restaurant",
        image: "/images/resturent.webp",
        features: ["Logo", "Menu Design", "Packaging"],
      },
    ],
    print: [
      {
        id: 1,
        title: "Product Catalog",
        description: "72-page product catalog for manufacturing company",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
        features: ["Layout Design", "Product Photography", "Print Preparation"],
      },
    ],
    digital: [
      {
        id: 1,
        title: "E-commerce Website UI",
        description: "User interface design for online fashion store",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
        features: ["Wireframing", "UI Design", "Prototyping"],
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
              Graphic <span className="text-blue-400">Design</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Transforming ideas into visually stunning designs that communicate your brand&apos;s essence and captivate your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-500/30">
              <Image
                src="/images/graphicdesign.jpg"
                alt="Graphic Design Services"
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
        <h2 className="text-3xl font-bold text-center mb-12">Our Graphic Design Services</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["branding", "print", "digital"].map((tab) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Visual Identity?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let&apos;s discuss your design needs and create visuals that elevate your brand
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
           
           
          </div>
        </div>
      </section>
    </div>
  );
}
