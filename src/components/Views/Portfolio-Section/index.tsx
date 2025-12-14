"use client";

import { useState } from "react";
import { projectImages } from "@/components/Assets";
import Image from "next/image";
import { Plus, X, ChevronLeft, ChevronRight } from "lucide-react";

// Project Type
type Project = {
  id: number;
  title: string;
  service: string;
  image: string;
};

// Service Type
type Service = {
  id: string;
  name: string;
};

const services: Service[] = [
  { id: "all", name: "All Projects" },
  { id: "logo", name: "Logo Design" },
  { id: "web", name: "Web Development" },
  { id: "ecommerce", name: "E-commerce" },
  { id: "mobile", name: "Mobile Apps" },
];

const projects: Project[] = [
  // Logo Design Projects
  { id: 1, title: "Minimalist Brand Identity", service: "logo", image: "/images/logo/13.webp" },
  { id: 2, title: "Vintage Logo Design", service: "logo", image: "/images/logo/14.webp" },
  { id: 3, title: "Modern Logo Concept", service: "logo", image: "/images/logo/15.webp" },
  // Web Development Projects
  { id: 10, title: "Corporate Website", service: "web", image: "/images/wedevelopment/1.png" },
  { id: 11, title: "Portfolio Website", service: "web", image: "/images/wedevelopment/2.png" },
  { id: 12, title: "Educational Platform", service: "web", image: "/images/wedevelopment/3.png" },
  // E-commerce Projects
  { id: 19, title: "Fashion E-store", service: "ecommerce", image: "/images/ecommerce/1.webp" },
  { id: 20, title: "Electronics Store", service: "ecommerce", image: "/images/ecommerce/2.webp" },
  { id: 21, title: "Home Decor Store", service: "ecommerce", image: "/images/ecommerce/3.webp" },
  // Mobile App Projects
  { id: 25, title: "Fitness Tracking App", service: "mobile", image: "/images/mobileapp/1.webp" },
  { id: 26, title: "Food Delivery App", service: "mobile", image: "/images/mobileapp/2.webp" },
  { id: 27, title: "Finance Management", service: "mobile", image: "/images/mobileapp/3.webp" },
];

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter((project) => project.service === activeTab);

  // Typing project parameter as Project
  const openLightbox = (project: Project, index: number) => {
    setSelectedImage(project);
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: "next" | "prev") => {
    let newIndex: number;
    if (direction === "next") {
      newIndex = (lightboxIndex + 1) % filteredProjects.length;
    } else {
      newIndex = (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
    }
    setLightboxIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  return (
    <section className="wrapper sm:min-h-[100vh] py-[3rem] sm:py-[5rem] flex flex-col items-center justify-center">
      <div className="max-w-fit relative z-10 self-start mb-3">
        <div className="pt-10 sm:pt-10 sm:pl-10 space-y-2 ">
          <Image
            src={projectImages.PseudoElement}
            alt="a"
            className="max-w-[60px] sm:max-w-[80px] object-cover "
          />
          <h3 className="font-bold font-mono max-w-md text-2xl sm:text-4xl tracking-wider leading-none">
            {"Check Our Recently Completed Projects"}
          </h3>
        </div>
        <h1 className="textStroke font-serif sm:text-[7rem] text-[3.4rem]">
          PORTFOLIO
        </h1>
      </div>

      {/* Portfolio Tabs */}
      <div className="w-full mt-8 mb-8">
        <div className="flex flex-wrap justify-center gap-3">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === service.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto mb-12">
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
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

      {/* Lightbox Modal */}
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
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
              />
              <div className="absolute bottom-4 left-4 bg-gray-800/80 text-white text-sm px-3 py-1.5 rounded-lg">
                {lightboxIndex + 1} / {filteredProjects.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
