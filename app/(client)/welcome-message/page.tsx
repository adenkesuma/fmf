import Image from "next/image";
import BannerBackground from "@/public/images/banner-background.png";

export default function WelcomeMessage() {
  return (
    <div className="h-full">
      <div className="relative">
        <Image src={BannerBackground} alt="banner background" className="h-32" />
        <div className="absolute left-1/2 top-12 -translate-x-1/2 flex items-end gap-2">
          <h1 className="text-2xl font-medium text-primary-color">Pesan Selamat Datang</h1>
          <div className="w-2 h-2 bg-yellow-400"></div>
        </div>
      </div>
      <div className="mx-auto container px-20 py-6 h-screen">
        <h2 className="text-lg font-medium text-gray-500">Kepada Rekan Sejawat dan Peserta yang Terhormat</h2>
        <p className="text-sm mt-3">
          Selamat datang di halaman kami yang didedikasikan untuk dunia kedokteran! Kami sangat senang menyambut Anda, para profesional medis, akademisi, peneliti, dan semua pihak yang memiliki minat besar dalam bidang kesehatan.
        </p>
        <p className="text-sm mt-3">
          Halaman ini dirancang sebagai sumber informasi terpercaya yang menyajikan berita terkini, inovasi medis, penelitian terbaru, dan berbagai wawasan berharga lainnya. Kami berharap dapat menjadi jembatan untuk berbagi pengetahuan, memperkuat kolaborasi, serta mendukung kemajuan bersama di dunia kedokteran.
        </p>
        <p className="text-sm mt-3">
          Terima kasih atas kunjungan dan partisipasi Anda. <br /> Bersama-sama, kita dapat terus memperjuangkan kesehatan dan kesejahteraan masyarakat
        </p>
        <p className="text-sm mt-3">
          Salam hangat,<br />
          FMF 2025
        </p>

        <div className="mt-10 flex items-center gap-6">
          <div className="w-40 h-40 bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-xs block">Head of FMF</span>
          </div>
          <div className="flex flex-col">
            <h3 className="font-medium">Sung sunwoo, MD. MPH. PhD</h3>
            <p className="text-sm mt-2">Chair, Organizing Commitee</p>
            <span className="text-sm">FMF, Indonesia Regional Conference 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}
