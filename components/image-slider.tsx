"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

const ImageSlider: React.FC = () => {
  const images: string[] = [
    "/images/flyer-1.webp",
    "/images/flyer-2.webp",
    "/images/flyer-3.webp",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Ganti setiap 10 detik

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden bg-black">
      <Image
        src={images[currentIndex]}
        alt={`Flyer ${currentIndex + 1}`}
        width={1000}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
