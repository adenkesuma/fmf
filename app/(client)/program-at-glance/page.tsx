import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import ProgramAtAGlance from "@/public/images/glance.png"

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Program at a Glance" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div className="font-medium text-sm mb-4">
          Jadwal program dapat berubah. Silakan periksa kembali secara rutin untuk mengetahui pembaruan guna memastikan Anda mendapatkan informasi terkini.
        </div>
        <Image src={ProgramAtAGlance} alt="program at a glance" className="w-full" />
      </div>
    </div>
  )
}
