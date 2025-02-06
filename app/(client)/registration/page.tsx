import { RegistrationForm } from "./form";
import BannerTitle from "@/components/banner-title"

export default function Registration() {
  return (
    <div className="h-full">
      <BannerTitle message="Registration" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <RegistrationForm />
      </div>
    </div>
  );
}
