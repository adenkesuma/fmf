"use client"

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

export default function CarouselSpeakers() {
  const speakers = [
    {name: 'Park chu yong', title: 'title of conference 1', desc: 'Ceo Meta'},
    {name: 'Xi fu tang', title: 'title of conference 2', desc: 'Ceo Wa'},  
    {name: 'Mark moi', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [speakers.length]);

  return (
    <div className="relative w-full overflow-hidden border border-primary-color rounded-xl">
      <Card key={speakers[currentIndex].name} className="flex items-center rounded-xl w-full h-full">
        <CardHeader>
          <div className="h-40 w-40 bg-gray-300 rounded-xl flex items-center justify-center">
            {currentIndex}
          </div>
        </CardHeader>
        <CardContent className="w-full">
          <div>
            <span className="text-primary-color font-medium text-xs">Sabtu, 15 April 2025</span>
            <h3 className="font-semibold text-xl">{speakers[currentIndex].title}</h3>
          </div>

          <div className="mt-4 border-l-4 border-primary-color pl-3 bg-blue-100 w-full rounded-r-lg py-1">
            <h4 className="text-base font-semibold">{speakers[currentIndex].name}</h4>
            <p className="text-xs font-normal slide-in-from-top-1">{speakers[currentIndex].desc}</p>
          </div>
        </CardContent>
      </Card>
      <div className="absolute bottom-4 right-4 flex space-x-2">
        {speakers.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-gray-400" : "bg-gray-800"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

