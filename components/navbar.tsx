import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Navbar() {
  return (
    <div className="bg-primary-color">
      <div className="container px-20 mx-auto flex items-center justify-between py-2">
        <Image src={Logo} alt="logo" className="w-24"/>
        <div className="flex justify-between items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-white text-sm font-medium py-3 flex items-center gap-1">
                <span>FMF 2025</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
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
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-white text-sm font-medium py-3 flex items-center gap-1">
                <span>Program</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
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
          <Link href={'/registration'} className="text-white text-sm font-medium py-3">Pendaftaran</Link>
          <Link href={'/sponsorship'} className="text-white text-sm font-medium py-3">Sponsor</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="outline-none border-none text-white text-sm font-medium py-3 flex items-center gap-1">
                <span>Akomodasi & Wisata</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
              <DropdownMenuItem>
                <Link href={'/accomodations'} className="text-sm font-medium">Akomodasi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/tours'} className="text-sm font-medium">Wisata</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-white text-sm font-medium py-3 flex items-center gap-1">
                <span>Informasi</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
              <DropdownMenuItem>
                <Link href={'/venue'} className="text-sm font-medium">Lokasi</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/jakarta-and-indonesia'} className="text-sm font-medium">Jakarta, Indonesia</Link>
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
        <Link className="text-sm font-medium text-white" href={'/'}>Home</Link>
      </div>
    </div>
  )
}
