import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaArrowRight,
} from "react-icons/fa6";

const Newsletter2 = () => {
  return (
    <>
    <section className="bg-[#0B0B0B] py-28 border-t border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="bg-gradient-to-r from-[#141414] to-[#1B1B1B] rounded-[35px] p-10 md:p-16 border border-[#2A2A2A] shadow-2xl"
        >

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left Content */}
            <div>

              <p className="uppercase tracking-[6px] text-[#C9A227] text-sm mb-5">
                Stay Connected
              </p>

              <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight">
                Never Miss Our
                <span className="block text-[#C9A227]">
                  Beauty Tips & Offers
                </span>
              </h2>

              <p className="text-gray-400 mt-6 leading-8">
                Subscribe to receive exclusive beauty tips, hairstyle
                inspiration, skincare advice, salon promotions, and the latest
                trends directly in your inbox.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-10">

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1F1F1F] hover:bg-[#C9A227] hover:text-black transition flex items-center justify-center text-white"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1F1F1F] hover:bg-[#C9A227] hover:text-black transition flex items-center justify-center text-white"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#1F1F1F] hover:bg-[#C9A227] hover:text-black transition flex items-center justify-center text-white"
                >
                  <FaXTwitter />
                </a>

              </div>

            </div>

            {/* Right Content */}
            <div>

              <form className="space-y-5">

                <div className="relative">

                  <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C9A227]" />

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full bg-[#1F1F1F] border border-[#333] rounded-full py-5 pl-14 pr-5 text-white outline-none focus:border-[#C9A227]"
                  />

                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C9A227] hover:bg-yellow-600 transition-all duration-300 rounded-full py-5 text-black font-bold flex items-center justify-center gap-3"
                >
                  Subscribe Now
                  <FaArrowRight />
                </button>

              </form>

              {/* Extra CTA */}

              <div className="mt-8 text-center">

                <p className="text-gray-400 mb-5">
                  Ready for your next salon appointment?
                </p>

                <Link
                  to="/booking"
                  className="inline-flex items-center gap-3 border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-black transition-all duration-300 px-8 py-4 rounded-full font-semibold"
                >
                  Book Appointment
                  <FaArrowRight />
                </Link>

              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
    </>
  );
};

export default Newsletter2;