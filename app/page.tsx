import CarouselSpeakers from "@/components/carousel-speakers";
import Banner from "@/components/banner";
import Image from "next/image";
import PlayImage from "@/public/images/play-video-image.png";
import medicalNews from "@/const/news";

export default function Home() {
  return (
    <div className="h-full">
      <Banner />
      <div className="px-20 pb-6 container mx-auto grid grid-cols-2 gap-14">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-medium text-2xl mb-2 text-primary-color">Daftar Pembicara</h2>
            <CarouselSpeakers />
          </div>
          <div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-t-xl py-3 px-4">
              <span className="text-lg font-medium text-primary-color">Ikuti Terus Berita Terbaru Kami</span>
            </div>
            <div className="border-x border-b border-primary-color px-4 py-4 rounded-b-xl">
              <h2 className="font-medium text-2xl mb-4 text-primary-color">Berita & Pemberitahuan</h2>
              <div className="flex flex-col gap-4">
                {medicalNews.map((news) => (
                  <div key={news.date} className="relative border-b flex items-center gap-8 justify-between">
                    <h4 className="text-basae w-5/6 truncate text-ellipsis">{news.title}</h4>
                    <div className="w-1/6 text-gray-500 text-xs">{news.date.toString()}</div>

                    {news.tags.includes('Cancer') && (
                      <div className="absolute -top-4 right-2 w-fit px-2 rounded-xl text-xs bg-gradient-to-r from-yellow-400 to-orange-600 text-white">New</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="font-medium text-2xl text-primary-color">Tanggal Penting</h2>
            <div className="w-full grid grid-cols-2 mt-2 gap-4">
              <div className="flex items-center justify-center flex-col border border-primary-color rounded-xl p-4">
                <div className="flex items-center justify-center bg-yellow-400 w-16 h-16 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-center">Pendaftaran Awal</h4>
                <p className="text-sm text-center text-black/60">20 Januari 2025</p>
              </div>
              <div className="flex items-center justify-center flex-col border border-primary-color rounded-xl p-4">
                <div className="flex items-center justify-center bg-yellow-400 w-16 h-16 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-center">Pendaftaran Regular</h4>
                <p className="text-sm text-center text-black/60">28 Januari 2025</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-yellow-400 text-primary-color w-fit rounded-xl py-1 px-4">Selamat Datang Di</div>
            <h2 className="text-primary-color font-medium text-3xl ml-14 mt-2">FMF 2025</h2>
            <div className="w-full mt-2">
              <Image src={PlayImage} alt="play image" className="w-full object-cover bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
