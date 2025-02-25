// "use client";

import BannerTitle from "@/components/banner-title";
import Image from "next/image";
import VenueImage1 from "@/public/images/venue-image-1.jpg";
import VenueImage2 from "@/public/images/venue-image-2.webp";
// import dynamic from "next/dynamic";
// import maps from "@/components/maps";
// const Maps = dynamic(() => import("@/components/maps"), { ssr: false });

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Lokasi" />
      <div className="mx-auto container px-6 lg:px-20 py-10 min-h-screen">
        <div>
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-full md:w-1/2">
            <h2 className="font-medium text-base text-white">
              JW Marriot Hotel, Jakarta
            </h2>
          </div>
          <p className="text-sm font-medium text-primary-color mt-4">
            FMF June 2025 akan di selenggarakan di jakarta
          </p>
          <span className="text-sm">
            JW Marriott Hotel Jakarta terletak di Jalan DR Ide Anak Agung Gde Agung Kav E.1.2 No 1&2, Kawasan Mega Kuningan, Jakarta Selatan, Indonesia, 12950. Hotel ini berada di pusat distrik bisnis Mega Kuningan, menjadikannya mudah diakses dari berbagai penjuru kota. 
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
                <span>Lokasi</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>JW Marriot Hotel, Jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Alamat</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Jalan DR Ide Anak Agung Gde Agung Kav E.1.2 No 1&2, Kawasan Mega Kuningan, Jakarta, Indonesia, 12950</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Kontak</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>+62 812 6033 7148</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-y`}>
              <div className="block text-sm w-1/5 p-2">
                <span>Daftar</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <button className="py-1 px-3 bg-gradient-to-r from-yellow-400 to-orange-600 text-white rounded-xl">
                  Daftar Conference
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-10">
          <div className="mb-4 bg-primary-color py-2 px-3 rounded-br-2xl w-full md:w-1/2">
            <h2 className="font-medium text-base text-white">Lokasi</h2>
          </div>
          <Maps />
        </div> */}
        <div className="mt-10">
          <div className="mb-4 bg-primary-color py-2 px-3 rounded-br-2xl w-full md:w-1/2">
            <h2 className="font-medium text-base text-white">
              Cara Menuju JW Marriot Hotel Jakarta
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              A. Dari Bandara Internasional Soekarno-Hatta
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Jarak: </span> Sekitar 31 km dari hotel
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Taksi atau Transportasi Online: </span> Perjalanan memakan waktu sekitar 45 - 60 menit, tergantung kondisi lalu lintas
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Layanan Antar - Jemput Bandara </span> Hotel menyediakan layanan antar-jemput dengan biaya kurang lebih Rp649.000 untuk sekali jalan dan Rp 1.078.000 untuk pulang pergi. (Reservasi diperlukan sebelumnya).
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              B. Dari Bandara Internasional Halim Perdanakusuma
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Jarak: </span> Sekitar 9,9 km dari hotel
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Taksi atau Transportasi Online: </span> Perjalanan memakan waktu sekitar 30 - 45 menit, tergantung kondisi lalu lintas
                </p>
              </li>
              <li className="flex gap-3">
                <span>•</span>
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-black">Catatan: </span> Hotel tidak menyediakan layanan antar-jemput dari bandara ini.
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-base font-medium text-primary-color">
              C. Menggunakan Transportasi Umum 
            </h3>
            <ul className="flex flex-col mt-2">
              <li className="flex flex-col gap-1">
                <div className="flex items-center gap-2 font-semibold text-black">
                  <span>1.</span>
                  <p className="text-sm">
                    Buss
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 text-sm">
                    <span className="text-black font-semibold">Halte Terdekat: </span>Pos Polisi Satrio dan Mega Kuningan, keduanya berjarak sekitar 5 menit berjalan kaki dari hotel.
                  </p>
                </div>
                <div className="ml-5">
                  <div className="text-gray-600 text-sm flex flex-col">
                    <span className="text-black font-semibold">Rute Buss yang Melayani area ini: </span>
                    <span>- 5F : Kampung Melayu - Tanah Abang</span>
                    <span>- 6D : Stasiun Tebet - Bundaran Senayan</span>
                    <span>- 6K : Kuningan - Karet</span>
                    <span>- JAK48A : Stasiun Tebet - Rusun Karet Tengsin</span>
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
                    <span className="text-black font-semibold">Stasiun Terdekat: </span>Bendungan Hilir, berjarak sekitar 12 menit berjalan kaki dari hotel
                  </p>
                </div>
                <div className="ml-5">
                  <p className="text-gray-600 text-sm">
                    <span className="text-black font-semibold">Rute: </span>Lebak Bulus Grab - Bundaran HI
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
                    <span className="text-black font-semibold">Stasiun Terdekat: </span>Kuningan, Berjarak sekitar 16 menit berjalan kaki dari hotel.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className="text-sm mt-6">Untuk informasi lebih lanjut mengenai rute dan jadwal transportasi umum, Anda dapat mengunjungi situs <a href="https://moovitapp.com/" className="underline text-primary-color">Mooveit</a>.</p>

          <div className="mt-2">
            <span className="text-sm">Catatan Tambahan:</span>
            <ul className="text-sm flex flex-col">
              <li>- Parkir: Hotel menyediakan area parkir bawah tanah dengan 55 slot yang tersedia untuk tamu. Layanan parkir tersedia 24 jam tanpa biaya tambahan untuk tamu yang menginap.</li>
              <li>- Dengan berbagai opsi transportasi yang tersedia, JW Marriott Hotel Jakarta dapat dicapai dengan mudah, baik menggunakan kendaraan pribadi maupun transportasi umum.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
