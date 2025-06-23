// import CarouselSpeakers from "@/components/carousel-speakers";
import Banner from "@/components/banner";
import Image from "next/image";
import LeaderPerhimpunan from "@/public/images/isti.png";
import LeaderPanitia from "@/public/images/novana.jpeg";
import Link from "next/link";

import Image1 from "@/public/images/1.png";
import Image2 from "@/public/images/2.png";
import Image3 from "@/public/images/3.png";
import Image4 from "@/public/images/4.png";
import Image5 from "@/public/images/5.png";
import Image6 from "@/public/images/6.png";
import Image7 from "@/public/images/7.png";
import Image8 from "@/public/images/8.png";
import Image9 from "@/public/images/9.png";
import Image10 from "@/public/images/10.jpeg";
import Image11 from "@/public/images/11.png";
import Image12 from "@/public/images/12.png";
import Image13 from "@/public/images/13.png";
import Image14 from "@/public/images/14.png";
import Image15 from "@/public/images/15.png";
import Image16 from "@/public/images/16.png";
import Image17 from "@/public/images/17.jpeg";
import Image18 from "@/public/images/18.png";
import Image19 from "@/public/images/19.png";
import Image20 from "@/public/images/20.png";


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
            <h2 className="font-medium text-2xl text-primary-color text-center">Important Date</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 gap-4">
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Abstract Acceptance Deadline</h4>
                <p className="text-base text-center text-primary-color">15 Mei 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Short Video Competition + Photography Competition Submission Deadline</h4>
                <p className="text-base text-center text-primary-color">15 Juni 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Early Bird Last Date</h4>
                <p className="text-base text-center text-primary-color">31 Mei 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">( 12th National Congress of the Indonesian Family Doctors Association )</h4>
                <p className="text-base text-center text-primary-color">26 Juni 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                 <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Workshop + Oral & Poster Presentation</h4>
                <p className="text-base text-center text-primary-color">27 Juni 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Opening, Plenary, Simposium, Inagurasi, Awarding Night & Gala Dinner</h4>
                <p className="text-base text-center text-primary-color">28 Juni 2025</p>
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

        <section className="py-6">
      <h2 className="font-medium text-2xl mb-2 text-primary-color text-center">Our Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-center">
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image1} alt="Sponsor 1" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image2} alt="Sponsor 2" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image3} alt="Sponsor 3" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image4} alt="Sponsor 4" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image5} alt="Sponsor 5" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image6} alt="Sponsor 6" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image7} alt="Sponsor 7" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image8} alt="Sponsor 8" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image9} alt="Sponsor 9" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image10} alt="Sponsor 10" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image11} alt="Sponsor 11" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image12} alt="Sponsor 12" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image13} alt="Sponsor 13" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image14} alt="Sponsor 14" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image15} alt="Sponsor 15" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image16} alt="Sponsor 16" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image17} alt="Sponsor 17" fill className="object-contain" />
        </div>
         <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image18} alt="Sponsor 18" fill className="object-contain" />
        </div>
         <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image19} alt="Sponsor 19" fill className="object-contain" />
        </div>
        <div className="relative w-full h-24 sm:h-28 md:h-32 lg:h-36">
          <Image src={Image20} alt="Sponsor 20" fill className="object-contain" />
        </div>
      </div>
    </section>
      </div>
    </div>
  );
}
