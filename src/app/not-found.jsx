import Link from "next/link";
import { FaFastBackward } from "react-icons/fa";
import { FaRegFaceSmileWink } from "react-icons/fa6";
import { IoMdPartlySunny } from "react-icons/io";
import { LuTreePalm } from "react-icons/lu";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-400 via-yellow-200 to-orange-400 px-4">

      <div className="text-center backdrop-blur-md bg-white/30 p-10 rounded-3xl shadow-2xl max-w-lg w-full">

        {/* 🔥 Big 404 */}
        <h1 className="text-9xl font-extrabold text-red-700 drop-shadow-lg animate-pulse">
          404
        </h1>

        {/* ✨ Message */}
        <h2 className="text-2xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-600 mt-2 text-sm">
          The page youre looking for doesnt exist or has been moved.
        </p>

        {/* 🚀 Button */}
        <Link href="/">
          <div className="flex justify-center">
  <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300 flex items-center gap-2">
    <FaFastBackward /> Back to Home
  </button>
</div>
        </Link>

        {/* 🌟 Extra Decoration */}
        <div className="mt-8 text-5xl animate-bounce flex items-center gap-2 justify-center">
         <IoMdPartlySunny className="text-6xl text-orange-400" /><LuTreePalm className="text-green-700" /><FaRegFaceSmileWink className="text-orange-500" />
        </div>

      </div>
    </div>
  );
}
