import BannerTitle from "@/components/banner-title"
import LeaderPerhimpunan from "@/public/images/isti.png";
import LeaderPanitia from "@/public/images/novana.jpeg";
import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <div className="h-full">
      <BannerTitle message="Welcome Message" /> 
      <div className="mx-auto container px-4 lg:px-20 py-6 min-h-screen">
        <div>
          <div className="flex items-center mb-4">
            <div className="shrink-0 w-28 z-50 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center border-8 border-yellow-400">
              <Image src={LeaderPerhimpunan} alt="leader FMF" className="rounded-full w-full h-full object-cover object-top" />
            </div>
            <div className="flex -ml-5 flex-col bg-primary-color text-white px-8 py-3 rounded-r-full" >
              <h3 className="font-medium text-sm md:text-base">Dr. dr. Isti Ilmiati Fujiati, MSc.CM-FM, M.Pd.Ked, Sp. KKLP, Subsp. COPC</h3>
              <p className="text-sm hidden md:block">Chair of Indonesia Association of Family Physicians</p>
            </div>
          </div>

          <h2 className="text-lg md:text-2xl font-medium text-primary-color">
            Foreword by the Chairman of the Indonesian Family Doctors Association
          </h2>
          <p className="text-sm mt-3">
            We give thanks to God Almighty for holding the Family Medicine Forum (FMF) 2025. This forum exists as a form of joint commitment to strengthen the role of family medicine in supporting the transformation of health services in Indonesia. 
          </p>
          <p className="text-sm mt-3">
            Family medicine has a strategic position in creating primary health services
            which is integrated, sustainable and oriented towards patients, families and communities. In
            context of efforts to improve accessibility and quality of health services, collaboration throughout
            Stakeholders are an important element in producing innovation and solutions
            relevant to community needs.  
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
        </div>
        <div className="border-t mt-12 pt-8">
          <div className="flex items-center mb-4">
            <div className="shrink-0 w-28 z-50 h-28 md:w-40 md:h-40 rounded-full flex items-center justify-center border-8 border-yellow-400">
              <Image src={LeaderPanitia} alt="leader FMF" className="rounded-full w-full h-full object-cover object-top" />
            </div>
            <div className="flex -ml-5 flex-col bg-primary-color text-white px-8 py-3 rounded-r-full" >
              <h3 className="font-medium text-sm md:text-base">dr. Novana Perdana Putri, Sp.KKLP</h3>
              <p className="text-sm hidden md:block">Chair, Organizing Committee Family Medicine Forum 2025</p>
            </div>
          </div>
          <h2 className="text-lg md:text-2xl font-medium text-primary-color">
            Foreword by Chair of the 2025 Family Medicine Forum Committee
          </h2>
          <p className="text-sm mt-3">
            With gratitude, we, the committee of the Family Medicine Forum (FMF)
            2025 presents this forum as a discussion platform and
            collaboration to strengthen the role of family medicine in
            transformation of health services in Indonesia. 
          </p>
          <p className="text-sm mt-3">
            FMF 2025 is designed to address various challenges in our health system,
            especially in primary care. The main focus of this forum is to strengthen sustainability
            services through an integrated approach, designing a supportive financing system
            sustainability of specialist family doctor services (Sp.KKLP), and presenting innovations for
            improve the quality of primary services. 
          </p>
          <p className="text-sm mt-3">
            We would like to thank all those who have worked hard to
            make FMF 2025 a success. Hopefully this forum will bring great benefits for development
            family medicine and the health system in Indonesia. 
          </p>
        </div>
      </div>
    </div>
  )
}
