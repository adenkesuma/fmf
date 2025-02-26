import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import CurrencyImage from "@/public/images/currency.webp";
import WeatherImage from "@/public/images/weather.jpg";
import HelpImage from "@/public/images/help.png";
import Link from "next/link";

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="General Information" /> 
      <div className="mx-auto container px-6 lg:px-20 py-10 min-h-screen">
        <div>
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Currency
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="rounded-xl w-full md:w-1/3">
              <Image src={CurrencyImage} alt="currency image" className="rounded-xl"/>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-sm mb-3">
                The currency of Indonesia is the Indonesian Rupiah (IDR), with the symbol Rp. The Rupiah is issued and regulated by Bank Indonesia, the {"country's"} central bank. The Rupiah is available in banknotes ranging from Rp 1,000 to Rp 100,000, as well as coins from Rp 100 to Rp 1,000. It is the legal tender for all transactions in Indonesia.
              </p>
              <p className="text-sm">
                The Rupiah was first introduced in 1946, replacing the Dutch East Indies guilder. The banknote designs reflect {"Indonesia's"} history and culture, featuring national heroes, traditional dances, and important landmarks. The currency also incorporates modern security features to prevent counterfeiting. As of January 2025, the exchange rate is approximately 1 USD = Rp 15,300, although the value may fluctuate depending on economic conditions.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Weather
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="rounded-xl w-full md:w-1/3">
              <Image src={WeatherImage} alt="weather image" className="rounded-xl"/>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-sm mb-3">
                Indonesia has a tropical climate with two main seasons: the rainy season and the dry season, influenced by monsoon winds. The average temperature ranges between 26-28°C throughout the year, with relatively high humidity. The rainy season typically lasts from October to April, characterized by heavy rainfall, while the dry season runs from May to September with drier and sunnier weather. Its location along the equator ensures abundant sunshine year-round.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Emergency Contact Numbers
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="rounded-xl w-full md:w-1/3">
              <Image src={HelpImage} alt="help image" className="rounded-xl"/>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-2">
              <span className="text-sm">General Emergency Number (All Emergency Services): 112 <br /></span>
              <span className="text-sm">Police: 110<br/></span>
              <span className="text-sm">Ambulance and Medical Emergency: 119 or 118<br/></span>
              <span className="text-sm">Fire and Rescue: 113<br/></span>
              <span className="text-sm">National Search and Rescue (Disaster and Accidents): 115<br/></span>
              <span className="text-sm">Mental Health Crisis and Support (Counseling Services): 119 ext.8</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Useful Websites
          </h2>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color">
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>Indonesian National Police (Polri)</span>
              </div>
              <div className="block text-sm w-48 p-2 border-l">
                <Link href={'https://polri.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Visit Website</Link>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>Ministry of Health of the Republic of Indonesia</span>
              </div>
              <div className="block text-sm w-48 p-2 border-l">
                <Link href={' https://www.kemkes.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Visit Website</Link>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>National Search and Rescue Agency (BASARNAS)</span>
              </div>
              <div className="block text-sm w-48 p-2 border-l">
                <Link href={'https://www.basarnas.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Visit Website</Link>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>Emergency Call 112 Service Portal</span>
              </div>
              <div className="block text-sm w-48 p-2 border-l">
                <Link href={'https://layanan112.kominfo.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Visit Website</Link>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
