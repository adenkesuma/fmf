import BannerTitle from "@/components/banner-title";
import Link from "next/link";

export default function ShortVideoCompetition() {
  return (
    <div className="h-full">
      <BannerTitle message="Short Video Competition" />
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">
          SHORT VIDEO COMPETITION
        </h2>
        <div className="">

          <p className="text-sm font-semibold">Theme: The Role and Real Actions of Primary Care Family Physicians in {"Indonesia's"} Health Transformation</p>
          <div className="w-full flex justify-center">
            <Link className="py-2 px-6 bg-primary-color rounded-xl text-white font-semibold mt-6 w-fit block" href="https://bit.ly/Submit-Lomba-Videografi-FMF-KonasPDKI2025">Go to Submit</Link>
          </div>

          <h2 className="text-xl font-semibold mt-4">Terms & Conditions</h2>
          <ul className="list-disc pl-5 text-sm">
              <li>Participants: PDKI members, PPDS Sp.KKLP students, RKL Sp.KKLP participants (Jakarta Family Medicine Forum organizers are not allowed).</li>
              <li>Videos may include health promotion/education, counseling techniques, home visits, or health policy advocacy.</li>
              <li>Videos must be original, 3-5 minutes long.</li>
              <li>Format: MOV/MP4, min. resolution 1080p/Full HD.</li>
              <li>Videos must not have been published or entered in other competitions.</li>
              <li>If copyright claims arise, the committee is not responsible.</li>
              <li>Languages: Indonesian, foreign, or regional (must have Indonesian subtitles if not in Indonesian).</li>
              <li>Individuals or groups (each person can lead only one video and participate in a maximum of two other videos).</li>
              <li>Content must not include SARA elements, pornography, mysticism, violence, or commercial product promotions.</li>
              <li>Participants must fill out a complete registration form.</li>
              <li>Participants must retain the original HD/Full HD master video.</li>
              <li>Deadline for submission: April 30, 2025.</li>
              <li>Videos will be uploaded on {"PDKI's"} social media and can be shared to gain likes. The most liked video wins the favorite category.</li>
              <li>The committee reserves the right to broadcast videos for educational purposes.</li>
              <li>Patient consent must be provided if patients appear, or their identity must be anonymized.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Video Topics</h2>
          <ul className="list-disc pl-5 text-sm">
              <li>Health promotion/education (e.g., hygiene, smoking risks, communicable/non-communicable diseases, mental health, nutrition, child and elderly care, disability health).</li>
              <li>Counseling using a family medicine approach.</li>
              <li>Screening and initial management of health problems.</li>
              <li>Training for primary healthcare workers.</li>
              <li>Cross-sector collaboration (e.g., Posyandu, community health initiatives).</li>
              <li>Health policy advocacy.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Judging Criteria</h2>
          <ul className="list-disc pl-5 text-sm">
              <li>Originality, creativity, impact, and application of family medicine principles.</li>
              <li>Video quality, sound, storyline, and language clarity.</li>
              <li>Subtitles for non-Indonesian languages.</li>
              <li>Professionalism and empathy towards patients/community.</li>
              <li>Number of likes on {"PDKI's"} social media.</li>
              <li>Validity and reliability of information.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Judging Panel</h2>
          <p className="text-sm">Composed of three experts in family medicine, public health, and a professional from photography/filmmaking/social media.</p>

          <h2 className="text-xl font-semibold mt-4">Organizers</h2>
          <p className="text-sm">Jakarta Family Medicine Forum Committee</p>

          <h2 className="text-xl font-semibold mt-4">Contact Persons</h2>
          <p className="text-sm">Qori (0812-6033-7148) / Arkan (0811-2024-128)</p>
        </div>
      </div>
    </div>
  )
}
