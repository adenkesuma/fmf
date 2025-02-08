"use client"

import Image from "next/image";
import Link from "next/link";
import CountdownCard from "./count-down-card";
import BannerImage from '@/public/images/banner.png';

const Banner = () => {
   return (
    <div className="h-screen relative">
      <Image src={BannerImage} alt="banner image" className="w-full h-[85%] bg-cover object-cover" />
      <div className="mb-3 container px-10 absolute left-1/2 -translate-x-1/2 -bottom-14 p-6 flex items-center gap-2 justify-center">
        <div className="bg-white p-4 flex items-center gap-2 rounded-2xl">
          <CountdownCard eventDate="2025-07-01T00:00:00Z"/>
          <div className="grid grid-cols-2 gap-2">
            <Link href="#" className="rounded-xl p-6 text-white text-sm font-semibold bg-primary-color w-40 text-center hover:bg-blue-800 flex items-center justify-center">Registration</Link>
            <Link href="#" className="rounded-xl p-6 text-white text-sm font-semibold bg-primary-color w-40 text-center hover:bg-blue-800 flex items-center justify-center">Workshop</Link>
            <Link href="#" className="rounded-xl p-6 text-white text-sm font-semibold bg-primary-color w-40 text-center hover:bg-blue-800 flex items-center justify-center">Abstract Submission</Link>
            <Link href="#" className="rounded-xl p-6 text-white text-sm font-semibold bg-primary-color w-40 text-center hover:bg-blue-800 flex items-center justify-center">Awarding</Link>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Banner;
