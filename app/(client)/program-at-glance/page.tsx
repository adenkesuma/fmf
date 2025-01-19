import BannerTitle from "@/components/banner-title"
import programAtAGlance from "@/const/program-glance"

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Sekilas Tentang Program" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div className="font-medium text-sm mb-4">
          Jadwal program dapat berubah. Silakan periksa kembali secara rutin untuk mengetahui pembaruan guna memastikan Anda mendapatkan informasi terkini.
        </div>
        <div className="flex flex-col border-t-4 border-primary-color">
          <div className={`bg-blue-500/5 flex items-center border-x border-t`}>
            <div className="block text-sm w-1/3 p-2">
              <span className="font-medium">Waktu</span>
            </div>
            <div className="block text-sm w-1/3 p-2 border-x">
              <span className="font-medium">26 Juni 2025</span>
            </div>
            <div className="block text-sm w-1/3 p-2 border-r">
              <span className="font-medium">27 Juni 2025</span>
            </div>
            <div className="block text-sm w-1/3 p-2">
              <span className="font-medium">28 Juni 2025</span>
            </div>
          </div>
          {programAtAGlance.map((glance, i) => (
            <div key={i + '-' + glance.June26} className={`flex items-center border-x border-t ${programAtAGlance.length - 1 === i ? 'border-b' : ''}`}>
              <div className="block text-sm w-1/3 p-2">
                <span className="font-medium">{glance.Time}</span>
              </div>
              <div className="block text-sm w-1/3 p-2 border-x">
                <span>{glance.June26}</span>
              </div>
              <div className="block text-sm w-1/3 p-2 border-r">
                <span>{glance.June27}</span>
              </div>
              <div className="block text-sm w-1/3 p-2">
                <span>{glance.June28}</span>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  )
}
