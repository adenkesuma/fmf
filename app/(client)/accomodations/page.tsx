"use client";

import BannerTitle from "@/components/banner-title";
import hotels from "@/const/accomodation";
import dynamic from "next/dynamic";

const MapsNoSSR = dynamic(() => import("@/components/maps"), { ssr: false });

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Accomodation" />
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">
          Accommodation Options Near the Conference Location
        </h2>
        <div className="rounded-xl bg-blue-500/10 p-4">
          <p className="text-sm">
            Organizers are in the process of securing special rates for hotels at conference locations. However, for participants who want to look for alternative accommodation, there are various hotel options available around the venue which can be booked directly through the Online Travel Agent (OTA) or directly from the hotel. 
          </p>
          <p className="text-sm mt-3">
            Please see the list of alternative hotels below and make a booking according to your preferences. We recommend making reservations early to get the best prices and availability.
          </p>
          <p className="text-sm mt-1">
            We look forward to welcoming you to the Event Location.
          </p>
        </div>
        <div className="w-full mt-8">
          <div className="w-full bg-primary-color py-2 px-4 rounded-t-xl">
            <h3 className="font-medium text-lg text-white">
              FMF June 2025 Akomodation
            </h3>
          </div>
          <MapsNoSSR />
        </div>
        <div className="flex flex-col border-t-4 mt-8 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-10 p-2">
              <span className="font-medium">No</span>
            </div>
            <div className="block text-sm w-1/5 p-2 border-x">
              <span className="font-medium">Rating</span>
            </div>
            <div className="block text-sm w-1/5 p-2 border-r">
              <span className="font-medium">Hotel</span>
            </div>
            <div className="block text-sm w-1/5 p-2">
              <span className="font-medium">Distance</span>
            </div>
            <div className="block text-sm w-1/5 p-2 border-x">
              <span className="font-medium">Price</span>
            </div>
            <div className="block text-sm w-1/5 p-2">
              <span className="font-medium">Website</span>
            </div>
          </div>
          {hotels.map((hotel, i) => (
            <div
              key={hotel.name}
              className={`flex items-center border-x border-t ${
                hotels.length - 1 === i ? "border-b" : ""
              }`}
            >
              <div className="block text-sm w-10 p-2">
                <span className="font-medium">{i + 1}</span>
              </div>
              <div className="text-sm w-1/5 p-2 border-x flex items-center gap-1">
                {Array.from({ length: hotel.rating }).map((_, i) => (
                  <svg
                    className="size-4 text-yellow-400"
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <div className="block text-sm w-1/5 p-2 border-r">
                <span>{hotel.name}</span>
              </div>
              <div className="block text-sm w-1/5 p-2">
                <span>{hotel.distance}</span>
              </div>
              <div className="block text-sm w-1/5 p-2 border-x">
                <span>{hotel.price}</span>
              </div>
              <div className="block text-sm w-1/5 p-2">
                <a
                  className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white"
                  href={hotel.url}
                  target="_blank"
                >
                  Website
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-sm mt-6">
          <span>Notes:</span>
          <ul>
            <li>- Prices may change depending on availability and booking season..</li>
            <li>- Information based on sources such as Tripadvisor, Traveloka and Booking.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
