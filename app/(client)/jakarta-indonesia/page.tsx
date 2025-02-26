import BannerTitle from "@/components/banner-title"
import Image from "next/image";
import Destination1 from "@/public/images/destination1.jpg";
import Destination2 from "@/public/images/destination2.webp";
import Destination3 from "@/public/images/destination3.jpg";
import Destination4 from "@/public/images/destination4.jpg";
import Destination5 from "@/public/images/destination5.webp";
import Destination6 from "@/public/images/destination6.jpeg";
import Destination7 from "@/public/images/destination7.webp";
import Destination8 from "@/public/images/destination8.webp";
import Destination9 from "@/public/images/destination9.png";
import Destination10 from "@/public/images/destination10.jpeg";

export default function InvitedSpeakers() {
  const jakartaInfo = 
  {
    name: "Jakarta",
    wide: "662 km²",
    timeZone: "Waktu Indonesia Barat (WIB)",
    countryCode: "ID",
    areaCode: "+62 21"
  };

  return (
    <div className="h-full">
      <BannerTitle message="Jakarta, Indonesia" /> 
      <div className="mx-auto container px-20 py-10 min-h-screen">
        <div>
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
             See the Beauty of the City of Jakarta 
            </h2>
          </div>
          <div className="mt-4">
            <video controls className="w-full">
              <source src="/jakarta.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              About Jakarta
            </h2>
          </div>
          <div className="mb-4 flex flex-col border-t-4 border-primary-color mt-4">
            {Object.entries(jakartaInfo).map(([key, value], i) => (
              <div key={key} className={`flex items-center border-x border-t ${i === Object.entries(jakartaInfo).length - 1 ? 'border-b' : ''}`}>
                <div className="bg-blue-500/10 block font-medium text-sm w-1/5 p-2">
                  <span>{key}</span>
                </div>
                <div className="block text-sm w-4/5 p-2 border-l">
                  <span>{value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 w-full">
          <div className="bg-primary-color py-2 px-3 rounded-br-2xl w-1/2">
            <h2 className="font-medium text-base text-white">
              Favorite Destinations Near JW Marriott Hotel Jakarta
            </h2>
          </div>
          <div className="flex flex-col gap-8">
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination1} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Mall Ambassador</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 400 meters (5 minutes walk) Ambassador Mall is a shopping center that is famous for various electronic, fashion and culinary products at affordable prices. This place is very suitable for those of you who want to shop for gadgets or look for typical Jakarta souvenirs.
                </p>
                <a href="https://www.google.com/maps/dir//Kuningan,+Karet+Kuningan,+Kecamatan+Setiabudi,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta/@-6.2240159,106.7444183,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x2e69f3fbe9c12797:0xffae3870f7ae2fd!2m2!1d106.8268202!2d-6.2240223?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination2} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Lotte Shopping Avenue</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 500 meters (7 minutes walk)
Lotte Shopping Avenue is a modern shopping center that offers various international fashion brands, restaurants and entertainment centers. This place also has a variety of culinary choices from local to international food. 
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyEAgBEC4YrwEYxwEYsQMYgAQyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDINCAYQLhivARjHARiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KTni3CZc82kuMXCXi9p1MTLo&daddr=Jl.+Prof.+DR.+Satrio+No.Kav.11,+Kuningan,+Karet+Kuningan,+Kecamatan+Setiabudi,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12940" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination3} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Kuningan City Mall</h3>
                </div>
                <p className="text-sm mb-8">
                   Distance: 700 meters (10 minutes walk)
Known as the lifestyle center in South Jakarta, Kuningan City Mall offers a variety of fashion boutiques, restaurants and entertainment. There is also a fitness center and cinema to fill your free time.
                </p>
                <a href="https://www.google.com/maps?sca_esv=5d466d0b992978df&sxsrf=AHTn8zqAyHhU1DU0eFVFWxNuLwtEcr1ryg:1740577949089&fbs=ABzOT_AOFGSQgZEY_xGtUGnXJefJlSegG62MeYke63dGBG08zuH8Q9ZkbJXEj4yA5vO4ReWGkVotqp7vQQavVqTgZRsHn3d5xFZnDoONYabezGS5muw4PAcN6AvA_OBKLT25VdZ2lDxlca8QL5bFyXh_uS3cvzkKsJQefNyEgCNqzuddJDZUgDCQ6rHd60LhelbFH_pxiS9DWklnyxsngudyRv2MeZQtnw&biw=1707&bih=775&dpr=0.8&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KelHWVYk82kuMVKUTf0djw1C&daddr=Jl.+Prof.+DR.+Satrio+No.Kav.+18,+Kuningan,+Karet+Kuningan,+Kecamatan+Setiabudi,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12940" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination4} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Kota Kasablanka</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 1.8 km (5 minutes drive)
A large mall that offers various shopping outlets, restaurants and entertainment venues. Suitable for shopping or enjoying local and international culinary delights. 
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqEAgBEC4YrwEYxwEYsQMYgAQyBggAEEUYOTIQCAEQLhivARjHARixAxiABDIHCAIQABiABDINCAMQLhivARjHARiABDIHCAQQABiABDINCAUQLhivARjHARiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABNIBCDIyODRqMGo0qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KeUDDyCN82kuMc6sYxVjy1Sv&daddr=Jl.+Raya+Casablanca+No.Kav+88,+Menteng+Dalam,+Kec.+Tebet,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12870" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination5} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Pacific Place Mall</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 1.9 km (7 minutes driving)
One of the luxury shopping centers in Jakarta that offers a variety of premium brands, upscale restaurants and exclusive entertainment, including KidZania, an educational playground for children. 
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzEzMWowajmoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KSvuShBR8WkuMcwDX0uzCKbE&daddr=Jl.+Jend.+Sudirman+kav+52-53,+Senayan,+Kec.+Kby.+Baru,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12190" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination6} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Taman Suropati</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 3.2 km (10 minutes drive)
A green and beautiful city park, suitable for taking a leisurely walk or enjoying the fresh air in the middle of Jakarta. 
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYOTINCAMQLhivARjHARiABDIHCAQQABiABDIHCAUQABiABDINCAYQLhivARjHARiABDIHCAcQABiABDIHCAgQABiABDINCAkQLhivARjHARiABKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KfkuBeQW9GkuMYFaur_NWTOL&daddr=Jl.+Taman+Suropati+No.5,+RT.5/RW.5,+Menteng,+Kec.+Menteng,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota+Jakarta+10310" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination7} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Gelora Bung Karno</h3>
                </div>
                <p className="text-sm mb-8">
                  arak: 3.5 km (12 minutes drive)
The largest sports complex in Jakarta which is often used for sporting events and international music concerts. You can also exercise or just relax in the large green area.
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyEAgBEC4YrwEYxwEYsQMYgAQyBwgCEAAYgAQyBwgDEAAYgAQyBwgEEAAYgAQyBwgFEAAYgAQyDQgGEC4YrwEYxwEYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgASoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KXdG9BFr8WkuMfB2_UqSrbbg&daddr=Jl.+Pintu+Satu+Senayan,+Gelora,+Kecamatan+Tanah+Abang,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota+Jakarta+10270" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination8} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Museum Nasional Indonesia</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 7.5 km (20 minutes driving)
This museum holds a rich collection of Indonesian history and culture, suitable for educational tourism for domestic and foreign tourists. 
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyDwgAEEUYORjjAhixAxiABDIQCAEQLhivARjHARixAxiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCCLACAQ&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KYvycbXU9WkuMe1YYG9WQRWk&daddr=Jl.+Medan+Merdeka+Barat+No.12,+Gambir,+Kecamatan+Gambir,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota+Jakarta+10110" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination9} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Monumen Nasional (MONAS)</h3>
                </div>
                <p className="text-sm mb-8">
                  Distance: 8 km (25 minutes drive)
An icon of the city of Jakarta that offers beautiful views from the top and various historical exhibitions at the bottom. This place is a must visit for anyone who comes to Jakarta.
                </p>
                <a href="https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAjIHCAMQABiPAtIBBzc2MmowajmoAgCwAgE&um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=KS2xZOfS9WkuMci86eDh1io9&daddr=Merdeka+Square,+Jalan+Lapangan+Monas,+Gambir,+Kecamatan+Gambir,+Kota+Jakarta+Pusat,+Daerah+Khusus+Ibukota+Jakarta+10110" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
            <div className="w-full flex items-center gap-6 mt-4">
              <div className="w-1/3 h-60">
                <Image className="rounded-br-3xl w-full h-60 bg-cover" src={Destination10} alt='mall ambassador' />
              </div>
              <div className="w-2/3">
                <div className="flex items-center gap-2 relative">
                  <div className="relative">
                    <div className="w-3 h-3 bg-yellow-400 absolute -bottom-0"></div>
                    <div className="h-3 w-3 bg-primary-color absolute left-2 bottom-2"></div>
                  </div>
                  <h3 className="text-primary-color ml-6 text-lg mb-4">Kota Tua Jakarta</h3>
                </div>
                <p className="text-sm mb-8">
                 Distance: 12 km (35 minutes driving)
Historic area with colonial buildings still preserved. There are various museums, unique cafes and interesting street art attractions.
                </p>
                <a href="https://www.google.com/maps/dir//Kawasan+Kota+Tua,+Taman+Fatahillah+No.1+7,+RT.7%2FRW.7,+Pinangsia,+Kec.+Taman+Sari,+Kota+Jakarta+Barat,+Daerah+Khusus+Ibukota+Jakarta+11110/@-6.1350624,106.7312776,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x2e69ec2a940017ed:0xdfce12d4a0938133!2m2!1d106.8136795!2d-6.1350687?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D" className="py-1 px-3 bg-yellow-400 font-semibold rounded-xl text-sm">
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
