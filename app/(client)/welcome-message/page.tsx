import BannerTitle from "@/components/banner-title"
import LeaderPerhimpunan from "@/public/images/isti.png";
import LeaderPanitia from "@/public/images/novana.jpeg";
import Image from "next/image";

export default function WelcomeMessage() {
  return (
    <div className="h-full">
      <BannerTitle message="Pesan Selamat Datang" /> 
      <div className="mx-auto container px-20 py-6 min-h-screen">
        <div>
          <h2 className="text-2xl font-medium text-primary-color">Kata Pengantar Ketua Perhimpunan Dokter Keluarga Indonesia</h2>
          <p className="text-sm mt-3">
            Puji syukur kita panjatkan kepada Tuhan Yang Maha Esa atas
            terselenggaranya Family Medicine Forum (FMF) 2025. Forum ini
            hadir sebagai wujud komitmen bersama untuk menguatkan peran
            kedokteran keluarga dalam mendukung transformasi layanan kesehatan di Indonesia.
          </p>
          <p className="text-sm mt-3">
            Kedokteran keluarga memiliki posisi strategis dalam menciptakan pelayanan kesehatan primer
            yang terintegrasi, berkelanjutan, dan berorientasi pada pasien, keluarga, serta komunitas. Dalam
            konteks upaya meningkatkan aksesibilitas dan kualitas layanan kesehatan, kolaborasi seluruh
            pemangku kepentingan menjadi elemen penting untuk menghasilkan inovasi dan solusi yang
            relevan dengan kebutuhan masyarakat.
          </p>
          <p className="text-sm mt-3">
            Melalui FMF 2025, kami berharap dapat mendorong terciptanya rekomendasi strategis, termasuk
            penguatan kesinambungan pelayanan melalui integrated care pathways, penyusunan model
            pembiayaan Sp.KKLP yang berkelanjutan, dan pengembangan mekanisme pelayanan yang lebih
            efektif. Semua ini bertujuan untuk memberikan kontribusi nyata dalam mendukung tercapainya
            sistem kesehatan nasional yang lebih baik
          </p>
          <p className="text-sm mt-3">
            Terima kasih kepada seluruh pihak yang telah berkontribusi dalam terselenggaranya FMF 2025.
            Semoga forum ini menjadi inspirasi dan langkah awal menuju perubahan positif bagi kedokteran
            keluarga dan pelayanan kesehatan di Indonesia.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <div className="w-40 h-40 bg-gray-200 rounded-xl flex items-center justify-center">
              <Image src={LeaderPerhimpunan} alt="leader FMF" className="rounded-xl w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">Dr. dr. Isti Ilmiati Fujiati, MSc.CM-FM, M.Pd.Ked. </h3>
              <p className="text-sm mt-2">Ketua PP PDKI</p>
              <span className="text-sm">Sp. KKLP, Subsp. COPC</span>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-8">
          <h2 className="text-2xl font-medium text-primary-color">Kata Pengantar Ketua Panitia Family Medicine Forum 2025</h2>
          <p className="text-sm mt-3">
            Dengan rasa syukur, kami panitia Family Medicine Forum (FMF)
            2025 mempersembahkan forum ini sebagai platform diskusi dan
            kolaborasi untuk memperkuat peran kedokteran keluarga dalam
            transformasi layanan kesehatan di Indonesia.
          </p>
          <p className="text-sm mt-3">
            FMF 2025 dirancang untuk menjawab berbagai tantangan dalam sistem kesehatan kita,
            khususnya di layanan primer. Fokus utama forum ini adalah memperkuat kesinambungan
            pelayanan melalui pendekatan terintegrasi, merancang sistem pembiayaan yang mendukung
            keberlanjutan layanan dokter keluarga spesialis (Sp.KKLP), dan menghadirkan inovasi untuk
            meningkatkan kualitas layanan primer.  
          </p>
          <p className="text-sm mt-3">
            Harapan kami, hasil dari forum ini dapat menjadi panduan implementasi yang nyata dan
            berdampak langsung pada pelayanan kesehatan masyarakat. Dukungan dari seluruh peserta,
            narasumber, dan pemangku kepentingan sangat kami hargai dalam mewujudkan tujuan besar
            ini.
          </p>
          <p className="text-sm mt-3">
            Kami mengucapkan terima kasih kepada semua pihak yang telah bekerja keras untuk
            menyukseskan FMF 2025. Semoga forum ini membawa manfaat besar bagi pengembangan
            kedokteran keluarga dan sistem kesehatan di Indonesia.
          </p>
          <div className="mt-10 flex items-center gap-6">
            <div className="w-40 h-40 bg-gray-200 rounded-xl flex items-center justify-center">
              <Image src={LeaderPanitia} alt="leader FMF" className="rounded-xl w-full h-full object-cover object-top" />
            </div>
            <div className="flex flex-col">
              <h3 className="font-medium">dr. Novana Perdana Putri, Sp.KKLP</h3>
              <p className="text-sm mt-2">Ketua Panitia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
