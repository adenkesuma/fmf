"use client"

import Image from "next/image";
import Link from "next/link";
import CountdownCard from "./count-down-card";
import BannerImage from '@/public/images/banner.png';
import BannerImageMobile from "@/public/images/banner-mobile.png";

const Banner = () => {
   return (
    <div className="h-screen relative">
      <Image src={BannerImage} alt="banner image" className="w-full h-[90%] bg-cover object-cover hidden md:block" />
      <Image src={BannerImageMobile} alt="baner image mobile" className="w-full h-[90%] bg-cover object-cover block md:hidden" />
      <div className="mb-3 container px-10 absolute left-1/2 -translate-x-1/2 -bottom-40 p-6 flex items-center gap-2 justify-center">
        <div className="bg-white p-2 md:p-4 rounded-2xl">
          <CountdownCard eventDate="2025-06-26T00:00:00Z"/>
          <div className="mt-2 flex flex-col gap-2">
            <Link href="#" className="rounded-xl p-4 md:p-6 text-white text-xs md:text-sm font-semibold bg-primary-color w-full text-center hover:bg-blue-800 flex items-center justify-center">Registration</Link>
            <div className="flex flex-row gap-2">
              <Link href="#" className="rounded-xl p-4 md:p-6 text-white text-xs md:text-sm font-semibold bg-primary-color w-full text-center hover:bg-blue-800 flex items-center justify-center">Abstract Submission</Link>
              <Link href="#" className="rounded-xl p-4 md:p-6 text-white text-xs md:text-sm font-semibold bg-primary-color w-full text-center hover:bg-blue-800 flex items-center justify-center">Awarding</Link>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Banner;
