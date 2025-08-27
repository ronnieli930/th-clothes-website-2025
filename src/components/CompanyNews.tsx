"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const newsItems = [
  {
    id: 1,
    title: "TH Celebrates Chinese New Year and Resumes Operations",
    excerpt:
      "Gong Hey Fat Choi! After a short break celebrating the Chinese New Year, TH resumes back to work on 13 Feb, 2025. Everyone wears a smily face and is...",
    image: "/img/img9.png",
    date: {
      day: "13th",
      month: "02",
      year: "2025",
    },
    href: "#",
  },
  {
    id: 2,
    title: "New Advanced Manufacturing Equipment Installation Complete",
    excerpt:
      "Our latest intelligent manufacturing technology from Jack Company has been successfully installed, including automatic cutting machines and AGV systems...",
    image: "/img/img9.png",
    date: {
      day: "28th",
      month: "01",
      year: "2025",
    },
    href: "#",
  },
  {
    id: 3,
    title: "TH Expands R&D Center with Digital Control Systems",
    excerpt:
      "By 2025, our facility expansion includes a new clothing R&D center, digital control center, exhibition hall, and modern showroom following industry standards...",
    image: "/img/img9.png",
    date: {
      day: "15th",
      month: "01",
      year: "2025",
    },
    href: "#",
  },
  {
    id: 4,
    title: "Employee Wellness Program Launch",
    excerpt:
      "TH prioritizes employee well-being with new sports facilities including basketball courts, badminton courts, and recreational spaces for work-life balance...",
    image: "/img/img9.png",
    date: {
      day: "08th",
      month: "01",
      year: "2025",
    },
    href: "#",
  },
  {
    id: 5,
    title: "Partnership with HIFA Strengthens Educational Collaboration",
    excerpt:
      "Our ongoing partnership with HIFA continues to drive innovation in fashion education and practical manufacturing experience for students...",
    image: "/img/img9.png",
    date: {
      day: "22nd",
      month: "12",
      year: "2024",
    },
    href: "#",
  },
];

export default function CompanyNews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex-1"></div>
          <h2 className="text-4xl font-bold text-center flex-1">
            COMPANY NEWS
          </h2>
          <div className="flex-1 flex justify-end">
            {/* Custom carousel controls will be positioned here */}
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {newsItems.map((news) => (
              <CarouselItem
                key={news.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative">
                      {/* News Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Date Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center shadow-sm">
                        <div className="text-lg font-bold text-gray-900">
                          {news.date.day}
                        </div>
                        <div className="text-sm text-gray-600">
                          {news.date.month}
                        </div>
                        <div className="text-sm text-gray-600">
                          {news.date.year}
                        </div>
                      </div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                          <a href={news.href} className="hover:underline">
                            {news.title}
                          </a>
                        </h3>
                        <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                          {news.excerpt}
                        </p>
                        <Button
                          asChild
                          variant="secondary"
                          size="sm"
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <a
                            href={news.href}
                            className="flex items-center gap-2"
                          >
                            Read More
                            <ArrowRight size={16} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
