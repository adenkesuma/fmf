import BannerTitle from "@/components/banner-title"
import organizingCommittee from "@/const/organizing-commite"

export default function OrganizingCommitee() {
  return (
    <div className="h-full">
      <BannerTitle message="Panitia Penyelenggara" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">Daftar Panitia</h2>
        <div className="flex flex-col border-t-4 border-primary-color">
          {organizingCommittee.map((commitee, i) => (
            <div key={commitee.nama} className={`flex items-center border-x border-t ${organizingCommittee.length - 1 === i ? 'border-b' : ''}`}>
              <div className="bg-blue-500/10 block text-sm w-1/3 p-2">
                <span className="font-medium">{commitee.jabatan}</span>
              </div>
              <div className="block text-sm w-1/3 p-2 border-x">
                <span>{commitee.nama}</span>
              </div>
              <div className="block text-sm w-1/3 p-2">
                <span>{commitee.kantor}</span>
              </div>
            </div>
          ))}
        </div> 
      </div>
    </div>
  )
}
