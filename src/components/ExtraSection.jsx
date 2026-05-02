// SummerExtras.jsx
import Image from "next/image";
import { GiSunflower } from "react-icons/gi";
import { SiBrandfolder } from "react-icons/si";
export default function ExtraSection() {



  return (
    <div className="container mx-auto max-w-8xl  px-4 py-10 space-y-12 mt-20">

      {/* ── Summer Care Tips ── */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
            <GiSunflower className="text-orange-400 text-3xl" /> Summer Care Tips
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Stay fresh and healthy this summer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
     
            <div
              className="bg-orange-100 border border-orange-300 rounded-2xl p-5 hover:shadow-md transition"
               >
              <div className=" mb-3"> <Image src="/assets/drop.jpg"
                                               alt="waterimage"
                                               width={50}
                                               height={60} /> </div>
              <h3 className="font-bold text-gray-800 text-2xl mb-1">Moisturize Daily</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Use SPF 30+ sunscreen every morning, even on cloudy days.</p>
            </div>
             <div
              className="bg-orange-100 border border-orange-300 rounded-2xl p-5 hover:shadow-md transition"
               >
              <div className=" mb-3"> <Image src="/assets/moste.jpg"
                                               alt="waterimage"
                                              width={60}
                                               height={60} /> </div>
              <h3 className="font-bold text-gray-800 text-2xl mb-1">Stay Hydrated</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Drink at least 8 glasses of water daily to beat the summer heat.</p>
            </div>
             <div
              className="bg-orange-100 border border-orange-300 rounded-2xl p-5 hover:shadow-md transition"
               >
              <div className=" mb-3"> <Image src="/assets/veges.jpg"
                                               alt="waterimage"
                                               width={60}
                                               height={60} /> </div>
              <h3 className="font-bold text-gray-800 text-2xl mb-1">Eat Light</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Prefer fruits, salads and cooling foods like cucumber and watermelon.</p>
            </div>
             <div
              className="bg-orange-100 border border-orange-300 rounded-2xl p-5 hover:shadow-2xl transition"
               >
              <div className=" mb-3"> <Image src="/assets/heat.jpg"
                                               alt="waterimage"
                                              width={50}
                                               height={50} /> </div>
              <h3 className="font-bold text-gray-800 text-2xl mb-1">Cover Up</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Wear hats and light cotton clothes to protect from direct sunlight.</p>
            </div>
    
        </div>
      </section>

      {/* ── Top Brands ── */}
      <section>
        <div className="mb-6  mt-25">
          <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
            <SiBrandfolder /> Top Brands
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Trusted names for your summer essentials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
            <div className=" border  rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer  bg-blue-100 border: border-blue-300" 
            >
              <div className=" mb-3 "><Image   src="/assets/nivea.jpg"
                                               alt="waterimage"
                                               width={50}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
            Nivea
              </h3>
              <span className="text-xs mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
          Skincare Expert
              </span>
            </div>
             <div className="  rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer bg-yellow-100 border border-yellow-300" 
            >
              <div className=" mb-3"><Image src="/assets/sunsilk.jpg"
                                               alt="waterimage"
                                               width={50}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
       Sunsilk
              </h3>
              <span className="text-xs  mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
        Hair Care
              </span>
            </div>
             <div className="  rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer bg-green-100 border border-green-300"
            >
              <div className=" mb-3"><Image src="/assets/parachut.jpg"
                                               alt="waterimage"
                                               width={50}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
       Parachute
              </h3>
              <span className="text-xs  mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
       Natural Oils
              </span>
            </div>
             <div className="   rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer  bg-sky-100 border border-sky-300"
            >
              <div className=" mb-3"><Image src="/assets/vaseline.jpg"
                                               alt="waterimage"
                                               width={50}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
          Vaseline
              </h3>
              <span className="text-xs mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
         Skin Healing
              </span>
            </div>

            
      
        </div>
      </section>

    </div>
  );
}