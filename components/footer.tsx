import Image from "next/image";
import PDKILogo from "@/public/images/pdki.png";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center">
      <div className="bg-yellow-400 w-full py-3">
        <div className="container mx-auto px-6 gap-6 md:px-20 flex flex-col sm:flex-row justify-between">
          <div className="flex gap-1 items-center">
            <span className="tetext-xs md:text-sm">Organized By:</span>
            <div className="bg-white w-fit rounded-full p-2 ml-4">
              <Image src={PDKILogo} alt="logo pdki" className="w-24" />
            </div>
          </div>
          <div className="flex flex-col gap-1 tetext-xs md:text-sm">
            <span>
              Sekretariat:
            </span>
            <span>
              PDKI Jakarta Jl. Samratulangi no 29, Menteng-Jakarta Pusat
            </span>
          </div>
        </div>
      </div>
      <div className="w-full text-sm text-center text-white py-3 font-semibold bg-primary-color">&copy; Copyright FMF 2025</div>
    </footer>
  )
}
