import {  ChevronLeftCircle,  ChevronRightCircle } from "lucide-react";
import { useEffect, useState } from "react";

const videos = [
  " https://cdn.dribbble.com/userupload/47219824/file/26eaa24c8fcc394301a25a3c5021fe4f.mp4",
  "https://cdn.dribbble.com/userupload/47237019/file/429b11d1e115a51db87b80521a2c06b4.mp4",
  "https://cdn.dribbble.com/userupload/16569515/file/original-d99071d642c8efd87400222a0c344e1a.mp4",
];

// https://cdn.dribbble.com/userupload/47237019/file/429b11d1e115a51db87b80521a2c06b4.mp4

// https://cdn.dribbble.com/userupload/47241208/file/88fe81c1d3a8a2cc9c27a96c30c944e6.mp4

// https://cdn.dribbble.com/userupload/47224808/file/ddef7d32feaf01f9178d6af8f4a6bc5f.mp4
// https://cdn.dribbble.com/userupload/47219824/file/26eaa24c8fcc394301a25a3c5021fe4f.mp4



const Banner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play the carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((current - 1 + videos.length) % videos.length);
  const nextSlide = () => setCurrent((current + 1) % videos.length);

  return (
    <>
    <div className=" w-full flex top-20 left-8 justify-center ">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden bg-black rounded-2xl shadow-2xl">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full shrink-0 relative">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[60vh] object-cover brightness-90"
                />
                <div className=" inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <ChevronLeftCircle className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition"
          >
            <ChevronRightCircle className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === i ? "bg-white w-4" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    {/* <div className="mb-[500px]"></div> */}
    </>
  );
};

export default Banner;
