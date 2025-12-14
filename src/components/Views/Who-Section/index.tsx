import { projectImages } from "@/components/Assets";
import WhoSectionBoxes from "@/components/Sub-Components/WhoSectionBoxes";
import Image from "next/image";
import React from "react";

const WhoSection = () => {
  return (
    <section id="about" className="mainBgColor py-[3rem] pb-0 sm:py-[5rem]">
      <div className="wrapper flex justify-start lg:justify-center gap-8">
        <div className="max-w-fit z-10 relative">
          <div className="max-w-full pt-10 sm:pt-10 sm:pl-10 space-y-2">
            <Image
              src={projectImages.PseudoElement}
              alt="a"
              className="max-w-[60px] sm:max-w-[80px] object-cover"
            />
            <h3 className="font-bold font-mono sm:text-4xl text-2xl tracking-wider">
              {"We're Awards Winning Modern Business Solutions Agency"}
            </h3>
            <p className="max-w-full sm:max-w-sm opacity-20 sm:text-md sm:text-justify">
              Discover innovation with our award-winning IT agency. We redefine
              modern business solutions.
            </p>
          </div>

          <div className="inline lg:hidden">
          <Image
            src={projectImages.WhoSectionMain}
            alt="Who Section Main Image"
            className="max-w-[16rem] sm:max-w-[24rem] py-6 sm:py-16 object-cover mx-auto"
          />
        </div>

          <div className="flex items-center max-w-lg flex-wrap gap-2 my-8">
          <WhoSectionBoxes text="Tech Solutions" />
          <WhoSectionBoxes text="IT Consulting" />
          <WhoSectionBoxes text="Web Solutions" />
          <WhoSectionBoxes text="Business Growth" />
          <WhoSectionBoxes text="Product Design" />

          </div>
          <h1 className="textStroke font-serif sm:text-[8.5rem] text-[4rem] ">WHO</h1>
        </div>
        <div className="hidden lg:inline">
          <Image
            src={projectImages.WhoSectionMain}
            alt="Who Section Main Image"
            className="max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
