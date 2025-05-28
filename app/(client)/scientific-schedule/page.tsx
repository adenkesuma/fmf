"use client"

import BannerTitle from "@/components/banner-title";
import React from 'react';
import Image from 'next/image';
import Days1 from '@/public/images/day1.png';
import Days2 from '@/public/images/day2.png';
import Days3 from '@/public/images/day3.png';

export default function ShortVideoCompetition() {
  const [activeDay, setActiveDay] = React.useState(1);

  const days = {
    1: {
      date: "Kamis, 26 Juni 2025",
      image: Days1
    },
    2: {
      date: "Jumat, 27 Juni 2025",
      image: Days2
    },
    3: {
      date: "Sabtu, 28 Juni 2025",
      image: Days3
    }
  };

  return (
    <div className="h-full">
      <BannerTitle message="Scientific Schedule" />
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-4">
            {[1, 2, 3].map((dayNum) => (
              <button
                key={dayNum}
                onClick={() => setActiveDay(dayNum)}
                className={`px-6 py-2 rounded-xl font-medium text-lg transition-all ${
                  activeDay === dayNum
                    ? "bg-primary-color text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                Day {dayNum}
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-800">
            {days[activeDay].date}
          </h2>
          
          <Image
            src={days[activeDay].image}
            alt={`Schedule for Day ${activeDay}`}
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
