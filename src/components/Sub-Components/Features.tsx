import Image, { StaticImageData } from "next/image";

interface Props {
  ImageData: StaticImageData;
  Title: string;
  Description: string;
}

const Features = ({ ImageData, Title, Description }: Props) => {
  return (
    <div className="flex justify-center  items-start gap-3 sm:gap-4">
      <Image
        src={ImageData}
        alt={`${Title} Icon`}
        className=" object-contain w-[25px] sm:w-[40px]"
      />
      <div>
        <h2 className="font-medium tracking-widest text-lg">{Title}</h2>
        <p className="text-stone-300 text-sm text-left sm:text-justify">{Description}</p>
      </div>
    </div>
  );
};

export default Features;
