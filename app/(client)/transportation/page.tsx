import BannerTitle from "@/components/banner-title"

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Transportation" /> 
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        
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
        </div>
      </div>
    </div>
  )
}
