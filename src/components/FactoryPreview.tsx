"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const factoryImages = [
  {
    src: "/images/fa1.jpg",
    alt: "Factory Preview 1",
  },
  {
    src: "/images/fa2.jpg",
    alt: "Factory Preview 2",
  },
  {
    src: "/images/fa3.jpg",
    alt: "Factory Preview 3",
  },
  {
    src: "/images/fa4.jpg",
    alt: "Factory Preview 4",
  },
  {
    src: "/images/fa5.jpg",
    alt: "Factory Preview 5",
  },
  {
    src: "/images/fa6.jpg",
    alt: "Factory Preview 6",
  },
  {
    src: "/images/fa7.jpg",
    alt: "Factory Preview 7",
  },
  {
    src: "/images/fa8.png",
    alt: "Factory Preview 8",
  },
  {
    src: "/images/fa9.jpg",
    alt: "Factory Preview 9",
  },
];

export default function FactoryPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Factory Preview
        </h2>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {factoryImages.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/5"
                >
                  <div className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] transition-all duration-500 hover:scale-105">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {factoryImages.map((image, index) => (
                <CarouselItem key={index} className="basis-4/5">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
