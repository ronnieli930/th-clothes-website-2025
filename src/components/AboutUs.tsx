"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About TH</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="About TH - Hubei Hongyihao Garment Co., Ltd."
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Hubei Hongyihao Garment Co., Ltd. is located in Qichun, Hubei
                Province—the hometown of renowned Ming Dynasty medical scientist
                Li Shizhen. As of May 2024, the company has established four
                workshops, an office building, a dormitory, and a research
                building, covering a total area of 43,000 square meters.
              </p>

              <p>
                The company utilizes advanced intelligent manufacturing
                technology and equipment from Jack Company, including an
                intelligent raw material warehouse, automatic cutting machines,
                hanging needle machines (with template configuration), an
                intelligent warehouse center, AGVs, an MES system, and a digital
                version room.
              </p>

              <p>
                By 2025, the facility will expand to include a clothing R&D
                center, digital control center, exhibition hall, and showroom,
                following modern factory standards. The company prioritizes
                employee well-being by offering sports facilities (basketball
                courts, badminton courts, dance floors), recreational spaces
                (karaoke rooms, green areas), and amenities like laundry rooms,
                late-night canteens, bookstores, and milk tea shops.
                Additionally, the factory area features parking lots, shopping
                malls, and childcare centers, creating a vibrant
                "work-life-entertainment" environment to drive company growth.
              </p>
            </div>

            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a
                href="https://www.th-globe.com/t-h-international-trading-limited.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW MORE
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
