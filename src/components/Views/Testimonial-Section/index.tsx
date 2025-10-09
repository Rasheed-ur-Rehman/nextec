"use client";
import { projectImages } from "@/components/Assets";
import TestimonialSlider from "@/components/Sub-Components/TestimonialSlider";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const TestimonialSection = () => {
  var settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  let clientTestimonial = [
    {
      client: "Sarah Johnson",
      feedback:
        " Our experience with Nextec for web development and graphic design has been outstanding. The team at Nextec demonstrated a keen understanding of our brand aesthetics and delivered visually stunning designs that resonate with our target audience. Their expertise in web development ensured a seamless user experience, and their attention to detail is truly commendable. We appreciate Nextec's dedication to excellence and their ability to bring our creative vision to life. They are our trusted partner for all design and web development needs.",
    },
    {
      client: "Mark Thompson",
      feedback:
        " Choosing Nextec for our software development and IT consulting needs has been a game-changer for our business. The Nextec team's technical proficiency and strategic insights have led to the successful implementation of innovative software solutions. Their commitment to delivering high-quality products and exceptional customer service sets them apart. Nextec's collaborative approach and responsiveness to our evolving requirements make them a reliable and valued partner. We highly recommend Nextec for anyone seeking top-notch software development services.",
    },
    {
      client: "Jessica Martinez",
      feedback:
        " We engaged Nextec for content writing and digital marketing services, and the results have been exceptional. The content created by their talented writers perfectly captures our brand voice and engages our audience. Their digital marketing strategies have significantly increased our online presence and customer engagement. What sets Nextec apart is their commitment to delivering results and their proactive approach to optimizing our digital strategy. I highly recommend them for comprehensive digital solutions.",
    },
  ];
  return (
    <section className="sm:my-[1rem] min-h-[100vh] py-[3rem]">
      <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
        <div className="wrapper z-10 relative flex justify-center  gap-8">
          <div className="pt-14 sm:pt-10 sm:pl-10 space-y-5">
            <Image
              src={projectImages.PseudoElement}
              alt="a"
              className="max-w-[50px] mx-auto sm:max-w-[80px] object-cover"
            />
            <h3 className="font-bold font-mono max-w-2xl sm:text-4xl text-center text-2xl tracking-wider leading-none ">
              {"People's Say About Our Support & Services"}
            </h3>
          </div>
          <h1 className="textStroke font-serif sm:text-[7rem] text-[4rem] absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
            {"SAY'S"}
          </h1>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 ">
        <Slider {...settings}>
          {clientTestimonial.map((testimonial, index) => (
            <TestimonialSlider key={index} data={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
