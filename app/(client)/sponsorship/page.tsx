import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import BannerSponsor from "@/public/images/sponsor-banner.png";

export default function Sponsorship() {
  return (
    <div className="h-full">
      <BannerTitle message="Sponsorship" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">About FMF</h2>
        <div className="bg-blue-500/10 mb-8 p-4 rounded-xl">
          <p className="text-sm">
            FMF is an organization operating in the fields of education and medicine. 
          </p>
        </div>

        <h2 className="font-medium text-2xl mb-2 text-primary-color">Why You Should Sponsor FMF June 2025</h2>
        <ul className="flex flex-col gap-2">
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">Global Exposure</span> : FMF 2025 menghadirkan peserta dari berbagai negara, menjadikannya platform sempurna untuk memperluas jangkauan merek Anda di pasar global. Sponsor akan mendapatkan eksposur internasional melalui berbagai saluran, termasuk media sosial, publikasi, dan siaran langsung.
            </p>
          </li>
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">Networking Opportunities</span> : Sebagai sponsor, Anda memiliki kesempatan eksklusif untuk bertemu dan berinteraksi dengan para pemimpin industri, pengusaha, dan inovator. Jalin hubungan bisnis yang berharga dalam suasana profesional dan produktif.
            </p>
          </li>
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600"> 
              <span className="text-primary-color font-medium">Brand Visibility</span> : Tingkatkan kesadaran merek Anda dengan menampilkan logo dan nama perusahaan di semua materi promosi acara, termasuk banner, situs web, dan media publikasi. Jadikan merek Anda sebagai pusat perhatian di antara audiens yang relevan.
            </p>
          </li>
          <li className="flex gap-3">
            <span>•</span>
            <p className="text-sm text-gray-600">
              <span className="text-primary-color font-medium">Customized Engagement</span> : Dapatkan peluang untuk menciptakan pengalaman unik dengan audiens melalui inisiatif yang disesuaikan, seperti presentasi, booth interaktif, atau aktivitas sponsor yang selaras dengan nilai merek Anda. Tingkatkan keterlibatan langsung dengan peserta untuk meninggalkan kesan mendalam.
            </p>
          </li>
        </ul>

        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Explore Sponsorship Opportunities
        </h2>
        <div className="flex gap-6 items-center">
          <div className="w-60 h-40 rounded-xl">
            <Image src={BannerSponsor} alt="banner sponsor" className="rounded-xl w-full h-full object-cover" />
          </div>
          <div className="w-fit">
            <p className="text-sm">
              Ambil peluang ini untuk menjadi bagian dari keluarga kedokteran. 
              Untuk informasi lebih detail tentang pilihan sponsorship, silahkan hubungi sales manager dari sponsorship untuk FMF June 2025. 
            </p>
            <span className="mt-4 block font-medium">Qori Hasibuan Napitupulu | Sponsorship & Exhibits Sales Manager</span>
            <span className="text-xs">Email: qori@gmail.com</span>
            <span className="text-xs block">No: +62 8323 4213 4322</span>
          </div>
        </div>
      </div>
    </div>
  )
}
