'use client'
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
   <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 mt-10 pt-10 ">

  <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14">

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center sm:text-left">

      {/* Contact */}
      <div>
        <h2 className="text-white text-lg font-semibold mb-5">
          📩 Contact Info
        </h2>

        <div className="space-y-2 text-sm text-gray-400">
          <p>✉️ support@suncart.com</p>
          <p>📞 +880 1602-514628</p>
          <p>📍 Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Social */}
      <div className="flex flex-col items-center sm:items-start">
        <h2 className="text-white text-lg font-semibold mb-5">
          🌐 Follow Us
        </h2>

        <div className="flex gap-4 text-xl">
          <a href="#" className="hover:text-blue-500 transition transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-sky-400 transition transform hover:scale-110">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-pink-500 transition transform hover:scale-110">
            <FaInstagram />
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-4">
          Stay connected with us for updates ✨
        </p>
      </div>

      {/* Privacy */}
      <div>
        <h2 className="text-white text-lg font-semibold mb-5">
          🔒 Privacy Policy
        </h2>

        <p className="text-sm text-gray-400 leading-6 mb-4">
          We respect your privacy. Your data is protected with strong security standards.
        </p>

        <Link
          href="/privacy"
          className="inline-block text-orange-400 hover:text-orange-300 text-sm font-medium transition"
        >
          Read More →
        </Link>
      </div>

    </div>
  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-800 text-center py-5 text-sm text-gray-500">
    © {new Date().getFullYear()} <span className="text-white font-medium">SunCart</span>. All rights reserved.
  </div>

</footer>
  );
};

export default Footer;