import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col">
      <nav className="flex items-center justify-between py-2 container mx-auto">
        {/* image logo */}
        <div>
          <span className="font-bold text-base">Logo</span>
        </div>
        {/* image logo center */}
        <div>
          <span className="font-bold text-base">Image FMF 2025</span>
        </div>
        {/* Home */}
        <div>
          <span className="font-bold text-base">Home</span>
        </div>
      </nav>
      <div className="py-2 bg-indigo-700">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <Link href={'/'} className="text-white text-sm font-medium">FMF 2025</Link>
          <Link href={'/programs'} className="text-white text-sm font-medium">Programs</Link>
          <Link href={'/registration'} className="text-white text-sm font-medium">Registration</Link>
          <Link href={'/sponsorship'} className="text-white text-sm font-medium">Sponsorship</Link>
          <Link href={'/accomodation-and-tours'} className="text-white text-sm font-medium">Accomodation & Tours</Link>
          <Link href={'/information'} className="text-white text-sm font-medium">Information</Link>
        </div>
      </div>
    </div>
  )
}
