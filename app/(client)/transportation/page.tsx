import BannerTitle from "@/components/banner-title"

export default function InvitedSpeakers() {
  return (
    <div className="h-full">
      <BannerTitle message="Transportasi" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div>
          <h2 className="font-medium text-2xl mb-2 text-primary-color">
            Bagaimana cara datang ke lokasi FMF June 2025
          </h2>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color">
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Route 1</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Jalan kaki dari bandung ke jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Route 2</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Melalui bus kota</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Route 3</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Melalui pesawat terbang</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t border-b`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Route 4</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>Melalui kereta api bawah tanah</span>
              </div>
            </div>
          </div> 
        </div>
        <div className="mt-10">
          <div className="bg-primary-color mb-2 py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Menggunakan Taksi Online
            </h2>
          </div>
          <p className="text-sm">Kamu bisa menggunakan layanan Taksi online pada tabel dibawah ini yang disediakan di indonesia untuk sampai ke acara tujuan</p>
          <div className="mt-2 mb-4 flex flex-col border-t-4 border-primary-color">
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Go Car</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>2 Jam dari bandara pusat jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Gojek</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>1 Jam dari bandara pusat jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Grab Car</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>2 Jam dari bandara pusat jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Grab Motor</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>1 Jam dari bandara pusat jakarta</span>
              </div>
            </div>
            <div className={`flex items-center border-x border-t border-b`}>
              <div className="block text-sm w-1/5 p-2 bg-blue-500/10 font-medium">
                <span>Maxim Car</span>
              </div>
              <div className="block text-sm w-4/5 p-2 border-l">
                <span>2 Jam dari bandara pusat jakarta</span>
              </div>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}
