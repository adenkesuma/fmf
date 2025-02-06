import BannerTitle from "@/components/banner-title"
import overviewData from "@/const/overview"

export default function WelcomeMessage() {
  return (
    <div className="h-full">
      <BannerTitle message="Overview" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div className="flex flex-col gap-6">
          {overviewData.map(overview => (
            <div key={overview.nama} className="flex items-center gap-4 border-b pb-3">
              <div className="shrink-0 py-1 px-4 rounded-xl bg-gradient-to-r w-40 from-yellow-400 to-orange-500 text-white flex justify-center">
                <span className="block text-sm">
                  {overview.nama}
                </span>
              </div>
              <h4>{overview.title}</h4>
            </div>
          ))}
        </div> 
      </div>
    </div>
  )
}
