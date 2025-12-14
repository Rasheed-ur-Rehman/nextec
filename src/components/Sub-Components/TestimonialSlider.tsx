import React from "react";

const TestimonialSlider = ({
  data,
}: {
  data: {
    client: string;
    feedback: string;
  };
}) => {
  return (
    <div className="flex flex-col items-center max-h-fit max-w-full sm:max-w-lg sm:mx-auto">
      <div className="relative text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute top-0 left-0 w-8 h-8 text-gray-800"
        >
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
        </svg>
        <p className="px-6 py-1 text-[#c6c6c6] text-lg italic">
          {data.feedback}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute bottom-0 right-0 w-8 h-8 text-gray-800"
        >
          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
        </svg>
      </div>
      <span className="w-12 h-1 my-5 rounded-xl bg-gradient-to-r from-[#2069F4] to-[#6C1AEC] "></span>
      <p className="text-[#c6c6c6] uppercase text-center">{data.client}</p>
    </div>
  );
};

export default TestimonialSlider;
