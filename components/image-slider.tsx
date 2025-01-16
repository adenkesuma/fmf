"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CountdownCard from "./count-down-card";

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
    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="relative w-full h-[700px] overflow-hidden bg-black">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={1000}
            height={400}
            alt={`Flyer ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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
      <div className="absolute right-10 bottom-4 p-10">
        <CountdownCard eventDate="2025-07-01T00:00:00Z"/>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Link href="/registration" className="rounded-xl p-4 bg-black text-white font-bold">Pendaftaran</Link>
          <Link href="/accomodation" className="rounded-xl p-4 bg-black text-white font-bold">Akomodasi</Link>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
