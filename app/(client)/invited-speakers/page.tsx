import BannerTitle from "@/components/banner-title"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import SriAndarini from '@/public/images/sri-andarini.jpeg'
import AliGhufron from '@/public/images/ghufron.jpg'
import Mariatul from '@/public/images/mariatul-fadilah.png'
import BudiGunadi from '@/public/images/budi-gunadi.png'
import WiraHartiti from '@/public/images/wira-hartati.jpg'
import Trevino from '@/public/images/trevino.jpg'
import SitiNadia from '@/public/images/siti-nadia.jpg'
import RezaAditya from '@/public/images/reza-aditya.jpg'
import Fitriana from '@/public/images/fitriana.png'
import AliNapih from '@/public/images/ali-napih.jpeg'
import Retno from '@/public/images/retno-asti.jpg'
import Klara from '@/public/images/klara.jpg'
import Isti from '@/public/images/isti.png'
import Ichsan from '@/public/images/ichsan.jpeg'
import Dhanasari from '@/public/images/dhanasari.png'
import ChooBok from '@/public/images/choo-bok.png'
import Anggreani from '@/public/images/anggreani.jpeg'
import Adria from '@/public/images/adria.png'
import Alamsyah from '@/public/images/alamsyah.jpg'
import Image from "next/image"

export default function InvitedSpeakers() {
  const speakers = [
    {url: SriAndarini, name: 'Prof.Dr.dr. Sri Andarini, M.Kes.,Sp.KKLP.,SubSp FOMC', title: 'Diagnosis Komunitas, Gizi Komunitas, Statistik, Metode Penelitian', desc: 'Guru Besar'},
    {url: AliGhufron, name: 'Prof. Dr. Ali Ghufron Mukti, M.Sc., Ph.D., AAK', title: 'title of conference 2', desc: 'Ceo Wa'},  
    {url: Mariatul, name: 'Prof. (HC), dr. Mariatul Fadilah, MARS, PhD, Sp.KKLP, Subsp. COPC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: BudiGunadi, name: 'Ir. Budi Gunadi Sadikin, CHFC, CLU', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: WiraHartiti, name: 'dr. Wira Hartiti, M.Epid', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Trevino, name: 'Dr. Trevino Aristarkus Pakasi,  MS, PhD, SpKKLP SubSp FOMC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: SitiNadia, name: 'dr. Siti Nadia Tarmizi, M.Epid', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: RezaAditya, name: 'dr. Reza Aditya Arpandy, BMedSc,Sp.N.Subsp.NIOO(K)', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Fitriana, name: 'dr. Fitriana Murriya Ekawati, MPHC, Ph.D, Sp.KKLP, Subsp. FOMC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: AliNapih, name: 'Dr. dr., Ali Napiah Nasution, MKT, MKM, Sp.KKLP, Subsp.FOMC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Retno, name: 'Dr. dr. Retno Asti Werdhani, M.Epid., Sp.KKLP, Subsp. FOMC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Klara, name: 'Dr. dr. Klara Yuliarti, Sp.A(K)', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Isti, name: 'Dr. dr. Isti Ilmiati Fujiati, MSc.CM-FM, M.Pd.Ked., Sp.KKLP, Subsp.COPC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Ichsan, name: 'Dr. dr. Ichsan, M.Sc., SpKKLP., Subsp.FOMC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Dhanasari, name: 'Dr. dr. Dhanasari Vidiawati, MSc.CM-FM, Sp.KKLP, Subsp. COPC', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: ChooBok, name: 'Dr. Choo Bok Ai MB CHB MRCP FPCR FAMS', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Anggreani, name: 'dr. Anggraeni Wendy Astuti, SpJP, Subsp.P.R.Kv (K)', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Adria, name: 'dr. Adria Rusli, Sp.P', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
    {url: Alamsyah, name: 'Dr. dr. Muhammad Alamsyah Aziz, SpOG, Subsp.KFm, Subs.TI(K), M.Kes, Int. Aff. RANZCOG, FMAS', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
  ];

  return (
    <div className="h-full">
      <BannerTitle message="Invited Speakers" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div className="grid grid-cols-2 gap-6">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="border border-primary-color flex items-center rounded-xl w-full h-full">
              <CardHeader>
                <div className="h-40 w-40 bg-gray-300 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image src={speaker.url} alt={speaker.name} className="bg-cover bg-bottom" />
                </div>
              </CardHeader>
              <CardContent className="w-full">
                {/* <div>
                  <h3 className="font-semibold text-xl">{speaker.title}</h3>
                </div> */}

                <div className="mt-4 border-l-4 border-primary-color pl-3 bg-blue-100 w-full rounded-r-lg py-1">
                  <h4 className="text-base font-semibold">{speaker.name}</h4>
                  <p className="text-xs font-normal slide-in-from-top-1">{speaker.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
