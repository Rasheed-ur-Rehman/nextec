import { StaticImageData } from "next/image";

export interface AllServicesTypes {
  image: string; // ✅ changed from StaticImageData to string
  name: string;
  slug: string;
  description: string;
}

export const AllServicesData: Array<AllServicesTypes> = [
  {
    image: "/images/digitalmarketing.jpg",
    name: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Digital Marketing is a dynamic strategy leveraging online channels to promote products or services. It encompasses a spectrum of tools such as social media, search engines, email campaigns, and content marketing...",
  },
  {
    image: "/images/webdevelopment.jpg",
    name: "Website Development",
    slug: "website-development",
    description:
      "Website development is the process of creating and maintaining websites. It involves various tasks, including web design, content creation, coding, and programming...",
  },
  {
    image: "/images/graphicdesign.jpg",
    name: "Graphic Design",
    slug: "graphic-design",
    description:
      "Graphic designing is a creative discipline that involves the visual communication and presentation of ideas...",
  },
  {
    image: "/images/ContentCreation.jpg",
    name: "Content Creation",
    slug: "content-creation",
    description:
      "Content creation is the process of developing and producing digital or multimedia material for various platforms...",
  },
  {
    image: "/images/socialmedia.jpg",
    name: "Social Media Management",
    slug: "social-media-management",
    description:
      "Social Media Management involves the strategic administration of an individual or organization's online presence...",
  },
  {
    image: "/images/SEO.jpg",
    name: "SEO",
    slug: "seo",
    description:
      "SEO, or Search Engine Optimization, is a strategic practice aimed at enhancing a website's visibility on search engines...",
  },
  {
    image: "/images/visualassistant.jpg",
    name: "Virtual Assistant",
    slug: "virtual-assistant",
    description:
      "A Virtual Assistant (VA) is a software program or application designed to provide support and perform tasks for users...",
  },
  {
    image: "/images/langaugetranslaution.jpg",
    name: "Language Translation",
    slug: "language-translation",
    description:
      "Language translation is the process of converting text or spoken words from one language into another...",
  },
  {
    image: "/images/videoproduction.jpg",
    name: "Video Production",
    slug: "video-production",
    description:
      "Video production is the creative process of conceptualizing, planning, shooting, and editing visual content...",
  },
  {
    image: "/images/marketresearch.jpg",
    name: "Market Research",
    slug: "market-research",
    description:
      "Market research is a strategic business practice aimed at gathering and analyzing information about target markets...",
  },
  {
    image: "/images/appdevelopment.jpg",
    name: "App Development",
    slug: "app-development",
    description:
      "App development is the process of creating software applications for mobile devices or computers...",
  },
  {
    image: "/images/copywriting.jpg",
    name: "Copy Writing",
    slug: "copy-writing",
    description:
      "Copywriting is the art and science of crafting persuasive and compelling written content to promote a product...",
  },
];
