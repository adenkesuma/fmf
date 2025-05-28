// import { RegistrationForm } from "./form";
import BannerTitle from "@/components/banner-title"
import Link from "next/link";

export default function Registration() {
  return (
    <div className="h-full">
      <BannerTitle message="Registration" /> 
      <div className="mx-auto container px-6 lg:px-20 py-10 min-h-screen">
        {/* <RegistrationForm /> */}
        <h2 className="font-medium text-2xl mb-2 text-primary-color">
          Registration Guidelines
        </h2>
        <p className="text-sm">
          All participants must register using the Online Registration Form below. If your work email is linked to a medical institute with strict security settings, please use a personal email to avoid it going to spam.
        </p>
        <p className="text-sm mt-2">
          After registering, you will receive your account details by email. Check your spam folder if you don’t see it.
        </p>

        <div className="w-full flex justify-center">
          <Link className="py-3 mt-3 block w-fit px-10 text-white rounded-xl bg-primary-color text-sm font-semibold" href={'https://evorsine.clickicm.com/share/detail/family-medicine-forum-2025'}>Go to Register</Link>
        </div>

          <div className="w-full mt-8">
            <h2 className="font-medium text-2xl text-primary-color">Important Date</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-2 gap-4">
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Abstract Acceptance Deadline</h4>
                <p className="text-base text-center text-primary-color">30 April 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Short Video Competition + Photography Competition Submission Deadline</h4>
                <p className="text-base text-center text-primary-color">15 Juni 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Early Bird Last Date</h4>
                <p className="text-base text-center text-primary-color">31 Mei 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">12th National Congress of the Indonesian Family Doctors Association</h4>
                <p className="text-base text-center text-primary-color">26 Juni 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                 <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Workshop + Oral & Poster Presentation</h4>
                <p className="text-base text-center text-primary-color">27 Juni 2025</p>
              </div>
              <div className="w-full flex items-center justify-center flex-col border border-primary-color rounded-xl p-3">
                <div className="flex items-center justify-center bg-yellow-400 w-14 h-14 rounded-full">
                  <svg className="size-10 text-primary-color" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"></path>
                  </svg>
                </div>
                <h4 className="mt-2 font-medium text-base text-center">Opening, Plenary, Simposium, Inagurasi, Awarding Night & Gala Dinner</h4>
                <p className="text-base text-center text-primary-color">28 Juni 2025</p>
              </div>
            </div>
          </div>

        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Accreditation Points
        </h2>
        <p className="text-sm">
          For participants registering from Indonesia, this activity is accredited by the Ministry of Health of Indonesia (KEMENKES).
        </p>

        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Registration Fee
        </h2>
        <div className="flex flex-col border-t-4 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-full text-center p-2">
              <span className="font-medium">SYMPOSIUM</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Early Bird (Until 31 May)</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>2.000.000</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Reguler</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>2.500.000</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-4 mt-8 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-full text-center p-2">
              <span className="font-medium">WORKSHOP</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Early Bird (Until 31 May)</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>500.000/1 Workshop</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Reguler</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>750.000/1 Workshop</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-4 mt-8 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-full text-center p-2">
              <span className="font-medium">BUNDLING - SYMPOSIUM + 1 WORKSHOP</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Early Bird (Until 31 May)</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>2.300.000</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Reguler</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>2.700.000</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-4 mt-8 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-full text-center p-2">
              <span className="font-medium">BUNDLING - SYMPOSIUM + 2 WORKSHOP</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Early Bird (Until 31 May)</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>2.800.000</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Reguler</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>3.500.000</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span className="font-medium">GALA DINNER</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span className="font-medium">750.000</span>
            </div>
          </div>
        </div>
        <ul className="mt-6">
          <li className="text-sm">
            - All Residents/Medical Students receive a 25% discount. 
          </li>
          <li className="text-sm">
            - Registration fees include 11% local VAT.
          </li>
          <li className="text-sm">
            - Prices do not include any additional charges from your bank for the transfer process.
          </li>
        </ul>

        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Workshop
        </h2>
        <p className="text-sm">
          Family Medicine Forum 2025 organizes several WORKSHOPS to improve the competence of primary care specialists. Here are some WORKSHOPs that will be held, please FMF participants choose the topic of interest
        </p>
        <div className="flex flex-col border-t-4 mt-4 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-full text-center p-2">
              <span className="font-medium">MORNING SESSION</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Workshop 1</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>Workshop 2</span>
            </div>
            <div className="block text-sm w-full p-2">
              <span>Workshop 3</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>Workshop 4</span>
            </div>
          </div>
          <div className="flex border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>KLASTER USIA DEWASA DAN LANSIA</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>KLASTER KESEHATAN IBU</span>
            </div>
            <div className="block text-sm w-full p-2">
              <span>LINTAS KLASTER</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>KLASTER USIA DEWASA DAN LANSIA</span>
            </div>
          </div>
          <div className="flex border-x border-b">
            <div className="block text-sm h-full w-full p-2">
              <span>Transforming Diabetic Kidney Disease in Primary Care</span>
            </div>
            <div className="block text-sm h-inherit w-full p-2 border-x">
              <span>Early Detection of Pregnancy Malnutrition in Primary Care</span>
            </div>
            <div className="block text-sm h-full w-full p-2">
              <span>Holistic and Compassionate Care: Strengthening Integrated Palliative Services for Better Patient Outcomes</span>
            </div>
            <div className="block text-sm h-full w-full p-2 border-x">
              <span>Implementation of Family Medicine and Socio-Cultural Approach to Improve the Coverage of Mental Disorders Screening and Management in Primary Care</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t-4 mt-8 border-primary-color">
          <div className={`bg-blue-500/10 flex items-center border-x border-t`}>
            <div className="block text-sm w-full text-center p-2">
              <span className="font-medium">AFTERNOON SESSION</span>
            </div>
          </div>
          <div className="flex items-center border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>Workshop 5</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>Workshop 6</span>
            </div>
            <div className="block text-sm w-full p-2">
              <span>Workshop 7</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>Workshop 8</span>
            </div>
          </div>
          <div className="flex border-x border-b">
            <div className="block text-sm w-full p-2">
              <span>KLASTER KESEHATAN REMAJA</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>KLASTER USIA DEWASA DAN LANSIA</span>
            </div>
            <div className="block text-sm w-full p-2">
              <span>LINTAS KESEHATAN ANAK DAN REMAJA</span>
            </div>
            <div className="block text-sm w-full p-2 border-x">
              <span>KLASTER USIA DEWASA DAN LANSIA</span>
            </div>
          </div>
          <div className="flex border-x border-b">
            <div className="block text-sm h-full w-full p-2">
              <span>
                Empowering Adolescents: A
              </span>
            </div>
            <div className="block text-sm h-inherit w-full p-2 border-x">
              <span>
                Cardiac Rehabilitation in
              </span>
            </div>
            <div className="block text-sm h-full w-full p-2">
              <span>
                Scabies Eradication Starts Here: The
              </span>
            </div>
            <div className="block text-sm h-full w-full p-2 border-x">
              <span>
                Every Second Counts: Family
              </span>
            </div>
          </div>
        </div>
           <div className="mt-10 flex border-x border-y">
            <div className="block text-sm h-full w-full p-2">
              <span>
                Family Medicine Approach to Comprehensive Youth Healthcare
              </span>
            </div>
            <div className="block text-sm h-inherit w-full p-2 border-x">
              <span>
                Primary Care
              </span>
            </div>
            <div className="block text-sm h-full w-full p-2">
              <span>
                Role of Early Detection in Prevention
              </span>
            </div>
            <div className="block text-sm h-full w-full p-2 border-x">
              <span>
                Medicine and Community Empowerment in Stroke’s Golden Period
              </span>
            </div>
          </div>
        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Registation Fees Include
        </h2>
        <ul>
          <li className="text-sm">
            1. Admission to all scientific sessions, presentations, and commercial exhibitions based on your registration category 
          </li>
          <li className="text-sm">
            2. Refreshments and Lunch
          </li>
          <li className="text-sm">
            3. Certificate of Attendance
          </li>
          <li className="text-sm">
            4. Conference Material
          </li>
        </ul>
        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Registration Procedure
        </h2>
        <div className="flex flex-col items-center md:flex-row gap-4">
          <div className="bg-primary-color text-white p-3 rounded-xl">
            Go to Registration
          </div>
          <svg className="size-8" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
          </svg>
          <div className="bg-primary-color text-white p-3 rounded-xl">
            Enter Registration Information & Select Registration Category
          </div>
          <svg className="size-8" data-slot="icon" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
          </svg>
          <div className="bg-primary-color text-white p-3 rounded-xl">
            Payment
          </div>
        </div>
        <ul className="mt-3">
          <li className="text-sm">
            - After registering, you will receive your account details by email. 
          </li>
          <li className="text-sm">
            - If you leave the page, please log in again using the account details sent to your email.
          </li>
        </ul>
        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Payment Method
        </h2>
        <p className="text-sm">
          To ensure your registration is valid, please make sure that any payment made by transfer is free of all bank fees and transfer charges. Please also ensure that the registered participant’s name or Registration Number are clearly stated in the bank transfer. Payments received without such details (Name / Registration Number) cannot be easily identified and may not be valid.
        </p>

        <ul className="mt-4">
          <li className="text-sm font-semibold italic">BANK INFORMATION</li>
          <li className="text-sm">Bank Name: Bank Mandiri</li>
          <li className="text-sm">Account Holder: Perhimpunan Dokter Keluarga Indonesia</li>
          <li className="text-sm">Account Number: 1260055599988</li>
          <li className="text-sm">Payment Reference: Name, Surname and Registration Number</li>
        </ul>

        <ul className="mt-2">
          <li className="text-sm">
            - All bank service charges are to be paid by the participant 
          </li>
          <li className="text-sm">
            - A copy of the bank transfer statement must be uploaded to the registration system. If you leave the page, please log in again using your account details in your email.
          </li>
        </ul>

        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Cancelation Policy
        </h2>
        <p className="text-sm">
          Tickets cannot be transferred, exchanged or refunded once purchased.
        </p>
        <h2 className="font-medium mt-8 text-2xl mb-2 text-primary-color">
          Contact Information
        </h2>
        <p className="text-sm">
          For any registration-related questions, please feel free to contact the FAMILY MEDICINE FORUM 2025 Registration Team via WhatsApp at +6281-1202-4928 (Gunawan).
        </p>
      </div>
    </div>
  );
}
