import BannerTitle from "@/components/banner-title"
import { organizingCommittee, commissionA, commissionB, commissionC, commissionD, commissionE } from "@/const/organizing-commite"

export default function OrganizingCommitee() {
  return (
    <div className="h-full">
      <BannerTitle message="Organizing Committee" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">Organizing Committee</h2>
        <div className="flex flex-col border-t-4 border-primary-color">
          {organizingCommittee.map((commitee, i) => (
            <div key={commitee.nama} className={`flex items-center border-x border-t ${organizingCommittee.length - 1 === i ? 'border-b' : ''}`}>
              <div className="bg-blue-500/10 block text-sm w-1/3 p-2">
                <span className="font-medium">{commitee.jabatan}</span>
              </div>
              <div className="block text-sm p-2 border-l">
                <span>{commitee.nama}</span>
              </div>
            </div>
          ))}
        </div> 
        <div className="mt-6">
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Commissions
          </h2>
          <div className="font-semibold">Commision A: Articles of association and bylaws</div>
          {commissionA.map((a, idx) => (
            <div className="pl-1 mt-1" key={idx+a}>{idx+1}. {a}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Commision B: Continuous Professional Development Program (P2KB)</div>
          {commissionB.map((b, idx) => (
            <div className="pl-1 mt-1" key={idx+b}>{idx+1}. {b}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Commision C: Professional Services</div>
          {commissionC.map((c, idx) => (
            <div className="pl-1 mt-1" key={idx+c}>{idx+1}. {c}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Commision D: Etika, Disiplin, dan Hukum</div>
          {commissionD.map((d, idx) => (
            <div className="pl-1 mt-1" key={idx+d}>{idx+1}. {d}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Commision E: Organizational Policy and Discussion of the Main Program Outline/ RENSTRA</div>
          {commissionE.map((e, idx) => (
            <div className="pl-1 mt-1" key={idx+e}>{idx+1}. {e}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
