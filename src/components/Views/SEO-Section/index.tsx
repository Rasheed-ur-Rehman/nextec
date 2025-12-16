'use client';

import { projectImages } from "@/components/Assets";
import Image from "next/image";
import { useState } from 'react';

const SeoSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqData = [
    {
      question: "What is SEO?",
      answer: "SEO, or Search Engine Optimization, is the process of improving your website's visibility in search engine results.",
    },
    {
      question: "Why SEO is important for your business?",
      answer: "SEO is essential for businesses because it helps increase organic (non-paid) traffic to your site, boost online visibility, and ultimately drive more potential customers to your business.",
    },
    {
      question: "What role do keywords play in SEO?",
      answer: "Keywords are words or phrases that users enter into search engines. Proper keyword research and usage are crucial for SEO. They help search engines understand your content and match it with user queries.",
    },
    {
      question: "What are the key elements of on-page SEO?",
      answer: "On-page SEO involves optimizing individual web pages to rank higher in search results. Key elements include optimizing titles, meta descriptions, headings, content quality, keyword usage, and image optimization.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mainBgColor py-[3rem] sm:py-[5rem] sm:min-h-[100vh]">
      <div className="wrapper flex justify-start lg:justify-center gap-8">
        <div className="max-w-fit relative z-10">
          <div className="pt-10 sm:pt-10 sm:pl-10 space-y-2 ">
            <Image
              src={projectImages.PseudoElement}
              alt="a"
              className="max-w-[60px] sm:max-w-[80px] object-cover"
              width={80}
              height={80}
            />
            <h3 className="font-bold font-mono max-w-md text-2xl sm:text-4xl tracking-wider leading-none">
              Manage Business SEO Optimization Easily
            </h3>
            <p className="max-w-sm text-stone-300 opacity-70 text-md text-justify">
              Seamlessly Manage Business SEO Optimization for Enhanced
              Visibility and Success.
            </p>
          </div>
          
          {/* Custom Accordion */}
          <div className="pt-10 sm:pl-10 space-y-3 max-w-sm">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  className="flex w-full items-center justify-between py-4 text-left font-medium hover:underline bg-[#292738] px-3 rounded-sm"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="tracking-wider text-sm">{item.question}</span>
                  <span className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openIndex === index && (
                  <div className="py-3 px-2 bg-[#232331] text-sm text-[#d6d3d1] opacity-70">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <h1 className="textStroke font-serif sm:text-[7rem] text-[4rem]">SEO</h1>
        </div>
        <div className="hidden lg:inline">
          <Image
            src={projectImages.SeoSectionMain}
            alt="SEO Section Main Image"
            className="max-w-md object-cover"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default SeoSection;