import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { projectImages } from '../Assets'


interface Props{
    text: string
}

const WhoSectionBoxes = ({text}: Props) => {
  return (
    <div className='flex items-center gap-3 bg-[#292738] max-w-fit py-2 px-6 sm:px-3 rounded'>
        <Image src={projectImages.WhoSectionCheck} alt='Check Image' width={20} className='object-contain' />
        <p>
            {text}
        </p>
    </div>
  )
}

export default WhoSectionBoxes