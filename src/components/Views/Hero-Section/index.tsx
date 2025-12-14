import Image from "next/image";
import React from "react";
import { projectImages } from "@/components/Assets";
import BottomWave from "@/components/Sub-Components/BottomWave";

const HeroSection = () => {
  return (
    <section className="  pb-[8rem] md:h-[90vh] pt-[3rem] relative ">
      <div className="absolute top-0  w-[100%] mx-auto flex justify-center overflow-hidden">
        <Image
          src={projectImages.Clouds}
          alt="Background Cloud Images"
          className="object-cover flex-shrink max-w-5xl"
        />
      </div>
      <div className=" wrapper flex justify-start lg:justify-evenly lg:px-[4rem] relative z-10">
        <div className=" text-stone-100 max-w-full sm:max-w-[80%] lg:max-w-lg mt-[1.8rem] ">
          <div className="flex items-center  ">
            <h3 className="text-[2.9rem]  sm:text-6xl md:text-7xl font-bold lg:font-medium lg:text-6xl tracking-[1px] leading-none">
              We Provide{" "}
            </h3>
            <Image
              src={projectImages.Bulb}
              alt="Bulb Image"
              className="object-cover w-[80px] hidden md:inline "
            />
          </div>
          <h3 className="text-[2.9rem] sm:text-6xl md:text-7xl font-bold lg:font-medium lg:text-6xl tracking-[1px] lg:leading-[4rem] leading-none">
            Smart Business Solutions
          </h3>
          <p className="text-lg tracking-wider mt-5 sm:max-w-[80%] max-w-[100%] text-stone-400 leading-tight">
            Grow your business with our best business solutions.
          </p>
        </div>
        <div className=" hidden lg:flex">
          <Image
            src={projectImages.Hero}
            alt="Hero Guy Image"
            width={450}
            height={450}
            className="object-cover   "
          />
          <div className=" hidden lg:flex items-center">
            <Image
              src={projectImages.PinkBall}
              alt="Prop Ball Image"
              width={70}
              height={70}
              className="object-cover "
            />
          </div>
        </div>
      </div>

      <BottomWave />
    </section>
  );
};

export default HeroSection;
