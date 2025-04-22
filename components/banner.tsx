"use client"

import Image from "next/image";
import Link from "next/link";
import CountdownCard from "./count-down-card";
import BannerImage from '@/public/images/banner.png';
import BannerImageMobile from "@/public/images/banner-mobile.png";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Banner = () => {
   return (
    <div className="h-screen relative">
      <Image src={BannerImage} alt="banner image" className="w-full h-[90%] bg-cover object-cover hidden md:block" />
      <Image src={BannerImageMobile} alt="baner image mobile" className="w-full h-[90%] bg-cover object-cover block md:hidden" />
      <div className="mb-3 container px-10 absolute left-1/2 -translate-x-1/2 -bottom-40 p-6 flex items-center gap-2 justify-center">
        <div className="bg-white p-2 md:p-4 rounded-2xl">
          <CountdownCard eventDate="2025-06-26T00:00:00Z"/>
          <div className="mt-2 flex flex-col gap-2">
            <Link href="/registration" className="rounded-xl p-4 md:p-6 text-white text-xs md:text-sm font-semibold bg-primary-color w-full text-center hover:bg-blue-800 flex items-center justify-center">Registration</Link>
            <div className="flex flex-row gap-2">
              <div className="w-1/2">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="rounded-xl p-4 md:p-6 text-white text-xs md:text-sm font-semibold bg-primary-color w-full text-center hover:bg-blue-800 flex items-center justify-center">Abstract Submission</div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Abstract Submission</AlertDialogTitle>
                      <Link href="/abstract" className="flex items-center justify-between gap-2 text-white bg-primary-color text-sm font-normal w-full py-2 px-3 rounded-xl">
                        <span>
                          Abstract
                        </span>
                        <svg className="size-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                      </Link>
                      <Link href="/short-video-competition" className="flex items-center justify-between gap-2 text-white bg-primary-color text-sm font-normal w-full py-2 px-3 rounded-xl">
                        <span>
                          Short Video Competition
                        </span>
                        <svg className="size-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                      </Link>
                      <Link href="/photography-competition" className="flex items-center justify-between gap-2 text-white bg-primary-color text-sm font-normal w-full py-2 px-3 rounded-xl">
                        <span>
                          Photography Competition
                        </span>
                        <svg className="size-5" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"></path>
                        </svg>
                      </Link>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel className="rounded-xl py-2">
                        Back
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <Link href="https://sites.google.com/view/pdkifmfawards" className="rounded-xl p-4 md:p-6 text-white text-xs md:text-sm font-semibold bg-primary-color w-1/2 text-center hover:bg-blue-800 flex items-center justify-center">Awarding</Link>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default Banner;
