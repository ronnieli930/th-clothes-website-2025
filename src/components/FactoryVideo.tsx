"use client";

import { Play, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FactoryVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Factory Video
          </h2>

          <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-900 group cursor-pointer">
            {/* Auto-playing background video */}
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/frequency2.mp4" type="video/mp4" />
            </video>

            {/* Play button overlay */}
            <div className="absolute inset-0 bg-black/10 bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-60 transition-all duration-300">
              <Button
                onClick={openVideo}
                size="lg"
                className="rounded-full w-20 h-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              >
                <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
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
              <source src="/images/frequency2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
