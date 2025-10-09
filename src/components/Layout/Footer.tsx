import Image from "next/image";
import React from "react";
import { projectImages } from "../Assets";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import { Button } from "../ui/button";
import FeedbackModal from "../Sub-Components/FeedbackModal";

const Footer = () => {
  const icons = [
    {
      name: "facebook",
      icon: FaFacebookF,
      link:"https://www.facebook.com/share/178FVPX28s/",
    },
   
    {
      name: "linkedIn",
      icon: FaLinkedinIn,
      link:"https://www.linkedin.com/company/nextecservices/",
    },
    {
      name: "instagram",
      icon: FaInstagram,
      link:"https://www.instagram.com/nextec.services/",
    },
  ];
  const Services = [
    {
      name: "Digital Marketing",
      link: "digital-marketing",
    },
    {
      name: "Website Development",
      link: "website-development",
    },
    {
      name: "Graphic Design",
      link: "graphic-design",
    },
    {
      name: "Content Creation",
      link: "content-creation",
    },
    {
      name: "Social Media Management",
      link: "social-media-management",
    },
    {
      name: "SEO",
      link: "seo",
    },
    {
      name: "Virtual Assistant",
      link: "virtual-assistant",
    },
    {
      name: "Language Translation",
      link: "language-translation",
    },
    {
      name: "Video Production",
      link: "video-production",
    },
    {
      name: "Market Research",
      link: "market-research",
    },
    {
      name: "App Development",
      link: "app-development",
    },
    {
      name: "Copy Writing",
      link: "copy-writing",
    },
  ];

  const ContactInfo = [
    `Kearny, NJ, USA`,
    "sales@nextec.live",
  ];

  return (
    <section className="mainBgColor py-[3rem] sm:pt-[6rem] sm:pb-[1rem]">
      <div className="wrapper flex lg:justify-around gap-16 flex-wrap ">
        <div className="space-y-6 ">
          <Image src={projectImages.Logo3} alt="Logo" className="w-[150px]" />
          <div className="space-y-4">
            <h3 className="text-xl">Follow</h3>
            <span className="flex gap-3 items-center">
              {icons.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="hover:opacity-50 border-2 border-white p-3 text-lg rounded-full"
                >
                  <item.icon />
                </Link>
              ))}
            </span>
          </div>
        </div>
        <div className=" space-y-3">
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
        <div className=" space-y-4">
          <h3 className="text-xl font-semibold tracking-wider">Contact:</h3>
          <div className="space-y-1 max-w-[300px]">
            {ContactInfo.map((item, index) => (
              <p key={index} className="text-base text-stone-300">
                {item}
              </p>
            ))}
          </div>
          <FeedbackModal />
        </div>
      </div>
    </section>
  );
};

export default Footer;
