import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
          <Link href={'/'} className="font-bold text-base">Home</Link>
        </div>
      </nav>
      <div className="bg-black">
        <div className="container mx-auto flex justify-between items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="text-white text-sm font-medium py-2">FMF 2025</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={'/welcome-message'} className="text-sm font-medium">Pesan Selamat Datang</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/overview'} className="text-sm font-medium">Ringkasan</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/organizing-commite'} className="text-sm font-medium">Panitia Penyelenggara</Link> 
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/news-and-notices'} className="text-sm font-medium">Berita & Pemberitahuan</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="text-white text-sm font-medium py-2">Program</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={'/program-at-glance'} className="text-sm font-medium">Sekilas Tentang Program</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/invited-speakers'} className="text-sm font-medium">Pembicara Yang Di Undang</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/social-programs'} className="text-sm font-medium">Program Sosial</Link> 
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={'/registration'} className="text-white text-sm font-medium py-2">Registration</Link>
          <Link href={'/sponsorship'} className="text-white text-sm font-medium py-2">Sponsorship</Link>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="text-white text-sm font-medium py-2">Akomodasi & Wisata</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={'/accomodations'} className="text-sm font-medium">Akomodasi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/tours'} className="text-sm font-medium">Wisata</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="text-white text-sm font-medium py-2">Informasi</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={'/venue'} className="text-sm font-medium">Lokasi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/jakarta-and-indonesia'} className="text-sm font-medium">Jakarta, Indonesia</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/visa'} className="text-sm font-medium">Visa</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/transportation'} className="text-sm font-medium">Transportasi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/general-information'} className="text-sm font-medium">Informasi Umum</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
