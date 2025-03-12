import BannerTitle from "@/components/banner-title"
import { organizingCommittee,seminar, workshop, posterAndOralPresentation, familyMedicinaAward, publicRelationsAndPublicationSection, sponsorship, itSection, consumptionSection, secretariat } from "@/const/organizing-commite"

export default function OrganizingCommitee() {
  return (
    <div className="h-full">
      <BannerTitle message="Organizing Committee" /> 
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">Organizing Committee</h2>
        <div className="flex flex-col border-t-4 border-primary-color">
          {organizingCommittee.map((commitee, i) => (
            <div key={commitee.nama} className={`flex items-center border-x border-t ${organizingCommittee.length - 1 === i ? 'border-b' : ''}`}>
              <div className="block text-sm w-1/3 h-inherit shrink-0 p-2">
                <span className="font-medium">{commitee.jabatan}</span>
              </div>
              <div className="block text-sm p-2 border-l">
                <span>{commitee.nama}</span>
              </div>
            </div>
          ))}
        </div> 
        <h2 className="mt-8 font-medium text-2xl mb-2 text-primary-color">
          Scientific section
        </h2>
        <div className="mt-6">
          <div className="font-semibold">Seminar</div>
          {seminar.map((b, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+b}>{idx+1}. {b}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Workshop</div>
          {workshop.map((c, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+c}>{idx+1}. {c}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Poster And Oral Presentation</div>
          {posterAndOralPresentation.map((d, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+d}>{idx+1}. {d}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Family Medicin Award</div>
          {familyMedicinaAward.map((e, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+e}>{idx+1}. {e}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Public Relations and Publication Section</div>
          {publicRelationsAndPublicationSection.map((b, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+b}>{idx+1}. {b}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Sponsorship</div>
          {sponsorship.map((c, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+c}>{idx+1}. {c}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">It Section</div>
          {itSection.map((d, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+d}>{idx+1}. {d}</div>
          ))}
        </div>
        <div className="mt-6">
          <div className="font-semibold">Consumption Section</div>
          {consumptionSection.map((e, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+e}>{idx+1}. {e}</div>
          ))}
        </div>
         <div className="mt-6">
          <div className="font-semibold">Secretariat</div>
          {secretariat.map((e, idx) => (
            <div className="pl-1 mt-1 text-sm" key={idx+e}>{idx+1}. {e}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
