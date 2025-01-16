"use client"

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
    <div className="relative w-full h-40 overflow-hidden bg-black rounded-xl">
      <Card key={speakers[currentIndex].name} className="rounded-xl w-full h-full border border-gray-400">
        <CardHeader>
          <CardTitle>
            {speakers[currentIndex].name}
          </CardTitle>
          <CardDescription>
            {speakers[currentIndex].desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-gray-400">{speakers[currentIndex].title}</div>
        </CardContent>
      </Card>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {speakers.map((_, index) => (
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

