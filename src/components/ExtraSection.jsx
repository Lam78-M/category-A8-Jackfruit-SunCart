// SummerExtras.jsx
import Image from "next/image";
import { GiSunflower } from "react-icons/gi";
import { SiBrandfolder } from "react-icons/si";
import 'animate.css';
export default function ExtraSection() {



  return (
    <div className="container mx-auto max-w-8xl  px-4 py-10 space-y-12 mt-30">

     

{/* ── Summer Care Tips ── */}
<section
  className="relative overflow-hidden rounded-3xl px-8 py-12 mt-30"
  style={{ background: "linear-gradient(160deg, #fffbeb 0%, #fef9f0 40%, #f0fdf4 100%)" }}>

  {/* decorative blobs */}
  <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, #fde68a44, transparent 70%)" }}/>
  <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, #bbf7d044, transparent 70%)" }}/>

  {/* Header */}
  <div className="mb-10 relative z-10">
    <h2 className="text-4xl font-extrabold text-stone-900 flex items-center gap-3"
      style={{ fontFamily: "'Playfair Display', serif" }}>
      <GiSunflower className="text-orange-500 text-5xl" /> Summer Care Tips
    </h2>
    <div className="w-14 h-1 rounded-full mt-3"
      style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)" }}/>
    <p className="text-base text-stone-500 mt-2 tracking-wide">
      Stay fresh and healthy this summer
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">

    {/* Card 1 — Pink */}
    <div className="bg-pink-50 border border-pink-200 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl shadow-pink-100 transition-all duration-300 relative">
      <span className="absolute top-3 right-3 bg-pink-100 text-pink-700 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center z-10">01</span>
      <div className="mb-3 flex justify-center items-center">
        <Image src="/assets/nataliya-melnychuk-I-6Ap7JXHq8-unsplash.jpg"
          alt="moisturize" width={300} height={500} className="rounded-t-2xl w-full object-cover"/>
      </div>
      <div className="px-5 pb-5">
        <h3 className="font-bold text-stone-900 text-xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>Moisturize Daily</h3>
        <p className="text-[13.5px] text-gray-500 leading-relaxed">
          Use SPF 30+ sunscreen every morning, even on cloudy days.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="w-2 h-2 rounded-full bg-pink-400"/>
          <span className="text-xs font-medium text-pink-600">Skin Care</span>
        </div>
      </div>
    </div>

    {/* Card 2 — Blue */}
    <div className="bg-blue-50 border border-blue-200 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl shadow-blue-100 transition-all duration-300 relative">
      <span className="absolute top-3 right-3 bg-blue-100 text-blue-700 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center z-10">02</span>
      <div className="mb-3 flex justify-center items-center">
        <Image src="/assets/kobu-agency-TWIRIAizZFU-unsplash.jpg"
          alt="hydrate" width={300} height={300} className="rounded-t-2xl w-full object-cover"/>
      </div>
      <div className="px-5 pb-5">
        <h3 className="font-bold text-stone-900 text-xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>Stay Hydrated</h3>
        <p className="text-[13.5px] text-gray-500 leading-relaxed">
          Drink at least 8 glasses of water daily to beat the summer heat.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="w-2 h-2 rounded-full bg-blue-400"/>
          <span className="text-xs font-medium text-blue-600">Wellness</span>
        </div>
      </div>
    </div>

    {/* Card 3 — Green */}
    <div className="bg-green-50 border border-green-200 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-xl shadow-green-100 transition-all duration-300 relative">
      <span className="absolute top-3 right-3 bg-green-100 text-green-700 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center z-10">03</span>
      <div className="mb-3 flex justify-center items-center">
        <Image src="/assets/iulia-topan-g5tnCHIU5ks-unsplash.jpg"
          alt="eat light" width={300} height={300} className="rounded-t-2xl w-full object-cover"/>
      </div>
      <div className="px-5 pb-5">
        <h3 className="font-bold text-stone-900 text-xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>Eat Light</h3>
        <p className="text-[13.5px] text-gray-500 leading-relaxed">
          Prefer fruits, salads and cooling foods like cucumber and watermelon.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="w-2 h-2 rounded-full bg-green-400"/>
          <span className="text-xs font-medium text-green-600">Nutrition</span>
        </div>
      </div>
    </div>

    {/* Card 4 — Yellow */}
    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-2xl shadow-yellow-100 transition-all duration-300 relative">
      <span className="absolute top-3 right-3 bg-yellow-100 text-yellow-700 text-xs font-semibold w-8 h-8 rounded-full flex items-center justify-center z-10">04</span>
      <div className="mb-3 flex justify-center items-center">
        <Image src="/assets/moonstarious-project-wl2TODALiAY-unsplash.jpg"
          alt="cover up" width={300} height={300} className="rounded-t-2xl w-full object-cover"/>
      </div>
      <div className="px-5 pb-5">
        <h3 className="font-bold text-stone-900 text-xl mb-2"
          style={{ fontFamily: "'Playfair Display', serif" }}>Cover Up</h3>
        <p className="text-[13.5px] text-gray-500 leading-relaxed">
          Wear hats and light cotton clothes to protect from direct sunlight.
        </p>
        <div className="flex items-center gap-2 mt-3">
          <span className="w-2 h-2 rounded-full bg-yellow-400"/>
          <span className="text-xs font-medium text-yellow-600">Protection</span>
        </div>
      </div>
    </div>

  </div>
</section>
      {/* ── Top Brands ── */}
   
<section className="relative overflow-hidden rounded-3xl px-8 py-10 mt-25"
  style={{ background: "linear-gradient(135deg, #f0f9ff 0%, #fefce8 50%, #f0fdf4 100%)" }}>

  {/* decorative blob */}
  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
    style={{ background: "radial-gradient(circle, #fde68a33, transparent 70%)" }} />

  {/* Header */}
  <div className="mb-8 relative z-10">
    <h2 className="text-3xl font-extrabold text-stone-900 flex items-center gap-3"
      style={{ fontFamily: "'Playfair Display', serif" }}>
      <span className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
        style={{ background: "linear-gradient(135deg, #f97316, #eab308)" }}>
        <SiBrandfolder />
      </span>
      Top Brands
    </h2>
    <div className="w-12 h-[3px] rounded-full mt-3"
      style={{ background: "linear-gradient(90deg, #f97316, #fbbf24)" }} />
    <p className="text-sm text-stone-500 mt-2 tracking-wide">
      Trusted names for your summer essentials
    </p>
  </div>

  {/* Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">

    {/* Card 1 — Nivea */}
    <div className="relative bg-white border-[1.5px] border-blue-200 rounded-2xl p-6
      flex flex-col items-center text-center cursor-pointer
      hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-100
      transition-all duration-300 overflow-hidden group">
      <span className="absolute top-3 left-3 text-[10px] font-semibold text-gray-400 tracking-widest">01</span>
      <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-blue-100 text-blue-700
        flex items-center justify-center text-[10px] font-bold">✓</span>
      <div className="w-20 h-20 rounded-2xl  bg-white shadow-sm border border-blue-300 flex items-center justify-center mb-4">
        <Image src="/assets/nivea.jpg" alt="Nivea" width={60} height={60} className="object-contain" />
      </div>
      <h3 className="font-bold text-stone-900 text-lg mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>Nivea</h3>
      <span className="text-[11px] font-medium px-3 py-1 rounded-full
        bg-blue-100 text-blue-800 border border-blue-200 tracking-wide">
        Skincare Expert
      </span>
    </div>

    {/* Card 2 — Sunsilk */}
    <div className="relative bg-white border-[1.5px] border-yellow-200 rounded-2xl p-6
      flex flex-col items-center text-center cursor-pointer
      hover:-translate-y-1.5 hover:shadow-xl hover:shadow-yellow-100
      transition-all duration-300 overflow-hidden">
      <span className="absolute top-3 left-3 text-[10px] font-semibold text-gray-400 tracking-widest">02</span>
      <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-yellow-100 text-yellow-700
        flex items-center justify-center text-[10px] font-bold">✓</span>
      <div className="w-20 h-20 rounded-2xl  bg-white shadow-sm border border-yellow-300 flex items-center justify-center mb-4">
        <Image src="/assets/sunsilk.jpg" alt="Sunsilk" width={60} height={60} className="object-contain" />
      </div>
      <h3 className="font-bold text-stone-900 text-lg mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>Sunsilk</h3>
      <span className="text-[11px] font-medium px-3 py-1 rounded-full
        bg-yellow-100 text-yellow-800 border border-yellow-200 tracking-wide">
        Hair Care
      </span>
    </div>

    {/* Card 3 — Parachute */}
    <div className="relative bg-white border-[1.5px] border-green-200 rounded-2xl p-6
      flex flex-col items-center text-center cursor-pointer
      hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-100
      transition-all duration-300 overflow-hidden">
      <span className="absolute top-3 left-3 text-[10px] font-semibold text-gray-400 tracking-widest">03</span>
      <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-green-100 text-green-700
        flex items-center justify-center text-[10px] font-bold">✓</span>
      <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-green-300 flex items-center justify-center mb-4">
        <Image src="/assets/parachut.jpg" alt="Parachute" width={60} height={60} className="object-contain" />
      </div>
      <h3 className="font-bold text-stone-900 text-lg mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>Parachute</h3>
      <span className="text-[11px] font-medium px-3 py-1 rounded-full
        bg-green-100 text-green-800 border border-green-200 tracking-wide">
        Natural Oils
      </span>
    </div>

    {/* Card 4 — Vaseline */}
    <div className="relative bg-white border-[1.5px] border-sky-200 rounded-2xl p-6
      flex flex-col items-center text-center cursor-pointer
      hover:-translate-y-1.5 hover:shadow-xl hover:shadow-sky-100
      transition-all duration-300 overflow-hidden">
      <span className="absolute top-3 left-3 text-[10px] font-semibold text-gray-400 tracking-widest">04</span>
      <span className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full bg-sky-100 text-sky-700
        flex items-center justify-center text-[10px] font-bold">✓</span>
      <div className="w-20 h-20 rounded-2xl bg-white shadow-sm border border-blue-300  flex items-center justify-center mb-4">
        <Image src="/assets/vaseline.jpg" alt="Vaseline" width={60} height={60} className="object-contain" />
      </div>
      <h3 className="font-bold text-stone-900 text-lg mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}>Vaseline</h3>
      <span className="text-[11px] font-medium px-3 py-1 rounded-full
        bg-sky-100 text-sky-800 border border-sky-200 tracking-wide">
        Skin Healing
      </span>
    </div>

  </div>
</section>
    </div>
  );
}