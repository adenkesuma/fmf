import BannerTitle from "@/components/banner-title"
import Image from "next/image"
import CurrencyImage from "@/public/images/currency.webp";
import WeatherImage from "@/public/images/weather.jpg";
import HelpImage from "@/public/images/help.png";
import Link from "next/link";

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Informasi Umum" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div>
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Mata uang
          </h2>
          <div className="flex items-center gap-10">
            <div className="rounded-xl w-1/3">
              <Image src={CurrencyImage} alt="currency image" className="rounded-xl"/>
            </div>
            <div className="w-2/3">
              <p className="text-sm mb-3">
                Mata uang Indonesia adalah Rupiah Indonesia (IDR), dengan simbol Rp. Rupiah diterbitkan dan diatur oleh Bank Indonesia, yang merupakan bank sentral negara ini. Rupiah tersedia dalam bentuk uang kertas dengan pecahan mulai dari Rp 1.000 hingga Rp 100.000, serta koin dari Rp 100 hingga Rp 1.000. Mata uang ini menjadi alat pembayaran yang sah untuk semua transaksi di Indonesia.
              </p>
              <p className="text-sm">
                Rupiah pertama kali diperkenalkan pada tahun 1946, menggantikan gulden Hindia Belanda. Desain uang kertasnya mencerminkan sejarah dan budaya Indonesia, dengan menampilkan pahlawan nasional, tarian tradisional, dan landmark penting. Uang ini juga dilengkapi fitur keamanan modern untuk mencegah pemalsuan. Per Januari 2025, nilai tukar 1 USD sekitar Rp 15.300, meskipun nilainya dapat berfluktuasi sesuai kondisi ekonomi.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Cuaca
          </h2>
          <div className="flex items-center gap-10">
            <div className="rounded-xl w-1/3">
              <Image src={WeatherImage} alt="weather image" className="rounded-xl"/>
            </div>
            <div className="w-2/3">
              <p className="text-sm mb-3">
                Indonesia memiliki iklim tropis dengan dua musim utama, yaitu musim hujan dan musim kemarau, yang dipengaruhi oleh angin muson. Suhu rata-rata berkisar antara 26-28°C sepanjang tahun, dengan tingkat kelembapan yang cukup tinggi. Musim hujan biasanya berlangsung dari Oktober hingga April, ditandai dengan curah hujan lebat, sementara musim kemarau berlangsung dari Mei hingga September dengan cuaca yang lebih kering dan cerah. Lokasinya yang berada di garis khatulistiwa membuat Indonesia memiliki sinar matahari yang melimpah sepanjang tahun.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Nomor Panggilan Darurat
          </h2>
          <div className="flex items-center gap-10">
            <div className="rounded-xl w-1/3">
              <Image src={HelpImage} alt="help image" className="rounded-xl"/>
            </div>
            <div className="w-2/3 flex flex-col gap-2">
              <span className="text-sm">Nomor Darurat Umum (Semua Layanan Darurat): 112 <br /></span>
              <span className="text-sm">Polisi: 110<br/></span>
              <span className="text-sm">Ambulans dan Gawat Darurat Medis: 119 atau 118<br/></span>
              <span className="text-sm">Pemadam Kebakaran (Fire and Rescue): 113<br/></span>
              <span className="text-sm">SAR Nasional (Bencana dan Kecelakaan): 115<br/></span>
              <span className="text-sm">Krisis dan Bantuan Kesehatan Jiwa (Layanan Konseling): 119 ext.8</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Website yang bisa berguna
          </h2>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color">
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>Kepolisian Negara Republik Indonesia (Polri)</span>
              </div>
              <div className="block text-sm w-1/5 p-2 border-l">
                <Link href={'https://polri.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Buka Website</Link>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>Kementerian Kesehatan Republik Indonesia</span>
              </div>
              <div className="block text-sm w-1/5 p-2 border-l">
                <Link href={' https://www.kemkes.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Buka Website</Link>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span>Badan Nasional Pencarian dan Pertolongan (BASARNAS)</span>
              </div>
              <div className="block text-sm w-1/5 p-2 border-l">
                <Link href={'https://www.basarnas.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Buka Website</Link>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-4/5 p-2">
                <span></span>Portal Layanan Panggilan Darurat 112
              </div>
              <div className="block text-sm w-1/5 p-2 border-l">
                <Link href={'https://layanan112.kominfo.go.id/'} className="py-1 px-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-600 text-white">Buka Website</Link>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
