"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Camera,
  Video,
  PenTool,
  Users,
  TrendingUp,
  ChevronRight,
  CheckCircle,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Plus,
  Play,
  Award,
  Clock,
  FileText,
  Megaphone,
} from "lucide-react";

type Service = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export default function ContentCreationPage() {
  const [activeTab, setActiveTab] = useState<"graphic" | "video" | "writing">("graphic");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services: Service[] = [
    {
      icon: <PenTool className="h-10 w-10" />,
      title: "Graphic Design",
      description: "Stunning visuals for branding, marketing, and social media",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Video Production",
      description: "Professional video content for ads, social media, and more",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Content Writing",
      description: "Engaging copy that resonates with your target audience",
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Social Media Management",
      description: "Complete social media strategy and content creation",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "SEO Optimization",
      description: "Content optimized for search engines to drive traffic",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Content Strategy",
      description: "Comprehensive planning for your content marketing needs",
    },
  ];

  const processSteps: ProcessStep[] = [
    { title: "Strategy & Planning", description: "We analyze your goals and create a detailed content strategy" },
    { title: "Content Creation", description: "Our team produces high-quality content tailored to your needs" },
    { title: "Review & Revisions", description: "We refine the content based on your feedback" },
    { title: "Optimization", description: "Content is optimized for platforms and search engines" },
    { title: "Publication", description: "We publish and distribute content across channels" },
    { title: "Analysis & Reporting", description: "We measure performance and provide detailed insights" },
  ];

  const portfolioItems: Record<"graphic" | "video" | "writing", PortfolioItem[]> = {
    graphic: [
      {
        id: 1,
        title: "Brand Identity Design",
        description: "Complete branding package for a tech startup",
        image: "/images/br.png",
        features: ["Logo Design", "Brand Guidelines", "Marketing Materials"],
      },
      {
        id: 2,
        title: "Social Media Graphics",
        description: "Engaging visuals for social media campaigns",
        image: "/images/ContentCreation.jpg",
        features: ["Instagram Posts", "Story Graphics", "Facebook Ads"],
      },
    ],
    video: [
      {
        id: 1,
        title: "Product Launch Video",
        description: "Promotional video for a new product release",
        image: "/images/pr.jpg",
        features: ["Script Writing", "Professional Shooting", "Editing"],
      },
    ],
    writing: [
      {
        id: 1,
        title: "Blog Content Series",
        description: "SEO-optimized articles for industry blog",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
        features: ["Research", "SEO Optimization", "Engaging Writing"],
      },
    ],
  };

  const filteredProjects: PortfolioItem[] = portfolioItems[activeTab];

  const openLightbox = (project: PortfolioItem, index: number) => {
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 md:py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold mb-6">
              Content <span className="text-purple-400">Creation</span> Services
            </h1>
            <p className="text-xl mb-8 opacity-90">
              We create compelling, engaging content across all platforms that tells your brand&apos;s story and connects
              with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-500/30">
              <Image
                src="/images/ContentCreation.jpg"
                alt="Content Creation"
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
          <div className="bg-gray-700/50 p-6 rounded-2xl">
            <Award className="mx-auto h-10 w-10 text-purple-400 mb-2" />
            <div className="text-3xl font-bold text-purple-400">200+</div>
            <p>Projects Completed</p>
          </div>
          <div className="bg-gray-700/50 p-6 rounded-2xl">
            <Users className="mx-auto h-10 w-10 text-purple-400 mb-2" />
            <div className="text-3xl font-bold text-purple-400">75+</div>
            <p>Happy Clients</p>
          </div>
          <div className="bg-gray-700/50 p-6 rounded-2xl">
            <Clock className="mx-auto h-10 w-10 text-purple-400 mb-2" />
            <div className="text-3xl font-bold text-purple-400">95%</div>
            <p>On-Time Delivery</p>
          </div>
          <div className="bg-gray-700/50 p-6 rounded-2xl">
            <CheckCircle className="mx-auto h-10 w-10 text-purple-400 mb-2" />
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Content Creation Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            We create compelling content tailored to your specific business needs, delivering exceptional engagement and
            measurable results.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition"
              >
                <div className="text-purple-500 mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Our Content Creation Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
                <div className="bg-purple-600 w-10 h-10 flex items-center justify-center rounded-full mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12">
            Explore our diverse range of successfully delivered content across different formats.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {["graphic", "video", "writing"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "graphic" | "video" | "writing")}
                className={`px-6 py-2 rounded-lg ${
                  activeTab === tab ? "bg-purple-600 text-white" : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {tab === "graphic" ? "Graphic Design" : tab === "video" ? "Video Production" : "Content Writing"}
              </button>
            ))}
          </div>

          {/* Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <div
                key={p.id}
                className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:scale-105 transition cursor-pointer"
                onClick={() => openLightbox(p, i)}
              >
                <Image src={p.image} alt={p.title} width={500} height={300} className="object-cover w-full h-56" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                  <p className="text-gray-400 mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map((f: string, i: number) => (
                      <span key={i} className="bg-purple-900/30 text-purple-400 text-xs px-2 py-1 rounded">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4">
          <button onClick={closeLightbox} className="absolute top-6 right-6 text-white">
            <X size={28} />
          </button>
          <button onClick={() => navigateLightbox("prev")} className="absolute left-6 text-white">
            <ChevronLeft size={28} />
          </button>
          <button onClick={() => navigateLightbox("next")} className="absolute right-6 text-white">
            <ChevronRightIcon size={28} />
          </button>
          <div className="max-w-4xl w-full flex flex-col items-center">
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="object-contain max-h-[80vh]"
            />
            <p className="mt-4 text-gray-300">{selectedImage.title}</p>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-900 to-blue-900 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Content?</h2>
        <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
          Let&apos;s discuss your content needs and create a strategy that drives engagement and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
        </div>
      </section>
    </div>
  );
}
