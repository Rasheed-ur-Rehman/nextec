// src/components/Utils/NavigationDataAndTypes.ts

export interface SubMenuItem {
  label: string;
  url: string;
}

export interface NavigationDataType {
  label: string;
  url: string;
  subMenu?: SubMenuItem[]; // optional dropdown items
}

export const NavigationData: Array<NavigationDataType> = [
  { label: "Home", url: "/" },
  {
    label: "Services",
    url: "/services",
    subMenu: [
      { label: "Digital Marketing", url: "/services/digital-marketing" },
      { label: "Website Development", url: "/services/website-development" },
      { label: "Graphic Design", url: "/services/graphic-design" },
      { label: "Content Creation", url: "/services/content-creation" },
      { label: "Social Media Management", url: "/services/social-media-management" },
      { label: "SEO", url: "/services/seo" },
      { label: "Virtual Assistant", url: "/services/virtual-assistant" },
      { label: "Language Translation", url: "/services/language-translation" },
      { label: "Video Production", url: "/services/video-production" },
      { label: "Market Research", url: "/services/market-research" },
      { label: "App Development", url: "/services/app-development" },
      { label: "Copy Writing", url: "/services/copy-writing" },
    ],
  },
  { label: "Portfolio", url: "/portfolio" },
  { label: "About", url: "/about" },
  { label: "Contact", url: "/contact" },
];
