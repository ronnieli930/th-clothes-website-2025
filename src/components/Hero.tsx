"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/banner8.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700" />
      </video>

      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 bg-opacity-30" />

      {/* Content overlay (optional) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          {/* Add hero content here if needed */}
        </div>
      </div>
    </section>
  );
}
