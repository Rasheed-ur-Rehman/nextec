import Image from "next/image";
import React from "react";
import { projectImages } from "../Assets";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const icons = [
    {
      name: "facebook",
      icon: FaFacebookF,
      link: "https://www.facebook.com/share/178FVPX28s/",
    },
    {
      name: "linkedIn",
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/company/nextecservices/",
    },
    {
      name: "instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/nextec.services/",
    },
  ];

  const Services = [
    { name: "Digital Marketing", link: "digital-marketing" },
    { name: "Website Development", link: "website-development" },
    { name: "Graphic Design", link: "graphic-design" },
    { name: "Content Creation", link: "content-creation" },
    { name: "Social Media Management", link: "social-media-management" },
    { name: "SEO", link: "seo" },
    { name: "Virtual Assistant", link: "virtual-assistant" },
    { name: "Language Translation", link: "language-translation" },
    { name: "Video Production", link: "video-production" },
    { name: "Market Research", link: "market-research" },
    { name: "App Development", link: "app-development" },
    { name: "Copy Writing", link: "copy-writing" },
  ];

  return (
    <section className="mainBgColor py-[3rem] sm:pt-[6rem] sm:pb-[1rem]">
      <div className="wrapper flex lg:justify-around gap-16 flex-wrap">
        {/* Logo + Social Icons */}
        <div className="space-y-6">
          <Image src={projectImages.Logo3} alt="Logo" className="w-[150px]" />
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex gap-3 items-center">
              {icons.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="hover:opacity-50 border border-white p-3 text-lg rounded-full transition"
                >
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-wider">Services:</h3>
          <ul className="columns-1 sm:columns-2 gap-20">
            {Services.map((item, index) => (
              <Link key={index} href={`/services/${item.link}`}>
                <li className="my-2 text-stone-300 hover:opacity-50 duration-300">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-5 max-w-[350px]">
          <h3 className="text-xl font-semibold tracking-wider">Contact:</h3>

          <div className="space-y-3 text-stone-300">
            <p className="text-base font-medium">🌍 Global Presence</p>

            <div className="space-y-2">
              <p>🇺🇸 <strong>USA (Head Office)</strong></p>
              <p className="text-sm">Kearny, NJ, USA</p>
              <Link
                href="tel:+15514074732"
                className="block text-sm text-blue-400 hover:underline"
              >
                📞 +1 551 407 4732
              </Link>
            </div>

            <div className="space-y-2 mt-3">
              <p>🇬🇧 <strong>United Kingdom (Branch)</strong></p>
              <p className="text-sm">
                Flat 4 Edinburgh Court, Edinburgh Road, London, England E13 0BH
              </p>
              <Link
                href="tel:+447488930858"
                className="block text-sm text-blue-400 hover:underline"
              >
                📞 +44 7488 930858
              </Link>
            </div>

            <div className="mt-3">
              <Link
                href="mailto:sales@nextec.live"
                className="block text-sm text-blue-400 hover:underline"
              >
                📧 sales@nextec.live
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Bottom Line */}
      <div className="text-center mt-10 text-sm text-stone-400 border-t border-stone-700 pt-4">
        © {new Date().getFullYear()} Nextec. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
