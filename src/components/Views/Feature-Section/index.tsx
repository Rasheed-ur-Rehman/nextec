import { projectImages } from "@/components/Assets";
import Features from "@/components/Sub-Components/Features";
import Image from "next/image";

const FeatureSection = () => {
  return (
    <section className="mainBgColor  py-[2rem] sm:py-[5rem] lg:py-[5rem]">
      <div className="wrapper flex justify-center gap-8">
        <div className=" hidden lg:inline">
          <Image
            src={projectImages.Section2Hero}
            alt="Section-2 Hero Image"
            className="max-w-xs object-cover"
          />
        </div>
        <div className="z-10 relative">
          <div className="pl-0 pt-8 sm:pt-10 sm:pl-10 sm:space-y-2 space-y-5">
            <Image
              src={projectImages.PseudoElement}
              alt="a"
              className="max-w-[50px] sm:max-w-[80px] object-cover"
            />
            <h3 className="font-bold font-mono max-w-xl text-2xl tracking-wider leading-none sm:text-4xl">
              Explore Our Professional Business Solutions
            </h3>
          </div>

          <div className="inline lg:hidden">
          <Image
            src={projectImages.Section2Hero}
            alt="Section-2 Hero Image"
            className="max-w-[15rem] sm:max-w-[18rem] py-8 sm:py-16 object-cover mx-auto"
          />
        </div>

          <div className=" sm:pt-10 sm:pl-10 max-w-3xl grid sm:grid-cols-2 grid-cols-1 gap-6">
            {/* FIRST FEATURE */}
            <Features
              ImageData={projectImages.FeatureImage1}
              Title="Business Growth"
              Description=" Empowering businesses through innovative IT solutions, one
                  byte at a time, as we surge ahead in our journey of
                  exponential growth."
            />

            {/* SECOND FEATURE */}
            <Features
              ImageData={projectImages.FeatureImage2}
              Title="User Research"
              Description="Unlocking insights, enhancing experiences – our IT agency thrives on user research excellence."
            />

            {/* THIRD FEATURE */}
            <Features
              ImageData={projectImages.FeatureImage3}
              Title="Big Data Solution"
              Description="Navigating the data deluge, we engineer intelligence for informed decisions."
            />

            {/* FOURTH FEATURE */}
            <Features
              ImageData={projectImages.FeatureImage4}
              Title="Product Design"
              Description="Designing tomorrow's solutions today, we redefine user-centric excellence."
            />
          </div>
          <h1 className="textStroke font-serif sm:text-[7rem] text-[3.5rem]">FEATURES</h1>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
