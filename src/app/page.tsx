import Header from "@/components/Layout/Header";
import BackGroundPattern from "@/components/Sub-Components/BackGroundPattern";
import ContactSection from "@/components/Views/Contact-Section";
import FeatureSection from "@/components/Views/Feature-Section";
import HeroSection from "@/components/Views/Hero-Section";
import PortfolioSection from "@/components/Views/Portfolio-Section";
import SeoSection from "@/components/Views/SEO-Section";
import ServicesSection from "@/components/Views/Services-Section";
import TestimonialSection from "@/components/Views/Testimonial-Section";
import WhoSection from "@/components/Views/Who-Section";
import VideoTestimonialSection from "@/components/Views/VideoTestimonialSection"; // ✅ add this

export default function Home() {
  return (
    <main>
      {/* BACKGROUND SVG IMAGE */}
      <BackGroundPattern />

      {/* FIRST SECTION || HERO SECTION */}
      <HeroSection />

      {/* SECOND SECTION || FEATURED SECTION */}
      <FeatureSection />

      {/* THIRD SECTION || SERVICES SECTION */}
      <ServicesSection />

      {/* FOURTH SECTION || WHO SECTION */}
      <WhoSection />

      {/* FIFTH SECTION || PORTFOLIO SECTION */}
      <PortfolioSection />

      {/* SIXTH SECTION || SEO SECTION */}
      <SeoSection />

      {/* SEVENTH SECTION || TESTIMONIALS */}
      <TestimonialSection />

      {/* EIGHTH SECTION || VIDEO TESTIMONIALS */}
      <VideoTestimonialSection />

      {/* NINTH SECTION || CONTACT SECTION */}
      <ContactSection />
    </main>
  );
}
