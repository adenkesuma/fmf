"use client";

import BannerTitle from "@/components/banner-title";
import Image from "next/image";
import VenueImage1 from "@/public/images/venue-image-1.jpg";
import VenueImage2 from "@/public/images/venue-image-2.webp";
import dynamic from "next/dynamic";
const MapsNoSSR = dynamic(() => import("@/components/maps"), { ssr: false });

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Location" />
      <div className="mx-auto container px-6 lg:px-20 py-10 min-h-screen">
        <div>
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-full md:w-1/2">
            <h2 className="font-medium text-base text-white">
              JW Marriott Hotel, Jakarta
            </h2>
          </div>
          <p className="text-sm font-medium text-primary-color mt-4">
            FMF June 2025 will be held in Jakarta
          </p>
          <span className="text-sm">
            JW Marriott Hotel Jakarta is located at Jalan DR Ide Anak Agung Gde Agung Kav E.1.2 No 1&2, Mega Kuningan Area, South Jakarta, Indonesia, 12950. The hotel is situated in the heart of the Mega Kuningan business district, making it easily accessible from various parts of the city.
          </span>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full mt-2">
            <div className="rounded-xl w-full h-full">
              <Image className="w-full h-80 object-cover bg-cover" src={VenueImage1} alt="venue image 1" />
            </div>
            <div className="rounded-xl w-full h-full">
              <Image className="w-full h-80 object-cover bg-cover" src={VenueImage2} alt="venue image 2" />
            </div>
          </div>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color mt-6">
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Location</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>JW Marriott Hotel, Jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Address</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Jalan DR Ide Anak Agung Gde Agung Kav E.1.2 No 1&2, Mega Kuningan Area, Jakarta, Indonesia, 12950</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-y`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Register</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <button className="py-1 px-3 bg-gradient-to-r from-yellow-400 to-orange-600 text-white rounded-xl">
                  Register for Conference
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="mb-4 bg-primary-color py-2 px-3 rounded-br-2xl w-full md:w-1/2">
            <h2 className="font-medium text-base text-white">Location</h2>
          </div>
          <MapsNoSSR />
        </div>
        <div className="mt-10">
          <div className="mb-4 bg-primary-color py-2 px-3 rounded-br-2xl w-full md:w-1/2">
            <h2 className="font-medium text-base text-white">
              How to Get to JW Marriott Hotel Jakarta
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              A. From Soekarno-Hatta International Airport
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Distance: </span> Approximately 31 km from the hotel
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Taxi or Online Transportation: </span> The journey takes about 45 - 60 minutes, depending on traffic conditions
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Airport Shuttle Service: </span> The hotel provides a shuttle service at a cost of approximately IDR 649,000 for a one-way trip and IDR 1,078,000 for a round trip. (Reservation is required in advance).
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              B. From Halim Perdanakusuma International Airport
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Distance: </span> Approximately 9.9 km from the hotel
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Taxi or Online Transportation: </span> The journey takes about 30 - 45 minutes, depending on traffic conditions
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Note: </span> The hotel does not provide a shuttle service from this airport.
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              C. Using Public Transportation
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <span>1.</span>
                  <p className="text-sm">
                    Bus
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 text-sm">
                    <span className="text-black font-semibold">Nearest Bus Stop: </span>Pos Polisi Satrio and Mega Kuningan, both are about a 5-minute walk from the hotel.
                  </p>
                </div>
                <div className="ml-5">
                  <div className="text-gray-600 text-sm flex flex-col">
                    <span className="text-black font-semibold">Bus Routes Serving This Area: </span>
                    <span>- 5F : Kampung Melayu - Tanah Abang</span>
                    <span>- 6D : Tebet Station - Bundaran Senayan</span>
                    <span>- 6K : Kuningan - Karet</span>
                    <span>- JAK48A : Tebet Station - Rusun Karet Tengsin</span>
                    <span>- M44 : Kampung Melayu - Karet</span>
                  </div>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <span>2.</span>
                  <p className="text-sm">
                    MRT
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 text-sm">
                    <span className="text-black font-semibold">Nearest Station: </span>Bendungan Hilir, about a 12-minute walk from the hotel
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 text-sm">
                    <span className="text-black font-semibold">Route: </span>Lebak Bulus Grab - Bundaran HI
                  </p>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <span>3.</span>
                  <p className="text-sm">
                    LRT
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 text-sm">
                    <span className="text-black font-semibold">Nearest Station: </span>Kuningan, about a 16-minute walk from the hotel.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-sm mt-6">For more information on public transportation routes and schedules, you can visit the <a href="https://moovitapp.com/" className="underline text-primary-color">Moovit</a> website.</p>

          <div className="mt-2">
            <span className="text-sm">Additional Notes:</span>
            <ul className="text-sm flex flex-col">
              <li>- Parking: The hotel provides an underground parking area with 55 slots available for guests. Parking services are available 24 hours at no additional cost for staying guests.</li>
              <li>- With various transportation options available, JW Marriott Hotel Jakarta is easily accessible, whether by private vehicle or public transportation.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
