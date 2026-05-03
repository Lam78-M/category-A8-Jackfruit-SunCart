// SummerSaleBanner.jsx

import ExtraSection from "@/components/ExtraSection";
import Image from "next/image";
import { GiFire } from "react-icons/gi";
import { TbMarquee } from "react-icons/tb";

export default function SummerSaleBanner() {
  const products = [
    { src: "/assets/sunglass.jpg", label: "Sunglasses", discount: "50% OFF" },
    { src: "/assets/cap.jpg", label: "Caps", discount: "40% OFF" },
    { src: "/assets/sunsreen.jpg", label: "Sunscreen", discount: "35% OFF" },
    { src: "/assets/umbrella2.jpg", label: "Umbrella", discount: "45% OFF" },
  ];

  return (
    <>
      <section className="w-full bg-gradient-to-br from-amber-50 via-orange-100 to-amber-100 py-14 px-6 mt-3 relative overflow-hidden">

        {/* Background decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-yellow-300/20 rounded-full pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-60 h-60 bg-orange-400/10 rounded-full pointer-events-none" />

        <div className="animate__animated animate__bounceInRight animate_slow   max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

          {/* Left — Promo Card */}
          <div
            className="relative rounded-3xl px-10 py-12 flex flex-col justify-center overflow-hidden shrink-0 w-full lg:w-[320px]"
            style={{
              background: "linear-gradient(145deg, #FF6B00, #FF8C00, #FFA500)",
              boxShadow: "0 24px 60px rgba(220,80,0,0.30), 0 4px 16px rgba(0,0,0,0.10)",
            }}
          >
            {/* Texture overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)",
              }}
            />
            {/* Glow circle */}
            <div className="absolute -top-14 -right-14 w-52 h-52 rounded-full bg-white/10 pointer-events-none" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/20 border border-white/20 rounded-full px-4 py-1.5 mb-7 w-fit">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="text-white/90 text-[11px] font-semibold uppercase tracking-widest">
                Hot Deals · Limited Time
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-5xl font-black leading-none text-white mb-1">
              Summer
              <br />
              <span className="text-yellow-300">Sale</span>
            </h2>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-7 mt-1">
              Exclusive Seasonal Offers
            </p>

            <div className="h-px bg-white/20 mb-6" />

            {/* Discount */}
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

            {/* CTA */}
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

          {/* Right — Product Cards */}
         

        </div> 
      </section>

   
      <div className=" mt-10 p-4 bg-pink-500">
         <div className="container mx-auto grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-4 flex-1 w-full">
            {products.map((p) => (
              <div
                key={p.label}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group"
              >
                <div className="relative h-[220px] w-full">
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {p.discount}
                  </span>
                </div>
                <div className="px-3 py-3 text-center">
                  <p className="text-xs font-semibold text-gray-700">{p.label}</p>
                </div>
              </div>
            ))}
          </div>
      </div>

      <ExtraSection />
    </>
  );
}