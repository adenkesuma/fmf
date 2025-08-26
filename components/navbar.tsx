import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image";
import Logo from "@/public/images/logo.png";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Navbar() {
  return (
    <div className="bg-primary-color">
      <div className="container px-4 lg:px-20 mx-auto flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <Link href={'/'}>
            <Image src={Logo} alt="logo" className="w-28"/>
          </Link>
          <div className="rounded-xl px-2 py-1 text-xs font-semibold text-yellow-500 border border-yellow-500">Official Website</div>
        </div>
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
              <Link href={'/'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Home</Link>
              <Link href={'/welcome-message'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Welcome Message</Link>
              <Link href={'/overview'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Overview</Link>
              <Link href={'/organizing-commitee'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Organizing Committee</Link>
              <Link href={'/program-at-glance'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Program at a Glance</Link> 
              <Link href={'/invited-speakers'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Invited Speakers</Link>
              <div className="text-sm font-medium hover:bg-white/20 p-2 rounded-lg">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div>Abstract</div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Abstract</AlertDialogTitle>
                      <span>
                        Abstract submission is now closed. We appreciate your participation and support.
                      </span>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel className="rounded-xl py-2">
                        Back
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <Link href="/short-video-competition" className="text-sm font-medium hover:bg-white/20 p-2 rounded-lg">
                Short Video Competition
              </Link>
              <Link href="/photography-competition" className="text-sm font-medium hover:bg-white/20 p-2 rounded-lg">
                Photography Competition
              </Link>
              <Link href="/awarding" className="text-sm font-medium hover:bg-white/20 p-2 rounded-lg">
                Awarding  
              </Link>
              <Link href={'/registration'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Registration</Link>
              <Link href={'/scientific-schedule'} className="hover:bg-white/20 p-2 rounded-lg shrink-0 text-sm font-medium">Scientific Schedule</Link>
              <Link href={'/sponsorship'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Sponsorship</Link>
              <Link href={'/accomodations'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Accomodation</Link>
              <Link href={'/venue'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Venue</Link>
              <Link href={'/jakarta-indonesia'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Jakarta, Indonesia</Link>
              <Link href={'/transportation'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">Transportation</Link>
              <Link href={'/general-information'} className="hover:bg-white/20 p-2 rounded-lg text-sm font-medium">General Information</Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="bg-yellow-400">
        <div className="container px-4 lg:px-20 mx-auto hidden lg:flex justify-between items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="shrink-0 outline-none border-none">
              <div className="text-black text-sm font-medium py-2 flex items-center gap-1">
                <span>FMF 2025</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>
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
              <DropdownMenuItem>
                <Link href={'/scientific-schedule'} className="text-sm font-medium">Scientific Schedule</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <div className="text-black shrink-0 text-sm font-medium py-2 flex items-center gap-1">
                <span className="shrink-0 block">Awards & Competitions</span>
                <svg className="size-4 block shrink-0" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
              <div className="w-full flex">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <div className="text-sm font-medium py-1.5 px-2 rounded-md hover:bg-white hover:text-black text-left w-[200px]">Abstract</div>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Abstract</AlertDialogTitle>
                      <span>
                        Abstract submission is now closed. We appreciate your participation and support.
                      </span>
                    </AlertDialogHeader>

                    <AlertDialogFooter>
                      <AlertDialogCancel className="rounded-xl py-2">
                        Back
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
              <DropdownMenuItem>
                <Link href="/short-video-competition" className="text-sm font-medium">
                  Short Video Competition
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/photography-competition" className="text-sm font-medium">
                  Photography Competition
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/awarding" className="text-sm font-medium">
                  Awarding
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={'/registration'} className="text-black text-sm font-medium py-2">Registration</Link>
          <Link href={'/sponsorship'} className="text-black text-sm font-medium py-2">Sponsorship</Link>
          <Link href={'/accomodations'} className="text-black text-sm font-medium">Accommodation</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none border-none">
              <span className="text-black text-sm font-medium py-2 flex items-center gap-1">
                <span>Information</span>
                <svg className="size-4" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                </svg>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-primary-color border-white/20 text-white">
              <DropdownMenuItem>
                <Link href={'/venue'} className="text-sm font-medium">Venue</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/jakarta-indonesia'} className="text-sm font-medium">Jakarta, Indonesia</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/transportation'} className="text-sm font-medium">Transportation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/general-information'} className="text-sm font-medium">General Information</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
