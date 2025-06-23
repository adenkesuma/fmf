import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import BannerSponsor from "@/public/images/exhibit.png";


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

export default function Sponsorship() {
  return (
    <div className="h-full">
      <BannerTitle message="Sponsorship" /> 
      <div className="mx-auto container px-6 lg:px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">Contribute to the Success of FMF PDKI 2025 as a Sponsor</h2>
        <div className="bg-blue-500/10 mb-8 p-4 rounded-xl">
          <p className="text-sm">
            Our sincere appreciation goes to the following companies and institutions for their support
          </p>
        </div>

        <h2 className="font-medium text-2xl mb-2 text-primary-color">Sponsorship Contact Information:</h2>

        <ul className="flex flex-col gap-2">
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">
                +62 811-2024-528 (Maula)
              </span> 
            </p>
          </li>
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">
                +62 811-142-603 (Dr. dr. Tan Suyono, Sp.KKLP)
              </span> 
            </p>
          </li>
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">
                +62 853-6416-6069 (dr. Yetti Rohayati, Sp.KKLP)
              </span> 
            </p>
          </li>
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">
                +62 813-2282-9893 ( dr. Susi Oktowaty,MKM, SpKKLP, Subsp, FOMC)
              </span> 
            </p>
          </li>
        </ul>

        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Exhibit at FMF PDKI 2025
        </h2>
        <div className="w-full h-full rounded-xl border-2">
          <Image src={BannerSponsor} alt="banner sponsor" className="rounded-xl w-full h-full object-cover" />
        </div>
        <h2 className="font-medium mt-8 text-xl mb-2 text-primary-color">How can sponsoring this event support your business objectives? or The benefits of sponsoring</h2>
        <div className="flex flex-col">
          <h4 className="text-lg text-medium">Extensive Brand Exposure</h4>
          <p className="text-sm">
            Sponsoring FMF 2025 ensures high visibility for your company by featuring your logo on official event materials, websites, banners, and promotional content. This allows you to reach a wide audience of healthcare professionals, policymakers, and industry leaders while reinforcing your brand’s presence in the medical community.
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-lg text-medium">Direct Engagement with Medical Professionals</h4>
          <p className="text-sm">
            This sponsorship provides a unique opportunity to connect directly with family medicine specialists, primary care providers, and healthcare stakeholders through symposiums, workshops, and exhibitions, enabling your company to showcase its products, services, and innovations to a highly targeted and influential audience.
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-lg text-medium">Exclusive Marketing Opportunities</h4>
          <p className="text-sm">
            By becoming a sponsor, your company gains access to premium promotional benefits, such as the ability to display advertisements during scientific sessions, feature branding in key event spaces, and even deliver a dedicated presentation during the prestigious Gala Dinner, Ensuring maximum exposure and engagement with potential clients and partners.
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-lg text-medium">Corporate Social Responsibility & Industry Contribution</h4>
          <p className="text-sm">
            Supporting this event demonstrates your company’s commitment to advancing healthcare in Indonesia, as it plays a crucial role in promoting medical innovation, improving primary care services, and contributing to discussions on integrated healthcare solutions, chronic disease management, and sustainable medical practices.
          </p>
        </div>
        <div className="flex flex-col mt-2">
          <h4 className="text-lg text-medium">Networking & Business Development</h4>
          <p className="text-sm">
            As a sponsor, you will have the chance to establish valuable connections with key decision-makers, policymakers, healthcare professionals, and potential business partners, while also staying ahead of industry trends and gaining insights into the latest medical advancements that can help shape the future of healthcare.
          </p>
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
  )
}
