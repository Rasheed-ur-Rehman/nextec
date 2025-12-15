import { projectImages } from "@/components/Assets";
import SeoAccordion from "@/components/Sub-Components/SeoAccordion";
import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import React from "react";

const SeoSection = () => {
  return (
    <section className="mainBgColor py-[3rem] sm:py-[5rem] sm:min-h-[100vh]">
      <div className="wrapper flex justify-start lg:justify-center gap-8">
        <div className="max-w-fit relative z-10">
          <div className="pt-10 sm:pt-10 sm:pl-10 space-y-2 ">
            <Image
              src={projectImages.PseudoElement}
              alt="a"
              className="max-w-[60px] sm:max-w-[80px] object-cover "
            />
            <h3 className="font-bold font-mono max-w-md text-2xl sm:text-4xl tracking-wider leading-none">
              {"Manage Business SEO Optimization Easily"}
            </h3>
            <p className="max-w-sm text-stone-300 opacity-70 text-md text-justify">
              Seamlessly Manage Business SEO Optimization for Enhanced
              Visibility and Success.
            </p>
          </div>
          <SeoAccordion />
          <h1 className="textStroke font-serif sm:text-[7rem] text-[4rem]">SEO</h1>
        </div>
        <div className="hidden lg:inline">
          <Image
            src={projectImages.SeoSectionMain}
            alt="SEO Section Main Image"
            className="max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SeoSection;
