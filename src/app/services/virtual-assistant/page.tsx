"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Calendar,
  Mail,
  Phone,
  Clock,
  Users,
  FileText,
  ChevronRight,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Award,
  MessageCircle,
} from "lucide-react";

export default function VirtualAssistantPage() {
  const [activeTab, setActiveTab] = useState<"administrative" | "creative" | "technical">("administrative");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const services = [
    { icon: <Calendar className="h-10 w-10" />, title: "Calendar Management", description: "Schedule appointments, manage calendars, and never miss important meetings." },
    { icon: <Mail className="h-10 w-10" />, title: "Email Management", description: "Organize inboxes, filter key emails, and handle routine correspondence." },
    { icon: <Phone className="h-10 w-10" />, title: "Customer Support", description: "Manage customer inquiries, provide timely responses, and strengthen relationships." },
    { icon: <FileText className="h-10 w-10" />, title: "Document Preparation", description: "Create reports, presentations, and business documents with polish." },
    { icon: <Users className="h-10 w-10" />, title: "Social Media Management", description: "Schedule posts, engage with followers, and manage brand presence." },
    { icon: <Clock className="h-10 w-10" />, title: "Time Management", description: "Set reminders, optimize schedules, and improve productivity." },
  ];

  const processSteps = [
    { title: "Needs Assessment", description: "Analyze requirements to match with the right assistant." },
    { title: "Assistant Matching", description: "Get pre-vetted professionals aligned with your needs." },
    { title: "Onboarding", description: "Smooth integration into your workflows and processes." },
    { title: "Task Delegation", description: "Assign tasks seamlessly through our platform." },
    { title: "Quality Assurance", description: "Regular monitoring and feedback ensure high standards." },
    { title: "Ongoing Support", description: "Continuous communication and adjustments as you grow." },
  ];

  const portfolioItems: Record<string, any[]> = {
    administrative: [
      { id: 1, title: "Executive Support System", description: "High-level administrative support for executives.", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80", features: ["Calendar", "Travel", "Meetings"] },
      { id: 2, title: "Inbox Zero Transformation", description: "Efficient email organization and management.", image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80", features: ["Inbox Zero", "Priority Filters", "Templates"] },
    ],
    creative: [
      { id: 1, title: "Social Media Campaign", description: "Comprehensive management for brand engagement.", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80", features: ["Content", "Engagement", "Analytics"] },
      { id: 2, title: "Content Calendar", description: "Strategic planning for consistent branding.", image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80", features: ["Cross-Platform", "Consistency", "Growth"] },
    ],
    technical: [
      { id: 1, title: "CRM Management", description: "Optimized CRM handling for efficiency.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", features: ["Automation", "Data Entry", "Reports"] },
      { id: 2, title: "E-commerce Support", description: "Managing listings, orders, and communication.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80", features: ["Listings", "Orders", "Service"] },
    ],
  };

  const filteredProjects = portfolioItems[activeTab];

  const openLightbox = (project: any, index: number) => {
    setSelectedImage(project);
    setLightboxIndex(index);
    if (isClient) document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    if (isClient) document.body.style.overflow = "unset";
  };

  const navigateLightbox = (dir: "next" | "prev") => {
    const newIndex = dir === "next" ? (lightboxIndex + 1) % filteredProjects.length : (lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxIndex(newIndex);
    setSelectedImage(filteredProjects[newIndex]);
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero */}
      <section className="relative py-20 md:py-28 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Virtual <span className="text-blue-400">Assistant</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Skilled professionals helping you streamline work, save time, and grow your business.
            </p>
         
          </div>
          <div className="md:w-1/2">
            <div className="rounded-2xl shadow-2xl border-2 border-blue-500/30 overflow-hidden">
              <Image
                src="/images/visualassistant.jpg"
                alt="Virtual Assistant"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Virtual Assistant Services</h2>
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

      {/* How it Works */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center mr-4">{i + 1}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
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
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          <div className="flex justify-center mb-8 space-x-4">
            {["administrative", "creative", "technical"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2 rounded-lg ${activeTab === tab ? "bg-blue-600 text-white" : "text-gray-400 hover:text-white"}`}
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
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Delegate & Focus?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Let our virtual assistants handle tasks so you can focus on scaling your business.
          </p>
         
         
        </div>
      </section>
    </div>
  );
}
