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
      <div className="container px-4 lg:px-20 mx-auto flex items-center justify-between py-2">
        <Link href={'/'}>
          <Image src={Logo} alt="logo" className="w-24"/>
        </Link>
        <Link className="text-sm font-medium text-white hidden lg:block" href={'/'}>Home</Link>
        {/* hamburger menu */}
        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <div>
                <svg data-slot="icon" fill="none" strokeWidth="1.5" className="size-6 text-white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white flex flex-col p-2">
              <Link href={'/'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Halaman Utama</Link>
              <Link href={'/welcome-message'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Pesan Selamat Datang</Link>
              <Link href={'/overview'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Ringkasan</Link>
              <Link href={'/organizing-commitee'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Panitia Penyelenggara</Link>
              <Link href={'/program-at-glance'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Sekilas Tentang Program</Link> 
              <Link href={'/invited-speakers'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Pembicara Yang Di Undang</Link>
              <Link href={'/registration'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Pendaftaran</Link>
              <Link href={'/sponsorship'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Sponsor</Link>
              <Link href={'/accomodations'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Akomodasi</Link>
              <Link href={'/venue'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Lokasi</Link>
              <Link href={'/jakarta-indonesia'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Jakarta, Indonesia</Link>
              <Link href={'/transportation'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Transportasi</Link>
              <Link href={'/general-information'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Informasi Umum</Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="bg-yellow-400">
        <div className="container px-4 lg:px-20 mx-auto hidden lg:flex justify-center items-center gap-20">
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-black text-sm font-medium py-2 flex items-center gap-1">
                <span>FMF 2025</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
              <DropdownMenuItem>
                <Link href={'/welcome-message'} className="text-sm font-medium">Welcome Message</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/overview'} className="text-sm font-medium">Overview</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/organizing-commitee'} className="text-sm font-medium">Organizing Committee</Link> 
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-black text-sm font-medium py-2 flex items-center gap-1">
                <span>Program</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
              <DropdownMenuItem>
                <Link href={'/program-at-glance'} className="text-sm font-medium">Program at a Glance</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/invited-speakers'} className="text-sm font-medium">Invited Speakers</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={'/registration'} className="text-black text-sm font-medium py-2">Pendaftaran</Link>
          <Link href={'/sponsorship'} className="text-black text-sm font-medium py-2">Sponsor</Link>
          <Link href={'/accomodations'} className="text-black text-sm font-medium">Akomodasi</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-black text-sm font-medium py-2 flex items-center gap-1">
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
                <Link href={'/jakarta-indonesia'} className="text-sm font-medium">Jakarta, Indonesia</Link>
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
