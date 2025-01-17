"use client"

import Image from "next/image";
import Link from "next/link";
import CountdownCard from "./count-down-card";
import BannerImage from '@/public/images/banner.jpg';

const Banner = () => {
   return (
    <div className="h-screen relative">
      <Image src={BannerImage} alt="banner image" className="w-full h-[85%] bg-cover object-cover" />
      <div className="container px-10 absolute left-1/2 -translate-x-1/2 bottom-4 p-10 flex items-center gap-4 justify-center">
        <CountdownCard eventDate="2025-07-01T00:00:00Z"/>
        <div className="grid grid-cols-2 gap-4">
          <Link href="/registration" className="rounded-xl p-4 bg-primary-color w-40 text-center text-white font-normal h-32 flex items-center justify-center">Pendaftaran</Link>
          <Link href="/accomodation" className="rounded-xl p-4 bg-primary-color w-40 text-center text-white font-normal h-32 flex items-center justify-center">Akomodasi</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
