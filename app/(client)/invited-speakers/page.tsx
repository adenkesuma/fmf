import BannerTitle from "@/components/banner-title"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function InvitedSpeakers() {
  const speakers = [
    {name: 'Park chu yong', title: 'title of conference 1', desc: 'Ceo Meta'},
    {name: 'Xi fu tang', title: 'title of conference 2', desc: 'Ceo Wa'},  
    {name: 'Mark moi', title: 'title of conference 3', desc: 'Ceo Tiktok'},  
  ];

  return (
    <div className="h-full">
      <BannerTitle message="Invited Speakers" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div className="grid grid-cols-2 gap-6">
          {speakers.map((speaker, i) => (
            <Card key={speaker.name} className="border border-primary-color flex items-center rounded-xl w-full h-full">
              <CardHeader>
                <div className="h-40 w-40 bg-gray-300 rounded-xl flex items-center justify-center">
                  {i}
                </div>
              </CardHeader>
              <CardContent className="w-full">
                <div>
                  <span className="text-primary-color font-medium text-xs">Sabtu, 15 April 2025</span>
                  <h3 className="font-semibold text-xl">{speaker.title}</h3>
                </div>

                <div className="mt-4 border-l-4 border-primary-color pl-3 bg-blue-100 w-full rounded-r-lg py-1">
                  <h4 className="text-base font-semibold">{speaker.name}</h4>
                  <p className="text-xs font-normal slide-in-from-top-1">{speaker.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
