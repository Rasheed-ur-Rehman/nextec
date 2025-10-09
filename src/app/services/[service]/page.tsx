type ServicePageProps = {
  params: {
    service: string;
  };
};

const services = [
  { name: "Digital Marketing", slug: "digital-marketing" },
  { name: "Website Development", slug: "website-development" },
  { name: "Graphic Design", slug: "graphic-design" },
  { name: "Content Creation", slug: "content-creation" },
  { name: "Social Media Management", slug: "social-media-management" },
  { name: "SEO", slug: "seo" },
  { name: "Virtual Assistant", slug: "virtual-assistant" },
  { name: "Language Translation", slug: "language-translation" },
  { name: "Video Production", slug: "video-production" },
  { name: "Market Research", slug: "market-research" },
  { name: "App Development", slug: "app-development" },
  { name: "Copy Writing", slug: "copywriting" },
];

// ✅ tell Next.js which params to pre-render
export function generateStaticParams() {
  return services.map((s) => ({
    service: s.slug,
  }));
}

// ✅ typed params
export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.service);

  if (!service) {
    return <h1>Service Not Found</h1>;
  }

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-semibold mb-6">{service.name}</h1>
      <p>Details about {service.name} will go here.</p>
    </main>
  );
}
