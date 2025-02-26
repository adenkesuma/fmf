import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import ProgramAtAGlance from "@/public/images/glance.png"

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Program at a Glance" /> 
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <div className="font-medium text-sm mb-4">
          Program schedules are subject to change. Please check back regularly for freshness to keep you up to date with the latest information.
        </div>
        <Image src={ProgramAtAGlance} alt="program at a glance" className="w-full" />
      </div>
    </div>
  )
}
