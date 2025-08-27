"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const collaborationImages = [
  {
    src: "/images/edu6.jpg",
    alt: "HIFA Collaboration 1",
    hasVideo: true,
    videoUrl: "/images/edu7.mp4",
  },
  {
    src: "/images/edu1.jpg",
    alt: "HIFA Collaboration 2",
  },
  {
    src: "/images/edu2.jpg",
    alt: "HIFA Collaboration 3",
  },
  {
    src: "/images/edu3.jpg",
    alt: "HIFA Collaboration 4",
  },
  {
    src: "/images/edu4.jpg",
    alt: "HIFA Collaboration 5",
  },
];

export default function HIFACollaboration() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string>("");

  const openVideo = (videoUrl: string) => {
    setCurrentVideo(videoUrl);
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
    setCurrentVideo("");
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">HIFA X TH</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {collaborationImages.map((item, index) => (
              <div
                key={index}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 group ${
                  index === 0 ? "md:col-span-2 lg:col-span-2 xl:col-span-2" : ""
                } ${index === 1 ? "md:row-span-2" : ""}`}
                style={{
                  aspectRatio: index === 0 ? "8/3" : "4/3",
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {item.hasVideo && (
                  <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
                    <Button
                      onClick={() => openVideo(item.videoUrl!)}
                      size="lg"
                      className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                    >
                      <Play
                        className="w-6 h-6 text-white ml-1"
                        fill="currentColor"
                      />
                    </Button>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/10 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && currentVideo && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video">
            <Button
              onClick={closeVideo}
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
            >
              <X className="w-6 h-6" />
            </Button>

            <video className="w-full h-full rounded-lg" controls autoPlay muted>
              <source src={currentVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
