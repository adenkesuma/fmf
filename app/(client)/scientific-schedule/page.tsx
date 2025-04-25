import BannerTitle from "@/components/banner-title";

export default function ShortVideoCompetition() {
  return (
    <div className="h-full">
      <BannerTitle message="Scientific Schedule" />
      <div className="mx-auto container px-6 md:px-20 py-10 min-h-screen">
        <div className="flex flex-col gap-2">
          <h2 className="font-medium text-lg -mb-2 text-primary-color">
            FAMILY MEDICINE FORUM WORKSHOP 1
          </h2>
          <h1 className="text-2xl font-medium text-primary-color">DUA MUTIARA 1</h1>
          <div className="p-2 bg-yellow-400 text-primary-color flex flex-col gap-0 items-center">
            <div className="font-bold">KLASTER USIA DEWASA DAN LANSIA</div>
            <span className="text-sm">Transforming Diabetic Kidney Diease in Primary Care</span>
          </div>
          <table role="none">
            <tbody>
              <tr className="border-b">
                <td className="w-1/3">08:00 - 08:30</td>
                <td>Registration and Opening</td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3">08:30 - 08:50</td>
                <td>
                  <div>SESSION 1</div>
                  <span className="text-sm">
                    Clinical Update: The Important Role of Dual Kidney
                    Function Testing (ACR and eGFR) in Primary Care
                    for Risk Identification and Management in Type 2
                    Diabetes
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3">08:30 - 08:50</td>
                <td>
                  <div>SESSION 2</div>
                  <span className="text-sm">
                    Comprehensive Management of Diabetic Kidney Disease (DKD) in Primary Care 
                  </span>
                  <span className="font-bold text-sm">
                    Dr. dr. Dian Kusuma Dewi, M.Gizi, Sp.KKLP, Subsp.FOMC
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3">09:10 - 09:30</td>
                <td>
                  <div>SESSION 3</div>
                  <span className="text-sm">
                    Impact of Integrated Care Pathway (ICP) on
                    the Care of People with Diabetes Mellitus
                  </span>
                  <span className="text-sm font-bold">
                    Dr. dr. Isti Ilmiati Fujiati, MSc.CM-FM,
                    M.Pd.Ked, Sp.KKLP, Subsp.COPC
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3">09:30 - 10:00</td>
                <td>
                  <div>PANNEL DISCUSSION</div>
                  <span className="text-sm">
                    Fasilitator:
                  </span>
                  <ul className="text-sm">
                    <li>dr.Putri Khairani Eyanoer, MS. Epid. PhD, Sp.KKLP</li>
                    <li>dr.Iyone Saragih, Sp.KKLP, SUbsp. FOMC</li>
                    <li>dr.Yoane Lisa, Sp.KKLP, AIFO-K</li>
                  </ul>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3"></td>
                <td>
                  <span className="text-sm">
                    Coffee Break (Coffe and tea are served inside the roam)
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3"></td>
                <td>
                  <span className="text-sm">
                    Coffee Break (Coffe and tea are served inside the roam)
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3"></td>
                <td>
                  <span className="text-sm">
                    Coffee Break (Coffe and tea are served inside the roam)
                  </span>
                </td>
              </tr>
              <tr className="border-b">
                <td className="w-1/3"></td>
                <td>
                  <span className="text-sm">
                    Coffee Break (Coffe and tea are served inside the roam)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
