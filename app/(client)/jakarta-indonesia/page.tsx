import BannerTitle from "@/components/banner-title"

export default function InvitedSpeakers() {
  const jakartaInfo = 
  {
    nama: "Jakarta",
    populasi: "10 juta (perkiraan 2025)",
    luas: "662 km²",
    zonaWaktu: "Waktu Indonesia Barat (WIB)",
    kodeNegara: "ID",
    areaCode: "+62 21"
  };

  return (
    <div className="h-full">
      <BannerTitle message="Jakarta, Indonesia" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div>
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Lihatlah Keindahan Kota Jakarta
            </h2>
          </div>
          <div className="mt-4">
            <video controls className="w-full">
              <source src="/jakarta.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Tentang Jakarta
            </h2>
          </div>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color mt-4">
            {Object.entries(jakartaInfo).map(([key, value], i) => (
              <div key={key} className={`flex items-center border-x border-t ${i === Object.entries(jakartaInfo).length - 1 ? 'border-b' : ''}`}>
                <div className="bg-blue-500/10 block font-medium text-sm w-1/5 p-2">
                  <span>{key}</span>
                </div>
                <div className="block text-sm w-4/5 p-2 border-l">
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
