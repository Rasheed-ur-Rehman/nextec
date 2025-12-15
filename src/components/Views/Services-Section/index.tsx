'use client'; // ADD THIS LINE AT THE VERY TOP

import { projectImages } from "@/components/Assets";
import Slider from "@/components/Sub-Components/Slider";
import SwipeAnimation from "@/components/Sub-Components/SwipeAnimation";
import Image from "next/image";
import React from "react";

const ServicesSection = () => {
  return (
    <section className="mainBgColor px-5 py-[3rem] sm:py-[5rem]">
      <div className="wrapper z-10 relative flex justify-center gap-8">
        <div className="pt-14 sm:pt-10 sm:pl-10 space-y-5">
          <Image
            src={projectImages.PseudoElement}
            alt="a"
            className="max-w-[50px] mx-auto sm:max-w-[80px] object-cover"
            width={80} // Added missing width/height props
            height={80}
          />
          <h3 className="font-bold font-mono max-w-2xl sm:text-4xl text-center text-2xl tracking-wider leading-none">
            Great Features To Do Your Business Growth And Development
          </h3>
        </div>
        <h1 className="textStroke font-serif sm:text-[7rem] text-[4rem] absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          SERVICES
        </h1>
      </div>
      <div className="wrapper">
        <Slider />
      </div>
    </section>
  );
};

export default ServicesSection;