'use client'
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">

          {/* Contact Info */}
          <div className="pl-0 lg:pl-20">
            <h2 className="text-white text-lg font-semibold mb-4 ">
              Contact Info
            </h2>
            <p className="mb-1">Email: support@suncart.com</p>
            <p className="mb-1">Phone: +880 1602-514628</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>

          {/* Social Links */}
          <div className="pl-0 md:pl-0 lg:pl-60">
            <h2 className="text-white text-lg font-semibold mb-4 pl-3">
              Follow Us
            </h2>

            <div className="flex justify-center sm:justify-start gap-3 pl-2 text-xl">
              <a href="#" className="hover:text-orange-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-orange-500 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="pl-0 md:pl-0 lg:pl-40">
            <h2 className="text-white text-lg font-semibold mb-4">
              Privacy Policy
            </h2>

            <p className="text-sm leading-6 mb-3">
              We respect your privacy. Your data is safe and secure with us.
            </p>

            <Link
              href="/privacy"
              className="text-orange-400 hover:underline text-sm"
            >
              Read More →
            </Link>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} SunCart. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;