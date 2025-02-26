// import CarouselSpeakers from "@/components/carousel-speakers";
import Banner from "@/components/banner";
import Image from "next/image";
import LeaderPerhimpunan from "@/public/images/isti.png";
import LeaderPanitia from "@/public/images/novana.jpeg";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <Banner />
      <div className="px-6 lg:px-20 pb-6 mt-36 md:mt-32 container mx-auto">
        <div className="flex w-full flex-col lg:flex-row items-start gap-y-8 gap-x-14">
          {/* <div className="w-full">
            <h2 className="font-medium text-2xl mb-2 text-primary-color text-center md:text-left">Invited Speakers</h2>
            <CarouselSpeakers />
          </div> */}
          <div className="w-full">
            <h2 className="font-medium text-2xl text-primary-color text-center md:text-left">Important Date</h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-2 gap-4">
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-7">
                <div className="flex items-center justify-center bgi-yellow-400 w-24 h-24 rounded-full">
                  <svg className="size-16 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-xl text-center">Early Register</h4>
                <p className="text-base text-center text-primary-color">20 Januari 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-7">
                <div className="flex items-center justify-center bg-yellow-400 w-24 h-24 rounded-full">
                  <svg className="size-16 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-xl text-center">Regular Register</h4>
                <p className="text-base text-center text-primary-color">28 Januari 2025</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color text-center">Welcome Message</h2>
          <div className="border border-primary-color rounded-xl p-4 md:p-7">
            <div className="flex items-center mb-4">
              <div className="w-28 z-50 h-28 shrink-0 md:w-32 md:h-32 rounded-full flex items-center justify-center border-8 border-yellow-400">
                <Image src={LeaderPerhimpunan} alt="leader FMF" className="rounded-full w-full h-full object-cover object-top" />
              </div>
              <div className="flex -ml-10 md:-ml-3 flex-col bg-primary-color text-white md:px-8 pl-14 pr-2 py-2 md:py-3 rounded-r-xl md:rounded-r-full" >
                <h3 className="font-medium text-xs md:text-sm">Dr. dr. Isti Ilmiati Fujiati, MSc.CM-FM, M.Pd.Ked, Sp. KKLP, Subsp. COPC</h3>
                <p className="text-[10px]">Chair of Indonesia Association of Family Physicians</p>
              </div>
            </div>
            <p className="text-sm mt-3">
              We give thanks to God Almighty for holding the Family Medicine Forum (FMF) 2025. This forum exists as a form of joint commitment to strengthen the role of family medicine in supporting the transformation of health services in Indonesia. 
            </p>
            <p className="text-sm mt-3">
              Through FMF 2025, we hope to encourage the creation of strategic recommendations, including
              strengthening service continuity through integrated care pathways, developing models
              sustainable Sp.KKLP financing, and development of more service mechanisms
              effective. All of this aims to make a real contribution in supporting its achievement
              a better national health system 
            </p>
            <p className="text-sm mt-3">
              Thank you to all parties who have contributed to holding FMF 2025.
              Hopefully this forum will be an inspiration and the first step towards positive change for medicine
              family and health services in Indonesia. 
            </p>
            <Link href={'/welcome-message'} className="underline text-sm text-primary-color font-bold block mt-3">See Detail</Link>
          </div>
          <div className="border-t mt-4 border border-primary-color rounded-xl p-4 md:p-7">
            <div className="flex items-center mb-4">
              <div className="w-28 z-50 h-28 shrink-0 md:w-32 md:h-32 rounded-full flex items-center justify-center border-8 border-yellow-400">
                <Image src={LeaderPanitia} alt="leader FMF" className="rounded-full w-full h-full object-cover object-top" />
              </div>
              <div className="flex -ml-10 md:-ml-3 flex-col bg-primary-color text-white md:px-8 pl-14 pr-2 py-2 md:py-3 rounded-r-xl md:rounded-r-full" >
                <h3 className="font-medium text-xs md:text-sm">dr. Novana Perdana Putri, Sp.KKLP</h3>
                <p className="text-[10px]">Chair, Organizing Committee Family Medicine Forum 2025</p>
              </div>
            </div>
            <p className="text-sm mt-3">
              With gratitude, we, the committee of the Family Medicine Forum (FMF)
              2025 presents this forum as a discussion platform and
              collaboration to strengthen the role of family medicine in
              transformation of health services in Indonesia. 
            </p>
            <p className="text-sm mt-3">
              We would like to thank all those who have worked hard to
              make FMF 2025 a success. Hopefully this forum will bring great benefits for development
              family medicine and the health system in Indonesia. 
            </p>
            <Link href={'/welcome-message'} className="underline text-sm text-primary-color font-bold block mt-3">See Detail</Link>
          </div>
        </div> 
      </div>
    </div>
  );
}
