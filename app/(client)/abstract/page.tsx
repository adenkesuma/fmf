import BannerTitle from "@/components/banner-title";
import Link from "next/link";

export default function Abstract() {
  return (
    <div className="h-full">
      <BannerTitle message="Abstract" />
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <h2 className="font-medium text-center text-2xl mb-2 text-primary-color">
          GENERAL TERMS OF THE COMPETITION
        </h2>

        <div className="w-full flex justify-center">
          <Link className="py-3 mt-3 block w-fit px-10 text-white rounded-xl bg-primary-color text-sm font-semibold" href="https://bit.ly/Submission-abstract-PDKI-FamilyMedicineForum-202">Go to Register</Link>
        </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mt-4">I. ADMINISTRATIVE REQUIREMENTS</h2>
            <ul className="list-disc pl-5 text-sm">
                <li>Participants must be medical students, general practitioners, residents, or specialists.</li>
                <li>Participants can compete individually or as a team.</li>
                <li>Participants may submit more than one work but can only be the team leader once.</li>
                <li>Abstract submissions must be received by the committee no later than March 31, 2025, at 23:59 WIB.</li>
                <li>Participants must attend the Family Medicine Forum 2025 symposium held on June 26-28, 2025.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">II. COMPETITION RULES</h2>
            <ul className="list-disc pl-5 text-sm">
                <li>The poster competition is divided into two categories: Research and Case Reports.</li>
                <li>Themes for both categories:
                    <ul className="list-disc pl-5">
                        <li>Children and Adolescent</li>
                        <li>{"Men's"} Health</li>
                        <li>Reproduction and {"Women's"} Health</li>
                        <li>Elderly Health</li>
                        <li>Infectious Disease</li>
                        <li>NCDs</li>
                        <li>Precision Medicine and Genetic Health</li>
                        <li>Mental Health</li>
                        <li>Oncology and Palliative Care</li>
                        <li>Community and Occupational Health</li>
                        <li>Communication and Ethics</li>
                        <li>Education and Training</li>
                        <li>Urban and Rural Health</li>
                        <li>Wellness Health</li>
                        <li>Travel Medicine</li>
                    </ul>
                </li>
                <li>Scientific posters must be original, unpublished, and not submitted to similar competitions.</li>
                <li>Any violation of the originality rule will result in disqualification.</li>
                <li>Submitted abstracts become the property of the committee and will not be returned.</li>
                <li>The committee reserves the right to publish abstracts and poster files with proper attribution.</li>
                <li>The judges decisions are final and binding.</li>
                <li>All participants must follow the established competition rules.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">III. ABSTRACT GUIDELINES</h2>
            <ul className="list-disc pl-5 text-sm">
                <li>Abstracts must be created using Microsoft Word, A4 paper size, with a top margin of 5 cm and other margins of 3 cm.</li>
                <li>Title: Times New Roman, size 14, bold, centered.</li>
                <li>Authors and institutions: Times New Roman, size 12, centered. The main {"author's"} name should be underlined.</li>
                <li>Abstract content: Times New Roman, size 12, justified, single-spaced. Foreign terms should be italicized.</li>
                <li>Maximum 250 words.</li>
                <li>Abstract structure:
                    <ul className="list-disc pl-5">
                        <li><strong>For Research:</strong> Title, Authors & Institutions, Background & Objectives, Methods, Results, Conclusion, Keywords (max. 5).</li>
                        <li><strong>For Case Reports:</strong> Title, Authors & Institutions, Background, Case Illustration, Discussion, Conclusion, Keywords.</li>
                    </ul>
                </li>
                <li>Abstracts can be submitted in English.</li>
                <li>Soft copies must be uploaded by March 31, 2025, at 23:59 WIB via <a href="https://bit.ly/Submission-abstract-PDKI-FamilyMedicineForum-2025" className="text-blue-500 underline">this link</a>.</li>
                <li>File naming format: Research Abstract / Case Report Abstract - Participant Name - Institution (e.g., Research Abstract - Siti Aisyah - Universitas Diponegoro).</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">VII. CONTACT PERSON</h2>
            <ul className="list-disc pl-5 text-sm">
                <li>Poster competition contact: <a href="tel:08112024928" className="text-blue-500 underline">08112024928 (Gunawan)</a></li>
                <li>Participants must confirm participation and email submission via WhatsApp. Email is for data submission only.</li>
                <li>Further announcements will be made via WhatsApp.</li>
            </ul>
        </div>
      </div>
    </div>
  )
}
