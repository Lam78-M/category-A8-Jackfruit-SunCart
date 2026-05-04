// SummerSaleBanner.jsx

import ExtraSection from "@/components/ExtraSection";
import Image from "next/image";

import PopularCard from "@/components/PopularCard";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";

export default function SummerSaleBanner() {
  return (
    <>
      <section className="w-full bg-gradient-to-br from-amber-50 via-orange-100 to-amber-100 py-14 px-6 mt-3 mb-50 relative overflow-hidden">

        
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-300/20 rounded-full pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-orange-400/10 rounded-full pointer-events-none" />

        <div className="animate__animated animate__bounceInRight animate_slow   max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">


          <div
            className="relative rounded-3xl px-10 py-12 flex flex-col justify-center overflow-hidden shrink-0 w-full lg:w-[320px]"
            style={{
              background: "linear-gradient(145deg, #FF6B00, #FF8C00, #FFA500)",
              boxShadow: "0 24px 60px rgba(220,80,0,0.30), 0 4px 16px rgba(0,0,0,0.10)",
            }}
          >
 
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
              }}
            />

            <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full bg-white/10 pointer-events-none" />

   
            <div className="inline-flex items-center gap-2 bg-black/20 border border-white/20 rounded-full px-4 py-1.5 mb-7 w-fit">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-white/90 text-[11px] font-semibold uppercase tracking-widest">
                Hot Deals · Limited Time
              </span>
            </div>


            <h2 className="text-5xl font-black leading-none text-white mb-1">
              Summer
              <br />
              <span className="text-yellow-300">Sale</span>
            </h2>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-7 mt-1">
              Exclusive Seasonal Offers
            </p>

            <div className="h-px bg-white/20 mb-6" />

     
            <div className="flex items-end gap-3 mb-2">
              <span className="text-7xl font-black text-yellow-300 leading-none" style={{ letterSpacing: "-3px" }}>
                50%
              </span>
              <div className="pb-2 flex flex-col gap-0.5">
                <span className="text-white text-xl font-bold uppercase tracking-wider">OFF</span>
                <span className="text-white/60 text-[11px] font-medium uppercase tracking-wider">
                  Selected items
                </span>
              </div>
            </div>

            <p className="text-white/55 text-xs mb-8">
              Offer ends{" "}
              <span className="text-white/85 font-semibold">June 30, 2026</span> · No code needed
            </p>

    
            <div className="flex flex-col gap-3">
              <button className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 font-bold text-sm rounded-full px-6 py-3 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-150 shadow-md w-fit">
                Shop Now →
              </button>
              <div className="flex items-center gap-1.5 text-white/65 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Free shipping included
              </div>
            </div>
          </div>


         

<div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">

 
  <div className="row-span-2 relative rounded-2xl  bg-blue-300 overflow-hidden h-[330px]">
    <Image src="/assets/tavia-b-5_1JUIOjXKU-unsplash.jpg" alt="beach" fill className="object-cover" />
    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
      STYLE
    </span>
  </div>

 
  <div className="relative rounded-2xl bg-blue-300 overflow-hidden h-[160px]">
    <Image src="/assets/they-callme-zeus-Mfwla4WVG6s-unsplash.jpg" alt="sunglasses" fill className="object-cover" />
    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
     SUN
    </span>
  </div>

 
  <div className="relative rounded-2xl bg-blue-300 overflow-hidden h-[160px]">
    <Image src="/assets/jason-pischke-xVSyLQxEprw-unsplash.jpg" alt="ice cream" fill className="object-cover" />
    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
      BEACH
    </span>
  </div>


<div className="col-span-2 relative rounded-2xl overflow-hidden h-[150px] flex items-center justify-center">


  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-300" />


  <div className="absolute inset-0 backdrop-blur-[6px] bg-white/10" />


  <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />

  
  <div className="relative z-10 text-center px-4">
    <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight drop-shadow-lg flex  items-center gap-3">
      Your Summer <BsFillEmojiSunglassesFill className="text-yellow-300" />
   
      Our Services
    </h2>

    <p className="text-white text-sm mt-1 tracking-wide">
      Stay cool, shop smart & enjoy the season
    </p>
  </div>

</div>


  <div className="relative rounded-2xl bg-blue-300 overflow-hidden  h-[160px]">
    <Image src="/assets/warren-umoh-Me7y3DYfIBE-unsplash.jpg" alt="flip flops" fill className="object-cover" />
    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
      VIBES
    </span>
  </div>


  <div className="relative rounded-2xl bg-blue-300 overflow-hidden  h-[160px]">
    <Image src="/assets/roman-davayposmotrim-8Xzslh4ku4E-unsplash.jpg" alt="sunscreen" fill className="object-cover" />
    <span className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
      UP COMMING
    </span>
  </div>

</div>
        </div> 
      </section>

      <PopularCard></PopularCard>
       
      <ExtraSection />
    </>
  );
}