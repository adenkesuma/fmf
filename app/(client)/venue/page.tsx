import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import VenueImage1 from "@/public/images/venue-image-1.png";
import VenueImage2 from "@/public/images/venue-image-2.png";
import Maps from "@/components/maps";

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Lokasi" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div>
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Monas Jakarta, Indonesia
            </h2>
          </div>
          <p className="text-sm font-medium text-primary-color mt-4">FMF June 2025 akan di selenggarakan di jakarta</p>
          <span className="text-sm">Pengalamanmu melakukan conference di jakarta akan sangat mengagumkan karena lokasi ditempati dengan fasilitas dan pemandangan yang bagus.</span>
          <div className="flex items-center gap-6 w-full mt-2">
            <div className="rounded-xl">
              <Image src={VenueImage1} alt="venue image 1" />
            </div>
            <div className="rounded-xl">
              <Image src={VenueImage2} alt="venue image 2" />
            </div>
          </div>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color mt-6">
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Lokasi</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Monas Jakarta, Indonesia</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Alamat</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Monas Jakarta, Indonesia</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Kontak</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>+62 3942 2348 2342</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-y`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Daftar</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <button className="py-1 px-3 bg-gradient-to-r from-yellow-400 to-orange-600 text-white rounded-xl">Daftar Conference</button>
              </div>
            </div>
          </div> 
        </div>
        <div className="mt-10">
          <div className="mb-4 bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Lokasi
            </h2>
          </div>
          <Maps />
        </div>
        <div className="mt-10">
          <div className="mb-4 bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Bagaimana Cara Sampai Kesana
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              Dengan berjalan kaki dari bandung ke jakarta
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Dengan berjalan kaki dari bandung ke jakarta dengan penuh semangat
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Lalu sampailah di lokasi
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              Menggunakan Bus Kota
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Menaiki bus dari bandung ke jakarta dengan penuh semangat
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Lalu sampailah di lokasi
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              Menggunakan Bus Bandara + Ke Bandara Pesawat
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Menaiki bus dari bandung ke jakarta dengan penuh semangat
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Lalu sampailah di lokasi dengan naik pesawat
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              Melalui Kereta Bawah tanah
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Menaiki kereta bawah dari bandung ke jakarta dengan penuh semangat
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  Lalu sampailah di lokasi dengan berlari
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
