import CarouselSpeakers from "@/components/carousel-speakers";
import ImageSlider from "@/components/image-slider";

export default function Home() {
  return (
    <div className="h-full">
      <ImageSlider />
      <div className="py-4 container mx-auto grid grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="font-bold text-xl mb-2">Daftar Pembicara</h2>
          <CarouselSpeakers />
        </div>
        <div>
          <h2 className="font-bold text-xl mb-2">Tanggal Penting</h2>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="border border-gray-400 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute -left-8 top-0 -rotate-45 w-14 h-10 bg-black"></div>
              <div className="absolute top-1 left-2 text-white font-bold">1</div>
              <div className="flex items-center justify-center">
                <svg className="size-10" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                </svg>
              </div>
              <h4 className="mt-2 font-semibold text-center">Pendaftaran Awal</h4>
              <p className="text-sm text-center">20 Januari 2025</p>
            </div>
            <div className="border border-gray-400 rounded-xl p-4 relative overflow-hidden">
              <div className="absolute -left-8 top-0 -rotate-45 w-14 h-10 bg-black"></div>
              <div className="absolute top-1 left-2 text-white font-bold">2</div>
              <div className="flex items-center justify-center">
                <svg className="size-10" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                </svg>
              </div>
              <h4 className="mt-2 font-semibold text-center">Pendaftaran Regular</h4>
              <p className="text-sm text-center">28 Januari 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
