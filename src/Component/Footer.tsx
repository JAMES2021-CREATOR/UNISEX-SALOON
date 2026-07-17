import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">
            Luxe Salon
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Experience luxury beauty, premium grooming, and exceptional
            customer service from our team of professional stylists.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#" className="hover:text-yellow-500">
              <FaFacebookF size={20} />
            </a>

            <a href="#" className="hover:text-yellow-500">
              <FaInstagram size={20} />
            </a>

            <a href="#" className="hover:text-yellow-500">
              <FaXTwitter size={20} />
            </a>

            <a href="#" className="hover:text-yellow-500">
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-4">

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/services">Services</Link></li>

            <li><Link to="/gallery">Gallery</Link></li>

            <li><Link to="/team">Our Team</Link></li>

            <li><Link to="/booking">Book Appointment</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Our Services
          </h3>

          <ul className="space-y-4">

            <li>
              <Link to="/services">
                Hair Styling
              </Link>
            </li>

            <li>
              <Link to="/services">
                Hair Coloring
              </Link>
            </li>

            <li>
              <Link to="/services">
                Makeup
              </Link>
            </li>

            <li>
              <Link to="/services">
                Nails
              </Link>
            </li>

            <li>
              <Link to="/services">
                Barbing
              </Link>
            </li>

          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Contact Us
          </h3>

          <p className="text-gray-400">
            📍 24 Admiralty Way, Lagos
          </p>

          <p className="text-gray-400 mt-4">
            📞 +234 800 123 4567
          </p>

          <p className="text-gray-400 mt-4">
            ✉️ info@luxesalon.com
          </p>

          <Link
            to="/booking"
            className="inline-block mt-8 bg-yellow-500 px-6 py-3 rounded-full text-black font-semibold hover:bg-yellow-400 transition"
          >
            Book Now
          </Link>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Luxe Salon. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy">Privacy Policy</Link>

            <Link to="/terms">Terms & Conditions</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;  