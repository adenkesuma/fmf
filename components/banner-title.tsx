import Image from "next/image";
import BannerBackground from "@/public/images/banner-background.png";

type BannerTitleComponentProps = {
  message: string
}

export default function BannerTitle(props: BannerTitleComponentProps) {
  return (
    <div className="relative">
      <Image src={BannerBackground} alt="banner background" className="h-32" />
      <div className="absolute left-1/2 top-12 -translate-x-1/2 flex items-end gap-2">
        <h1 className="text-2xl font-medium text-primary-color">{props.message}</h1>
        <div className="w-2 h-2 bg-yellow-400"></div>
      </div>
    </div>
  )
}
