import React from 'react'
import backgroundPattern from "../../../public/Sprinkle.svg";
import Image from "next/image";
const BackGroundPattern = () => {
  return (
    <div className="w-full h-[110vh] absolute top-0 -z-10  bg-gradient-to-b from-[#071c4b] to-[#061d51]">
      <Image
        src={backgroundPattern}
        alt="background"
        className="w-full"
        width={1000}
        height={1000}
      />
    </div>
  )
}

export default BackGroundPattern