"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    src: "/images/products/yi1.jpg",
    alt: "Fashion Product 1",
  },
  {
    src: "/images/products/yi2.jpg",
    alt: "Fashion Product 2",
  },
  {
    src: "/images/products/yi3.jpg",
    alt: "Fashion Product 3",
  },
  {
    src: "/images/products/yi4.jpg",
    alt: "Fashion Product 4",
  },
  {
    src: "/images/products/yi5.jpg",
    alt: "Fashion Product 5",
  },
  {
    src: "/images/products/yi6.jpg",
    alt: "Fashion Product 6",
  },
  {
    src: "/images/products/yi7.jpg",
    alt: "Fashion Product 7",
  },
  {
    src: "/images/products/yi8.jpg",
    alt: "Fashion Product 8",
  },
];

export default function ProductSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Product Section
        </h2>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem
                key={product.src}
                className="pl-2 md:pl-4 basis-4/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <a
                  href="#"
                  className="group block relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 transition-all duration-500 hover:scale-105"
                >
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />

                  {/* Optional product info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">
                      Fashion Item {index + 1}
                    </p>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </section>
  );
}
