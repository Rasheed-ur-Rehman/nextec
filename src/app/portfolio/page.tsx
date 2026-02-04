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

const normalizeUrl = (url: string) => {
  if (!url) return url;
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

// ✅ Auto-numbered image helpers (rename your images accordingly)
const webImg = (n: number) => `/images/wedevelopment/${n}.png`;
const ecomImg = (n: number) => `/images/ecommerce/${n}.png`;

const projects = [
  // =========================
  // LOGO (UPDATED TITLES MATCHED WITH 13.webp → 30.webp)
  // =========================
  {
    id: 1,
    title: "YUBSANTIS LIGHTS",
    service: "logo",
    image: "/images/logo/13.webp",
  },
  {
    id: 2,
    title: "1SCOOTER",
    service: "logo",
    image: "/images/logo/14.webp",
  },
  {
    id: 3,
    title: "ASTUTE HEALTH & WELLNESS",
    service: "logo",
    image: "/images/logo/15.webp",
  },
  {
    id: 4,
    title: "ASTUTE PHARMA LABS",
    service: "logo",
    image: "/images/logo/16.webp",
  },
  {
    id: 5,
    title: "DR-MARINO AESTHETIC",
    service: "logo",
    image: "/images/logo/17.webp",
  },
  {
    id: 6,
    title: "EMBELTON PHARMA SERVICES",
    service: "logo",
    image: "/images/logo/18.webp",
  },
  {
    id: 7,
    title: "HILLS & HER",
    service: "logo",
    image: "/images/logo/19.webp",
  },
  {
    id: 8,
    title: "IAPPROVE",
    service: "logo",
    image: "/images/logo/20.webp",
  },
  {
    id: 9,
    title: "ROSFM",
    service: "logo",
    image: "/images/logo/21.webp",
  },
  {
    id: 10,
    title: "SSGC",
    service: "logo",
    image: "/images/logo/22.webp",
  },
  {
    id: 11,
    title: "NORTHFIELD PROSPECTS",
    service: "logo",
    image: "/images/logo/23.webp",
  },
  {
    id: 12,
    title: "SOLVX SOLUTIONS",
    service: "logo",
    image: "/images/logo/24.webp",
  },
  {
    id: 13,
    title: "ROM828 STUDIOS",
    service: "logo",
    image: "/images/logo/25.webp",
  },
  {
    id: 14,
    title: "RUSTIC ROOTS",
    service: "logo",
    image: "/images/logo/26.webp",
  },
  {
    id: 15,
    title: "TZEDA",
    service: "logo",
    image: "/images/logo/27.webp",
  },
  {
    id: 16,
    title: "STARK",
    service: "logo",
    image: "/images/logo/28.webp",
  },
  {
    id: 17,
    title: "MR. DEEP CLEAN",
    service: "logo",
    image: "/images/logo/29.webp",
  },
  {
    id: 18,
    title: "BYMYSELF ENTERTAINMENT",
    service: "logo",
    image: "/images/logo/30.webp",
  },

  // =========================
  // WEB DEVELOPMENT (ALL LINKS + NUMBERED IMAGES)
  // Rename: /public/images/wedevelopment/1.png ... 23.png
  // =========================
  {
    id: 101,
    title: "Agape Cleaning Services",
    service: "web",
    image: webImg(1),
    liveUrl: normalizeUrl("https://www.agapecleaningservices.us/"),
  },
  {
    id: 102,
    title: "Eras Fashion",
    service: "web",
    image: webImg(2),
    liveUrl: normalizeUrl("https://erasfashion.com/"),
  },
  {
    id: 103,
    title: "Cushman & Wakefield",
    service: "web",
    image: webImg(3),
    liveUrl: normalizeUrl("https://www.cushmanwakefield.com/"),
  },
  {
    id: 104,
    title: "Sold by Noon & Nielsen",
    service: "web",
    image: webImg(4),
    liveUrl: normalizeUrl("https://www.soldbynoonandnielsen.com/"),
  },
  {
    id: 105,
    title: "Heron Code",
    service: "web",
    image: webImg(5),
    liveUrl: normalizeUrl("https://heroncode.com/"),
  },
  {
    id: 106,
    title: "Le Mugs",
    service: "web",
    image: webImg(6),
    liveUrl: normalizeUrl("https://le-mugs.com/"),
  },
  {
    id: 107,
    title: "JDI Capital Partners",
    service: "web",
    image: webImg(7),
    liveUrl: normalizeUrl("https://jdicapitalpartners.com/"),
  },
  {
    id: 108,
    title: "Motor Carrier HQ",
    service: "web",
    image: webImg(8),
    liveUrl: normalizeUrl("https://www.motorcarrierhq.com/"),
  },
  {
    id: 109,
    title: "Easy Formers",
    service: "web",
    image: webImg(9),
    liveUrl: normalizeUrl("https://www.easyformers.fr/"),
  },
  {
    id: 110,
    title: "Rubio Consulting",
    service: "web",
    image: webImg(10),
    liveUrl: normalizeUrl("https://www.rubioconsulting.ch/"),
  },
  {
    id: 111,
    title: "Blackstone",
    service: "web",
    image: webImg(11),
    liveUrl: normalizeUrl("https://www.blackstone.com/"),
  },
  {
    id: 112,
    title: "Kearny Life",
    service: "web",
    image: webImg(12),
    liveUrl: normalizeUrl("https://kearnylife.com/"),
  },
  {
    id: 113,
    title: "Rising Stars Academy NJ",
    service: "web",
    image: webImg(13),
    liveUrl: normalizeUrl("https://risingstarsacademynj.com/"),
  },
  {
    id: 114,
    title: "Hilal Abaya",
    service: "web",
    image: webImg(14),
    liveUrl: normalizeUrl("https://hilalabaya.com"),
  },
  {
    id: 115,
    title: "Astute Pharma Labs",
    service: "web",
    image: webImg(15),
    liveUrl: normalizeUrl("https://astutepharmalabs.com"),
  },
  {
    id: 116,
    title: "Triple A Academy",
    service: "web",
    image: webImg(16),
    liveUrl: normalizeUrl("https://tripleaacademy.ca"),
  },
  {
    id: 117,
    title: "Vaizen AI",
    service: "web",
    image: webImg(17),
    liveUrl: normalizeUrl("https://vaizenai.com/"),
  },
  {
    id: 118,
    title: "Tzedarenos",
    service: "web",
    image: webImg(18),
    liveUrl: normalizeUrl("https://tzedarenos.com"),
  },
  {
    id: 119,
    title: "Embelton Pharma Service",
    service: "web",
    image: webImg(19),
    liveUrl: normalizeUrl("https://embeltonpharmaservice.com/"),
  },
  // { id: 120, title: "ROM828 Studios", service: "web", image: webImg(20), liveUrl: normalizeUrl("https://www.rom828studios.com/") },
  {
    id: 121,
    title: "Koulture Kingz Luxury",
    service: "web",
    image: webImg(21),
    liveUrl: normalizeUrl("https://koulturekingzluxury.com/"),
  },
  {
    id: 122,
    title: "iApprove",
    service: "web",
    image: webImg(22),
    liveUrl: normalizeUrl("https://iapprove.ca"),
  },
  {
    id: 123,
    title: "SSGC LLC",
    service: "web",
    image: webImg(23),
    liveUrl: normalizeUrl("https://ssgcllc.com"),
  },

  // =========================
  // E-COMMERCE (CONTINUED NUMBERING)
  // Starts from webImg(24)
  // =========================

  {
    id: 201,
    title: "Birmingham Jewelry",
    service: "ecommerce",
    image: webImg(24),
    liveUrl: normalizeUrl("https://birminghamjewelry.com"),
  },
  {
    id: 202,
    title: "Pipette Baby",
    service: "ecommerce",
    image: webImg(25),
    liveUrl: normalizeUrl("https://www.pipettebaby.com"),
  },
  // {
  //   id: 203,
  //   title: "LabelK",
  //   service: "ecommerce",
  //   image: webImg(26),
  //   liveUrl: normalizeUrl("https://www.labelk.com"),
  // },
  {
    id: 204,
    title: "Nicobar",
    service: "ecommerce",
    image: webImg(27),
    liveUrl: normalizeUrl("https://www.nicobar.com"),
  },
  {
    id: 205,
    title: "Hello Noemie",
    service: "ecommerce",
    image: webImg(28),
    liveUrl: normalizeUrl("https://www.hellonoemie.com"),
  },
  {
    id: 206,
    title: "Fit Tea",
    service: "ecommerce",
    image: webImg(29),
    liveUrl: normalizeUrl("https://www.fittea.com"),
  },
  {
    id: 207,
    title: "SuckerPunch Gourmet",
    service: "ecommerce",
    image: webImg(30),
    liveUrl: normalizeUrl("https://suckerpunchgourmet.com"),
  },
  {
    id: 208,
    title: "Cheesies UK",
    service: "ecommerce",
    image: webImg(31),
    liveUrl: normalizeUrl("https://www.cheesies.co.uk"),
  },
  {
    id: 209,
    title: "My Grub Club",
    service: "ecommerce",
    image: webImg(32),
    liveUrl: normalizeUrl("https://mygrubclub.com"),
  },
  {
    id: 210,
    title: "Keen Home",
    service: "ecommerce",
    image: webImg(33),
    liveUrl: normalizeUrl("https://keenhome.io"),
  },
  {
    id: 211,
    title: "Blue Star Coffee Roasters",
    service: "ecommerce",
    image: webImg(34),
    liveUrl: normalizeUrl("https://bluestarcoffeeroasters.com/"),
  },
  {
    id: 212,
    title: "Dineamic",
    service: "ecommerce",
    image: webImg(35),
    liveUrl: normalizeUrl("https://www.dineamic.com.au"),
  },
  {
    id: 213,
    title: "Picky Bars",
    service: "ecommerce",
    image: webImg(36),
    liveUrl: normalizeUrl("https://pickybars.com"),
  },
  {
    id: 214,
    title: "Bayt Made",
    service: "ecommerce",
    image: webImg(37),
    liveUrl: normalizeUrl("https://baytmade.com/"),
  },
  {
    id: 215,
    title: "Ress & Co",
    service: "ecommerce",
    image: webImg(38),
    liveUrl: normalizeUrl("https://www.ressandco.com/"),
  },
  {
    id: 216,
    title: "Elecbrakes",
    service: "ecommerce",
    image: webImg(39),
    liveUrl: normalizeUrl("https://www.elecbrakes.com"),
  },
  {
    id: 217,
    title: "The Good Batch",
    service: "ecommerce",
    image: webImg(40),
    liveUrl: normalizeUrl("https://thegoodbatch.com"),
  },
  {
    id: 218,
    title: "Offerman Woodshop",
    service: "ecommerce",
    image: webImg(41),
    liveUrl: normalizeUrl("https://offermanwoodshop.com"),
  },
  {
    id: 219,
    title: "Nalgene",
    service: "ecommerce",
    image: webImg(42),
    liveUrl: normalizeUrl("https://nalgene.com"),
  },
  {
    id: 220,
    title: "Roberto Coin",
    service: "ecommerce",
    image: webImg(43),
    liveUrl: normalizeUrl("https://robertocoin.com"),
  },
  {
    id: 221,
    title: "Modern Huntsman",
    service: "ecommerce",
    image: webImg(44),
    liveUrl: normalizeUrl("https://modernhuntsman.com"),
  },
  {
    id: 222,
    title: "Meracinque",
    service: "ecommerce",
    image: webImg(45),
    liveUrl: normalizeUrl("https://www.meracinque.com"),
  },
  {
    id: 223,
    title: "Ethical Life World",
    service: "ecommerce",
    image: webImg(46),
    liveUrl: normalizeUrl("https://ethicallifeworld.com"),
  },
  {
    id: 224,
    title: "Mirf Under Merch",
    service: "ecommerce",
    image: webImg(47),
    liveUrl: normalizeUrl("https://www.mirfundmerch.com"),
  },

  // =========================
  // MOBILE (UNCHANGED)
  // =========================
  {
    id: 301,
    title: "Fitness Tracking App",
    service: "mobile",
    image: "/images/mobileapp/1.webp",
  },
  {
    id: 302,
    title: "Food Delivery App",
    service: "mobile",
    image: "/images/mobileapp/2.webp",
  },
];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.service === activeTab);

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
      if (direction === "next")
        newIndex = (lightboxIndex + 1) % filteredProjects.length;
      else
        newIndex =
          (lightboxIndex - 1 + filteredProjects.length) %
          filteredProjects.length;

      setLightboxIndex(newIndex);
      setSelectedImage(filteredProjects[newIndex]);
    },
    [filteredProjects, lightboxIndex],
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
            {filteredProjects.map((project, index) => {
              const isLiveCategory =
                project.service === "web" || project.service === "ecommerce";

              return (
                <div
                  key={`${project.service}-${project.title}-${project.id}`}
                  className="group relative rounded-2xl overflow-hidden bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox(project, index)}
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-3 bg-black/20 transition-transform duration-700 group-hover:scale-[1.02]"
                    />

                    {/* Premium overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gray-900/85 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                        {project.service.toUpperCase()}
                      </span>
                    </div>

                    {/* Web/Ecom: View Live button on hover */}
                    {isLiveCategory && project.liveUrl ? (
                      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                        <div className="flex items-end justify-between gap-3">
                          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            <p className="text-white font-semibold text-sm">
                              {project.title}
                            </p>
                            <p className="text-white/70 text-xs mt-1">
                              Click to preview • View live in new tab
                            </p>
                          </div>

                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500
                                       inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                                       bg-white/10 border border-white/25 text-white backdrop-blur-md
                                       hover:bg-white/15 hover:border-white/40 hover:scale-[1.02]"
                          >
                            View Live <span className="text-white/80">↗</span>
                          </a>
                        </div>
                      </div>
                    ) : project.service === "logo" ? (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/60">
                        <div className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md">
                          <p className="text-white font-semibold text-sm text-center">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-black/50">
                        <Plus size={48} className="text-white opacity-80" />
                      </div>
                    )}
                  </div>

                  {/* Title BELOW (Web + Ecommerce only) */}
                  {isLiveCategory && (
                    <div className="px-5 py-4 bg-gray-900/25 border-t border-white/5">
                      <h3 className="text-white font-semibold text-base truncate">
                        {project.title}
                      </h3>
                      <p className="text-white/60 text-xs mt-1 truncate">
                        {project.liveUrl
                          ?.replace("https://", "")
                          .replace("http://", "")}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
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
                width={900}
                height={650}
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
