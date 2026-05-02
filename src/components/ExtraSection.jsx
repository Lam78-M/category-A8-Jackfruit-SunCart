// SummerExtras.jsx
import Image from "next/image";
import { GiSunflower } from "react-icons/gi";
import { SiBrandfolder } from "react-icons/si";
import 'animate.css';
export default function ExtraSection() {



  return (
    <div className="container mx-auto max-w-8xl  px-4 py-10 space-y-12 mt-30">

      {/* ── Summer Care Tips ── */}
      <section>
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 flex items-center gap-2">
            <GiSunflower className="text-orange-500 text-5xl" /> Summer Care Tips
          </h2>
          <p className="text-lg text-gray-800 mt-1">
            Stay fresh and healthy this summer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
     
            <div
              className="bg-pink-50 border border-pink-500  rounded-2xl p-5 hover:shadow-xl shadow-pink-100 transition"
               >
              <div className=" mb-3 flex justify-center items-center">
                 <Image src="/assets/nataliya-melnychuk-I-6Ap7JXHq8-unsplash.jpg"
                                               alt="waterimage"
                                               width={300}
                                               height={500} className="rounded-t-2xl "/> </div>
              <h3 className="font-bold text-gray-800 text-3xl mb-1 animate__animated animate__lightSpeedInRight text-center sm:text-center md:text-left">Moisturize Daily</h3>
              <p className="text-[16px] text-gray-500 leading-relaxed">Use SPF 30+ sunscreen every morning, even on cloudy days.</p>
            </div>
             <div
              className="bg-blue-100 border border-blue-500 rounded-2xl p-5 hover:shadow-xl shadow-blue-100 transition"
               >
              <div className=" mb-3 flex justify-center items-center"> <Image src="/assets/kobu-agency-TWIRIAizZFU-unsplash.jpg"
                                               alt="waterimage"
                                              width={300}
                                               height={300} className="rounded-t-2xl " /> </div>
              <h3 className="font-bold text-gray-800 text-3xl mb-1 animate__animated animate__lightSpeedInRight text-center sm:text-center md:text-left">Stay Hydrated</h3>
              <p className="text-[16px] text-gray-500 leading-relaxed">Drink at least 8 glasses of water daily to beat the summer heat.</p>
            </div>
             <div
              className="bg-green-50 border border-green-500 rounded-2xl p-5 hover:shadow-xl shadow-green-100 transition"
               >
              <div className=" mb-3 flex justify-center items-center"> <Image src="/assets/iulia-topan-g5tnCHIU5ks-unsplash.jpg"
                                               alt="waterimage"
                                               width={300}
                                               height={300} className="rounded-t-2xl" /> </div>
              <h3 className="font-bold text-gray-800 text-3xl mb-1 animate__animated animate__lightSpeedInRight text-center sm:text-center md:text-left">Eat Light</h3>
              <p className="text-[16px] text-gray-500 leading-relaxed">Prefer fruits, salads and cooling foods like cucumber and watermelon.</p>
            </div>
             <div
              className="bg-yellow-50 border border-yellow-500 rounded-2xl p-5 hover:shadow-2xl shadow-yellow-100 transition"
               >
             <div className=" mb-3 flex justify-center items-center ">
                                              <Image 
                                                src="/assets/moonstarious-project-wl2TODALiAY-unsplash.jpg"
                                                alt="waterimage"
                                                width={300}
                                                height={300}
                                                className="rounded-t-2xl"
                                              />
                                               </div>
              <h3 className="font-bold text-gray-800 text-3xl mb-1 animate__animated animate__lightSpeedInRight text-center sm:text-center md:text-left">Cover Up</h3>
              <p className="text-[16px] text-gray-500 leading-relaxed">Wear hats and light cotton clothes to protect from direct sunlight.</p>
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
        
            <div className=" border  rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer  bg-blue-100 border: border-blue-500" 
            >
              <div className=" mb-3 "><Image   src="/assets/nivea.jpg"
                                               alt="waterimage"
                                               width={100}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
            Nivea
              </h3>
              <span className="text-xs mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
          Skincare Expert
              </span>
            </div>
             <div className="  rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer bg-yellow-100 border border-yellow-500" 
            >
              <div className=" mb-3"><Image src="/assets/sunsilk.jpg"
                                               alt="waterimage"
                                               width={100}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
       Sunsilk
              </h3>
              <span className="text-xs  mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
        Hair Care
              </span>
            </div>
             <div className="  rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer bg-green-100 border border-green-500"
            >
              <div className=" mb-3"><Image src="/assets/parachut.jpg"
                                               alt="waterimage"
                                               width={100}
                                               height={40} />   </div>
              <h3 className="font-extrabold text-lg">
       Parachute
              </h3>
              <span className="text-xs  mt-1 bg-white px-3 py-1 rounded-full border text-sky-700">
       Natural Oils
              </span>
            </div>
             <div className="   rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition duration-200 cursor-pointer  bg-sky-100 border border-sky-500"
            >
              <div className=" mb-3"><Image src="/assets/vaseline.jpg"
                                               alt="waterimage"
                                               width={100}
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