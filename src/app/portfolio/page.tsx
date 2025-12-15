"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Plus } from "lucide-react";

const services = [
  { id: "all", name: "All Projects" },
  { id: "logo", name: "Logo Design" },
  { id: "web", name: "Web Development" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "mobile", name: "Mobile Apps" },
];

const projects = [
  // Logo Design
  { id: 1, title: "Minimalist Brand Identity", service: "logo", image: "/images/logo/13.webp" },
  { id: 2, title: "Vintage Logo Design", service: "logo", image: "/images/logo/14.webp" },
  { id: 3, title: "Modern Logo Concept", service: "logo", image: "/images/logo/15.webp" },
  { id: 4, title: "Corporate Identity", service: "logo", image: "/images/logo/17.webp" },
  { id: 5, title: "Creative Agency Logo", service: "logo", image: "/images/logo/18.webp" },
  { id: 6, title: "Restaurant Branding", service: "logo", image: "/images/logo/20.webp" },
  { id: 7, title: "Tech Startup Logo", service: "logo", image: "/images/logo/21.webp" },
  { id: 8, title: "Fashion Brand Logo", service: "logo", image: "/images/logo/22.webp" },
  { id: 9, title: "Health & Wellness Logo", service: "logo", image: "/images/logo/19.webp" },

  // Web Development
  { id: 10, title: "Corporate Website", service: "web", image: "/images/wedevelopment/1.png" },
  { id: 11, title: "Portfolio Website", service: "web", image: "/images/wedevelopment/2.png" },
  { id: 12, title: "Educational Platform", service: "web", image: "/images/wedevelopment/3.png" },
  { id: 13, title: "News Portal", service: "web", image: "/images/wedevelopment/4.png" },

  // E-commerce
  { id: 19, title: "Fashion E-store", service: "ecommerce", image: "/images/ecommerce/1.webp" },
  { id: 20, title: "Electronics Store", service: "ecommerce", image: "/images/ecommerce/2.webp" },

  // Mobile App
  { id: 25, title: "Fitness Tracking App", service: "mobile", image: "/images/mobileapp/1.webp" },
  { id: 26, title: "Food Delivery App", service: "mobile", image: "/images/mobileapp/2.webp" },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.service === activeTab);

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
      let newIndex;
      if (direction === "next") newIndex = (lightboxIndex + 1) % filteredProjects.length;
      else newIndex = (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;

      setLightboxIndex(newIndex);
      setSelectedImage(filteredProjects[newIndex]);
    },
    [filteredProjects, lightboxIndex]
  );

  // Keyboard navigation
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
  }, [selectedImage, closeLightbox, navigateLightbox, isClient]);

  if (!isClient)
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="py-20 md:py-28 text-center relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <h1 className="text-4xl md:text-6xl font-bold">
          Our Creative <span className="text-blue-400">Portfolio</span>
        </h1>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeTab === s.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group relative"
                onClick={() => openLightbox(project, index)}
              >
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Plus size={48} className="text-white opacity-80" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gray-900/90 text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                      {project.service.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10"
          >
            <X size={28} />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-6 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10 md:left-10"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-6 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors z-10 md:right-10"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-6xl w-full max-h-full flex items-center justify-center">
            <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="object-contain max-h-full max-w-full"
              />
              <div className="absolute bottom-4 left-4 bg-gray-800/80 text-white text-sm px-3 py-1.5 rounded-lg">
                {lightboxIndex + 1} / {filteredProjects.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
