"use client";
// import SingleProduct from "../Single-Product";
import Link from "next/link";
import Image from "next/image";
import {
  AllServicesData,
  AllServicesTypes,
} from "../Utils/AllServicesDataAndTypes";
import Slider from "react-slick";

const Carousel = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  // const [width, setWidth] = useState(0);
  // const [CurrentService, setCurrentService] = useState(0);
  // const carousel = React.useRef(null);

  // const Data = AllServicesData.slice(CurrentService, CurrentService + 3);
  // console.log(Data, AllServicesData.length, CurrentService);

  // useEffect(() => {
  //   if (carousel.current) {
  //     // const imagesWidth = AllServicesData.map((item) => item?.image?.width);
  //     // setWidth(imagesWidth.reduce((a, b) => a + b + 4));
  //     const imagesWidth = AllServicesData.reduce(
  //       (acc, item) => acc + (280 || 0) + 4,
  //       // (acc, item) => acc + (item.image?.width || 0) + 4,
  //       0
  //     );
  //     setWidth(imagesWidth);

  //     console.log(AllServicesData);
  //     console.log(imagesWidth);
  //   }
  // }, []);
  return (
    <section className="w-full py-15">
      {/* <motion.div
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
        className="cursor-grab overflow-hidden  "
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex "
        >
          {AllServicesData.map((item: AllServicesTypes, index: number) => (
            <motion.div
              key={index}
              className="hover:scale-100
                scale-90 duration-300 flex-none w-64 md:w-80 lg:w-96 hover:scale-100 scale-90 duration-300 outline"
            >
              <Image
                src={item.image}
                width={400}
                height={400}
                className="object-cover rounded-3xl pointer-events-none"
                alt="Slider Picture"
              />
              <div className="ml-4 text-white tracking-wider space-y-2 my-3">
                <h2 className="font-semibold text-lg leading-6 text-center ">
                  {item.name}
                </h2>
              
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}

      {/* <motion.button
        onClick={() => {
          const item =
            CurrentService === 0
              ? AllServicesData.length - 3
              : CurrentService - 3;
          setCurrentService(item);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {"<"}
      </motion.button>

      {Data.map((service, index) => (
        <motion.div
          key={index}
          className="group-active:duration-300 hover:scale-100 scale-90 duration-300 outline mx-auto w-fit flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={service.image}
            width={400}
            height={400}
            className="max-w-md w-full object-cover rounded-3xl pointer-events-none"
            alt="Slider Picture"
          />
          <div className="ml-4 text-white tracking-wider space-y-2 my-3">
            <h2 className="font-semibold text-lg leading-6 text-center ">
              {service.name}
            </h2>
          </div>
        </motion.div>
      ))}

      <motion.button
        className="group-active:duration-300"
        onClick={() => {
          const item =
            CurrentService === AllServicesData.length - 3
              ? 0
              : CurrentService + 3;
          setCurrentService(item);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {">"}
      </motion.button> */}

      <Slider {...settings}>
        {AllServicesData.map((service: AllServicesTypes, index: number) => {
          const slug = service.name.toLowerCase().replaceAll(" ", "-");
          return (
            <div
              className=" hover:scale-100 hover:cursor-pointer scale-90 duration-500 "
              key={index}
            >
              <Link
                href={`services/${slug}`}
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={service.image}
                  width={400}
                  height={400}
                  className=" w-full object-cover rounded-3xl pointer-events-none"
                  alt="Slider Picture"
                />
                <div className="ml-4 text-white tracking-wider space-y-2 my-3">
                  <h2 className="font-semibold text-lg leading-6 text-center ">
                    {service.name}
                  </h2>
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Carousel;
