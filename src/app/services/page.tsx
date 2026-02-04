import { AllServicesData } from "@/components/Utils/AllServicesDataAndTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllServices = () => {
  return (
    <section className="bg-gray-900 min-h-screen">
      <main className="wrapper relative flex flex-col justify-center items-center py-16">
        <h1 className="text-5xl font-bold tracking-widest text-stone-300 hover:opacity-50 duration-300 mb-12">
          ALL SERVICES
        </h1>

        <div className="grid gap-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full px-6">
          {AllServicesData.map((service, index) => {
            const slug = service.name.toLowerCase().replaceAll(" ", "-");

            return (
              <Link
                key={index}
                href={`/services/${slug}`}
                className="group transition transform hover:scale-105"
              >
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    width={800}
                    height={800}
                    className="rounded-2xl object-cover w-full h-64 sm:h-72 md:h-80 lg:h-64"
                  />
                </div>
                <h3 className="pt-4 font-bold text-stone-300 text-center text-lg group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
              </Link>
            );
          })}
        </div>
      </main>
    </section>
  );
};

export default AllServices;
