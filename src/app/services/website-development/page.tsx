"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Code,
  Layout,
  Smartphone,
  Globe,
  Zap,
  Shield,
  ChevronRight,
  X,
  ChevronLeft,
  Plus
} from "lucide-react";

// Define valid tab types
type Tab = "corporate" | "ecommerce" | "webapp";

// Define project type
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
  technologies: string[];
};

// Portfolio items type
type PortfolioItems = Record<Tab, Project[]>;

export default function WebsiteDevelopmentPage() {
  const [activeTab, setActiveTab] = useState<Tab>("corporate");
  const [selectedImage, setSelectedImage] = useState<Project | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  // Services
  const services = [
    { icon: <Layout className="h-10 w-10" />, title: "Custom Website Design", description: "Unique, responsive designs tailored to your brand and business objectives" },
    { icon: <Code className="h-10 w-10" />, title: "Frontend Development", description: "Modern, interactive user interfaces built with latest technologies" },
    { icon: <Globe className="h-10 w-10" />, title: "Backend Development", description: "Robust server-side architecture and database solutions" },
    { icon: <Smartphone className="h-10 w-10" />, title: "Mobile Responsive", description: "Websites that work flawlessly across all devices and screen sizes" },
    { icon: <Zap className="h-10 w-10" />, title: "Performance Optimization", description: "Lightning-fast loading speeds and optimal user experience" },
    { icon: <Shield className="h-10 w-10" />, title: "Security Implementation", description: "Advanced security measures to protect your website and data" }
  ];

  // Development Process
  const processSteps = [
    { title: "Discovery & Planning", description: "Understanding your goals, audience, and requirements" },
    { title: "Design & Prototyping", description: "Creating visual designs and interactive prototypes" },
    { title: "Development", description: "Building your website with clean, efficient code" },
    { title: "Testing & QA", description: "Rigorous testing across devices and browsers" },
    { title: "Deployment", description: "Launching your website and going live" },
    { title: "Maintenance & Support", description: "Ongoing updates, security, and performance monitoring" }
  ];

  // Portfolio
  const portfolioItems: PortfolioItems = {
    corporate: [
      { id: 1, title: "Corporate Business Website", description: "Professional website for established financial services company", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Modern Design", "CMS Integration", "Lead Generation"], technologies: ["React", "WordPress", "Tailwind CSS"] },
      { id: 2, title: "Professional Services Portal", description: "Comprehensive website for consulting firm with client portal", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Client Dashboard", "Service Catalog", "Appointment Booking"], technologies: ["Next.js", "Node.js", "MongoDB"] },
      { id: 3, title: "Enterprise Solutions Site", description: "Scalable website for technology solutions provider", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Product Showcase", "Case Studies", "Integration Hub"], technologies: ["Vue.js", "Laravel", "MySQL"] }
    ],
    ecommerce: [
      { id: 1, title: "E-commerce Store", description: "Full-featured online store for fashion retailer", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Product Catalog", "Shopping Cart", "Payment Gateway"], technologies: ["Shopify", "React", "Stripe"] },
      { id: 2, title: "Multi-vendor Marketplace", description: "Platform connecting multiple sellers with buyers", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Vendor Accounts", "Commission System", "Review Platform"], technologies: ["Next.js", "Firebase", "PayPal"] },
      { id: 3, title: "Subscription Service Portal", description: "Recurring billing platform for subscription box service", image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Recurring Payments", "Account Management", "Subscription Controls"], technologies: ["React", "Express", "MongoDB"] }
    ],
    webapp: [
      { id: 1, title: "SaaS Application", description: "Cloud-based software solution for project management", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["User Authentication", "Real-time Updates", "Team Collaboration"], technologies: ["Angular", "NestJS", "PostgreSQL"] },
      { id: 2, title: "Progressive Web App", description: "Offline-capable web application for field service management", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Offline Functionality", "Push Notifications", "Mobile App-like Experience"], technologies: ["PWA", "React", "IndexedDB"] },
      { id: 3, title: "Dashboard & Analytics", description: "Data visualization platform for business intelligence", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", features: ["Data Visualization", "Custom Reports", "Real-time Analytics"], technologies: ["D3.js", "Vue.js", "Python"] }
    ]
  };

  // Fix TypeScript indexing issue
  const filteredProjects = portfolioItems[activeTab];

  // Lightbox functions
  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
    if (isClient) document.body.style.overflow = "unset";
  }, [isClient]);

  const navigateLightbox = useCallback((direction: "next" | "prev") => {
    const newIndex =
      direction === "next"
        ? (lightboxIndex + 1) % filteredProjects.length
        : (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  }, [lightboxIndex, filteredProjects]);

  const openLightbox = (project: Project, index: number) => {
    setSelectedImage(project);
    setLightboxIndex(index);
    if (isClient) document.body.style.overflow = "hidden";
  };

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
  }, [selectedImage, isClient, closeLightbox, navigateLightbox]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Website <span className="text-blue-400">Development</span>
            </h1>
            <p className="text-xl max-w-2xl opacity-90">
              Custom websites and web applications designed to drive growth and deliver exceptional user experiences.
            </p>
          </div>
          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/webdevelopment.jpg"
              alt="Website Development"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="text-blue-500 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 bg-gray-900 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">{i + 1}</div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="flex justify-center mb-12 space-x-2">
          {["corporate", "ecommerce", "webapp"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === tab ? "bg-blue-600 text-white shadow-md" : "text-gray-400 hover:text-white"}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="bg-gray-900 rounded-2xl overflow-hidden group hover:scale-105 transition-all cursor-pointer border border-gray-700" onClick={() => openLightbox(project, index)}>
              <div className="relative h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                  <Plus size={48} className="text-white opacity-80"/>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.features.map((f, i) => <span key={i} className="bg-blue-900/30 text-blue-400 text-xs px-2 py-1 rounded">{f}</span>)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => <span key={i} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Section */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700"><X size={28}/></button>
          <button onClick={() => navigateLightbox('prev')} className="absolute left-6 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700"><ChevronLeft size={28}/></button>
          <button onClick={() => navigateLightbox('next')} className="absolute right-6 text-white p-3 rounded-full bg-gray-800 hover:bg-gray-700"><ChevronRight size={28}/></button>
          <div className="max-w-6xl w-full max-h-full flex items-center justify-center relative">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={1200}
              height={800}
              style={{ objectFit: "contain" }}
              className="rounded-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
