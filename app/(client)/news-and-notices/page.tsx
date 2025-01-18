import BannerTitle from "@/components/banner-title"
import { PaginationComponent } from "@/components/pagination"
import medicalNews from "@/const/news"

export default function OrganizingCommitee() {
  return (
    <div className="h-full">
      <BannerTitle message="Berita & Pemberitahuan" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div className="relative flex justify-end items-center w-full mb-4">
          <input type="text" className="border rounded-xl outline-none py-1 px-4 border-primary-color text-sm font-normal" placeholder="Cari Berita..." />
          <div className="absolute right-2">
            <svg className="size-4 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
          </svg>
          </div>
        </div>
        <div className="mb-4 flex flex-col border-t-4 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-4/5 p-2">
              <span className="font-medium">Judul</span>
            </div>
            <div className="block text-sm w-1/5 p-2 border-l">
              <span className="font-medium">Tanggal</span>
            </div>
          </div>
          {medicalNews.map((news, i) => (
            <div key={news.date} className={`flex items-center border-x border-t ${medicalNews.length - 1 === i ? 'border-b' : ''}`}>
              <div className="block text-sm w-4/5 p-2">
                <span>{news.title}</span>
              </div>
              <div className="block text-sm w-1/5 p-2 border-l">
                <span>{news.date.toString()}</span>
              </div>
            </div>
          ))}
        </div> 
        <PaginationComponent />
      </div>
    </div>
  )
}
