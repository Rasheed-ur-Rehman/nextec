import { projectImages } from "@/components/Assets";
import ContactForm from "@/components/Sub-Components/ContactForm";
import Image from "next/image";
import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mainBgColor sm:pt-[5rem] sm:py-[5rem] py-[3rem] sm:min-h-[100vh] "
    >
      <div className="wrapper flex justify-start lg:justify-center items-center lg:gap-8">
        <div className="hidden lg:inline ">
          <Image
            src={projectImages.ContactSectionMain}
            alt="Section-2 Hero Image"
            className="max-w-sm object-cover"
          />
        </div>
        <div className="relative z-10 max-w-full md:max-w-fit">
          <div className="pt-8 sm:pt-10 sm:pl-10 sm:space-y-2 space-y-5">
            <Image
              src={projectImages.PseudoElement}
              alt="a"
              className="max-w-[60px] sm:max-w-[80px] object-cover"
            />
            <h3 className="font-bold font-mono sm:text-4xl text-2xl tracking-wider leading-none">
              Ready To Work Together? <br />
              Message Us!
            </h3>
          </div>
          <div className="pt-6 sm:pl-12 max-w-sm ">
            <ContactForm placeholder="Message" />
          </div>
          <h1 className="textStroke font-serif sm:text-[7rem] text-[3.5rem]">
            CONTACT
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
