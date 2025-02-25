import BannerTitle from "@/components/banner-title"

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Transportasi" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        
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
        </div>
      </div>
    </div>
  )
}
