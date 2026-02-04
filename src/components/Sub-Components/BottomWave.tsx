import React from "react";
import { projectImages } from "../Assets";
import Image from "next/image";

const BottomWave = () => {
  return (
    <div className="absolute bottom-0 w-full z-0">
      <Image
        src={projectImages.Wave}
        alt="Bottom Wave Image"
        className="w-full h-[20vh] sm:h-[40vh] object-cover object-top"
      />
    </div>
  );
};

export default BottomWave;
