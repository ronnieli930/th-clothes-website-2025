"use client";

export default function Hero() {
  return (
    <section className="w-full flex justify-center items-center">
      {/* Video Background */}
      <video className="w-[80%] object-cover" autoPlay loop muted>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/th-clothes.firebasestorage.app/o/videos%2Fbanner8.mp4?alt=media&token=bb848f0b-44d5-47b0-8f41-f68b5519a909"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
