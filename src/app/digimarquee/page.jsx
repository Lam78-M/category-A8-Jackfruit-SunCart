import React from 'react';
import Marquee from 'react-fast-marquee';

const DigiMarqee = () => {
    return (
             <div className='mt-30 mb-10'>

                  <Marquee className=''>
                <div className="w-full overflow-hidden py-3  
     bg-black
shadow-lg border border-white/40">

  <div className="flex gap-6 animate-marquee px-4">

    {[
      ["😎", "SunShield UV Sunglasses", "Protect your eyes in style"],
      ["👕", "Breeze Cotton Oversized T-Shirt", "Lightweight summer comfort"],
      ["🌊", "Ocean Mist Body Spray", "Fresh ocean vibe all day"],
      ["☀️", "Summer Glow Sunscreen SPF 50", "Skin protection + glow"],
      ["🌬️", "CoolWave Linen Shirt", "Stay cool in heat"],
      ["🏖️", "Beach Vibe Flip Flops", "Walk with summer freedom"],
      ["💦", "Aqua Fresh Face Mist", "Instant hydration boost"],
      ["🧢", "SunGlow Straw Hat", "Classic summer fashion"],
      ["🩳", "ChillFit Summer Shorts", "Relaxed street summer look"],
      ["💧", "HydraCool Water Bottle", "Stay refreshed always"],
    ].map((item, i) => (
      <div
        key={i}
        className="min-w-[300px] p-3 rounded-2xl
        bg-white backdrop-blur-2xl
        border border-white/50
        shadow-md hover:shadow-2xl
        transition-all duration-300
        hover:-translate-y-1 hover:scale-105
        flex flex-col gap-1"
      >
        <div className="flex items-center gap-2 text-xl">
          <span>{item[0]}</span>
          <span className="font-semibold text-gray-800 text-sm">
            {item[1]}
          </span>
        </div>

        <p className="text-xs text-gray-500 pl-7">
          {item[2]}
        </p>
      </div>
    ))}

  </div>
</div>
           
                       </Marquee>
             </div>
    );
};

export default DigiMarqee;