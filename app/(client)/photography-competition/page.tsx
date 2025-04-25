import BannerTitle from "@/components/banner-title";
import Link from "next/link";

export default function ShortVideoCompetition() {
  return (
    <div className="h-full">
      <BannerTitle message="Photography Competition" />
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <h2 className="font-medium text-2xl mb-2 text-primary-color">
          PHOTOGRAPHY COMPETITION
        </h2>
        <div>
          <h2 className="text-lg font-semibold mb-2">Theme: “The Role of Indonesian Family Doctors in National Health Transformation”</h2>
          <div className="w-full flex justify-center">
            <Link className="py-2 px-6 bg-primary-color rounded-xl text-white font-semibold mt-6 w-fit block" href="https://docs.google.com/forms/d/e/1FAIpQLSfslad1jMxlAKtPXcZ5Zi7ssyI9hD4dlXDrEA_XJbUL7i18ug/viewform">Go to Submit</Link>
          </div>

          <h3 className="text-lg font-semibold mt-4">Terms and Conditions:</h3>
          <ul className="list-disc pl-6 text-sm">
              <li>Photos must be original, unpublished, and not previously entered in a competition.</li>
              <li>Landscape format, high resolution (professional camera or phone).</li>
              <li>Photos should depict doctors/Sp.KKLP in education, promotion, service, achievements, or challenges in implementing health policies.</li>
              <li>Should showcase the family medicine approach in primary care services.</li>
              <li>One participant can be the main author for one photo and a team member for up to two others.</li>
              <li>A short narrative (50-100 words) must be included.</li>
              <li>Submission deadline: April 30, 2025.</li>
              <li>Photos will be published on {"PDKI's"} social media, and participants may share links to gather likes. The most liked photo will win the favorite category.</li>
              <li>If featuring patients/sensitive conditions, informed consent must be provided, or identities must be blurred.</li>
              <li>Must not contain elements of SARA, pornography, or potential conflicts.</li>
              <li>Criticism and policy suggestions must be conveyed in a respectful manner.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Photo Topics:</h3>
          <ul className="list-disc pl-6 text-sm">
              <li>Health promotion & management of communicable/non-communicable diseases.</li>
              <li>Implementation of primary healthcare service integration policies.</li>
              <li>Environmental health education & Clean and Healthy Lifestyle (PHBS).</li>
              <li>Mental health care.</li>
              <li>Posyandu activities.</li>
              <li>Nutrition education throughout the life cycle.</li>
              <li>Prevention of smoking, drug abuse, and alcoholism.</li>
              <li>Traditional medicine treatments.</li>
              <li>Other activities relevant to family medicine.</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Judging Criteria:</h3>
          <ul className="list-disc pl-6 text-sm">
              <li>Creativity, originality, and photo quality.</li>
              <li>Relevance of the photo to the theme and narrative.</li>
              <li>Message conveyed.</li>
              <li>Technical aspects of photography.</li>
              <li>Number of likes (for favorite winner).</li>
          </ul>

          <h3 className="text-lg font-semibold mt-4">Organizer:</h3>
          <p className="text-sm">Jakarta Family Medicine Forum Committee</p>

          <h3 className="text-lg font-semibold mt-4">Contact Person:</h3>
          <p className="text-sm">Qori (0812-6033-7148) / Arkan (0811-2024-128)</p>
        </div>
      </div>
    </div>
  )
}
